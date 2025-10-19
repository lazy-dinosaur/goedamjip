"use client";
import ComponentWrapper from "@/component/ComponentWrapper";
import { useCallback, useLayoutEffect, useRef, useState } from "react";
import TextEffect from "@/lib/text/textEffect";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ContinueMark } from "@/component/ContinueMark";
import audioManager from "@/lib/audio/audioManager";
import visualEffectManager from "@/lib/visual/visualEffectManager";
import imageManager from "@/lib/image/imageManager";
import {
	ProcessedSegment,
	SoundEffect,
	VisualEffect,
} from "@/types/script.types";
import { cn } from "@/util/styles";
interface MainIntroProps {
	script: ProcessedSegment[];
	changeStage: () => void;
	needsRecover: boolean;
	onRecover: () => void;
	currentSegment: number;
	onSegmentChange: (newSegment: number) => void;
}
type PendingStop = {
	type: "audio" | "visual" | "image";
	id: string;
};

const revealEffects = [
	"FADE_IN",
	"TYPEWRITER",
	"RISE_FROM_BOTTOM",
	"TEXT_SCRAMBLE_GLITCH",
	"INK_REVEAL",
];

export default function ScriptPlayer({
	script,
	needsRecover,
	onRecover,
	changeStage,
	currentSegment,
	onSegmentChange,
}: MainIntroProps) {
	const segmentCounts = script.length;
	const [userIntereacted, setUserInterected] = useState(true);

	const linesRef = useRef<Map<number, TextEffect>>(new Map());
	const chunksRef = useRef<Map<string, HTMLSpanElement>>(new Map());
	const pendingStopsRef = useRef<Set<PendingStop>>(new Set());
	const visualEffectsRef = useRef<HTMLDivElement>(null);
	const splitInstancesMap = useRef<Map<HTMLElement, SplitText>>(new Map());

	const imageContainerRef = useRef<HTMLDivElement>(null);
	const maskRef = useRef<HTMLDivElement>(null);
	const userInteractionTimeoutRef = useRef<NodeJS.Timeout | null>(null);
	const recoveryTimeoutRef = useRef<NodeJS.Timeout | null>(null);

	const onClick = useCallback(async () => {
		setUserInterected(true);
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
				const lineChunks = script[currentSegment].lines[lineIdx].chunks;
				lineChunks.forEach((_, chunkIdx) => {
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
										setTimeout(() => resolve(), 500);
									});
								}
								return Promise.resolve();
							},
						);

						// 모든 cleanup이 완료되면 changeStage 호출
						Promise.all(cleanupPromises).then(() => {
							pendingStopsRef.current.clear();
							// 모든 매니저 정리 (혹시 빠진 것들 방지)
							audioManager.stopAllSound(500);
							visualEffectManager.stopAll();
							imageManager.clearAll();
							setTimeout(() => changeStage(), 300);
						});
					} else {
						// 현재 세그먼트가 끝날 때 해당 세그먼트의 이미지 정리
						const currentSegmentId = script[currentSegment]?.id;
						if (currentSegmentId) {
							imageManager.clearBySegment(currentSegmentId);
						}
						const nextSegment = currentSegment + 1;
						if (nextSegment < segmentCounts) {
							onSegmentChange(nextSegment);
						}
					}
				}
			});

			effect.reverse();
		});
	}, [segmentCounts, currentSegment, changeStage, script, onSegmentChange]);

	const playSounds = (soundEffects: SoundEffect[]) => {
		soundEffects.forEach((effect) => {
			if (effect.status == "start") {
				audioManager.play(effect.tag, { loop: true });
			} else if (effect.status == "stop") {
				pendingStopsRef.current.add({ id: effect.tag, type: "audio" }); // 저장만
			} else if (effect.loop) {
				audioManager.play(effect.tag, { loop: true });
				pendingStopsRef.current.add({ id: effect.tag, type: "audio" }); // 저장만
			} else {
				audioManager.play(effect.tag, { repeat: effect.repeat, loop: false });
			}
		});
	};
	const playVisuals = (visualEffects: VisualEffect[]) => {
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
	};
	const playTexts = (
		textEffects: string[],
		textEffectInstance: TextEffect,
		textContainer: HTMLSpanElement,
	) => {
		textEffects.forEach((effectName) => {
			if (!revealEffects.includes(effectName)) {
				textEffectInstance.addEffect(
					effectName,
					textContainer,
					undefined,
					"-=0.3",
				);
			}
		});
	};
	const cleanUpEffects = useCallback(
		(recovery?: boolean) => {
			splitInstancesMap.current.forEach((instance) => {
				instance.revert();
			});
			splitInstancesMap.current.clear();

			// 모든 효과 정리
			linesRef.current.forEach((effect) => effect.clearAll());

			// 모든 청크 요소의 GSAP 애니메이션 정리
			chunksRef.current.forEach((element) => {
				if (element) {
					gsap.killTweensOf(element);
					gsap.set(element, { clearProps: "all" });
				}
			});

			if (recovery) {
				audioManager.stopOnShots(0);
				// 오디오/비주얼 효과 정리
				pendingStopsRef.current.forEach((effect) => {
					if (effect.type == "audio") {
						audioManager.stop(effect.id);
					} else if (effect.type == "visual") {
						visualEffectManager.stop(effect.id);
					}
				});
			} else {
				audioManager.stopOnShots();
				// 오디오/비주얼 효과 정리
				pendingStopsRef.current.forEach((effect) => {
					if (effect.type == "audio") {
						audioManager.fade(effect.id, 1, 0, 500);
						setTimeout(() => audioManager.stop(effect.id), 500);
					} else if (effect.type == "visual") {
						visualEffectManager.stop(effect.id);
					}
				});
			}
			pendingStopsRef.current.clear();

			// chunksRef 초기화
			chunksRef.current.clear();
		},
		[splitInstancesMap, linesRef, chunksRef, pendingStopsRef],
	);

	const segmentCleanup = useCallback(
		(recovery?: boolean) => {
			// SplitText 인스턴스들 정리
			if (recovery) {
				// pending된 setTimeout들 취소
				if (userInteractionTimeoutRef.current) {
					clearTimeout(userInteractionTimeoutRef.current);
					userInteractionTimeoutRef.current = null;
				}
				if (recoveryTimeoutRef.current) {
					clearTimeout(recoveryTimeoutRef.current);
					recoveryTimeoutRef.current = null;
				}
				visualEffectManager.stopAll();
				imageManager.clearAll();
				setUserInterected(true);
			}

			cleanUpEffects(recovery);
		},
		[userInteractionTimeoutRef, recoveryTimeoutRef, cleanUpEffects],
	);

	useLayoutEffect(() => {
		const initSegment = async (recovery?: boolean) => {
			// visualEffectManager 초기화
			if (visualEffectsRef.current && !recovery) {
				visualEffectManager.init(visualEffectsRef.current);
			}

			// Background 이미지 먼저 처리 (await로 애니메이션 완료 대기)
			const currentSegmentData = script[currentSegment];

			if (
				currentSegmentData.background?.url &&
				imageContainerRef.current &&
				maskRef.current
			) {
				await imageManager.addImage(
					currentSegmentData.background.url,
					"background",
					imageContainerRef.current,
					maskRef.current,
					currentSegmentData.background.sustain_until,
				);
			}

			const { soundEffects, visualEffects } = currentSegmentData.segmentEffects;

			playSounds(soundEffects);
			playVisuals(visualEffects);

			// 이전 세그먼트 청크들 opacity 초기화
			// Step 1: chunksRef 등록 완료 대기
			setTimeout(() => {
				linesRef.current.clear();

				// Step 2: linesRef에 TextEffect 생성 & 청크 추가
				currentSegmentData.lines.forEach((line, lineIdx) => {
					const lineTextEffect = new TextEffect();
					const getRevealEffect = (effects: string[]): string | undefined => {
						return effects.find((effect) => revealEffects.includes(effect));
					};
					line.chunks.forEach((chunk, chunkIdx) => {
						const ref = chunksRef.current.get(
							`line${lineIdx}-chunk${chunkIdx}`,
						);
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
										self.words.forEach((word) => {
											gsap.set(word, {
												display: "inline-block",
												whiteSpace: "nowrap",
											});
											word.innerHTML = word.innerHTML + "&nbsp;";
										});

										const split = gsap.from(self.words, {
											duration: 0.8,
											y: 100,
											autoAlpha: 0,
											opacity: 0,
											stagger: 0.1,
										});

										const { soundEffects, visualEffects, textEffects } = chunk;

										lineTextEffect.getTimeline().call(
											() => {
												if (soundEffects && soundEffects.length > 0) {
													// reverse 중일 때는 사운드 재생 안 함
													if (lineTextEffect.getTimeline().reversed()) return;
													playSounds(soundEffects);
												}

												if (visualEffects && visualEffects.length > 0) {
													playVisuals(visualEffects);
												}
											},
											undefined,
											"<0.2",
										); // ">" = 이전 애니메이션 끝

										lineTextEffect.getTimeline().add(split, "-=0.3");
										if (textEffects && textEffects.length > 0) {
											playTexts(textEffects, lineTextEffect, ref);
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

								const { soundEffects, visualEffects, textEffects } = chunk;

								lineTextEffect.getTimeline().call(
									() => {
										if (soundEffects && soundEffects.length > 0) {
											// reverse 중일 때는 사운드 재생 안 함
											if (lineTextEffect.getTimeline().reversed()) return;

											playSounds(soundEffects);
										}

										if (visualEffects && visualEffects.length > 0) {
											playVisuals(visualEffects);
										}
									},
									undefined,
									"<0.2",
								); // ">" = 이전 애니메이션 끝

								lineTextEffect.addEffect("TYPEWRITER", ref);
								if (textEffects && textEffects.length > 0) {
									playTexts(textEffects, lineTextEffect, ref);
								}
							} else if (currentRevealEffect == "TEXT_SCRAMBLE_GLITCH") {
								// 기존 SplitText가 있으면 revert
								if (splitInstancesMap.current.has(ref)) {
									const existingInstance = splitInstancesMap.current.get(ref);
									existingInstance?.revert();
									splitInstancesMap.current.delete(ref);
								}

								const { soundEffects, visualEffects, textEffects } = chunk;

								lineTextEffect.getTimeline().call(
									() => {
										if (soundEffects && soundEffects.length > 0) {
											if (lineTextEffect.getTimeline().reversed()) return;
											playSounds(soundEffects);
										}
										if (visualEffects && visualEffects.length > 0) {
											playVisuals(visualEffects);
										}
									},
									undefined,
									"<0.2",
								);

								lineTextEffect.addEffect("TEXT_SCRAMBLE_GLITCH", ref);
								if (textEffects && textEffects.length > 0) {
									playTexts(textEffects, lineTextEffect, ref);
								}
							} else if (currentRevealEffect == "INK_REVEAL") {
								// 기존 SplitText가 있으면 revert
								if (splitInstancesMap.current.has(ref)) {
									const existingInstance = splitInstancesMap.current.get(ref);
									existingInstance?.revert();
									splitInstancesMap.current.delete(ref);
								}

								const { soundEffects, visualEffects, textEffects } = chunk;

								lineTextEffect.getTimeline().call(
									() => {
										if (soundEffects && soundEffects.length > 0) {
											if (lineTextEffect.getTimeline().reversed()) return;
											playSounds(soundEffects);
										}
										if (visualEffects && visualEffects.length > 0) {
											playVisuals(visualEffects);
										}
									},
									undefined,
									"<0.2",
								);

								lineTextEffect.addEffect("INK_REVEAL", ref);
								if (textEffects && textEffects.length > 0) {
									playTexts(textEffects, lineTextEffect, ref);
								}
							}
						}
					});

					linesRef.current.set(lineIdx, lineTextEffect);
				});

				// Step 3: linesRef 순차 재생
				const lineCount = linesRef.current.size;
				const lineInterval = 100;

				// 순차적으로 라인 실행하는 async 함수
				const playLinesSequentially = async () => {
					for (const [lineIdx, lineTextEffect] of linesRef.current.entries()) {
						const lineData = currentSegmentData.lines[lineIdx];
						if (!lineData) return; // 안전 체크

						const { image, soundEffects, visualEffects } =
							lineData.preLineEffects;

						// preLineEffects 이미지가 있으면 먼저 처리 (await로 대기)
						if (image?.url && imageContainerRef.current && maskRef.current) {
							await imageManager.addImage(
								image.url,
								image.type,
								imageContainerRef.current,
								maskRef.current,
								image.sustain_until,
							);
						}
						playSounds(soundEffects);
						playVisuals(visualEffects);

						// 라인 애니메이션 완료를 Promise로 대기
						await new Promise<void>((resolve) => {
							const tl = lineTextEffect.getTimeline();

							// 타임라인 완료 시 호출될 콜백
							tl.eventCallback("onComplete", () => {
								// 마지막 라인이면 사용자 인터랙션 가능하게 설정
								if (lineIdx == lineCount - 1) {
									userInteractionTimeoutRef.current = setTimeout(() => {
										setUserInterected(false);
									}, 800);
								}

								// lineInterval 후 다음 라인으로
								setTimeout(() => resolve(), lineInterval);
							});

							// 애니메이션 시작
							lineTextEffect.play();
						});
					}
				};

				playLinesSequentially();
			}, 0);
		};
		const recoverySegment = async () => {
			if (visualEffectsRef.current) {
				visualEffectManager.init(visualEffectsRef.current);
			}

			const currentSegmentData = script[currentSegment].inheritedEffects;
			if (currentSegmentData.images.length > 0) {
				const imagePromises = currentSegmentData.images.map((image) => {
					if (
						typeof image.url == "string" &&
						imageContainerRef.current &&
						maskRef.current
					) {
						return imageManager.addImage(
							image.url,
							image.type,
							imageContainerRef.current,
							maskRef.current,
							image.sustain_until,
						);
					}
					return Promise.resolve();
				});
				await Promise.all(imagePromises);
			}

			const { audio: soundEffects, visual: visualEffects } = currentSegmentData;
			playSounds(soundEffects);
			playVisuals(visualEffects);
		};

		const recoverInit = async () => {
			await recoverySegment();
			recoveryTimeoutRef.current = setTimeout(() => onRecover(), 800);
		};

		if (needsRecover) {
			segmentCleanup(true);
			recoverInit();
		} else {
			initSegment();
		}

		return () => {
			segmentCleanup();
		};
	}, [currentSegment, script, needsRecover, onRecover, segmentCleanup]);

	return (
		<ComponentWrapper
			className={!userIntereacted ? "cursor-pointer" : "default"}
			onClick={!userIntereacted ? onClick : undefined}
		>
			<div
				ref={imageContainerRef}
				className="absolute inset-0 pointer-events-none w-full h-full"
			/>
			<div
				ref={maskRef}
				className="absolute inset-0 pointer-events-none w-full h-full"
				style={{ zIndex: 60 }}
			/>
			<div
				ref={visualEffectsRef}
				className="absolute inset-0 pointer-events-none w-full h-full"
			/>
			<div
				className={cn(
					"max-w-screen w-fit lg:max-w-4xl flex flex-col items-center justify-center space-y-5",
				)}
			>
				{script[currentSegment].lines.map((line, lineIdx) => (
					<div
						key={`seg${currentSegment}-line-${lineIdx}`}
						className="relative w-full md:text-center text-center text-korean"
					>
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
								className="text-neutral-300 text-2xl md:text-3xl font-bm-hanna-11 text-korean whitespace-pre-wrap break-keep opacity-0 align-baseline"
								style={{ opacity: 0 }}
							>
								{chunk.content}
							</span>
						))}
					</div>
				))}
				<ContinueMark userIntereacted={userIntereacted} />
			</div>
		</ComponentWrapper>
	);
}
