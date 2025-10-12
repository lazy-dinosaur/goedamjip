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
