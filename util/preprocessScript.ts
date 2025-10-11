// 전처리된 세그먼트 타입

import {
	Segment,
	ProcessedSegment,
	SoundEffect,
	VisualEffect,
	Image,
} from "@/types/script.types";

/**
 * 인트로 스크립트를 전처리하여 각 세그먼트가 시작될 때
 * 이미 실행 중이어야 할 효과들을 미리 계산합니다.
 */
export function preprocessScript(segments: Segment[]): ProcessedSegment[] {
	// 현재 지속 중인 효과들을 추적
	const sustainingAudio = new Map<string, SoundEffect>();
	const sustainingVisual = new Map<string, VisualEffect>();
	const sustainingImages = new Map<string, Image>();

	const processedSegments: ProcessedSegment[] = [];

	segments.forEach((segment, segmentIndex) => {
		// 1. 현재 세그먼트 시작 시점의 지속 효과들을 복사 (이전 세그먼트까지의 상태)
		const processedSegment: ProcessedSegment = {
			...segment,
			inheritedEffects: {
				audio: Array.from(sustainingAudio.values()),
				visual: Array.from(sustainingVisual.values()),
				images: Array.from(sustainingImages.values()),
			},
		};

		// 2. 세그먼트 레벨 효과 처리 (start는 추가, stop은 나중에 제거)
		segment.segmentEffects.soundEffects.forEach((effect) => {
			if (effect.status === "start") {
				// 지속 효과 시작 - Map에 저장
				sustainingAudio.set(effect.tag, {
					tag: effect.tag,
					status: effect.status,
					loop: true,
					repeat: effect.repeat,
				});
			} else if (effect.status === "stop") {
				// 지속 효과 종료 - Map에서 제거
				sustainingAudio.delete(effect.tag);
			}
			// status가 없는 경우는 일회성 효과이므로 무시
		});

		segment.segmentEffects.visualEffects.forEach((effect) => {
			const effectObj = typeof effect === "string" ? { tag: effect } : effect;

			if (effectObj.status === "start") {
				sustainingVisual.set(effectObj.tag, {
					tag: effectObj.tag,
					status: effectObj.status,
				});
			} else if (effectObj.status === "stop") {
				sustainingVisual.delete(effectObj.tag);
			} else if (!effectObj.status) {
				// status가 없으면 기본적으로 지속 효과로 처리
				sustainingVisual.set(effectObj.tag, {
					tag: effectObj.tag,
				});
			}
		});

		// 배경 이미지 처리
		if (segment.background?.url) {
			const imageKey = segment.background.url;

			// sustain_until이 있으면 해당 세그먼트까지 유지
			if (segment.background.sustain_until) {
				sustainingImages.set(imageKey, segment.background);
			}
		}

		// 라인별 효과 처리
		segment.lines.forEach((line) => {
			// preLineEffects 처리
			line.preLineEffects.soundEffects.forEach((effect) => {
				if (effect.status === "start") {
					sustainingAudio.set(effect.tag, {
						tag: effect.tag,
						status: effect.status,
						loop: true,
						repeat: effect.repeat,
					});
				} else if (effect.status === "stop") {
					sustainingAudio.delete(effect.tag);
				}
			});

			line.preLineEffects.visualEffects.forEach((effect) => {
				const effectObj = typeof effect === "string" ? { tag: effect } : effect;

				if (effectObj.status === "start") {
					sustainingVisual.set(effectObj.tag, {
						tag: effectObj.tag,
						status: effectObj.status,
					});
				} else if (effectObj.status === "stop") {
					sustainingVisual.delete(effectObj.tag);
				}
			});

			// preLineEffects 이미지 처리
			if (line.preLineEffects.image && line.preLineEffects.image.url) {
				const image = line.preLineEffects.image;
				const imageKey = image.url;

				if (imageKey) {
					sustainingImages.set(imageKey, image);
				}
			}

			// 청크별 효과 처리
			line.chunks.forEach((chunk) => {
				chunk.soundEffects?.forEach((effect) => {
					if (effect.status === "start") {
						sustainingAudio.set(effect.tag, {
							tag: effect.tag,
							status: effect.status,
							loop: effect.loop || true,
							repeat: effect.repeat,
						});
					} else if (effect.status === "stop") {
						sustainingAudio.delete(effect.tag);
					} else if (effect.loop === true) {
						// loop: true인 경우도 지속 효과로 처리
						sustainingAudio.set(effect.tag, {
							tag: effect.tag,
							loop: true,
							repeat: effect.repeat,
						});
					}
				});

				chunk.visualEffects?.forEach((effect) => {
					const effectObj =
						typeof effect === "string" ? { tag: effect } : effect;

					if (effectObj.status === "start") {
						sustainingVisual.set(effectObj.tag, {
							tag: effectObj.tag,
							status: effectObj.status,
						});
					} else if (effectObj.status === "stop") {
						sustainingVisual.delete(effectObj.tag);
					} else if (!effectObj.status) {
						// status가 없으면 기본적으로 지속 효과로 처리
						sustainingVisual.set(effectObj.tag, {
							tag: effectObj.tag,
						});
					}
				});
			});
		});

		processedSegments.push(processedSegment);

		// sustain_until 처리 - 세그먼트가 끝날 때 이미지 제거
		// 다음 세그먼트의 inheritedEffects에서는 제외됨
		Array.from(sustainingImages.entries()).forEach(([key, image]) => {
			if (image.sustain_until === segment.id) {
				sustainingImages.delete(key);
			}
		});
	});

	return processedSegments;
}

/**
 * 특정 세그먼트를 시작하기 전에 필요한 모든 효과를 초기화합니다.
 * 멀티태스킹 후 복귀나 세그먼트 점프 시 사용합니다.
 */
// export async function initializeSegmentEffects(
// 	segment: ProcessedSegment,
// 	audioManager: any,
// 	visualEffectManager: any,
// 	imageManager: any,
// 	imageContainerRef: HTMLDivElement | null,
// 	maskRef: HTMLDivElement | null,
// ) {
// 	// 1. 모든 현재 효과 정리
// 	audioManager.stopAll();
// 	visualEffectManager.stopAll();
// 	imageManager.clearAll();
//
// 	// 2. 지속 이미지들을 먼저 복원 (await로 순차 처리)
// 	if (imageContainerRef && maskRef) {
// 		for (const image of segment.inheritedEffects.images) {
// 			if (image.url !== null) {
// 				await imageManager.addImage(
// 					image.url,
// 					image.type,
// 					imageContainerRef,
// 					maskRef,
// 					image.sustain_until,
// 				);
// 			}
// 		}
// 	}
//
// 	// 3. 지속 오디오 효과들 재생 (status: "start"는 모두 loop: true)
// 	segment.inheritedEffects.audio.forEach((effect) => {
// 		audioManager.play(effect.tag, {
// 			loop: true,
// 			repeat: effect.repeat,
// 		});
// 	});
//
// 	// 4. 지속 비주얼 효과들 재생
// 	segment.inheritedEffects.visual.forEach((effect) => {
// 		const effectTag = typeof effect === "string" ? effect : effect.tag;
// 		visualEffectManager.play(effectTag, {
// 			loop: true,
// 		});
// 	});
//
// 	// 5. 세그먼트 자체의 초기 효과들은 기존 initSegment에서 처리
// }
