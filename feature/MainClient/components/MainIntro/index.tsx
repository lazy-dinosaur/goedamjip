"use client";
import ComponentWrapper from "@/component/ComponentWrapper";
import {
	Dispatch,
	SetStateAction,
	useCallback,
	useEffect,
	useLayoutEffect,
	useRef,
	useState,
} from "react";
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

interface MainIntroProps {
	introScript: ProcessedSegment[];
	changeStage: () => void;
	needsRecoverState: [boolean, Dispatch<SetStateAction<boolean>>];
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
];

export default function MainIntro({
	introScript,
	needsRecoverState,
	changeStage,
	currentSegment,
	onSegmentChange,
}: MainIntroProps) {
	const segmentCounts = introScript.length;
	const [userIntereacted, setUserInterected] = useState(true);
	const [needsRecover, setNeedRecover] = needsRecoverState;

	const linesRef = useRef<Map<number, TextEffect>>(new Map());
	const chunksRef = useRef<Map<string, HTMLSpanElement>>(new Map());
	const pendingStopsRef = useRef<Set<PendingStop>>(new Set());
	const visualEffectsRef = useRef<HTMLDivElement>(null);
	const splitInstancesMap = useRef<Map<HTMLElement, SplitText>>(new Map());

	const imageContainerRef = useRef<HTMLDivElement>(null);
	const screenRef = useRef<HTMLDivElement>(null);
	const maskRef = useRef<HTMLDivElement>(null);
	const userInteractionTimeoutRef = useRef<NodeJS.Timeout | null>(null);
	const recoveryTimeoutRef = useRef<NodeJS.Timeout | null>(null);

	const onClick = useCallback(async () => {
		setUserInterected(true);
		let completedCount = 0;
		const totalLines = linesRef.current.size;

		linesRef.current.forEach((effect, lineIdx) => {
			const tl = effect.getTimeline();
			const originalTimeScale = tl.timeScale();
			tl.timeScale(2);

			tl.eventCallback("onReverseComplete", () => {
				tl.timeScale(originalTimeScale);
				const lineChunks = introScript[currentSegment].lines[lineIdx].chunks;
				lineChunks.forEach((_, chunkIdx) => {
					const element = chunksRef.current.get(
						`line${lineIdx}-chunk${chunkIdx}`,
					);
					if (element) {
						gsap.set(element, { opacity: 0 });
					}
				});

				completedCount++;
				if (completedCount === totalLines) {
					if (currentSegment == segmentCounts - 1) {
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
						Promise.all(cleanupPromises).then(() => {
							pendingStopsRef.current.clear();
							setTimeout(() => changeStage(), 300);
						});
					} else {
						const currentSegmentId = introScript[currentSegment]?.id;
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
	}, [
		segmentCounts,
		currentSegment,
		changeStage,
		introScript,
		onSegmentChange,
	]);

	const playSounds = (soundEffects: SoundEffect[]) => {
		soundEffects.forEach((effect) => {
			if (effect.status == "start") {
				audioManager.play(effect.tag, { loop: true });
			} else if (effect.status == "stop") {
				pendingStopsRef.current.add({ id: effect.tag, type: "audio" });
			} else if (effect.loop) {
				audioManager.play(effect.tag, { loop: true });
				pendingStopsRef.current.add({ id: effect.tag, type: "audio" });
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
	const cleanUpEffects = (recovery?: boolean) => {
		splitInstancesMap.current.forEach((instance) => {
			instance.revert();
		});
		splitInstancesMap.current.clear();
		linesRef.current.forEach((effect) => effect.clearAll());
		chunksRef.current.forEach((element) => {
			if (element) {
				gsap.killTweensOf(element);
				gsap.set(element, { clearProps: "all" });
			}
		});

		if (recovery) {
			audioManager.stopOnShots(0);
			pendingStopsRef.current.forEach((effect) => {
				if (effect.type == "audio") {
					audioManager.stop(effect.id);
				} else if (effect.type == "visual") {
					visualEffectManager.stop(effect.id);
				}
			});
		} else {
			audioManager.stopOnShots();
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
		chunksRef.current.clear();
	};

	const segmentCleanup = (recovery?: boolean) => {
		if (recovery) {
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
	};

	useLayoutEffect(() => {
		// 순차적으로 라인 실행하는 async 함수 (Promise를 반환하도록 수정)
		const playLinesSequentially = () => {
			return new Promise<void>(async (resolveAll) => {
				const lineCount = linesRef.current.size;

				for (const [lineIdx, lineTextEffect] of linesRef.current.entries()) {
					const lineData = introScript[currentSegment].lines[lineIdx];
					if (!lineData) continue;

					const { image, soundEffects, visualEffects } =
						lineData.preLineEffects;

					if (
						image?.url &&
						imageContainerRef.current &&
						maskRef.current &&
						screenRef.current
					) {
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

					// 각 라인 애니메이션이 끝날 때까지 기다립니다.
					await new Promise<void>((resolveLine) => {
						const tl = lineTextEffect.getTimeline();
						tl.eventCallback("onComplete", () => {
							if (lineIdx === lineCount - 1) {
								userInteractionTimeoutRef.current = setTimeout(() => {
									setUserInterected(false);
								}, 800);
							}
							setTimeout(resolveLine, 100); // 다음 라인으로 넘어가기 전 딜레이
						});
						lineTextEffect.play();
					});
				}
				resolveAll(); // 모든 라인 재생 완료
			});
		};

		const initSegment = async () => {
			if (visualEffectsRef.current && !needsRecover) {
				visualEffectManager.init(visualEffectsRef.current);
			}

			// 1. 배경 이미지와 세그먼트 효과를 먼저 실행
			const currentSegmentData = introScript[currentSegment];
			if (
				currentSegmentData.background?.url &&
				imageContainerRef.current &&
				maskRef.current &&
				screenRef.current
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

			// 2. 위 과정이 끝난 후, 라인 애니메이션 시작
			linesRef.current.clear();
			currentSegmentData.lines.forEach((line, lineIdx) => {
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
							if (splitInstancesMap.current.has(ref)) {
								splitInstancesMap.current.get(ref)?.revert();
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
									gsap.set(ref, { opacity: 1 });
									self.words.forEach((word) => {
										gsap.set(word, { display: "inline-block" });
										word.innerHTML = word.innerHTML + "&nbsp;";
									});
									const split = gsap.from(self.words, {
										duration: 0.8,
										y: 100,
										autoAlpha: 0,
										opacity: 0,
										stagger: 0.1,
									});
									lineTextEffect.getTimeline().add(split, "-=0.3");
									const { soundEffects, visualEffects, textEffects } = chunk;
									lineTextEffect.getTimeline().call(
										() => {
											if (lineTextEffect.getTimeline().reversed()) return;
											if (soundEffects && soundEffects.length > 0)
												playSounds(soundEffects);
											if (visualEffects && visualEffects.length > 0)
												playVisuals(visualEffects);
										},
										undefined,
										"<0.2",
									);
									if (textEffects && textEffects.length > 0) {
										playTexts(textEffects, lineTextEffect, ref);
									}
								},
							});
							splitInstancesMap.current.set(ref, splitInstance);
						} else if (currentRevealEffect == "TYPEWRITER") {
							if (splitInstancesMap.current.has(ref)) {
								splitInstancesMap.current.get(ref)?.revert();
								splitInstancesMap.current.delete(ref);
							}
							lineTextEffect.addEffect("TYPEWRITER", ref);
							const { soundEffects, visualEffects, textEffects } = chunk;
							lineTextEffect.getTimeline().call(
								() => {
									if (lineTextEffect.getTimeline().reversed()) return;
									if (soundEffects && soundEffects.length > 0)
										playSounds(soundEffects);
									if (visualEffects && visualEffects.length > 0)
										playVisuals(visualEffects);
								},
								undefined,
								"<0.2",
							);
							if (textEffects && textEffects.length > 0) {
								playTexts(textEffects, lineTextEffect, ref);
							}
						} else if (currentRevealEffect == "TEXT_SCRAMBLE_GLITCH") {
							if (splitInstancesMap.current.has(ref)) {
								splitInstancesMap.current.get(ref)?.revert();
								splitInstancesMap.current.delete(ref);
							}
							lineTextEffect.addEffect("TEXT_SCRAMBLE_GLITCH", ref);
							const { soundEffects, visualEffects, textEffects } = chunk;
							lineTextEffect.getTimeline().call(
								() => {
									if (lineTextEffect.getTimeline().reversed()) return;
									if (soundEffects && soundEffects.length > 0)
										playSounds(soundEffects);
									if (visualEffects && visualEffects.length > 0)
										playVisuals(visualEffects);
								},
								undefined,
								"<0.2",
							);
							if (textEffects && textEffects.length > 0) {
								playTexts(textEffects, lineTextEffect, ref);
							}
						}
					}
				});
				linesRef.current.set(lineIdx, lineTextEffect);
			});

			await playLinesSequentially();
		};

		const recoverySegment = async () => {
			if (visualEffectsRef.current) {
				visualEffectManager.init(visualEffectsRef.current);
			}
			const currentSegmentData = introScript[currentSegment].inheritedEffects;
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
			recoveryTimeoutRef.current = setTimeout(() => setNeedRecover(false), 800);
		};

		needsRecover ? recoverInit() : initSegment();

		return () => {
			segmentCleanup();
		};
	}, [currentSegment, introScript, needsRecover]);

	const isMobile =
		typeof window !== "undefined" &&
		/iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

	useEffect(() => {
		if (!isMobile) return;
		const handleVisibilityChange = () => {
			segmentCleanup(true);
		};
		document.addEventListener("visibilitychange", handleVisibilityChange);
		return () => {
			document.removeEventListener("visibilitychange", handleVisibilityChange);
		};
	}, [isMobile]);

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
				ref={screenRef}
				className="max-w-4xl flex flex-col items-center justify-center space-y-5"
			>
				{introScript[currentSegment].lines.map((line, lineIdx) => (
					<div
						key={`seg${currentSegment}-line-${lineIdx}`}
						className="relative w-full md:text-center text-korean"
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
								className="text-neutral-300 text-2xl md:text-3xl font-bm-hanna-11 text-korean whitespace-pre-wrap opacity-0 align-baseline"
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
