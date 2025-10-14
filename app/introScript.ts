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
				text: "실제로 2024년 강원도 폭설 때 일어난 일이야.",
				chunks: [
					{
						content: "실제로 2024년 강원도 폭설 때 일어난 일이야.",
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
					tag: "WIND_HEAVY",
					status: "start",
				},
			],
			visualEffects: [],
		},
	},
	{
		id: "seg-2",
		lines: [
			{
				text: "새빛종합병원.",
				chunks: [
					{
						content: "새빛종합병원.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "300병상 규모의 지역 거점병원이었어.",
				chunks: [
					{
						content: "300병상 규모의 지역 거점병원이었어.",
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
		id: "seg-3",
		lines: [
			{
				text: "50년 만의 폭설이 그 병원을 완전히 고립시켰어.",
				chunks: [
					{
						content: "50년 만의 폭설이 그 병원을 완전히 고립시켰어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "아무도 들어올 수도, 나갈 수도 없었어.",
				chunks: [
					{
						content: "아무도 들어올 수도, 나갈 수도 없었어.",
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
			url: "goedamjip-story-image/68ede0f9f8eea99087e15000/seg-3",
			type: "background",
			sustain_until: "seg-7",
		},
		segmentEffects: {
			soundEffects: [
				{
					tag: "DRONE_LOOMING_PRESENCE",
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
		id: "seg-4",
		lines: [
			{
				text: "김수진.",
				chunks: [
					{
						content: "김수진.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "서울대병원 정신과 전문의.",
				chunks: [
					{
						content: "서울대병원 정신과 전문의.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "그녀가 파견된 이유는 집단 히스테리 사례 때문이었어.",
				chunks: [
					{
						content: "그녀가 파견된 이유는 집단 히스테리 사례 때문이었어.",
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
				text: "수진은 모든 걸 기록하는 습관이 있었어.",
				chunks: [
					{
						content: "수진은 모든 걸 기록하는 습관이 있었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "디지털 카메라를 항상 들고 다녔어.",
				chunks: [
					{
						content: "디지털 카메라를 항상 들고 다녔어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "환자 면담부터 일상까지 전부.",
				chunks: [
					{
						content: "환자 면담부터 일상까지 전부.",
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
				text: "첫 환자는 간호팀장 박미경이었어.",
				chunks: [
					{
						content: "첫 환자는 간호팀장 박미경이었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "15년 경력의 베테랑.",
				chunks: [
					{
						content: "15년 경력의 베테랑.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "평소엔 냉정하고 업무 중심적인 사람이었어.",
				chunks: [
					{
						content: "평소엔 냉정하고 업무 중심적인 사람이었어.",
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
		id: "seg-7",
		lines: [
			{
				text: '"스트레스가 심했나 봐요."',
				chunks: [
					{
						content: '"스트레스가 심했나 봐요."',
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "수진이 차분하게 말했어.",
				chunks: [
					{
						content: "수진이 차분하게 말했어.",
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
					tag: "WIND_HEAVY",
					status: "stop",
				},
				{
					tag: "DRONE_LOOMING_PRESENCE",
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
		id: "seg-8",
		lines: [
			{
				text: "카메라를 켜고 면담을 기록했어.",
				chunks: [
					{
						content: "카메라를 켜고 면담을 기록했어.",
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
				text: '"언제부터 증상이 시작됐나요?"',
				chunks: [
					{
						content: '"언제부터 증상이 시작됐나요?"',
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
		background: {
			url: "goedamjip-story-image/68ede0f9f8eea99087e15000/seg-8",
			type: "background",
			sustain_until: "seg-16",
		},
		segmentEffects: {
			soundEffects: [
				{
					tag: "ROOMTONE_EMPTY_NEUTRAL",
					status: "start",
				},
				{
					tag: "ANALOG_TAPE_HISS",
					status: "start",
				},
				{
					tag: "DRONE_HESITATION_SUSPENSE",
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
				text: "박미경이 천천히 고개를 들었어.",
				chunks: [
					{
						content: "박미경이 천천히 고개를 들었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: '"잘 모르겠어요... 밤만 되면..."',
				chunks: [
					{
						content: '"잘 모르겠어요... 밤만 되면..."',
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
		id: "seg-10",
		lines: [
			{
				text: "갑자기였어.",
				chunks: [
					{
						content: "갑자기였어.",
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
					tag: "ROOMTONE_EMPTY_NEUTRAL",
					status: "stop",
				},
				{
					tag: "ANALOG_TAPE_HISS",
					status: "stop",
				},
				{
					tag: "DRONE_HESITATION_SUSPENSE",
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
		id: "seg-11",
		lines: [
			{
				text: "박미경의 몸이 심하게 떨리기 시작했어.",
				chunks: [
					{
						content: "박미경의 몸이 심하게 떨리기 시작했어.",
						visualEffects: ["SCREEN_SHAKE"],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "конвульсии처럼 격렬하게.",
				chunks: [
					{
						content: "конвульсии처럼 격렬하게.",
						textEffects: ["SHAKE"],
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
			soundEffects: [
				{
					tag: "ROOMTONE_BASEMENT_HUM",
					status: "start",
				},
				{
					tag: "DRONE_SURROUNDED_THREAT",
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
		id: "seg-12",
		lines: [
			{
				text: '"김영수..."',
				chunks: [
					{
						content: '"김영수..."',
						soundEffects: [
							{
								tag: "FEMALE_WHISPER_CLOSE",
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
				text: "박미경이 중얼거렸어.",
				chunks: [
					{
						content: "박미경이 중얼거렸어.",
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
				text: '"47세... 위암 말기..."',
				chunks: [
					{
						content: '"47세... 위암 말기..."',
						textEffects: ["GLITCH"],
						soundEffects: [
							{
								tag: "MALE_CURSE_ECHO",
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
				text: "그녀의 목소리가 남자 목소리처럼 변했어.",
				chunks: [
					{
						content: "그녀의 목소리가 남자 목소리처럼 변했어.",
						soundEffects: [
							{
								tag: "GHOSTLY_VOICE_PHASING",
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
				text: "박미경의 눈동자가 뒤집혔어.",
				chunks: [
					{
						content: "박미경의 눈동자가 뒤집혔어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "황백색으로 변하면서 동공이 확장됐어.",
				chunks: [
					{
						content: "황백색으로 변하면서 동공이 확장됐어.",
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
				text: "그녀가 수진을 똑바로 노려봤어.",
				chunks: [
					{
						content: "그녀가 수진을 똑바로 노려봤어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [
						{
							tag: "FEMALE_BREATH_CLOSE",
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
		id: "seg-16",
		lines: [
			{
				text: "수진이 뒤로 물러섰어.",
				chunks: [
					{
						content: "수진이 뒤로 물러섰어.",
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
				text: "카메라가 심하게 흔들렸어.",
				chunks: [
					{
						content: "카메라가 심하게 흔들렸어.",
						visualEffects: ["SCREEN_SHAKE"],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
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
			soundEffects: [
				{
					tag: "ROOMTONE_BASEMENT_HUM",
					status: "stop",
				},
				{
					tag: "DRONE_SURROUNDED_THREAT",
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
		id: "seg-17",
		lines: [
			{
				text: "그날 밤부터 증상이 확산됐어.",
				chunks: [
					{
						content: "그날 밤부터 증상이 확산됐어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "레지던트 이준호.",
				chunks: [
					{
						content: "레지던트 이준호.",
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
				text: "내과 1년차였어.",
				chunks: [
					{
						content: "내과 1년차였어.",
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
			url: "goedamjip-story-image/68ede0f9f8eea99087e15000/seg-17",
			type: "background",
			sustain_until: "seg-22",
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
		id: "seg-18",
		lines: [
			{
				text: "복도에서 그를 발견했을 때,",
				chunks: [
					{
						content: "복도에서 그를 발견했을 때,",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "이준호는 벽에 기대 서서 중얼거리고 있었어.",
				chunks: [
					{
						content: "이준호는 벽에 기대 서서 중얼거리고 있었어.",
						soundEffects: [
							{
								tag: "MALE_CURSE_ECHO",
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
		id: "seg-19",
		lines: [
			{
				text: '"박순자... 72세... 뇌출혈..."',
				chunks: [
					{
						content: '"박순자... 72세... 뇌출혈..."',
						soundEffects: [
							{
								tag: "OLD_WOMAN_WHISPER",
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
				text: "노파의 목소리였어.",
				chunks: [
					{
						content: "노파의 목소리였어.",
						textEffects: ["GLITCH"],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "28살 남자의 입에서.",
				chunks: [
					{
						content: "28살 남자의 입에서.",
						soundEffects: [
							{
								tag: "GHOSTLY_VOICE_PHASING",
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
		id: "seg-20",
		lines: [
			{
				text: "수진은 모든 걸 촬영했어.",
				chunks: [
					{
						content: "수진은 모든 걸 촬영했어.",
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
			{
				text: "하나도 빠뜨리지 않고.",
				chunks: [
					{
						content: "하나도 빠뜨리지 않고.",
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
		id: "seg-21",
		lines: [
			{
				text: "그런데 이상한 점이 있었어.",
				chunks: [
					{
						content: "그런데 이상한 점이 있었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "빙의된 사람들이 말하는 이름들이",
				chunks: [
					{
						content: "빙의된 사람들이 말하는 이름들이",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "전부 달랐어.",
				chunks: [
					{
						content: "전부 달랐어.",
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
		id: "seg-22",
		lines: [
			{
				text: "집단 히스테리라면",
				chunks: [
					{
						content: "집단 히스테리라면",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "증상이 비슷해야 하는데.",
				chunks: [
					{
						content: "증상이 비슷해야 하는데.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "각자 다른 정체성을 드러냈어.",
				chunks: [
					{
						content: "각자 다른 정체성을 드러냈어.",
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
		id: "seg-23",
		lines: [
			{
				text: "밤 10시.",
				chunks: [
					{
						content: "밤 10시.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "지하에서 소리가 들려왔어.",
				chunks: [
					{
						content: "지하에서 소리가 들려왔어.",
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
			url: "goedamjip-story-image/68ede0f9f8eea99087e15000/seg-23",
			type: "background",
			sustain_until: "seg-26",
		},
		segmentEffects: {
			soundEffects: [
				{
					tag: "ROOMTONE_BASEMENT_HUM",
					status: "start",
				},
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
		id: "seg-24",
		lines: [
			{
				text: "윙-----",
				chunks: [
					{
						content: "윙-----",
						soundEffects: [
							{
								tag: "SUBWAY_ARRIVAL_WHINE",
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
				text: "모터 소리 같았어.",
				chunks: [
					{
						content: "모터 소리 같았어.",
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
				text: "그 사이로 신음소리가 섞였어.",
				chunks: [
					{
						content: "그 사이로 신음소리가 섞였어.",
						soundEffects: [
							{
								tag: "FEMALE_SOBBING_DISTANT",
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
				text: '"추워... 차가워..."',
				chunks: [
					{
						content: '"추워... 차가워..."',
						textEffects: ["STYLE_ITALIC"],
						soundEffects: [
							{
								tag: "FEMALE_WHISPER_CLOSE",
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
				text: "환기구를 통해 병동 전체로 퍼졌어.",
				chunks: [
					{
						content: "환기구를 통해 병동 전체로 퍼졌어.",
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
					tag: "WIND_DRAFT_WHISTLE",
					status: "start",
				},
				{
					tag: "ROOMTONE_BASEMENT_HUM",
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
					tag: "VISUAL_VIGNETTE",
					status: "stop",
				},
			],
		},
	},
	{
		id: "seg-27",
		lines: [
			{
				text: "수진은 CCTV 영상을 분석하기로 했어.",
				chunks: [
					{
						content: "수진은 CCTV 영상을 분석하기로 했어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "보안요원 강철민이 관리실로 안내했어.",
				chunks: [
					{
						content: "보안요원 강철민이 관리실로 안내했어.",
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
			url: "goedamjip-story-image/68ede0f9f8eea99087e15000/seg-27",
			type: "background",
			sustain_until: "seg-35",
		},
		segmentEffects: {
			soundEffects: [
				{
					tag: "ROOMTONE_FLUORESCENT_BUZZ",
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
		id: "seg-28",
		lines: [
			{
				text: '"지하 계단 쪽 영상 좀 보여주세요."',
				chunks: [
					{
						content: '"지하 계단 쪽 영상 좀 보여주세요."',
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "수진이 말했어.",
				chunks: [
					{
						content: "수진이 말했어.",
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
		id: "seg-29",
		lines: [
			{
				text: "화면에 희미한 인영들이 보였어.",
				chunks: [
					{
						content: "화면에 희미한 인영들이 보였어.",
					},
				],
				preLineEffects: {
					image: {
						url: "goedamjip-story-image/68ede0f9f8eea99087e15000/seg-29",
						type: "overlay",
						sustain_until: "seg-32",
					},
					soundEffects: [
						{
							tag: "AUDIO_RESUME_WITH_NOISE",
						},
					],
					visualEffects: [],
				},
			},
			{
				text: "계단 아래쪽, 어둠 속에.",
				chunks: [
					{
						content: "계단 아래쪽, 어둠 속에.",
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
				text: '"화질이 안 좋네요. 확대해볼게요."',
				chunks: [
					{
						content: '"화질이 안 좋네요. 확대해볼게요."',
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "수진이 마우스를 움직였어.",
				chunks: [
					{
						content: "수진이 마우스를 움직였어.",
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
		id: "seg-31",
		lines: [
			{
				text: "화면이 점점 커졌어.",
				chunks: [
					{
						content: "화면이 점점 커졌어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "흐릿한 형체가 선명해지기 시작했어.",
				chunks: [
					{
						content: "흐릿한 형체가 선명해지기 시작했어.",
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
		id: "seg-32",
		lines: [
			{
				text: "그 순간.",
				chunks: [
					{
						content: "그 순간.",
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
				text: "썩은 얼굴이 화면 가득 클로즈업됐어.",
				chunks: [
					{
						content: "썩은 얼굴이 화면 가득 클로즈업됐어.",
					},
				],
				preLineEffects: {
					image: {
						url: "goedamjip-story-image/68ede0f9f8eea99087e15000/seg-33",
						type: "jumpscare",
						sustain_until: "seg-33",
					},
					soundEffects: [
						{
							tag: "MUSIC_STINGER_SYNTH_SHRIEK",
						},
						{
							tag: "STATIC_BURST_LOUD",
						},
					],
					visualEffects: ["OVERLAY_GLITCH"],
				},
			},
			{
				text: "입이 귀까지 찢어진 채로 웃고 있었어.",
				chunks: [
					{
						content: "입이 귀까지 찢어진 채로 웃고 있었어.",
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
		id: "seg-34",
		lines: [
			{
				text: "수진이 의자에서 넘어졌어.",
				chunks: [
					{
						content: "수진이 의자에서 넘어졌어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "비명이 터져 나왔어.",
				chunks: [
					{
						content: "비명이 터져 나왔어.",
						soundEffects: [
							{
								tag: "FEMALE_SCREAM_TERROR",
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
				text: "강철민이 달려왔지만",
				chunks: [
					{
						content: "강철민이 달려왔지만",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "화면은 이미 원래대로 돌아가 있었어.",
				chunks: [
					{
						content: "화면은 이미 원래대로 돌아가 있었어.",
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
					tag: "ANALOG_TAPE_HISS",
					status: "stop",
				},
			],
			visualEffects: [],
		},
	},
	{
		id: "seg-36",
		lines: [
			{
				text: "수진은 병원 기록을 뒤지기 시작했어.",
				chunks: [
					{
						content: "수진은 병원 기록을 뒤지기 시작했어.",
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
			{
				text: "과거 사망 환자 명단.",
				chunks: [
					{
						content: "과거 사망 환자 명단.",
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
			url: "goedamjip-story-image/68ede0f9f8eea99087e15000/seg-36",
			type: "background",
			sustain_until: "seg-46",
		},
		segmentEffects: {
			soundEffects: [],
			visualEffects: [],
		},
	},
	{
		id: "seg-37",
		lines: [
			{
				text: "무연고 환자들이 눈에 띄었어.",
				chunks: [
					{
						content: "무연고 환자들이 눈에 띄었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "김영수, 박순자, 이철호, 정미숙...",
				chunks: [
					{
						content: "김영수, 박순자, 이철호, 정미숙...",
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
		segmentEffects: {
			soundEffects: [],
			visualEffects: [],
		},
	},
	{
		id: "seg-38",
		lines: [
			{
				text: "빙의된 의료진들이 말한 이름들과",
				chunks: [
					{
						content: "빙의된 의료진들이 말한 이름들과",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "정확히 일치했어.",
				chunks: [
					{
						content: "정확히 일치했어.",
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
		segmentEffects: {
			soundEffects: [],
			visualEffects: [],
		},
	},
	{
		id: "seg-39",
		lines: [
			{
				text: '"이 사람들 시신은 어디 있죠?"',
				chunks: [
					{
						content: '"이 사람들 시신은 어디 있죠?"',
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "수진이 원무과장 최대식에게 물었어.",
				chunks: [
					{
						content: "수진이 원무과장 최대식에게 물었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
		],
		segmentEffects: {
			soundEffects: [],
			visualEffects: [],
		},
	},
	{
		id: "seg-40",
		lines: [
			{
				text: "최대식의 표정이 굳었어.",
				chunks: [
					{
						content: "최대식의 표정이 굳었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: '"그건... 지하 태평간에..."',
				chunks: [
					{
						content: '"그건... 지하 태평간에..."',
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
		],
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
		id: "seg-41",
		lines: [
			{
				text: '"태평간이요?"',
				chunks: [
					{
						content: '"태평간이요?"',
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
		],
		segmentEffects: {
			soundEffects: [],
			visualEffects: [],
		},
	},
	{
		id: "seg-42",
		lines: [
			{
				text: '"네. 무연고 환자들은 일정 기간 보관 후',
				chunks: [
					{
						content: '"네. 무연고 환자들은 일정 기간 보관 후',
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: '화장하게 되어 있는데..."',
				chunks: [
					{
						content: '화장하게 되어 있는데..."',
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "최대식이 말을 흐렸어.",
				chunks: [
					{
						content: "최대식이 말을 흐렸어.",
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
		segmentEffects: {
			soundEffects: [],
			visualEffects: [],
		},
	},
	{
		id: "seg-43",
		lines: [
			{
				text: '"말씀하세요."',
				chunks: [
					{
						content: '"말씀하세요."',
						soundEffects: [
							{
								tag: "DRUM_HIT_DEEP",
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
		id: "seg-44",
		lines: [
			{
				text: '"예산 문제로... 10년째 방치되어 있습니다."',
				chunks: [
					{
						content: '"예산 문제로... 10년째 방치되어 있습니다."',
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
				text: "그가 작게 말했어.",
				chunks: [
					{
						content: "그가 작게 말했어.",
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
		id: "seg-45",
		lines: [
			{
				text: "수진의 등골이 서늘해졌어.",
				chunks: [
					{
						content: "수진의 등골이 서늘해졌어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "10년.",
				chunks: [
					{
						content: "10년.",
						textEffects: ["PULSE_SLOW"],
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
					tag: "ROOMTONE_FLUORESCENT_BUZZ",
					status: "stop",
				},
				{
					tag: "DRONE_SURROUNDED_THREAT",
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
		id: "seg-46",
		lines: [
			{
				text: "그날 밤.",
				chunks: [
					{
						content: "그날 밤.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "수진은 지하로 내려가기로 결심했어.",
				chunks: [
					{
						content: "수진은 지하로 내려가기로 결심했어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "카메라를 목에 걸고.",
				chunks: [
					{
						content: "카메라를 목에 걸고.",
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
		id: "seg-47",
		lines: [
			{
				text: "지하 1층은 주차장이었어.",
				chunks: [
					{
						content: "지하 1층은 주차장이었어.",
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
			url: "goedamjip-story-image/68ede0f9f8eea99087e15000/seg-47",
			type: "background",
			sustain_until: "seg-54",
		},
		segmentEffects: {
			soundEffects: [
				{
					tag: "ROOMTONE_FLUORESCENT_BUZZ",
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
		id: "seg-48",
		lines: [
			{
				text: "지하 2층으로 내려가는 계단.",
				chunks: [
					{
						content: "지하 2층으로 내려가는 계단.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "차가운 공기가 올라왔어.",
				chunks: [
					{
						content: "차가운 공기가 올라왔어.",
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
					tag: "WIND_DRAFT_WHISTLE",
					status: "start",
				},
			],
			visualEffects: [],
		},
	},
	{
		id: "seg-49",
		lines: [
			{
				text: "한 걸음씩 내려갈 때마다",
				chunks: [
					{
						content: "한 걸음씩 내려갈 때마다",
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
				text: "온도가 떨어지는 게 느껴졌어.",
				chunks: [
					{
						content: "온도가 떨어지는 게 느껴졌어.",
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
				text: "태평간 문 앞에 섰어.",
				chunks: [
					{
						content: "태평간 문 앞에 섰어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "녹슨 철문이었어.",
				chunks: [
					{
						content: "녹슨 철문이었어.",
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
		id: "seg-51",
		lines: [
			{
				text: "손잡이를 잡았어.",
				chunks: [
					{
						content: "손잡이를 잡았어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "젖은 생살처럼 미끄럽고 따뜻했어.",
				chunks: [
					{
						content: "젖은 생살처럼 미끄럽고 따뜻했어.",
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
		id: "seg-52",
		lines: [
			{
				text: "문을 열었어.",
				chunks: [
					{
						content: "문을 열었어.",
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
			soundEffects: [
				{
					tag: "DRONE_INDUSTRIAL_ABYSS",
					status: "stop",
				},
				{
					tag: "WIND_DRAFT_WHISTLE",
					status: "stop",
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
		id: "seg-53",
		lines: [
			{
				text: "썩은 고기 냄새가 쏟아져 나왔어.",
				chunks: [
					{
						content: "썩은 고기 냄새가 쏟아져 나왔어.",
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
				text: "소독약 냄새 따위론 가릴 수 없는.",
				chunks: [
					{
						content: "소독약 냄새 따위론 가릴 수 없는.",
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
					status: "start",
				},
				{
					tag: "DRONE_ORGANIC_GURGLE",
					status: "start",
				},
			],
			visualEffects: [],
		},
	},
	{
		id: "seg-54",
		lines: [
			{
				text: "수진이 구역질을 참았어.",
				chunks: [
					{
						content: "수진이 구역질을 참았어.",
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
				text: "카메라를 들고 안으로 들어갔어.",
				chunks: [
					{
						content: "카메라를 들고 안으로 들어갔어.",
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
		id: "seg-55",
		lines: [
			{
				text: "냉동고들이 양쪽 벽에 늘어서 있었어.",
				chunks: [
					{
						content: "냉동고들이 양쪽 벽에 늘어서 있었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "20개 넘게.",
				chunks: [
					{
						content: "20개 넘게.",
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
			url: "goedamjip-story-image/68ede0f9f8eea99087e15000/seg-55",
			type: "background",
			sustain_until: "seg-74",
		},
		segmentEffects: {
			soundEffects: [],
			visualEffects: [],
		},
	},
	{
		id: "seg-56",
		lines: [
			{
				text: "모터는 멈춰 있었어.",
				chunks: [
					{
						content: "모터는 멈춰 있었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "전원이 나간 지 오래된 것 같았어.",
				chunks: [
					{
						content: "전원이 나간 지 오래된 것 같았어.",
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
				text: "바닥이 끈적했어.",
				chunks: [
					{
						content: "바닥이 끈적했어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "발걸음마다 물컹거리는 소리가 났어.",
				chunks: [
					{
						content: "발걸음마다 물컹거리는 소리가 났어.",
						soundEffects: [
							{
								tag: "FOOTSTEPS_MUD",
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
		id: "seg-58",
		lines: [
			{
				text: "첫 번째 냉동고를 열었어.",
				chunks: [
					{
						content: "첫 번째 냉동고를 열었어.",
					},
				],
				preLineEffects: {
					image: {
						url: "goedamjip-story-image/68ede0f9f8eea99087e15000/seg-58",
						type: "overlay",
						sustain_until: "seg-60",
					},
					soundEffects: [
						{
							tag: "METAL_CREAK",
						},
					],
					visualEffects: [],
				},
			},
			{
				text: "시신이 부패해 있었어.",
				chunks: [
					{
						content: "시신이 부패해 있었어.",
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
				text: "얼굴을 알아볼 수 없을 정도로.",
				chunks: [
					{
						content: "얼굴을 알아볼 수 없을 정도로.",
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
				text: "두 번째.",
				chunks: [
					{
						content: "두 번째.",
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
			{
				text: "세 번째.",
				chunks: [
					{
						content: "세 번째.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "네 번째.",
				chunks: [
					{
						content: "네 번째.",
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
				text: "전부 같은 상태였어.",
				chunks: [
					{
						content: "전부 같은 상태였어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "기록도 없고, 이름표도 없었어.",
				chunks: [
					{
						content: "기록도 없고, 이름표도 없었어.",
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
		id: "seg-61",
		lines: [
			{
				text: '"다행히 아무것도..."',
				chunks: [
					{
						content: '"다행히 아무것도..."',
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
			{
				text: "수진이 중얼거렸어.",
				chunks: [
					{
						content: "수진이 중얼거렸어.",
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
				text: "마지막 냉동고로 다가갔어.",
				chunks: [
					{
						content: "마지막 냉동고로 다가갔어.",
						soundEffects: [
							{
								tag: "FOOTSTEPS_MUD",
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
			visualEffects: [],
		},
	},
	{
		id: "seg-63",
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
					soundEffects: [
						{
							tag: "DRUM_HIT_DEEP",
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
		id: "seg-64",
		lines: [
			{
				text: "삐걱---",
				chunks: [
					{
						content: "삐걱---",
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
		id: "seg-65",
		lines: [
			{
				text: "냉동고 문이 저절로 열렸어.",
				chunks: [
					{
						content: "냉동고 문이 저절로 열렸어.",
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
				text: "안에서 썩은 팔이 튀어나왔어.",
				chunks: [
					{
						content: "안에서 썩은 팔이 튀어나왔어.",
					},
				],
				preLineEffects: {
					image: {
						url: "goedamjip-story-image/68ede0f9f8eea99087e15000/seg-66",
						type: "jumpscare",
						sustain_until: "seg-66",
					},
					soundEffects: [
						{
							tag: "HEARTBEAT_SUDDEN_LOUD",
						},
						{
							tag: "LIQUID_SPLATTER",
						},
					],
					visualEffects: [],
				},
			},
			{
				text: "갑자기.",
				chunks: [
					{
						content: "갑자기.",
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
				text: "수진의 다리를 움켜잡았어.",
				chunks: [
					{
						content: "수진의 다리를 움켜잡았어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "차갑고 축축한 손아귀.",
				chunks: [
					{
						content: "차갑고 축축한 손아귀.",
						textEffects: ["JITTER"],
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
		id: "seg-68",
		lines: [
			{
				text: "비명이 터져 나왔어.",
				chunks: [
					{
						content: "비명이 터져 나왔어.",
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
				text: "수진이 뒤로 넘어졌어.",
				chunks: [
					{
						content: "수진이 뒤로 넘어졌어.",
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
		id: "seg-69",
		lines: [
			{
				text: "카메라가 바닥에 떨어지며",
				chunks: [
					{
						content: "카메라가 바닥에 떨어지며",
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
			{
				text: "깨지는 소리가 났어.",
				chunks: [
					{
						content: "깨지는 소리가 났어.",
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
		id: "seg-70",
		lines: [
			{
				text: "찰칵!",
				chunks: [
					{
						content: "찰칵!",
						textEffects: ["SHAKE"],
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
		id: "seg-71",
		lines: [
			{
				text: "렌즈가 바닥을 향했어.",
				chunks: [
					{
						content: "렌즈가 바닥을 향했어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "그 화면에 여러 개의 발이 보였어.",
				chunks: [
					{
						content: "그 화면에 여러 개의 발이 보였어.",
					},
				],
				preLineEffects: {
					image: {
						url: "goedamjip-story-image/68ede0f9f8eea99087e15000/seg-71",
						type: "overlay",
						sustain_until: "seg-73",
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
				text: "맨발.",
				chunks: [
					{
						content: "맨발.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "피부가 벗겨진.",
				chunks: [
					{
						content: "피부가 벗겨진.",
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
		id: "seg-72",
		lines: [
			{
				text: "수진이 기어서 도망치려 했어.",
				chunks: [
					{
						content: "수진이 기어서 도망치려 했어.",
						soundEffects: [
							{
								tag: "CLOTH_DRAGGING",
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
		id: "seg-73",
		lines: [
			{
				text: "뒤에서 손들이 옷을 잡아당겼어.",
				chunks: [
					{
						content: "뒤에서 손들이 옷을 잡아당겼어.",
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
			{
				text: "차갑고 끈적한 손들.",
				chunks: [
					{
						content: "차갑고 끈적한 손들.",
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
				text: "계단을 향해 뛰었어.",
				chunks: [
					{
						content: "계단을 향해 뛰었어.",
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
				text: "숨이 막혔어.",
				chunks: [
					{
						content: "숨이 막혔어.",
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
					tag: "ROOMTONE_BASEMENT_HUM",
					status: "stop",
				},
				{
					tag: "DRONE_SURROUNDED_THREAT",
					status: "stop",
				},
			],
			visualEffects: [],
		},
	},
	{
		id: "seg-75",
		lines: [
			{
				text: "지상으로 올라왔어.",
				chunks: [
					{
						content: "지상으로 올라왔어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
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
		],
		background: {
			url: "goedamjip-story-image/68ede0f9f8eea99087e15000/seg-75",
			type: "background",
			sustain_until: "seg-83",
		},
		segmentEffects: {
			soundEffects: [
				{
					tag: "ROOMTONE_EMPTY_NEUTRAL",
					status: "start",
				},
			],
			visualEffects: [],
		},
	},
	{
		id: "seg-76",
		lines: [
			{
				text: "아니.",
				chunks: [
					{
						content: "아니.",
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
		id: "seg-77",
		lines: [
			{
				text: "의료진들이 줄지어 서 있었어.",
				chunks: [
					{
						content: "의료진들이 줄지어 서 있었어.",
					},
				],
				preLineEffects: {
					image: {
						url: "goedamjip-story-image/68ede0f9f8eea99087e15000/seg-77",
						type: "overlay",
						sustain_until: "seg-82",
					},
					soundEffects: [
						{
							tag: "DRUM_HIT_DEEP",
						},
					],
					visualEffects: [],
				},
			},
			{
				text: "박미경, 이준호, 그리고 다른 간호사들.",
				chunks: [
					{
						content: "박미경, 이준호, 그리고 다른 간호사들.",
						textEffects: ["TEXT_SCRAMBLE_GLITCH"],
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
				text: "전부 눈동자가 황백색으로 변해 있었어.",
				chunks: [
					{
						content: "전부 눈동자가 황백색으로 변해 있었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "입꼬리에서 검은 액체가 흘러내렸어.",
				chunks: [
					{
						content: "입꼬리에서 검은 액체가 흘러내렸어.",
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
				text: '"기록해줘..."',
				chunks: [
					{
						content: '"기록해줘..."',
						textEffects: ["TYPEWRITER"],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [
						{
							tag: "GHOSTLY_WHISPERS_OVERLAPPING",
						},
					],
					visualEffects: [],
				},
			},
			{
				text: "그들이 동시에 속삭였어.",
				chunks: [
					{
						content: "그들이 동시에 속삭였어.",
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
		id: "seg-80",
		lines: [
			{
				text: '"우리를 기록해줘..."',
				chunks: [
					{
						content: '"우리를 기록해줘..."',
						textEffects: ["TYPEWRITER"],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [
						{
							tag: "GHOSTLY_VOICE_PHASING",
						},
					],
					visualEffects: [],
				},
			},
			{
				text: "목소리가 겹쳐졌어.",
				chunks: [
					{
						content: "목소리가 겹쳐졌어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "남자, 여자, 노인, 아이.",
				chunks: [
					{
						content: "남자, 여자, 노인, 아이.",
						soundEffects: [
							{
								tag: "MALE_WHISPER_CLOSE",
							},
							{
								tag: "FEMALE_WHISPER_CLOSE",
							},
							{
								tag: "OLD_WOMAN_WHISPER",
							},
							{
								tag: "CHILD_WHISPER_CLOSE",
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
		id: "seg-81",
		lines: [
			{
				text: "천천히 수진을 향해 걸어왔어.",
				chunks: [
					{
						content: "천천히 수진을 향해 걸어왔어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "발걸음이 물컹거렸어.",
				chunks: [
					{
						content: "발걸음이 물컹거렸어.",
						soundEffects: [
							{
								tag: "FOOTSTEPS_MUD",
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
				text: "바닥이 검게 젖어갔어.",
				chunks: [
					{
						content: "바닥이 검게 젖어갔어.",
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
		id: "seg-82",
		lines: [
			{
				text: "수진이 뒤로 물러섰어.",
				chunks: [
					{
						content: "수진이 뒤로 물러섰어.",
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
				text: "등이 벽에 닿았어.",
				chunks: [
					{
						content: "등이 벽에 닿았어.",
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
					tag: "ROOMTONE_EMPTY_NEUTRAL",
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
		id: "seg-83",
		lines: [
			{
				text: "그때 불이 나갔어.",
				chunks: [
					{
						content: "그때 불이 나갔어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [
						{
							tag: "AUDIO_CUTOUT_ABRUPT",
						},
					],
					visualEffects: ["OVERLAY_GLITCH"],
				},
			},
		],
		background: null,
		segmentEffects: {
			soundEffects: [
				{
					tag: "DRONE_CRUSHING_PRESSURE",
					status: "start",
				},
				{
					tag: "CAVE_AMBIENCE_DRIPPING",
					status: "start",
				},
			],
			visualEffects: [],
		},
	},
	{
		id: "seg-84",
		lines: [
			{
				text: "완전한 암흑.",
				chunks: [
					{
						content: "완전한 암흑.",
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
			url: "goedamjip-story-image/68ede0f9f8eea99087e15000/seg-84",
			type: "background",
			sustain_until: "seg-103",
		},
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
		id: "seg-85",
		lines: [
			{
				text: "핸드폰을 꺼내 불을 켰어.",
				chunks: [
					{
						content: "핸드폰을 꺼내 불을 켰어.",
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
			{
				text: "손이 떨려서 빛이 흔들렸어.",
				chunks: [
					{
						content: "손이 떨려서 빛이 흔들렸어.",
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
		id: "seg-86",
		lines: [
			{
				text: '"전기만 들어오면..."',
				chunks: [
					{
						content: '"전기만 들어오면..."',
						textEffects: ["STYLE_ITALIC"],
						soundEffects: [
							{
								tag: "FEMALE_WHISPER_CLOSE",
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
				text: "수진이 중얼거렸어.",
				chunks: [
					{
						content: "수진이 중얼거렸어.",
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
				text: "배전반을 찾아야 했어.",
				chunks: [
					{
						content: "배전반을 찾아야 했어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "복도 끝에 있었어.",
				chunks: [
					{
						content: "복도 끝에 있었어.",
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
		id: "seg-88",
		lines: [
			{
				text: "한 걸음 내디뎠어.",
				chunks: [
					{
						content: "한 걸음 내디뎠어.",
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
		id: "seg-89",
		lines: [
			{
				text: "차가운 손이 목을 움켜잡았어.",
				chunks: [
					{
						content: "차가운 손이 목을 움켜잡았어.",
						soundEffects: [
							{
								tag: "FEMALE_SCREAM_TERROR",
							},
						],
					},
				],
				preLineEffects: {
					image: {
						url: "goedamjip-story-image/68ede0f9f8eea99087e15000/seg-89",
						type: "jumpscare",
						sustain_until: "seg-89",
					},
					soundEffects: [
						{
							tag: "FEMALE_GASP_SHOCK",
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
		id: "seg-90",
		lines: [
			{
				text: "오른쪽 어깨를 누군가 붙잡았어.",
				chunks: [
					{
						content: "오른쪽 어깨를 누군가 붙잡았어.",
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
		id: "seg-91",
		lines: [
			{
				text: "왼팔을 잡아당기는 힘.",
				chunks: [
					{
						content: "왼팔을 잡아당기는 힘.",
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
		id: "seg-92",
		lines: [
			{
				text: "등 뒤에서 차가운 숨결.",
				chunks: [
					{
						content: "등 뒤에서 차가운 숨결.",
						soundEffects: [
							{
								tag: "FEMALE_BREATH_CLOSE",
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
		id: "seg-93",
		lines: [
			{
				text: "사방에서 동시에.",
				chunks: [
					{
						content: "사방에서 동시에.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "여러 개의 손들이 수진을 붙잡았어.",
				chunks: [
					{
						content: "여러 개의 손들이 수진을 붙잡았어.",
					},
				],
				preLineEffects: {
					image: {
						url: "goedamjip-story-image/68ede0f9f8eea99087e15000/seg-93",
						type: "overlay",
						sustain_until: "seg-96",
					},
					soundEffects: [
						{
							tag: "CLOTH_DRAGGING",
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
				text: '"기록해줘..."',
				chunks: [
					{
						content: '"기록해줘..."',
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [
						{
							tag: "GHOSTLY_WHISPERS_OVERLAPPING",
						},
					],
					visualEffects: [],
				},
			},
			{
				text: '"우리 이름을..."',
				chunks: [
					{
						content: '"우리 이름을..."',
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: '"우리 얼굴을..."',
				chunks: [
					{
						content: '"우리 얼굴을..."',
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: '"우리가 살았다는 걸..."',
				chunks: [
					{
						content: '"우리가 살았다는 걸..."',
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
				text: "속삭임들이 귓가에 쏟아졌어.",
				chunks: [
					{
						content: "속삭임들이 귓가에 쏟아졌어.",
						soundEffects: [
							{
								tag: "GHOSTLY_VOICE_PHASING",
							},
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
		id: "seg-96",
		lines: [
			{
				text: "수진이 주저앉았어.",
				chunks: [
					{
						content: "수진이 주저앉았어.",
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
				text: "온몸이 떨렸어.",
				chunks: [
					{
						content: "온몸이 떨렸어.",
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
		id: "seg-97",
		lines: [
			{
				text: "그 순간.",
				chunks: [
					{
						content: "그 순간.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "바닥에 떨어진 카메라가 보였어.",
				chunks: [
					{
						content: "바닥에 떨어진 카메라가 보였어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "깨진 렌즈에서 빨간 불이 깜빡이고 있었어.",
				chunks: [
					{
						content: "깨진 렌즈에서 빨간 불이 깜빡이고 있었어.",
						textEffects: ["PULSE_SLOW"],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [
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
			soundEffects: [],
			visualEffects: [],
		},
	},
	{
		id: "seg-98",
		lines: [
			{
				text: "여전히 녹화 중이었어.",
				chunks: [
					{
						content: "여전히 녹화 중이었어.",
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
				text: "수진이 카메라를 집어 들었어.",
				chunks: [
					{
						content: "수진이 카메라를 집어 들었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "떨리는 손으로.",
				chunks: [
					{
						content: "떨리는 손으로.",
						textEffects: ["JITTER"],
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
			soundEffects: [
				{
					tag: "DRONE_CRUSHING_PRESSURE",
					status: "stop",
				},
			],
			visualEffects: [],
		},
	},
	{
		id: "seg-100",
		lines: [
			{
				text: '"알겠어..."',
				chunks: [
					{
						content: '"알겠어..."',
						soundEffects: [
							{
								tag: "SIGH_RELIEF",
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
				text: "수진이 말했어.",
				chunks: [
					{
						content: "수진이 말했어.",
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
					tag: "MUSIC_VOID_LAMENT",
					status: "start",
				},
			],
			visualEffects: [],
		},
	},
	{
		id: "seg-101",
		lines: [
			{
				text: '"당신들을 기록할게."',
				chunks: [
					{
						content: '"당신들을 기록할게."',
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
		id: "seg-102",
		lines: [
			{
				text: '"한 명씩. 전부."',
				chunks: [
					{
						content: '"한 명씩. "',
					},
					{
						content: '"전부."',
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
		id: "seg-103",
		lines: [
			{
				text: "손들이 천천히 놓아줬어.",
				chunks: [
					{
						content: "손들이 천천히 놓아줬어.",
						soundEffects: [
							{
								tag: "FEMALE_GHOST_PRESENCE",
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
					tag: "VISUAL_VIGNETTE",
					status: "stop",
				},
				{
					tag: "CAVE_AMBIENCE_DRIPPING",
					status: "stop",
				},
				{
					tag: "EFFECT_FLASHLIGHT",
					status: "stop",
				},
				{
					tag: "MUSIC_VOID_LAMENT",
					status: "stop",
				},
			],
			visualEffects: [],
		},
	},
	{
		id: "seg-104",
		lines: [
			{
				text: "수진은 다음 날부터",
				chunks: [
					{
						content: "수진은 다음 날부터",
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
			{
				text: "태평간의 시신들을 하나씩 촬영했어.",
				chunks: [
					{
						content: "태평간의 시신들을 하나씩 촬영했어.",
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
			url: "goedamjip-story-image/68ede0f9f8eea99087e15000/seg-104",
			type: "background",
			sustain_until: "seg-112",
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
					tag: "SCREEN_FLICKER",
					status: "start",
				},
			],
		},
	},
	{
		id: "seg-105",
		lines: [
			{
				text: "부패한 얼굴도.",
				chunks: [
					{
						content: "부패한 얼굴도.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "이름 없는 몸도.",
				chunks: [
					{
						content: "이름 없는 몸도.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "전부.",
				chunks: [
					{
						content: "전부.",
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
		id: "seg-106",
		lines: [
			{
				text: "그리고 빙의된 의료진들의 증언을 기록했어.",
				chunks: [
					{
						content: "그리고 빙의된 의료진들의 증언을 기록했어.",
						soundEffects: [
							{
								tag: "PENCIL_WRITING",
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
				text: "각자가 말하는 이름과 나이, 사인을.",
				chunks: [
					{
						content: "각자가 말하는 이름과 나이, 사인을.",
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
		id: "seg-107",
		lines: [
			{
				text: "김영수, 47세, 위암 말기.",
				chunks: [
					{
						content: "김영수, 47세, 위암 말기.",
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
				text: "박순자, 72세, 뇌출혈.",
				chunks: [
					{
						content: "박순자, 72세, 뇌출혈.",
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
				text: "이철호, 35세, 교통사고.",
				chunks: [
					{
						content: "이철호, 35세, 교통사고.",
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
				text: "정미숙, 19세, 자살.",
				chunks: [
					{
						content: "정미숙, 19세, 자살.",
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
		id: "seg-108",
		lines: [
			{
				text: "총 37명.",
				chunks: [
					{
						content: "총 37명.",
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
				text: "10년 동안 잊혀진 사람들.",
				chunks: [
					{
						content: "10년 동안 잊혀진 사람들.",
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
			],
		},
	},
	{
		id: "seg-109",
		lines: [
			{
				text: "마지막 사람을 기록했을 때,",
				chunks: [
					{
						content: "마지막 사람을 기록했을 때,",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "빙의 증상이 사라졌어.",
				chunks: [
					{
						content: "빙의 증상이 사라졌어.",
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
		id: "seg-110",
		lines: [
			{
				text: "의료진들은 눈동자가 원래대로 돌아왔어.",
				chunks: [
					{
						content: "의료진들은 눈동자가 원래대로 돌아왔어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "아무것도 기억하지 못했어.",
				chunks: [
					{
						content: "아무것도 기억하지 못했어.",
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
				text: "사흘 후 제설 작업이 끝났어.",
				chunks: [
					{
						content: "사흘 후 제설 작업이 끝났어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "도로가 뚫렸어.",
				chunks: [
					{
						content: "도로가 뚫렸어.",
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
					tag: "OVERLAY_SNOWFALL",
					status: "start",
				},
			],
		},
	},
	{
		id: "seg-112",
		lines: [
			{
				text: "수진은 병원을 떠났어.",
				chunks: [
					{
						content: "수진은 병원을 떠났어.",
						soundEffects: [
							{
								tag: "FOOTSTEP_EXTERIOR_SLOW_HEAVY",
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
				text: "카메라에 저장된 영상과 함께.",
				chunks: [
					{
						content: "카메라에 저장된 영상과 함께.",
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
			visualEffects: [],
		},
	},
	{
		id: "seg-113",
		lines: [
			{
				text: "차에 올라타 시동을 걸었어.",
				chunks: [
					{
						content: "차에 올라타 ",
						soundEffects: [
							{
								tag: "CAR_DOOR_CLOSE",
							},
						],
					},
					{
						content: "시동을 걸었어.",
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
		background: {
			url: "goedamjip-story-image/68ede0f9f8eea99087e15000/seg-113",
			type: "background",
			sustain_until: "seg-120",
		},
		segmentEffects: {
			soundEffects: [
				{
					tag: "DRONE_INDUSTRIAL_ABYSS",
					status: "start",
				},
			],
			visualEffects: [],
		},
	},
	{
		id: "seg-114",
		lines: [
			{
				text: '"이제 끝났다."',
				chunks: [
					{
						content: '"이제 끝났다."',
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "안도의 한숨을 쉬었어.",
				chunks: [
					{
						content: "안도의 한숨을 쉬었어.",
						soundEffects: [
							{
								tag: "SIGH_RELIEF",
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
				text: "백미러로 병원을 마지막으로 바라봤어.",
				chunks: [
					{
						content: "백미러로 병원을 마지막으로 바라봤어.",
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
		id: "seg-116",
		lines: [
			{
				text: "지하 태평간 창문.",
				chunks: [
					{
						content: "지하 태평간 창문.",
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
				text: "거기에 여러 개의 얼굴이 동시에 떠올랐어.",
				chunks: [
					{
						content: "거기에 여러 개의 얼굴이 동시에 떠올랐어.",
					},
				],
				preLineEffects: {
					image: {
						url: "goedamjip-story-image/68ede0f9f8eea99087e15000/seg-117",
						type: "overlay",
						sustain_until: "seg-119",
					},
					soundEffects: [
						{
							tag: "FEMALE_GHOST_PRESENCE",
						},
						{
							tag: "MALE_GHOST_PRESENCE",
						},
					],
					visualEffects: [],
				},
			},
			{
				text: "희미하게.",
				chunks: [
					{
						content: "희미하게.",
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
				text: "남자, 여자, 노인, 아이.",
				chunks: [
					{
						content: "남자, 여자, 노인, 아이.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "전부 수진을 보고 있었어.",
				chunks: [
					{
						content: "전부 수진을 보고 있었어.",
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
				text: "그리고 사라졌어.",
				chunks: [
					{
						content: "그리고 사라졌어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [
						{
							tag: "FEMALE_GHOST_PRESENCE",
						},
					],
					visualEffects: [],
				},
			},
			{
				text: "순식간에.",
				chunks: [
					{
						content: "순식간에.",
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
				text: "수진이 급히 차를 출발시켰어.",
				chunks: [
					{
						content: "수진이 급히 차를 출발시켰어.",
						soundEffects: [
							{
								tag: "CAR_TIRE_SCREECH",
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
				text: "손이 떨렸어.",
				chunks: [
					{
						content: "손이 떨렸어.",
						textEffects: ["JITTER"],
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
					tag: "OVERLAY_SNOWFALL",
					status: "stop",
				},
				{
					tag: "DRONE_INDUSTRIAL_ABYSS",
					status: "stop",
				},
				{
					tag: "VISUAL_VIGNETTE",
					status: "stop",
				},
			],
			visualEffects: [],
		},
	},
	{
		id: "seg-121",
		lines: [
			{
				text: "집에 돌아와 영상을 확인했어.",
				chunks: [
					{
						content: "집에 돌아와 영상을 확인했어.",
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
				text: "전부 잘 녹화되어 있었어.",
				chunks: [
					{
						content: "전부 잘 녹화되어 있었어.",
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
			url: "goedamjip-story-image/68ede0f9f8eea99087e15000/seg-121",
			type: "background",
			sustain_until: "seg-136",
		},
		segmentEffects: {
			soundEffects: [
				{
					tag: "CITY_AMBIENCE_NIGHT",
					status: "start",
				},
				{
					tag: "ROOMTONE_EMPTY_NEUTRAL",
					status: "start",
				},
				{
					tag: "VISUAL_VIGNETTE",
					status: "start",
				},
			],
			visualEffects: [],
		},
	},
	{
		id: "seg-122",
		lines: [
			{
				text: "마지막 파일을 재생했어.",
				chunks: [
					{
						content: "마지막 파일을 재생했어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [
						{
							tag: "SWITCH_CLICK_TOGGLE",
						},
						{
							tag: "RECORDING_PLAYBACK_START",
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
		id: "seg-123",
		lines: [
			{
				text: "태평간에서 나오는 장면이었어.",
				chunks: [
					{
						content: "태평간에서 나오는 장면이었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "수진이 문을 닫고 계단을 올라가는.",
				chunks: [
					{
						content: "수진이 문을 닫고 계단을 올라가는.",
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
				text: "그런데.",
				chunks: [
					{
						content: "그런데.",
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
					tag: "DRONE_LOOMING_PRESENCE",
					status: "start",
				},
			],
			visualEffects: [],
		},
	},
	{
		id: "seg-125",
		lines: [
			{
				text: "수진의 목소리가 들렸어.",
				chunks: [
					{
						content: "수진의 목소리가 들렸어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [
						{
							tag: "FEMALE_WHISPER_CLOSE",
						},
					],
					visualEffects: [],
				},
			},
			{
				text: "아주 작게.",
				chunks: [
					{
						content: "아주 작게.",
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
			soundEffects: [],
			visualEffects: [],
		},
	},
	{
		id: "seg-126",
		lines: [
			{
				text: '"10년 후에 다시..."',
				chunks: [
					{
						content: '"10년 후에 다시..."',
						textEffects: ["INK_REVEAL"],
						soundEffects: [
							{
								tag: "FEMALE_WHISPER_CLOSE",
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
		id: "seg-127",
		lines: [
			{
				text: "수진은 그런 말을 한 기억이 없었어.",
				chunks: [
					{
						content: "수진은 그런 말을 한 기억이 없었어.",
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
		id: "seg-128",
		lines: [
			{
				text: "영상을 되돌려 다시 들었어.",
				chunks: [
					{
						content: "영상을 되돌려 다시 들었어.",
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
				text: "분명했어.",
				chunks: [
					{
						content: "분명했어.",
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
		id: "seg-129",
		lines: [
			{
				text: '"10년 후에 다시..."',
				chunks: [
					{
						content: '"10년 후에 다시..."',
						textEffects: ["GLITCH"],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [
						{
							tag: "GHOSTLY_VOICE_PHASING",
						},
					],
					visualEffects: [],
				},
			},
			{
				text: "수진의 목소리.",
				chunks: [
					{
						content: "수진의 목소리.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "하지만 수진의 의지가 아니었어.",
				chunks: [
					{
						content: "하지만 수진의 의지가 아니었어.",
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
		id: "seg-130",
		lines: [
			{
				text: "카메라를 내려놓았어.",
				chunks: [
					{
						content: "카메라를 내려놓았어.",
						soundEffects: [
							{
								tag: "METAL_IMPACT_DULL",
							},
						],
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
			soundEffects: [],
			visualEffects: [],
		},
	},
	{
		id: "seg-131",
		lines: [
			{
				text: "근데 말이야.",
				chunks: [
					{
						content: "근데 말이야.",
						textEffects: ["STYLE_ITALIC"],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "그 병원 지하 태평간은 지금도 그대로래.",
				chunks: [
					{
						content: "그 병원 지하 태평간은 지금도 그대로래.",
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
		id: "seg-132",
		lines: [
			{
				text: "그리고 2034년이 되면...",
				chunks: [
					{
						content: "그리고 2034년이 되면...",
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
		id: "seg-133",
		lines: [
			{
				text: "수진이 다시 그곳으로 가게 될지도 몰라.",
				chunks: [
					{
						content: "수진이 다시 그곳으로 가게 될지도 몰라.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "자기 의지와 상관없이.",
				chunks: [
					{
						content: "자기 의지와 상관없이.",
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
		id: "seg-134",
		lines: [
			{
				text: "무연고 환자 문제는",
				chunks: [
					{
						content: "무연고 환자 문제는",
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
				text: "그 병원만의 일이 아니거든.",
				chunks: [
					{
						content: "그 병원만의 일이 아니거든.",
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
			soundEffects: [],
			visualEffects: [],
		},
	},
	{
		id: "seg-135",
		lines: [
			{
				text: "당신이 다니는 병원 지하에도",
				chunks: [
					{
						content: "당신이 다니는 병원 지하에도",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "기록되지 않은 자들이 있을지 몰라.",
				chunks: [
					{
						content: "기록되지 않은 자들이 있을지 몰라.",
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
		id: "seg-136",
		lines: [
			{
				text: "기다리고 있을 거야.",
				chunks: [
					{
						content: "기다리고 있을 거야.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "누군가 자신들을 기억해주기를.",
				chunks: [
					{
						content: "누군가 자신들을 기억해주기를.",
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
];
