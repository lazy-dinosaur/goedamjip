import { Segment } from "@/types/script.types";

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
						},
					],
					visualEffects: [],
					image: null,
				},
				chunks: [
					{
						content: "당신은 낡고 음침한 도서관에 ",
						textEffects: ["TYPEWRITER"],
					},
					{
						content: "들어섭니다.",
						soundEffects: [{ tag: "FOOTSTEP_HEAVY_LUMBERING" }],
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
							tag: "FEMALE_GIGGLE",
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
					soundEffects: [{ tag: "FEMALE_GIGGLE" }],
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
		id: "seg-5",
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
		id: "seg-6",
		background: null,
		segmentEffects: {
			soundEffects: [
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
							repeat: 5,
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
						textEffects: ["GLOW"],
					},
				],
			},
		],
	},
];
