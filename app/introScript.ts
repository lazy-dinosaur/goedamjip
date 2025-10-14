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
				text: "실제로 있었던 일이었어.",
				chunks: [
					{
						content: "실제로 있었던 일이었어.",
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
					tag: "MUSIC_HORRORMANCE_THEME",
					status: "start",
				},
				{
					tag: "MUSIC_HORRORMANCE_THEME",
					status: "stop",
				},
			],
			visualEffects: [],
		},
	},
	{
		id: "seg-2",
		lines: [
			{
				text: "2024년 여름, 서울 강남의 한 오피스 빌딩.",
				chunks: [
					{
						content: "2024년 여름, 서울 강남의 한 오피스 빌딩.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "바이오헬스코리아라는 제약회사에서 일어난 사건이야.",
				chunks: [
					{
						content: "바이오헬스코리아라는 제약회사에서 일어난 사건이야.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "당시 언론에는 '연쇄 변사 사건'으로 보도됐는데... 진짜 무서운 건 범인이 끝까지 자신이 피해자라고 믿었다는 거야.",
				chunks: [
					{
						content: "당시 언론에는 '연쇄 변사 사건'으로 보도됐는데... ",
					},
					{
						content:
							"진짜 무서운 건 범인이 끝까지 자신이 피해자라고 믿었다는 거야.",
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
			url: "goedamjip-story-image/68ed980e87dfe558b9e5f000/seg-2",
			type: "background",
			sustain_until: "seg-3",
		},
		segmentEffects: {
			soundEffects: [
				{
					tag: "MUSIC_DEDUCTION_SUSPENSE",
					status: "start",
				},
				{
					tag: "CITY_AMBIENCE_NIGHT",
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
		id: "seg-3",
		lines: [
			{
				text: "그 사람 이름은 한민우. 36살, 마케팅팀 과장.",
				chunks: [
					{
						content: "그 사람 이름은 한민우. 36살, 마케팅팀 과장.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "완벽주의자였대. 규칙을 철저히 지키는 사람.",
				chunks: [
					{
						content: "완벽주의자였대. 규칙을 철저히 지키는 사람.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "근데 어느 날부터... 이상한 일들이 벌어지기 시작했어.",
				chunks: [
					{
						content: "근데 어느 날부터... ",
					},
					{
						content: "이상한 일들이 벌어지기 시작했어.",
					},
				],
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
					tag: "MUSIC_DEDUCTION_SUSPENSE",
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
		id: "seg-4",
		lines: [
			{
				text: "2024년 9월, 정신병원 격리실.",
				chunks: [
					{
						content: "2024년 9월, 정신병원 격리실.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "한민우는 흰 종이에 빽빽하게 글을 쓰고 있었어.",
				chunks: [
					{
						content: "한민우는 흰 종이에 빽빽하게 글을 쓰고 있었어.",
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
		background: {
			url: "goedamjip-story-image/68ed980e87dfe558b9e5f000/seg-4",
			type: "background",
			sustain_until: "seg-7",
		},
		segmentEffects: {
			soundEffects: [
				{
					tag: "MUSIC_LOST_AND_ALONE",
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
		id: "seg-5",
		lines: [
			{
				text: '"나는 피해자다. 회사에 저주가 있었다."',
				chunks: [
					{
						content: '"나는 피해자다. 회사에 저주가 있었다."',
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
				text: "박현정 간호사가 관찰창으로 그를 지켜봤어. 민우의 손톱은 모두 벗겨져 있었어. 하지만 그는 펜을 놓지 않았어.",
				chunks: [
					{
						content: "박현정 간호사가 관찰창으로 그를 지켜봤어. ",
					},
					{
						content: "민우의 손톱은 모두 벗겨져 있었어. ",
					},
					{
						content: "하지만 그는 펜을 놓지 않았어.",
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
		id: "seg-6",
		lines: [
			{
				text: '"이 이야기를 끝까지 들어주세요. 당신은 믿지 않겠지만, 나는 규칙을 지키려 했을 뿐입니다."',
				chunks: [
					{
						content:
							'"이 이야기를 끝까지 들어주세요. 당신은 믿지 않겠지만, 나는 규칙을 지키려 했을 뿐입니다."',
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
			{
				text: "민우가 중얼거렸어.",
				chunks: [
					{
						content: "민우가 중얼거렸어.",
					},
				],
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
					tag: "MUSIC_LOST_AND_ALONE",
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
		id: "seg-7",
		lines: [
			{
				text: "자, 이제 3개월 전으로 돌아가볼까.",
				chunks: [
					{
						content: "자, 이제 3개월 전으로 돌아가볼까.",
					},
				],
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
			visualEffects: [],
		},
	},
	{
		id: "seg-8",
		lines: [
			{
				text: "2024년 6월 3일. 인사팀장이 민우를 불렀어.",
				chunks: [
					{
						content: "2024년 6월 3일. 인사팀장이 민우를 불렀어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: '"한 과장님, 이번 승진 대상자는... 김선영 대리로 결정됐습니다."',
				chunks: [
					{
						content:
							'"한 과장님, 이번 승진 대상자는... 김선영 대리로 결정됐습니다."',
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: '민우는 침착하게 대답했어. "알겠습니다."',
				chunks: [
					{
						content: '민우는 침착하게 대답했어. "알겠습니다."',
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "하지만 복도로 나오는 순간, 형광등이 깜빡였어. 민우의 표정이 일그러졌어.",
				chunks: [
					{
						content: "하지만 복도로 나오는 순간, 형광등이 깜빡였어.",
						soundEffects: [
							{
								tag: "STATIC_BURST_LOUD",
							},
						],
						visualEffects: ["OVERLAY_GLITCH"],
					},
					{
						content: "민우의 표정이 일그러졌어.",
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
			url: "goedamjip-story-image/68ed980e87dfe558b9e5f000/seg-8",
			type: "background",
			sustain_until: "seg-8",
		},
		segmentEffects: {
			soundEffects: [
				{
					tag: "MUSIC_DEDUCTION_SUSPENSE",
					status: "stop",
				},
			],
			visualEffects: [],
		},
	},
	{
		id: "seg-9",
		lines: [
			{
				text: "그날 밤. 민우는 10층 창고에서 오래된 서류를 정리하고 있었어.",
				chunks: [
					{
						content:
							"그날 밤. 민우는 10층 창고에서 오래된 서류를 정리하고 있었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "먼지 쌓인 캐비넷 맨 아래 서랍에서 노란 종이뭉치를 발견했어. 1999년 타자기로 작성된 문서였어. '화재 발생 시 행동 수칙'이라고 적혀 있었어.",
				chunks: [
					{
						content:
							"먼지 쌓인 캐비넷 맨 아래 서랍에서 노란 종이뭉치를 발견했어.",
						soundEffects: [
							{
								tag: "PAGE_TURN",
								repeat: 3,
							},
						],
					},
					{
						content:
							"1999년 타자기로 작성된 문서였어. '화재 발생 시 행동 수칙'이라고 적혀 있었어.",
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
			url: "goedamjip-story-image/68ed980e87dfe558b9e5f000/seg-9",
			type: "background",
			sustain_until: "seg-12",
		},
		segmentEffects: {
			soundEffects: [
				{
					tag: "MUSIC_HIDDEN_FEAR",
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
		id: "seg-10",
		lines: [
			{
				text: "근데 이상한 일이 일어났어.",
				chunks: [
					{
						content: "근데 이상한 일이 일어났어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "민우의 눈에는 글자들이 다르게 보이기 시작했어.",
				chunks: [
					{
						content: "민우의 눈에는 글자들이 다르게 보이기 시작했어.",
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
				text: '"엘리베이터를 사용하지 마라" 그의 머릿속에서 이렇게 바뀌었어. "야근 후 엘리베이터를 혼자 타지 마라"',
				chunks: [
					{
						content: '"엘리베이터를 사용하지 마라"',
					},
					{
						content: "그의 머릿속에서 이렇게 바뀌었어.",
					},
					{
						content: '"야근 후 엘리베이터를 혼자 타지 마라"',
						textEffects: ["GLITCH"],
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
			visualEffects: [
				{
					tag: "EFFECT_FLASHLIGHT",
					status: "start",
				},
			],
		},
	},
	{
		id: "seg-11",
		lines: [
			{
				text: "민우는 떨리는 손으로 노트를 꺼냈어. 규칙들을 정리하기 시작했어.\n1. 밤 10시 이후 화장실 거울을 보지 마라\n2. 지하 주차장 B3구역에 주차하지 마라\n3. 12층 회의실 C를 밤에 사용하지 마라\n4. 10층 복사기를 혼자 사용하지 마라\n5. 야근 후 엘리베이터를 혼자 타지 마라\n6. 옥상 문을 열지 마라\n7. 누구에게도 이 규칙을 말하지 마라",
				chunks: [
					{
						content:
							"민우는 떨리는 손으로 노트를 꺼냈어. 규칙들을 정리하기 시작했어.",
						soundEffects: [
							{
								tag: "PENCIL_WRITING",
							},
						],
					},
					{
						content:
							"1. 밤 10시 이후 화장실 거울을 보지 마라\n2. 지하 주차장 B3구역에 주차하지 마라\n3. 12층 회의실 C를 밤에 사용하지 마라\n4. 10층 복사기를 혼자 사용하지 마라\n5. 야근 후 엘리베이터를 혼자 타지 마라\n6. 옥상 문을 열지 마라\n7. 누구에게도 이 규칙을 말하지 마라",
						textEffects: ["TYPEWRITER"],
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
			soundEffects: [
				{
					tag: "MUSIC_HIDDEN_FEAR",
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
		id: "seg-12",
		lines: [
			{
				text: "근데 말이야. 그 건물, 25년 전에 화재로 7명이 죽었거든.",
				chunks: [
					{
						content: "근데 말이야. 그 건물, 25년 전에 화재로 7명이 죽었거든.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "민우가 발견한 '규칙'은 사실 그때 작성된 화재 예방 수칙이었어. 하지만 민우는 그걸 '저주의 경고'로 읽은 거야.",
				chunks: [
					{
						content:
							"민우가 발견한 '규칙'은 사실 그때 작성된 화재 예방 수칙이었어.",
					},
					{
						content: "하지만 민우는 그걸 '저주의 경고'로 읽은 거야.",
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
					tag: "MUSIC_DEDUCTION_SUSPENSE",
					status: "start",
				},
				{
					tag: "MUSIC_DEDUCTION_SUSPENSE",
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
				text: "다음 날. 민우는 동료들에게 조심스럽게 규칙을 언급했어.",
				chunks: [
					{
						content: "다음 날. 민우는 동료들에게 조심스럽게 규칙을 언급했어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: '"여러분, 회사에 지켜야 할 규칙이 있어요." 하지만 아무도 관심을 보이지 않았어.',
				chunks: [
					{
						content: '"여러분, 회사에 지켜야 할 규칙이 있어요."',
					},
					{
						content: "하지만 아무도 관심을 보이지 않았어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: '신입사원 박지훈이 웃으며 말했어. "과장님, 무슨 괴담이에요?"',
				chunks: [
					{
						content:
							'신입사원 박지훈이 웃으며 말했어. "과장님, 무슨 괴담이에요?"',
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
			url: "goedamjip-story-image/68ed980e87dfe558b9e5f000/seg-13",
			type: "background",
			sustain_until: "seg-13",
		},
		segmentEffects: {
			soundEffects: [
				{
					tag: "CITY_AMBIENCE_DAY",
					status: "start",
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
		id: "seg-14",
		lines: [
			{
				text: "그리고 2주 후. 6월 28일 금요일 밤 11시.",
				chunks: [
					{
						content: "그리고 2주 후. 6월 28일 금요일 밤 11시.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "민우는 야근 중이었어. 복도 끝에서 물 흐르는 소리가 들렸어. 남자화장실에서 불빛이 새어나왔어.",
				chunks: [
					{
						content:
							"민우는 야근 중이었어. 복도 끝에서 물 흐르는 소리가 들렸어. 남자화장실에서 불빛이 새어나왔어.",
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
			{
				text: '민우는 복도를 천천히 걸어갔어. 형광등이 깜빡거렸어. "누가 있나요?" 대답이 없었어.',
				chunks: [
					{
						content: "민우는 복도를 천천히 걸어갔어.",
						soundEffects: [
							{
								tag: "FOOTSTEPS_TUNNEL",
							},
						],
					},
					{
						content: "형광등이 깜빡거렸어.",
						soundEffects: [
							{
								tag: "SWITCH_ONOFF_TOGGLE",
							},
						],
						visualEffects: ["OVERLAY_GLITCH"],
					},
					{
						content: '"누가 있나요?" 대답이 없었어.',
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
			url: "goedamjip-story-image/68ed980e87dfe558b9e5f000/seg-14",
			type: "background",
			sustain_until: "seg-14",
		},
		segmentEffects: {
			soundEffects: [
				{
					tag: "CITY_AMBIENCE_NIGHT",
					status: "start",
				},
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
		id: "seg-15",
		lines: [
			{
				text: "화장실 문을 밀고 들어갔어.",
				chunks: [
					{
						content: "화장실 문을 밀고 들어갔어.",
						soundEffects: [
							{
								tag: "DOOR_OPEN",
							},
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
				text: "세면대 앞에 박지훈이 서 있었어. 거울을 응시하고 있었어.",
				chunks: [
					{
						content: "세면대 앞에 박지훈이 서 있었어.",
					},
					{
						content: "거울을 응시하고 있었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: '민우가 입을 열었어. "지훈씨, 규칙..."',
				chunks: [
					{
						content: "민우가 입을 열었어.",
						soundEffects: [
							{
								tag: "SWALLOWING_NERVOUS",
							},
						],
					},
					{
						content: '"지훈씨, 규칙..."',
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
			url: "goedamjip-story-image/68ed980e87dfe558b9e5f000/seg-15",
			type: "background",
			sustain_until: "seg-28",
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
		id: "seg-16",
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
				text: "지훈이 천천히 돌아봤어.",
				chunks: [
					{
						content: "지훈이 천천히 돌아봤어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
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
				text: "지훈의 얼굴 피부가 수은처럼 매끄럽게 변해 있었어. 모든 주름과 모공이 사라져 있었어.",
				chunks: [
					{
						content: "지훈의 얼굴 피부가 수은처럼 매끄럽게 변해 있었어.",
						textEffects: ["GLITCH"],
					},
					{
						content: "모든 주름과 모공이 사라져 있었어.",
					},
				],
				preLineEffects: {
					image: {
						url: "goedamjip-story-image/68ed980e87dfe558b9e5f000/seg-17",
						type: "overlay",
						sustain_until: "seg-19",
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
				text: "눈알이 뒤집혀 있었어. 흰자위만 민우를 향하고 있었어. 지훈의 입이 열렸어.",
				chunks: [
					{
						content: "눈알이 뒤집혀 있었어.",
						textEffects: ["JITTER"],
					},
					{
						content: "흰자위만 민우를 향하고 있었어.",
					},
					{
						content: "지훈의 입이 열렸어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
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
				text: "철벅.",
				chunks: [
					{
						content: "철벅.",
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
		id: "seg-19",
		lines: [
			{
				text: "은색 액체가 흘러나왔어.",
				chunks: [
					{
						content: "은색 액체가 흘러나왔어.",
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
				text: '"...과장님?" 지훈이 속삭였어.',
				chunks: [
					{
						content: '"...과장님?" 지훈이 속삭였어.',
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
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
				text: "민우는 비명을 지르며 복도로 뛰쳐나갔어. 다리에 힘이 풀렸어.",
				chunks: [
					{
						content: "민우는 비명을 지르며",
						soundEffects: [
							{
								tag: "MALE_SCREAM_TERROR",
							},
						],
					},
					{
						content: "복도로 뛰쳐나갔어.",
						soundEffects: [
							{
								tag: "FOOTSTEPS_TUNNEL",
							},
						],
					},
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
				text: "숨을 헐떡이며 다시 화장실로 들어갔어. 지훈은 세면대 앞 바닥에 쓰러져 있었어. 눈물샘에서 은색 액체가 계속 흘러내리고 있었어.",
				chunks: [
					{
						content: "숨을 헐떡이며 다시 화장실로 들어갔어.",
						soundEffects: [
							{
								tag: "BREATH_HEAVY_PANIC",
							},
							{
								tag: "DOOR_OPEN",
							},
						],
					},
					{
						content: "지훈은 세면대 앞 바닥에 쓰러져 있었어.",
					},
					{
						content: "눈물샘에서 은색 액체가 계속 흘러내리고 있었어.",
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
			soundEffects: [
				{
					tag: "CITY_AMBIENCE_NIGHT",
					status: "stop",
				},
				{
					tag: "DRONE_INDUSTRIAL_ABYSS",
					status: "stop",
				},
				{
					tag: "ROOMTONE_FLUORESCENT_BUZZ",
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
		id: "seg-21",
		lines: [
			{
				text: '민우는 떨리는 손으로 119에 전화했어. "사람이... 화장실에..."',
				chunks: [
					{
						content: "민우는 떨리는 손으로 119에 전화했어.",
						soundEffects: [
							{
								tag: "BREATH_SHAKY_PANIC",
							},
						],
					},
					{
						content: '"사람이... 화장실에..."',
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "구급차가 왔어. 하지만 지훈은 이송 중에 사망했어.",
				chunks: [
					{
						content: "구급차가 왔어.",
					},
					{
						content: "하지만 지훈은 이송 중에 사망했어.",
					},
				],
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
				{
					tag: "MUSIC_VOID_LAMENT",
					status: "start",
				},
				{
					tag: "ACCIDENT_SCENE_AMBIENCE",
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
		id: "seg-22",
		lines: [
			{
				text: "다음 날. 경찰이 CCTV를 확인했어. 근데 이상한 게 있었어.",
				chunks: [
					{
						content: "다음 날. 경찰이 CCTV를 확인했어. ",
						soundEffects: [
							{
								tag: "KEYBOARD_TYPING",
							},
						],
					},
					{
						content: "근데 이상한 게 있었어.",
						textEffects: ["GLITCH"],
						soundEffects: [
							{
								tag: "AUDIO_RESUME_WITH_NOISE",
							},
						],
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
				text: "전날 밤 10시 이후, 화장실에 들어간 사람이 아무도 없었던 거야. 민우의 진술과 완전히 달랐어.",
				chunks: [
					{
						content:
							"전날 밤 10시 이후, 화장실에 들어간 사람이 아무도 없었던 거야.",
					},
					{
						content: "민우의 진술과 완전히 달랐어.",
						textEffects: ["TEXT_SCRAMBLE_GLITCH"],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "부검 결과는 더 이상했어. 체내에서 미상의 화학물질이 검출됐어.",
				chunks: [
					{
						content: "부검 결과는 더 이상했어.",
					},
					{
						content: "체내에서 미상의 화학물질이 검출됐어.",
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
					tag: "MUSIC_DEDUCTION_SUSPENSE",
					status: "start",
				},
				{
					tag: "MUSIC_DEDUCTION_SUSPENSE",
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
				text: '민우는 혼란스러웠어. "내가 본 게 환상이었나? 아니면 CCTV가 고장난 건가?"',
				chunks: [
					{
						content: "민우는 혼란스러웠어.",
					},
					{
						content: '"내가 본 게 환상이었나? 아니면 CCTV가 고장난 건가?"',
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
				text: "박지훈의 장례식. 민우는 조문을 갔어. 유가족이 그를 이상하게 쳐다봤어.",
				chunks: [
					{
						content: "박지훈의 장례식. 민우는 조문을 갔어.",
					},
					{
						content: "유가족이 그를 이상하게 쳐다봤어.",
						textEffects: ["JITTER"],
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
				text: '"당신이 첫 발견자라면서요?" 어머니가 말했어.',
				chunks: [
					{
						content: '"당신이 첫 발견자라면서요?"',
						textEffects: ["STYLE_ITALIC"],
					},
					{
						content: " 어머니가 말했어.",
					},
				],
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
		id: "seg-24",
		lines: [
			{
				text: "그날 밤. 민우는 자신의 책상 서랍을 열었어.",
				chunks: [
					{
						content: "그날 밤. 민우는 자신의 책상 서랍을 열었어.",
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
			{
				text: "낯선 물건들이 있었어. 비닐장갑. 주사기 바늘 캡.",
				chunks: [
					{
						content: "낯선 물건들이 있었어. 비닐장갑. 주사기 바늘 캡.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: '"이건 내 게 아닌데..." 민우는 황급히 쓰레기통에 버렸어.',
				chunks: [
					{
						content: '"이건 내 게 아닌데..."',
						textEffects: ["STYLE_ITALIC"],
					},
					{
						content: " 민우는 황급히 쓰레기통에 버렸어.",
					},
				],
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
				{
					tag: "DRONE_STRINGS_DISCORDANT",
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
				text: "그날 밤 악몽을 꿨어. 그가 박지훈의 얼굴에 무언가를 바르고 있는 장면.",
				chunks: [
					{
						content: "그날 밤 악몽을 꿨어. ",
					},
					{
						content: "그가 박지훈의 얼굴에 무언가를 바르고 있는 장면.",
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
				text: "깨어났을 때는 기억나지 않았어. 민우는 두통약을 먹으며 출근했어. 손톱 밑이 검게 변해 있었어.",
				chunks: [
					{
						content: "깨어났을 때는 기억나지 않았어.",
						soundEffects: [
							{
								tag: "HIGH_PITCH_RINGING_EARS",
							},
						],
					},
					{
						content:
							" 민우는 두통약을 먹으며 출근했어. 손톱 밑이 검게 변해 있었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: '"펜 잉크가 묻었겠지." 그는 그렇게 생각했어.',
				chunks: [
					{
						content: '"펜 잉크가 묻었겠지."',
						textEffects: ["STYLE_ITALIC"],
					},
					{
						content: " 그는 그렇게 생각했어.",
					},
				],
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
					tag: "DRONE_AMORPHOUS_ENTITY",
					status: "start",
				},
				{
					tag: "DRONE_AMORPHOUS_ENTITY",
					status: "stop",
				},
			],
			visualEffects: [],
		},
	},
	{
		id: "seg-26",
		lines: [
			{
				text: "7월 15일. 김선영 과장이 지하 주차장 B3구역에 주차했어. 민우가 그걸 알게 됐어.",
				chunks: [
					{
						content:
							"7월 15일. 김선영 과장이 지하 주차장 B3구역에 주차했어. 민우가 그걸 알게 됐어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: '"선영씨, B3구역은 위험해요. 규칙을..." "무슨 소리예요? 거기가 제 자리인데요." 선영이 대답했어.',
				chunks: [
					{
						content: '"선영씨, B3구역은 위험해요. 규칙을..."',
						textEffects: ["STYLE_ITALIC"],
					},
					{
						content: ' "무슨 소리예요? 거기가 제 자리인데요."',
						textEffects: ["STYLE_ITALIC"],
					},
					{
						content: " 선영이 대답했어.",
					},
				],
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
			],
			visualEffects: [],
		},
	},
	{
		id: "seg-27",
		lines: [
			{
				text: "그날 밤 10시. 지하에서 차 경보음이 울렸어.",
				chunks: [
					{
						content: "그날 밤 10시. 지하에서 차 경보음이 울렸어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
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
				text: "삐이이이익!",
				chunks: [
					{
						content: "삐이이이익!",
						soundEffects: [
							{
								tag: "ALARM_BLARING_GENERIC",
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
			soundEffects: [
				{
					tag: "DRONE_HESITATION_SUSPENSE",
					status: "stop",
				},
			],
			visualEffects: [],
		},
	},
	{
		id: "seg-29",
		lines: [
			{
				text: '민우는 "선영씨를 구해야 해"라는 생각에 지하로 뛰어갔어. 왜 그녀가 위험하다고 확신하는지는 설명할 수 없었어.',
				chunks: [
					{
						content:
							'민우는 "선영씨를 구해야 해"라는 생각에 지하로 뛰어갔어. 왜 그녀가 위험하다고 확신하는지는 설명할 수 없었어.',
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "엘리베이터 문이 열렸어. 지하 3층. B3구역은 어두웠어. 형광등 절반이 꺼져 있었어.",
				chunks: [
					{
						content:
							"엘리베이터 문이 열렸어. 지하 3층. B3구역은 어두웠어. 형광등 절반이 꺼져 있었어.",
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
			{
				text: "선영의 차가 보였어. 경보음이 계속 울리고 있었어.",
				chunks: [
					{
						content: "선영의 차가 보였어. ",
						textEffects: [],
					},
					{
						content: "경보음이 계속 울리고 있었어.",
						soundEffects: [
							{
								tag: "CAR_HORN_STUCK",
							},
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
			url: "goedamjip-story-image/68ed980e87dfe558b9e5f000/seg-29",
			type: "background",
			sustain_until: "seg-43",
		},
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
				text: "민우가 차에 가까이 갔어. 운전석 문이 반쯤 열려 있었어. 안을 들여다봤어. 비어있었어.",
				chunks: [
					{
						content: "민우가 차에 가까이 갔어.",
						soundEffects: [
							{
								tag: "FOOTSTEPS_TUNNEL",
							},
						],
					},
					{
						content:
							"운전석 문이 반쯤 열려 있었어. 안을 들여다봤어. 비어있었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: '"아무도 없네..." 민우가 중얼거렸어. 차 옆을 돌아가려는 순간이었어.',
				chunks: [
					{
						content: '"아무도 없네..." 민우가 중얼거렸어.',
					},
					{
						content: "차 옆을 돌아가려는 순간이었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
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
				text: "드득.",
				chunks: [
					{
						content: "드득.",
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
		id: "seg-32",
		lines: [
			{
				text: "차 밑에서 소리가 났어. 민우는 허리를 굽혀 차 밑을 봤어.",
				chunks: [
					{
						content: "차 밑에서 소리가 났어.",
					},
					{
						content: "민우는 허리를 굽혀 차 밑을 봤어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
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
				text: "김선영의 얼굴이 거꾸로 그를 쳐다보고 있었어. 30cm 거리에서.",
				chunks: [
					{
						content:
							"김선영의 얼굴이 거꾸로 그를 쳐다보고 있었어. 30cm 거리에서.",
					},
				],
				preLineEffects: {
					image: {
						url: "goedamjip-story-image/68ed980e87dfe558b9e5f000/seg-33",
						type: "jumpscare",
						sustain_until: "seg-33",
					},
					soundEffects: [
						{
							tag: "HEARTBEAT_SUDDEN_LOUD",
						},
					],
					visualEffects: ["SCREEN_SHAKE"],
				},
			},
			{
				text: "그녀의 다리뼈가 차축과 융합되어 있었어. 대퇴골이 피부를 뚫고 나와 차축과 일체화돼 있었어.",
				chunks: [
					{
						content: "그녀의 다리뼈가 차축과 융합되어 있었어.",
						soundEffects: [
							{
								tag: "BONE_CREAK",
							},
						],
					},
					{
						content: "대퇴골이 피부를 뚫고 나와 차축과 일체화돼 있었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "갈비뼈가 차체 철판 사이로 자라 들어가 있었어. 용접된 것처럼 붙어 있었어.",
				chunks: [
					{
						content: "갈비뼈가 차체 철판 사이로 자라 들어가 있었어.",
						soundEffects: [
							{
								tag: "METAL_CREAK",
							},
						],
					},
					{
						content: "용접된 것처럼 붙어 있었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "손가락은 핸들을 쥔 채로. 손잡이 고무와 피부가 녹아 구분이 안 됐어.",
				chunks: [
					{
						content: "손가락은 핸들을 쥔 채로.",
					},
					{
						content: "손잡이 고무와 피부가 녹아 구분이 안 됐어.",
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
		id: "seg-34",
		lines: [
			{
				text: '선영이 입을 열었어. "...민우씨가... 민우씨가 했잖아요..."',
				chunks: [
					{
						content:
							'선영이 입을 열었어. "...민우씨가... 민우씨가 했잖아요..."',
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "민우는 뒤로 넘어졌어. 바닥에 손바닥을 찧었어. 비명을 질렀어.",
				chunks: [
					{
						content: "민우는 뒤로 넘어졌어. 바닥에 손바닥을 찧었어.",
					},
					{
						content: "비명을 질렀어.",
						soundEffects: [
							{
								tag: "MALE_PAIN_CRY",
							},
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
				text: "차에서 기어서 멀어졌어. 다시 봤어. 선영의 몸에서 소리가 났어.",
				chunks: [
					{
						content: "차에서 기어서 멀어졌어.",
						soundEffects: [
							{
								tag: "BREATH_HEAVY_PANIC",
							},
						],
					},
					{
						content: "다시 봤어. 선영의 몸에서 소리가 났어.",
					},
				],
				preLineEffects: {
					image: {
						url: "goedamjip-story-image/68ed980e87dfe558b9e5f000/seg-35",
						type: "overlay",
						sustain_until: "seg-37",
					},
					soundEffects: [
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
		id: "seg-36",
		lines: [
			{
				text: "뿌직.",
				chunks: [
					{
						content: "뿌직.",
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
		id: "seg-37",
		lines: [
			{
				text: "척추가 테이블 다리와 융합되기 시작했어.",
				chunks: [
					{
						content: "척추가 테이블 다리와 ",
					},
					{
						content: "융합되기 시작했어.",
						soundEffects: [
							{
								tag: "BONE_CREAK",
							},
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
				text: "경비원이 달려왔어. 구급차가 왔어. 하지만 선영을 차에서 분리하는 건 불가능했어. 그녀는 차와 하나가 되어 있었어.",
				chunks: [
					{
						content: "경비원이 달려왔어. 구급차가 왔어.",
					},
					{
						content:
							"하지만 선영을 차에서 분리하는 건 불가능했어. 그녀는 차와 하나가 되어 있었어.",
					},
				],
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
				{
					tag: "DRONE_STRINGS_DISCORDANT",
					status: "stop",
				},
				{
					tag: "ACCIDENT_SCENE_AMBIENCE",
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
		id: "seg-38",
		lines: [
			{
				text: "형사 이강민이 민우를 조사했어.",
				chunks: [
					{
						content: "형사 이강민이 민우를 조사했어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: '"한 과장님, 어떻게 김선영씨가 지하에 있다는 걸 알았죠?" "차 경보음을 들었습니다." 민우가 대답했어.',
				chunks: [
					{
						content: '"한 과장님, 어떻게 김선영씨가 지하에 있다는 걸 알았죠?"',
					},
					{
						content: '"차 경보음을 들었습니다." 민우가 대답했어.',
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "근데 경비 기록에는 경보음이 울린 적이 없었어.",
				chunks: [
					{
						content: "근데 경비 기록에는 경보음이 울린 적이 없었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "또 CCTV 사각지대였어. 하지만 이번엔 민우가 엘리베이터로 지하에 내려가는 장면이 찍혔어.",
				chunks: [
					{
						content: "또 CCTV 사각지대였어.",
					},
					{
						content:
							"하지만 이번엔 민우가 엘리베이터로 지하에 내려가는 장면이 찍혔어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: '형사가 의심하기 시작했어. "한 과장님, 이번에도 첫 발견자시네요."',
				chunks: [
					{
						content: "형사가 의심하기 시작했어.",
					},
					{
						content: '"한 과장님, 이번에도 첫 발견자시네요."',
					},
				],
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
				{
					tag: "DRONE_SURROUNDED_THREAT",
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
				text: "격리실. 현재 시점. 박현정 간호사가 민우에게 물었어.",
				chunks: [
					{
						content: "격리실. 현재 시점. 박현정 간호사가 민우에게 물었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "\"한 씨, 김선영씨가 '민우씨가 했다'고 말했다면서요?\"",
				chunks: [
					{
						content: "\"한 씨, 김선영씨가 '민우씨가 했다'고 말했다면서요?\"",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: '민우는 고개를 저었어. "아니에요. 그건 화학물질 때문에 정신이 나간 거예요. 저주가 그녀를 미치게 만든 거라고요."',
				chunks: [
					{
						content: "민우는 고개를 저었어.",
					},
					{
						content:
							'"아니에요. 그건 화학물질 때문에 정신이 나간 거예요. 저주가 그녀를 미치게 만든 거라고요."',
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "간호사는 기록을 남겼어. \"환자는 여전히 자신의 행동을 '저주'로 외재화하고 있음.\"",
				chunks: [
					{
						content: "간호사는 기록을 남겼어.",
						soundEffects: [
							{
								tag: "PENCIL_WRITING",
							},
						],
					},
					{
						content:
							"\"환자는 여전히 자신의 행동을 '저주'로 외재화하고 있음.\"",
					},
				],
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
					tag: "DRONE_BLEAK_DESPAIR",
					status: "start",
				},
				{
					tag: "DRONE_BLEAK_DESPAIR",
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
		id: "seg-40",
		lines: [
			{
				text: "7월 20일. 민우는 심리상담을 받으러 갔어. 회사 인사팀이 권유한 거였어.",
				chunks: [
					{
						content:
							"7월 20일. 민우는 심리상담을 받으러 갔어. 회사 인사팀이 권유한 거였어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: '"최근 기억이 끊기는 경험을 하셨나요?" 상담사가 물었어.',
				chunks: [
					{
						content: '"최근 기억이 끊기는 경험을 하셨나요?" 상담사가 물었어.',
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "민우는 부정하려다가 문득 떠올랐어. 지난주 수요일. 저녁 7시부터 11시까지의 기억이 없었어. 그 시간에 뭘 했는지 전혀 모르겠어.",
				chunks: [
					{
						content: "민우는 부정하려다가 문득 떠올랐어.",
					},
					{
						content: "지난주 수요일. 저녁 7시부터 11시까지의 기억이 없었어.",
						textEffects: ["INK_REVEAL"],
					},
					{
						content: "그 시간에 뭘 했는지 전혀 모르겠어.",
					},
				],
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
			visualEffects: [
				{
					tag: "SCREEN_BLUR",
					status: "start",
				},
			],
		},
	},
	{
		id: "seg-41",
		lines: [
			{
				text: '"스트레스성 해리 증상일 수 있습니다." 상담사가 말했어.',
				chunks: [
					{
						content: '"스트레스성 해리 증상일 수 있습니다." 상담사가 말했어.',
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: '"피곤해서 그런 것 뿐이에요." 민우가 우겼어.',
				chunks: [
					{
						content: '"피곤해서 그런 것 뿐이에요." 민우가 우겼어.',
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "그날 밤. 민우는 스마트폰 사진첩을 확인했어. 7월 17일 밤 10시 32분에 찍힌 사진이 있었어. 10층 창고. NX-7 샘플 박스를 든 자신의 손.",
				chunks: [
					{
						content: "그날 밤. 민우는 스마트폰 사진첩을 확인했어.",
					},
					{
						content:
							"7월 17일 밤 10시 32분에 찍힌 사진이 있었어. 10층 창고. NX-7 샘플 박스를 든 자신의 손.",
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
				text: '"내가 왜 이걸 찍었지?" 민우는 사진을 삭제했어.',
				chunks: [
					{
						content: '"내가 왜 이걸 찍었지?"',
					},
					{
						content: "민우는 사진을 삭제했어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
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
				text: "하지만 삭제 후에도 이미지가 머릿속에 남았어. 박스를 여는 손. 주사기를 채우는 손.",
				chunks: [
					{
						content: "하지만 삭제 후에도 이미지가 머릿속에 남았어.",
					},
					{
						content: "박스를 여는 손. 주사기를 채우는 손.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "두통이 왔어. 귀에서 이명이 들렸어.",
				chunks: [
					{
						content: "두통이 왔어. 귀에서 이명이 들렸어.",
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
		],
		background: null,
		segmentEffects: {
			soundEffects: [
				{
					tag: "DRONE_FEAR_PSYCHOSIS",
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
		id: "seg-43",
		lines: [
			{
				text: "7월 25일. 인사팀 이수진이 12층 회의실 C에서 늦게까지 일하고 있었어. 프레젠테이션 자료를 준비하고 있었어.",
				chunks: [
					{
						content:
							"7월 25일. 인사팀 이수진이 12층 회의실 C에서 늦게까지 일하고 있었어. 프레젠테이션 자료를 준비하고 있었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: '민우가 우연히 그녀를 봤어. "수진씨, 12층 회의실 C는 밤에 사용하면 안 돼요. 규칙을..."',
				chunks: [
					{
						content:
							'민우가 우연히 그녀를 봤어. "수진씨, 12층 회의실 C는 밤에 사용하면 안 돼요. 규칙을..."',
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: '"오빠, 그 이상한 규칙 얘기 그만해요. 전 바빠요." 수진이 대답했어.',
				chunks: [
					{
						content:
							'"오빠, 그 이상한 규칙 얘기 그만해요. 전 바빠요." 수진이 대답했어.',
					},
				],
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
		id: "seg-44",
		lines: [
			{
				text: '민우는 자리로 돌아갔어. 하지만 불안감이 커졌어. 오후 11시. "수진씨를 확인해야겠다."',
				chunks: [
					{
						content:
							'민우는 자리로 돌아갔어. 하지만 불안감이 커졌어. 오후 11시. "수진씨를 확인해야겠다."',
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "민우는 12층으로 올라갔어. 복도는 조용했어. 형광등이 깜빡거렸어.",
				chunks: [
					{
						content: "민우는 12층으로 올라갔어.",
						soundEffects: [
							{
								tag: "FOOTSTEPS_TUNNEL",
							},
						],
					},
					{
						content: "복도는 조용했어. 형광등이 깜빡거렸어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "회의실 C의 문이 반쯤 열려 있었어. 안에서 이상한 소리가 들렸어.",
				chunks: [
					{
						content: "회의실 C의 문이 반쯤 열려 있었어.",
					},
					{
						content: "안에서 이상한 소리가 들렸어.",
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
		background: {
			url: "goedamjip-story-image/68ed980e87dfe558b9e5f000/seg-44",
			type: "background",
			sustain_until: "seg-46",
		},
		segmentEffects: {
			soundEffects: [
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
		id: "seg-45",
		lines: [
			{
				text: "드드득...",
				chunks: [
					{
						content: "드드득...",
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
		id: "seg-46",
		lines: [
			{
				text: "찌지직...",
				chunks: [
					{
						content: "찌지직...",
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
			soundEffects: [
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
		id: "seg-47",
		lines: [
			{
				text: "민우가 문을 밀고 들어갔어. 어두웠어. 이수진이 회의용 의자에 앉아 있었어.",
				chunks: [
					{
						content: "민우가 문을 밀고 들어갔어.",
						soundEffects: [
							{
								tag: "DOOR_OPEN",
							},
						],
					},
					{
						content: "어두웠어. 이수진이 회의용 의자에 앉아 있었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "근데 뭔가 이상했어. 그녀의 팔이 너무 길었어.",
				chunks: [
					{
						content: "근데 뭔가 이상했어. 그녀의 팔이 너무 길었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: '"수진씨, 괜찮아요?" 민우가 조심스럽게 불렀어. 대답이 없었어. "자고 있나?"',
				chunks: [
					{
						content:
							'"수진씨, 괜찮아요?" 민우가 조심스럽게 불렀어. 대답이 없었어. "자고 있나?"',
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
			url: "goedamjip-story-image/68ed980e87dfe558b9e5f000/seg-47",
			type: "background",
			sustain_until: "seg-53",
		},
		segmentEffects: {
			soundEffects: [
				{
					tag: "DRONE_AMORPHOUS_ENTITY",
					status: "start",
				},
				{
					tag: "DRONE_AMORPHOUS_ENTITY",
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
		id: "seg-48",
		lines: [
			{
				text: "민우는 조명 스위치를 켰어.",
				chunks: [
					{
						content: "민우는 조명 스위치를 켰어.",
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
		id: "seg-49",
		lines: [
			{
				text: "이수진의 손가락뼈가 늘어나 있었어. 의자 다리처럼 변형되어 바닥에 박혀 있었어.",
				chunks: [
					{
						content:
							"이수진의 손가락뼈가 늘어나 있었어. 의자 다리처럼 변형되어 바닥에 박혀 있었어.",
					},
				],
				preLineEffects: {
					image: {
						url: "goedamjip-story-image/68ed980e87dfe558b9e5f000/seg-49",
						type: "overlay",
						sustain_until: "seg-53",
					},
					soundEffects: [
						{
							tag: "WOOD_SPLINTERING",
						},
						{
							tag: "BONE_CREAK",
						},
					],
					visualEffects: [],
				},
			},
			{
				text: "입에서 목재 섬유 같은 조직이 자라나와 있었어. 혀와 치아를 밀어내며 테이블 표면에 뿌리를 내리고 있었어.",
				chunks: [
					{
						content:
							"입에서 목재 섬유 같은 조직이 자라나와 있었어. 혀와 치아를 밀어내며 테이블 표면에 뿌리를 내리고 있었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "머리카락은 딱딱해져서 철제 의자 등받이와 엮여 있었어.",
				chunks: [
					{
						content: "머리카락은 딱딱해져서 철제 의자 등받이와 엮여 있었어.",
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
		id: "seg-50",
		lines: [
			{
				text: "수진이 눈을 움직였어. 민우를 봤어. 눈물이 흘렀어.",
				chunks: [
					{
						content: "수진이 눈을 움직였어.",
					},
					{
						content: "민우를 봤어.",
					},
					{
						content: "눈물이 흘렀어.",
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
				text: '"오빠... 오빠가... 나한테... 주사... 놨잖아..."',
				chunks: [
					{
						content: '"오빠... 오빠가... 나한테... 주사... 놨잖아..."',
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
				text: '민우는 비명을 질렀어. "아니야, 나는 안 했어!"',
				chunks: [
					{
						content: "민우는 비명을 질렀어.",
						soundEffects: [
							{
								tag: "MALE_SCREAM_TERROR",
							},
						],
					},
					{
						content: '"아니야, 나는 안 했어!"',
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
					tag: "DRONE_SUFFOCATE_DREAD",
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
				text: "그런데. 자신의 손을 봤어. 주사기 자국이 있었어. 언제 생긴 거지?",
				chunks: [
					{
						content: "그런데.",
					},
					{
						content: "자신의 손을 봤어.",
					},
					{
						content: "주사기 자국이 있었어.",
					},
					{
						content: "언제 생긴 거지?",
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
				text: "수진의 몸에서 소리가 났어.",
				chunks: [
					{
						content: "수진의 몸에서 소리가 났어.",
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
		id: "seg-52",
		lines: [
			{
				text: "뿌직.",
				chunks: [
					{
						content: "뿌직.",
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
		id: "seg-53",
		lines: [
			{
				text: "척추가 테이블 다리와 융합되기 시작했어.",
				chunks: [
					{
						content: "척추가 테이블 다리와 융합되기 시작했어.",
						soundEffects: [
							{
								tag: "BONE_CREAK",
							},
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
				text: "민우는 휴대폰을 꺼냈어. 떨리는 손으로 119를 눌렀어.",
				chunks: [
					{
						content: "민우는 휴대폰을 꺼냈어.",
					},
					{
						content: "떨리는 손으로 119를 눌렀어.",
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
				text: '"저기... 회의실에... 사람이... 의자가..." 말이 제대로 나오지 않았어.',
				chunks: [
					{
						content:
							'"저기... 회의실에... 사람이... 의자가..." 말이 제대로 나오지 않았어.',
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
					tag: "DRONE_SUFFOCATE_DREAD",
					status: "stop",
				},
			],
			visualEffects: [],
		},
	},
	{
		id: "seg-54",
		lines: [
			{
				text: "구조대가 도착했을 때. 이수진은 이미 사망해 있었어.",
				chunks: [
					{
						content: "구조대가 도착했을 때.",
					},
					{
						content: "이수진은 이미 사망해 있었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: '법의학자가 말했어. "생전에 극심한 고통을 겪었을 겁니다."',
				chunks: [
					{
						content: "법의학자가 말했어.",
					},
					{
						content: '"생전에 극심한 고통을 겪었을 겁니다."',
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: '형사 이강민이 다시 민우를 조사했어. "한 과장님, 이번에도 첫 발견자시네요. 세 번째입니다."',
				chunks: [
					{
						content: "형사 이강민이 다시 민우를 조사했어.",
					},
					{
						content: '"한 과장님, 이번에도 첫 발견자시네요. 세 번째입니다."',
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: '"저는 그저... 우연히..." 민우는 대답했지만. 자신도 확신이 없었어.',
				chunks: [
					{
						content: '"저는 그저... 우연히..."',
					},
					{
						content: "민우는 대답했지만.",
					},
					{
						content: "자신도 확신이 없었어.",
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
			url: "goedamjip-story-image/68ed980e87dfe558b9e5f000/seg-54",
			type: "background",
			sustain_until: "seg-54",
		},
		segmentEffects: {
			soundEffects: [
				{
					tag: "DRONE_SURROUNDED_THREAT",
					status: "start",
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
		id: "seg-55",
		lines: [
			{
				text: "7월 26일 새벽. 민우는 악몽을 꿨어. 아니. 악몽이 아니었어. 기억이었어.",
				chunks: [
					{
						content: "7월 26일 새벽. 민우는 악몽을 꿨어.",
					},
					{
						content: "아니. 악몽이 아니었어. 기억이었어.",
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
				text: "어제 밤 9시. 12층 회의실 C. 민우가 들어가는 게 보였어. 이수진이 노트북 앞에 앉아 있었어.",
				chunks: [
					{
						content: "어제 밤 9시. 12층 회의실 C.",
					},
					{
						content: "민우가 들어가는 게 보였어.",
					},
					{
						content: "이수진이 노트북 앞에 앉아 있었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: '"수진씨, 잠깐 이것 좀 봐줄래요?" 민우가 말했어. 수진이 고개를 돌렸어.',
				chunks: [
					{
						content: '"수진씨, 잠깐 이것 좀 봐줄래요?"',
					},
					{
						content: "민우가 말했어. 수진이 고개를 돌렸어.",
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
			url: "goedamjip-story-image/68ed980e87dfe558b9e5f000/seg-55",
			type: "background",
			sustain_until: "seg-58",
		},
		segmentEffects: {
			soundEffects: [
				{
					tag: "DRONE_SUFFOCATE_DREAD",
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
		id: "seg-56",
		lines: [
			{
				text: "그 순간. 민우가 그녀의 목에 주사기를 꽂았어.",
				chunks: [
					{
						content: "그 순간.",
					},
					{
						content: "민우가 그녀의 목에 주사기를 꽂았어.",
					},
				],
				preLineEffects: {
					image: {
						url: "goedamjip-story-image/68ed980e87dfe558b9e5f000/seg-56",
						type: "overlay",
						sustain_until: "seg-56",
					},
					soundEffects: [
						{
							tag: "HIGH_PITCH_RINGING_EARS",
						},
					],
					visualEffects: ["SCREEN_SHAKE"],
				},
			},
			{
				text: "수진이 비명을 지르려 했지만. NX-7이 신경을 마비시켜 소리가 나오지 않았어.",
				chunks: [
					{
						content: "수진이 비명을 지르려 했지만.",
					},
					{
						content: "NX-7이 신경을 마비시켜 소리가 나오지 않았어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "민우는 무표정하게 수진을 의자에 묶었어. 중얼거렸어.",
				chunks: [
					{
						content: "민우는 무표정하게 수진을 의자에 묶었어.",
						soundEffects: [
							{
								tag: "CLOTH_DRAGGING",
							},
						],
					},
					{
						content: "중얼거렸어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: '"규칙 3조를 어겼어. 12층 회의실 C를 밤에 사용하면 안 된다고 했잖아. 어겼으니까, 벌을 받아야 해."',
				chunks: [
					{
						content:
							'"규칙 3조를 어겼어. 12층 회의실 C를 밤에 사용하면 안 된다고 했잖아. 어겼으니까, 벌을 받아야 해."',
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
					tag: "DRONE_SUFFOCATE_DREAD",
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
		id: "seg-57",
		lines: [
			{
				text: '민우가 깨어났어. 온몸이 땀에 젖어 있었어. "꿈이었어. 그냥 꿈..."',
				chunks: [
					{
						content: "민우가 깨어났어.",
						soundEffects: [
							{
								tag: "BREATH_HEAVY_PANIC",
							},
						],
					},
					{
						content: "온몸이 땀에 젖어 있었어.",
					},
					{
						content: '"꿈이었어. 그냥 꿈..."',
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "하지만 옷장에서 어제 입었던 셔츠를 꺼냈어. 소매에 혈흔이 묻어 있었어.",
				chunks: [
					{
						content: "옷장을 열고 셔츠를 꺼냈어.",
						soundEffects: [
							{
								tag: "DOOR_OPEN",
							},
						],
					},
					{
						content: "소매에 혈흔이 묻어 있었어.",
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
				text: "민우는 셔츠를 쓰레기봉투에 넣었어. 집 밖 쓰레기장에 버렸어.",
				chunks: [
					{
						content: "민우는 셔츠를 쓰레기봉투에 넣었어.",
					},
					{
						content: "집 밖 쓰레기장에 버렸어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: '"아니야, 내가 할 리 없어. 내가 왜 수진씨를..."',
				chunks: [
					{
						content: '"아니야, 내가 할 리 없어.',
						textEffects: ["JITTER"],
					},
					{
						content: ' 내가 왜 수진씨를..."',
					},
				],
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
					tag: "ROOMTONE_EMPTY_NEUTRAL",
					status: "start",
				},
				{
					tag: "DRONE_HESITATION_SUSPENSE",
					status: "stop",
				},
				{
					tag: "ROOMTONE_EMPTY_NEUTRAL",
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
		id: "seg-58",
		lines: [
			{
				text: "8월 1일. 연구개발팀 최준혁 차장이 민우를 찾아왔어.",
				chunks: [
					{
						content: "8월 1일.",
					},
					{
						content: "연구개발팀 최준혁 차장이 민우를 찾아왔어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: '"한 과장, 10층 샘플 창고 출입 기록 좀 확인하고 싶은데요. NX-7 재고가 안 맞아서요."',
				chunks: [
					{
						content: '"출입 기록 좀 확인하고 싶은데요."',
						soundEffects: [
							{
								tag: "KEYBOARD_TYPING",
							},
						],
					},
					{
						content: ' "NX-7 재고가 안 맞아서요."',
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: '민우의 표정이 굳었어. "NX-7요? 그건... 폐기 예정 아니었나요?"',
				chunks: [
					{
						content: "민우의 표정이 굳었어.",
					},
					{
						content: '"NX-7요? 그건... 폐기 예정 아니었나요?"',
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: '"맞아요. 근데 6월 이후로 계속 조금씩 줄어들고 있어요. 혹시 과장님이..."',
				chunks: [
					{
						content: '"맞아요. 근데 6월 이후로 계속 조금씩 줄어들고 있어요."',
					},
					{
						content: ' "혹시 과장님이..."',
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
				text: '"저는 모릅니다." 민우는 자리를 떴어.',
				chunks: [
					{
						content: '"저는 모릅니다."',
						textEffects: ["JITTER"],
					},
					{
						content: " 민우는 자리를 떴어.",
					},
				],
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
				{
					tag: "ROOMTONE_FLUORESCENT_BUZZ",
					status: "start",
				},
				{
					tag: "DRONE_SURROUNDED_THREAT",
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
		id: "seg-59",
		lines: [
			{
				text: "그날 밤. 최준혁은 10층 복사기 앞에서 발견됐어.",
				chunks: [
					{
						content: "그날 밤.",
					},
					{
						content: "최준혁은 10층 복사기 앞에서 발견됐어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "8월 2일 새벽 6시. 경비원이 12층 옥상 문이 열려 있는 걸 발견했어.",
				chunks: [
					{
						content: "8월 2일 새벽 6시.",
					},
					{
						content: "경비원이 12층 옥상 문이 열려 있는 걸 발견했어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "옥상에 한민우가 서 있었어. 셔츠는 혈흔으로 얼룩져 있었어. 손에는 빈 주사기와 NX-7 바이알이 들려 있었어.",
				chunks: [
					{
						content: "옥상에 한민우가 서 있었어.",
					},
					{
						content: "셔츠는 혈흔으로 얼룩져 있었어.",
					},
					{
						content: "손에는 빈 주사기와 NX-7 바이알이 들려 있었어.",
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
			url: "goedamjip-story-image/68ed980e87dfe558b9e5f000/seg-59",
			type: "background",
			sustain_until: "seg-60",
		},
		segmentEffects: {
			soundEffects: [
				{
					tag: "DRONE_BLEAK_DESPAIR",
					status: "start",
				},
				{
					tag: "CITY_AMBIENCE_NIGHT",
					status: "start",
				},
				{
					tag: "WIND_HEAVY",
					status: "start",
				},
			],
			visualEffects: [],
		},
	},
	{
		id: "seg-60",
		lines: [
			{
				text: '민우는 멍한 표정으로 하늘을 봤어. "나는 규칙을 지켰는데... 왜 계속 일어나는 거지..."',
				chunks: [
					{
						content: "민우는 멍한 표정으로 하늘을 봤어.",
					},
					{
						content: '"나는 규칙을 지켰는데... 왜 계속 일어나는 거지..."',
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
				text: '"한 과장님!" 경비원이 불렀어. 민우가 돌아봤어. 눈빛이 공허했어.',
				chunks: [
					{
						content: '"한 과장님!" 경비원이 불렀어.',
					},
					{
						content: "민우가 돌아봤어. 눈빛이 공허했어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: '"아, 안녕하세요. 저는... 여기서 뭐 하고 있었죠?"',
				chunks: [
					{
						content: '"아, 안녕하세요. 저는... 여기서 뭐 하고 있었죠?"',
					},
				],
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
					tag: "DRONE_BLEAK_DESPAIR",
					status: "stop",
				},
				{
					tag: "CITY_AMBIENCE_NIGHT",
					status: "stop",
				},
				{
					tag: "WIND_HEAVY",
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
				text: "경찰이 도착했어. 민우는 체포됐어. 저항하지 않았어.",
				chunks: [
					{
						content: "경찰이 도착했어.",
					},
					{
						content: "민우는 체포됐어. 저항하지 않았어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: '"제가 뭘 잘못했나요? 저는 규칙을 지키려고 했을 뿐인데..."',
				chunks: [
					{
						content:
							'"제가 뭘 잘못했나요? 저는 규칙을 지키려고 했을 뿐인데..."',
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
			url: "goedamjip-story-image/68ed980e87dfe558b9e5f000/seg-61",
			type: "background",
			sustain_until: "seg-65",
		},
		segmentEffects: {
			soundEffects: [
				{
					tag: "DRONE_SURROUNDED_THREAT",
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
		id: "seg-62",
		lines: [
			{
				text: "경찰 조사 기록에는 이렇게 나와 있어.",
				chunks: [
					{
						content: "경찰 조사 기록에는 이렇게 나와 있어.",
						textEffects: ["TYPEWRITER"],
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
				text: "한민우의 집 냉장고에서 NX-7 샘플 12개 발견. 모두 그의 지문이 묻어 있었어.",
				chunks: [
					{
						content: "한민우의 집 냉장고에서 NX-7 샘플 12개 발견.",
					},
					{
						content: "모두 그의 지문이 묻어 있었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "CCTV 영상 분석 결과. 민우가 '발견했다'고 주장한 시각보다 30분 전에 이미 현장에 있었어.",
				chunks: [
					{
						content: "CCTV 영상 분석 결과.",
					},
					{
						content:
							"민우가 '발견했다'고 주장한 시각보다 30분 전에 이미 현장에 있었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "네 명의 피해자 모두 체내에서 같은 화학물질 검출. 한민우가 훔친 NX-7이었어.",
				chunks: [
					{
						content: "네 명의 피해자 모두 체내에서 같은 화학물질 검출.",
					},
					{
						content: "한민우가 훔친 NX-7이었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
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
				text: "근데 이상한 건 말이야. 한민우는 끝까지 자신이 범인이라는 걸 믿지 않았어.",
				chunks: [
					{
						content: "근데 이상한 건 말이야.",
					},
					{
						content: "한민우는 끝까지 자신이 범인이라는 걸 믿지 않았어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: '정신과 의사가 그와 면담했어. "한 씨, 당신이 동료들에게 NX-7을 주입한 이유가 뭡니까?"',
				chunks: [
					{
						content: "정신과 의사가 그와 면담했어.",
					},
					{
						content: '"한 씨, 당신이 동료들에게 NX-7을 주입한 이유가 뭡니까?"',
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: '민우는 고개를 저었어. "제가 아니에요. 저주가 한 거예요. 규칙을 어긴 사람들에게 벌이 내려진 거라고요."',
				chunks: [
					{
						content: "민우는 고개를 저었어.",
					},
					{
						content: '"제가 아니에요. 저주가 한 거예요.',
						textEffects: ["PULSE_SLOW"],
					},
					{
						content: ' 규칙을 어긴 사람들에게 벌이 내려진 거라고요."',
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
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
				text: "의사는 증거 사진들을 보여줬어. CCTV에 찍힌 그의 모습. 지문이 묻은 주사기. 그의 집에서 발견된 NX-7 보관 냉장고.",
				chunks: [
					{
						content: "의사는 증거 사진들을 보여줬어. ",
					},
					{
						content:
							"CCTV에 찍힌 그의 모습. 지문이 묻은 주사기. 그의 집에서 발견된 NX-7 보관 냉장고.",
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
				text: '민우는 사진들을 보며 말했어. "이건... 조작된 거예요. 제가 이럴 리 없어요."',
				chunks: [
					{
						content: "민우는 사진들을 보며 말했어. ",
					},
					{
						content: '"이건... 조작된 거예요. 제가 이럴 리 없어요."',
						textEffects: ["JITTER"],
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
			{
				text: "하지만 목소리가 떨렸어. 내면 깊은 곳에서 진실이 올라오고 있었어.",
				chunks: [
					{
						content: "하지만 목소리가 떨렸어. ",
						soundEffects: [
							{
								tag: "HEARTBEAT_FAST",
							},
						],
					},
					{
						content: "내면 깊은 곳에서 진실이 올라오고 있었어.",
					},
				],
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
					tag: "ROOMTONE_FLUORESCENT_BUZZ",
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
				text: "자, 이제 진짜 이야기를 해줄게. 민우가 기억하지 못하는 진실.",
				chunks: [
					{
						content: "자, 이제 진짜 이야기를 해줄게. ",
					},
					{
						content: "민우가 기억하지 못하는 진실.",
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
					tag: "DRONE_FEAR_PSYCHOSIS",
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
				text: "2024년 6월 27일 밤 10시. 한민우는 박지훈이 화장실에 가는 걸 지켜봤어.",
				chunks: [
					{
						content: "2024년 6월 27일 밤 10시. ",
					},
					{
						content: "한민우는 박지훈이 화장실에 가는 걸 지켜봤어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "10층 창고에서 가져온 NX-7 바이알을 주머니에 넣었어. 화장실로 따라 들어갔어. 표정은 무표정했어. 해리 상태였어.",
				chunks: [
					{
						content: "10층 창고에서 가져온 NX-7 바이알을 주머니에 넣었어. ",
					},
					{
						content: "화장실로 따라 들어갔어.",
						soundEffects: [
							{
								tag: "DOOR_OPEN",
							},
						],
					},
					{
						content: "표정은 무표정했어. ",
					},
					{
						content: "해리 상태였어.",
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
			url: "goedamjip-story-image/68ed980e87dfe558b9e5f000/seg-66",
			type: "background",
			sustain_until: "seg-69",
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
		id: "seg-67",
		lines: [
			{
				text: '지훈이 소변을 보고 손을 씻으려 할 때. 민우가 뒤에서 다가갔어. "지훈씨."',
				chunks: [
					{
						content: "지훈이 소변을 보고 손을 씻으려 할 때. ",
					},
					{
						content: "민우가 뒤에서 다가갔어.",
						soundEffects: [
							{
								tag: "FOOTSTEP_LIGHT_TAPS",
							},
						],
					},
					{
						content: '"지훈씨."',
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: '지훈이 돌아봤어. "아, 과장님." 그 순간. 민우가 그의 얼굴에 NX-7을 도포한 화장솜을 덮었어.',
				chunks: [
					{
						content: "지훈이 돌아봤어. ",
					},
					{
						content: '"아, 과장님." 그 순간. ',
					},
					{
						content: "민우가 그의 얼굴에 NX-7을 도포한 화장솜을 덮었어.",
					},
				],
				preLineEffects: {
					image: {
						url: "goedamjip-story-image/68ed980e87dfe558b9e5f000/seg-67",
						type: "overlay",
						sustain_until: "seg-68",
					},
					soundEffects: [
						{
							tag: "MUSIC_STINGER_PIANO_HIGH_DISCORDANT",
						},
					],
					visualEffects: [],
				},
			},
			{
				text: "지훈이 저항했지만. 민우는 힘으로 제압했어.",
				chunks: [
					{
						content: "지훈이 저항했지만. ",
						soundEffects: [
							{
								tag: "BREATH_HEAVY_PANIC",
							},
						],
					},
					{
						content: "민우는 힘으로 제압했어.",
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
		id: "seg-68",
		lines: [
			{
				text: '민우는 중얼거렸어. "규칙 1조. 밤 10시 이후 화장실 거울을 보지 마라. 넌 규칙을 어겼어. 거울을 봤잖아."',
				chunks: [
					{
						content: "민우는 중얼거렸어. ",
					},
					{
						content:
							'"규칙 1조. 밤 10시 이후 화장실 거울을 보지 마라. 넌 규칙을 어겼어. 거울을 봤잖아."',
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
				text: "지훈의 얼굴 피부가 NX-7에 반응하며 변이하기 시작했어. 민우는 그를 세면대 앞에 눕히고 조용히 화장실을 나갔어.",
				chunks: [
					{
						content: "지훈의 얼굴 피부가 NX-7에 반응하며 변이하기 시작했어.",
						soundEffects: [
							{
								tag: "BONE_CREAK",
							},
						],
					},
					{
						content: "민우는 그를 세면대 앞에 눕히고 조용히 화장실을 나갔어.",
						soundEffects: [
							{
								tag: "DOOR_OPEN",
							},
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
		id: "seg-69",
		lines: [
			{
				text: "복도를 걸었어. 형광등이 깜빡였어. 민우의 의식이 돌아왔어.",
				chunks: [
					{
						content: "복도를 걸었어.",
						soundEffects: [
							{
								tag: "FOOTSTEP_LIGHT_TAPS",
							},
						],
					},
					{
						content: " 형광등이 깜빡였어. ",
					},
					{
						content: "민우의 의식이 돌아왔어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: '"어? 나 지금 화장실에서 나왔나?" 혼란스러워했어. 기억이 없었어.',
				chunks: [
					{
						content: '"어? 나 지금 화장실에서 나왔나?"',
						textEffects: ["JITTER"],
					},
					{
						content: " 혼란스러워했어. 기억이 없었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "그는 다시 화장실로 들어갔어. 바닥에 쓰러진 지훈을 발견했어.",
				chunks: [
					{
						content: "그는 다시 화장실로 들어갔어.",
						soundEffects: [
							{
								tag: "DOOR_OPEN",
							},
						],
					},
					{
						content: " 바닥에 쓰러진 지훈을 발견했어.",
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
				text: "민우는 진심으로 놀랐어. 비명을 질렀어. 그는 자신이 방금 한 일을 전혀 기억하지 못했어.",
				chunks: [
					{
						content: "민우는 진심으로 놀랐어. 비명을 질렀어.",
						soundEffects: [
							{
								tag: "BREATH_SHAKY_PANIC",
							},
						],
					},
					{
						content: " 그는 자신이 방금 한 일을 전혀 기억하지 못했어.",
					},
				],
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
		id: "seg-70",
		lines: [
			{
				text: "7월 14일 밤 9시. 민우는 회사에 혼자 남아 김선영의 퇴근 시간을 기다렸어.",
				chunks: [
					{
						content: "7월 14일 밤 9시. ",
					},
					{
						content: "민우는 회사에 혼자 남아 김선영의 퇴근 시간을 기다렸어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "선영이 지하 주차장으로 내려가자. 민우도 따라 내려갔어. B3구역. 조명이 어두웠어.",
				chunks: [
					{
						content: "선영이 지하 주차장으로 내려가자. ",
					},
					{
						content: "민우도 따라 내려갔어. B3구역. ",
					},
					{
						content: "조명이 어두웠어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "선영이 차 문을 열려는 순간. 민우가 뒤에서 목을 조르렀어.",
				chunks: [
					{
						content: "선영이 차 문을 열려는 순간. ",
					},
					{
						content: "민우가 뒤에서 목을 조르렀어.",
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
				text: '"민우씨?! 왜..." 선영이 비명을 질렀지만. 민우는 대답하지 않았어.',
				chunks: [
					{
						content: '"민우씨?! 왜..." ',
					},
					{
						content: "선영이 비명을 질렀지만. ",
						soundEffects: [
							{
								tag: "FEMALE_SCREAM_TERROR",
							},
						],
					},
					{
						content: "민우는 대답하지 않았어.",
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
			url: "goedamjip-story-image/68ed980e87dfe558b9e5f000/seg-70",
			type: "background",
			sustain_until: "seg-72",
		},
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
		id: "seg-71",
		lines: [
			{
				text: "선영을 차 밑으로 끌고 갔어. NX-7을 다리와 몸통에 여러 차례 주입했어.",
				chunks: [
					{
						content: "선영을 차 밑으로 끌고 갔어.",
					},
					{
						content: "NX-7을 다리와 몸통에 여러 차례 주입했어.",
					},
				],
				preLineEffects: {
					image: {
						url: "goedamjip-story-image/68ed980e87dfe558b9e5f000/seg-71",
						type: "overlay",
						sustain_until: "seg-72",
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
				text: '"규칙 2조. B3구역에 주차하지 마라. 넌 내 자리를 뺏었어. 승진도 뺏었어. 규칙을 어긴 벌이야."',
				chunks: [
					{
						content:
							'"규칙 2조. B3구역에 주차하지 마라. 넌 내 자리를 뺏었어. 승진도 뺏었어. 규칙을 어긴 벌이야."',
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
				text: "선영의 뼈가 차체와 융합되기 시작했어. 그녀는 고통에 비명을 질렀어. 하지만 지하 주차장에는 아무도 없었어.",
				chunks: [
					{
						content: "선영의 뼈가 차체와 융합되기 시작했어.",
						soundEffects: [
							{
								tag: "BONE_CREAK",
							},
							{
								tag: "METAL_CREAK",
							},
						],
					},
					{
						content: "그녀는 고통에 비명을 질렀어.",
						soundEffects: [
							{
								tag: "HEARTBEAT_SUDDEN_LOUD",
							},
						],
					},
					{
						content: "하지만 지하 주차장에는 아무도 없었어.",
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
			visualEffects: [
				{
					tag: "SCREEN_FLICKER",
					status: "start",
				},
			],
		},
	},
	{
		id: "seg-72",
		lines: [
			{
				text: "민우는 차 경보기를 작동시켰어. 나중에 자신이 '소리를 듣고' 온 것처럼 만들기 위해.",
				chunks: [
					{
						content: "민우는 차 경보기를 작동시켰어.",
					},
					{
						content: "나중에 자신이 '소리를 듣고' 온 것처럼 만들기 위해.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [
						{
							tag: "CAR_HORN_STUCK",
						},
					],
					visualEffects: [],
				},
			},
			{
				text: "엘리베이터를 타고 올라갔어. 9층에 도착했을 때. 그의 의식이 돌아왔어.",
				chunks: [
					{
						content: "엘리베이터를 타고 올라갔어.",
					},
					{
						content: "9층에 도착했을 때.",
						soundEffects: [
							{
								tag: "ELEVATOR_ARRIVE_AND_OPEN",
							},
						],
					},
					{
						content: "그의 의식이 돌아왔어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: '"어? 차 소리가 들리는데?" 다시 지하로 내려갔어. 기억 삭제 완료.',
				chunks: [
					{
						content: '"어? 차 소리가 들리는데?"',
					},
					{
						content: "다시 지하로 내려갔어.",
					},
					{
						content: "기억 삭제 완료.",
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
					tag: "DRONE_FEAR_PSYCHOSIS",
					status: "stop",
				},
				{
					tag: "ROOMTONE_BASEMENT_HUM",
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
		id: "seg-73",
		lines: [
			{
				text: "7월 25일 밤 9시. 민우는 12층 회의실 C로 올라갔어. 이수진이 혼자 자료를 정리하고 있었어.",
				chunks: [
					{
						content: "7월 25일 밤 9시. 민우는 12층 회의실 C로 올라갔어.",
					},
					{
						content: "이수진이 혼자 자료를 정리하고 있었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: '"수진씨, 잠깐 이것 좀 봐줄래요?" 민우가 친절하게 말했어.',
				chunks: [
					{
						content: '"수진씨, 잠깐 이것 좀 봐줄래요?"',
					},
					{
						content: "민우가 친절하게 말했어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "수진은 의심 없이 고개를 돌렸어. 민우가 그녀의 목에 주사기를 꽂았어.",
				chunks: [
					{
						content: "수진은 의심 없이 고개를 돌렸어.",
					},
					{
						content: "민우가 그녀의 목에 주사기를 꽂았어.",
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
				text: '수진의 눈이 커졌어. "오빠...?" 하지만 이미 신경이 마비되고 있었어.',
				chunks: [
					{
						content: '수진의 눈이 커졌어. "오빠...?"',
					},
					{
						content: "하지만 이미 신경이 마비되고 있었어.",
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
		background: {
			url: "goedamjip-story-image/68ed980e87dfe558b9e5f000/seg-73",
			type: "background",
			sustain_until: "seg-76",
		},
		segmentEffects: {
			soundEffects: [
				{
					tag: "DRONE_STRINGS_DISCORDANT",
					status: "start",
				},
				{
					tag: "ROOMTONE_FLUORESCENT_BUZZ",
					status: "start",
				},
			],
			visualEffects: [],
		},
	},
	{
		id: "seg-74",
		lines: [
			{
				text: "민우는 수진을 의자에 앉히고 손과 발을 의자 프레임에 묶었어.",
				chunks: [
					{
						content:
							"민우는 수진을 의자에 앉히고 손과 발을 의자 프레임에 묶었어.",
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
				text: '"규칙 3조. 12층 회의실 C를 밤에 사용하지 마라. 넌 나한테 호감을 보이더니 다른 남자한테 갔잖아. 규칙 위반이야."',
				chunks: [
					{
						content:
							'"규칙 3조. 12층 회의실 C를 밤에 사용하지 마라. 넌 나한테 호감을 보이더니 다른 남자한테 갔잖아. 규칙 위반이야."',
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
				text: '수진의 손가락뼈가 늘어나기 시작했어. 그녀는 울먹이며 물었어. "왜... 왜 이러는 거예요..."',
				chunks: [
					{
						content: "수진의 손가락뼈가 늘어나기 시작했어.",
						soundEffects: [
							{
								tag: "BONE_CREAK",
							},
						],
					},
					{
						content: '그녀는 울먹이며 물었어. "왜... 왜 이러는 거예요..."',
						textEffects: ["JITTER"],
					},
				],
				preLineEffects: {
					image: {
						url: "goedamjip-story-image/68ed980e87dfe558b9e5f000/seg-74",
						type: "overlay",
						sustain_until: "seg-75",
					},
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "하지만 민우는 이미 방을 나가고 있었어.",
				chunks: [
					{
						content: "하지만 민우는 이미 방을 나가고 있었어.",
						soundEffects: [
							{
								tag: "DOOR_OPEN",
							},
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
		id: "seg-75",
		lines: [
			{
				text: '복도에서 민우의 의식이 돌아왔어. "어? 내가 12층에 왜 왔지?"',
				chunks: [
					{
						content: "복도에서 민우의 의식이 돌아왔어.",
					},
					{
						content: '"어? 내가 12층에 왜 왔지?"',
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: '회의실 C의 문이 열린 걸 봤어. "누가 있나?" 들어갔어. 변이 중인 수진을 발견했어. 진심으로 경악했어.',
				chunks: [
					{
						content: '회의실 C의 문이 열린 걸 봤어. "누가 있나?" 들어갔어.',
						soundEffects: [
							{
								tag: "DOOR_OPEN",
							},
						],
					},
					{
						content: "변이 중인 수진을 발견했어. 진심으로 경악했어.",
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
			soundEffects: [
				{
					tag: "DRONE_STRINGS_DISCORDANT",
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
		id: "seg-76",
		lines: [
			{
				text: "정신과 의사의 소견서에는 이렇게 나와 있어.",
				chunks: [
					{
						content: "정신과 의사의 소견서에는 이렇게 나와 있어.",
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
				text: '"한민우는 심각한 해리성 정체성 장애를 앓고 있음. 자신이 한 행동을 즉시 기억에서 삭제하는 방어기제.',
				chunks: [
					{
						content:
							'"한민우는 심각한 해리성 정체성 장애를 앓고 있음. 자신이 한 행동을 즉시 기억에서 삭제하는 방어기제.',
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
				text: "승진 탈락 후 정신적 붕괴를 겪었으며. 자신의 실패를 받아들일 수 없어 원인을 외부에서 찾기 시작함.",
				chunks: [
					{
						content:
							"승진 탈락 후 정신적 붕괴를 겪었으며. 자신의 실패를 받아들일 수 없어 원인을 외부에서 찾기 시작함.",
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
				text: "'규칙을 지키지 않는 동료들' 때문이라는 망상 체계를 구축. 자신이 '집행자' 역할을 해야 한다고 믿었음.\"",
				chunks: [
					{
						content:
							"'규칙을 지키지 않는 동료들' 때문이라는 망상 체계를 구축. 자신이 '집행자' 역할을 해야 한다고 믿었음.\"",
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
		segmentEffects: {
			soundEffects: [
				{
					tag: "HEART_MONITOR_STEADY",
					status: "start",
				},
				{
					tag: "HEART_MONITOR_STEADY",
					status: "stop",
				},
			],
			visualEffects: [],
		},
	},
	{
		id: "seg-77",
		lines: [
			{
				text: "격리실. 민우는 자신의 '진술서' 작성을 거의 끝냈어. 하지만 쓰면 쓸수록 이상한 점들이 보이기 시작했어.",
				chunks: [
					{
						content: "격리실. 민우는 자신의 '진술서' 작성을 거의 끝냈어.",
						soundEffects: [
							{
								tag: "PENCIL_WRITING",
							},
						],
					},
					{
						content: "하지만 쓰면 쓸수록 이상한 점들이 보이기 시작했어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: '"왜 나는 항상 첫 발견자였을까? 왜 CCTV에는 내가 먼저 있었을까? 왜 피해자들은 모두 나를 가리켰을까?"',
				chunks: [
					{
						content:
							'"왜 나는 항상 첫 발견자였을까? 왜 CCTV에는 내가 먼저 있었을까? 왜 피해자들은 모두 나를 가리켰을까?"',
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
				text: '민우는 펜을 떨어뜨렸어. 손이 떨렸어. "설마... 설마 내가...?"',
				chunks: [
					{
						content: "민우는 펜을 떨어뜨렸어.",
						soundEffects: [
							{
								tag: "METAL_IMPACT_DULL",
							},
						],
					},
					{
						content: '손이 떨렸어. "설마... 설마 내가...?"',
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
		background: {
			url: "goedamjip-story-image/68ed980e87dfe558b9e5f000/seg-77",
			type: "background",
			sustain_until: "seg-80",
		},
		segmentEffects: {
			soundEffects: [
				{
					tag: "DRONE_SURROUNDED_THREAT",
					status: "start",
				},
				{
					tag: "ROOMTONE_FLUORESCENT_BUZZ",
					status: "start",
				},
			],
			visualEffects: [],
		},
	},
	{
		id: "seg-78",
		lines: [
			{
				text: '하지만 그 생각은 너무 끔찍했어. 즉시 부정했어. "아니야. 저주야. 저주 때문이야."',
				chunks: [
					{
						content: "하지만 그 생각은 너무 끔찍했어.",
					},
					{
						content: "즉시 부정했어.",
					},
					{
						content: '"아니야. 저주야. 저주 때문이야."',
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
			soundEffects: [],
			visualEffects: [],
		},
	},
	{
		id: "seg-79",
		lines: [
			{
				text: '민우는 격리실 벽에 손톱으로 글을 긁어 쓰기 시작했어. "8. 진실을 말하지 마라."',
				chunks: [
					{
						content: "민우는 격리실 벽에 손톱으로 글을 긁어 쓰기 시작했어. ",
					},
					{
						content: '"8. 진실을 말하지 마라."',
						textEffects: ["STYLE_FONT_HANDWRITTEN_UNSTABLE"],
					},
				],
				preLineEffects: {
					image: {
						url: "goedamjip-story-image/68ed980e87dfe558b9e5f000/seg-79",
						type: "overlay",
						sustain_until: "seg-80",
					},
					soundEffects: [
						{
							tag: "CLAW_SCRATCH",
						},
					],
					visualEffects: [],
				},
			},
			{
				text: '박현정 간호사가 관찰창으로 이걸 목격했어. 의사를 불렀어. "환자가 자해 행위를 하고 있습니다!"',
				chunks: [
					{
						content:
							"박현정 간호사가 관찰창으로 이걸 목격했어. 의사를 불렀어. ",
					},
					{
						content: '"환자가 자해 행위를 하고 있습니다!"',
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
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
				text: '민우의 손톱이 벗겨졌어. 하지만 멈추지 않았어. "진실을 말하면... 저주가 나한테도 올 거야... 그러면 안 돼..."',
				chunks: [
					{
						content: "민우의 손톱이 벗겨졌어.",
					},
					{
						content: "하지만 멈추지 않았어. ",
					},
					{
						content:
							'"진실을 말하면... 저주가 나한테도 올 거야... 그러면 안 돼..."',
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
				text: "피가 흘러내렸어. 하지만 계속 긁었어.",
				chunks: [
					{
						content: "피가 흘러내렸어.",
						soundEffects: [
							{
								tag: "LIQUID_DRIPPING_HEAVY",
							},
						],
					},
					{
						content: "하지만 계속 긁었어.",
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
				text: '벽에 같은 문장이 반복됐어. "진실을 말하지 마라 진실을 말하지 마라 진실을 말하지 마라"',
				chunks: [
					{
						content: "벽에 같은 문장이 반복됐어. ",
					},
					{
						content:
							'"진실을 말하지 마라 진실을 말하지 마라 진실을 말하지 마라"',
						textEffects: ["STYLE_FONT_HANDWRITTEN_UNSTABLE", "PULSE_SLOW"],
					},
				],
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
		id: "seg-81",
		lines: [
			{
				text: "간호사와 의사가 방에 들어오려 했어. 하지만 민우가 문을 막았어.",
				chunks: [
					{
						content: "간호사와 의사가 방에 들어오려 했어.",
						soundEffects: [
							{
								tag: "RATTLING_LOCKED_DOOR",
							},
						],
					},
					{
						content: "하지만 민우가 문을 막았어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: '"들어오지 마세요! 저는 규칙을 어겼어요!"',
				chunks: [
					{
						content: '"들어오지 마세요! 저는 규칙을 어겼어요!"',
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "민우는 주머니에서 작은 주사기를 꺼냈어. 면회 온 변호사가 실수로 놓고 간 볼펜을 개조한 거였어.",
				chunks: [
					{
						content: "민우는 주머니에서 작은 주사기를 꺼냈어.",
					},
					{
						content: "면회 온 변호사가 실수로 놓고 간 볼펜을 개조한 거였어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "안에는 소량의 NX-7이 들어 있었어. 체포되기 전 마지막으로 훔친 거였어.",
				chunks: [
					{
						content: "안에는 소량의 NX-7이 들어 있었어.",
					},
					{
						content: "체포되기 전 마지막으로 훔친 거였어.",
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
			url: "goedamjip-story-image/68ed980e87dfe558b9e5f000/seg-81",
			type: "background",
			sustain_until: "seg-90",
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
		id: "seg-82",
		lines: [
			{
				text: '"나도 규칙을 어겼어. 8번째 규칙... 진실을 알게 됐으니까... 벌을 받아야 해."',
				chunks: [
					{
						content:
							'"나도 규칙을 어겼어. 8번째 규칙... 진실을 알게 됐으니까... 벌을 받아야 해."',
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
				text: "민우는 자신의 목에 주사기를 꽂았어. NX-7이 혈관으로 퍼졌어.",
				chunks: [
					{
						content: "민우는 자신의 목에 주사기를 꽂았어.",
						soundEffects: [
							{
								tag: "HEARTBEAT_SUDDEN_LOUD",
							},
						],
					},
					{
						content: "NX-7이 혈관으로 퍼졌어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
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
				text: "의사와 간호사가 문을 부쉈어. 들어왔어. 민우는 구석에 웅크리고 앉아 있었어.",
				chunks: [
					{
						content: "의사와 간호사가 문을 부쉈어.",
						soundEffects: [
							{
								tag: "WOOD_SPLINTERING",
							},
						],
					},
					{
						content: "들어왔어.",
					},
					{
						content: "민우는 구석에 웅크리고 앉아 있었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "등에서 이상한 소리가 났어.",
				chunks: [
					{
						content: "등에서 이상한 소리가 났어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
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
				text: "드득...",
				chunks: [
					{
						content: "드득...",
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
		id: "seg-85",
		lines: [
			{
				text: "드득...",
				chunks: [
					{
						content: "드득...",
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
		id: "seg-86",
		lines: [
			{
				text: '"한 씨!" 박현정 간호사가 다가가려는 순간이었어. 민우가 천천히 돌아봤어.',
				chunks: [
					{
						content: '"한 씨!" 박현정 간호사가 다가가려는 순간이었어. ',
					},
					{
						content: "민우가 천천히 돌아봤어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
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
				text: "웃고 있었어.",
				chunks: [
					{
						content: "웃고 있었어.",
					},
				],
				preLineEffects: {
					image: {
						url: "goedamjip-story-image/68ed980e87dfe558b9e5f000/seg-87",
						type: "overlay",
						sustain_until: "seg-90",
					},
					soundEffects: [
						{
							tag: "BONE_CREAK",
						},
						{
							tag: "BONES_RATTLING_SKELETON",
						},
					],
					visualEffects: [],
				},
			},
			{
				text: "그의 등뼈가 피부를 뚫고 튀어나와 있었어. 척추뼈가 마치 날개처럼 양옆으로 펼쳐졌어.",
				chunks: [
					{
						content: "그의 등뼈가 피부를 뚫고 튀어나와 있었어. ",
					},
					{
						content: "척추뼈가 마치 날개처럼 양옆으로 펼쳐졌어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "갈비뼈가 거미 다리처럼 바닥을 긁고 있었어.",
				chunks: [
					{
						content: "갈비뼈가 거미 다리처럼 바닥을 긁고 있었어.",
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
		id: "seg-88",
		lines: [
			{
				text: "드득... 드득...",
				chunks: [
					{
						content: "드득... 드득...",
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
		id: "seg-89",
		lines: [
			{
				text: "민우의 입에서 검은 액체가 흘러나왔어. NX-7과 위액이 섞인 거였어.",
				chunks: [
					{
						content:
							"민우의 입에서 검은 액체가 흘러나왔어. NX-7과 위액이 섞인 거였어.",
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
				text: '계속 웃으며 중얼거렸어. "봤죠? 저주는 진짜였어요. 나도 규칙을 어겼으니까... 벌을 받는 거예요."',
				chunks: [
					{
						content:
							'계속 웃으며 중얼거렸어. "봤죠? 저주는 진짜였어요. 나도 규칙을 어겼으니까... 벌을 받는 거예요."',
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: '"나는 규칙을 지켰어. 나만 규칙을 지켰는데... 왜 다들 안 지켰을까..."',
				chunks: [
					{
						content:
							'"나는 규칙을 지켰어. 나만 규칙을 지켰는데... 왜 다들 안 지켰을까..."',
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
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
				text: "의료진이 진정제를 투여하려 했어. 하지만 민우의 피부가 이미 딱딱해지고 있었어.",
				chunks: [
					{
						content: "의료진이 진정제를 투여하려 했어. ",
					},
					{
						content: "하지만 민우의 피부가 이미 딱딱해지고 있었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "그의 몸이 바닥과 융합되기 시작했어. 마지막 순간. 민우의 눈빛.",
				chunks: [
					{
						content: "그의 몸이 바닥과 융합되기 시작했어.",
						soundEffects: [
							{
								tag: "SLITHERING_ON_FLOOR",
							},
						],
					},
					{
						content: " 마지막 순간. 민우의 눈빛.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "거기엔 광기와 확신이 있었어. 그리고 아주 깊은 곳에 묻혀 있는 슬픔.",
				chunks: [
					{
						content: "거기엔 광기와 확신이 있었어. ",
					},
					{
						content: "그리고 아주 깊은 곳에 묻혀 있는 슬픔.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "그는 끝까지 자신이 피해자라고 믿고 싶었어.",
				chunks: [
					{
						content: "그는 끝까지 자신이 피해자라고 믿고 싶었어.",
					},
				],
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
			visualEffects: [],
		},
	},
	{
		id: "seg-91",
		lines: [
			{
				text: "3개월 후. 바이오헬스코리아는 폐업했어. 건물은 비어 있어.",
				chunks: [
					{
						content: "3개월 후. 바이오헬스코리아는 폐업했어. ",
					},
					{
						content: "건물은 비어 있어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "새로운 세입자가 10층 창고를 정리하고 있었어. 먼지 쌓인 캐비넷을 열었어. 낡은 종이를 발견했어.",
				chunks: [
					{
						content: "새로운 세입자가 10층 창고를 정리하고 있었어. ",
					},
					{
						content: "먼지 쌓인 캐비넷을 열었어. ",
					},
					{
						content: "낡은 종이를 발견했어.",
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
				text: '거기엔 타자기로 쓰인 글이 있었어. "9. 이 규칙을 읽은 자는..." 하지만 그 아래는 찢어져 있었어.',
				chunks: [
					{
						content: "거기엔 타자기로 쓰인 글이 있었어. ",
					},
					{
						content: '"9. 이 규칙을 읽은 자는..." ',
					},
					{
						content: "하지만 그 아래는 찢어져 있었어.",
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
		background: {
			url: "goedamjip-story-image/68ed980e87dfe558b9e5f000/seg-91",
			type: "background",
			sustain_until: "seg-95",
		},
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
		id: "seg-92",
		lines: [
			{
				text: "세입자는 종이를 쓰레기통에 버리고 나갔어. 쓰레기통 안. 종이가 바람에 살짝 펼쳐졌어.",
				chunks: [
					{
						content: "세입자는 종이를 쓰레기통에 버리고 나갔어.",
					},
					{
						content: "쓰레기통 안. 종이가 바람에 살짝 펼쳐졌어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: '찢어진 부분 아래. 희미하게 보이는 글씨. "...다음 집행자가 된다."',
				chunks: [
					{
						content: "찢어진 부분 아래.",
					},
					{
						content: "희미하게 보이는 글씨.",
					},
					{
						content: '"...다음 집행자가 된다."',
						textEffects: ["INK_REVEAL"],
					},
				],
				preLineEffects: {
					image: {
						url: "goedamjip-story-image/68ed980e87dfe558b9e5f000/seg-92",
						type: "overlay",
						sustain_until: "seg-92",
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
			visualEffects: [],
		},
	},
	{
		id: "seg-93",
		lines: [
			{
				text: "근데 말이야. 한민우가 격리실에서 쓴 마지막 문장 알아? 경찰이 공개하지 않은 거.",
				chunks: [
					{
						content:
							"근데 말이야. 한민우가 격리실에서 쓴 마지막 문장 알아? 경찰이 공개하지 않은 거.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: '"10번째 규칙: 이 이야기를 다른 사람에게 들려주지 마라."',
				chunks: [
					{
						content: '"10번째 규칙: 이 이야기를 다른 사람에게 들려주지 마라."',
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
		id: "seg-94",
		lines: [
			{
				text: "미안. 나 방금 어겼네. 너희한테 들려줬잖아.",
				chunks: [
					{
						content: "미안. 나 방금 어겼네. 너희한테 들려줬잖아.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
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
				text: "어? 형광등이 깜빡이는데.",
				chunks: [
					{
						content: "어? 형광등이 깜빡이는데.",
						textEffects: ["JITTER"],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [
						{
							tag: "SWITCH_CLICK_FLAT",
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
];
