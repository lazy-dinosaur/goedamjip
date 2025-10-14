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
				text: "실제로 대전 대덕연구단지에서 있었던 일이야.",
				chunks: [
					{
						content: "실제로 대전 대덕연구단지에서 있었던 일이야.",
					},
				],
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
		id: "seg-2",
		lines: [
			{
				text: "2023년 11월이었어.",
				chunks: [
					{
						content: "2023년 11월이었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "한 탐사보도 기자가 연구소 사고를 취재하다가 실종됐거든.",
				chunks: [
					{
						content: "한 탐사보도 기자가 연구소 사고를 취재하다가 실종됐거든.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
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
				text: "그 기자의 이름은 서연.",
				chunks: [
					{
						content: "그 기자의 이름은 서연.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "32살, 일간지 탐사보도부 소속이었어.",
				chunks: [
					{
						content: "32살, 일간지 탐사보도부 소속이었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "완벽주의자였대.",
				chunks: [
					{
						content: "완벽주의자였대.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "모든 걸 메모하고, 녹음하고, 두 번 세 번 확인하는 스타일.",
				chunks: [
					{
						content: "모든 걸 메모하고, 녹음하고, 두 번 세 번 확인하는 스타일.",
					},
				],
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
			visualEffects: [],
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
				text: "그녀가 남긴 마지막 취재 노트야.",
				chunks: [
					{
						content: "그녀가 남긴 마지막 취재 노트야.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "같은 문장이 페이지마다 조금씩 다르게 적혀 있었어.",
				chunks: [
					{
						content: "같은 문장이 페이지마다 조금씩 다르게 적혀 있었어.",
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
				text: "마치 누가 고쳐 쓴 것처럼.",
				chunks: [
					{
						content: "마치 누가 고쳐 쓴 것처럼.",
					},
				],
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
					tag: "DRONE_SCANNER_SIGNAL",
					status: "stop",
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
		id: "seg-5",
		lines: [
			{
				text: "서연은 그날 아침, 자택에서 전날 밤 작성한 노트를 펼쳤어.",
				chunks: [
					{
						content: "서연은 그날 아침, 자택에서 전날 밤 작성한 노트를 펼쳤어.",
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
			{
				text: '"뉴로바이오메드 연구소, 지하 3층, 김박사 증언 - 사고 당일 아무도 없었다."',
				chunks: [
					{
						content:
							'"뉴로바이오메드 연구소, 지하 3층, 김박사 증언 - 사고 당일 아무도 없었다."',
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
			url: "goedamjip-story-image/68ee177f8feaf81c06289000/seg-5",
			type: "background",
			sustain_until: "seg-19",
		},
		segmentEffects: {
			soundEffects: [
				{
					tag: "ROOMTONE_EMPTY_NEUTRAL",
					status: "start",
				},
				{
					tag: "CITY_AMBIENCE_DAY",
					status: "start",
				},
			],
			visualEffects: [],
		},
	},
	{
		id: "seg-6",
		lines: [
			{
				text: "분명히 이렇게 적었는데.",
				chunks: [
					{
						content: "분명히 이렇게 적었는데.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "손으로 문장을 짚어가며 읽는 순간.",
				chunks: [
					{
						content: "손으로 문장을 짚어가며 읽는 순간.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: '"뉴로바이오메드 연구소, 지하 3층, 김박사 증언 - 서연이 혼자 들어왔다."',
				chunks: [
					{
						content:
							'"뉴로바이오메드 연구소, 지하 3층, 김박사 증언 - 서연이 혼자 들어왔다."',
						textEffects: ["TEXT_SCRAMBLE_GLITCH"],
					},
				],
				preLineEffects: {
					image: {
						url: "goedamjip-story-image/68ee177f8feaf81c06289000/seg-6",
						type: "overlay",
						sustain_until: "seg-8",
					},
					soundEffects: [
						{
							tag: "STATIC_BURST_LOUD",
						},
					],
					visualEffects: [],
				},
			},
			{
				text: "글자가 바뀌어 있었어.",
				chunks: [
					{
						content: "글자가 바뀌어 있었어.",
					},
				],
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
				text: "서연은 눈을 비볐어.",
				chunks: [
					{
						content: "서연은 눈을 비볐어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "피곤해서 잘못 본 거라고 생각했어.",
				chunks: [
					{
						content: "피곤해서 잘못 본 거라고 생각했어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "확인을 위해 녹음기를 꺼냈어.",
				chunks: [
					{
						content: "확인을 위해 녹음기를 꺼냈어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "어제 인터뷰 파일을 재생했어.",
				chunks: [
					{
						content: "어제 인터뷰 파일을 재생했어.",
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
		background: null,
		segmentEffects: {
			soundEffects: [],
			visualEffects: [],
		},
	},
	{
		id: "seg-8",
		lines: [
			{
				text: '"김박사님, 사고 당일 연구소에 누가 있었습니까?"',
				chunks: [
					{
						content: '"김박사님, 사고 당일 연구소에 누가 있었습니까?"',
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "서연의 목소리가 또렷하게 들렸어.",
				chunks: [
					{
						content: "서연의 목소리가 또렷하게 들렸어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: '"아무도 없었습니다."',
				chunks: [
					{
						content: '"아무도 없었습니다."',
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "김박사의 대답.",
				chunks: [
					{
						content: "김박사의 대답.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
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
				text: "서연은 안도했어.",
				chunks: [
					{
						content: "서연은 안도했어.",
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
				text: "역시 노트를 잘못 본 거라고.",
				chunks: [
					{
						content: "역시 노트를 잘못 본 거라고.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "그런데.",
				chunks: [
					{
						content: "그런데.",
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
		id: "seg-10",
		lines: [
			{
				text: "녹음이 계속 이어졌어.",
				chunks: [
					{
						content: "녹음이 계속 이어졌어.",
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
					tag: "ROOMTONE_EMPTY_NEUTRAL",
					status: "stop",
				},
				{
					tag: "CITY_AMBIENCE_DAY",
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
				text: '"그럼 제가 왜 거기 있었던 건가요?"',
				chunks: [
					{
						content: '"그럼 제가 왜 거기 있었던 건가요?"',
						textEffects: ["GLITCH"],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [
						{
							tag: "DRUM_HIT_DEEP",
						},
					],
					visualEffects: ["OVERLAY_GLITCH"],
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
		id: "seg-12",
		lines: [
			{
				text: "서연의 목소리였어.",
				chunks: [
					{
						content: "서연의 목소리였어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "자신의 목소리.",
				chunks: [
					{
						content: "자신의 목소리.",
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
				text: "하지만 그런 질문을 한 기억이 없었어.",
				chunks: [
					{
						content: "하지만 그런 질문을 한 기억이 없었어.",
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
		id: "seg-13",
		lines: [
			{
				text: "손에서 녹음기가 미끄러졌어.",
				chunks: [
					{
						content: "손에서 녹음기가 미끄러졌어.",
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
				text: "바닥에 떨어진 녹음기에서 목소리가 계속 흘러나왔어.",
				chunks: [
					{
						content: "바닥에 떨어진 녹음기에서 목소리가 계속 흘러나왔어.",
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
				text: '"서연씨, 당신은 기자가 아니었어요."',
				chunks: [
					{
						content: '"서연씨, 당신은 기자가 아니었어요."',
						textEffects: ["TEXT_SCRAMBLE_GLITCH"],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: ["OVERLAY_GLITCH"],
				},
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
				text: "서연은 뒤로 물러났어.",
				chunks: [
					{
						content: "서연은 뒤로 물러났어.",
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
				text: "등이 벽에 닿을 때까지.",
				chunks: [
					{
						content: "등이 벽에 닿을 때까지.",
					},
				],
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
					tag: "SCREEN_BLUR",
					status: "stop",
				},
			],
		},
	},
	{
		id: "seg-15",
		lines: [
			{
				text: "한 시간 후.",
				chunks: [
					{
						content: "한 시간 후.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "서연은 택시를 타고 연구단지로 향했어.",
				chunks: [
					{
						content: "서연은 택시를 타고 연구단지로 향했어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "직접 확인해야 했어.",
				chunks: [
					{
						content: "직접 확인해야 했어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "뭔가 잘못됐어.",
				chunks: [
					{
						content: "뭔가 잘못됐어.",
					},
				],
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
					tag: "CITY_AMBIENCE_DAY",
					status: "start",
				},
			],
			visualEffects: [],
		},
	},
	{
		id: "seg-16",
		lines: [
			{
				text: "택시기사가 백미러로 그녀를 봤어.",
				chunks: [
					{
						content: "택시기사가 백미러로 그녀를 봤어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: '"또 가시는군요."',
				chunks: [
					{
						content: '"또 가시는군요."',
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
				text: '"네? 전 오늘 처음인데요."',
				chunks: [
					{
						content: '"네? 전 오늘 처음인데요."',
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
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
				text: '"아니, 어제도, 그제도 같은 곳 가셨잖아요. 손님."',
				chunks: [
					{
						content: '"아니, 어제도, 그제도 같은 곳 가셨잖아요. 손님."',
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "기사의 눈빛이 이상했어.",
				chunks: [
					{
						content: "기사의 눈빛이 이상했어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "동정 섞인, 불안한 눈빛.",
				chunks: [
					{
						content: "동정 섞인, 불안한 눈빛.",
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
		id: "seg-18",
		lines: [
			{
				text: "서연의 손이 떨렸어.",
				chunks: [
					{
						content: "서연의 손이 떨렸어.",
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
				text: "가방 속 노트를 꺼내 날짜를 확인했어.",
				chunks: [
					{
						content: "가방 속 노트를 꺼내 날짜를 확인했어.",
						soundEffects: [
							{
								tag: "ZIPPER_SOUND",
							},
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
				text: "11월 15일 수요일. 오늘.",
				chunks: [
					{
						content: "11월 15일 수요일. 오늘.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "그 위 페이지. 11월 15일 수요일.",
				chunks: [
					{
						content: "그 위 페이지. 11월 15일 수요일.",
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
			{
				text: "또 그 위. 11월 15일 수요일.",
				chunks: [
					{
						content: "또 그 위. 11월 15일 수요일.",
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
			{
				text: "일주일치 노트가 전부 같은 날짜였어.",
				chunks: [
					{
						content: "일주일치 노트가 전부 같은 날짜였어.",
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
					tag: "CITY_AMBIENCE_DAY",
					status: "stop",
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
		id: "seg-19",
		lines: [
			{
				text: "연구소 앞에 도착했어.",
				chunks: [
					{
						content: "연구소 앞에 도착했어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "폐쇄된 건물이라더니, 출입문이 열려 있었어.",
				chunks: [
					{
						content: "폐쇄된 건물이라더니, 출입문이 열려 있었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "아니. 열려 있었던 걸까. 아니면 지금 열린 걸까.",
				chunks: [
					{
						content: "아니. 열려 있었던 걸까. 아니면 지금 열린 걸까.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "기억이 흐릿했어.",
				chunks: [
					{
						content: "기억이 흐릿했어.",
					},
				],
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
					tag: "DRONE_SURROUNDED_THREAT",
					status: "start",
				},
			],
			visualEffects: [],
		},
	},
	{
		id: "seg-20",
		lines: [
			{
				text: "복도에 들어섰어.",
				chunks: [
					{
						content: "복도에 들어섰어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "형광등 불빛이 차갑게 내리쬐었어.",
				chunks: [
					{
						content: "형광등 불빛이 차갑게 내리쬐었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "벽면의 안내판.",
				chunks: [
					{
						content: "벽면의 안내판.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: '"지하 1층 - 일반 실험실\n지하 2층 - 특수 실험실\n지하 3층 - 인지과학 연구동"',
				chunks: [
					{
						content:
							'"지하 1층 - 일반 실험실\n지하 2층 - 특수 실험실\n지하 3층 - 인지과학 연구동"',
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
		background: {
			url: "goedamjip-story-image/68ee177f8feaf81c06289000/seg-20",
			type: "background",
			sustain_until: "seg-20",
		},
		segmentEffects: {
			soundEffects: [
				{
					tag: "ROOMTONE_FLUORESCENT_BUZZ",
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
		id: "seg-21",
		lines: [
			{
				text: "서연은 계단을 내려갔어.",
				chunks: [
					{
						content: "서연은 계단을 내려갔어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "지하 3층으로.",
				chunks: [
					{
						content: "지하 3층으로.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "발소리가 이상하게 울렸어.",
				chunks: [
					{
						content: "발소리가 이상하게 울렸어.",
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
				text: "한 번 내딛는데 두 번 울리는 것 같았어.",
				chunks: [
					{
						content: "한 번 내딛는데 두 번 울리는 것 같았어.",
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
			url: "goedamjip-story-image/68ee177f8feaf81c06289000/seg-21",
			type: "background",
			sustain_until: "seg-22",
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
					tag: "EFFECT_FLASHLIGHT",
					status: "start",
				},
			],
		},
	},
	{
		id: "seg-22",
		lines: [
			{
				text: "아니. 실제로 두 사람분의 발소리가 들렸어.",
				chunks: [
					{
						content: "아니. ",
					},
					{
						content: "실제로 두 사람분의 발소리가 들렸어.",
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
				text: "서연은 멈춰 섰어.",
				chunks: [
					{
						content: "서연은 멈춰 섰어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "발소리도 멈췄어.",
				chunks: [
					{
						content: "발소리도 멈췄어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "다시 걸었어.",
				chunks: [
					{
						content: "다시 걸었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "발소리도 다시 시작됐어.",
				chunks: [
					{
						content: "발소리도 다시 시작됐어.",
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
				{
					tag: "ROOMTONE_BASEMENT_HUM",
					status: "stop",
				},
			],
			visualEffects: [],
		},
	},
	{
		id: "seg-23",
		lines: [
			{
				text: "지하 3층 문을 열었어.",
				chunks: [
					{
						content: "지하 3층 문을 열었어.",
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
			{
				text: "실험실이 보였어. 어두웠어.",
				chunks: [
					{
						content: "실험실이 보였어. ",
					},
					{
						content: "어두웠어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "손전등을 켰어.",
				chunks: [
					{
						content: "손전등을 켰어.",
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
				text: "유리창 너머로 실험 기구들이 보였어.",
				chunks: [
					{
						content: "유리창 너머로 실험 기구들이 보였어.",
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
			url: "goedamjip-story-image/68ee177f8feaf81c06289000/seg-23",
			type: "background",
			sustain_until: "seg-34",
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
		id: "seg-24",
		lines: [
			{
				text: "빈 실험실. 아무도 없어.",
				chunks: [
					{
						content: "빈 실험실. 아무도 없어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "서연은 안도의 한숨을 쉬었어.",
				chunks: [
					{
						content: "서연은 안도의 한숨을 쉬었어.",
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
				text: "그때.",
				chunks: [
					{
						content: "그때.",
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
		id: "seg-25",
		lines: [
			{
				text: "유리창에 손자국이 보였어.",
				chunks: [
					{
						content: "유리창에 손자국이 보였어.",
					},
				],
				preLineEffects: {
					image: {
						url: "goedamjip-story-image/68ee177f8feaf81c06289000/seg-25",
						type: "overlay",
						sustain_until: "seg-28",
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
			soundEffects: [],
			visualEffects: [],
		},
	},
	{
		id: "seg-26",
		lines: [
			{
				text: "안쪽에서 찍힌 손자국.",
				chunks: [
					{
						content: "안쪽에서 찍힌 손자국.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "손가락이 비정상적으로 길게 늘어난 형태였어.",
				chunks: [
					{
						content: "손가락이 비정상적으로 길게 늘어난 형태였어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "그리고 들렸어.",
				chunks: [
					{
						content: "그리고 들렸어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
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
				text: '"여기 있으면 안 돼요."',
				chunks: [
					{
						content: '"여기 있으면 안 돼요."',
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
		id: "seg-28",
		lines: [
			{
				text: "서연의 목소리였어.",
				chunks: [
					{
						content: "서연의 목소리였어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "자신의 목소리.",
				chunks: [
					{
						content: "자신의 목소리.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "뒤에서 들렸어.",
				chunks: [
					{
						content: "뒤에서 들렸어.",
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
		id: "seg-29",
		lines: [
			{
				text: "서연은 뒤를 돌아봤어.",
				chunks: [
					{
						content: "서연은 뒤를 돌아봤어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "비틀거리며.",
				chunks: [
					{
						content: "비틀거리며.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "아무도 없었어.",
				chunks: [
					{
						content: "아무도 없었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
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
				text: "하지만 공기 중에 냄새가 났어.",
				chunks: [
					{
						content: "하지만 공기 중에 냄새가 났어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "달콤하면서도 메탈릭한. 화학 약품 냄새.",
				chunks: [
					{
						content: "달콤하면서도 메탈릭한.",
					},
					{
						content: "화학 약품 냄새.",
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
				text: "기억이 끊겼어.",
				chunks: [
					{
						content: "기억이 끊겼어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "다음 순간. 서연은 실험실 안쪽에 있었어.",
				chunks: [
					{
						content: "다음 순간.",
						textEffects: ["GLITCH"],
					},
					{
						content: "서연은 실험실 안쪽에 있었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [
						{
							tag: "AUDIO_CUTOUT_ABRUPT",
						},
						{
							tag: "AUDIO_RESUME_WITH_NOISE",
						},
					],
					visualEffects: ["OVERLAY_GLITCH"],
				},
			},
			{
				text: "어떻게 들어온 건지 기억이 없었어.",
				chunks: [
					{
						content: "어떻게 들어온 건지 기억이 없었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "문을 연 기억도, 걸어 들어온 기억도.",
				chunks: [
					{
						content: "문을 연 기억도, 걸어 들어온 기억도.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
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
				text: "실험대 위에 깨진 유리 용기가 있었어.",
				chunks: [
					{
						content: "실험대 위에 깨진 유리 용기가 있었어.",
					},
				],
				preLineEffects: {
					image: {
						url: "goedamjip-story-image/68ee177f8feaf81c06289000/seg-32",
						type: "overlay",
						sustain_until: "seg-34",
					},
					soundEffects: [
						{
							tag: "GLASS_SQUEAK",
						},
					],
					visualEffects: [],
				},
			},
			{
				text: "라벨이 붙어 있었어.",
				chunks: [
					{
						content: "라벨이 붙어 있었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: '"MK-47 / 취급주의 / 기화성"',
				chunks: [
					{
						content: '"MK-47 / 취급주의 / 기화성"',
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
		id: "seg-33",
		lines: [
			{
				text: "서연은 그 용기를 봤어.",
				chunks: [
					{
						content: "서연은 그 용기를 봤어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "본 적이 있는 것 같았어.",
				chunks: [
					{
						content: "본 적이 있는 것 같았어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "아니. 깬 적이 있는 것 같았어.",
				chunks: [
					{
						content: "아니. 깬 적이 있는 것 같았어.",
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
				text: "자신이. 자신의 손으로.",
				chunks: [
					{
						content: "자신이.",
					},
					{
						content: "자신의 손으로.",
						textEffects: ["STYLE_FONT_HANDWRITTEN_UNSTABLE", "JITTER"],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
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
				text: "손이 저절로 움직였어.",
				chunks: [
					{
						content: "손이 저절로 움직였어.",
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
			{
				text: "용기를 집어 들려는.",
				chunks: [
					{
						content: "용기를 집어 들려는.",
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
			{
				text: "서연은 황급히 손을 뒤로 뺐어.",
				chunks: [
					{
						content: "서연은 황급히 손을 뒤로 뺐어.",
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
			{
				text: "뛰쳐나왔어. 복도로.",
				chunks: [
					{
						content: "뛰쳐나왔어. 복도로.",
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
		id: "seg-35",
		lines: [
			{
				text: "숨을 헐떡이며 복도를 달렸어.",
				chunks: [
					{
						content: "숨을 헐떡이며 복도를 달렸어.",
						soundEffects: [
							{
								tag: "BREATH_HEAVY_PANIC",
							},
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
				text: "계단을 찾아야 했어. 여기서 나가야 했어.",
				chunks: [
					{
						content: "계단을 찾아야 했어.",
					},
					{
						content: "여기서 나가야 했어.",
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
				text: "복도 끝까지 달렸어. 모퉁이를 돌았어.",
				chunks: [
					{
						content: "복도 끝까지 달렸어. 모퉁이를 돌았어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "똑같은 복도가 나왔어.",
				chunks: [
					{
						content: "똑같은 복도가 나왔어.",
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
		background: {
			url: "goedamjip-story-image/68ee177f8feaf81c06289000/seg-35",
			type: "background",
			sustain_until: "seg-37",
		},
		segmentEffects: {
			soundEffects: [
				{
					tag: "MUSIC_INEVITABLE_CRISIS",
					status: "start",
				},
			],
			visualEffects: [],
		},
	},
	{
		id: "seg-36",
		lines: [
			{
				text: "다시 달렸어. 또 모퉁이를 돌았어.",
				chunks: [
					{
						content: "다시 달렸어. ",
						soundEffects: [
							{
								tag: "FOOTSTEPS_TUNNEL",
							},
						],
					},
					{
						content: "또 모퉁이를 돌았어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "똑같은 복도. 똑같은 형광등. 똑같은 실험실 문들.",
				chunks: [
					{
						content: "똑같은 복도. 똑같은 형광등. 똑같은 실험실 문들.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "10분을 달렸어. 20분을 달렸어.",
				chunks: [
					{
						content: "10분을 달렸어. ",
					},
					{
						content: "20분을 달렸어.",
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
				text: "같은 복도가 반복됐어.",
				chunks: [
					{
						content: "같은 복도가 반복됐어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
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
				text: "서연은 멈춰 섰어.",
				chunks: [
					{
						content: "서연은 멈춰 섰어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "벽에 손을 짚고 숨을 고르며.",
				chunks: [
					{
						content: "벽에 손을 짚고 숨을 고르며.",
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
				text: "그때 엘리베이터가 보였어.",
				chunks: [
					{
						content: "그때 엘리베이터가 보였어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "아까는 없었어. 분명히 없었어.",
				chunks: [
					{
						content: "아까는 없었어. ",
					},
					{
						content: "분명히 없었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "하지만 지금은 있었어.",
				chunks: [
					{
						content: "하지만 지금은 있었어.",
					},
				],
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
					tag: "MUSIC_INEVITABLE_CRISIS",
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
		id: "seg-38",
		lines: [
			{
				text: "탈출구.",
				chunks: [
					{
						content: "탈출구.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "서연은 비틀거리며 엘리베이터로 걸어갔어.",
				chunks: [
					{
						content: "서연은 비틀거리며 엘리베이터로 걸어갔어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "버튼을 눌렀어. 문이 열렸어.",
				chunks: [
					{
						content: "버튼을 눌렀어. ",
					},
					{
						content: "문이 열렸어.",
						soundEffects: [
							{
								tag: "ELEVATOR_ARRIVE_AND_OPEN",
							},
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
				text: "안으로 들어갔어. 1층 버튼을 눌렀어.",
				chunks: [
					{
						content: "안으로 들어갔어. ",
					},
					{
						content: "1층 버튼을 눌렀어.",
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
			url: "goedamjip-story-image/68ee177f8feaf81c06289000/seg-38",
			type: "background",
			sustain_until: "seg-40",
		},
		segmentEffects: {
			soundEffects: [
				{
					tag: "DRONE_CRUSHING_PRESSURE",
					status: "start",
				},
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
		id: "seg-39",
		lines: [
			{
				text: "문이 닫히기 시작했어.",
				chunks: [
					{
						content: "문이 닫히기 시작했어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "엘리베이터 벽면의 거울이 보였어.",
				chunks: [
					{
						content: "엘리베이터 벽면의 거울이 보였어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
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
				text: "서연의 얼굴이었어.",
				chunks: [
					{
						content: "서연의 얼굴이었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
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
		id: "seg-41",
		lines: [
			{
				text: "서연의 얼굴이 아니었어.",
				chunks: [
					{
						content: "서연의 얼굴이 아니었어.",
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
			{
				text: "눈동자가 비정상적으로 확장돼 있었어.",
				chunks: [
					{
						content: "눈동자가 비정상적으로 확장돼 있었어.",
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
				text: "검은자위가 흰자를 거의 다 덮을 정도로.",
				chunks: [
					{
						content: "검은자위가 흰자를 거의 다 덮을 정도로.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "입꼬리가 귀까지 찢어진 것처럼 올라가 있었어.",
				chunks: [
					{
						content: "입꼬리가 귀까지 찢어진 것처럼 올라가 있었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "웃고 있었어.",
				chunks: [
					{
						content: "웃고 있었어.",
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
			url: "goedamjip-story-image/68ee177f8feaf81c06289000/seg-41",
			type: "background",
			sustain_until: "seg-46",
		},
		segmentEffects: {
			soundEffects: [],
			visualEffects: [],
		},
	},
	{
		id: "seg-42",
		lines: [
			{
				text: "서연은 비명을 지르지 못했어.",
				chunks: [
					{
						content: "서연은 비명을 지르지 못했어.",
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
				text: "엘리베이터 벽에 등을 붙이고. 숨을 헐떡이며. 거울을 보지 않으려 애썼어.",
				chunks: [
					{
						content: "엘리베이터 벽에 등을 붙이고. ",
					},
					{
						content: "숨을 헐떡이며.",
						soundEffects: [
							{
								tag: "BREATH_SHAKY_PANIC",
							},
						],
					},
					{
						content: " 거울을 보지 않으려 애썼어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "하지만 시선이 저절로 움직였어. 거울 쪽으로.",
				chunks: [
					{
						content: "하지만 시선이 저절로 움직였어. ",
					},
					{
						content: "거울 쪽으로.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
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
				text: "거울 속 얼굴은 정상이었어.",
				chunks: [
					{
						content: "거울 속 얼굴은 정상이었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "평소의 서연이었어.",
				chunks: [
					{
						content: "평소의 서연이었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
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
				text: "엘리베이터가 멈췄어.",
				chunks: [
					{
						content: "엘리베이터가 멈췄어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "문이 열렸어. 지하 3층이었어.",
				chunks: [
					{
						content: "문이 열렸어.",
						soundEffects: [
							{
								tag: "ELEVATOR_ARRIVE_AND_OPEN",
							},
						],
					},
					{
						content: "지하 3층이었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "1층을 눌렀는데. 지하 3층.",
				chunks: [
					{
						content: "1층을 눌렀는데.",
						soundEffects: [
							{
								tag: "SWITCH_CLICK_FLAT",
							},
						],
					},
					{
						content: "지하 3층.",
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
		id: "seg-45",
		lines: [
			{
				text: "서연은 나가지 않았어.",
				chunks: [
					{
						content: "서연은 나가지 않았어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "다시 1층 버튼을 눌렀어.",
				chunks: [
					{
						content: "다시 1층 버튼을 눌렀어.",
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
				text: "문이 닫혔어. 엘리베이터가 움직였어.",
				chunks: [
					{
						content: "문이 닫혔어. 엘리베이터가 움직였어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "멈췄어. 문이 열렸어. 지하 3층.",
				chunks: [
					{
						content: "멈췄어.",
					},
					{
						content: "문이 열렸어.",
						soundEffects: [
							{
								tag: "ELEVATOR_ARRIVAL_CHIME",
							},
						],
					},
					{
						content: "지하 3층.",
					},
				],
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
		id: "seg-46",
		lines: [
			{
				text: "일곱 번을 시도했어.",
				chunks: [
					{
						content: "일곱 번을 시도했어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "일곱 번 모두 지하 3층으로 돌아왔어.",
				chunks: [
					{
						content: "일곱 번 모두 지하 3층으로 돌아왔어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "서연은 엘리베이터에서 내렸어.",
				chunks: [
					{
						content: "서연은 엘리베이터에서 내렸어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "선택의 여지가 없었어.",
				chunks: [
					{
						content: "선택의 여지가 없었어.",
					},
				],
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
		id: "seg-47",
		lines: [
			{
				text: "복도를 걸었어.",
				chunks: [
					{
						content: "복도를 걸었어.",
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
				text: "이번엔 뛰지 않았어. 차라리 받아들이기로 했어. 뭐가 됐든.",
				chunks: [
					{
						content: "이번엔 뛰지 않았어. 차라리 받아들이기로 했어. 뭐가 됐든.",
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
				text: "실험실 하나의 문이 열려 있었어. 안에 불이 켜져 있었어.",
				chunks: [
					{
						content: "실험실 하나의 문이 열려 있었어. 안에 불이 켜져 있었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "서연은 들어갔어.",
				chunks: [
					{
						content: "서연은 들어갔어.",
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
			url: "goedamjip-story-image/68ee177f8feaf81c06289000/seg-47",
			type: "background",
			sustain_until: "seg-47",
		},
		segmentEffects: {
			soundEffects: [],
			visualEffects: [],
		},
	},
	{
		id: "seg-48",
		lines: [
			{
				text: "김박사가 있었어.",
				chunks: [
					{
						content: "김박사가 있었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "실험복을 입고 서류를 보고 있었어.",
				chunks: [
					{
						content: "실험복을 입고 서류를 보고 있었어.",
						soundEffects: [
							{
								tag: "PAGE_TURN",
								repeat: 1,
							},
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
				text: '"김박사님." 서연이 불렀어.',
				chunks: [
					{
						content: '"김박사님." 서연이 불렀어.',
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "김박사가 고개를 들었어. 놀라지 않았어.",
				chunks: [
					{
						content: "김박사가 고개를 들었어. 놀라지 않았어.",
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
			url: "goedamjip-story-image/68ee177f8feaf81c06289000/seg-48",
			type: "background",
			sustain_until: "seg-58",
		},
		segmentEffects: {
			soundEffects: [],
			visualEffects: [],
		},
	},
	{
		id: "seg-49",
		lines: [
			{
				text: '"또 오셨군요, 서연씨."',
				chunks: [
					{
						content: '"또 오셨군요, 서연씨."',
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: '"언제 왔었죠?"',
				chunks: [
					{
						content: '"언제 왔었죠?"',
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: '"어제도, 그제도. 매일 오시잖아요."',
				chunks: [
					{
						content: '"어제도, 그제도. ',
						textEffects: ["FADE_IN"],
					},
					{
						content: '매일 오시잖아요."',
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
				text: '"무슨 소리예요. 전 오늘 처음..."',
				chunks: [
					{
						content: '"무슨 소리예요. 전 오늘 처음..."',
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: '"매번 같은 말 하시네요." 김박사가 웃었어.',
				chunks: [
					{
						content: '"매번 같은 말 하시네요." 김박사가 웃었어.',
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
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
				text: '"사고에 대해 물어보러 왔어요." 서연이 말했어.',
				chunks: [
					{
						content: '"사고에 대해 물어보러 왔어요." 서연이 말했어.',
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: '"무슨 사고요?"',
				chunks: [
					{
						content: '"무슨 사고요?"',
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: '"MK-47 유출 사고요."',
				chunks: [
					{
						content: '"MK-47 유출 사고요."',
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: '"그런 사고 없었는데요." 김박사의 표정이 진지했어.',
				chunks: [
					{
						content: '"그런 사고 없었는데요." 김박사의 표정이 진지했어.',
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
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
				text: "서연은 노트를 펼쳤어.",
				chunks: [
					{
						content: "서연은 노트를 펼쳤어.",
						soundEffects: [
							{
								tag: "PAGE_TURN",
								repeat: 1,
							},
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
				text: "자신이 적은 내용을 보여주려고.",
				chunks: [
					{
						content: "자신이 적은 내용을 보여주려고.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: '"여기 보세요. 11월 12일, 지하 3층 실험실에서..."',
				chunks: [
					{
						content: '"여기 보세요. 11월 12일, 지하 3층 실험실에서..."',
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "글자가 없었어.",
				chunks: [
					{
						content: "글자가 없었어.",
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
				text: "페이지가 하얗게 비어 있었어.",
				chunks: [
					{
						content: "페이지가 하얗게 비어 있었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
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
				text: "서연은 다음 페이지를 넘겼어.",
				chunks: [
					{
						content: "서연은 다음 페이지를 넘겼어.",
						soundEffects: [
							{
								tag: "PAGE_TURN",
								repeat: 1,
							},
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
				text: "그 다음 페이지도. 모두 비어 있었어.",
				chunks: [
					{
						content: "그 다음 페이지도. 모두 비어 있었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "아니. 천천히 글자가 나타나기 시작했어.",
				chunks: [
					{
						content: "아니. 천천히 글자가 나타나기 시작했어.",
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
					tag: "DRONE_SUFFOCATE_DREAD",
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
				text: '"나는 기억할 수 없다.',
				chunks: [
					{
						content: '"나는 기억할 수 없다.',
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
				text: "나는 기억할 수 없다.",
				chunks: [
					{
						content: "나는 기억할 수 없다.",
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
				text: '나는 기억할 수 없다."',
				chunks: [
					{
						content: '나는 기억할 수 없다."',
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
					tag: "DRONE_STRINGS_DISCORDANT",
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
				text: "같은 문장이 페이지를 가득 채웠어.",
				chunks: [
					{
						content: "같은 문장이 페이지를 가득 채웠어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "서연은 노트를 떨어뜨렸어.",
				chunks: [
					{
						content: "서연은 노트를 떨어뜨렸어.",
						soundEffects: [
							{
								tag: "DRUM_HIT_DEEP",
							},
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
				text: '"이게 뭐예요... 이게 대체..."',
				chunks: [
					{
						content: '"이게 뭐예요... 이게 대체..."',
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
				text: "김박사가 다가왔어.",
				chunks: [
					{
						content: "김박사가 다가왔어.",
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
		id: "seg-55",
		lines: [
			{
				text: '"당신은 기자가 아니에요, 서연씨."',
				chunks: [
					{
						content: '"당신은 기자가 아니에요, 서연씨."',
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: '"무슨 소리예요."',
				chunks: [
					{
						content: '"무슨 소리예요."',
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: '"당신은 피험자였어요. MK-47의 첫 번째 인체 실험 대상."',
				chunks: [
					{
						content: '"당신은 피험자였어요. MK-47의 첫 번째 인체 실험 대상."',
						soundEffects: [
							{
								tag: "DRUM_HIT_DOUBLE",
							},
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
				text: '"거짓말..."',
				chunks: [
					{
						content: '"거짓말..."',
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
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: '"당신이 매일 여기 오는 이유예요. 기억이 72시간마다 리셋되거든요."',
				chunks: [
					{
						content:
							'"당신이 매일 여기 오는 이유예요. 기억이 72시간마다 리셋되거든요."',
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
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
				text: "서연의 다리에 힘이 풀렸어.",
				chunks: [
					{
						content: "서연의 다리에 힘이 풀렸어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: '"아니야... 난 기자야... 난..."',
				chunks: [
					{
						content: '"아니야... 난 기자야... 난..."',
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
			{
				text: "김박사가 서류 하나를 내밀었어.",
				chunks: [
					{
						content: "김박사가 서류 하나를 내밀었어.",
						soundEffects: [
							{
								tag: "PAGE_TURN",
								repeat: 1,
							},
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
				text: '"피험자 동의서. 당신 서명이에요."',
				chunks: [
					{
						content: '"피험자 동의서. 당신 서명이에요."',
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
		id: "seg-57",
		lines: [
			{
				text: "서연은 서류를 봤어.",
				chunks: [
					{
						content: "서연은 서류를 봤어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "자신의 서명이 있었어.",
				chunks: [
					{
						content: "자신의 서명이 있었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "아니. 비슷했어. 자신의 글씨 같기도 하고, 아닌 것 같기도 하고.",
				chunks: [
					{
						content: "아니.",
					},
					{
						content: "비슷했어.",
						textEffects: ["JITTER"],
					},
					{
						content: "자신의 글씨 같기도 하고, 아닌 것 같기도 하고.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
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
				text: '"실험은 실패했어요." 김박사가 말했어.',
				chunks: [
					{
						content: '"실험은 실패했어요." 김박사가 말했어.',
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: '"당신은 기자라고 믿게 됐죠. 그게 부작용이에요."',
				chunks: [
					{
						content: '"당신은 기자라고 믿게 됐죠. 그게 부작용이에요."',
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: '"아니야..."',
				chunks: [
					{
						content: '"아니야..."',
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
					status: "stop",
				},
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
		id: "seg-59",
		lines: [
			{
				text: "서연은 자료실로 뛰어갔어.",
				chunks: [
					{
						content: "서연은 자료실로 뛰어갔어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "복도 끝의 자료실. 문을 열었어. 캐비닛을 뒤졌어.",
				chunks: [
					{
						content: "복도 끝의 자료실.",
					},
					{
						content: "문을 열었어.",
						soundEffects: [
							{
								tag: "HEAVY_DOOR_CREAK_SLOW",
							},
						],
					},
					{
						content: "캐비닛을 뒤졌어.",
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
				text: '파일을 꺼냈어. "MK-47 임상실험 기록"',
				chunks: [
					{
						content: "파일을 꺼냈어.",
					},
					{
						content: '"MK-47 임상실험 기록"',
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "첫 페이지를 펼쳤어.",
				chunks: [
					{
						content: "첫 페이지를 펼쳤어.",
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
		background: {
			url: "goedamjip-story-image/68ee177f8feaf81c06289000/seg-59",
			type: "background",
			sustain_until: "seg-68",
		},
		segmentEffects: {
			soundEffects: [
				{
					tag: "DRONE_SURROUNDED_THREAT",
					status: "start",
				},
				{
					tag: "WIND_DRAFT_WHISTLE",
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
		id: "seg-60",
		lines: [
			{
				text: '"피험자명: 서연',
				chunks: [
					{
						content: '"피험자명: 서연',
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
				text: "나이: 32세",
				chunks: [
					{
						content: "나이: 32세",
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
				text: '직업: 무직"',
				chunks: [
					{
						content: '직업: 무직"',
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
		id: "seg-61",
		lines: [
			{
				text: "아니야.",
				chunks: [
					{
						content: "아니야.",
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
				text: "페이지를 넘겼어.",
				chunks: [
					{
						content: "페이지를 넘겼어.",
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
		id: "seg-62",
		lines: [
			{
				text: '"피험자명: 서연',
				chunks: [
					{
						content: '"피험자명: 서연',
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "나이: 32세  ",
				chunks: [
					{
						content: "나이: 32세  ",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: '직업: 신문기자"',
				chunks: [
					{
						content: '직업: 신문기자"',
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
		id: "seg-63",
		lines: [
			{
				text: "내용이 바뀌었어.",
				chunks: [
					{
						content: "내용이 바뀌었어.",
						visualEffects: ["OVERLAY_GLITCH"],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "다시 넘겼어.",
				chunks: [
					{
						content: "다시 넘겼어.",
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
		id: "seg-64",
		lines: [
			{
				text: '"피험자명: 박서연, 나이: 28세, 직업: 연구원"',
				chunks: [
					{
						content: '"피험자명: 박서연, ',
					},
					{
						content: "나이: 28세, ",
						textEffects: ["TEXT_SCRAMBLE_GLITCH"],
					},
					{
						content: '직업: 연구원"',
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
		id: "seg-65",
		lines: [
			{
				text: "계속 바뀌었어.",
				chunks: [
					{
						content: "계속 바뀌었어.",
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
				text: "페이지마다 다른 정보.",
				chunks: [
					{
						content: "페이지마다 다른 정보.",
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
				text: "서연은 자료를 바닥에 던졌어.",
				chunks: [
					{
						content: "서연은 자료를 바닥에 던졌어.",
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
					tag: "DRONE_SURROUNDED_THREAT",
					status: "stop",
				},
				{
					tag: "WIND_DRAFT_WHISTLE",
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
		id: "seg-66",
		lines: [
			{
				text: "팔을 내려다봤어.",
				chunks: [
					{
						content: "팔을 내려다봤어.",
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
				text: "소매를 걷어 올렸어.",
				chunks: [
					{
						content: "소매를 걷어 올렸어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "팔뚝에 주사 자국이 있었어. 여러 개.",
				chunks: [
					{
						content: "팔뚝에 주사 자국이 있었어. ",
					},
					{
						content: "여러 개.",
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
				text: "아니. 없었어. 다시 봤어.",
				chunks: [
					{
						content: "아니. ",
						textEffects: ["GLITCH"],
					},
					{
						content: "없었어. ",
						textEffects: ["GLITCH"],
					},
					{
						content: "다시 봤어.",
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
					tag: "DRONE_FEAR_PSYCHOSIS",
					status: "start",
				},
				{
					tag: "ROOMTONE_FLUORESCENT_BUZZ",
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
		id: "seg-67",
		lines: [
			{
				text: "있었어.",
				chunks: [
					{
						content: "있었어.",
						soundEffects: [
							{
								tag: "HEARTBEAT_SUDDEN_LOUD",
							},
						],
					},
				],
				preLineEffects: {
					image: {
						url: "goedamjip-story-image/68ee177f8feaf81c06289000/seg-67",
						type: "overlay",
						sustain_until: "seg-68",
					},
					soundEffects: [
						{
							tag: "HIGH_PITCH_RINGING_EARS",
						},
					],
					visualEffects: [],
				},
			},
			{
				text: "푸른 혈관이 실핏줄처럼 퍼져 올라오고 있었어.",
				chunks: [
					{
						content: "푸른 혈관이 실핏줄처럼 퍼져 올라오고 있었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "손목에서 팔꿈치까지.",
				chunks: [
					{
						content: "손목에서 팔꿈치까지.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "피부 아래에서 뭔가 움직이는 것 같았어.",
				chunks: [
					{
						content: "피부 아래에서 뭔가 움직이는 것 같았어.",
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
		id: "seg-68",
		lines: [
			{
				text: '"아아아악!"',
				chunks: [
					{
						content: '"아아아악!"',
						soundEffects: [
							{
								tag: "FEMALE_SCREAM_TERROR",
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
			{
				text: "서연은 비명을 지르며 팔을 감싸안았어.",
				chunks: [
					{
						content: "서연은 비명을 지르며 팔을 감싸안았어.",
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
					tag: "DRONE_FEAR_PSYCHOSIS",
					status: "stop",
				},
				{
					tag: "ROOMTONE_FLUORESCENT_BUZZ",
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
		id: "seg-69",
		lines: [
			{
				text: "정신을 차렸을 때.",
				chunks: [
					{
						content: "정신을 차렸을 때.",
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
				text: "서연은 자신의 아파트에 있었어.",
				chunks: [
					{
						content: "서연은 자신의 아파트에 있었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "책상 앞에 앉아 있었어. 노트북이 켜져 있었어.",
				chunks: [
					{
						content: "책상 앞에 앉아 있었어. ",
					},
					{
						content: "노트북이 켜져 있었어.",
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
			url: "goedamjip-story-image/68ee177f8feaf81c06289000/seg-69",
			type: "background",
			sustain_until: "seg-81",
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
			],
			visualEffects: [],
		},
	},
	{
		id: "seg-70",
		lines: [
			{
				text: "화면에 문서가 열려 있었어.",
				chunks: [
					{
						content: "화면에 문서가 열려 있었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: '"뉴로바이오메드 연구소 사건 취재 기사"',
				chunks: [
					{
						content: '"뉴로바이오메드 연구소 사건 취재 기사"',
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
				text: "서연은 화면을 봤어.",
				chunks: [
					{
						content: "서연은 화면을 봤어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "기사를 쓰고 있었던 거야. 언제부터인지 모르겠지만.",
				chunks: [
					{
						content: "기사를 쓰고 있었던 거야. ",
						soundEffects: [
							{
								tag: "KEYBOARD_TYPING",
							},
						],
					},
					{
						content: "언제부터인지 모르겠지만.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
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
				text: "내용을 읽기 시작했어.",
				chunks: [
					{
						content: "내용을 읽기 시작했어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: '"대전 대덕연구단지의 뉴로바이오메드 연구소에서 의식 조작 실험이 진행되었다는 의혹이 제기됐다..."',
				chunks: [
					{
						content:
							'"대전 대덕연구단지의 뉴로바이오메드 연구소에서 의식 조작 실험이 진행되었다는 의혹이 제기됐다..."',
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
		id: "seg-72",
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
			{
				text: "읽는 동안 문장이 바뀌었어.",
				chunks: [
					{
						content: "읽는 동안 문장이 바뀌었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [
						{
							tag: "SMARTPHONE_NOTIFICATION_GLITCH",
						},
					],
					visualEffects: ["OVERLAY_GLITCH"],
				},
			},
			{
				text: '"대전 대덕연구단지의 뉴로바이오메드 연구소에서 나는 실험체였다는 의혹이 제기됐다..."',
				chunks: [
					{
						content:
							'"대전 대덕연구단지의 뉴로바이오메드 연구소에서 나는 실험체였다는 의혹이 제기됐다..."',
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
		id: "seg-73",
		lines: [
			{
				text: "서연은 눈을 비볐어. 다시 봤어.",
				chunks: [
					{
						content: "서연은 눈을 비볐어.",
					},
					{
						content: "다시 봤어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: '"대전 대덕연구단지의 뉴로바이오메드 연구소에서 실험은 성공했다는 의혹이 제기됐다..."',
				chunks: [
					{
						content:
							'"대전 대덕연구단지의 뉴로바이오메드 연구소에서 실험은 성공했다는 의혹이 제기됐다..."',
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
		id: "seg-74",
		lines: [
			{
				text: "손이 저절로 움직였어.",
				chunks: [
					{
						content: "손이 저절로 움직였어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "키보드 위에서. 타이핑하고 있었어. 의지와 상관없이.",
				chunks: [
					{
						content: "키보드 위에서.",
					},
					{
						content: "타이핑하고 있었어.",
						soundEffects: [
							{
								tag: "KEYBOARD_TYPING",
							},
						],
					},
					{
						content: "의지와 상관없이.",
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
				text: '"나는 기억할 수 없다.',
				chunks: [
					{
						content: '"나는 기억할 수 없다.',
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
				text: "나는 구분할 수 없다.",
				chunks: [
					{
						content: "나는 구분할 수 없다.",
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
				text: "나는 서연이다.",
				chunks: [
					{
						content: "나는 서연이다.",
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
				text: '나는 서연이 아니다."',
				chunks: [
					{
						content: '나는 서연이 아니다."',
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
		id: "seg-75",
		lines: [
			{
				text: "서연은 키보드에서 손을 떼려고 했어.",
				chunks: [
					{
						content: "서연은 키보드에서 손을 떼려고 했어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "떨어지지 않았어. 손가락이 계속 움직였어.",
				chunks: [
					{
						content: "떨어지지 않았어.",
					},
					{
						content: "손가락이 계속 움직였어.",
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
			{
				text: "화면에 메시지창이 떴어.",
				chunks: [
					{
						content: "화면에 메시지창이 떴어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [
						{
							tag: "SMARTPHONE_NOTIFICATION_GLITCH",
						},
					],
					visualEffects: ["OVERLAY_GLITCH"],
				},
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
				text: '"실험은 성공했다.',
				chunks: [
					{
						content: '"실험은 성공했다.',
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
				text: "피험자는 이제 자신이 누구인지, 무엇을 하고 있는지 구분할 수 없다.",
				chunks: [
					{
						content:
							"피험자는 이제 자신이 누구인지, 무엇을 하고 있는지 구분할 수 없다.",
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
				text: '글을 쓸 때조차 자신의 의지인지 프로그램된 반응인지 알 수 없다."',
				chunks: [
					{
						content:
							'글을 쓸 때조차 자신의 의지인지 프로그램된 반응인지 알 수 없다."',
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
		id: "seg-77",
		lines: [
			{
				text: "서연은 의자에서 일어나려 했어.",
				chunks: [
					{
						content: "서연은 의자에서 일어나려 했어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "일어나지 못했어. 아니. 일어났어. 아니. 앉아 있었어.",
				chunks: [
					{
						content: "일어나지 못했어.",
					},
					{
						content: "아니. 일어났어. 아니.",
						textEffects: ["GLITCH"],
					},
					{
						content: "앉아 있었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "뭐가 진짜인지 알 수 없었어.",
				chunks: [
					{
						content: "뭐가 진짜인지 알 수 없었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
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
				text: "거울을 봤어. 책상 옆 거울.",
				chunks: [
					{
						content: "거울을 봤어.",
					},
					{
						content: "책상 옆 거울.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "자신이 웃고 있었어. 웃고 있지 않았어.",
				chunks: [
					{
						content: "자신이 웃고 있었어.",
					},
					{
						content: "웃고 있지 않았어.",
						textEffects: ["GLITCH"],
					},
				],
				preLineEffects: {
					image: {
						url: "goedamjip-story-image/68ee177f8feaf81c06289000/seg-78",
						type: "overlay",
						sustain_until: "seg-79",
					},
					soundEffects: [
						{
							tag: "GLASS_SQUEAK",
						},
					],
					visualEffects: ["OVERLAY_GLITCH"],
				},
			},
			{
				text: "울고 있었어. 아무 표정도 없었어.",
				chunks: [
					{
						content: "울고 있었어.",
						textEffects: ["JITTER"],
					},
					{
						content: "아무 표정도 없었어.",
					},
				],
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
		id: "seg-79",
		lines: [
			{
				text: "서연은 노트를 펼쳤어.",
				chunks: [
					{
						content: "서연은 노트를 펼쳤어.",
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
			{
				text: "마지막 페이지. 자신의 글씨로 적혀 있었어.",
				chunks: [
					{
						content: "마지막 페이지.",
					},
					{
						content: "자신의 글씨로 적혀 있었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: '"오늘은 11월 15일 수요일.',
				chunks: [
					{
						content: '"오늘은 11월 15일 수요일.',
						textEffects: ["STYLE_FONT_HANDWRITTEN_UNSTABLE"],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "나는 대전 대덕연구단지로 간다.",
				chunks: [
					{
						content: "나는 대전 대덕연구단지로 간다.",
						textEffects: ["STYLE_FONT_HANDWRITTEN_UNSTABLE"],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "뉴로바이오메드 연구소.",
				chunks: [
					{
						content: "뉴로바이오메드 연구소.",
						textEffects: ["STYLE_FONT_HANDWRITTEN_UNSTABLE"],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "취재를 위해.",
				chunks: [
					{
						content: "취재를 위해.",
						textEffects: ["STYLE_FONT_HANDWRITTEN_UNSTABLE"],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: '"나는 기자니까."',
				chunks: [
					{
						content: '"나는 기자니까."',
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
		id: "seg-80",
		lines: [
			{
				text: "그 아래. 다른 필체로.",
				chunks: [
					{
						content: "그 아래.",
					},
					{
						content: "다른 필체로.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: '"오늘은 11월 15일 수요일.',
				chunks: [
					{
						content: '"오늘은 11월 15일 수요일.',
						textEffects: ["STYLE_FONT_HANDWRITTEN_UNSTABLE"],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "나는 대전 대덕연구단지로 간다.",
				chunks: [
					{
						content: "나는 대전 대덕연구단지로 간다.",
						textEffects: ["STYLE_FONT_HANDWRITTEN_UNSTABLE"],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "뉴로바이오메드 연구소.",
				chunks: [
					{
						content: "뉴로바이오메드 연구소.",
						textEffects: ["STYLE_FONT_HANDWRITTEN_UNSTABLE"],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "실험을 위해.",
				chunks: [
					{
						content: "실험을 위해.",
						textEffects: ["STYLE_FONT_HANDWRITTEN_UNSTABLE"],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: '나는 피험자니까."',
				chunks: [
					{
						content: '나는 피험자니까."',
						textEffects: ["STYLE_FONT_HANDWRITTEN_UNSTABLE", "GLITCH"],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
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
				text: "두 문장이 반복됐어.",
				chunks: [
					{
						content: "두 문장이 반복됐어.",
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
				text: "페이지를 가득 채우며. 글씨가 점점 겹쳐졌어. 구분이 안 됐어.",
				chunks: [
					{
						content: "페이지를 가득 채우며.",
					},
					{
						content: "글씨가 점점 겹쳐졌어.",
						textEffects: ["GLITCH"],
					},
					{
						content: "구분이 안 됐어.",
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
			soundEffects: [
				{
					tag: "CITY_AMBIENCE_NIGHT",
					status: "stop",
				},
				{
					tag: "ROOMTONE_EMPTY_NEUTRAL",
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
		id: "seg-82",
		lines: [
			{
				text: "다음 날 아침.",
				chunks: [
					{
						content: "다음 날 아침.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "서연은 노트를 펼쳤어.",
				chunks: [
					{
						content: "서연은 노트를 펼쳤어.",
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
			{
				text: '"뉴로바이오메드 연구소, 지하 3층, 김박사 증언 - 사고 당일 아무도 없었다."',
				chunks: [
					{
						content:
							'"뉴로바이오메드 연구소, 지하 3층, 김박사 증언 - 사고 당일 아무도 없었다."',
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
			url: "goedamjip-story-image/68ee177f8feaf81c06289000/seg-82",
			type: "background",
			sustain_until: "seg-84",
		},
		segmentEffects: {
			soundEffects: [
				{
					tag: "CITY_AMBIENCE_DAY",
					status: "start",
				},
				{
					tag: "ROOMTONE_EMPTY_NEUTRAL",
					status: "start",
				},
			],
			visualEffects: [],
		},
	},
	{
		id: "seg-83",
		lines: [
			{
				text: "이상했어. 뭔가 이상했어.",
				chunks: [
					{
						content: "이상했어.",
						soundEffects: [
							{
								tag: "SWALLOWING_NERVOUS",
							},
						],
					},
					{
						content: "뭔가 이상했어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "녹음기를 꺼냈어. 확인해야 했어.",
				chunks: [
					{
						content: "녹음기를 꺼냈어.",
					},
					{
						content: "확인해야 했어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "택시를 불렀어.",
				chunks: [
					{
						content: "택시를 불렀어.",
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
	{
		id: "seg-84",
		lines: [
			{
				text: "기사가 백미러로 그녀를 봤어.",
				chunks: [
					{
						content: "기사가 백미러로 그녀를 봤어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: '"또 가시는군요."',
				chunks: [
					{
						content: '"또 가시는군요."',
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "서연은 대답했어.",
				chunks: [
					{
						content: "서연은 대답했어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: '"네, 또 가요."',
				chunks: [
					{
						content: '"네, 또 가요."',
					},
				],
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
				{
					tag: "ROOMTONE_EMPTY_NEUTRAL",
					status: "stop",
				},
			],
			visualEffects: [],
		},
	},
	{
		id: "seg-85",
		lines: [
			{
				text: "왜 그렇게 대답했는지 몰랐어.",
				chunks: [
					{
						content: "왜 그렇게 대답했는지 몰랐어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "알고 있는 건지. 모르는 건지. 구분할 수 없었어.",
				chunks: [
					{
						content: "알고 있는 건지.",
					},
					{
						content: "모르는 건지.",
						textEffects: ["TEXT_SCRAMBLE_GLITCH"],
					},
					{
						content: "구분할 수 없었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "연구소가 보였어. 출입문이 열려 있었어.",
				chunks: [
					{
						content: "연구소가 보였어.",
					},
					{
						content: "출입문이 열려 있었어.",
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
			url: "goedamjip-story-image/68ee177f8feaf81c06289000/seg-85",
			type: "background",
			sustain_until: "seg-85",
		},
		segmentEffects: {
			soundEffects: [
				{
					tag: "WIND_DRAFT_WHISTLE",
					status: "start",
				},
				{
					tag: "DRONE_SURROUNDED_THREAT",
					status: "start",
				},
				{
					tag: "WIND_DRAFT_WHISTLE",
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
		id: "seg-86",
		lines: [
			{
				text: "서연은 내렸어.",
				chunks: [
					{
						content: "서연은 내렸어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "걸어 들어갔어. 형광등 불빛이 차갑게 내리쬐었어.",
				chunks: [
					{
						content: "걸어 들어갔어.",
						soundEffects: [
							{
								tag: "FOOTSTEP_LIGHT_TAPS",
							},
						],
					},
					{
						content: "형광등 불빛이 차갑게 내리쬐었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "계단을 내려갔어. 지하로.",
				chunks: [
					{
						content: "계단을 내려갔어.",
					},
					{
						content: "지하로.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "발소리가 두 사람분으로 들렸어.",
				chunks: [
					{
						content: "발소리가 두 사람분으로 들렸어.",
						soundEffects: [
							{
								tag: "FOOTSTEPS_TUNNEL",
							},
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
			url: "goedamjip-story-image/68ee177f8feaf81c06289000/seg-86",
			type: "background",
			sustain_until: "seg-95",
		},
		segmentEffects: {
			soundEffects: [
				{
					tag: "DRONE_INDUSTRIAL_ABYSS",
					status: "start",
				},
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
		id: "seg-87",
		lines: [
			{
				text: "근데 이상한 건.",
				chunks: [
					{
						content: "근데 이상한 건.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "서연은 무섭지 않았어. 익숙했어.",
				chunks: [
					{
						content: "서연은 무섭지 않았어.",
					},
					{
						content: "익숙했어.",
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
				text: "마치. 집에 돌아온 것처럼.",
				chunks: [
					{
						content: "마치.",
					},
					{
						content: "집에 돌아온 것처럼.",
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
