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
				text: "실제로 강원도 깊은 산골에서 일어난 일이었어.",
				chunks: [
					{
						content: "실제로 강원도 깊은 산골에서 일어난 일이었어.",
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
			url: "goedamjip-story-image/68d6ae90a184d7c4d8052000/seg-1",
			type: "background",
			sustain_until: "seg-31",
		},
		segmentEffects: {
			soundEffects: [
				{
					tag: "FOREST_AMBIENCE_DAY",
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
		id: "seg-2",
		lines: [
			{
				text: "영광기도원이라는 곳 있잖아.",
				chunks: [
					{
						content: "영광기도원이라는 곳 있잖아.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "외부와 완전히 단절된 종교 공동체였어.",
				chunks: [
					{
						content: "외부와 완전히 단절된 종교 공동체였어.",
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
					tag: "FOREST_AMBIENCE_DAY",
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
		id: "seg-3",
		lines: [
			{
				text: "3개월 전, 이준혁이라는 32살 남자가 그 기도원에 들어왔어.",
				chunks: [
					{
						content: "3개월 전, 이준혁이라는 32살 남자가",
					},
					{
						content: "그 기도원에 들어왔어.",
						soundEffects: [
							{
								tag: "FOOTSTEP_WOOD_NORMAL_CREAKY",
							},
						],
					},
				],
				preLineEffects: {
					image: {
						url: "goedamjip-story-image/68d6ae90a184d7c4d8052000/seg-3",
						type: "overlay",
						sustain_until: "seg-6",
					},
					soundEffects: [
						{
							tag: "DOOR_CREAK_SLOW",
						},
					],
					visualEffects: [],
				},
			},
			{
				text: "표면적으로는 회의적이고 호기심 많은 신참 신도였지.",
				chunks: [
					{
						content: "표면적으로는 회의적이고 호기심 많은 신참 신도였지.",
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
		id: "seg-4",
		lines: [
			{
				text: "근데 이상한 건...",
				chunks: [
					{
						content: "근데 이상한 건...",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "이준혁이라는 사람의 과거 기록이 3개월 전부터밖에 없다는 거야.",
				chunks: [
					{
						content:
							"이준혁이라는 사람의 과거 기록이 3개월 전부터밖에 없다는 거야.",
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
			soundEffects: [
				{
					tag: "ANALOG_TAPE_HISS",
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
		id: "seg-5",
		lines: [
			{
				text: "기도원 신도들은 20여 명 정도 있었는데,",
				chunks: [
					{
						content: "기도원 신도들은 20여 명 정도 있었는데,",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "모두 이준혁을 이상하게 쳐다봤어.",
				chunks: [
					{
						content: "모두 이준혁을 이상하게 쳐다봤어.",
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
		id: "seg-6",
		lines: [
			{
				text: "마치... 무언가를 알고 있는 것 같았어.",
				chunks: [
					{
						content: "마치... 무언가를 알고 있는 것 같았어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "하지만 아무도 입을 열지 않았지.",
				chunks: [
					{
						content: "하지만 아무도 입을 열지 않았지.",
					},
				],
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
		id: "seg-7",
		lines: [
			{
				text: "이준혁은 밤마다 기억이 끊겼어.",
				chunks: [
					{
						content: "이준혁은 밤마다 기억이 끊겼어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "새벽에 일어나면 손톱 밑에 검은 흙이 묻어 있었어.",
				chunks: [
					{
						content: "새벽에 일어나면",
					},
					{
						content: "손톱 밑에 검은 흙이 묻어 있었어.",
						soundEffects: [
							{
								tag: "CLAW_SCRATCH",
							},
						],
					},
				],
				preLineEffects: {
					image: {
						url: "goedamjip-story-image/68d6ae90a184d7c4d8052000/seg-7",
						type: "overlay",
						sustain_until: "seg-9",
					},
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
			soundEffects: [
				{
					tag: "ROOMTONE_HOUSE_CREAKS",
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
		id: "seg-8",
		lines: [
			{
				text: "이준혁이 중얼거렸어.",
				chunks: [
					{
						content: "이준혁이 중얼거렸어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: '"어젯밤에 뭘 했지?"',
				chunks: [
					{
						content: '"어젯밤에 뭘 했지?"',
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
		id: "seg-9",
		lines: [
			{
				text: "자꾸만 의심스러웠어.",
				chunks: [
					{
						content: "자꾸만 의심스러웠어.",
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
					tag: "ROOMTONE_HOUSE_CREAKS",
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
		id: "seg-10",
		lines: [
			{
				text: "첫 번째 탐사를 나선 날이었어.",
				chunks: [
					{
						content: "첫 번째 탐사를 나선 날이었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "금지된 성소 근처에서 기도 소리가 들렸어.",
				chunks: [
					{
						content: "금지된 성소 근처에서 ",
					},
					{
						content: "기도 소리가 들렸어.",
						textEffects: ["STYLE_FONT_ANCIENT_TRACE"],
					},
				],
				preLineEffects: {
					image: {
						url: "goedamjip-story-image/68d6ae90a184d7c4d8052000/seg-10",
						type: "overlay",
						sustain_until: "seg-12",
					},
					soundEffects: [
						{
							tag: "CONGREGATION_CHANT_RITUAL",
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
					tag: "DRONE_LOOMING_PRESENCE",
					status: "start",
				},
			],
			visualEffects: [
				{
					tag: "VISUAL_CANDLE_FLICKER",
					status: "start",
				},
			],
		},
	},
	{
		id: "seg-11",
		lines: [
			{
				text: "이준혁이 생각했어.",
				chunks: [
					{
						content: "이준혁이 생각했어.",
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
				text: '"다른 신도가 기도하고 있구나."',
				chunks: [
					{
						content: '"다른 신도가 기도하고 있구나."',
						textEffects: ["STYLE_ITALIC"],
						soundEffects: [
							{
								tag: "SIGH_RELIEF",
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
				text: "안심하며 나무 뒤로 다가갔어.",
				chunks: [
					{
						content: "안심하며 나무 뒤로 다가갔어.",
						soundEffects: [
							{
								tag: "FOOTSTEP_WOOD_NORMAL",
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
		],
		background: null,
		segmentEffects: {
			soundEffects: [
				{
					tag: "DRONE_LOOMING_PRESENCE",
					status: "stop",
				},
			],
			visualEffects: [],
		},
	},
	{
		id: "seg-13",
		lines: [
			{
				text: "그 순간이었어.",
				chunks: [
					{
						content: "그 순간이었어.",
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
			visualEffects: [
				{
					tag: "VISUAL_CANDLE_FLICKER",
					status: "stop",
				},
			],
		},
	},
	{
		id: "seg-14",
		lines: [
			{
				text: "반투명한 산신령 형체가 나타났어.",
				chunks: [
					{
						content: "반투명한 산신령 형체가 나타났어.",
						soundEffects: [
							{
								tag: "HEARTBEAT_SUDDEN_LOUD",
							},
						],
					},
				],
				preLineEffects: {
					image: {
						url: "goedamjip-story-image/68d6ae90a184d7c4d8052000/seg-14",
						type: "overlay",
						sustain_until: "seg-16",
					},
					soundEffects: [
						{
							tag: "GHOSTLY_WHISPERS_OVERLAPPING",
						},
					],
					visualEffects: ["OVERLAY_GHOST_FACE_BRIEF"],
				},
			},
			{
				text: "인간 같으면서도... 인간이 아니었어.",
				chunks: [
					{
						content: "인간 같으면서도... 인간이 아니었어.",
						textEffects: ["JITTER"],
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
					tag: "DRONE_SCANNER_SIGNAL",
					status: "start",
				},
			],
			visualEffects: [
				{
					tag: "OVERLAY_GHOST_FACE_BRIEF",
					status: "start",
				},
			],
		},
	},
	{
		id: "seg-15",
		lines: [
			{
				text: "이준혁은 뒤로 물러서다 넘어졌어.",
				chunks: [
					{
						content: "이준혁은 뒤로 물러서다 ",
						soundEffects: [
							{
								tag: "FOOTSTEP_LIGHT_TAPS",
							},
						],
					},
					{
						content: "넘어졌어.",
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
				text: '"이미... 본 것 같은데..."',
				chunks: [
					{
						content: '"이미... 본 것 같은데..."',
						textEffects: ["STYLE_ITALIC", "JITTER"],
						soundEffects: [
							{
								tag: "MALE_GASP_SHOCK",
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
					tag: "DRONE_SCANNER_SIGNAL",
					status: "stop",
				},
			],
			visualEffects: [
				{
					tag: "OVERLAY_GHOST_FACE_BRIEF",
					status: "stop",
				},
			],
		},
	},
	{
		id: "seg-16",
		lines: [
			{
				text: "기시감이었어.",
				chunks: [
					{
						content: "기시감이었어.",
						textEffects: ["GLITCH"],
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
				text: "분명히 처음 보는 건데 익숙했어.",
				chunks: [
					{
						content: "분명히 처음 보는 건데 ",
					},
					{
						content: "익숙했어.",
						textEffects: ["GLITCH"],
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
		id: "seg-17",
		lines: [
			{
				text: "며칠 후, 이준혁은 기도원을 더 조사하기 시작했어.",
				chunks: [
					{
						content: "며칠 후,",
					},
					{
						content: "이준혁은 기도원을 더 조사하기 시작했어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "과거 실종 사건들에 대해 알아보던 중이었어.",
				chunks: [
					{
						content: "과거 실종 사건들에 대해 알아보던 중이었어.",
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
				text: '"이 근처에서 등산객들이 자주 실종됐다고?"',
				chunks: [
					{
						content: '"이 근처에서 등산객들이 자주 실종됐다고?"',
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "목격자 증언도 찾아봤어.",
				chunks: [
					{
						content: "목격자 증언도 찾아봤어.",
						soundEffects: [
							{
								tag: "PAGE_TURN",
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
				text: "그러던 어느 날,",
				chunks: [
					{
						content: "그러던 어느 날,",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "성부의 방에서 낡은 일기장을 발견했어.",
				chunks: [
					{
						content: "성부의 방에서 ",
					},
					{
						content: "낡은 일기장을 발견했어.",
						soundEffects: [
							{
								tag: "MALE_GASP_SHOCK",
							},
						],
					},
				],
				preLineEffects: {
					image: {
						url: "goedamjip-story-image/68d6ae90a184d7c4d8052000/seg-19",
						type: "overlay",
						sustain_until: "seg-20",
					},
					soundEffects: [
						{
							tag: "PAGE_TURN",
						},
					],
					visualEffects: [],
				},
			},
		],
		background: null,
		segmentEffects: {
			soundEffects: [],
			visualEffects: [
				{
					tag: "OVERLAY_DIARY_CLOSEUP",
					status: "start",
				},
				{
					tag: "OVERLAY_DIARY_CLOSEUP",
					status: "stop",
				},
			],
		},
	},
	{
		id: "seg-20",
		lines: [
			{
				text: "조심스럽게 펼쳐보던 이준혁...",
				chunks: [
					{
						content: "조심스럽게 펼쳐보던 이준혁...",
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
				text: '"성부의 개인 기록이겠지."',
				chunks: [
					{
						content: '"성부의 개인 기록이겠지."',
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
				text: "그런데 그 순간이었어.",
				chunks: [
					{
						content: "그런데 그 순간이었어.",
						soundEffects: [
							{
								tag: "BREATH_SHAKY_PANIC",
							},
						],
					},
				],
				preLineEffects: {
					image: null,
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
		id: "seg-22",
		lines: [
			{
				text: "자신의 필체였어.",
				chunks: [
					{
						content: "자신의 필체였어.",
						textEffects: ["JITTER"],
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
				text: '"오늘 또 한 명이 산에서 길을 잃었다."',
				chunks: [
					{
						content: '"오늘 또 한 명이 산에서 길을 잃었다."',
						textEffects: ["TYPEWRITER"],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [
						{
							tag: "PAGE_TURN",
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
				text: "탁!",
				chunks: [
					{
						content: "탁!",
						textEffects: ["SHAKE"],
						soundEffects: [
							{
								tag: "HEARTBEAT_SUDDEN_LOUD",
							},
						],
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
		id: "seg-24",
		lines: [
			{
				text: "일기장이 바닥에 떨어졌어.",
				chunks: [
					{
						content: "일기장이 바닥에 떨어졌어.",
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
			{
				text: "이준혁의 손이 부들부들 떨렸어.",
				chunks: [
					{
						content: "이준혁의 손이 부들부들 떨렸어.",
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
		id: "seg-25",
		lines: [
			{
				text: "이준혁이 중얼거렸어.",
				chunks: [
					{
						content: "이준혁이 중얼거렸어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [
						{
							tag: "MALE_WHISPER_CLOSE",
						},
					],
					visualEffects: [],
				},
			},
			{
				text: '"이게 뭐지... 내가 쓴 게 아닌데..."',
				chunks: [
					{
						content: '"이게 뭐지... 내가 쓴 게 아닌데..."',
						textEffects: ["STYLE_ITALIC", "TYPEWRITER"],
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
		id: "seg-26",
		lines: [
			{
				text: "하지만 확실히 자신의 글씨체였어.",
				chunks: [
					{
						content: "하지만 확실히 자신의 글씨체였어.",
						textEffects: ["PULSE_SLOW"],
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
		id: "seg-27",
		lines: [
			{
				text: "신도들의 반응은 더 이상했어.",
				chunks: [
					{
						content: "신도들의 반응은 더 이상했어.",
						textEffects: ["JITTER"],
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
				text: "유명자라는 60대 할머니가 그를 보더니",
				chunks: [
					{
						content: "유명자라는 60대 할머니가 그를 보더니",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: '"성..." 하다가 입을 다물었어.',
				chunks: [
					{
						content: '"성..." 하다가 입을 다물었어.',
						textEffects: ["STYLE_ITALIC"],
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
				text: '"뭐라고 하려던 거예요?"',
				chunks: [
					{
						content: '"뭐라고 하려던 거예요?"',
						textEffects: ["TYPEWRITER"],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [
						{
							tag: "SHUSH_CLOSE",
						},
					],
					visualEffects: [],
				},
			},
			{
				text: '"아... 아무것도 아니에요."',
				chunks: [
					{
						content: '"아... 아무것도 아니에요."',
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
		id: "seg-29",
		lines: [
			{
				text: "다른 신도들도 마찬가지였어.",
				chunks: [
					{
						content: "다른 신도들도 마찬가지였어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "그를 다른 이름으로 부르려다가 급히 입을 다물곤 했어.",
				chunks: [
					{
						content: "그를 다른 이름으로 부르려다가 급히 입을 다물곤 했어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [
						{
							tag: "SHUSH_CLOSE",
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
		id: "seg-30",
		lines: [
			{
				text: '"성부님은 언제 만날 수 있을까요?"',
				chunks: [
					{
						content: '"성부님은 언제 만날 수 있을까요?"',
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "이준혁이 물어보면...",
				chunks: [
					{
						content: "이준혁이 물어보면...",
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
		id: "seg-31",
		lines: [
			{
				text: '"성부님은... 항상 우리 곁에 계세요."',
				chunks: [
					{
						content: '"성부님은... 항상 우리 곁에 계세요."',
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
				text: "애매한 대답만 돌아왔어.",
				chunks: [
					{
						content: "애매한 대답만 돌아왔어.",
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
		id: "seg-32",
		lines: [
			{
				text: "어느 날 밤, 이준혁은 성부의 방에 몰래 들어갔어.",
				chunks: [
					{
						content: "어느 날 밤, 이준혁은 성부의 방에 몰래 들어갔어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "문을 조심스럽게 열었어.",
				chunks: [
					{
						content: "문을 조심스럽게 열었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [
						{
							tag: "DOOR_CREAK_SLOW",
						},
					],
					visualEffects: [],
				},
			},
		],
		background: {
			url: "goedamjip-story-image/68d6ae90a184d7c4d8052000/seg-32",
			type: "background",
			sustain_until: "seg-38",
		},
		segmentEffects: {
			soundEffects: [
				{
					tag: "DRONE_SURROUNDED_THREAT",
					status: "start",
				},
				{
					tag: "RURAL_AMBIENCE_NIGHT",
					status: "start",
				},
			],
			visualEffects: [],
		},
	},
	{
		id: "seg-33",
		lines: [
			{
				text: "이준혁이 생각했어.",
				chunks: [
					{
						content: "이준혁이 생각했어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: '"아무도 없네, 빨리 찾아보자."',
				chunks: [
					{
						content: '"아무도 없네, 빨리 찾아보자."',
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
		id: "seg-34",
		lines: [
			{
				text: "안도하며 방을 둘러봤어.",
				chunks: [
					{
						content: "안도하며 방을 둘러봤어.",
					},
				],
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
					tag: "RURAL_AMBIENCE_NIGHT",
					status: "stop",
				},
			],
			visualEffects: [],
		},
	},
	{
		id: "seg-35",
		lines: [
			{
				text: "거울을 지나치는 순간이었어.",
				chunks: [
					{
						content: "거울을 지나치는 순간이었어.",
					},
				],
				preLineEffects: {
					image: null,
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
		id: "seg-36",
		lines: [
			{
				text: "순간적으로 성부 의상을 입은 자신의 모습이 반사됐어.",
				chunks: [
					{
						content: "순간적으로",
					},
					{
						content: "성부 의상을 입은 자신의 모습이 반사됐어.",
						textEffects: ["GLITCH"],
						soundEffects: [
							{
								tag: "MALE_GASP_SHOCK",
							},
						],
					},
				],
				preLineEffects: {
					image: {
						url: "goedamjip-story-image/68d6ae90a184d7c4d8052000/seg-36",
						type: "overlay",
						sustain_until: "seg-38",
					},
					soundEffects: [
						{
							tag: "MALE_GHOST_PRESENCE",
						},
					],
					visualEffects: ["OVERLAY_GLITCH"],
				},
			},
			{
				text: "흰 도포를 입고 있었어.",
				chunks: [
					{
						content: "흰 도포를 입고 있었어.",
						textEffects: ["STYLE_ITALIC"],
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
					tag: "DRONE_UNSTABLE_AIR",
					status: "start",
				},
			],
			visualEffects: [
				{
					tag: "SCREEN_BLUR",
					status: "start",
				},
				{
					tag: "OVERLAY_GLITCH",
					status: "start",
				},
			],
		},
	},
	{
		id: "seg-37",
		lines: [
			{
				text: '"뭐지?"',
				chunks: [
					{
						content: '"뭐지?"',
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
				text: "다시 거울을 보니 평범한 자신의 모습이었어.",
				chunks: [
					{
						content: "다시 거울을 보니 평범한 자신의 모습이었어.",
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
			visualEffects: [
				{
					tag: "OVERLAY_GLITCH",
					status: "stop",
				},
			],
		},
	},
	{
		id: "seg-38",
		lines: [
			{
				text: "착시였나?",
				chunks: [
					{
						content: "착시였나?",
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
				text: "아니면...",
				chunks: [
					{
						content: "아니면...",
						textEffects: ["PULSE_SLOW"],
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
			soundEffects: [
				{
					tag: "DRONE_UNSTABLE_AIR",
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
		id: "seg-39",
		lines: [
			{
				text: "그날 이후 이준혁은 기도원 주변을 더 자세히 탐사했어.",
				chunks: [
					{
						content: "그날 이후 이준혁은 기도원 주변을 더 자세히 탐사했어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "이상하게도 모든 길이 낯설지 않았어.",
				chunks: [
					{
						content: "이상하게도 모든 길이 낯설지 않았어.",
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
		],
		background: {
			url: "goedamjip-story-image/68d6ae90a184d7c4d8052000/seg-39",
			type: "background",
			sustain_until: "seg-42",
		},
		segmentEffects: {
			soundEffects: [
				{
					tag: "FOREST_AMBIENCE_DAY",
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
		id: "seg-40",
		lines: [
			{
				text: "처음 와본 곳인데...",
				chunks: [
					{
						content: "처음 와본 곳인데...",
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
				text: "마치 수십 번 걸어본 길 같았어.",
				chunks: [
					{
						content: "마치 수십 번 걸어본 길 같았어.",
					},
				],
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
				text: "이준혁이 중얼거렸어.",
				chunks: [
					{
						content: "이준혁이 중얼거렸어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: '"여기서 왼쪽으로 가면..."',
				chunks: [
					{
						content: '"여기서 왼쪽으로 가면..."',
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
					tag: "FOREST_AMBIENCE_DAY",
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
		id: "seg-42",
		lines: [
			{
				text: "실제로 그 방향에 샘이 있었어.",
				chunks: [
					{
						content: "실제로 그 방향에 샘이 있었어.",
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
		id: "seg-43",
		lines: [
			{
				text: "이준혁의 의혹은 점점 커져갔어.",
				chunks: [
					{
						content: "이준혁의 의혹은 점점 커져갔어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "마침내 성소의 깊숙한 곳까지 들어가기로 했어.",
				chunks: [
					{
						content: "마침내 성소의 깊숙한 곳까지 들어가기로 했어.",
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
			url: "goedamjip-story-image/68d6ae90a184d7c4d8052000/seg-43",
			type: "background",
			sustain_until: "seg-60",
		},
		segmentEffects: {
			soundEffects: [
				{
					tag: "ROOMTONE_BASEMENT_HUM",
					status: "start",
				},
				{
					tag: "DRONE_HESITATION_SUSPENSE",
					status: "start",
				},
			],
			visualEffects: [
				{
					tag: "VISUAL_CANDLE_FLICKER",
					status: "start",
				},
			],
		},
	},
	{
		id: "seg-44",
		lines: [
			{
				text: "이준혁이 생각했어.",
				chunks: [
					{
						content: "이준혁이 생각했어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: '"드디어 성부를 만날 수 있겠어."',
				chunks: [
					{
						content: '"드디어 성부를 만날 수 있겠어."',
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
		id: "seg-45",
		lines: [
			{
				text: "두근거리는 마음으로 문을 열었어.",
				chunks: [
					{
						content: "두근거리는 마음으로 ",
						textEffects: ["PULSE_SLOW"],
					},
					{
						content: "문을 열었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [
						{
							tag: "DOOR_CREAK_SLOW",
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
		id: "seg-46",
		lines: [
			{
				text: "하지만 그 순간이었어.",
				chunks: [
					{
						content: "하지만 그 순간이었어.",
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
					tag: "ROOMTONE_BASEMENT_HUM",
					status: "stop",
				},
				{
					tag: "DRONE_HESITATION_SUSPENSE",
					status: "stop",
				},
			],
			visualEffects: [
				{
					tag: "VISUAL_CANDLE_FLICKER",
					status: "stop",
				},
			],
		},
	},
	{
		id: "seg-47",
		lines: [
			{
				text: "성부가 있을 자리에는 커다란 거울만이 서 있었어.",
				chunks: [
					{
						content: "성부가 있을 자리에는 ",
					},
					{
						content: "커다란 거울만이 서 있었어.",
					},
				],
				preLineEffects: {
					image: {
						url: "goedamjip-story-image/68d6ae90a184d7c4d8052000/seg-47",
						type: "overlay",
						sustain_until: "seg-60",
					},
					soundEffects: [
						{
							tag: "MALE_GHOST_PRESENCE",
						},
					],
					visualEffects: [],
				},
			},
			{
				text: "사람은 아무도 없었어.",
				chunks: [
					{
						content: "사람은 아무도 없었어.",
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
					tag: "DRONE_INDUSTRIAL_ABYSS",
					status: "start",
				},
				{
					tag: "ROOMTONE_WAREHOUSE_ECHO",
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
		id: "seg-48",
		lines: [
			{
				text: "이준혁이 중얼거렸어.",
				chunks: [
					{
						content: "이준혁이 중얼거렸어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: '"이상해... 분명 누군가 있다고 했는데..."',
				chunks: [
					{
						content: '"이상해... 분명 누군가 있다고 했는데..."',
						textEffects: ["STYLE_ITALIC"],
						soundEffects: [
							{
								tag: "CURSE_WHISPER_LOW",
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
				text: "거울에 다가갔어.",
				chunks: [
					{
						content: "거울에 다가갔어.",
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
			soundEffects: [],
			visualEffects: [],
		},
	},
	{
		id: "seg-50",
		lines: [
			{
				text: "이준혁이 생각했어.",
				chunks: [
					{
						content: "이준혁이 생각했어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: '"그냥 착각이었나..."',
				chunks: [
					{
						content: '"그냥 착각이었나..."',
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
		id: "seg-51",
		lines: [
			{
				text: "혼란스러워하며 거울을 바라봤어.",
				chunks: [
					{
						content: "혼란스러워하며 거울을 바라봤어.",
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
		id: "seg-52",
		lines: [
			{
				text: "그 순간이었어.",
				chunks: [
					{
						content: "그 순간이었어.",
						textEffects: ["PULSE_FAST"],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [
						{
							tag: "HEARTBEAT_FAST",
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
					tag: "ROOMTONE_WAREHOUSE_ECHO",
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
		id: "seg-53",
		lines: [
			{
				text: "거울 속에서 실종된 등산객들의 얼굴이 일제히 나타났어.",
				chunks: [
					{
						content: "거울 속에서 실종된 등산객들의 얼굴이 일제히 나타났어.",
					},
				],
				preLineEffects: {
					image: {
						url: null,
						type: "overlay",
					},
					soundEffects: [
						{
							tag: "CONGREGATION_CHANT_REVERSED",
						},
					],
					visualEffects: [],
				},
			},
			{
				text: "모두 그를 응시하고 있었어.",
				chunks: [
					{
						content: "모두 그를 응시하고 있었어.",
						soundEffects: [
							{
								tag: "CURSE_WHISPER_LOW",
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
					status: "start",
				},
			],
		},
	},
	{
		id: "seg-54",
		lines: [
			{
				text: "이준혁은 뒤로 물러서려 했어.",
				chunks: [
					{
						content: "이준혁은 뒤로 물러서려 했어.",
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
				text: "하지만 발이 땅에 붙은 듯 움직이지 않았어.",
				chunks: [
					{
						content: "하지만 발이 땅에 붙은 듯 움직이지 않았어.",
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
		id: "seg-55",
		lines: [
			{
				text: "거울 속 등산객들의 입이 천천히 열렸어.",
				chunks: [
					{
						content: "거울 속 등산객들의 입이 천천히 열렸어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "하지만 소리는 들리지 않았어.",
				chunks: [
					{
						content: "하지만 소리는 들리지 않았어.",
					},
				],
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
		id: "seg-56",
		lines: [
			{
				text: "그때 깨달았어.",
				chunks: [
					{
						content: "그때 깨달았어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [
						{
							tag: "HEARTBEAT_SUDDEN_LOUD",
						},
					],
					visualEffects: [],
				},
			},
			{
				text: "모든 퍼즐이 맞춰지는 순간이었어.",
				chunks: [
					{
						content: "모든 퍼즐이 맞춰지는 순간이었어.",
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
					tag: "MUSIC_DEDUCTION_SUSPENSE",
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
		id: "seg-57",
		lines: [
			{
				text: "3개월 전부터의 기억 공백.",
				chunks: [
					{
						content: "3개월 전부터의 기억 공백.",
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
				text: "흙묻은 손톱.",
				chunks: [
					{
						content: "흙묻은 손톱.",
						textEffects: ["JITTER"],
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
				text: "신도들의 이상한 반응.",
				chunks: [
					{
						content: "신도들의 이상한 반응.",
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
		id: "seg-58",
		lines: [
			{
				text: "자신의 필체로 쓰인 일기.",
				chunks: [
					{
						content: "자신의 필체로 쓰인 일기.",
						textEffects: ["STYLE_FONT_HANDWRITTEN_UNSTABLE"],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [
						{
							tag: "PENCIL_WRITING",
						},
					],
					visualEffects: [],
				},
			},
			{
				text: "너무나 익숙한 산길.",
				chunks: [
					{
						content: "너무나 익숙한 산길.",
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
				text: "성부의 부재.",
				chunks: [
					{
						content: "성부의 부재.",
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
		id: "seg-59",
		lines: [
			{
				text: "거울 앞에서 이준혁은 중얼거렸어.",
				chunks: [
					{
						content: "거울 앞에서 이준혁은 중얼거렸어.",
					},
					{
						content: '"내가... 성부였구나."',
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
					soundEffects: [
						{
							tag: "MUSIC_STINGER_PIANO_MID_DISCORDANT",
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
		id: "seg-60",
		lines: [
			{
				text: "거울 속에서 또 다른 자신이 그를 바라봤어.",
				chunks: [
					{
						content: "거울 속에서 또 다른 자신이 그를 바라봤어.",
						textEffects: ["GLOW"],
					},
					{
						content: "성부의 복장을 입은 채로.",
						textEffects: ["STYLE_FONT_ANCIENT_TRACE"],
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
							tag: "MUSIC_STINGER_PIANO_HIGH_DISCORDANT",
						},
					],
					visualEffects: [],
				},
			},
		],
		background: null,
		segmentEffects: {
			soundEffects: [],
			visualEffects: [
				{
					tag: "OVERLAY_EYES_GLOWING_DARK",
					status: "start",
				},
			],
		},
	},
	{
		id: "seg-61",
		lines: [
			{
				text: "이준혁이 중얼거렸어.",
				chunks: [
					{
						content: "이준혁이 중얼거렸어.",
					},
					{
						content: '"그럼 실종된 사람들은..."',
						textEffects: ["JITTER"],
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
		id: "seg-62",
		lines: [
			{
				text: "답은 이미 알고 있었어.",
				chunks: [
					{
						content: "답은 이미 알고 있었어.",
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
			soundEffects: [
				{
					tag: "MUSIC_DEDUCTION_SUSPENSE",
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
		id: "seg-63",
		lines: [
			{
				text: "거울 너머의 자신이 입을 열었어.",
				chunks: [
					{
						content: "거울 너머의 자신이 입을 열었어.",
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
		],
		background: null,
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
					tag: "VISUAL_VIGNETTE",
					status: "start",
				},
			],
		},
	},
	{
		id: "seg-64",
		lines: [
			{
				text: "끔찍한 신음 소리가 흘러나왔어.",
				chunks: [
					{
						content: "끔찍한 신음 소리가 흘러나왔어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [
						{
							tag: "CREATURE_GUTTURAL_GROAN",
						},
					],
					visualEffects: [],
				},
			},
			{
				text: "인간의 목소리가 아니었어.",
				chunks: [
					{
						content: "인간의 목소리가 아니었어.",
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
		id: "seg-65",
		lines: [
			{
				text: "이준혁의 다리에서 힘이 빠졌어.",
				chunks: [
					{
						content: "이준혁의 다리에서 힘이 빠졌어.",
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
				text: "주저앉으며 거울을 바라봤어.",
				chunks: [
					{
						content: "주저앉으며 ",
					},
					{
						content: "거울을 바라봤어.",
						textEffects: ["PULSE_SLOW"],
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
				text: "경찰 기록에는 이렇게 나와 있어.",
				chunks: [
					{
						content: "경찰 기록에는 이렇게 나와 있어.",
						textEffects: ["TYPEWRITER"],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [
						{
							tag: "PAGE_TURN",
						},
					],
					visualEffects: [],
				},
			},
			{
				text: "이준혁이란 사람은 3개월 전 갑자기 나타났다고.",
				chunks: [
					{
						content: "이준혁이란 사람은 3개월 전 갑자기 나타났다고.",
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
		id: "seg-67",
		lines: [
			{
				text: "하지만 영광기도원 신도들은 알고 있었어.",
				chunks: [
					{
						content: "하지만 영광기도원 신도들은 알고 있었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [
						{
							tag: "OLD_WOMAN_WHISPER",
						},
					],
					visualEffects: [],
				},
			},
			{
				text: "그가 처음부터 그곳의 성부였다는 걸.",
				chunks: [
					{
						content: "그가 처음부터 ",
					},
					{
						content: "그곳의 성부였다는 걸.",
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
		id: "seg-68",
		lines: [
			{
				text: "근데 진짜 섬뜩한 건 이거야.",
				chunks: [
					{
						content: "근데 진짜 섬뜩한 건 이거야.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [
						{
							tag: "CHURCH_BELL_TOLLING_SLOW",
						},
					],
					visualEffects: [],
				},
			},
			{
				text: "그 이후로 영광기도원에서는 실종 사건이 멈췄어.",
				chunks: [
					{
						content: "그 이후로 ",
					},
					{
						content: "영광기도원에서는 실종 사건이 멈췄어.",
						textEffects: ["PULSE_SLOW"],
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
			visualEffects: [
				{
					tag: "OVERLAY_EYES_GLOWING_DARK",
					status: "stop",
				},
			],
		},
	},
	{
		id: "seg-69",
		lines: [
			{
				text: "하지만 이준혁도 사라졌어.",
				chunks: [
					{
						content: "하지만 이준혁도 사라졌어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "거울만 남겨둔 채로.",
				chunks: [
					{
						content: "거울만 남겨둔 채로.",
						soundEffects: [
							{
								tag: "MALE_GASP_SHOCK",
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
							tag: "FEMALE_GHOST_PRESENCE",
						},
					],
					visualEffects: [],
				},
			},
		],
		background: null,
		segmentEffects: {
			soundEffects: [],
			visualEffects: [
				{
					tag: "OVERLAY_HANDPRINT",
					status: "start",
				},
			],
		},
	},
	{
		id: "seg-70",
		lines: [
			{
				text: "그리고 가끔, 아주 가끔...",
				chunks: [
					{
						content: "그리고 가끔, 아주 가끔...",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "그 거울에서 누군가의 얼굴이 보인다고 해.",
				chunks: [
					{
						content: "그 거울에서 누군가의 얼굴이 보인다고 해.",
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
				text: "혹시 너도 강원도 산에 가게 되면...",
				chunks: [
					{
						content: "혹시 너도 강원도 산에 가게 되면...",
						textEffects: ["TYPEWRITER"],
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
				text: "거울을 조심해.",
				chunks: [
					{
						content: "거울을 조심해.",
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
		id: "seg-72",
		lines: [
			{
				text: "그 안에서 누군가 너를 부를지도 모르거든.",
				chunks: [
					{
						content: "그 안에서",
					},
					{
						content: "누군가 너를 부를지도 모르거든.",
						textEffects: ["PULSE_SLOW"],
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
		],
		background: null,
		segmentEffects: {
			soundEffects: [],
			visualEffects: [],
		},
	},
];
