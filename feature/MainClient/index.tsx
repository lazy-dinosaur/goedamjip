"use client";
import { GetAssetsMap } from "@/lib/supabase/asset";
import MainTitle from "./components/MainTitle";
import MainIntro from "./components/MainIntro";
import { useState, useCallback, useEffect } from "react";
import MainMenu from "./components/MainMenu";
import ReactivationModal from "@/component/ReactivationModal";
import { ProcessedSegment } from "@/types/script.types";
import { useLoadingProgress } from "@/hooks/useLoading";
import { useSettingsContext } from "@/contexts/SettingsContext";

interface MainClientProps {
	assets: GetAssetsMap;
	introScript: ProcessedSegment[];
}

export default function MainClient({ assets, introScript }: MainClientProps) {
	const { skipIntro, didWatchIntro, setSkipIntro, setDidWatchIntro } =
		useSettingsContext();

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

	useEffect(() => {
		if (
			currentStage == "title" &&
			(skipIntro || didWatchIntro) &&
			isAssetLoaded
		) {
			changeStage("menu");
		}
	}, [isAssetLoaded, changeStage, currentStage, didWatchIntro, skipIntro]);

	return (
		<>
			{currentStage === "title" && (
				<MainTitle
					loadingProgress={loadingProgress}
					isAssetLoaded={isAssetLoaded}
					loadingMessage={loadingMessage}
					changeStage={
						!skipIntro && !didWatchIntro
							? () => {
									changeStage("intro");
								}
							: () => {
									changeStage("menu");
								}
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
						setDidWatchIntro(true);
						setSkipIntro(true);
					}}
					changeStage={() => {
						setDidWatchIntro(true);
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
