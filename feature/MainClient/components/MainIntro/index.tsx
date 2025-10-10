"use client";
import { Segment } from "@/app/introScript";
import ComponentWrapper from "@/component/ComponentWrapper";
import { useCallback, useLayoutEffect, useRef, useState } from "react";
import TextEffect from "@/lib/text/textEffect";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ContinueMark } from "@/component/ContinueMark";
import { useGSAP } from "@gsap/react";
import audioManager from "@/lib/audio/audioManager";
import visualEffectManager from "@/lib/visual/visualEffectManager";
interface MainIntroProps {
	introScript: Segment[];
	changeStage: () => void;
}
type PendingStop = {
	type: "audio" | "visual" | "image";
	id: string;
};

export default function MainIntro({
	introScript,
	changeStage,
}: MainIntroProps) {
	const segmentCounts = introScript.length;
	const [currentSegment, setCurrentSegment] = useState(0);
	const [userIntereacted, setUserInterected] = useState(true);
	const linesRef = useRef<Map<number, TextEffect>>(new Map());
	const chunksRef = useRef<Map<string, HTMLSpanElement>>(new Map());
	const continueRef = useRef<HTMLDivElement>(null);
	const pendingStopsRef = useRef<Set<PendingStop>>(new Set());
	const visualEffectsRef = useRef<HTMLDivElement>(null);
	const splitInstancesMap = useRef<Map<HTMLElement, SplitText>>(new Map());

	const tl = gsap.timeline();

	useGSAP(() => {
		if (userIntereacted && continueRef.current) {
			// continue 숨기기
			gsap.killTweensOf(continueRef.current);
			gsap.to(continueRef.current, { opacity: 0, duration: 0.2 });
		} else if (!userIntereacted && continueRef.current) {
			// continue 보여주기 + 애니메이션
			tl.add(gsap.set(continueRef.current, { opacity: 0, y: 5 }));
			tl.add(
				gsap.fromTo(continueRef.current, { opacity: 0 }, { opacity: 1, y: 0 }),
			);
			tl.add(
				gsap.to(continueRef.current, {
					opacity: 0.5,
					y: 5,
					ease: "power2.in",
					yoyo: true,
					repeat: -1,
				}),
			);
		}
	}, [userIntereacted, continueRef]);

	const onClick = useCallback(async () => {
		setUserInterected(true);
		audioManager.stopOnShots();
		let completedCount = 0;
		const totalLines = linesRef.current.size;

		linesRef.current.forEach((effect, lineIdx) => {
			const tl = effect.getTimeline();

			// 원래 timeScale 저장
			const originalTimeScale = tl.timeScale();

			// reverse는 2배 속도로
			tl.timeScale(2);

			tl.eventCallback("onReverseComplete", () => {
				// reverse 완료 후 원래 속도로 복구
				tl.timeScale(originalTimeScale);

				// 이 라인에 속한 chunk들의 opacity를 0으로 설정
				const lineChunks = introScript[currentSegment].lines[lineIdx].chunks;
				lineChunks.forEach((chunk, chunkIdx) => {
					const element = chunksRef.current.get(
						`line${lineIdx}-chunk${chunkIdx}`,
					);
					if (element) {
						gsap.set(element, { opacity: 0 });
					}
				});

				completedCount++;

				// 모든 라인의 reverse가 완료되면
				if (completedCount === totalLines) {
					if (currentSegment == segmentCounts - 1) {
						// 마지막 세그먼트: 모든 효과를 부드럽게 정리 후 changeStage
						const cleanupPromises = Array.from(pendingStopsRef.current).map(
							(effect) => {
								if (effect.type == "audio") {
									return new Promise<void>((resolve) => {
										audioManager.fade(effect.id, 1, 0, 500);
										setTimeout(() => {
											audioManager.stop(effect.id);
											resolve();
										}, 500);
									});
								} else if (effect.type == "visual") {
									return new Promise<void>((resolve) => {
										visualEffectManager.stop(effect.id);
										setTimeout(() => resolve(), 1000);
									});
								}
								return Promise.resolve();
							},
						);

						// 모든 cleanup이 완료되면 changeStage 호출
						Promise.all(cleanupPromises).then(() => {
							pendingStopsRef.current.clear();
							setTimeout(() => changeStage(), 300);
						});
					} else {
						setCurrentSegment((prev) =>
							segmentCounts - 1 > prev ? prev + 1 : prev,
						);
					}
				}
			});

			effect.reverse();
		});
	}, [segmentCounts, currentSegment, changeStage]);

	const revealEffects = [
		"FADE_IN",
		"TYPEWRITER",
		"RISE_FROM_BOTTOM",
		"TEXT_SCRAMBLE_GLITCH",
	];

	useLayoutEffect(() => {
		const currentLinesRef = linesRef.current; // effect 시작 시점의 값 저장
		const currentChunksRef = new Map(chunksRef.current); // chunksRef의 현재 상태를 복사

		// visualEffectManager 초기화
		if (visualEffectsRef.current) {
			visualEffectManager.init(visualEffectsRef.current);
		}

		const { soundEffects, visualEffects } =
			introScript[currentSegment].segmentEffects;
		soundEffects.forEach((effect) => {
			if (effect.status == "start") {
				audioManager.play(effect.tag, { loop: true });
			} else if (effect.status == "stop") {
				pendingStopsRef.current.add({ id: effect.tag, type: "audio" }); // 저장만
			} else {
				audioManager.play(effect.tag, { repeat: effect.repeat, loop: false });
			}
		});

		visualEffects.forEach((effect) => {
			if (typeof effect == "object" && effect.status === "start") {
				visualEffectManager.play(effect.tag, { loop: true });
			} else if (typeof effect == "object" && effect.status === "stop") {
				pendingStopsRef.current.add({ id: effect.tag, type: "visual" });
			} else {
				visualEffectManager.play(
					typeof effect == "object" ? effect.tag : effect,
					{ loop: true },
				);
				pendingStopsRef.current.add({
					id: typeof effect == "object" ? effect.tag : effect,
					type: "visual",
				});
			}
		});

		// 이전 세그먼트 청크들 opacity 초기화
		// Step 1: chunksRef 등록 완료 대기
		setTimeout(() => {
			currentLinesRef.clear();

			// Step 2: linesRef에 TextEffect 생성 & 청크 추가
			introScript[currentSegment].lines.forEach((line, lineIdx) => {
				const lineTextEffect = new TextEffect();
				const getRevealEffect = (effects: string[]): string | undefined => {
					return effects.find((effect) => revealEffects.includes(effect));
				};

				line.chunks.forEach((chunk, chunkIdx) => {
					const ref = chunksRef.current.get(`line${lineIdx}-chunk${chunkIdx}`);
					if (ref) {
						const currentRevealEffect = getRevealEffect(
							chunk.textEffects ?? [],
						);
						if (
							!currentRevealEffect ||
							currentRevealEffect == "FADE_IN" ||
							currentRevealEffect == "RISE_FROM_BOTTOM"
						) {
							// 기존 SplitText가 있으면 revert
							if (splitInstancesMap.current.has(ref)) {
								const existingInstance = splitInstancesMap.current.get(ref);
								existingInstance?.revert();
								splitInstancesMap.current.delete(ref);
							}

							const splitInstance = SplitText.create(ref, {
								type: "lines, words",
								mask: "words",
								linesClass: "line++",
								wordsClass: "word++",
								autoSplit: true,
								tag: "span",
								onSplit(self) {
									// 부모 요소 opacity 복원
									gsap.set(ref, { opacity: 1 });
									// inline-block으로 설정해야 y transform이 동작함
									self.words.forEach((word, index) => {
										gsap.set(word, { display: "inline-block" });
										// 마지막 단어가 아니면 공백 추가
										word.innerHTML = word.innerHTML + "&nbsp;";
										// if (index < self.words.length - 1) {
										// }
									});

									const split = gsap.from(self.words, {
										duration: 0.8,
										y: 100,
										autoAlpha: 0,
										opacity: 0,
										stagger: 0.1,
									});

									lineTextEffect.getTimeline().add(split, "-=0.3");

									lineTextEffect.getTimeline().call(
										() => {
											if (chunk.soundEffects && chunk.soundEffects.length > 0) {
												// reverse 중일 때는 사운드 재생 안 함
												if (lineTextEffect.getTimeline().reversed()) return;

												chunk.soundEffects?.forEach((effect) => {
													if (effect.status == "start") {
														audioManager.play(effect.tag, { loop: true });
													} else if (effect.status == "stop") {
														pendingStopsRef.current.add({
															id: effect.tag,
															type: "audio",
														}); // 저장만
													} else if (effect.loop == true) {
														audioManager.play(effect.tag, { loop: true });
														pendingStopsRef.current.add({
															id: effect.tag,
															type: "audio",
														}); // 저장만
													} else {
														audioManager.play(effect.tag, {
															loop: false,
															repeat: effect.repeat,
														});
													}
												});
											}

											if (
												chunk.visualEffects &&
												chunk.visualEffects.length > 0
											) {
												chunk.visualEffects.forEach((effect) => {
													if (
														typeof effect == "object" &&
														effect.status === "start"
													) {
														visualEffectManager.play(effect.tag, {
															loop: true,
														});
													} else if (
														typeof effect == "object" &&
														effect.status === "stop"
													) {
														pendingStopsRef.current.add({
															id: effect.tag,
															type: "visual",
														});
													} else {
														visualEffectManager.play(
															typeof effect == "object" ? effect.tag : effect,
															{ loop: true },
														);
														pendingStopsRef.current.add({
															id:
																typeof effect == "object" ? effect.tag : effect,
															type: "visual",
														});
													}
												});
											}
										},
										undefined,
										"<0.2",
									); // ">" = 이전 애니메이션 끝
									if (chunk.textEffects && chunk.textEffects.length > 0) {
										chunk.textEffects.forEach((effectName) => {
											if (!revealEffects.includes(effectName)) {
												lineTextEffect.addEffect(
													effectName,
													ref,
													undefined,
													"-=0.3",
												);
											}
										});
									}
								},
							});
							splitInstancesMap.current.set(ref, splitInstance);
						} else if (currentRevealEffect == "TYPEWRITER") {
							// 기존 SplitText가 있으면 revert
							if (splitInstancesMap.current.has(ref)) {
								const existingInstance = splitInstancesMap.current.get(ref);
								existingInstance?.revert();
								splitInstancesMap.current.delete(ref);
							}

							lineTextEffect.addEffect("TYPEWRITER", ref);

							lineTextEffect.getTimeline().call(
								() => {
									if (chunk.soundEffects && chunk.soundEffects.length > 0) {
										// reverse 중일 때는 사운드 재생 안 함
										if (lineTextEffect.getTimeline().reversed()) return;

										chunk.soundEffects?.forEach((effect) => {
											if (effect.status == "start") {
												audioManager.play(effect.tag, { loop: true });
											} else if (effect.status == "stop") {
												pendingStopsRef.current.add({
													id: effect.tag,
													type: "audio",
												}); // 저장만
											} else if (effect.loop == true) {
												audioManager.play(effect.tag, { loop: true });
												pendingStopsRef.current.add({
													id: effect.tag,
													type: "audio",
												}); // 저장만
											} else {
												audioManager.play(effect.tag, {
													loop: false,
													repeat: effect.repeat,
												});
											}
										});
									}

									if (chunk.visualEffects && chunk.visualEffects.length > 0) {
										chunk.visualEffects.forEach((effect) => {
											if (
												typeof effect == "object" &&
												effect.status === "start"
											) {
												visualEffectManager.play(effect.tag, { loop: true });
											} else if (
												typeof effect == "object" &&
												effect.status === "stop"
											) {
												pendingStopsRef.current.add({
													id: effect.tag,
													type: "visual",
												});
											} else {
												visualEffectManager.play(
													typeof effect == "object" ? effect.tag : effect,
													{ loop: true },
												);

												pendingStopsRef.current.add({
													id: typeof effect == "object" ? effect.tag : effect,
													type: "visual",
												});
											}
										});
									}
								},
								undefined,
								"<0.2",
							); // ">" = 이전 애니메이션 끝

							if (chunk.textEffects && chunk.textEffects.length > 0) {
								chunk.textEffects.forEach((effectName) => {
									if (!revealEffects.includes(effectName)) {
										lineTextEffect.addEffect(
											effectName,
											ref,
											undefined,
											"-=0.3",
										);
									}
								});
							}
						} else if (currentRevealEffect == "TEXT_SCRAMBLE_GLITCH") {
							// 기존 SplitText가 있으면 revert
							if (splitInstancesMap.current.has(ref)) {
								const existingInstance = splitInstancesMap.current.get(ref);
								existingInstance?.revert();
								splitInstancesMap.current.delete(ref);
							}

							lineTextEffect.addEffect("TEXT_SCRAMBLE_GLITCH", ref);

							lineTextEffect.getTimeline().call(
								() => {
									if (chunk.soundEffects && chunk.soundEffects.length > 0) {
										if (lineTextEffect.getTimeline().reversed()) return;

										chunk.soundEffects?.forEach((effect) => {
											if (effect.status == "start") {
												audioManager.play(effect.tag, { loop: true });
											} else if (effect.status == "stop") {
												pendingStopsRef.current.add({
													id: effect.tag,
													type: "audio",
												});
											} else if (effect.loop == true) {
												audioManager.play(effect.tag, { loop: true });
												pendingStopsRef.current.add({
													id: effect.tag,
													type: "audio",
												}); // 저장만
											} else {
												audioManager.play(effect.tag, {
													loop: false,
													repeat: effect.repeat,
												});
											}
										});
									}
									if (chunk.visualEffects && chunk.visualEffects.length > 0) {
										chunk.visualEffects.forEach((effect) => {
											if (
												typeof effect == "object" &&
												effect.status === "start"
											) {
												visualEffectManager.play(effect.tag, { loop: true });
											} else if (
												typeof effect == "object" &&
												effect.status === "stop"
											) {
												pendingStopsRef.current.add({
													id: effect.tag,
													type: "visual",
												});
											} else {
												visualEffectManager.play(
													typeof effect == "object" ? effect.tag : effect,
													{ loop: true },
												);

												pendingStopsRef.current.add({
													id: typeof effect == "object" ? effect.tag : effect,
													type: "visual",
												});
											}
										});
									}
								},
								undefined,
								"<0.2",
							);

							if (chunk.textEffects && chunk.textEffects.length > 0) {
								chunk.textEffects.forEach((effectName) => {
									if (!revealEffects.includes(effectName)) {
										lineTextEffect.addEffect(
											effectName,
											ref,
											undefined,
											"-=0.3",
										);
									}
								});
							}
						}
					}
				});

				currentLinesRef.set(lineIdx, lineTextEffect);
			});

			// Step 3: linesRef 순차 재생
			let delay = 0;
			const lineCount = currentLinesRef.size;

			currentLinesRef.forEach((lineTextEffect, lineIdx) => {
				setTimeout(() => {
					const { soundEffects, visualEffects } =
						introScript[currentSegment].lines[lineIdx].preLineEffects;

					soundEffects.forEach((effect) => {
						if (effect.status == "start") {
							audioManager.play(effect.tag, { loop: true });
						} else if (effect.status == "stop") {
							pendingStopsRef.current.add({ id: effect.tag, type: "audio" }); // 저장만
						} else {
							audioManager.play(effect.tag, {
								repeat: effect.repeat,
								loop: false,
							});
						}
					});

					visualEffects.forEach((effect) => {
						if (typeof effect == "object" && effect.status === "start") {
							visualEffectManager.play(effect.tag, { loop: true });
						} else if (typeof effect == "object" && effect.status === "stop") {
							pendingStopsRef.current.add({ id: effect.tag, type: "visual" });
						} else {
							visualEffectManager.play(
								typeof effect == "object" ? effect.tag : effect,
								{ loop: true },
							);

							pendingStopsRef.current.add({
								id: typeof effect == "object" ? effect.tag : effect,
								type: "visual",
							});
						}
					});
					lineTextEffect.play();
					if (lineIdx == lineCount - 1) {
						lineTextEffect.getTimeline().eventCallback("onComplete", () => {
							setTimeout(() => {
								setUserInterected(false);
							}, 300);
						});
					}
				}, delay);

				const lineDuration = lineTextEffect.getTimeline().duration() * 1000;
				delay += lineDuration + 100; // lineInterval
			});
		}, 0);

		return () => {
			// SplitText 인스턴스들 정리
			splitInstancesMap.current.forEach((instance, element) => {
				instance.revert();
			});
			splitInstancesMap.current.clear();

			// 모든 효과 정리
			currentLinesRef.forEach((effect) => effect.clearAll());

			// 모든 청크 요소의 GSAP 애니메이션 정리
			currentChunksRef.forEach((element) => {
				if (element) {
					gsap.killTweensOf(element);
					gsap.set(element, { clearProps: "all" });
				}
			});

			// 오디오/비주얼 효과 정리
			pendingStopsRef.current.forEach((effect) => {
				if (effect.type == "audio") {
					audioManager.fade(effect.id, 1, 0, 500);
					setTimeout(() => audioManager.stop(effect.id), 500);
				} else if (effect.type == "visual") {
					visualEffectManager.stop(effect.id);
				}
			});
			pendingStopsRef.current.clear();

			// chunksRef 초기화
			chunksRef.current.clear();
		};
	}, [currentSegment, introScript]);

	return (
		<ComponentWrapper
			className={!userIntereacted ? "cursor-pointer" : "default"}
			onClick={!userIntereacted ? onClick : undefined}
			style={{ overflow: "hidden" }}
		>
			{/* Visual Effects Container */}
			<div ref={visualEffectsRef} />

			<div className="max-w-4xl flex flex-col items-center justify-center space-y-5">
				{introScript[currentSegment].lines.map((line, lineIdx) => (
					<div key={`seg${currentSegment}-line-${lineIdx}`} className="w-full">
						{line.chunks.map((chunk, chunkIdx) => (
							<span
								ref={(el) => {
									if (el)
										chunksRef.current.set(
											`line${lineIdx}-chunk${chunkIdx}`,
											el,
										);
								}}
								key={`seg${currentSegment}-line${lineIdx}-chunk${chunkIdx}`}
								className="text-neutral-300 text-2xl md:text-3xl font-bm-hanna-11 text-korean whitespace-pre-wrap opacity-0 align-baseline"
								style={{ opacity: 0 }}
							>
								{chunk.content}
							</span>
						))}
					</div>
				))}
				<ContinueMark ref={continueRef} />
			</div>
		</ComponentWrapper>
	);
}
