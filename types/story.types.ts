export interface Ingredient {
	id: number;
	name: string;
	type: string;
	description: string;
	document_id: string;
}

export interface StoryMetadata {
	plot: string;
	tags: string[];
	summary: string;
	synopsis: string;
	ingredients: Ingredient[];
	instagramPost: boolean;
	segment_counts: number;
}
