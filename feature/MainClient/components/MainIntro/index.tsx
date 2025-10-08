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

		linesRef.current.forEach((effect) => {
			const tl = effect.getTimeline();

			// 원래 timeScale 저장
			const originalTimeScale = tl.timeScale();

			// reverse는 2배 속도로
			tl.timeScale(2);

			tl.eventCallback("onReverseComplete", () => {
				// reverse 완료 후 원래 속도로 복구
				tl.timeScale(originalTimeScale);

				completedCount++;

				// 모든 라인의 reverse가 완료되면
				if (completedCount === totalLines) {
					if (currentSegment == segmentCounts - 1) {
						changeStage();
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

	useLayoutEffect(() => {
		const currentLinesRef = linesRef.current; // effect 시작 시점의 값 저장
		const currentChunksRef = new Map(chunksRef.current); // chunksRef의 현재 상태를 복사
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
			if (effect.status === "start") {
				// VISUAL_VIGNETTE start
				console.log(`Visual effect start: ${effect.tag}`);
			} else if (effect.status === "stop") {
				// VISUAL_VIGNETTE stop
				console.log(`Visual effect stop: ${effect.tag}`);
				pendingStopsRef.current.add({ id: effect.tag, type: "visual" }); // 저장만
			}
		});

		// 이전 세그먼트 청크들 opacity 초기화
		// Step 1: chunksRef 등록 완료 대기
		setTimeout(() => {
			currentLinesRef.clear();

			// Step 2: linesRef에 TextEffect 생성 & 청크 추가
			introScript[currentSegment].lines.forEach((line, lineIdx) => {
				const lineTextEffect = new TextEffect();

				line.chunks.forEach((chunk, chunkIdx) => {
					const ref = chunksRef.current.get(`line${lineIdx}-chunk${chunkIdx}`);
					if (ref) {
						SplitText.create(ref, {
							type: "lines, words",
							mask: "lines",
							linesClass: "line++",
							autoSplit: true,
							tag: "span",
							onSplit(self) {
								// inline-block으로 설정해야 y transform이 동작함
								gsap.set(self.words, {
									display: "inline-block",
								});
								const split = gsap.from(self.words, {
									duration: 0.8,
									y: 100,
									autoAlpha: 0,
									opacity: 0,
									stagger: 0.1,
								});

								if (chunk.soundEffects && chunk.soundEffects.length > 0) {
									lineTextEffect.getTimeline().call(() => {
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
											} else {
												audioManager.play(effect.tag, {
													loop: false,
													repeat: effect.repeat,
												});
											}
										});
									}, undefined); // ">" = 이전 애니메이션 끝
								}

								lineTextEffect.getTimeline().add(split, "-=0.3");
								if (chunk.textEffects && chunk.textEffects.length > 0) {
									chunk.textEffects.forEach((effectName) => {
										lineTextEffect.addEffect(
											effectName,
											ref,
											undefined,
											"-=0.8",
										);
									});
								}
							},
						});
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
						// SCREEN_FLICKER 등
					});
					lineTextEffect.play();
					if (lineIdx == lineCount - 1) {
						lineTextEffect.getTimeline().eventCallback("onComplete", () => {
							setTimeout(() => {
								setUserInterected(false);
							}, 150);
						});
					}
				}, delay);

				const lineDuration = lineTextEffect.getTimeline().duration() * 1000;
				delay += lineDuration + 100; // lineInterval
			});
		}, 0);

		return () => {
			// 모든 효과 정리
			currentLinesRef.forEach((effect) => effect.clearAll());

			// 모든 청크 요소의 GSAP 애니메이션 정리
			currentChunksRef.forEach((element) => {
				if (element) {
					gsap.killTweensOf(element);
					gsap.set(element, { clearProps: "all" });
				}
			});

			// 오디오 효과 정리
			pendingStopsRef.current.forEach((effect) => {
				if (effect.type == "audio") {
					audioManager.fade(effect.id, 1, 0, 500);
					setTimeout(() => audioManager.stop(effect.id), 500);
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
		>
			<div className="max-w-4xl">
				{introScript[currentSegment].lines.map((line, lineIdx) => (
					<div key={`seg${currentSegment}-line-${lineIdx}`} className="">
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
								className="text-neutral-300 text-2xl md:text-3xl font-bm-hanna-11 leading-relaxed text-center text-korean whitespace-pre-wrap"
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
