import { Segment } from "@/types/script.types";

export const getStoryAssets = (script: Segment[]) => {
	const sounds = script.map((seg) => {
		const segmentEffects = seg.segmentEffects.soundEffects
			.map((effect) => effect.tag)
			.filter((v) => typeof v == "string");
		const preLineEffects = seg.lines
			.flatMap((line) =>
				line.preLineEffects.soundEffects.flatMap((effect) => effect.tag),
			)
			.filter((v) => typeof v == "string");
		const chunkEffects = seg.lines
			.flatMap((line) =>
				line.chunks.flatMap((chunk) =>
					chunk.soundEffects?.flatMap((effect) => effect.tag),
				),
			)
			.filter((v) => typeof v == "string");
		return {
			segmentEffects,
			preLineEffects,
			chunkEffects,
			allAssets: [...segmentEffects, ...preLineEffects, ...chunkEffects],
		};
	});
	const visuals = script.map((seg) => {
		const segmentEffects = seg.segmentEffects.visualEffects
			.map((effect) => (typeof effect == "string" ? effect : effect.tag))
			.filter((v) => typeof v == "string");
		const preLineEffects = seg.lines
			.flatMap((line) =>
				line.preLineEffects.visualEffects.flatMap((effect) =>
					typeof effect == "string" ? effect : effect.tag,
				),
			)
			.filter((v) => typeof v == "string");
		const chunkEffects = seg.lines
			.flatMap((line) =>
				line.chunks.flatMap((chunk) =>
					chunk.visualEffects?.flatMap((effect) =>
						typeof effect == "string" ? effect : effect.tag,
					),
				),
			)
			.filter((v) => typeof v == "string");
		return {
			segmentEffects,
			preLineEffects,
			chunkEffects,
			allAssets: [...segmentEffects, ...preLineEffects, ...chunkEffects],
		};
	});

	const texts = script
		.flatMap((seg) => {
			const chunkEffects = seg.lines.flatMap((line) =>
				line.chunks.flatMap((chunk) => chunk.textEffects),
			);
			return chunkEffects;
		})
		.filter((v) => typeof v == "string");
	return {
		sounds,
		visuals,
		texts,
		allAssets: [
			...sounds.flatMap((sound) => sound.allAssets),
			...visuals.flatMap((visual) => visual.allAssets),
			...texts,
		],
	};
};

export const getStoryImages = (script: Segment[]) => {
	const backgrounds = script.map((seg) => seg.background?.url);
	const lineImages = script.flatMap((seg) =>
		seg.lines.map((line) => line.preLineEffects.image?.url),
	);
	return [...backgrounds, ...lineImages];
};
