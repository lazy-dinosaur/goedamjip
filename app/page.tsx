import { introScript } from "./introScript";
import { getStoryAssets } from "@/util/getResources";
import { getAssetsMap } from "@/lib/supabase/asset";
import MainClient from "@/feature/MainClient";
import { preprocessScript } from "@/util/preprocessScript";
import ScreenWrapper from "@/component/ScreenWrapper";

export default async function Home() {
	const assetLists = getStoryAssets(introScript);
	const assets = await getAssetsMap([
		...assetLists.allAssets,
		"MUSIC_DREAD_REALIZATION",
		"DRONE_UNSTABLE_AIR",
	]);
	const preprocessedIntroScript = preprocessScript(introScript);

	return (
		<ScreenWrapper className={"select-none"}>
			<MainClient assets={assets} introScript={preprocessedIntroScript} />
		</ScreenWrapper>
	);
}
