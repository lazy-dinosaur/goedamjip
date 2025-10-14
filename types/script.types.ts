// 사운드 이펙트 타입
export interface SoundEffect {
	tag: string;
	status?: "start" | "stop";
	repeat?: number;
	loop?: boolean;
}

// 비주얼 이펙트 타입
export type VisualEffect =
	| string
	| {
			tag: string;
			status?: "start" | "stop";
	  };

// 텍스트 이펙트 타입
export type TextEffect = string;

// 이미지 타입
export interface Image {
	url: string | null;
	type: "background" | "overlay" | "jumpscare";
	sustain_until?: string; // segment ID
}

// 라인 이펙트 타입
interface PreLineEffects {
	image: Image | null;
	soundEffects: SoundEffect[];
	visualEffects: VisualEffect[];
}

// 텍스트 청크 타입
export interface TextChunk {
	content: string;
	textEffects?: TextEffect[];
	soundEffects?: SoundEffect[];
	visualEffects?: VisualEffect[];
}

// 라인 타입
export interface Line {
	text: string;
	chunks: TextChunk[];
	preLineEffects: PreLineEffects;
}

// 세그먼트 이펙트 타입
export interface SegmentEffects {
	soundEffects: SoundEffect[];
	visualEffects: VisualEffect[];
}

// 배경 타입
export interface Background {
	url: string | null;
	type: "background";
	sustain_until?: string; // segment ID
}

// 세그먼트 타입
export interface Segment {
	id: string;
	lines: Line[];
	background?: Background | null;
	segmentEffects: SegmentEffects;
}

export interface ProcessedSegment extends Segment {
	// 이전 세그먼트들에서 시작되어 현재도 지속 중인 효과들
	inheritedEffects: {
		audio: SoundEffect[];
		visual: VisualEffect[];
		images: Image[];
	};
}
