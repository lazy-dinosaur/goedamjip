"use client";
import { GetAssetsMap } from "@/lib/asset";
import MainTitle from "./components/MainTitle";
import MainIntro from "./components/MainIntro";
import { useState, useCallback, useEffect } from "react";
import audioManager from "@/lib/audio/audioManager";
import visualEffectManager from "@/lib/visual/visualEffectManager";
import imageManager from "@/lib/image/imageManager";
import { Segment } from "@/app/introScript";
import MainMenu from "./components/MainMenu";

interface MainClientProps {
	assets: GetAssetsMap;
	introScript: Segment[];
}

export default function MainClient({ assets, introScript }: MainClientProps) {
	// 인트로 스킵 설정 확인
	const [skipIntroSetting, setSkipIntroSetting] = useState(() => {
		if (typeof window !== "undefined") {
			return localStorage.getItem("skipIntro") === "true";
		}
		return false;
	});
	//화면이 클릭 되면 intro가 시작되어야 한다 다만 title의 종료 에니메이션 이후에 시작되어야 한다.
	//즉 title에서 로딩이 끝난 이후 클릭을 하면 종료 에니메이션이 동작 해야하고 그 이후에 introstage로 변경 되어야 한다.

	const [currentStage, setCurrentStage] = useState<"title" | "intro" | "menu">(
		"title",
	);
	const [didWatchIntro, setDidWatchIntro] = useState(false); // 인트로를 봤는지 추적

	const changeStage = useCallback((stage: "title" | "intro" | "menu") => {
		setCurrentStage(stage);
	}, []);

	const introWatched = useCallback(() => {
		setDidWatchIntro(true);
	}, []);

	// MainMenu에 전달할 함수
	const handleSkipIntroChange = useCallback((newValue: boolean) => {
		setSkipIntroSetting(newValue);
		// localStorage에 저장
		if (typeof window !== "undefined") {
			localStorage.setItem("skipIntro", String(newValue));
		}
	}, []);

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
			introScript.forEach((segment) => {
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
			const total =
				audioAssets.length + visualAssets.length + imageUrls.size;

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
	}, [assets, introScript]);

	return (
		<>
			{currentStage === "title" && (
				<MainTitle
					loadingProgress={loadingProgress}
					isAudioLoaded={isAudioLoaded}
					changeStage={() => changeStage("intro")}
				/>
			)}
			{currentStage === "intro" && (
				<MainIntro
					introScript={introScript}
					changeStage={() => {
						changeStage("menu");
					}}
				/>
			)}
			{currentStage === "menu" && <MainMenu />}
		</>
	);
}
