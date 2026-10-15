import RecordsClient from "@/feature/RecordsClient";
import { getStories } from "@/lib/supabase/story";

export default async function Records() {
	// 목록에 필요한 정보만 클라이언트에 전달
	const stories = await getStories();

	return (
		<RecordsClient
			stories={(stories ?? []).map(({ id, title, author, published_at }) => ({
				id,
				title,
				author,
				published_at,
			}))}
			hasError={stories === null}
		/>
	);
}
