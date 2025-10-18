import { createClient } from "./client";
import { Tables } from "@/types/database.types";

const supabase = createClient();

export type Story = Tables<"stories">;

/**
 * published된 이야기 리스트를 가져옵니다
 * contents가 비어있지 않은 것만 가져옵니다
 */
export async function getStories() {
	const { data, error } = await supabase
		.from("stories")
		.select("*")
		.not("contents", "is", null)
		.order("created_at", { ascending: false });

	if (error) {
		console.error("Error fetching stories:", error);
		return null;
	}

	return data;
}

/**
 * 특정 ID의 이야기를 가져옵니다
 */
export async function getStoryById(id: number) {
	const { data, error } = await supabase
		.from("stories")
		.select("*")
		.eq("id", id)
		.single();

	if (error) {
		console.error("Error fetching story:", error);
		return null;
	}

	return data;
}

/**
 * 랜덤하게 이야기 ID를 가져옵니다
 * contents가 비어있지 않은 것 중에서 랜덤으로 1개의 ID를 반환합니다
 */
export async function getRandomStoryId() {
	// 먼저 총 개수 확인
	const { count } = await supabase
		.from("stories")
		.select("id", { count: "exact", head: true })
		.not("contents", "is", null);

	if (!count || count === 0) return null;

	// 랜덤 offset 생성
	const randomOffset = Math.floor(Math.random() * count);

	// 랜덤 offset으로 ID만 가져오기
	const { data, error } = await supabase
		.from("stories")
		.select("id")
		.not("contents", "is", null)
		.range(randomOffset, randomOffset)
		.single();

	if (error) {
		console.error("Error fetching random story id:", error);
		return null;
	}

	return data.id;
}
