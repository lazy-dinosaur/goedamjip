"use client";
import { GetAssetsMap } from "@/lib/asset";
import MainTitle from "./components/MainTitle";
import MainIntro from "./components/MainIntro";
import { useState, useCallback, useEffect } from "react";
import audioManager from "@/lib/audio/audioManager";

export default function MainClient({ assets }: { assets: GetAssetsMap }) {
	// 인트로 스킵 설정 확인
	const [skipIntroSetting, setSkipIntroSetting] = useState(() => {
		if (typeof window !== "undefined") {
			return localStorage.getItem("skipIntro") === "true";
		}
		return false;
	});
	//화면이 클릭 되면 intro가 시작되어야 한다 다만 title의 종료 에니메이션 이후에 시작되어야 한다.
	//즉 title에서 로딩이 끝난 이후 클릭을 하면 종료 에니메이션이 동작 해야하고 그 이후에 introstage로 변경 되어야 한다.

	const [currentStage, setCurrentStage] = useState<"title" | "intro">("title");
	const [didWatchIntro, setDidWatchIntro] = useState(false); // 인트로를 봤는지 추적

	const changeStage = useCallback((stage: "title" | "intro") => {
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
		const loadAudio = async () => {
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

			let loaded = 0;
			const total = audioAssets.length;

			const loadPromises = audioAssets.map(async (asset) => {
				try {
					await audioManager.loadAudio(asset.tag_name, asset.files[0].url);
					loaded++;
					setLoadingProgress((loaded / total) * 100);
				} catch (error) {
					console.error("Load error:", error);
					loaded++;
					setLoadingProgress((loaded / total) * 100);
				}
			});

			await Promise.all(loadPromises);
			setIsAudioLoaded(true);
		};
		loadAudio();
	}, []);

	return (
		<>
			{currentStage === "title" && (
				<MainTitle
					loadingProgress={loadingProgress}
					isAudioLoaded={isAudioLoaded}
					changeStage={() => changeStage("intro")}
				/>
			)}
			{currentStage === "intro" && <MainIntro />}
		</>
	);
}
