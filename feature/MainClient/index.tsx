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

	const { loadingProgress, isAudioLoaded } = useLoadingProgress({
		assets,
		script: introScript,
	});

	const [needsReactivation, setNeedsReactivation] = useState(false);
	const [needsRecover, setNeedsRecover] = useState(false);

	return (
		<>
			{currentStage === "title" && (
				<MainTitle
					loadingProgress={loadingProgress}
					isAudioLoaded={isAudioLoaded}
					changeStage={
						!skipIntroSetting
							? () => changeStage("intro")
							: () => changeStage("menu")
					}
				/>
			)}
			{currentStage === "intro" && (
				<MainIntro
					introScript={introScript}
					needsRecoverState={[needsRecover, setNeedsRecover]}
					currentSegment={currentSegment}
					onSegmentChange={handleSegmentChange}
					changeStage={() => {
						changeStage("menu");
					}}
				/>
			)}
			{currentStage === "menu" && <MainMenu />}

			<ReactivationModal
				needsReactivationState={[needsReactivation, setNeedsReactivation]}
				onReactivationStateChange={(isReactivated) => {
					if (!isReactivated) {
						// 재활성화되었을 때 복구 필요
						setNeedsRecover(true);
					}
				}}
			/>
		</>
	);
}
