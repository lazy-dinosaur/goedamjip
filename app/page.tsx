/*
 * 메인 화면의 목표
 * 인트로 스킵 여부 확인
 * 첫 방문 확인
 * 인트로 재생
 * 로그인 확인
 * 초기 설정값 불러오기
 * 인트로 이후에 메뉴 보여주기
 * */

import PageWrapper from "@/component/PaperWrapper";
import { introScript } from "./introScript";
import { getStoryAssets } from "@/util/getResources";
import { getAssetsMap } from "@/lib/asset";
import MainClient from "@/feature/MainClient";
import { preprocessScript } from "@/util/preprocessScript";

export default async function Home() {
	const assetLists = getStoryAssets(introScript);
	const assets = await getAssetsMap([
		...assetLists.allAssets,
		"MUSIC_DREAD_REALIZATION",
		"DRONE_UNSTABLE_AIR",
	]);
	const preprocessedIntroScript = preprocessScript(introScript);

	return (
		<PageWrapper className={"select-none"}>
			<MainClient assets={assets} introScript={preprocessedIntroScript} />
		</PageWrapper>
	);
}
