import { createClient } from "./supabase/client";

const supabase = createClient();
/**
 * tag_name(들)로 assets와 연결된 파일 정보 가져오기
 */
export async function getAssetsByTagNames(tagNames: string[]) {
	if (!tagNames || tagNames.length === 0) {
		console.warn("No tag names provided");
		return [];
	}

	try {
		const { data, error } = await supabase.rpc("get_assets_by_tag_names", {
			p_tag_names: tagNames,
		});

		if (error) {
			console.error("Error fetching assets:", error);
			return [];
		}

		return data || [];
	} catch (error) {
		console.error("Unexpected error:", error);
		return [];
	}
}

export type GetAssetsByTagNames = Awaited<
	ReturnType<typeof getAssetsByTagNames>
>;

/**
 * 단일 tag_name으로 asset 가져오기
 */
export async function getAssetByTagName(tagName: string) {
	const assets = await getAssetsByTagNames([tagName]);
	return assets[0] || null;
}

export type GetAssetByTagName = Awaited<ReturnType<typeof getAssetByTagName>>;

/**
 * Map 형태로 변환
 */
export async function getAssetsMap(tagNames: string[]) {
	const assets = await getAssetsByTagNames(tagNames);

	return new Map(assets.map((asset) => [asset.tag_name, asset]));
}

export type GetAssetsMap = Awaited<ReturnType<typeof getAssetsMap>>;
