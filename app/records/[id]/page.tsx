import ScreenWrapper from "@/component/ScreenWrapper";
import StoryClient from "@/feature/StoryClient";
import { getAssetsMap } from "@/lib/supabase/asset";
import { getStoryById } from "@/lib/supabase/story";
import { Segment } from "@/types/script.types";
import { StoryMetadata } from "@/types/story.types";
import { getStoryAssets } from "@/util/getResources";
import { preprocessScript } from "@/util/preprocessScript";

interface GoedamPageProps {
	params: {
		id: string;
	};
}

export default async function Goedam({ params }: GoedamPageProps) {
	const storyId = Number(params.id);
	const story = await getStoryById(storyId);
	if (!story?.contents || !story.title || !story.metadata)
		return <>이야기 없음</>;

	const { contents, title } = story;

	const metadata = story.metadata as unknown as StoryMetadata;

	const segments = contents as unknown as Segment[];
	const assetLists = getStoryAssets(segments);
	const assets = await getAssetsMap([...assetLists.allAssets]);
	const preprocessedScript = preprocessScript(segments);

	return (
		<ScreenWrapper className={"select-none"}>
			<StoryClient
				script={preprocessedScript}
				assets={assets}
				title={title}
				storyId={storyId}
				metadata={metadata}
			/>
		</ScreenWrapper>
	);
}
