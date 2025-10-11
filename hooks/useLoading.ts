import { GetAssetsMap } from "@/lib/asset";
import audioManager from "@/lib/audio/audioManager";
import imageManager from "@/lib/image/imageManager";
import visualEffectManager from "@/lib/visual/visualEffectManager";
import { ProcessedSegment } from "@/types/script.types";
import { useState, useEffect } from "react";
interface UseLoadingProps {
	assets: GetAssetsMap;
	script: ProcessedSegment[];
}

export const useLoadingProgress = ({ assets, script }: UseLoadingProps) => {
	const [loadingProgress, setLoadingProgress] = useState(0);
	const [isAudioLoaded, setIsAudioLoaded] = useState(false);

	useEffect(() => {
		const loadAssets = async () => {
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

			const audioPromises = audioAssets.map(async (asset) => {
				try {
					await audioManager.loadAudio(asset.tag_name, asset.files[0].url);
					loaded++;
					setLoadingProgress((loaded / total) * 100);
				} catch (error) {
					console.error("Audio load error:", error);
					loaded++;
					setLoadingProgress((loaded / total) * 100);
				}
			});

			const visualPromises = visualAssets.map(async (asset) => {
				try {
					await visualEffectManager.preloadEffect(
						asset.tag_name,
						asset.files[0].url,
					);
					loaded++;
					setLoadingProgress((loaded / total) * 100);
				} catch (error) {
					console.error("Visual load error:", error);
					loaded++;
					setLoadingProgress((loaded / total) * 100);
				}
			});

			const imagePromises = Array.from(imageUrls).map(async (url) => {
				try {
					await imageManager.preloadImage(url);
					loaded++;
					setLoadingProgress((loaded / total) * 100);
				} catch (error) {
					console.error("Image load error:", error);
					loaded++;
					setLoadingProgress((loaded / total) * 100);
				}
			});

			await Promise.all([
				...audioPromises,
				...visualPromises,
				...imagePromises,
			]);
			setIsAudioLoaded(true);
		};
		loadAssets();
	}, [assets, script]);
	return {
		loadingProgress,
		isAudioLoaded,
	};
};
