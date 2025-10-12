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
				text: "서울 외곽에 있는 한 장례식장을 무대 삼아 현실적이면서도 서늘한 분위기를 조성한다.",
				chunks: [
					{
						content: "서울 외곽에 있는 한 장례식장에서 실제로 일어났던 일이야.",
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
			url: "goedamjip-story-image/68b8d13fb9aa221da802b000/seg-1",
			type: "background",
			sustain_until: "seg-18",
		},
		segmentEffects: {
			soundEffects: [
				{
					tag: "ROOMTONE_FLUORESCENT_BUZZ",
					status: "start",
				},
				{
					tag: "DRONE_HOME_UNREST",
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
				text: "김수현이라는 장의사가 있었어.",
				chunks: [
					{
						content: "김수현이라는 장의사가 있었어.",
					},
				],
				preLineEffects: {
					image: {
						url: "goedamjip-story-image/68b8d13fb9aa221da802b000/seg-2",
						type: "overlay",
						sustain_until: "seg-4",
					},
					soundEffects: [
						{
							tag: "CLOTH_DRAGGING",
						},
					],
					visualEffects: [],
				},
			},
			{
				text: "3대째 가업을 이어받은 베테랑이었지.",
				chunks: [
					{
						content: "3대째 가업을 이어받은 베테랑이었지.",
					},
				],
				preLineEffects: {
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
				text: "2019년 12월 어느 추운 밤이었어.",
				chunks: [
					{
						content: "2019년 12월 어느 추운 밤이었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "박미영이라는 24세 여성의 시신이 들어왔거든.",
				chunks: [
					{
						content: "박미영이라는 24세 여성의 시신이 들어왔거든.",
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
							tag: "DOOR_OPEN",
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
		id: "seg-4",
		lines: [
			{
				text: '유족들이 "빨리 처리해 주세요"라고 이상하게 재촉했어.',
				chunks: [
					{
						content: '유족들이 "빨리 처리해 주세요"라고 이상하게 재촉했어.',
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
				text: "수현은 시신을 옮기다가 이상한 걸 느꼈어.",
				chunks: [
					{
						content: "수현은 시신을 옮기다가 이상한 걸 느꼈어.",
					},
				],
				preLineEffects: {
					image: {
						url: "goedamjip-story-image/68b8d13fb9aa221da802b000/seg-5",
						type: "overlay",
						sustain_until: "seg-08",
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
				text: "너무 차갑다는 거야.",
				chunks: [
					{
						content: "너무 차갑다는 거야.",
						soundEffects: [
							{
								tag: "MALE_BREATH_CLOSE",
							},
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
				text: "보통 시신도 차갑지만 이건 달랐어.",
				chunks: [
					{
						content: "보통 시신도 차갑지만 이건 달랐어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "마치 얼음덩어리 같았거든.",
				chunks: [
					{
						content: "마치 얼음덩어리 같았거든.",
						soundEffects: [
							{
								tag: "GLASS_SQUEAK",
							},
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
					tag: "DRONE_HOME_UNREST",
					status: "stop",
				},
			],
			visualEffects: [
				{
					tag: "OVERLAY_SNOWFALL",
					status: "start",
				},
				{
					tag: "OVERLAY_SNOWFALL",
					status: "stop",
				},
			],
		},
	},
	{
		id: "seg-7",
		lines: [
			{
				text: "방부 처리를 시작했어.",
				chunks: [
					{
						content: "방부 처리를 시작했어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [
						{
							tag: "SCISSORS_SNIPPING",
						},
					],
					visualEffects: [],
				},
			},
			{
				text: "그런데 이상한 일이 벌어졌어.",
				chunks: [
					{
						content: "그런데 이상한 일이 벌어졌어.",
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
					tag: "DRONE_SCANNER_SIGNAL",
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
				text: "방부액이 들어가질 않는 거야.",
				chunks: [
					{
						content: "방부액이 들어가질 않는 거야.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "혈관이 완전히 얼어있었어.",
				chunks: [
					{
						content: "혈관이 완전히 얼어있었어.",
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
		id: "seg-9",
		lines: [
			{
				text: "수현이 시신의 손목을 자세히 살펴보고 있었어.",
				chunks: [
					{
						content: "수현이 시신의 손목을 자세히 살펴보고 있었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "절개 부위를 확인하려고 말이야.",
				chunks: [
					{
						content: "절개 부위를 확인하려고 말이야.",
					},
				],
				preLineEffects: {
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
				text: '"단순한 시체 경직이겠지..."',
				chunks: [
					{
						content: '"단순한 시체 경직이겠지..."',
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
				text: "스스로를 안심시켰어.",
				chunks: [
					{
						content: "스스로를 안심시켰어.",
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
			soundEffects: [
				{
					tag: "ROOMTONE_FLUORESCENT_BUZZ",
					status: "stop",
				},
				{
					tag: "DRONE_SCANNER_SIGNAL",
					status: "stop",
				},
			],
			visualEffects: [],
		},
	},
	{
		id: "seg-11",
		lines: [
			{
				text: "갑자기 손목에서 검붉은 진물이 솟구쳐 올라왔어.",
				chunks: [
					{
						content: "갑자기 손목에서 검붉은 진물이 솟구쳐 올라왔어.",
					},
				],
				preLineEffects: {
					image: {
						url: "goedamjip-story-image/68b8d13fb9aa221da802b000/seg-11",
						type: "overlay",
						sustain_until: "seg-11",
					},
					soundEffects: [
						{
							tag: "LIQUID_SPLATTER",
						},
						{
							tag: "HEARTBEAT_SUDDEN_LOUD",
						},
					],
					visualEffects: ["SCREEN_SHAKE"],
				},
			},
			{
				text: "수현의 손등을 적셨지.",
				chunks: [
					{
						content: "수현의 손등을 적셨지.",
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
		id: "seg-12",
		lines: [
			{
				text: '"으악!"',
				chunks: [
					{
						content: '"으악!"',
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
			{
				text: "수현이 깜짝 놀라 뒤로 물러섰어.",
				chunks: [
					{
						content: "수현이 깜짝 놀라 뒤로 물러섰어.",
						soundEffects: [
							{
								tag: "FOOTSTEP_LIGHT_TAPS",
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
				text: "손을 씻으면서도 등골이 서늘했어.",
				chunks: [
					{
						content: "손을 씻으면서도 등골이 서늘했어.",
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
				text: "30년 장의사 생활에서 처음 겪는 일이었거든.",
				chunks: [
					{
						content: "30년 장의사 생활에서 처음 겪는 일이었거든.",
					},
				],
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
					tag: "SCREEN_FLICKER",
					status: "stop",
				},
			],
		},
	},
	{
		id: "seg-14",
		lines: [
			{
				text: "다음 날 아침이었어.",
				chunks: [
					{
						content: "다음 날 아침이었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "수현은 박미영에 대해 알아보기 시작했어.",
				chunks: [
					{
						content: "수현은 박미영에 대해 알아보기 시작했어.",
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
			soundEffects: [
				{
					tag: "CITY_AMBIENCE_DAY",
					status: "start",
				},
			],
			visualEffects: [],
		},
	},
	{
		id: "seg-15",
		lines: [
			{
				text: "인터넷 기사를 찾아보니 충격적인 내용이 나왔어.",
				chunks: [
					{
						content: "인터넷 기사를 찾아보니 충격적인 내용이 나왔어.",
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
				text: "직장 내 집단 괴롭힘으로 자살한 거였어.",
				chunks: [
					{
						content: "직장 내 집단 괴롭힘으로 자살한 거였어.",
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
		id: "seg-16",
		lines: [
			{
				text: '동료들이 매일 "미영아, 또 실수했네?", "회사 분위기 망치지 마"라는 식으로 괴롭혔대.',
				chunks: [
					{
						content:
							'동료들이 매일 "미영아, 또 실수했네?", "회사 분위기 망치지 마"라는 식으로 괴롭혔대.',
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "심지어는 업무용 메신저로도 계속 시달렸다더라.",
				chunks: [
					{
						content: "심지어는 업무용 메신저로도 계속 시달렸다더라.",
						textEffects: ["GLITCH"],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [
						{
							tag: "SMARTPHONE_NOTIFICATION",
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
		id: "seg-17",
		lines: [
			{
				text: "박미영의 일기장도 발견됐었어.",
				chunks: [
					{
						content: "박미영의 일기장도 발견됐었어.",
					},
				],
				preLineEffects: {
					image: {
						url: "goedamjip-story-image/68b8d13fb9aa221da802b000/seg-17",
						type: "overlay",
						sustain_until: "seg-18",
					},
					soundEffects: [
						{
							tag: "PAGE_TURN",
						},
					],
					visualEffects: [],
				},
			},
			{
				text: "마지막 장에는 이렇게 적혀 있었어.",
				chunks: [
					{
						content: "마지막 장에는 이렇게 적혀 있었어.",
					},
				],
				preLineEffects: {
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
				text: '"이제 정말 견딜 수 없어."',
				chunks: [
					{
						content: '"이제 정말 견딜 수 없어."',
						textEffects: ["STYLE_FONT_HANDWRITTEN_UNSTABLE"],
						soundEffects: [
							{
								tag: "FEMALE_SOBBING",
							},
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
				text: '"하지만... 언젠가는 진실이 밝혀지겠지."',
				chunks: [
					{
						content: '"하지만... 언젠가는 진실이 밝혀지겠지."',
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
		id: "seg-19",
		lines: [
			{
				text: "수현이 장례식장 지하로 내려갔어.",
				chunks: [
					{
						content: "수현이 장례식장 지하로 내려갔어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "거기엔 조선시대부터 내려온 오래된 제단이 있었거든.",
				chunks: [
					{
						content: "거기엔 조선시대부터 내려온 오래된 제단이 있었거든.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [
						{
							tag: "HEAVY_DOOR_CREAK_SLOW",
						},
					],
					visualEffects: [],
				},
			},
		],
		background: {
			url: "goedamjip-story-image/68b8d13fb9aa221da802b000/seg-19",
			type: "background",
			sustain_until: "seg-24",
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
					tag: "VISUAL_CANDLE_FLICKER",
					status: "start",
				},
			],
		},
	},
	{
		id: "seg-20",
		lines: [
			{
				text: "할아버지가 말씀하시길...",
				chunks: [
					{
						content: "할아버지가 말씀하시길...",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "원한이 깊은 영혼들을 달래는 곳이라고 했어.",
				chunks: [
					{
						content: "원한이 깊은 영혼들을 달래는 곳이라고 했어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [
						{
							tag: "CONGREGATION_CHANT_REVERSED",
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
		id: "seg-21",
		lines: [
			{
				text: "촛불 하나만 들고 어둠 속을 걸었어.",
				chunks: [
					{
						content: "촛불 하나만 들고 어둠 속을 걸었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [
						{
							tag: "MATCH_STRIKE_AND_IGNITE",
						},
					],
					visualEffects: [],
				},
			},
			{
				text: "발소리만 텅텅 울렸지.",
				chunks: [
					{
						content: "발소리만 텅텅 울렸지.",
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
		id: "seg-22",
		lines: [
			{
				text: '"역시 미신일 뿐이야."',
				chunks: [
					{
						content: '"역시 미신일 뿐이야."',
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
				text: "기록들을 읽으며 중얼거렸어.",
				chunks: [
					{
						content: "기록들을 읽으며 중얼거렸어.",
						soundEffects: [
							{
								tag: "PAGE_TURN",
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
		id: "seg-23",
		lines: [
			{
				text: "갑자기 모든 촛불이 꺼졌어.",
				chunks: [
					{
						content: "갑자기 모든 촛불이 꺼졌어.",
					},
				],
				preLineEffects: {
					image: {
						url: "goedamjip-story-image/68b8d13fb9aa221da802b000/seg-23",
						type: "overlay",
						sustain_until: "seg-24",
					},
					soundEffects: [
						{
							tag: "FEMALE_SOBBING",
						},
					],
					visualEffects: ["SCREEN_FLICKER"],
				},
			},
			{
				text: "동시에 여성의 낮은 흐느낌이 울려퍼졌거든.",
				chunks: [
					{
						content: "동시에 여성의 낮은 흐느낌이 울려퍼졌거든.",
					},
				],
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
						textEffects: ["PULSE_FAST"],
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
			{
				text: "수현이 휴대폰 플래시를 켜며 계단으로 뛰어올라갔어.",
				chunks: [
					{
						content: "수현이 휴대폰 플래시를 켜며",
					},
					{
						content: "계단으로 뛰어올라갔어.",
						soundEffects: [
							{
								tag: "FOOTSTEP_EXTERIOR_RUN",
							},
						],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [
						{
							tag: "SWITCH_ONOFF_TOGGLE",
						},
					],
					visualEffects: ["EFFECT_FLASHLIGHT"],
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
				{
					tag: "DRONE_UNSTABLE_AIR",
					status: "stop",
				},
			],
			visualEffects: [],
		},
	},
	{
		id: "seg-25",
		lines: [
			{
				text: "그날 밤부터 이상한 일들이 계속됐어.",
				chunks: [
					{
						content: "그날 밤부터 이상한 일들이 계속됐어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "냉동고에서 이상한 소리가 들렸거든.",
				chunks: [
					{
						content: "냉동고에서 이상한 소리가 들렸거든.",
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
			url: "goedamjip-story-image/68b8d13fb9aa221da802b000/seg-25",
			type: "background",
			sustain_until: "seg-31",
		},
		segmentEffects: {
			soundEffects: [
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
		id: "seg-26",
		lines: [
			{
				text: "똑... 똑... 똑...",
				chunks: [
					{
						content: "똑... 똑... 똑...",
						soundEffects: [
							{
								tag: "FAUCET_DRIP",
							},
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
				text: "무언가 떨어지는 소리였어.",
				chunks: [
					{
						content: "무언가 떨어지는 소리였어.",
					},
				],
				preLineEffects: {
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
				text: "수현이 냉동고를 열어봤어.",
				chunks: [
					{
						content: "수현이 냉동고를 열어봤어.",
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
				text: "일상적인 점검이라고 생각하면서 말이야.",
				chunks: [
					{
						content: "일상적인 점검이라고 생각하면서 말이야.",
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
		id: "seg-28",
		lines: [
			{
				text: '"모든 시신이 제자리에 있네."',
				chunks: [
					{
						content: '"모든 시신이 제자리에 있네."',
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "안도하며 중얼거렸어.",
				chunks: [
					{
						content: "안도하며 중얼거렸어.",
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
		id: "seg-29",
		lines: [
			{
				text: "그런데 뭔가 이상했어.",
				chunks: [
					{
						content: "그런데 뭔가 이상했어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "모든 시신들이 똑같은 방향을 바라보고 있는 거야.",
				chunks: [
					{
						content: "모든 시신들이 똑같은 방향을 바라보고 있는 거야.",
						textEffects: ["JITTER"],
						soundEffects: [
							{
								tag: "FEMALE_GASP_SHOCK",
							},
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
					tag: "DRONE_STRINGS_DISCORDANT",
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
		id: "seg-30",
		lines: [
			{
				text: "수현이 벽을 따라 시선을 돌렸어.",
				chunks: [
					{
						content: "수현이 벽을 따라 시선을 돌렸어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "그 끝에는 박미영의 시신이 있었어.",
				chunks: [
					{
						content: "그 끝에는 박미영의 시신이 있었어.",
						textEffects: ["JITTER"],
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
		id: "seg-31",
		lines: [
			{
				text: "다리에 힘이 풀렸어.",
				chunks: [
					{
						content: "다리에 힘이 풀렸어.",
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
				text: "차가운 식은땀이 등줄기를 타고 흘렸지.",
				chunks: [
					{
						content: "차가운 식은땀이 등줄기를 타고 흘렸지.",
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
					tag: "DRONE_STRINGS_DISCORDANT",
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
		id: "seg-32",
		lines: [
			{
				text: "그 시각, 시내 한 오피스텔에서는...",
				chunks: [
					{
						content: "그 시각, 시내 한 오피스텔에서는...",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "최팀장이 술에 취해 계단을 올라가고 있었어.",
				chunks: [
					{
						content: "최팀장이 술에 취해 계단을 올라가고 있었어.",
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
		background: {
			url: "goedamjip-story-image/68b8d13fb9aa221da802b000/seg-32",
			type: "background",
			sustain_until: "seg-41",
		},
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
		id: "seg-33",
		lines: [
			{
				text: "쿵!",
				chunks: [
					{
						content: "쿵!",
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
							tag: "METAL_IMPACT_DULL",
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
					tag: "ROOMTONE_FLUORESCENT_BUZZ",
					status: "stop",
				},
			],
			visualEffects: [],
		},
	},
	{
		id: "seg-34",
		lines: [
			{
				text: "넘어져서 머리를 심하게 다쳤어.",
				chunks: [
					{
						content: "넘어져서 머리를 심하게 다쳤어.",
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
			{
				text: "응급실로 실려갔지.",
				chunks: [
					{
						content: "응급실로 실려갔지.",
						soundEffects: [
							{
								tag: "WHEELCHAIR_ROLLING_SLOW",
							},
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
					tag: "ACCIDENT_SCENE_AMBIENCE",
					status: "start",
				},
			],
			visualEffects: [],
		},
	},
	{
		id: "seg-35",
		lines: [
			{
				text: "이틀 후에는 이대리가 교통사고를 당했어.",
				chunks: [
					{
						content: "이틀 후에는 이대리가 교통사고를 당했어.",
						soundEffects: [
							{
								tag: "CAR_HORN_STUCK",
							},
						],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [
						{
							tag: "CAR_TIRE_SCREECH",
						},
					],
					visualEffects: [],
				},
			},
			{
				text: "신호등 고장으로 말이야.",
				chunks: [
					{
						content: "신호등 고장으로 말이야.",
					},
				],
				preLineEffects: {
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
				text: '"우연일까?"',
				chunks: [
					{
						content: '"우연일까?"',
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
				text: "수현이 의심스러워했어.",
				chunks: [
					{
						content: "수현이 의심스러워했어.",
					},
				],
				preLineEffects: {
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
				text: "그날 밤 수현은 남은 가해자 정사원을 찾아갔어.",
				chunks: [
					{
						content: "그날 밤 수현은 남은 가해자 정사원을 찾아갔어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [
						{
							tag: "FOOTSTEP_EXTERIOR_SLOW_HEAVY",
						},
					],
					visualEffects: [],
				},
			},
			{
				text: "진실을 확인하기 위해서 말이야.",
				chunks: [
					{
						content: "진실을 확인하기 위해서 말이야.",
					},
				],
				preLineEffects: {
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
				text: "엘리베이터를 타고 올라가던 중이었어.",
				chunks: [
					{
						content: "엘리베이터를 타고 올라가던 중이었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "거울 속 자신의 모습을 보며 긴장을 풀려고 했지.",
				chunks: [
					{
						content: "거울 속 자신의 모습을 보며 긴장을 풀려고 했지.",
					},
				],
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
					tag: "ACCIDENT_SCENE_AMBIENCE",
					status: "stop",
				},
			],
			visualEffects: [],
		},
	},
	{
		id: "seg-39",
		lines: [
			{
				text: "그런데 거울 속에 이상한 게 보였어.",
				chunks: [
					{
						content: "그런데 거울 속에 이상한 게 보였어.",
					},
					{
						content: "자신의 뒤쪽으로 긴 머리의 여성이 서 있었거든.",
						textEffects: ["GLITCH"],
						soundEffects: [
							{
								tag: "FEMALE_BREATH_CLOSE",
							},
						],
					},
				],
				preLineEffects: {
					image: {
						url: "goedamjip-story-image/68b8d13fb9aa221da802b000/seg-39",
						type: "overlay",
						sustain_until: "seg-40",
					},
					soundEffects: [
						{
							tag: "CURSE_WHISPER_LOW",
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
		id: "seg-40",
		lines: [
			{
				text: "수현이 뒤돌아봤어.",
				chunks: [
					{
						content: "수현이 뒤돌아봤어.",
					},
					{
						content: "하지만 아무도 없었지.",
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
		id: "seg-41",
		lines: [
			{
				text: "다시 거울을 보니 사라져 있었어.",
				chunks: [
					{
						content: "다시 거울을 보니 사라져 있었어.",
					},
					{
						content: "귀에서 이명이 들렸어.",
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
					tag: "DRONE_LOOMING_PRESENCE",
					status: "stop",
				},
			],
			visualEffects: [
				{
					tag: "SCREEN_BLUR",
					status: "stop",
				},
				{
					tag: "OVERLAY_GLITCH",
					status: "stop",
				},
			],
		},
	},
	{
		id: "seg-42",
		lines: [
			{
				text: "정사원의 집에 도착했어.",
				chunks: [
					{
						content: "정사원의 집에 도착했어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "초인종을 눌렀지.",
				chunks: [
					{
						content: "초인종을 눌렀지.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [
						{
							tag: "DOORBELL_NORMAL_DINGDONG",
						},
					],
					visualEffects: [],
				},
			},
		],
		background: {
			url: "goedamjip-story-image/68b8d13fb9aa221da802b000/seg-42",
			type: "background",
			sustain_until: "seg-44",
		},
		segmentEffects: {
			soundEffects: [
				{
					tag: "CITY_AMBIENCE_NIGHT",
					status: "start",
				},
			],
			visualEffects: [],
		},
	},
	{
		id: "seg-43",
		lines: [
			{
				text: '떨리는 목소리로 "누구세요?"라고 물어봤어.',
				chunks: [
					{
						content: '떨리는 목소리로 "누구세요?"라고 물어봤어.',
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
		id: "seg-44",
		lines: [
			{
				text: '"장의사 김수현입니다.',
				chunks: [
					{
						content: '"장의사 김수현입니다."',
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: ' "박미영씨 일로 잠깐만 뵙고 싶어서요."',
				chunks: [
					{
						content: '"박미영씨 일로 잠깐만 뵙고 싶어서요."',
					},
				],
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
			visualEffects: [],
		},
	},
	{
		id: "seg-45",
		lines: [
			{
				text: "문이 열렸어.",
				chunks: [
					{
						content: "문이 열렸어.",
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
			{
				text: "정사원의 얼굴은 창백했어.",
				chunks: [
					{
						content: "정사원의 얼굴은 창백했어.",
						soundEffects: [
							{
								tag: "MALE_BREATH_CLOSE",
							},
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
			url: "goedamjip-story-image/68b8d13fb9aa221da802b000/seg-45",
			type: "background",
			sustain_until: "seg-56",
		},
		segmentEffects: {
			soundEffects: [
				{
					tag: "ROOMTONE_HOUSE_CREAKS",
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
				text: '정사원이 떨며 "미영이가... 미영이가 매일 꿈에 나타나요."라고 말했어.',
				chunks: [
					{
						content: "정사원이 떨며 ",
						soundEffects: [
							{
								tag: "SWALLOWING_NERVOUS",
							},
						],
					},
					{
						content: '"미영이가... 미영이가 매일 꿈에 나타나요."라고 말했어.',
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
					tag: "DRONE_UNSTABLE_PULSE",
					status: "start",
				},
			],
			visualEffects: [],
		},
	},
	{
		id: "seg-47",
		lines: [
			{
				text: '"우리가... 우리가 너무 심했던 것 같아요."',
				chunks: [
					{
						content: '"우리가... 우리가 너무 심했던 것 같아요."',
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
				text: "눈물을 흘리며 고백하기 시작했어.",
				chunks: [
					{
						content: "눈물을 흘리며 고백하기 시작했어.",
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
		id: "seg-48",
		lines: [
			{
				text: '"매일 작은 실수도 크게 만들어서 야단쳤어요."',
				chunks: [
					{
						content: '"매일 작은 실수도 크게 만들어서 야단쳤어요."',
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: '"점심시간에도 혼자 앉게 했고요."',
				chunks: [
					{
						content: '"점심시간에도 혼자 앉게 했고요."',
					},
				],
				preLineEffects: {
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
				text: '"심지어는 업무용 메신저로도..."',
				chunks: [
					{
						content: '"심지어는 업무용 메신저로도..."',
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "\"'또 실수했네, 정신차려'라고 보냈어요.\"",
				chunks: [
					{
						content: "\"'또 실수했네, 정신차려'라고 보냈어요.\"",
						textEffects: ["GLITCH"],
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
			soundEffects: [
				{
					tag: "DRONE_UNSTABLE_PULSE",
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
		id: "seg-50",
		lines: [
			{
				text: "수현이 듣고 있는데...",
				chunks: [
					{
						content: "수현이 듣고 있는데...",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "갑자기 집안 온도가 급격히 떨어졌어.",
				chunks: [
					{
						content: "갑자기 집안 온도가 급격히 떨어졌어.",
					},
				],
				preLineEffects: {
					image: {
						url: "goedamjip-story-image/68b8d13fb9aa221da802b000/seg-50",
						type: "overlay",
						sustain_until: "seg-53",
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
			soundEffects: [
				{
					tag: "DRONE_UNSTABLE_AIR",
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
		id: "seg-51",
		lines: [
			{
				text: "입에서 하얀 입김이 나오기 시작했거든.",
				chunks: [
					{
						content: "입에서 하얀 입김이 나오기 시작했거든.",
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
			{
				text: "형광등도 깜빡이기 시작했지.",
				chunks: [
					{
						content: "형광등도 깜빡이기 시작했지.",
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
		id: "seg-52",
		lines: [
			{
				text: '정사원이 계속 "미안해... 정말 미안해..."라고 중얼거렸어.',
				chunks: [
					{
						content: '정사원이 계속 "미안해... 정말 미안해..."라고 중얼거렸어.',
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
					tag: "OVERLAY_FOG",
					status: "stop",
				},
			],
		},
	},
	{
		id: "seg-53",
		lines: [
			{
				text: "그때 거실 창문이 열렸어.",
				chunks: [
					{
						content: "그때 거실 창문이 열렸어.",
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
			{
				text: "바람도 없는데 말이야.",
				chunks: [
					{
						content: "바람도 없는데 말이야.",
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
					tag: "WIND_DRAFT_WHISTLE",
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
				text: "창문 너머로 한 여성이 서 있었어.",
				chunks: [
					{
						content: "창문 너머로 한 여성이 서 있었어.",
					},
				],
				preLineEffects: {
					image: {
						url: "goedamjip-story-image/68b8d13fb9aa221da802b000/seg-54",
						type: "overlay",
						sustain_until: "seg-56",
					},
					soundEffects: [
						{
							tag: "FEMALE_HUMMING_EERIE",
						},
						{
							tag: "GLASS_SQUEAK",
						},
					],
					visualEffects: [],
				},
			},
			{
				text: "긴 머리가 얼굴을 가리고 있었지.",
				chunks: [
					{
						content: "긴 머리가 얼굴을 가리고 있었지.",
					},
				],
				preLineEffects: {
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
				text: "박미영이었어.",
				chunks: [
					{
						content: "박미영이었어.",
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
				text: "입꼬리가 살짝 올라가 있었거든.",
				chunks: [
					{
						content: "입꼬리가 살짝 올라가 있었거든.",
					},
				],
				preLineEffects: {
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
		id: "seg-56",
		lines: [
			{
				text: "정사원이 기절했어.",
				chunks: [
					{
						content: "정사원이 기절했어.",
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
				text: "바닥에 쓰러지면서 경련을 일으켰지.",
				chunks: [
					{
						content: "바닥에 쓰러지면서 경련을 일으켰지.",
						soundEffects: [
							{
								tag: "MALE_PAIN_CRY",
							},
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
					tag: "ROOMTONE_HOUSE_CREAK",
					status: "stop",
				},
				{
					tag: "DRONE_UNSTABLE_AIR",
					status: "stop",
				},
				{
					tag: "ROOMTONE_FLUORESCENT_BUZZ",
					status: "stop",
				},
				{
					tag: "WIND_DRAFT_WHISTLE",
					status: "stop",
				},
			],
			visualEffects: [
				{
					tag: "SCREEN_BLUR",
					status: "start",
				},
				{
					tag: "SCREEN_BLUR",
					status: "stop",
				},
			],
		},
	},
	{
		id: "seg-57",
		lines: [
			{
				text: "수현은 급히 장례식장으로 돌아갔어.",
				chunks: [
					{
						content: "수현은 급히 장례식장으로 돌아갔어.",
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
				text: "이제 뭔가 해야 한다고 생각했거든.",
				chunks: [
					{
						content: "이제 뭔가 해야 한다고 생각했거든.",
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
			url: "goedamjip-story-image/68b8d13fb9aa221da802b000/seg-57",
			type: "background",
			sustain_until: "seg-68",
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
				{
					tag: "DRONE_HESITATION_SUSPENSE",
					status: "stop",
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
		id: "seg-58",
		lines: [
			{
				text: "지하 제단으로 내려갔어.",
				chunks: [
					{
						content: "지하 제단으로 내려갔어.",
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
				text: "할아버지가 가르쳐준 봉인 의식을 기억해냈어.",
				chunks: [
					{
						content: "할아버지가 가르쳐준 봉인 의식을 기억해냈어.",
						soundEffects: [
							{
								tag: "TIBETAN_MONK_CHANT",
							},
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
					tag: "DRONE_STRINGS_DISCORDANT",
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
		id: "seg-59",
		lines: [
			{
				text: "촛불을 켜고 제단 앞에 무릎을 꿇었어.",
				chunks: [
					{
						content: "촛불을 켜고 제단 앞에 무릎을 꿇었어.",
						soundEffects: [
							{
								tag: "MATCH_STRIKE_AND_IGNITE",
							},
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
				text: "오래된 주문을 외우기 시작했지.",
				chunks: [
					{
						content: "오래된 주문을 외우기 시작했지.",
						textEffects: ["PULSE_SLOW"],
						soundEffects: [
							{
								tag: "OLD_WOMAN_CHANTING_CURSE",
							},
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
				text: '"원혼이여... 이제 그만 쉬어라..."',
				chunks: [
					{
						content: '"원혼이여... 이제 그만 쉬어라..."',
					},
				],
				preLineEffects: {
					image: {
						url: "goedamjip-story-image/68b8d13fb9aa221da802b000/seg-60",
						type: "overlay",
						sustain_until: "seg-60",
					},
					soundEffects: [
						{
							tag: "FEMALE_GHOST_PRESENCE",
						},
						{
							tag: "FEMALE_HUMMING_EERIE",
						},
					],
					visualEffects: [],
				},
			},
			{
				text: "목소리가 지하에 울렸어.",
				chunks: [
					{
						content: "목소리가 지하에 울렸어.",
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
		id: "seg-61",
		lines: [
			{
				text: "바람이 불기 시작했어.",
				chunks: [
					{
						content: "바람이 불기 시작했어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [
						{
							tag: "WIND_DRAFT_WHISTLE",
						},
					],
					visualEffects: [],
				},
			},
			{
				text: "촛불이 일렁였지.",
				chunks: [
					{
						content: "촛불이 일렁였지.",
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
			soundEffects: [
				{
					tag: "DRONE_STRINGS_DISCORDANT",
					status: "stop",
				},
			],
			visualEffects: [],
		},
	},
	{
		id: "seg-62",
		lines: [
			{
				text: "원혼의 기운이 약해지는 것 같았어.",
				chunks: [
					{
						content: "원혼의 기운이 약해지는 것 같았어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: '"다행이야..." 수현이 중얼거렸어.',
				chunks: [
					{
						content: '"다행이야..." 수현이 중얼거렸어.',
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
			soundEffects: [
				{
					tag: "DRONE_HESITATION_SUSPENSE",
					status: "start",
				},
				{
					tag: "DRONE_HESITATION_SUSPENSE",
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
				text: "그 순간이었어.",
				chunks: [
					{
						content: "그 순간이었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "보이지 않는 손이 수현의 목을 강하게 조르기 시작했어.",
				chunks: [
					{
						content: "보이지 않는 손이 수현의 목을 강하게 조르기 시작했어.",
						soundEffects: [
							{
								tag: "FEMALE_SCREAM_TERROR",
							},
						],
					},
				],
				preLineEffects: {
					image: {
						url: "goedamjip-story-image/68b8d13fb9aa221da802b000/seg-63",
						type: "jumpscare",
						sustain_until: "seg-63",
					},
					soundEffects: [
						{
							tag: "DEMON_LABORED_WHEEZE",
						},
						{
							tag: "MALE_GHOST_PRESENCE",
						},
					],
					visualEffects: ["SCREEN_SHAKE"],
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
			],
			visualEffects: [],
		},
	},
	{
		id: "seg-64",
		lines: [
			{
				text: '"으윽... 으윽..."',
				chunks: [
					{
						content: '"으윽... 으윽..."',
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
				text: "숨이 막혔어.",
				chunks: [
					{
						content: "숨이 막혔어.",
					},
				],
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
		id: "seg-65",
		lines: [
			{
				text: "수현이 목을 부여잡으며 필사적으로 주문을 완성했어.",
				chunks: [
					{
						content: "수현이 목을 부여잡으며",
					},
					{
						content: "필사적으로 주문을 완성했어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: '"영혼이여... 평안하라..."',
				chunks: [
					{
						content: '"영혼이여... 평안하라..."',
						textEffects: ["TYPEWRITER"],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [
						{
							tag: "OLD_WOMAN_CHANTING_CURSE",
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
			visualEffects: [],
		},
	},
	{
		id: "seg-66",
		lines: [
			{
				text: "잠깐 조용해졌어.",
				chunks: [
					{
						content: "잠깐 조용해졌어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "목의 압박감도 사라졌지.",
				chunks: [
					{
						content: "목의 압박감도 사라졌지.",
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
		id: "seg-67",
		lines: [
			{
				text: "하지만 완전히 끝난 건 아니었어.",
				chunks: [
					{
						content: "하지만 완전히 끝난 건 아니었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "제단 깊숙한 곳에서 여전히 차가운 기운이 올라왔거든.",
				chunks: [
					{
						content: "제단 깊숙한 곳에서 여전히 차가운 기운이 올라왔거든.",
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
			soundEffects: [],
			visualEffects: [],
		},
	},
	{
		id: "seg-68",
		lines: [
			{
				text: "수현의 손목에는 그날의 상처가 남았어.",
				chunks: [
					{
						content: "수현의 손목에는 그날의 상처가 남았어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "검붉은 자국이 지워지지 않았거든.",
				chunks: [
					{
						content: "검붉은 자국이 지워지지 않았거든.",
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
					tag: "ROOMTONE_BASEMENT_HUM",
					status: "stop",
				},
				{
					tag: "DRONE_LOOMING_PRESENCE",
					status: "stop",
				},
				{
					tag: "EFFECT_FLASHLIGHT",
					status: "stop",
				},
				{
					tag: "VISUAL_CANDLE_FLICKER",
					status: "stop",
				},
			],
			visualEffects: [],
		},
	},
	{
		id: "seg-69",
		lines: [
			{
				text: "며칠 후 신문에 작은 기사가 났어.",
				chunks: [
					{
						content: "며칠 후 신문에 작은 기사가 났어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: '"IT회사 직원 3명, 연이은 사고로 입원"',
				chunks: [
					{
						content: '"IT회사 직원 3명, 연이은 사고로 입원"',
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
			url: "goedamjip-story-image/68b8d13fb9aa221da802b000/seg-69",
			type: "background",
			sustain_until: "seg-76",
		},
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
		id: "seg-70",
		lines: [
			{
				text: "하지만 이상한 건 말이야...",
				chunks: [
					{
						content: "하지만 이상한 건 말이야...",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "그 장례식장이 아직도 운영되고 있다는 거야.",
				chunks: [
					{
						content: "그 장례식장이 아직도 운영되고 있다는 거야.",
						soundEffects: [
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
		id: "seg-71",
		lines: [
			{
				text: "수현은 지금도 그곳에서 일하고 있어.",
				chunks: [
					{
						content: "수현은 지금도 그곳에서 일하고 있어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [
						{
							tag: "KEYBOARD_TYPING",
						},
					],
					visualEffects: [],
				},
			},
			{
				text: "다만 지하 제단에는 더 이상 내려가지 않는다더라.",
				chunks: [
					{
						content: "다만 ",
					},
					{
						content: "지하 제단에는 더 이상 내려가지 않는다더라.",
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
		id: "seg-72",
		lines: [
			{
				text: "가끔 밤이 되면...",
				chunks: [
					{
						content: "가끔 밤이 되면...",
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
				text: "냉동고에서 여전히 이상한 소리가 들린다고 해.",
				chunks: [
					{
						content: "냉동고에서 여전히 이상한 소리가 들린다고 해.",
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
			soundEffects: [],
			visualEffects: [],
		},
	},
	{
		id: "seg-73",
		lines: [
			{
				text: "똑... 똑... 똑...",
				chunks: [
					{
						content: "똑... 똑... 똑...",
						soundEffects: [
							{
								tag: "WINDOW_TAP",
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
				text: "무언가 떨어지는 소리 말이야.",
				chunks: [
					{
						content: "무언가 떨어지는 소리 말이야.",
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
				text: "근데 정말 무서운 건...",
				chunks: [
					{
						content: "근데 정말 무서운 건...",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "박미영의 마지막 소원이 뭐였는지 아무도 모른다는 거야.",
				chunks: [
					{
						content: "박미영의 마지막 소원이 뭐였는지 아무도 모른다는 거야.",
						textEffects: ["PULSE_SLOW"],
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
				text: "복수였을까?",
				chunks: [
					{
						content: "복수였을까?",
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
				text: "아니면 그냥... 이해받고 싶었던 걸까?",
				chunks: [
					{
						content: "아니면 그냥... 이해받고 싶었던 걸까?",
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
				text: "아무튼 조심해.",
				chunks: [
					{
						content: "아무튼 조심해.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "억울하게 죽은 사람의 원한은...",
				chunks: [
					{
						content: "억울하게 죽은 사람의 원한은...",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "쉽게 사라지지 않거든.",
				chunks: [
					{
						content: "쉽게 사라지지 않거든.",
						textEffects: ["SHAKE"],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [
						{
							tag: "MALE_CURSE_ECHO",
						},
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
];
