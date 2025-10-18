"use client";
import { useLoadingProgress } from "@/hooks/useLoading";
import { GetAssetsMap } from "@/lib/supabase/asset";
import { ProcessedSegment } from "@/types/script.types";
import { useCallback, useEffect, useState } from "react";
import ReactivationModal from "@/component/ReactivationModal";
import audioManager from "@/lib/audio/audioManager";
import { StoryMetadata } from "@/types/story.types";
import StoryTitle from "./components/StoryTitle";

interface StoryClientProps {
	assets: GetAssetsMap;
	script: ProcessedSegment[];
	title: string;
	metadata: StoryMetadata;
	storyId: number;
}

export default function StoryClient({
	assets,
	script,
	title,
	metadata,
	storyId,
}: StoryClientProps) {
	const [currentStage, setCurrentStage] = useState<"title" | "story">("title");

	const [currentSegment, setCurrentSegment] = useState(0); // currentSegment를 상위로 이동

	const changeStage = useCallback((stage: "title" | "story") => {
		setCurrentStage(stage);
		// title로 돌아갈 때 currentSegment를 리셋할 수 있음
		if (stage === "title") {
			setCurrentSegment(0);
		}
	}, []);
	const { loadingProgress, isAssetLoaded, loadingMessage } =
		useLoadingProgress({
			assets,
			script,
		});

	const [needsReactivation, setNeedsReactivation] = useState(false);
	const [needsRecover, setNeedsRecover] = useState(false);
	audioManager.setGlobalVolume(0.6);

	useEffect(() => {
		setNeedsRecover(true);
	}, [script]);

	return (
		<>
			{currentStage == "title" && (
				<StoryTitle
					loadingProgress={loadingProgress}
					isAssetLoaded={isAssetLoaded}
					loadingMessage={loadingMessage}
					changeStage={() => {
						changeStage("story");
					}}
					metadata={metadata}
					title={title}
				/>
			)}
			{currentStage == "story" && <>story</>}

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
