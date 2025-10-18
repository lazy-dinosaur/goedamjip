import { GetAssetsMap } from "@/lib/supabase/asset";
import audioManager from "@/lib/audio/audioManager";
import imageManager from "@/lib/image/imageManager";
import visualEffectManager from "@/lib/visual/visualEffectManager";
import { ProcessedSegment } from "@/types/script.types";
import { useState, useEffect, useCallback } from "react";
interface UseLoadingProps {
	assets: GetAssetsMap;
	script: ProcessedSegment[];
}

export const useLoadingProgress = ({ assets, script }: UseLoadingProps) => {
	const [loadingProgress, setLoadingProgress] = useState(0);
	const [isAssetLoaded, setIsAssetLoaded] = useState(false);

	// 로딩 메시지 목록
	const messages = {
		intro: [
			"이야기를 준비하는 중...",
			"고담집의 문을 여는 중...",
			"비밀서고에 입장하는 중...",
		],
		audio: [
			"음향을 준비하는 중...",
			"공포의 소리를 깨우는 중...",
			"어둠의 속삭임을 듣는 중...",
		],
		visual: [
			"효과를 준비하는 중...",
			"공포를 불러오는 중...",
			"어둠을 드리우는 중...",
		],
		image: [
			"이미지를 준비하는 중...",
			"장면을 그리는 중...",
			"공포의 순간을 준비하는 중...",
		],
	};

	// 랜덤 메시지 선택 함수
	const getRandomMessage = useCallback(
		(type: keyof typeof messages) => {
			const list = messages[type];
			return list[Math.floor(Math.random() * list.length)];
		},
		[],
	);

	const [loadingMessage, setLoadingMessage] = useState("이야기를 준비하는 중...");

	useEffect(() => {
		const loadAssets = async () => {
			// 초기 메시지를 랜덤하게 설정 (클라이언트에서만)
			setLoadingMessage(getRandomMessage("intro"));

			const audioAssets = Array.from(assets.values()).filter((asset) => {
				if (
					asset.category == "SOUND" &&
					Array.isArray(asset.files) &&
					asset.files.length > 0 &&
					asset.files[0].url
				) {
					return true;
				}
			});

			const visualAssets = Array.from(assets.values()).filter((asset) => {
				if (
					asset.category == "VISUAL" &&
					Array.isArray(asset.files) &&
					asset.files.length > 0 &&
					asset.files[0].url
				) {
					return true;
				}
			});

			// introScript에서 이미지 URL 수집
			const imageUrls = new Set<string>();
			script.forEach((segment) => {
				// background 이미지
				if (segment.background?.url) {
					imageUrls.add(segment.background.url);
				}

				// preLineEffects 이미지
				segment.lines.forEach((line) => {
					if (line.preLineEffects.image?.url) {
						imageUrls.add(line.preLineEffects.image.url);
					}
				});
			});

			let loaded = 0;
			const total = audioAssets.length + visualAssets.length + imageUrls.size;

			// 배치 로딩 헬퍼 함수
			const loadInBatches = async <T>(
				items: T[],
				loadFn: (item: T) => Promise<void>,
				batchSize = 5,
			) => {
				for (let i = 0; i < items.length; i += batchSize) {
					const batch = items.slice(i, i + batchSize);
					await Promise.all(
						batch.map(async (item) => {
							try {
								await loadFn(item);
								loaded++;
								setLoadingProgress((loaded / total) * 100);
							} catch (error) {
								console.error("Load error:", error);
								loaded++;
								setLoadingProgress((loaded / total) * 100);
							}
						}),
					);
				}
			};

			// 오디오 배치 로드
			setLoadingMessage(getRandomMessage("audio"));
			await loadInBatches(audioAssets, async (asset) => {
				await audioManager.loadAudio(asset.tag_name, asset.files[0].url);
			});

			// 비주얼 배치 로드
			setLoadingMessage(getRandomMessage("visual"));
			await loadInBatches(visualAssets, async (asset) => {
				await visualEffectManager.preloadEffect(
					asset.tag_name,
					asset.files[0].url,
				);
			});

			// 이미지 배치 로드
			setLoadingMessage(getRandomMessage("image"));
			await loadInBatches(Array.from(imageUrls), async (url) => {
				await imageManager.preloadImage(url);
			});

			setIsAssetLoaded(true);
		};
		loadAssets();
	}, [assets, script, getRandomMessage]);
	return {
		loadingProgress,
		isAssetLoaded,
		loadingMessage,
	};
};
