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
				text: "작년 겨울 K대학교에서 실제로 일어난 실종사건이야.",
				chunks: [
					{
						content: "작년 겨울 K대학교에서 실제로 일어난 실종사건이야.",
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
					tag: "CITY_AMBIENCE_NIGHT",
					status: "start",
				},
				{
					tag: "WIND_HEAVY",
					status: "start",
				},
			],
			visualEffects: [
				{
					tag: "OVERLAY_SNOWFALL",
					status: "start",
				},
			],
		},
	},
	{
		id: "seg-2",
		lines: [
			{
				text: "이준혁, 24살.",
				chunks: [
					{
						content: "이준혁, 24살.",
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
				text: "생명과학과 4년생.",
				chunks: [
					{
						content: "생명과학과 4년생.",
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
					tag: "CITY_AMBIENCE_NIGHT",
					status: "stop",
				},
				{
					tag: "WIND_HEAVY",
					status: "stop",
				},
			],
			visualEffects: [
				{
					tag: "OVERLAY_SNOWFALL",
					status: "stop",
				},
			],
		},
	},
	{
		id: "seg-3",
		lines: [
			{
				text: "그가 눈을 떴을 때는 지하 3층 실험실 바닥이었어.",
				chunks: [
					{
						content: "그가 눈을 떴을 때는 지하 3층 실험실 바닥이었어.",
						textEffects: ["INK_REVEAL"],
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
			url: "goedamjip-story-image/68ee69a87b218880b71b2000/seg-3",
			type: "background",
			sustain_until: "seg-19",
		},
		segmentEffects: {
			soundEffects: [
				{
					tag: "ROOMTONE_BASEMENT_HUM",
					status: "start",
				},
				{
					tag: "ROOMTONE_FLUORESCENT_BUZZ",
					status: "start",
				},
				{
					tag: "DRONE_SURROUNDED_THREAT",
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
		id: "seg-4",
		lines: [
			{
				text: "머리가 깨질 듯 아팠어.",
				chunks: [
					{
						content: "머리가 깨질 듯 아팠어.",
						textEffects: ["SHAKE"],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "손으로 바닥을 짚었는데...",
				chunks: [
					{
						content: "손으로 바닥을 짚었는데...",
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
				text: "미끄러웠어.",
				chunks: [
					{
						content: "미끄러웠어.",
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
		id: "seg-6",
		lines: [
			{
				text: "천천히 고개를 들었어.",
				chunks: [
					{
						content: "천천히 고개를 들었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "주변이 보이기 시작했어.",
				chunks: [
					{
						content: "주변이 보이기 시작했어.",
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
					tag: "DRONE_SURROUNDED_THREAT",
					status: "stop",
				},
			],
			visualEffects: [],
		},
	},
	{
		id: "seg-7",
		lines: [
			{
				text: "실험복 입은 시신들이 바닥에 널려 있었어.",
				chunks: [
					{
						content: "실험복 입은 시신들이 바닥에 널려 있었어.",
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
			{
				text: "6구.",
				chunks: [
					{
						content: "6구.",
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
					tag: "DRONE_FEAR_PSYCHOSIS",
					status: "start",
				},
			],
			visualEffects: [],
		},
	},
	{
		id: "seg-8",
		lines: [
			{
				text: "검은 체액이 입에서 흘러나와 있었어.",
				chunks: [
					{
						content: "검은 체액이 입에서 흘러나와 있었어.",
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
			{
				text: "턱이... 비정상적으로 늘어져 있었어.",
				chunks: [
					{
						content: "턱이... 비정상적으로 늘어져 있었어.",
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
		],
		background: null,
		segmentEffects: {
			soundEffects: [],
			visualEffects: [],
		},
	},
	{
		id: "seg-9",
		lines: [
			{
				text: "썩은 고기 냄새와 화학약품 냄새가 섞여 있었어.",
				chunks: [
					{
						content: "썩은 고기 냄새와 화학약품 냄새가 섞여 있었어.",
						soundEffects: [
							{
								tag: "INSECT_SWARM_BUZZING",
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
		id: "seg-10",
		lines: [
			{
				text: "준혁은 비틀거리며 일어났어.",
				chunks: [
					{
						content: "준혁은 비틀거리며 일어났어.",
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
			{
				text: "형광등이 깜빡거렸어.",
				chunks: [
					{
						content: "형광등이 깜빡거렸어.",
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
		id: "seg-11",
		lines: [
			{
				text: '"다 죽었구나..."',
				chunks: [
					{
						content: '"다 죽었구나..."',
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "중얼거리며 시신들 사이를 걸었어.",
				chunks: [
					{
						content: "중얼거리며 시신들 사이를 걸었어.",
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
		],
		background: null,
		segmentEffects: {
			soundEffects: [],
			visualEffects: [],
		},
	},
	{
		id: "seg-12",
		lines: [
			{
				text: "그런데.",
				chunks: [
					{
						content: "그런데.",
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
		id: "seg-13",
		lines: [
			{
				text: "발밑의 시신 하나가 경련했어.",
				chunks: [
					{
						content: "발밑의 시신 하나가 경련했어.",
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
		id: "seg-14",
		lines: [
			{
				text: "손이 움직였어.",
				chunks: [
					{
						content: "손이 움직였어.",
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
		id: "seg-15",
		lines: [
			{
				text: "준혁의 발목을 움켜잡았어.",
				chunks: [
					{
						content: "준혁의 발목을 움켜잡았어.",
					},
				],
				preLineEffects: {
					image: {
						url: "goedamjip-story-image/68ee69a87b218880b71b2000/seg-15",
						type: "jumpscare",
						sustain_until: "seg-15",
					},
					soundEffects: [
						{
							tag: "LIQUID_SPLATTER",
						},
					],
					visualEffects: ["SCREEN_SHAKE"],
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
		id: "seg-16",
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
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "뒤로 넘어지며 발을 뺐어.",
				chunks: [
					{
						content: "뒤로 넘어지며 발을 뺐어.",
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
		],
		background: null,
		segmentEffects: {
			soundEffects: [],
			visualEffects: [],
		},
	},
	{
		id: "seg-17",
		lines: [
			{
				text: "시신이 일어나려고 했어.",
				chunks: [
					{
						content: "시신이 일어나려고 했어.",
					},
				],
				preLineEffects: {
					image: {
						url: "goedamjip-story-image/68ee69a87b218880b71b2000/seg-17",
						type: "overlay",
						sustain_until: "seg-19",
					},
					soundEffects: [
						{
							tag: "LIQUID_DRIPPING_HEAVY",
						},
					],
					visualEffects: [],
				},
			},
			{
				text: "관절이 반대 방향으로 꺾이면서.",
				chunks: [
					{
						content: "관절이 반대 방향으로 꺾이면서.",
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
		id: "seg-18",
		lines: [
			{
				text: "뚝.",
				chunks: [
					{
						content: "뚝.",
						soundEffects: [
							{
								tag: "TWIG_SNAP_CLOSE",
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
				text: "뚝뚝.",
				chunks: [
					{
						content: "뚝뚝.",
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
		id: "seg-19",
		lines: [
			{
				text: "준혁은 기어서 도망쳤어.",
				chunks: [
					{
						content: "준혁은 기어서 도망쳤어.",
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
				text: "실험실 문을 박차고 나갔어.",
				chunks: [
					{
						content: "실험실 문을 박차고 나갔어.",
						soundEffects: [
							{
								tag: "DOOR_SLAM",
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
					tag: "DRONE_FEAR_PSYCHOSIS",
					status: "stop",
				},
			],
			visualEffects: [],
		},
	},
	{
		id: "seg-20",
		lines: [
			{
				text: "복도는 어두웠어.",
				chunks: [
					{
						content: "복도는 어두웠어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "차가운 형광등만 간헐적으로 깜빡였어.",
				chunks: [
					{
						content: "차가운 형광등만 간헐적으로 깜빡였어.",
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
			url: "goedamjip-story-image/68ee69a87b218880b71b2000/seg-20",
			type: "background",
			sustain_until: "seg-27",
		},
		segmentEffects: {
			soundEffects: [
				{
					tag: "DRONE_SURROUNDED_THREAT",
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
				text: "출구를 향해 뛰었어.",
				chunks: [
					{
						content: "출구를 향해 뛰었어.",
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
					tag: "DRONE_SURROUNDED_THREAT",
					status: "stop",
				},
			],
			visualEffects: [],
		},
	},
	{
		id: "seg-22",
		lines: [
			{
				text: "빨간 불이 켜져 있었어.",
				chunks: [
					{
						content: "빨간 불이 켜져 있었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [
						{
							tag: "ALARM_BLARING_GENERIC",
						},
					],
					visualEffects: [],
				},
			},
			{
				text: "「비상 봉쇄」",
				chunks: [
					{
						content: "「비상 봉쇄」",
						textEffects: ["PULSE_FAST"],
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
					tag: "DRONE_SUFFOCATE_DREAD",
					status: "start",
				},
			],
			visualEffects: [],
		},
	},
	{
		id: "seg-23",
		lines: [
			{
				text: "문손잡이를 잡아당겼어.",
				chunks: [
					{
						content: "문손잡이를 잡아당겼어.",
						soundEffects: [
							{
								tag: "RATTLING_LOCKED_DOOR",
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
				text: "꿈쩍도 안 했어.",
				chunks: [
					{
						content: "꿈쩍도 안 했어.",
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
				text: "보안카드를 찾았어.",
				chunks: [
					{
						content: "보안카드를 찾았어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "주머니를 뒤졌지만 없었어.",
				chunks: [
					{
						content: "주머니를 뒤졌지만 없었어.",
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
				text: "그때였어.",
				chunks: [
					{
						content: "그때였어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "복도 저 끝에서.",
				chunks: [
					{
						content: "복도 저 끝에서.",
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
				text: "그르르...",
				chunks: [
					{
						content: "그르르...",
						soundEffects: [
							{
								tag: "GROWL_LOW",
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
		id: "seg-27",
		lines: [
			{
				text: "목구멍에서 나는 소리.",
				chunks: [
					{
						content: "목구멍에서 나는 소리.",
						soundEffects: [
							{
								tag: "CREATURE_GUTTURAL_GROAN",
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
				text: "무언가 기어오고 있었어.",
				chunks: [
					{
						content: "무언가 기어오고 있었어.",
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
		id: "seg-28",
		lines: [
			{
				text: "준혁은 옆 실험실로 뛰어들었어.",
				chunks: [
					{
						content: "준혁은 옆 실험실로 뛰어들었어.",
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
				text: "문을 닫고 안에서 잠갔어.",
				chunks: [
					{
						content: "문을 닫고 안에서 잠갔어.",
						soundEffects: [
							{
								tag: "DOOR_SLAM",
							},
							{
								tag: "KEY_IN_LOCK",
							},
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
		],
		background: {
			url: "goedamjip-story-image/68ee69a87b218880b71b2000/seg-28",
			type: "background",
			sustain_until: "seg-43",
		},
		segmentEffects: {
			soundEffects: [
				{
					tag: "DRONE_CRUSHING_PRESSURE",
					status: "start",
				},
			],
			visualEffects: [],
		},
	},
	{
		id: "seg-29",
		lines: [
			{
				text: "숨을 죽였어.",
				chunks: [
					{
						content: "숨을 죽였어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "복도에서 발자국 소리가 들렸어.",
				chunks: [
					{
						content: "복도에서 발자국 소리가 들렸어.",
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
			soundEffects: [],
			visualEffects: [],
		},
	},
	{
		id: "seg-30",
		lines: [
			{
				text: "아니, 발자국이 아니었어.",
				chunks: [
					{
						content: "아니, 발자국이 아니었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "손으로 기어가는 소리였어.",
				chunks: [
					{
						content: "손으로 기어가는 소리였어.",
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
		],
		background: null,
		segmentEffects: {
			soundEffects: [],
			visualEffects: [],
		},
	},
	{
		id: "seg-31",
		lines: [
			{
				text: "뚝뚝.",
				chunks: [
					{
						content: "뚝뚝.",
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
			{
				text: "뚝뚝.",
				chunks: [
					{
						content: "뚝뚝.",
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
		id: "seg-32",
		lines: [
			{
				text: "관절이 부러진 팔로 바닥을 짚는 소리.",
				chunks: [
					{
						content: "관절이 부러진 팔로 ",
						soundEffects: [
							{
								tag: "BONE_CREAK",
							},
						],
					},
					{
						content: "바닥을 짚는 소리.",
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
				text: "문 앞을 지나갔어.",
				chunks: [
					{
						content: "문 앞을 지나갔어.",
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
		id: "seg-33",
		lines: [
			{
				text: "...",
				chunks: [
					{
						content: "...",
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
		id: "seg-34",
		lines: [
			{
				text: "소리가 멀어졌어.",
				chunks: [
					{
						content: "소리가 멀어졌어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "준혁은 등을 벽에 기댔어.",
				chunks: [
					{
						content: "준혁은 등을 벽에 기댔어.",
						soundEffects: [
							{
								tag: "BREATH_CALMING_DOWN",
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
				text: '"대체 무슨 일이..."',
				chunks: [
					{
						content: '"대체 무슨 일이..."',
						soundEffects: [
							{
								tag: "MALE_WHISPER_CLOSE",
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
		id: "seg-36",
		lines: [
			{
				text: "주변을 살폈어.",
				chunks: [
					{
						content: "주변을 살폈어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "여기는 컴퓨터실이었어.",
				chunks: [
					{
						content: "여기는 컴퓨터실이었어.",
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
		id: "seg-37",
		lines: [
			{
				text: "모니터 하나가 켜져 있었어.",
				chunks: [
					{
						content: "모니터 하나가 켜져 있었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "다가갔어.",
				chunks: [
					{
						content: "다가갔어.",
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
		id: "seg-38",
		lines: [
			{
				text: "화면에 폴더 하나가 열려 있었어.",
				chunks: [
					{
						content: "화면에 폴더 하나가 열려 있었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "「실험 일지 - 불멸 프로젝트」",
				chunks: [
					{
						content: "「실험 일지 - 불멸 프로젝트」",
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
				text: "클릭했어.",
				chunks: [
					{
						content: "클릭했어.",
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
				text: "12월 18일.",
				chunks: [
					{
						content: "12월 18일.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: '"3차 실험 준비 완료. 이번엔 성공할 것이다."',
				chunks: [
					{
						content: '"3차 실험 준비 완료. 이번엔 성공할 것이다."',
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
		id: "seg-41",
		lines: [
			{
				text: "12월 19일.",
				chunks: [
					{
						content: "12월 19일.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: '"바이러스 배양 성공. 불멸 유전자 활성화 확인."',
				chunks: [
					{
						content: '"바이러스 배양 성공. 불멸 유전자 활성화 확인."',
						textEffects: ["TYPEWRITER", "STYLE_BOLD"],
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
				text: "12월 20일.",
				chunks: [
					{
						content: "12월 20일.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: '"동물 실험 결과... 예상과 다름. 세포 변이 관찰됨."',
				chunks: [
					{
						content: '"동물 실험 결과... 예상과 다름. 세포 변이 관찰됨."',
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
		id: "seg-43",
		lines: [
			{
				text: "준혁의 손이 떨렸어.",
				chunks: [
					{
						content: "준혁의 손이 떨렸어.",
						textEffects: ["JITTER"],
						soundEffects: [
							{
								tag: "BREATH_SHAKY_PANIC",
							},
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
				text: "다음 파일을 열었어.",
				chunks: [
					{
						content: "다음 파일을 열었어.",
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
					tag: "DRONE_SUFFOCATE_DREAD",
					status: "stop",
				},
				{
					tag: "DRONE_CRUSHING_PRESSURE",
					status: "stop",
				},
			],
			visualEffects: [],
		},
	},
	{
		id: "seg-44",
		lines: [
			{
				text: "CCTV 영상이었어.",
				chunks: [
					{
						content: "CCTV 영상이었어.",
						textEffects: ["GLITCH"],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [
						{
							tag: "RECORDING_PLAYBACK_START",
						},
					],
					visualEffects: [],
				},
			},
			{
				text: "12시간 전 기록.",
				chunks: [
					{
						content: "12시간 전 기록.",
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
		background: {
			url: "goedamjip-story-image/68ee69a87b218880b71b2000/seg-44",
			type: "background",
			sustain_until: "seg-60",
		},
		segmentEffects: {
			soundEffects: [
				{
					tag: "ANALOG_TAPE_HISS",
					status: "start",
				},
				{
					tag: "DRONE_SCANNER_SIGNAL",
					status: "start",
				},
			],
			visualEffects: [],
		},
	},
	{
		id: "seg-45",
		lines: [
			{
				text: "화면 속에는 이 실험실이 보였어.",
				chunks: [
					{
						content: "화면 속에는 이 실험실이 보였어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "여섯 명이 회의하고 있었어.",
				chunks: [
					{
						content: "여섯 명이 회의하고 있었어.",
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
		id: "seg-46",
		lines: [
			{
				text: "준혁 자신도 거기 있었어.",
				chunks: [
					{
						content: "준혁 자신도 거기 있었어.",
						textEffects: ["INK_REVEAL"],
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
				text: '"이건 너무 위험해요, 준혁아."',
				chunks: [
					{
						content: '"이건 너무 위험해요, 준혁아."',
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
				text: "여학생이 말했어.",
				chunks: [
					{
						content: "여학생이 말했어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "김소영. 같은 과 동기였어.",
				chunks: [
					{
						content: "김소영. 같은 과 동기였어.",
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
				text: '"박태민 선배 말이 맞아. 동물 실험도 실패했잖아."',
				chunks: [
					{
						content: '"박태민 선배 말이 맞아. 동물 실험도 실패했잖아."',
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "다른 학생이 거들었어.",
				chunks: [
					{
						content: "다른 학생이 거들었어.",
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
				text: "하지만 화면 속 준혁은 고개를 저었어.",
				chunks: [
					{
						content: "하지만 화면 속 준혁은 고개를 저었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: '"이번엔 달라. 용량을 조절했어."',
				chunks: [
					{
						content: '"이번엔 달라. 용량을 조절했어."',
						textEffects: ["STYLE_BOLD"],
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
					tag: "DRONE_SCANNER_SIGNAL",
					status: "stop",
				},
				{
					tag: "ANALOG_TAPE_HISS",
					status: "stop",
				},
			],
			visualEffects: [],
		},
	},
	{
		id: "seg-50",
		lines: [
			{
				text: "갑자기 환풍구에서 소리가 났어.",
				chunks: [
					{
						content: "갑자기 환풍구에서 소리가 났어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [
						{
							tag: "METAL_CREAK",
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
					tag: "DRONE_SURROUNDED_THREAT",
					status: "start",
				},
			],
			visualEffects: [],
		},
	},
	{
		id: "seg-51",
		lines: [
			{
				text: "드르륵.",
				chunks: [
					{
						content: "드르륵.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [
						{
							tag: "METAL_CREAK",
						},
					],
					visualEffects: [],
				},
			},
			{
				text: "드르륵.",
				chunks: [
					{
						content: "드르륵.",
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
		id: "seg-52",
		lines: [
			{
				text: "무언가 환풍구를 기어가고 있었어.",
				chunks: [
					{
						content: "무언가 환풍구를 기어가고 있었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [
						{
							tag: "SLITHERING_ON_FLOOR",
						},
					],
					visualEffects: [],
				},
			},
			{
				text: "준혁은 의자를 뒤로 빼며 천장을 올려다봤어.",
				chunks: [
					{
						content: "준혁은 의자를 뒤로 빼며 천장을 올려다봤어.",
						soundEffects: [
							{
								tag: "WOOD_CREAK",
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
		id: "seg-53",
		lines: [
			{
				text: "환풍구 틈으로.",
				chunks: [
					{
						content: "환풍구 틈으로.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "혼탁한 눈동자 하나가 들여다보고 있었어.",
				chunks: [
					{
						content: "혼탁한 눈동자 하나가 들여다보고 있었어.",
					},
				],
				preLineEffects: {
					image: {
						url: "goedamjip-story-image/68ee69a87b218880b71b2000/seg-53",
						type: "overlay",
						sustain_until: "seg-55",
					},
					soundEffects: [
						{
							tag: "HEARTBEAT_SUDDEN_LOUD",
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
		id: "seg-54",
		lines: [
			{
				text: "검은 침이 뚝 떨어졌어.",
				chunks: [
					{
						content: "검은 침이 뚝 떨어졌어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [
						{
							tag: "LIQUID_DRIPPING_SLOW",
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
				text: "준혁은 책상 밑으로 숨었어.",
				chunks: [
					{
						content: "준혁은 책상 밑으로 숨었어.",
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
				text: "환풍구 덮개가 떨어졌어.",
				chunks: [
					{
						content: "환풍구 덮개가 떨어졌어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [
						{
							tag: "METAL_CREAK",
						},
					],
					visualEffects: [],
				},
			},
			{
				text: "쾅!",
				chunks: [
					{
						content: "쾅!",
						soundEffects: [
							{
								tag: "METAL_IMPACT_DULL",
							},
						],
						visualEffects: ["SCREEN_SHAKE"],
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
				text: "무언가 바닥에 떨어졌어.",
				chunks: [
					{
						content: "무언가 바닥에 떨어졌어.",
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
			{
				text: "관절이 꺾인 팔다리로 기어다니기 시작했어.",
				chunks: [
					{
						content: "관절이 꺾인 팔다리로 기어다니기 시작했어.",
					},
				],
				preLineEffects: {
					image: {
						url: "goedamjip-story-image/68ee69a87b218880b71b2000/seg-57",
						type: "overlay",
						sustain_until: "seg-62",
					},
					soundEffects: [
						{
							tag: "SLITHERING_ON_FLOOR",
						},
						{
							tag: "BONE_CREAK",
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
		id: "seg-58",
		lines: [
			{
				text: "책상 주변을 맴돌았어.",
				chunks: [
					{
						content: "책상 주변을 맴돌었어.",
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
				text: "그르르...",
				chunks: [
					{
						content: "그르르...",
						soundEffects: [
							{
								tag: "GROWL_LOW",
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
		id: "seg-59",
		lines: [
			{
				text: "준혁은 입을 막았어.",
				chunks: [
					{
						content: "준혁은 입을 막았어.",
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
				text: "심장이 터질 것 같았어.",
				chunks: [
					{
						content: "심장이 터질 것 같았어.",
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
		id: "seg-60",
		lines: [
			{
				text: "그 존재가 책상 앞에 멈췄어.",
				chunks: [
					{
						content: "그 존재가 책상 앞에 멈췄어.",
						soundEffects: [
							{
								tag: "HEARTBEAT_SUDDEN_LOUD",
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
					tag: "DRONE_SURROUNDED_THREAT",
					status: "stop",
				},
			],
			visualEffects: [],
		},
	},
	{
		id: "seg-61",
		lines: [
			{
				text: "천천히.",
				chunks: [
					{
						content: "천천히.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "아래로.",
				chunks: [
					{
						content: "아래로.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "고개를 숙였어.",
				chunks: [
					{
						content: "고개를 숙였어.",
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
		],
		background: {
			url: "goedamjip-story-image/68ee69a87b218880b71b2000/seg-61",
			type: "background",
			sustain_until: "seg-67",
		},
		segmentEffects: {
			soundEffects: [
				{
					tag: "DRONE_SUFFOCATE_DREAD",
					status: "start",
				},
			],
			visualEffects: [],
		},
	},
	{
		id: "seg-62",
		lines: [
			{
				text: "책상 밑을 들여다봤어.",
				chunks: [
					{
						content: "책상 밑을 들여다봤어.",
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
				text: "턱이 바닥까지 늘어진 얼굴.",
				chunks: [
					{
						content: "턱이 바닥까지 늘어진 얼굴.",
					},
				],
				preLineEffects: {
					image: {
						url: "goedamjip-story-image/68ee69a87b218880b71b2000/seg-63",
						type: "overlay",
						sustain_until: "seg-66",
					},
					soundEffects: [
						{
							tag: "LIQUID_DRIPPING_SLOW",
						},
					],
					visualEffects: [],
				},
			},
			{
				text: "갈비뼈가 피부를 뚫고 나와 있었어.",
				chunks: [
					{
						content: "갈비뼈가 피부를 뚫고 나와 있었어.",
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
		id: "seg-64",
		lines: [
			{
				text: "김소영이었어.",
				chunks: [
					{
						content: "김소영이었어.",
						textEffects: ["INK_REVEAL"],
						soundEffects: [
							{
								tag: "HEARTBEAT_SUDDEN_LOUD",
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
		id: "seg-65",
		lines: [
			{
				text: '"소영아..."',
				chunks: [
					{
						content: '"소영아..."',
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
			{
				text: "준혁이 떨리는 목소리로 불렀어.",
				chunks: [
					{
						content: "준혁이 떨리는 목소리로 불렀어.",
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
		id: "seg-66",
		lines: [
			{
				text: "김소영의 입이 벌어졌어.",
				chunks: [
					{
						content: "김소영의 입이 벌어졌어.",
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
				text: "귀까지 찢어지면서.",
				chunks: [
					{
						content: "귀까지 찢어지면서.",
						soundEffects: [
							{
								tag: "FABRIC_TEAR_SLOW",
							},
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
		id: "seg-67",
		lines: [
			{
				text: "준혁은 반대편으로 굴렀어.",
				chunks: [
					{
						content: "준혁은 반대편으로 굴렀어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "일어나서 문을 박차고 나갔어.",
				chunks: [
					{
						content: "일어나서 문을 박차고 나갔어.",
						soundEffects: [
							{
								tag: "DOOR_SLAM",
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
				{
					tag: "DRONE_SUFFOCATE_DREAD",
					status: "stop",
				},
			],
			visualEffects: [
				{
					tag: "SCREEN_FLICKER",
					status: "stop",
				},
			],
		},
	},
	{
		id: "seg-68",
		lines: [
			{
				text: "복도를 뛰었어.",
				chunks: [
					{
						content: "복도를 뛰었어.",
						soundEffects: [
							{
								tag: "FOOTSTEPS_TUNNEL",
							},
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
				text: "뒤에서 기어오는 소리가 들렸어.",
				chunks: [
					{
						content: "뒤에서 기어오는 소리가 들렸어.",
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
		background: {
			url: "goedamjip-story-image/68ee69a87b218880b71b2000/seg-68",
			type: "background",
			sustain_until: "seg-79",
		},
		segmentEffects: {
			soundEffects: [
				{
					tag: "DRONE_SURROUNDED_THREAT",
					status: "start",
				},
				{
					tag: "ROOMTONE_WAREHOUSE_ECHO",
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
		id: "seg-69",
		lines: [
			{
				text: "냉동실이 보였어.",
				chunks: [
					{
						content: "냉동실이 보였어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "문이 살짝 열려 있었어.",
				chunks: [
					{
						content: "문이 살짝 열려 있었어.",
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
		id: "seg-70",
		lines: [
			{
				text: "안으로 뛰어들었어.",
				chunks: [
					{
						content: "안으로 뛰어들었어.",
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
				text: "문을 닫으려는 순간.",
				chunks: [
					{
						content: "문을 닫으려는 순간.",
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
				text: "뒤에서 손이 어깨를 움켜쥐었어.",
				chunks: [
					{
						content: "뒤에서 손이 어깨를 움켜쥐었어.",
						soundEffects: [
							{
								tag: "MALE_GASP_SHOCK",
							},
						],
					},
				],
				preLineEffects: {
					image: {
						url: "goedamjip-story-image/68ee69a87b218880b71b2000/seg-71",
						type: "jumpscare",
						sustain_until: "seg-71",
					},
					soundEffects: [
						{
							tag: "HEARTBEAT_SUDDEN_LOUD",
						},
					],
					visualEffects: ["SCREEN_SHAKE"],
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
		id: "seg-72",
		lines: [
			{
				text: "차갑고 뜨거웠어.",
				chunks: [
					{
						content: "차갑고 뜨거웠어.",
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
				text: "동시에.",
				chunks: [
					{
						content: "동시에.",
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
		id: "seg-73",
		lines: [
			{
				text: "천천히 고개를 돌렸어.",
				chunks: [
					{
						content: "천천히 고개를 돌렸어.",
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
		id: "seg-74",
		lines: [
			{
				text: "얼굴이 일그러진 남자가 서 있었어.",
				chunks: [
					{
						content: "얼굴이 일그러진 남자가 서 있었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "입에서 검은 액체를 흘리며.",
				chunks: [
					{
						content: "입에서 검은 액체를 흘리며.",
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
		id: "seg-75",
		lines: [
			{
				text: '"태민... 선배..."',
				chunks: [
					{
						content: '"태민... 선배..."',
						textEffects: ["JITTER"],
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
		id: "seg-76",
		lines: [
			{
				text: "박태민이 입을 열었어.",
				chunks: [
					{
						content: "박태민이 입을 열었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: '"으으으..."',
				chunks: [
					{
						content: '"으으으..."',
						soundEffects: [
							{
								tag: "CREATURE_GUTTURAL_GROAN",
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
		id: "seg-77",
		lines: [
			{
				text: "아직 의식이 남아 있는 것 같았어.",
				chunks: [
					{
						content: "아직 의식이 남아 있는 것 같았어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "그게 더 끔찍했어.",
				chunks: [
					{
						content: "그게 더 끔찍했어.",
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
		id: "seg-78",
		lines: [
			{
				text: '"그르르..."',
				chunks: [
					{
						content: '"그르르..."',
						soundEffects: [
							{
								tag: "GROWL_LOW",
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
				text: "목구멍에서 소리가 났어.",
				chunks: [
					{
						content: "목구멍에서 소리가 났어.",
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
		id: "seg-79",
		lines: [
			{
				text: "준혁은 대답할 수 없었어.",
				chunks: [
					{
						content: "준혁은 대답할 수 없었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "기억이 없었으니까.",
				chunks: [
					{
						content: "기억이 없었으니까.",
						textEffects: ["INK_REVEAL"],
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
					tag: "DRONE_SURROUNDED_THREAT",
					status: "stop",
				},
				{
					tag: "ROOMTONE_WAREHOUSE_ECHO",
					status: "stop",
				},
			],
			visualEffects: [
				{
					tag: "SCREEN_FLICKER",
					status: "stop",
				},
			],
		},
	},
	{
		id: "seg-80",
		lines: [
			{
				text: "선배의 손아귀에서 벗어나 냉동실로 들어갔어.",
				chunks: [
					{
						content: "선배의 손아귀에서 벗어나 냉동실로 들어갔어.",
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
				text: "문을 닫았어.",
				chunks: [
					{
						content: "문을 닫았어.",
						soundEffects: [
							{
								tag: "DOOR_SLAM",
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
			url: "goedamjip-story-image/68ee69a87b218880b71b2000/seg-80",
			type: "background",
			sustain_until: "seg-99",
		},
		segmentEffects: {
			soundEffects: [
				{
					tag: "ROOMTONE_FLUORESCENT_BUZZ",
					status: "start",
				},
				{
					tag: "DRONE_INDUSTRIAL_ABYSS",
					status: "start",
				},
				{
					tag: "WIND_DRAFT_WHISTLE",
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
		id: "seg-81",
		lines: [
			{
				text: "쿵!",
				chunks: [
					{
						content: "쿵!",
						soundEffects: [
							{
								tag: "DOOR_POUNDING_SLOW",
								repeat: 2,
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
				text: "쿵!",
				chunks: [
					{
						content: "쿵!",
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
		id: "seg-82",
		lines: [
			{
				text: "밖에서 두드리는 소리.",
				chunks: [
					{
						content: "밖에서 두드리는 소리.",
						soundEffects: [
							{
								tag: "DOOR_KNOCK_SLOW",
								repeat: 2,
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
				text: "점점 약해졌어.",
				chunks: [
					{
						content: "점점 약해졌어.",
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
		id: "seg-83",
		lines: [
			{
				text: "냉동실 안은 영하 20도였어.",
				chunks: [
					{
						content: "냉동실 안은 영하 20도였어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "준혁은 떨기 시작했어.",
				chunks: [
					{
						content: "준혁은 떨기 시작했어.",
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
		id: "seg-84",
		lines: [
			{
				text: "구석에 노트북이 있었어.",
				chunks: [
					{
						content: "구석에 노트북이 있었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "배터리가 남아 있었어.",
				chunks: [
					{
						content: "배터리가 남아 있었어.",
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
		id: "seg-85",
		lines: [
			{
				text: "파일을 열었어.",
				chunks: [
					{
						content: "파일을 열었어.",
						soundEffects: [
							{
								tag: "SWITCH_CLICK_FLAT",
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
				text: "음성 녹음 파일이었어.",
				chunks: [
					{
						content: "음성 녹음 파일이었어.",
						textEffects: ["INK_REVEAL"],
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
		id: "seg-86",
		lines: [
			{
				text: "재생 버튼을 눌렀어.",
				chunks: [
					{
						content: "재생 버튼을 눌렀어.",
						soundEffects: [
							{
								tag: "RECORDING_PLAYBACK_START",
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
		id: "seg-87",
		lines: [
			{
				text: "갑자기 스피커에서 소리가 울려퍼졌어.",
				chunks: [
					{
						content: "갑자기 스피커에서 소리가 울려퍼졌어.",
						soundEffects: [
							{
								tag: "MALE_GASP_SHOCK",
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
		id: "seg-88",
		lines: [
			{
				text: '"이교수님, 승인해주세요!"',
				chunks: [
					{
						content: '"이교수님, 승인해주세요!"',
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [
						{
							tag: "AUDIO_RESUME_WITH_NOISE",
						},
					],
					visualEffects: [],
				},
			},
			{
				text: "준혁 자신의 목소리였어.",
				chunks: [
					{
						content: "준혁 자신의 목소리였어.",
						textEffects: ["INK_REVEAL"],
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
		id: "seg-89",
		lines: [
			{
				text: '"안 돼, 준혁. 동물 실험에서 이미 실패했잖나."',
				chunks: [
					{
						content: '"안 돼, 준혁. 동물 실험에서 이미 실패했잖나."',
						textEffects: ["STYLE_BOLD"],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "나이 든 남자 목소리.",
				chunks: [
					{
						content: "나이 든 남자 목소리.",
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
		id: "seg-90",
		lines: [
			{
				text: '"교수님은 항상 그래요! 기회를 안 주잖아요!"',
				chunks: [
					{
						content: '"교수님은 항상 그래요! 기회를 안 주잖아요!"',
						textEffects: ["PULSE_FAST"],
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
		id: "seg-91",
		lines: [
			{
				text: '"자네 지금..."',
				chunks: [
					{
						content: '"자네 지금..."',
						textEffects: ["GLITCH"],
						soundEffects: [
							{
								tag: "AUDIO_CUTOUT_ABRUPT",
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
		id: "seg-92",
		lines: [
			{
				text: "뚝.",
				chunks: [
					{
						content: "뚝.",
						soundEffects: [
							{
								tag: "AUDIO_CUTOUT_ABRUPT",
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
				text: "녹음이 끊겼어.",
				chunks: [
					{
						content: "녹음이 끊겼어.",
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
		id: "seg-93",
		lines: [
			{
				text: "다음 파일.",
				chunks: [
					{
						content: "다음 파일.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [
						{
							tag: "SWITCH_CLICK_FLAT",
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
		id: "seg-94",
		lines: [
			{
				text: '"준혁아, 이건 너무 위험해. 제발 생각 좀 해."',
				chunks: [
					{
						content: '"준혁아, 이건 너무 위험해. 제발 생각 좀 해."',
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [
						{
							tag: "AUDIO_RESUME_WITH_NOISE",
						},
					],
					visualEffects: [],
				},
			},
			{
				text: "김소영 목소리였어.",
				chunks: [
					{
						content: "김소영 목소리였어.",
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
		id: "seg-95",
		lines: [
			{
				text: '"난 이미 다 생각했어. 이번이 마지막 기회야."',
				chunks: [
					{
						content: '"난 이미 다 생각했어. 이번이 마지막 기회야."',
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "다시 준혁 목소리.",
				chunks: [
					{
						content: "다시 준혁 목소리.",
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
		id: "seg-96",
		lines: [
			{
				text: '"마지막 기회라니... 우리 생명을 가지고 실험하겠다고?"',
				chunks: [
					{
						content: '"마지막 기회라니... 우리 생명을 가지고 실험하겠다고?"',
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "박태민 목소리.",
				chunks: [
					{
						content: "박태민 목소리.",
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
		id: "seg-97",
		lines: [
			{
				text: '"성공하면 노벨상이야. 불멸이라고. 영원한 생명!"',
				chunks: [
					{
						content: '"성공하면 노벨상이야. 불멸이라고. 영원한 생명!"',
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
		id: "seg-98",
		lines: [
			{
				text: "준혁은 노트북을 꺼버렸어.",
				chunks: [
					{
						content: "준혁은 노트북을 꺼버렸어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [
						{
							tag: "RECORDING_PLAYBACK_STOP",
						},
					],
					visualEffects: [],
				},
			},
			{
				text: "손이 떨렸어.",
				chunks: [
					{
						content: "손이 떨렸어.",
						textEffects: ["JITTER"],
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
		id: "seg-99",
		lines: [
			{
				text: "기억이 조각조각 돌아오기 시작했어.",
				chunks: [
					{
						content: "기억이 조각조각 ",
					},
					{
						content: "돌아오기 시작했어.",
						textEffects: ["INK_REVEAL"],
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
				{
					tag: "DRONE_INDUSTRIAL_ABYSS",
					status: "stop",
				},
				{
					tag: "WIND_DRAFT_WHISTLE",
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
		id: "seg-100",
		lines: [
			{
				text: "3일 전.",
				chunks: [
					{
						content: "3일 전.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "그날 밤.",
				chunks: [
					{
						content: "그날 밤.",
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
		background: {
			url: "goedamjip-story-image/68ee69a87b218880b71b2000/seg-100",
			type: "background",
			sustain_until: "seg-128",
		},
		segmentEffects: {
			soundEffects: [
				{
					tag: "ROOMTONE_FLUORESCENT_BUZZ",
					status: "start",
				},
				{
					tag: "DRONE_SUFFOCATE_DREAD",
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
		id: "seg-101",
		lines: [
			{
				text: "문득 냉동실 선반을 봤어.",
				chunks: [
					{
						content: "문득 냉동실 선반을 봤어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "주사기들이 놓여 있었어.",
				chunks: [
					{
						content: "주사기들이 놓여 있었어.",
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
		id: "seg-102",
		lines: [
			{
				text: "하나가 비어 있었어.",
				chunks: [
					{
						content: "하나가 비어 있었어.",
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
				text: "6개 중 하나.",
				chunks: [
					{
						content: "6개 중 하나.",
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
			visualEffects: [
				{
					tag: "SCREEN_FLICKER",
					status: "stop",
				},
			],
		},
	},
	{
		id: "seg-103",
		lines: [
			{
				text: "밖이 조용해졌어.",
				chunks: [
					{
						content: "밖이 조용해졌어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "문을 살짝 열었어.",
				chunks: [
					{
						content: "문을 살짝 열었어.",
						soundEffects: [
							{
								tag: "DOOR_CREAK_SLOW",
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
		id: "seg-104",
		lines: [
			{
				text: "복도는 텅 비어 있었어.",
				chunks: [
					{
						content: "복도는 텅 비어 있었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "컴퓨터실로 돌아갔어.",
				chunks: [
					{
						content: "컴퓨터실로 돌아갔어.",
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
			soundEffects: [],
			visualEffects: [],
		},
	},
	{
		id: "seg-105",
		lines: [
			{
				text: "멈춰뒀던 CCTV 영상.",
				chunks: [
					{
						content: "멈춰뒀던 CCTV 영상.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "다시 재생했어.",
				chunks: [
					{
						content: "다시 재생했어.",
						soundEffects: [
							{
								tag: "RECORDING_PLAYBACK_START",
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
					tag: "ANALOG_TAPE_HISS",
					status: "start",
				},
			],
			visualEffects: [],
		},
	},
	{
		id: "seg-106",
		lines: [
			{
				text: "12시간 전 영상이 끝나가고 있었어.",
				chunks: [
					{
						content: "12시간 전 영상이 끝나가고 있었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "다음 파일을 열었어.",
				chunks: [
					{
						content: "다음 파일을 열었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [
						{
							tag: "SWITCH_CLICK_TOGGLE",
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
		id: "seg-107",
		lines: [
			{
				text: "3일 전 영상이었어.",
				chunks: [
					{
						content: "3일 전 영상이었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [
						{
							tag: "AUDIO_RESUME_WITH_NOISE",
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
					tag: "DRONE_SUFFOCATE_DREAD",
					status: "stop",
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
		id: "seg-108",
		lines: [
			{
				text: "화면 속.",
				chunks: [
					{
						content: "화면 속.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "준혁이 주사기를 들고 있었어.",
				chunks: [
					{
						content: "준혁이 주사기를 들고 있었어.",
					},
				],
				preLineEffects: {
					image: {
						url: "goedamjip-story-image/68ee69a87b218880b71b2000/seg-108",
						type: "overlay",
						sustain_until: "seg-120",
					},
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
			soundEffects: [
				{
					tag: "DRONE_STALKING_FEAR",
					status: "start",
				},
			],
			visualEffects: [],
		},
	},
	{
		id: "seg-109",
		lines: [
			{
				text: "여섯 명의 동료들이 의자에 묶여 있었어.",
				chunks: [
					{
						content: "여섯 명의 동료들이 의자에 묶여 있었어.",
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
		id: "seg-110",
		lines: [
			{
				text: '"준혁아! 제발!"',
				chunks: [
					{
						content: '"준혁아! 제발!"',
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "김소영이 울부짖었어.",
				chunks: [
					{
						content: "김소영이 울부짖었어.",
						soundEffects: [
							{
								tag: "SCREAM_RECORDED",
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
		id: "seg-111",
		lines: [
			{
				text: '"미안, 소영아. 하지만 이건 인류를 위한 거야."',
				chunks: [
					{
						content: '"미안, 소영아. 하지만 이건 인류를 위한 거야."',
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "화면 속 준혁이 말했어.",
				chunks: [
					{
						content: "화면 속 준혁이 말했어.",
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
		id: "seg-112",
		lines: [
			{
				text: "한 명씩.",
				chunks: [
					{
						content: "한 명씩.",
						soundEffects: [
							{
								tag: "HEARTBEAT_SUDDEN_LOUD",
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
				text: "주사를 놓었어.",
				chunks: [
					{
						content: "주사를 놓었어.",
						soundEffects: [
							{
								tag: "SWITCH_CLICK_FLAT",
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
		id: "seg-113",
		lines: [
			{
				text: "비명.",
				chunks: [
					{
						content: "비명.",
						textEffects: ["SHAKE"],
						soundEffects: [
							{
								tag: "SCREAM_RADIO_STATIC",
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
				text: "울음.",
				chunks: [
					{
						content: "울음.",
						textEffects: ["JITTER"],
						soundEffects: [
							{
								tag: "VOICE_ANDROGYNOUS_HYSTERIA",
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
				text: "애원.",
				chunks: [
					{
						content: "애원.",
						textEffects: ["PULSE_SLOW"],
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
		id: "seg-114",
		lines: [
			{
				text: "준혁은 화면을 볼 수 없었어.",
				chunks: [
					{
						content: "준혁은 화면을 볼 수 없었어.",
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
				text: "하지만 멈출 수도 없었어.",
				chunks: [
					{
						content: "하지만 멈출 수도 없었어.",
						soundEffects: [
							{
								tag: "KEYBOARD_TYPING",
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
		id: "seg-115",
		lines: [
			{
				text: "마지막 주사.",
				chunks: [
					{
						content: "마지막 주사.",
						soundEffects: [
							{
								tag: "HEARTBEAT_SUDDEN_LOUD",
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
				text: "준혁 자신의 팔에.",
				chunks: [
					{
						content: "준혁 자신의 팔에.",
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
		],
		background: null,
		segmentEffects: {
			soundEffects: [],
			visualEffects: [],
		},
	},
	{
		id: "seg-116",
		lines: [
			{
				text: '"나도... 함께 할게."',
				chunks: [
					{
						content: '"나도... 함께 할게."',
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "화면 속 준혁이 웃었어.",
				chunks: [
					{
						content: "화면 속 준혁이 웃었어.",
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
		id: "seg-117",
		lines: [
			{
				text: "그리고.",
				chunks: [
					{
						content: "그리고.",
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
		id: "seg-118",
		lines: [
			{
				text: "20분 후.",
				chunks: [
					{
						content: "20분 후.",
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
		id: "seg-119",
		lines: [
			{
				text: "의자에 묶였던 6명이 경련하기 시작했어.",
				chunks: [
					{
						content: "의자에 묶였던 6명이 경련하기 시작했어.",
						soundEffects: [
							{
								tag: "BONE_CREAK",
							},
						],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [
						{
							tag: "HEART_MONITOR_STEADY",
						},
					],
					visualEffects: [],
				},
			},
			{
				text: "검은 혈관이 피부 아래로 퍼졌어.",
				chunks: [
					{
						content: "검은 혈관이 피부 아래로 퍼졌어.",
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
			soundEffects: [],
			visualEffects: [],
		},
	},
	{
		id: "seg-120",
		lines: [
			{
				text: "턱이 늘어졌어.",
				chunks: [
					{
						content: "턱이 늘어졌어.",
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
				text: "갈비뼈가 피부를 뚫었어.",
				chunks: [
					{
						content: "갈비뼈가 피부를 뚫었어.",
						soundEffects: [
							{
								tag: "BONE_CREAK",
							},
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
		id: "seg-121",
		lines: [
			{
				text: "비명이 신음으로 바뀌었어.",
				chunks: [
					{
						content: "비명이",
						soundEffects: [
							{
								tag: "SCREAM_RECORDED",
							},
						],
					},
					{
						content: " 신음으로 바뀌었어.",
						soundEffects: [
							{
								tag: "CREATURE_GUTTURAL_GROAN",
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
		id: "seg-122",
		lines: [
			{
				text: "그들이 밧줄을 끊었어.",
				chunks: [
					{
						content: "그들이 밧줄을 끊었어.",
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
				text: "괴력으로.",
				chunks: [
					{
						content: "괴력으로.",
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
		id: "seg-123",
		lines: [
			{
				text: "카메라 앞의 준혁을 향해 다가갔어.",
				chunks: [
					{
						content: "카메라 앞의 준혁을 향해 다가갔어.",
						soundEffects: [
							{
								tag: "FOOTSTEP_HEAVY_LUMBERING",
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
		id: "seg-124",
		lines: [
			{
				text: "화면이 흔들렸어.",
				chunks: [
					{
						content: "화면이 흔들렸어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: ["SCREEN_SHAKE"],
				},
			},
			{
				text: "준혁이 도망쳤어.",
				chunks: [
					{
						content: "준혁이 도망쳤어.",
						soundEffects: [
							{
								tag: "FOOTSTEP_EXTERIOR_RUN",
							},
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
		],
		background: null,
		segmentEffects: {
			soundEffects: [],
			visualEffects: [],
		},
	},
	{
		id: "seg-125",
		lines: [
			{
				text: "쾅!",
				chunks: [
					{
						content: "쾅!",
						textEffects: ["SHAKE"],
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
				text: "무언가 카메라를 쳤어.",
				chunks: [
					{
						content: "무언가 카메라를 쳤어.",
						soundEffects: [
							{
								tag: "STATIC_BURST_LOUD",
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
		id: "seg-126",
		lines: [
			{
				text: "영상이 끊겼어.",
				chunks: [
					{
						content: "영상이 끊겼어.",
						textEffects: ["GLITCH"],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [
						{
							tag: "AUDIO_CUTOUT_ABRUPT",
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
					tag: "ANALOG_TAPE_HISS",
					status: "stop",
				},
				{
					tag: "DRONE_STALKING_FEAR",
					status: "stop",
				},
			],
			visualEffects: [],
		},
	},
	{
		id: "seg-127",
		lines: [
			{
				text: "지금 앉아있는 컴퓨터실.",
				chunks: [
					{
						content: "지금 앉아있는 컴퓨터실.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "모니터 옆면에 금이 가 있었어.",
				chunks: [
					{
						content: "모니터 옆면에 금이 가 있었어.",
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
					tag: "DRONE_SURROUNDED_THREAT",
					status: "start",
				},
			],
			visualEffects: [],
		},
	},
	{
		id: "seg-128",
		lines: [
			{
				text: "준혁은 천천히 일어났어.",
				chunks: [
					{
						content: "준혁은 천천히 일어났어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "화장실로 걸어갔어.",
				chunks: [
					{
						content: "화장실로 걸어갔어.",
						soundEffects: [
							{
								tag: "FOOTSTEP_LIGHT_TAPS",
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
					tag: "DRONE_STALKING_FEAR",
					status: "start",
				},
			],
			visualEffects: [],
		},
	},
	{
		id: "seg-129",
		lines: [
			{
				text: "거울 앞에 섰어.",
				chunks: [
					{
						content: "거울 앞에 섰어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [
						{
							tag: "FAUCET_DRIP",
						},
					],
					visualEffects: [],
				},
			},
		],
		background: {
			url: "goedamjip-story-image/68ee69a87b218880b71b2000/seg-129",
			type: "background",
			sustain_until: "seg-156",
		},
		segmentEffects: {
			soundEffects: [],
			visualEffects: [],
		},
	},
	{
		id: "seg-130",
		lines: [
			{
				text: '"나는... 아직 괜찮아."',
				chunks: [
					{
						content: '"나는... 아직 괜찮아."',
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
				text: "자신에게 말했어.",
				chunks: [
					{
						content: "자신에게 말했어.",
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
		id: "seg-131",
		lines: [
			{
				text: "거울 속 자신을 봤어.",
				chunks: [
					{
						content: "거울 속 자신을 봤어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "창백한 얼굴.",
				chunks: [
					{
						content: "창백한 얼굴.",
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
					tag: "VISUAL_VIGNETTE",
					status: "start",
				},
			],
		},
	},
	{
		id: "seg-132",
		lines: [
			{
				text: "목을 봤어.",
				chunks: [
					{
						content: "목을 봤어.",
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
		id: "seg-133",
		lines: [
			{
				text: "거기.",
				chunks: [
					{
						content: "거기.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "선명한 주사 흔적이 있었어.",
				chunks: [
					{
						content: "선명한 주사 흔적이 있었어.",
						soundEffects: [
							{
								tag: "HEARTBEAT_SUDDEN_LOUD",
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
		id: "seg-134",
		lines: [
			{
				text: "3일 전 그 주사.",
				chunks: [
					{
						content: "3일 전 그 주사.",
						textEffects: ["INK_REVEAL"],
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
		id: "seg-135",
		lines: [
			{
				text: "준혁은 거울을 주먹으로 쳤어.",
				chunks: [
					{
						content: "준혁은 거울을 주먹으로 쳤어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "쾅!",
				chunks: [
					{
						content: "쾅!",
						soundEffects: [
							{
								tag: "GLASS_SHATTER",
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
		id: "seg-136",
		lines: [
			{
				text: "거울이 깨졌어.",
				chunks: [
					{
						content: "거울이 깨졌어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "손에서 피가 났어.",
				chunks: [
					{
						content: "손에서 피가 났어.",
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
		id: "seg-137",
		lines: [
			{
				text: "피가.",
				chunks: [
					{
						content: "피가.",
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
				text: "검게 변하기 시작했어.",
				chunks: [
					{
						content: "검게 변하기 시작했어.",
						textEffects: ["GLOW_RED"],
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
		id: "seg-138",
		lines: [
			{
				text: '"아... 아니..."',
				chunks: [
					{
						content: '"아... 아니..."',
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
			soundEffects: [],
			visualEffects: [],
		},
	},
	{
		id: "seg-139",
		lines: [
			{
				text: "목구멍이 뜨거웠어.",
				chunks: [
					{
						content: "목구멍이 뜨거웠어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "타는 것 같았어.",
				chunks: [
					{
						content: "타는 것 같았어.",
						textEffects: ["SHAKE"],
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
		],
		background: null,
		segmentEffects: {
			soundEffects: [
				{
					tag: "DRONE_STALKING_FEAR",
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
		id: "seg-140",
		lines: [
			{
				text: "거울 파편에 비친 자신의 눈.",
				chunks: [
					{
						content: "거울 파편에 비친 자신의 눈.",
					},
				],
				preLineEffects: {
					image: {
						url: "goedamjip-story-image/68ee69a87b218880b71b2000/seg-140",
						type: "overlay",
						sustain_until: "seg-144",
					},
					soundEffects: [
						{
							tag: "HEARTBEAT_SUDDEN_LOUD",
						},
					],
					visualEffects: [],
				},
			},
			{
				text: "혼탁하게 변하고 있었어.",
				chunks: [
					{
						content: "혼탁하게 변하고 있었어.",
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
		id: "seg-141",
		lines: [
			{
				text: "무릎이 꺾였어.",
				chunks: [
					{
						content: "무릎이 꺾였어.",
						soundEffects: [
							{
								tag: "HEARTBEAT_SUDDEN_LOUD",
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
				text: "바닥에 주저앉았어.",
				chunks: [
					{
						content: "바닥에 주저앉았어.",
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
		id: "seg-142",
		lines: [
			{
				text: '"내가... 다 죽였어..."',
				chunks: [
					{
						content: '"내가... 다 죽였어..."',
						textEffects: ["STYLE_FONT_HANDWRITTEN_UNSTABLE", "JITTER"],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [
						{
							tag: "SWALLOWING_NERVOUS",
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
		id: "seg-143",
		lines: [
			{
				text: "복도에서 다시 소리가 들렸어.",
				chunks: [
					{
						content: "복도에서 다시 소리가 들렸어.",
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
				text: "여러 명이었어.",
				chunks: [
					{
						content: "여러 명이었어.",
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
			soundEffects: [
				{
					tag: "CAVE_AMBIENCE_DRIPPING",
					status: "start",
				},
			],
			visualEffects: [],
		},
	},
	{
		id: "seg-144",
		lines: [
			{
				text: "뚝뚝.",
				chunks: [
					{
						content: "뚝뚝.",
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
			{
				text: "뚝뚝.",
				chunks: [
					{
						content: "뚝뚝.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "그르르...",
				chunks: [
					{
						content: "그르르...",
						soundEffects: [
							{
								tag: "GROWL_LOW",
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
		id: "seg-145",
		lines: [
			{
				text: "그들이 오고 있었어.",
				chunks: [
					{
						content: "그들이 오고 있었어.",
						soundEffects: [
							{
								tag: "FOOTSTEP_LIGHT_TAPS",
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
				text: "준혁을 찾으러.",
				chunks: [
					{
						content: "준혁을 찾으러.",
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
		id: "seg-146",
		lines: [
			{
				text: "준혁은 웃었어.",
				chunks: [
					{
						content: "준혁은 웃었어.",
						soundEffects: [
							{
								tag: "MALE_MANIACAL_LAUGH",
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
				text: "이상하게.",
				chunks: [
					{
						content: "이상하게.",
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
		id: "seg-147",
		lines: [
			{
				text: "웃음이 멈추지 않았어.",
				chunks: [
					{
						content: "웃음이 멈추지 않았어.",
						soundEffects: [
							{
								tag: "VOICE_ANDROGYNOUS_HYSTERIA",
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
				text: "목구멍에서 이상한 소리가 났어.",
				chunks: [
					{
						content: "목구멍에서 이상한 소리가 났어.",
						soundEffects: [
							{
								tag: "DEMON_LABORED_WHEEZE",
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
		id: "seg-148",
		lines: [
			{
				text: "그르르...",
				chunks: [
					{
						content: "그르르...",
						soundEffects: [
							{
								tag: "GROWL_LOW",
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
		id: "seg-149",
		lines: [
			{
				text: "문이 열렸어.",
				chunks: [
					{
						content: "문이 열렸어.",
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
				text: "6개의 그림자가 들어왔어.",
				chunks: [
					{
						content: "6개의 그림자가 들어왔어.",
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
		id: "seg-150",
		lines: [
			{
				text: "한때 동료였던.",
				chunks: [
					{
						content: "한때 동료였던.",
						textEffects: ["INK_REVEAL"],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "이제는.",
				chunks: [
					{
						content: "이제는.",
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
		id: "seg-151",
		lines: [
			{
				text: "준혁은 그들을 올려다봤어.",
				chunks: [
					{
						content: "준혁은 그들을 올려다봤어.",
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
		id: "seg-152",
		lines: [
			{
				text: '"미안... 해..."',
				chunks: [
					{
						content: '"미안... 해..."',
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
		id: "seg-153",
		lines: [
			{
				text: "그들이 다가왔어.",
				chunks: [
					{
						content: "그들이 다가왔어.",
						soundEffects: [
							{
								tag: "FOOTSTEP_HEAVY_LUMBERING",
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
		id: "seg-154",
		lines: [
			{
				text: "...",
				chunks: [
					{
						content: "...",
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
				{
					tag: "DRONE_SURROUNDED_THREAT",
					status: "stop",
				},
				{
					tag: "CAVE_AMBIENCE_DRIPPING",
					status: "stop",
				},
				{
					tag: "SCREEN_FLICKER",
					status: "stop",
				},
			],
			visualEffects: [],
		},
	},
	{
		id: "seg-155",
		lines: [
			{
				text: "경찰은 일주일 후에 시신들을 발견했대.",
				chunks: [
					{
						content: "경찰은 일주일 후에 시신들을 발견했대.",
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
				text: "7구.",
				chunks: [
					{
						content: "7구.",
						textEffects: ["STYLE_BOLD", "PULSE_SLOW"],
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
			visualEffects: [],
		},
	},
	{
		id: "seg-156",
		lines: [
			{
				text: "신원 확인이 불가능할 정도로 훼손되어 있었어.",
				chunks: [
					{
						content: "신원 확인이 불가능할 정도로 훼손되어 있었어.",
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
				text: "대학은 사건을 은폐했어.",
				chunks: [
					{
						content: "대학은 사건을 은폐했어.",
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
		id: "seg-157",
		lines: [
			{
				text: "지하 3층은 영구 봉쇄됐어.",
				chunks: [
					{
						content: "지하 3층은 영구 봉쇄됐어.",
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
			url: "goedamjip-story-image/68ee69a87b218880b71b2000/seg-157",
			type: "background",
			sustain_until: "seg-163",
		},
		segmentEffects: {
			soundEffects: [
				{
					tag: "SCREEN_FLICKER",
					status: "start",
				},
			],
			visualEffects: [],
		},
	},
	{
		id: "seg-158",
		lines: [
			{
				text: "근데 말이야.",
				chunks: [
					{
						content: "근데 말이야.",
						textEffects: ["STYLE_ITALIC"],
						soundEffects: [
							{
								tag: "MALE_WHISPER_CLOSE",
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
		id: "seg-159",
		lines: [
			{
				text: "가끔 밤에 그 건물을 지나가는 학생들이 있대.",
				chunks: [
					{
						content: "가끔 밤에 그 건물을 지나가는 학생들이 있대.",
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
		id: "seg-160",
		lines: [
			{
				text: "지하에서 들려오는 소리를.",
				chunks: [
					{
						content: "지하에서 들려오는 소리를.",
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
				{
					tag: "SCREEN_FLICKER",
					status: "stop",
				},
			],
			visualEffects: [],
		},
	},
	{
		id: "seg-161",
		lines: [
			{
				text: "으르렁...",
				chunks: [
					{
						content: "으르렁...",
						soundEffects: [
							{
								tag: "GROWL_LOW",
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
		id: "seg-162",
		lines: [
			{
				text: "경찰은 사건을 종료했지만.",
				chunks: [
					{
						content: "경찰은 사건을 종료했지만.",
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
		id: "seg-163",
		lines: [
			{
				text: "정말 모든 게 끝난 걸까?",
				chunks: [
					{
						content: "정말 모든 게 끝난 걸까?",
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
		id: "seg-164",
		lines: [
			{
				text: "보안 CCTV에 찍힌 마지막 장면.",
				chunks: [
					{
						content: "보안 CCTV에 찍힌 마지막 장면.",
						textEffects: ["GLITCH"],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [
						{
							tag: "RECORDING_PLAYBACK_START",
						},
					],
					visualEffects: [],
				},
			},
		],
		background: {
			url: "goedamjip-story-image/68ee69a87b218880b71b2000/seg-164",
			type: "background",
			sustain_until: "seg-167",
		},
		segmentEffects: {
			soundEffects: [
				{
					tag: "DRONE_SCANNER_SIGNAL",
					status: "start",
				},
				{
					tag: "ANALOG_TAPE_HISS",
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
		id: "seg-165",
		lines: [
			{
				text: "7개의 그림자가 환풍구로 사라지는 게 보였대.",
				chunks: [
					{
						content: "7개의 그림자가 ",
						textEffects: ["PULSE_SLOW"],
					},
					{
						content: "환풍구로 사라지는 게 보였대.",
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
		id: "seg-166",
		lines: [
			{
				text: "그리고 그 영상은.",
				chunks: [
					{
						content: "그리고 그 영상은.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "지금 경찰 증거보관함에 봉인되어 있어.",
				chunks: [
					{
						content: "지금 경찰 증거보관함에 봉인되어 있어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [
						{
							tag: "RECORDING_PLAYBACK_STOP",
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
		id: "seg-167",
		lines: [
			{
				text: "아무도 열어보지 못하게.",
				chunks: [
					{
						content: "아무도 열어보지 못하게.",
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
