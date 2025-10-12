import { Segment } from "@/types/script.types";

export const introScript: Segment[] = [
	{
		id: "seg-1",
		lines: [
			{
				text: "이번 괴담은 말이야...",
				chunks: [
					{
						content: "이번 괴담은 말이야...",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "2024년 서울 외곽에서 실제로 일어난 택배기사 실종 사건이야.",
				chunks: [
					{
						content:
							"2024년 서울 외곽에서 실제로 일어난 택배기사 실종 사건이야.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
		],
		background: null,
		segmentEffects: {
			soundEffects: [
				{
					tag: "CITY_AMBIENCE_DAY",
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
	},
	{
		id: "seg-2",
		lines: [
			{
				text: "주인공은 김도현, 32살 택배기사였어.",
				chunks: [
					{
						content: "주인공은 김도현, 32살 택배기사였어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "완벽주의 성격으로 어떤 주소든 반드시 찾아가는 고집쟁이였지.",
				chunks: [
					{
						content:
							"완벽주의 성격으로 어떤 주소든 반드시 찾아가는 고집쟁이였지.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
		],
		background: null,
		segmentEffects: {
			soundEffects: [
				{
					tag: "CITY_AMBIENCE_DAY",
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
	},
	{
		id: "seg-3",
		lines: [
			{
				text: "그날도 GPS가 이상한 곳을 가리켰어.",
				chunks: [
					{
						content: "그날도 GPS가 이상한 곳을 가리켰어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "폐쇄된 연구소 건물 앞이었어.",
				chunks: [
					{
						content: "폐쇄된 연구소 건물 앞이었어.",
						soundEffects: [
							{
								tag: "METAL_CREAK",
							},
						],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
		],
		background: {
			url: "goedamjip-story-image/68c8e50d5c9545abc228b000/seg-3",
			type: "background",
			sustain_until: "seg-11",
		},
		segmentEffects: {
			soundEffects: [
				{
					tag: "DRONE_INDUSTRIAL_ABYSS",
					status: "start",
				},
			],
			visualEffects: [
				{
					tag: "OVERLAY_FOG",
					status: "start",
				},
			],
		},
	},
	{
		id: "seg-4",
		lines: [
			{
				text: '"이상하네... 여기 택배함이 왜 있지?"',
				chunks: [
					{
						content: '"이상하네... 여기 택배함이 왜 있지?"',
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "도현이 고개를 갸웃했어.",
				chunks: [
					{
						content: "도현이 고개를 갸웃했어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
		],
		background: null,
		segmentEffects: {
			soundEffects: [],
			visualEffects: [],
		},
	},
	{
		id: "seg-5",
		lines: [
			{
				text: "건물은 20년째 방치된 상태였어.",
				chunks: [
					{
						content: "건물은 20년째 방치된 상태였어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "하지만 1층 로비에 멀쩡한 택배함이 설치되어 있었어.",
				chunks: [
					{
						content: "하지만 1층 로비에 멀쩡한 택배함이 설치되어 있었어.",
						textEffects: ["STYLE_UNDERLINE"],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
		],
		background: null,
		segmentEffects: {
			soundEffects: [
				{
					tag: "DRONE_INDUSTRIAL_ABYSS",
					status: "stop",
				},
			],
			visualEffects: [],
		},
	},
	{
		id: "seg-6",
		lines: [
			{
				text: "수취인 명단을 확인하다가 이상한 점을 발견했어.",
				chunks: [
					{
						content: "수취인 명단을 확인하다가 이상한 점을 발견했어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "모든 이름 옆에 '지하 7층'이라고 적혀 있었어.",
				chunks: [
					{
						content: "모든 이름 옆에 '지하 7층'이라고 적혀 있었어.",
						soundEffects: [
							{
								tag: "TAPPING_UNIDENTIFIED",
							},
						],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
		],
		background: null,
		segmentEffects: {
			soundEffects: [
				{
					tag: "DRONE_LOOMING_PRESENCE",
					status: "start",
				},
			],
			visualEffects: [
				{
					tag: "SCREEN_BLUR",
					status: "start",
				},
			],
		},
	},
	{
		id: "seg-7",
		lines: [
			{
				text: '"지하가 7층까지 있다고?"',
				chunks: [
					{
						content: '"지하가 7층까지 있다고?"',
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "도현이 엘리베이터 쪽으로 걸어갔어.",
				chunks: [
					{
						content: "도현이 엘리베이터 쪽으로 걸어갔어.",
						soundEffects: [
							{
								tag: "FOOTSTEPS_TUNNEL",
							},
						],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
		],
		background: null,
		segmentEffects: {
			soundEffects: [
				{
					tag: "DRONE_LOOMING_PRESENCE",
					status: "stop",
				},
			],
			visualEffects: [
				{
					tag: "SCREEN_BLUR",
					status: "stop",
				},
			],
		},
	},
	{
		id: "seg-8",
		lines: [
			{
				text: "갑자기 엘리베이터가 저절로 열렸어.",
				chunks: [
					{
						content: "갑자기 엘리베이터가 저절로 열렸어.",
						textEffects: ["JITTER"],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [
						{
							tag: "ELEVATOR_ARRIVE_AND_OPEN",
						},
					],
					visualEffects: [],
				},
			},
		],
		background: null,
		segmentEffects: {
			soundEffects: [
				{
					tag: "DRONE_INDUSTRIAL_ABYSS",
					status: "start",
				},
			],
			visualEffects: [
				{
					tag: "SCREEN_FLICKER",
					status: "start",
				},
			],
		},
	},
	{
		id: "seg-9",
		lines: [
			{
				text: "딩!",
				chunks: [
					{
						content: "딩!",
						textEffects: ["SHAKE"],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [
						{
							tag: "ELEVATOR_ARRIVAL_CHIME",
						},
					],
					visualEffects: [],
				},
			},
		],
		background: null,
		segmentEffects: {
			soundEffects: [],
			visualEffects: [],
		},
	},
	{
		id: "seg-10",
		lines: [
			{
				text: "지하 1층 버튼이 깜빡이고 있었어.",
				chunks: [
					{
						content: "지하 1층 버튼이 깜빡이고 있었어.",
						textEffects: ["GLITCH"],
						soundEffects: [
							{
								tag: "SWITCH_CLICK_TOGGLE",
							},
						],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "도현은 뒤로 벽에 등을 붙였어.",
				chunks: [
					{
						content: "도현은 뒤로 벽에 등을 붙였어.",
						soundEffects: [
							{
								tag: "SWALLOWING_NERVOUS",
							},
						],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
		],
		background: null,
		segmentEffects: {
			soundEffects: [],
			visualEffects: [],
		},
	},
	{
		id: "seg-11",
		lines: [
			{
				text: '"뭐야... 전기가 이상한 건가?"',
				chunks: [
					{
						content: '"뭐야... 전기가 이상한 건가?"',
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "하지만 호기심이 더 강했어.",
				chunks: [
					{
						content: "하지만 호기심이 더 강했어.",
						textEffects: ["STYLE_ITALIC"],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
		],
		background: null,
		segmentEffects: {
			soundEffects: [
				{
					tag: "DRONE_INDUSTRIAL_ABYSS",
					status: "stop",
				},
			],
			visualEffects: [
				{
					tag: "SCREEN_FLICKER",
					status: "stop",
				},
				{
					tag: "OVERLAY_FOG",
					status: "stop",
				},
			],
		},
	},
	{
		id: "seg-12",
		lines: [
			{
				text: "택배 상자를 들고 엘리베이터에 탔어.",
				chunks: [
					{
						content: "택배 상자를 들고 엘리베이터에 탔어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "지하 1층 버튼을 눌렀어.",
				chunks: [
					{
						content: "지하 1층 버튼을 눌렀어.",
						soundEffects: [
							{
								tag: "SWITCH_CLICK_TOGGLE",
							},
						],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
		],
		background: {
			url: "goedamjip-story-image/68c8e50d5c9545abc228b000/seg-12",
			type: "background",
			sustain_until: "seg-12",
		},
		segmentEffects: {
			soundEffects: [
				{
					tag: "ROOMTONE_FLUORESCENT_BUZZ",
					status: "start",
				},
				{
					tag: "ROOMTONE_FLUORESCENT_BUZZ",
					status: "stop",
				},
			],
			visualEffects: [
				{
					tag: "VISUAL_VIGNETTE",
					status: "start",
				},
				{
					tag: "VISUAL_VIGNETTE",
					status: "stop",
				},
			],
		},
	},
	{
		id: "seg-13",
		lines: [
			{
				text: "지하 1층은 평범한 의료 장비들이 놓여 있었어.",
				chunks: [
					{
						content: "지하 1층은 평범한 의료 장비들이 놓여 있었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [
						{
							tag: "WHEELCHAIR_ROLLING_SLOW",
						},
					],
					visualEffects: [],
				},
			},
			{
				text: "먼지가 쌓인 채로 방치되어 있었어.",
				chunks: [
					{
						content: "먼지가 쌓인 채로 방치되어 있었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
		],
		background: {
			url: "goedamjip-story-image/68c8e50d5c9545abc228b000/seg-13",
			type: "background",
			sustain_until: "seg-14",
		},
		segmentEffects: {
			soundEffects: [
				{
					tag: "ROOMTONE_BASEMENT_HUM",
					status: "start",
				},
			],
			visualEffects: [
				{
					tag: "OVERLAY_FOG",
					status: "start",
				},
			],
		},
	},
	{
		id: "seg-14",
		lines: [
			{
				text: '"여기도 아니네..."',
				chunks: [
					{
						content: '"여기도 아니네..."',
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "더 아래층으로 내려갔어.",
				chunks: [
					{
						content: "더 아래층으로 내려갔어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
		],
		background: null,
		segmentEffects: {
			soundEffects: [
				{
					tag: "ROOMTONE_BASEMENT_HUM",
					status: "stop",
				},
			],
			visualEffects: [
				{
					tag: "OVERLAY_FOG",
					status: "stop",
				},
			],
		},
	},
	{
		id: "seg-15",
		lines: [
			{
				text: "지하 2층은 동물 실험실이었어.",
				chunks: [
					{
						content: "지하 2층은 동물 실험실이었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "빈 케이지들과 실험 기록들이 어지럽게 흩어져 있었어.",
				chunks: [
					{
						content: "빈 케이지들과",
						soundEffects: [
							{
								tag: "CHAINS_RATTLING",
							},
						],
					},
					{
						content: "실험 기록들이 어지럽게 흩어져 있었어.",
						soundEffects: [
							{
								tag: "PAPER_CRUMPLING",
							},
						],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
		],
		background: {
			url: "goedamjip-story-image/68c8e50d5c9545abc228b000/seg-15",
			type: "background",
			sustain_until: "seg-15",
		},
		segmentEffects: {
			soundEffects: [
				{
					tag: "DRONE_INDUSTRIAL_ABYSS",
					status: "start",
				},
				{
					tag: "DRONE_INDUSTRIAL_ABYSS",
					status: "stop",
				},
			],
			visualEffects: [
				{
					tag: "SCREEN_FLICKER",
					status: "start",
				},
				{
					tag: "SCREEN_FLICKER",
					status: "stop",
				},
			],
		},
	},
	{
		id: "seg-16",
		lines: [
			{
				text: "지하 3층에서 첫 번째 이상한 냄새를 맡았어.",
				chunks: [
					{
						content: "지하 3층에서",
					},
					{
						content: "첫 번째 이상한 냄새를 맡았어.",
						soundEffects: [
							{
								tag: "SWALLOWING_NERVOUS",
							},
						],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [
						{
							tag: "LIQUID_DRIPPING_HEAVY",
						},
					],
					visualEffects: [],
				},
			},
			{
				text: "짓무른 소독약과 썩은 냄새가 섞여 있었어.",
				chunks: [
					{
						content: "짓무른 소독약과 썩은 냄새가 섞여 있었어.",
						soundEffects: [
							{
								tag: "LIQUID_DRIPPING_SLOW",
							},
						],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
		],
		background: {
			url: "goedamjip-story-image/68c8e50d5c9545abc228b000/seg-16",
			type: "background",
			sustain_until: "seg-18",
		},
		segmentEffects: {
			soundEffects: [
				{
					tag: "DRONE_ORGANIC_GURGLE",
					status: "start",
				},
			],
			visualEffects: [
				{
					tag: "OVERLAY_FOG",
					status: "start",
				},
			],
		},
	},
	{
		id: "seg-17",
		lines: [
			{
				text: '"으... 이게 뭔 냄새야?"',
				chunks: [
					{
						content: '"으... 이게 뭔 냄새야?"',
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "코를 막고 더 안쪽으로 들어갔어.",
				chunks: [
					{
						content: "코를 막고 더 안쪽으로 들어갔어.",
						soundEffects: [
							{
								tag: "FOOTSTEPS_TUNNEL",
							},
						],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
		],
		background: null,
		segmentEffects: {
			soundEffects: [
				{
					tag: "DRONE_ORGANIC_GURGLE",
					status: "stop",
				},
			],
			visualEffects: [
				{
					tag: "OVERLAY_FOG",
					status: "stop",
				},
			],
		},
	},
	{
		id: "seg-18",
		lines: [
			{
				text: "벽에 걸린 실험 기록을 발견했어.",
				chunks: [
					{
						content: "벽에 걸린 실험 기록을 발견했어.",
						soundEffects: [
							{
								tag: "PAGE_TURN",
								repeat: 5,
							},
						],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "'인체 강화 실험 - 1차 시도'라고 적혀 있었어.",
				chunks: [
					{
						content: "'인체 강화 실험 - 1차 시도'라고 적혀 있었어.",
						textEffects: ["TYPEWRITER"],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
		],
		background: null,
		segmentEffects: {
			soundEffects: [
				{
					tag: "DRONE_LOOMING_PRESENCE",
					status: "start",
				},
				{
					tag: "DRONE_LOOMING_PRESENCE",
					status: "stop",
				},
			],
			visualEffects: [
				{
					tag: "OVERLAY_GLITCH",
					status: "start",
				},
				{
					tag: "OVERLAY_GLITCH",
					status: "stop",
				},
			],
		},
	},
	{
		id: "seg-19",
		lines: [
			{
				text: "지하 4층으로 내려갔어.",
				chunks: [
					{
						content: "지하 4층으로 내려갔어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "복도 끝에 거대한 냉동고가 있었어.",
				chunks: [
					{
						content: "복도 끝에",
					},
					{
						content: "거대한 냉동고가 있었어.",
						soundEffects: [
							{
								tag: "METAL_CREAK",
							},
						],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
		],
		background: {
			url: "goedamjip-story-image/68c8e50d5c9545abc228b000/seg-19",
			type: "background",
			sustain_until: "seg-27",
		},
		segmentEffects: {
			soundEffects: [
				{
					tag: "ROOMTONE_WAREHOUSE_ECHO",
					status: "start",
				},
				{
					tag: "ROOMTONE_WAREHOUSE_ECHO",
					status: "stop",
				},
			],
			visualEffects: [
				{
					tag: "SCREEN_FLICKER",
					status: "start",
				},
				{
					tag: "SCREEN_FLICKER",
					status: "stop",
				},
			],
		},
	},
	{
		id: "seg-20",
		lines: [
			{
				text: "냉동고 문을 조심스럽게 열어봤어.",
				chunks: [
					{
						content: "냉동고 문을 조심스럽게 열어봤어.",
						soundEffects: [
							{
								tag: "HEAVY_DOOR_CREAK_SLOW",
							},
						],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "처음엔 빈 관들만 보였어.",
				chunks: [
					{
						content: "처음엔 빈 관들만 보였어.",
					},
				],
				preLineEffects: {
					image: {
						url: "goedamjip-story-image/68c8e50d5c9545abc228b000/seg-20",
						type: "overlay",
						sustain_until: "seg-20",
					},
					soundEffects: [
						{
							tag: "DOOR_OPEN",
						},
					],
					visualEffects: [],
				},
			},
		],
		background: null,
		segmentEffects: {
			soundEffects: [
				{
					tag: "ROOMTONE_BASEMENT_HUM",
					status: "start",
				},
			],
			visualEffects: [],
		},
	},
	{
		id: "seg-21",
		lines: [
			{
				text: '"다행히 아무것도 없..."',
				chunks: [
					{
						content: '"다행히 아무것도 없..."',
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "그때였어.",
				chunks: [
					{
						content: "그때였어.",
						soundEffects: [
							{
								tag: "FOOTSTEP_HEAVY_LUMBERING",
							},
						],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [
						{
							tag: "STATIC_BURST_LOUD",
						},
					],
					visualEffects: [],
				},
			},
		],
		background: null,
		segmentEffects: {
			soundEffects: [],
			visualEffects: [],
		},
	},
	{
		id: "seg-22",
		lines: [
			{
				text: "퍽!",
				chunks: [
					{
						content: "퍽!",
						textEffects: ["SHAKE"],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [
						{
							tag: "METAL_IMPACT_DULL",
						},
					],
					visualEffects: [],
				},
			},
		],
		background: null,
		segmentEffects: {
			soundEffects: [],
			visualEffects: [],
		},
	},
	{
		id: "seg-23",
		lines: [
			{
				text: "관 뒤쪽에서 거대하게 비대해진 팔 하나가 튀어나왔어.",
				chunks: [
					{
						content: "관 뒤쪽에서 거대하게 비대해진 팔 하나가 튀어나왔어.",
						soundEffects: [
							{
								tag: "CREATURE_GUTTURAL_GROAN",
							},
						],
						visualEffects: ["SCREEN_SHAKE"],
					},
				],
				preLineEffects: {
					image: {
						url: "goedamjip-story-image/68c8e50d5c9545abc228b000/seg-23",
						type: "jumpscare",
						sustain_until: "seg-23",
					},
					soundEffects: [
						{
							tag: "MUSIC_STINGER_PIANO_HIGH_DISCORDANT",
						},
						{
							tag: "BONE_CREAK",
						},
					],
					visualEffects: [],
				},
			},
			{
				text: "손가락이 7개나 되었고, 근육이 비정상적으로 부풀어 있었어.",
				chunks: [
					{
						content:
							"손가락이 7개나 되었고, 근육이 비정상적으로 부풀어 있었어.",
						soundEffects: [
							{
								tag: "LIQUID_DRIPPING_HEAVY",
							},
						],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
		],
		background: null,
		segmentEffects: {
			soundEffects: [],
			visualEffects: [],
		},
	},
	{
		id: "seg-24",
		lines: [
			{
				text: '"으악!"',
				chunks: [
					{
						content: '"으악!"',
						textEffects: ["SHAKE"],
						soundEffects: [
							{
								tag: "MALE_SCREAM_TERROR",
							},
						],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "도현이 뒤로 넘어지면서 냉동고 문을 쾅 닫았어.",
				chunks: [
					{
						content: "도현이 뒤로 넘어지면서 냉동고 문을 쾅 닫았어.",
						soundEffects: [
							{
								tag: "DOOR_SLAM",
							},
							{
								tag: "BREATH_SHAKY_PANIC",
							},
						],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
		],
		background: null,
		segmentEffects: {
			soundEffects: [],
			visualEffects: [],
		},
	},
	{
		id: "seg-25",
		lines: [
			{
				text: "숨이 가빠왔어.",
				chunks: [
					{
						content: "숨이 가빠왔어.",
						soundEffects: [
							{
								tag: "BREATH_HEAVY_PANIC",
							},
						],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "다리에서 힘이 빠졌어.",
				chunks: [
					{
						content: "다리에서 힘이 빠졌어.",
						soundEffects: [
							{
								tag: "HEARTBEAT_FAST",
							},
						],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
		],
		background: null,
		segmentEffects: {
			soundEffects: [],
			visualEffects: [],
		},
	},
	{
		id: "seg-26",
		lines: [
			{
				text: '"뭐였지 방금...?"',
				chunks: [
					{
						content: '"뭐였지 방금...?"',
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "손이 덜덜 떨렸어.",
				chunks: [
					{
						content: "손이 덜덜 떨렸어.",
						textEffects: ["JITTER"],
						soundEffects: [
							{
								tag: "BREATH_SHAKY_PANIC",
							},
						],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
		],
		background: null,
		segmentEffects: {
			soundEffects: [
				{
					tag: "ROOMTONE_BASEMENT_HUM",
					status: "stop",
				},
			],
			visualEffects: [],
		},
	},
	{
		id: "seg-27",
		lines: [
			{
				text: "하지만 택배는 배송해야 했어.",
				chunks: [
					{
						content: "하지만 택배는 배송해야 했어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "도현의 완벽주의가 발목을 잡았어.",
				chunks: [
					{
						content: "도현의 완벽주의가 발목을 잡았어.",
						soundEffects: [
							{
								tag: "SWALLOWING_NERVOUS",
							},
						],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
		],
		background: null,
		segmentEffects: {
			soundEffects: [
				{
					tag: "ROOMTONE_FLUORESCENT_BUZZ",
					status: "start",
				},
				{
					tag: "ROOMTONE_FLUORESCENT_BUZZ",
					status: "stop",
				},
			],
			visualEffects: [],
		},
	},
	{
		id: "seg-28",
		lines: [
			{
				text: "지하 5층으로 내려갔어.",
				chunks: [
					{
						content: "지하 5층으로 내려갔어.",
						soundEffects: [
							{
								tag: "FOOTSTEPS_TUNNEL",
							},
						],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "더 어두웠고, 비상등만 깜빡였어.",
				chunks: [
					{
						content: "더 어두웠고, 비상등만 깜빡였어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
		],
		background: {
			url: "goedamjip-story-image/68c8e50d5c9545abc228b000/seg-28",
			type: "background",
			sustain_until: "seg-36",
		},
		segmentEffects: {
			soundEffects: [
				{
					tag: "ROOMTONE_BASEMENT_HUM",
					status: "start",
				},
			],
			visualEffects: [
				{
					tag: "SCREEN_FLICKER",
					status: "start",
				},
			],
		},
	},
	{
		id: "seg-29",
		lines: [
			{
				text: "실험실들을 하나씩 둘러봤어.",
				chunks: [
					{
						content: "실험실들을 하나씩 둘러봤어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "벽에 붙은 표본 진열장들이 보였어.",
				chunks: [
					{
						content: "벽에 붙은 표본 진열장들이 보였어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
		],
		background: null,
		segmentEffects: {
			soundEffects: [],
			visualEffects: [],
		},
	},
	{
		id: "seg-30",
		lines: [
			{
				text: '"표본들은 다 말라 죽었겠지..."',
				chunks: [
					{
						content: '"표본들은 다 말라 죽었겠지..."',
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "안도하려는 순간이었어.",
				chunks: [
					{
						content: "안도하려는 순간이었어.",
						textEffects: ["PULSE_SLOW"],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
		],
		background: null,
		segmentEffects: {
			soundEffects: [],
			visualEffects: [
				{
					tag: "SCREEN_FLICKER",
					status: "stop",
				},
			],
		},
	},
	{
		id: "seg-31",
		lines: [
			{
				text: "벽에 박힌 여러 개의 눈알들이 동시에 도현을 향해 굴러봤어.",
				chunks: [
					{
						content:
							"벽에 박힌 여러 개의 눈알들이 동시에 도현을 향해 굴러봤어.",
					},
				],
				preLineEffects: {
					image: {
						url: "goedamjip-story-image/68c8e50d5c9545abc228b000/seg-31",
						type: "overlay",
						sustain_until: "seg-33",
					},
					soundEffects: [
						{
							tag: "SLITHERING_ON_FLOOR",
						},
						{
							tag: "CREATURE_CHITTERING",
						},
					],
					visualEffects: [],
				},
			},
			{
				text: "4개, 6개, 8개... 모두 다른 크기였어.",
				chunks: [
					{
						content: "4개, 6개, 8개... 모두 다른 크기였어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
		],
		background: null,
		segmentEffects: {
			soundEffects: [],
			visualEffects: [
				{
					tag: "EFFECT_FLASHLIGHT",
					status: "start",
				},
			],
		},
	},
	{
		id: "seg-32",
		lines: [
			{
				text: "그리고 깜빡였어.",
				chunks: [
					{
						content: "그리고 깜빡였어.",
					},
					{
						content: "모든 눈알들이 동시에.",
						textEffects: ["JITTER"],
					},
				],
				preLineEffects: {
					image: {
						url: null,
						type: "overlay",
					},
					soundEffects: [
						{
							tag: "CREATURE_CHITTERING",
						},
					],
					visualEffects: [],
				},
			},
		],
		background: null,
		segmentEffects: {
			soundEffects: [],
			visualEffects: [],
		},
	},
	{
		id: "seg-33",
		lines: [
			{
				text: '"아아악!"',
				chunks: [
					{
						content: '"아아악!"',
					},
					{
						content: "도현이 뒤로 물러서다가 실험 기구에 부딪혔어.",
						soundEffects: [
							{
								tag: "METAL_CREAK",
							},
						],
					},
				],
				preLineEffects: {
					image: {
						url: null,
						type: "overlay",
					},
					soundEffects: [
						{
							tag: "METAL_IMPACT_DULL",
						},
					],
					visualEffects: [],
				},
			},
		],
		background: null,
		segmentEffects: {
			soundEffects: [],
			visualEffects: [],
		},
	},
	{
		id: "seg-34",
		lines: [
			{
				text: "유리가 깨지는 소리가 울렸어.",
				chunks: [
					{
						content: "유리가 깨지는 소리가 울렸어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [
						{
							tag: "GLASS_SHATTER",
						},
					],
					visualEffects: [],
				},
			},
			{
				text: "그 소리에 반응해서인지, 다른 실험실에서도 뭔가 움직이는 소리가 들렸어.",
				chunks: [
					{
						content:
							"그 소리에 반응해서인지, 다른 실험실에서도 뭔가 움직이는 소리가 들렸어.",
						soundEffects: [
							{
								tag: "SLITHERING_ON_FLOOR",
							},
						],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
		],
		background: null,
		segmentEffects: {
			soundEffects: [],
			visualEffects: [],
		},
	},
	{
		id: "seg-35",
		lines: [
			{
				text: "드르륵... 드르륵...",
				chunks: [
					{
						content: "드르륵... 드르륵...",
						soundEffects: [
							{
								tag: "CLOTH_DRAGGING",
							},
						],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "뭔가 바닥을 끌고 가는 소리였어.",
				chunks: [
					{
						content: "뭔가 바닥을 끌고 가는 소리였어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
		],
		background: null,
		segmentEffects: {
			soundEffects: [],
			visualEffects: [],
		},
	},
	{
		id: "seg-36",
		lines: [
			{
				text: "도현은 급하게 엘리베이터로 뛰어갔어.",
				chunks: [
					{
						content: "도현은 급하게",
					},
					{
						content: "엘리베이터로 뛰어갔어.",
						soundEffects: [
							{
								tag: "FOOTSTEPS_TUNNEL",
							},
						],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "하지만 더 아래층 주소를 확인해야 했어.",
				chunks: [
					{
						content: "하지만 더 아래층 주소를 확인해야 했어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
		],
		background: null,
		segmentEffects: {
			soundEffects: [
				{
					tag: "ROOMTONE_BASEMENT_HUM",
					status: "stop",
				},
			],
			visualEffects: [],
		},
	},
	{
		id: "seg-37",
		lines: [
			{
				text: "지하 6층에는 더 충격적인 것이 기다리고 있었어.",
				chunks: [
					{
						content: "지하 6층에는",
					},
					{
						content: "더 충격적인 것이 기다리고 있었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "벽 전체에 실험 기록이 붙어 있었어.",
				chunks: [
					{
						content: "벽 전체에",
					},
					{
						content: "실험 기록이 붙어 있었어.",
						soundEffects: [
							{
								tag: "PAGE_TURN",
								repeat: 3,
							},
						],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
		],
		background: {
			url: "goedamjip-story-image/68c8e50d5c9545abc228b000/seg-37",
			type: "background",
			sustain_until: "seg-44",
		},
		segmentEffects: {
			soundEffects: [
				{
					tag: "DRONE_INDUSTRIAL_ABYSS",
					status: "start",
				},
				{
					tag: "ROOMTONE_WAREHOUSE_ECHO",
					status: "start",
				},
			],
			visualEffects: [],
		},
	},
	{
		id: "seg-38",
		lines: [
			{
				text: "'슈퍼 솔져 프로젝트 - 최종 실험'",
				chunks: [
					{
						content: "'슈퍼 솔져 프로젝트 - 최종 실험'",
						textEffects: ["TYPEWRITER"],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "'피험자 127명 중 생존자 0명'",
				chunks: [
					{
						content: "'피험자 127명 중 생존자 0명'",
						textEffects: ["TYPEWRITER"],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "'변이 확산 방지를 위한 시설 영구 폐쇄'",
				chunks: [
					{
						content: "'변이 확산 방지를 위한 시설 영구 폐쇄'",
						textEffects: ["TYPEWRITER"],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
		],
		background: null,
		segmentEffects: {
			soundEffects: [],
			visualEffects: [],
		},
	},
	{
		id: "seg-39",
		lines: [
			{
				text: "기록을 읽으며 몰입하고 있었어.",
				chunks: [
					{
						content: "기록을 읽으며 몰입하고 있었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "주변을 의식하지 못했어.",
				chunks: [
					{
						content: "주변을 의식하지 못했어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
		],
		background: null,
		segmentEffects: {
			soundEffects: [],
			visualEffects: [],
		},
	},
	{
		id: "seg-40",
		lines: [
			{
				text: '"이제 진실을 알았으니 나가기만 하면..."',
				chunks: [
					{
						content: '"이제 진실을 알았으니 나가기만 하면..."',
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "그때 뒤에서 느낌이 왔어.",
				chunks: [
					{
						content: "그때 뒤에서 느낌이 왔어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [
						{
							tag: "MALE_BREATH_CLOSE",
						},
					],
					visualEffects: [],
				},
			},
		],
		background: null,
		segmentEffects: {
			soundEffects: [],
			visualEffects: [],
		},
	},
	{
		id: "seg-41",
		lines: [
			{
				text: "차가운 손들이 어깨를 만졌어.",
				chunks: [
					{
						content: "차가운 손들이 어깨를 만졌어.",
						soundEffects: [
							{
								tag: "CLOTH_DRAGGING",
							},
						],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "여러 개의 손이었어.",
				chunks: [
					{
						content: "여러 개의 손이었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
		],
		background: null,
		segmentEffects: {
			soundEffects: [],
			visualEffects: [],
		},
	},
	{
		id: "seg-42",
		lines: [
			{
				text: '"으아아악!"',
				chunks: [
					{
						content: '"으아아악!"',
						soundEffects: [
							{
								tag: "MALE_SCREAM_TERROR",
							},
						],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [
						{
							tag: "MUSIC_STINGER_SYNTH_SHRIEK",
						},
					],
					visualEffects: [],
				},
			},
			{
				text: "도현이 돌아봤지만 아무것도 없었어.",
				chunks: [
					{
						content: "도현이 돌아봤지만 아무것도 없었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
		],
		background: null,
		segmentEffects: {
			soundEffects: [],
			visualEffects: [],
		},
	},
	{
		id: "seg-43",
		lines: [
			{
				text: "하지만 손목에서 따끔거림이 시작되었어.",
				chunks: [
					{
						content: "하지만 손목에서 따끔거림이 시작되었어.",
						textEffects: ["JITTER"],
						soundEffects: [
							{
								tag: "HIGH_PITCH_RINGING_EARS",
							},
						],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "피부가 간지러웠어.",
				chunks: [
					{
						content: "피부가 간지러웠어.",
						textEffects: ["PULSE_SLOW"],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
		],
		background: null,
		segmentEffects: {
			soundEffects: [
				{
					tag: "DRONE_INDUSTRIAL_ABYSS",
					status: "stop",
				},
				{
					tag: "ROOMTONE_WAREHOUSE_ECHO",
					status: "stop",
				},
			],
			visualEffects: [
				{
					tag: "EFFECT_FLASHLIGHT",
					status: "stop",
				},
			],
		},
	},
	{
		id: "seg-44",
		lines: [
			{
				text: "지하 7층으로 내려가야 했어.",
				chunks: [
					{
						content: "지하 7층으로 내려가야 했어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [
						{
							tag: "FOOTSTEPS_TUNNEL",
						},
					],
					visualEffects: [],
				},
			},
			{
				text: "마지막 배송지였어.",
				chunks: [
					{
						content: "마지막 배송지였어.",
						soundEffects: [
							{
								tag: "METAL_CREAK",
							},
						],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
		],
		background: null,
		segmentEffects: {
			soundEffects: [],
			visualEffects: [],
		},
	},
	{
		id: "seg-45",
		lines: [
			{
				text: "7층은 더 컸어.",
				chunks: [
					{
						content: "7층은 더 컸어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "축구장만한 공간에 거대한 수조들이 늘어서 있었어.",
				chunks: [
					{
						content: "축구장만한 공간에 거대한 수조들이 늘어서 있었어.",
						soundEffects: [
							{
								tag: "GLASS_SQUEAK",
							},
							{
								tag: "LIQUID_DRIPPING_HEAVY",
							},
						],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
		],
		background: {
			url: "goedamjip-story-image/68c8e50d5c9545abc228b000/seg-45",
			type: "background",
			sustain_until: "seg-57",
		},
		segmentEffects: {
			soundEffects: [
				{
					tag: "ROOMTONE_BASEMENT_HUM",
					status: "start",
				},
				{
					tag: "CAVE_AMBIENCE_DRIPPING",
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
	},
	{
		id: "seg-46",
		lines: [
			{
				text: "수조 안에는...",
				chunks: [
					{
						content: "수조 안에는...",
					},
				],
				preLineEffects: {
					image: {
						url: "goedamjip-story-image/68c8e50d5c9545abc228b000/seg-46",
						type: "overlay",
						sustain_until: "seg-49",
					},
					soundEffects: [
						{
							tag: "GLASS_SQUEAK",
						},
						{
							tag: "CREATURE_CHITTERING",
						},
					],
					visualEffects: [],
				},
			},
			{
				text: "말로 설명할 수 없는 것들이 있었어.",
				chunks: [
					{
						content: "말로 설명할 수 없는 것들이 있었어.",
						textEffects: ["GLITCH"],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
		],
		background: null,
		segmentEffects: {
			soundEffects: [],
			visualEffects: [],
		},
	},
	{
		id: "seg-47",
		lines: [
			{
				text: "팔다리가 무수히 얽힌 살덩어리.",
				chunks: [
					{
						content: "팔다리가 무수히 얽힌 살덩어리.",
						soundEffects: [
							{
								tag: "CLAW_SCRATCH",
							},
						],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "여전히 꿈틀거리고 있었어.",
				chunks: [
					{
						content: "여전히 꿈틀거리고 있었어.",
						soundEffects: [
							{
								tag: "BONE_CREAK",
							},
						],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
		],
		background: null,
		segmentEffects: {
			soundEffects: [],
			visualEffects: [],
		},
	},
	{
		id: "seg-48",
		lines: [
			{
				text: "심장 소리가 여러 개 들렸어.",
				chunks: [
					{
						content: "심장 소리가 여러 개 들렸어.",
						textEffects: ["PULSE_SLOW"],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "쿵쾅... 쿵쾅쾅... 쿵... 쿵쾅...",
				chunks: [
					{
						content: "쿵쾅... 쿵쾅쾅... 쿵... 쿵쾅...",
						textEffects: ["PULSE_FAST"],
						soundEffects: [
							{
								tag: "HEARTBEAT_FAST",
							},
						],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
		],
		background: null,
		segmentEffects: {
			soundEffects: [],
			visualEffects: [],
		},
	},
	{
		id: "seg-49",
		lines: [
			{
				text: "모두 다른 리듬이었어.",
				chunks: [
					{
						content: "모두 다른 리듬이었어.",
						soundEffects: [
							{
								tag: "GHOSTLY_WHISPERS_OVERLAPPING",
							},
						],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "20년이 지났는데도 아직 살아있었어.",
				chunks: [
					{
						content: "20년이 지났는데도 아직 살아있었어.",
						soundEffects: [
							{
								tag: "CREATURE_CHITTERING",
							},
						],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
		],
		background: null,
		segmentEffects: {
			soundEffects: [],
			visualEffects: [],
		},
	},
	{
		id: "seg-50",
		lines: [
			{
				text: "그때 손가락 끝을 봤어.",
				chunks: [
					{
						content: "그때 손가락 끝을 봤어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "검지 손가락이 중간부터 둘로 갈라지고 있었어.",
				chunks: [
					{
						content: "검지 손가락이 중간부터",
					},
					{
						content: "둘로 갈라지고 있었어.",
						soundEffects: [
							{
								tag: "HEARTBEAT_FAST",
							},
						],
					},
				],
				preLineEffects: {
					image: {
						url: "goedamjip-story-image/68c8e50d5c9545abc228b000/seg-50",
						type: "overlay",
						sustain_until: "seg-52",
					},
					soundEffects: [
						{
							tag: "BONE_CREAK",
						},
						{
							tag: "GLASS_SQUEAK",
						},
					],
					visualEffects: [],
				},
			},
		],
		background: null,
		segmentEffects: {
			soundEffects: [],
			visualEffects: [],
		},
	},
	{
		id: "seg-51",
		lines: [
			{
				text: '"이건... 뭐야?"',
				chunks: [
					{
						content: '"이건... 뭐야?"',
						textEffects: ["JITTER"],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "피가 나지 않았어. 세포가 분열하면서 자연스럽게 갈라지고 있었어.",
				chunks: [
					{
						content: "피가 나지 않았어.",
					},
					{
						content: "세포가 분열하면서 자연스럽게 갈라지고 있었어.",
						soundEffects: [
							{
								tag: "HEARTBEAT_FAST",
							},
						],
					},
				],
				preLineEffects: {
					image: {
						url: null,
						type: "overlay",
					},
					soundEffects: [
						{
							tag: "GLASS_SQUEAK",
						},
					],
					visualEffects: [],
				},
			},
		],
		background: null,
		segmentEffects: {
			soundEffects: [],
			visualEffects: [],
		},
	},
	{
		id: "seg-52",
		lines: [
			{
				text: "아프지도 않았어.",
				chunks: [
					{
						content: "아프지도 않았어.",
						soundEffects: [
							{
								tag: "BREATH_CALMING_DOWN",
							},
						],
					},
				],
				preLineEffects: {
					image: {
						url: null,
						type: "overlay",
					},
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "오히려 시원했어.",
				chunks: [
					{
						content: "오히려 시원했어.",
						textEffects: ["PULSE_SLOW"],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
		],
		background: null,
		segmentEffects: {
			soundEffects: [],
			visualEffects: [],
		},
	},
	{
		id: "seg-53",
		lines: [
			{
				text: "공기 중에 뭔가 있었어.",
				chunks: [
					{
						content: "공기 중에 뭔가 있었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [
						{
							tag: "MALE_GHOST_PRESENCE",
						},
					],
					visualEffects: [],
				},
			},
			{
				text: "실험 잔여물이 20년째 떠돌고 있었어.",
				chunks: [
					{
						content: "실험 잔여물이 20년째 떠돌고 있었어.",
						textEffects: ["GLITCH"],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
		],
		background: null,
		segmentEffects: {
			soundEffects: [],
			visualEffects: [],
		},
	},
	{
		id: "seg-54",
		lines: [
			{
				text: "급하게 엘리베이터로 뛰어갔어.",
				chunks: [
					{
						content: "급하게 엘리베이터로 뛰어갔어.",
						soundEffects: [
							{
								tag: "BREATH_HEAVY_PANIC",
							},
						],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [
						{
							tag: "FOOTSTEPS_TUNNEL",
						},
					],
					visualEffects: [],
				},
			},
			{
				text: "하지만 버튼을 눌러도 올라가지 않았어.",
				chunks: [
					{
						content: "하지만 버튼을 눌러도 올라가지 않았어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [
						{
							tag: "SWITCH_ONOFF_TOGGLE",
						},
						{
							tag: "STATIC_BURST_LOUD",
						},
					],
					visualEffects: [],
				},
			},
		],
		background: null,
		segmentEffects: {
			soundEffects: [],
			visualEffects: [],
		},
	},
	{
		id: "seg-55",
		lines: [
			{
				text: '"안 돼! 안 돼!"',
				chunks: [
					{
						content: '"안 돼! 안 돼!"',
						textEffects: ["PULSE_FAST"],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "계단으로 뛰어갔어.",
				chunks: [
					{
						content: "계단으로 뛰어갔어.",
						soundEffects: [
							{
								tag: "HEARTBEAT_FAST",
							},
						],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [
						{
							tag: "FOOTSTEP_EXTERIOR_RUN",
						},
					],
					visualEffects: [],
				},
			},
		],
		background: null,
		segmentEffects: {
			soundEffects: [],
			visualEffects: [],
		},
	},
	{
		id: "seg-56",
		lines: [
			{
				text: "계단문도 잠겨 있었어.",
				chunks: [
					{
						content: "계단문도 잠겨 있었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [
						{
							tag: "RATTLING_LOCKED_DOOR",
						},
					],
					visualEffects: [],
				},
			},
			{
				text: "완전히 갇혔어.",
				chunks: [
					{
						content: "완전히 갇혔어.",
						soundEffects: [
							{
								tag: "HEARTBEAT_FAST",
							},
						],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
		],
		background: null,
		segmentEffects: {
			soundEffects: [],
			visualEffects: [],
		},
	},
	{
		id: "seg-57",
		lines: [
			{
				text: "손가락 변이가 빨라지고 있었어.",
				chunks: [
					{
						content: "손가락 변이가 빨라지고 있었어.",
						textEffects: ["JITTER"],
						soundEffects: [
							{
								tag: "BONE_CREAK",
							},
						],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "이제 중지도 갈라지기 시작했어.",
				chunks: [
					{
						content: "이제 중지도",
					},
					{
						content: "갈라지기 시작했어.",
						textEffects: ["PULSE_FAST"],
						soundEffects: [
							{
								tag: "FABRIC_TEAR_SLOW",
							},
						],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
		],
		background: null,
		segmentEffects: {
			soundEffects: [
				{
					tag: "ROOMTONE_BASEMENT_HUM",
					status: "stop",
				},
				{
					tag: "CAVE_AMBIENCE_DRIPPING",
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
	},
	{
		id: "seg-58",
		lines: [
			{
				text: "몇 시간 후, 간신히 비상구를 찾았어.",
				chunks: [
					{
						content: "몇 시간 후, 간신히 비상구를 찾았어.",
						soundEffects: [
							{
								tag: "FOOTSTEP_EXTERIOR_RUN",
							},
						],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "지상으로 나왔을 때는 이미 해가 졌어.",
				chunks: [
					{
						content: "지상으로 나왔을 때는 이미 해가 졌어.",
						soundEffects: [
							{
								tag: "HEARTBEAT_FAST",
							},
						],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
		],
		background: {
			url: "goedamjip-story-image/68c8e50d5c9545abc228b000/seg-58",
			type: "background",
			sustain_until: "seg-59",
		},
		segmentEffects: {
			soundEffects: [
				{
					tag: "CITY_AMBIENCE_NIGHT",
					status: "start",
				},
			],
			visualEffects: [
				{
					tag: "VISUAL_RAIN_FALLING",
					status: "start",
				},
			],
		},
	},
	{
		id: "seg-59",
		lines: [
			{
				text: "하지만 너무 늦었어.",
				chunks: [
					{
						content: "하지만 너무 늦었어.",
						textEffects: ["PULSE_SLOW"],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "변이는 되돌릴 수 없었어.",
				chunks: [
					{
						content: "변이는 되돌릴 수 없었어.",
						textEffects: ["PULSE_FAST"],
						soundEffects: [
							{
								tag: "BONE_CREAK",
							},
						],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
		],
		background: null,
		segmentEffects: {
			soundEffects: [
				{
					tag: "CITY_AMBIENCE_NIGHT",
					status: "stop",
				},
			],
			visualEffects: [
				{
					tag: "VISUAL_RAIN_FALLING",
					status: "stop",
				},
			],
		},
	},
	{
		id: "seg-60",
		lines: [
			{
				text: "일주일 후.",
				chunks: [
					{
						content: "일주일 후.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "도현은 다시 택배 업무를 시작했어.",
				chunks: [
					{
						content: "도현은 다시 택배 업무를 시작했어.",
						textEffects: ["STYLE_FONT_HANDWRITTEN_UNSTABLE"],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
		],
		background: {
			url: "goedamjip-story-image/68c8e50d5c9545abc228b000/seg-60",
			type: "background",
			sustain_until: "seg-60",
		},
		segmentEffects: {
			soundEffects: [
				{
					tag: "CITY_AMBIENCE_DAY",
					status: "start",
				},
			],
			visualEffects: [
				{
					tag: "SCREEN_BLUR",
					status: "start",
				},
			],
		},
	},
	{
		id: "seg-61",
		lines: [
			{
				text: "변이된 손가락을 밴드로 감쌌어.",
				chunks: [
					{
						content: "변이된 손가락을 밴드로 감쌌어.",
						soundEffects: [
							{
								tag: "SCISSORS_SNIPPING",
							},
						],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: '"다치셨어요?" 동료가 물어봤어.',
				chunks: [
					{
						content: '"다치셨어요?" 동료가 물어봤어.',
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
		],
		background: null,
		segmentEffects: {
			soundEffects: [],
			visualEffects: [],
		},
	},
	{
		id: "seg-62",
		lines: [
			{
				text: '"그냥... 베인 것 같아요."',
				chunks: [
					{
						content: '"그냥... 베인 것 같아요."',
						textEffects: ["STYLE_ITALIC"],
						soundEffects: [
							{
								tag: "SWALLOWING_NERVOUS",
							},
						],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "평범하게 대답했어.",
				chunks: [
					{
						content: "평범하게 대답했어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
		],
		background: null,
		segmentEffects: {
			soundEffects: [],
			visualEffects: [],
		},
	},
	{
		id: "seg-63",
		lines: [
			{
				text: "하지만 밤마다 손가락이 더 갈라졌어.",
				chunks: [
					{
						content: "하지만 밤마다 손가락이 더 갈라졌어.",
						textEffects: ["PULSE_SLOW"],
						soundEffects: [
							{
								tag: "FABRIC_TEAR",
							},
						],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "발가락도 시작됐어.",
				chunks: [
					{
						content: "발가락도 시작됐어.",
						textEffects: ["JITTER"],
						soundEffects: [
							{
								tag: "LIQUID_SPLATTER",
							},
						],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
		],
		background: null,
		segmentEffects: {
			soundEffects: [],
			visualEffects: [],
		},
	},
	{
		id: "seg-64",
		lines: [
			{
				text: "그리고 오늘.",
				chunks: [
					{
						content: "그리고 오늘.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "택배 상자 하나를 정리하다가.",
				chunks: [
					{
						content: "택배 상자 하나를 정리하다가.",
						soundEffects: [
							{
								tag: "PAPER_CRUMPLING",
							},
						],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
		],
		background: null,
		segmentEffects: {
			soundEffects: [
				{
					tag: "CITY_AMBIENCE_DAY",
					status: "stop",
				},
			],
			visualEffects: [
				{
					tag: "SCREEN_BLUR",
					status: "stop",
				},
			],
		},
	},
	{
		id: "seg-65",
		lines: [
			{
				text: "상자를 열었을 때 봤어.",
				chunks: [
					{
						content: "상자를 열었을 때 봤어.",
					},
				],
				preLineEffects: {
					image: {
						url: "goedamjip-story-image/68c8e50d5c9545abc228b000/seg-65",
						type: "overlay",
						sustain_until: "seg-67",
					},
					soundEffects: [
						{
							tag: "MUSIC_STINGER_PIANO_HIGH_DISCORDANT",
						},
						{
							tag: "GLASS_SQUEAK",
						},
					],
					visualEffects: ["OVERLAY_GLITCH"],
				},
			},
			{
				text: "자신의 변이된 손가락과 똑같은 모양이 꿈틀거리는 걸.",
				chunks: [
					{
						content: "자신의 변이된 손가락과 똑같은 모양이 꿈틀거리는 걸.",
						soundEffects: [
							{
								tag: "BREATH_SHAKY_PANIC",
							},
						],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
		],
		background: null,
		segmentEffects: {
			soundEffects: [
				{
					tag: "ROOMTONE_FLUORESCENT_BUZZ",
					status: "start",
				},
			],
			visualEffects: [
				{
					tag: "EFFECT_FLASHLIGHT",
					status: "start",
				},
			],
		},
	},
	{
		id: "seg-66",
		lines: [
			{
				text: "상자를 떨어뜨렸어.",
				chunks: [
					{
						content: "상자를 떨어뜨렸어.",
						soundEffects: [
							{
								tag: "METAL_IMPACT_DULL",
							},
						],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "자신의 손가락을 확인했어.",
				chunks: [
					{
						content: "자신의 손가락을 확인했어.",
						soundEffects: [
							{
								tag: "BREATH_SHAKY_PANIC",
							},
						],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
		],
		background: null,
		segmentEffects: {
			soundEffects: [],
			visualEffects: [],
		},
	},
	{
		id: "seg-67",
		lines: [
			{
				text: "변이가 더 진행되어 있었어.",
				chunks: [
					{
						content: "변이가 더 진행되어 있었어.",
						soundEffects: [
							{
								tag: "BONE_CREAK",
							},
						],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "이제 8개가 되었어.",
				chunks: [
					{
						content: "이제 8개가 되었어.",
						textEffects: ["GLOW_RED", "STYLE_BOLD"],
						soundEffects: [
							{
								tag: "HEARTBEAT_FAST",
							},
						],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
		],
		background: null,
		segmentEffects: {
			soundEffects: [],
			visualEffects: [],
		},
	},
	{
		id: "seg-68",
		lines: [
			{
				text: "그리고 깨달았어.",
				chunks: [
					{
						content: "그리고 깨달았어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "배송이 아직 완료되지 않았다는 걸.",
				chunks: [
					{
						content: "배송이 아직 완료되지 않았다는 걸.",
						textEffects: ["GLITCH"],
						soundEffects: [
							{
								tag: "SMARTPHONE_NOTIFICATION_GLITCH",
							},
						],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
		],
		background: null,
		segmentEffects: {
			soundEffects: [
				{
					tag: "ROOMTONE_FLUORESCENT_BUZZ",
					status: "stop",
				},
			],
			visualEffects: [
				{
					tag: "EFFECT_FLASHLIGHT",
					status: "stop",
				},
			],
		},
	},
	{
		id: "seg-69",
		lines: [
			{
				text: "자신이 이제 배송할 물건이라는 걸.",
				chunks: [
					{
						content: "자신이 이제 배송할 물건이라는 걸.",
						textEffects: ["GLITCH", "STYLE_BOLD"],
						soundEffects: [
							{
								tag: "BREATH_HEAVY_PANIC",
							},
						],
					},
				],
				preLineEffects: {
					image: {
						url: "goedamjip-story-image/68c8e50d5c9545abc228b000/seg-69",
						type: "overlay",
						sustain_until: "seg-71",
					},
					soundEffects: [
						{
							tag: "MUSIC_STINGER_PIANO_MID_DISCORDANT",
						},
						{
							tag: "SMARTPHONE_NOTIFICATION_GLITCH",
						},
					],
					visualEffects: [],
				},
			},
		],
		background: null,
		segmentEffects: {
			soundEffects: [
				{
					tag: "DRONE_INDUSTRIAL_ABYSS",
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
	},
	{
		id: "seg-70",
		lines: [
			{
				text: "근데 더 무서운 건 말이야...",
				chunks: [
					{
						content: "근데 더 무서운 건 말이야...",
						soundEffects: [
							{
								tag: "HEARTBEAT_FAST",
							},
						],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "그 택배 회사 직원들 중에서 최근 '손가락 이상' 증상을 보이는 사람이 계속 늘고 있다는 거야.",
				chunks: [
					{
						content:
							"그 택배 회사 직원들 중에서 최근 '손가락 이상' 증상을 보이는 사람이 계속 늘고 있다는 거야.",
						textEffects: ["TYPEWRITER", "STYLE_UNDERLINE"],
						soundEffects: [
							{
								tag: "GHOSTLY_WHISPERS_OVERLAPPING",
							},
						],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
		],
		background: null,
		segmentEffects: {
			soundEffects: [],
			visualEffects: [],
		},
	},
	{
		id: "seg-71",
		lines: [
			{
				text: "모두 도현과 같은 구역에서 일하는 사람들이었어.",
				chunks: [
					{
						content: "모두 도현과 같은 구역에서 일하는 사람들이었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "배송은 계속되고 있어.",
				chunks: [
					{
						content: "배송은 계속되고 있어.",
						textEffects: ["PULSE_SLOW"],
						soundEffects: [
							{
								tag: "SMARTPHONE_NOTIFICATION",
							},
						],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
		],
		background: null,
		segmentEffects: {
			soundEffects: [],
			visualEffects: [],
		},
	},
];
