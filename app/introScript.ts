// 사운드 이펙트 타입
interface SoundEffect {
	tag: string;
	status?: "start" | "stop";
	repeat?: number;
}

// 비주얼 이펙트 타입
interface VisualEffect {
	tag: string;
	status?: "start" | "stop";
}

// 텍스트 이펙트 타입
type TextEffect = string;

// 이미지 타입
interface Image {
	url: string | null;
	type: "background" | "overlay" | "jumpscare";
	sustain_until: string; // segment ID
}

// 라인 이펙트 타입
interface PreLineEffects {
	image: Image | null;
	soundEffects: SoundEffect[];
	visualEffects: VisualEffect[];
}

// 텍스트 청크 타입
interface TextChunk {
	content: string;
	textEffects?: TextEffect[];
	soundEffects?: SoundEffect[];
	visualEffects?: VisualEffect[];
}

// 라인 타입
interface Line {
	text: string;
	chunks: TextChunk[];
	preLineEffects: PreLineEffects;
}

// 세그먼트 이펙트 타입
interface SegmentEffects {
	soundEffects: SoundEffect[];
	visualEffects: VisualEffect[];
}

// 배경 타입
interface Background {
	url: string | null;
	type: "background";
	sustain_until: string; // segment ID
}

// 세그먼트 타입
export interface Segment {
	id: string;
	lines: Line[];
	background: Background | null;
	segmentEffects: SegmentEffects;
}

// 전체 스토리 타입
//

const introTexts = [
	"당신은 낡고 음침한 도서관에 들어섭니다.",
	"저편, 낡은 책상에 희미한 스탠드 불빛 하나.\n그 아래, 조용히 책장을 넘기는 그녀가 보입니다.",
	"그녀는 당신을 보고 싱긋 웃어보이곤 말을 걸어옵니다.",
	'\"안녕? 기괴한 이야기가 가득한 도서관에 온것을 환영해\"',
	'\"오늘따라 유독 조용하다... 이런 밤엔... 이런 얘기가 딱인데.\"',
	'\"한번... 읽어볼래? 내가 방금 찾은 기록이야.\"',
];

export const introScript: Segment[] = [
	{
		id: "seg-1",
		background: null,
		segmentEffects: {
			soundEffects: [
				{
					tag: "ROOMTONE_EMPTY_NEUTRAL",
					status: "start",
				},
			],
			visualEffects: [
				{
					tag: "VISUAL_VIGNETTE",
					status: "start",
				},
			],
		},
		lines: [
			{
				text: "당신은 낡고 음침한 도서관에 들어섭니다.",
				preLineEffects: {
					soundEffects: [
						{
							tag: "DOOR_CREAK_SLOW",
							repeat: 3,
						},
					],
					visualEffects: [],
					image: null,
				},
				chunks: [
					{
						content: "당신은 낡고 음침한 도서관에 ",
						soundEffects: [],
					},
					{
						content: "들어섭니다.",
						soundEffects: [],
					},
				],
			},
		],
	},
	{
		id: "seg-2",
		background: null,
		segmentEffects: {
			soundEffects: [],
			visualEffects: [],
		},
		lines: [
			{
				text: "저편, 낡은 책상에 희미한 스탠드 불빛 하나.",
				preLineEffects: {
					soundEffects: [],
					visualEffects: [
						{
							tag: "SCREEN_FLICKER",
						},
					],
					image: null,
				},
				chunks: [
					{
						content: "저편, 낡은 책상에 희미한 스탠드 불빛 하나.",
					},
				],
			},
			{
				text: "그 아래, 조용히 책장을 넘기는 그녀가 보입니다.",
				preLineEffects: {
					soundEffects: [],
					visualEffects: [],
					image: null,
				},
				chunks: [
					{
						content: "그 아래, ",
					},
					{
						content: "조용히 책장을 넘기는 그녀가 보입니다.",
						soundEffects: [
							{
								tag: "PAGE_TURN",
								repeat: 5,
							},
						],
					},
				],
			},
		],
	},
	{
		id: "seg-3",
		background: null,
		segmentEffects: {
			soundEffects: [],
			visualEffects: [],
		},
		lines: [
			{
				text: "그녀는 당신을 보고 싱긋 웃어보이곤 말을 걸어옵니다.",
				preLineEffects: {
					soundEffects: [
						{
							tag: "FEMALE_GIGGLE ",
						},
					],
					visualEffects: [],
					image: null,
				},
				chunks: [
					{
						content: "그녀는 당신을 보고 싱긋 웃어보이곤 말을 걸어옵니다.",
					},
				],
			},
		],
	},
	{
		id: "seg-4",
		background: null,
		segmentEffects: {
			soundEffects: [],
			visualEffects: [],
		},
		lines: [
			{
				text: '"안녕? 기괴한 이야기가 가득한 도서관에 온것을 환영해"',
				preLineEffects: {
					soundEffects: [],
					visualEffects: [],
					image: null,
				},
				chunks: [
					{
						content: '"안녕? ',
					},
					{
						content: "기괴한 이야기",
						textEffects: ["GLITCH"],
					},
					{
						content: '가 가득한 도서관에 온것을 환영해"',
					},
				],
			},
		],
	},
	{
		id: "seg-6",
		background: null,
		segmentEffects: {
			soundEffects: [],
			visualEffects: [],
		},
		lines: [
			{
				text: '"오늘따라 유독 조용하다... 이런 밤엔... 이런 얘기가 딱인데."',
				preLineEffects: {
					soundEffects: [],
					visualEffects: [],
					image: null,
				},
				chunks: [
					{
						content: '"오늘따라 유독 조용하다... ',
					},
					{
						content: "이런 밤엔... ",
					},
					{
						content: '이런 얘기가 딱인데."',
					},
				],
			},
		],
	},
	{
		id: "seg-7",
		background: null,
		segmentEffects: {
			soundEffects: [
				// {
				// 	tag: "DRONE_UNSTABLE_AIR",
				// 	status: "stop",
				// },
				{
					tag: "ROOMTONE_EMPTY_NEUTRAL",
					status: "stop",
				},
			],
			visualEffects: [
				{
					tag: "VISUAL_VIGNETTE",
					status: "stop",
				},
			],
		},
		lines: [
			{
				text: '"한번... 읽어볼래? 내가 방금 찾은 기록이야."',
				preLineEffects: {
					soundEffects: [
						{
							tag: "PAGE_TURN",
						},
						{
							tag: "GHOSTLY_WHISPERS_OVERLAPPING",
						},
					],
					visualEffects: [],
					image: null,
				},
				chunks: [
					{
						content: '"한번... 읽어볼래? ',
					},
					{
						content: '내가 방금 찾은 기록이야."',
					},
				],
			},
		],
	},
];
