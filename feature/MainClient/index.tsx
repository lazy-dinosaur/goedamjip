"use client";
import { GetAssetsMap } from "@/lib/supabase/asset";
import MainTitle from "./components/MainTitle";
import MainIntro from "./components/MainIntro";
import { useState, useCallback, useEffect } from "react";
import MainMenu from "./components/MainMenu";
import ReactivationModal from "@/component/ReactivationModal";
import { ProcessedSegment } from "@/types/script.types";
import { useLoadingProgress } from "@/hooks/useLoading";

interface MainClientProps {
	assets: GetAssetsMap;
	introScript: ProcessedSegment[];
}

export default function MainClient({ assets, introScript }: MainClientProps) {
	const [skipIntroSetting, setSkipIntroSetting] = useState(() => {
		if (typeof window !== "undefined") {
			return localStorage.getItem("skipIntro") === "true";
		}
		return false;
	});

	// 인트로를 봤는지 여부는 세션스토리지에 저장하는게 좋을듯 함
	const [didWatchIntro, setDidWatchIntro] = useState(() => {
		if (typeof window !== "undefined") {
			return sessionStorage.getItem("introWatched") === "true";
		}
		return false;
	});

	const handleIntroWatchChange = useCallback((newValue: boolean) => {
		setDidWatchIntro(newValue);
		if (typeof window === "undefined") {
			sessionStorage.setItem("introWatched", String(newValue));
		}
	}, []);

	const [currentStage, setCurrentStage] = useState<"title" | "intro" | "menu">(
		"title",
	);
	const [currentSegment, setCurrentSegment] = useState(0); // currentSegment를 상위로 이동

	const changeStage = useCallback((stage: "title" | "intro" | "menu") => {
		setCurrentStage(stage);
		// title로 돌아갈 때 currentSegment를 리셋할 수 있음
		if (stage === "title") {
			setCurrentSegment(0);
		}
	}, []);

	const handleSegmentChange = useCallback((newSegment: number) => {
		setCurrentSegment(newSegment);
	}, []);

	// MainMenu에 전달할 함수
	const handleSkipIntroChange = useCallback((newValue: boolean) => {
		setSkipIntroSetting(newValue);
		// localStorage에 저장
		if (typeof window !== "undefined") {
			localStorage.setItem("skipIntro", String(newValue));
		}
	}, []);

	const { loadingProgress, isAssetLoaded, loadingMessage } = useLoadingProgress(
		{
			assets,
			script: introScript,
		},
	);

	const [needsReactivation, setNeedsReactivation] = useState(false);
	const [needsRecover, setNeedsRecover] = useState(false);

	const onRecover = useCallback(() => {
		setNeedsRecover(false);
	}, [setNeedsRecover]);

	return (
		<>
			{currentStage === "title" && (
				<MainTitle
					loadingProgress={loadingProgress}
					isAssetLoaded={isAssetLoaded}
					loadingMessage={loadingMessage}
					changeStage={
						!skipIntroSetting && !didWatchIntro
							? () => {
									changeStage("intro");
								}
							: () => changeStage("menu")
					}
				/>
			)}
			{currentStage === "intro" && !needsReactivation && (
				<MainIntro
					script={introScript}
					needsRecover={needsRecover}
					onRecover={onRecover}
					currentSegment={currentSegment}
					onSegmentChange={handleSegmentChange}
					onIntroSkip={() => {
						handleIntroWatchChange(true);
						handleSkipIntroChange(true);
					}}
					changeStage={() => {
						handleIntroWatchChange(true);
						changeStage("menu");
					}}
				/>
			)}
			{currentStage === "menu" && <MainMenu />}

			<ReactivationModal
				needsReactivationState={[needsReactivation, setNeedsReactivation]}
				onReactivationStateChange={(isReactivated) => {
					if (!isReactivated) {
						setNeedsRecover(true);
					}
				}}
			/>
		</>
	);
}
