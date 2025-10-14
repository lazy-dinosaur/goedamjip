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
				text: "서울의 한 대학병원에서 실제로 일어난 일이야.",
				chunks: [
					{
						content: "서울의 한 대학병원에서 실제로 일어난 일이야.",
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
			url: "goedamjip-story-image/68edf3530e90251abd8d8000/seg-1",
			type: "background",
			sustain_until: "seg-20",
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
		id: "seg-2",
		lines: [
			{
				text: "주인공은 이준호, 35세 신경과 의사였어.",
				chunks: [
					{
						content: "주인공은 이준호, 35세 신경과 의사였어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "6개월 전 교통사고로 그 이전 기억을 모두 잃었지.",
				chunks: [
					{
						content: "6개월 전 교통사고로 ",
					},
					{
						content: "그 이전 기억을 모두 잃었지.",
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
		id: "seg-3",
		lines: [
			{
				text: "복직 첫날이었어.",
				chunks: [
					{
						content: "복직 첫날이었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "환자들이 이상하게 반응했어.",
				chunks: [
					{
						content: "환자들이 ",
					},
					{
						content: "이상하게 반응했어.",
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
		id: "seg-4",
		lines: [
			{
				text: '환자가 "돌아오셨네요, 선생님." 하고 말했어.',
				chunks: [
					{
						content: '환자가 "돌아오셨네요, 선생님." 하고 말했어.',
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
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
				text: '다른 환자도 "기억 안 나세요?" 하고 물었어.',
				chunks: [
					{
						content: '다른 환자도 "기억 안 나세요?" 하고 물었어.',
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
		id: "seg-6",
		lines: [
			{
				text: "준호는 당황했어.",
				chunks: [
					{
						content: "준호는 당황했어.",
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
				text: "자신이 이 환자들을 담당했던 것 같은데 전혀 기억이 나지 않았어.",
				chunks: [
					{
						content:
							"자신이 이 환자들을 담당했던 것 같은데 전혀 기억이 나지 않았어.",
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
				text: "그날 밤 응급실에서 연락이 왔어.",
				chunks: [
					{
						content: "그날 밤 응급실에서 연락이 왔어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "무연고 환자가 사망했는데 유품이 하나 있다는 거야.",
				chunks: [
					{
						content: "무연고 환자가 사망했는데 유품이 하나 있다는 거야.",
					},
				],
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
					tag: "ROOMTONE_FLUORESCENT_BUZZ",
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
				text: "작은 나무 상자였어.",
				chunks: [
					{
						content: "작은 나무 상자였어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "참나무로 만들어진, 보석함만한 크기의 상자.",
				chunks: [
					{
						content: "참나무로 만들어진, 보석함만한 크기의 상자.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
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
				text: "황동 손잡이에는 희미한 지문이 남아 있었어.",
				chunks: [
					{
						content: "황동 손잡이에는 희미한 지문이 남아 있었어.",
					},
				],
				preLineEffects: {
					image: {
						url: "goedamjip-story-image/68edf3530e90251abd8d8000/seg-9",
						type: "overlay",
						sustain_until: "seg-14",
					},
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "아이의 작은 손가락 자국 같았어.",
				chunks: [
					{
						content: "아이의 작은 손가락 자국 같았어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
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
				text: "준호는 그걸 자신의 진료실로 가져왔어.",
				chunks: [
					{
						content: "준호는 그걸 자신의 진료실로 가져왔어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: ' "의학적으로 분석해보자"고 생각하면서.',
				chunks: [
					{
						content: ' "의학적으로 분석해보자"고 생각하면서.',
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
		id: "seg-11",
		lines: [
			{
				text: "야간 당직이었어.",
				chunks: [
					{
						content: "야간 당직이었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "병원은 조용했고 준호는 혼자 남았어.",
				chunks: [
					{
						content: "병원은 조용했고 준호는 혼자 남았어.",
					},
				],
				preLineEffects: {
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
		id: "seg-12",
		lines: [
			{
				text: "호기심이 생겼어.",
				chunks: [
					{
						content: "호기심이 생겼어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "상자를 열어보기로 했어.",
				chunks: [
					{
						content: "상자를 열어보기로 했어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
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
				text: "뚜껑을 조심스럽게 들어올렸어.",
				chunks: [
					{
						content: "뚜껑을 조심스럽게 들어올렸어.",
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
				text: "안에는 아이가 그린 그림 몇 장과 작은 장난감이 들어 있었어.",
				chunks: [
					{
						content:
							"안에는 아이가 그린 그림 몇 장과 작은 장난감이 들어 있었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
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
				text: '"별거 아니네."',
				chunks: [
					{
						content: '"별거 아니네."',
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "준호가 중얼거렸어.",
				chunks: [
					{
						content: "준호가 중얼거렸어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
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
				text: "갑자기...",
				chunks: [
					{
						content: "갑자기...",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
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
				text: '"선생님..."',
				chunks: [
					{
						content: '"선생님..."',
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
		id: "seg-17",
		lines: [
			{
				text: "어린 아이의 속삭임이 바로 귀 옆에서 들렸어.",
				chunks: [
					{
						content: "어린 아이의 속삭임이 바로 귀 옆에서 들렸어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [
						{
							tag: "CHILD_WHISPER_CLOSE",
						},
					],
					visualEffects: [],
				},
			},
			{
				text: "차가운 숨결과 함께.",
				chunks: [
					{
						content: "차가운 숨결과 함께.",
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
			soundEffects: [
				{
					tag: "DRONE_UNSEEN_UNDERCURRENT",
					status: "start",
				},
			],
			visualEffects: [],
		},
	},
	{
		id: "seg-18",
		lines: [
			{
				text: "준호는 깜짝 놀라 의자에서 넘어졌어.",
				chunks: [
					{
						content: "준호는 깜짝 놀라 ",
					},
					{
						content: "의자에서 넘어졌어.",
						soundEffects: [
							{
								tag: "WOOD_CREAK",
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
				text: "상자가 바닥에 떨어졌어.",
				chunks: [
					{
						content: "상자가 바닥에 떨어졌어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
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
				text: '"누구야?!"',
				chunks: [
					{
						content: '"누구야?!"',
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
				text: "주변을 둘러봤지만 아무도 없었어.",
				chunks: [
					{
						content: "주변을 둘러봤지만 아무도 없었어.",
					},
				],
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
					tag: "ROOMTONE_FLUORESCENT_BUZZ",
					status: "stop",
				},
				{
					tag: "DRONE_UNSEEN_UNDERCURRENT",
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
		id: "seg-20",
		lines: [
			{
				text: "다음 날부터 이상한 일들이 시작됐어.",
				chunks: [
					{
						content: "다음 날부터 이상한 일들이 시작됐어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "꿈과 현실이 뒤섞이기 시작했어.",
				chunks: [
					{
						content: "꿈과 현실이 뒤섞이기 시작했어.",
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
					tag: "DRONE_SURROUNDED_THREAT",
					status: "start",
				},
				{
					tag: "ROOMTONE_EMPTY_NEUTRAL",
					status: "start",
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
		id: "seg-21",
		lines: [
			{
				text: "진료 중에 갑자기 복도가 달라 보였어.",
				chunks: [
					{
						content: "진료 중에 갑자기 복도가 달라 보였어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "1990년대 낡은 병원 복도 같았어.",
				chunks: [
					{
						content: "1990년대 낡은 병원 복도 같았어.",
						textEffects: ["GLITCH"],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: ["OVERLAY_GLITCH"],
				},
			},
		],
		background: {
			url: "goedamjip-story-image/68edf3530e90251abd8d8000/seg-21",
			type: "background",
			sustain_until: "seg-31",
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
		id: "seg-22",
		lines: [
			{
				text: "박미영 간호사가 의미심장한 눈빛으로 준호를 봤어.",
				chunks: [
					{
						content: "박미영 간호사가 의미심장한 눈빛으로 준호를 봤어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: '"선생님, 정말 기억 안 나세요?"',
				chunks: [
					{
						content: '"선생님, 정말 기억 안 나세요?"',
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
		id: "seg-23",
		lines: [
			{
				text: "준호가 물었어.",
				chunks: [
					{
						content: "준호가 물었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: '"뭘 기억해야 하는데요?"',
				chunks: [
					{
						content: '"뭘 기억해야 하는데요?"',
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
		id: "seg-24",
		lines: [
			{
				text: "박미영이 대답했어.",
				chunks: [
					{
						content: "박미영이 대답했어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: '"...아니에요. 착각이었나 봐요."',
				chunks: [
					{
						content: '"...아니에요. 착각이었나 봐요."',
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
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
				text: "상자에서 나온 아이 그림을 자세히 봤어.",
				chunks: [
					{
						content: "상자에서 나온 아이 그림을 자세히 봤어.",
					},
				],
				preLineEffects: {
					image: {
						url: "goedamjip-story-image/68edf3530e90251abd8d8000/seg-25",
						type: "overlay",
						sustain_until: "seg-27",
					},
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "크레용으로 그린 의사와 아이 그림이었어.",
				chunks: [
					{
						content: "크레용으로 그린 의사와 아이 그림이었어.",
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
		id: "seg-26",
		lines: [
			{
				text: '"아이들이 그리는 그림은 다 비슷하지."',
				chunks: [
					{
						content: '"아이들이 그리는 그림은 다 비슷하지."',
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "준호가 합리화했어.",
				chunks: [
					{
						content: "준호가 합리화했어.",
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
		id: "seg-27",
		lines: [
			{
				text: "고개를 들어 벽 거울을 봤어.",
				chunks: [
					{
						content: "고개를 들어 벽 거울을 봤어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
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
				text: "거울 속에 7세 정도 되는 소녀가 서 있었어.",
				chunks: [
					{
						content: "거울 속에 7세 정도 되는 소녀가 서 있었어.",
					},
				],
				preLineEffects: {
					image: {
						url: "goedamjip-story-image/68edf3530e90251abd8d8000/seg-28",
						type: "overlay",
						sustain_until: "seg-30",
					},
					soundEffects: [
						{
							tag: "FEMALE_GHOST_PRESENCE",
						},
					],
					visualEffects: [],
				},
			},
			{
				text: "입을 벌린 채 무언가를 호소하는 표정이었어.",
				chunks: [
					{
						content: "입을 벌린 채 무언가를 호소하는 표정이었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
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
				text: "준호는 급히 뒤돌아봤어.",
				chunks: [
					{
						content: "준호는 급히 뒤돌아봤어.",
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
		id: "seg-30",
		lines: [
			{
				text: "다시 거울을 보니 자신의 모습만 보였어.",
				chunks: [
					{
						content: "다시 거울을 보니 자신의 모습만 보였어.",
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
					tag: "DRONE_SURROUNDED_THREAT",
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
		id: "seg-31",
		lines: [
			{
				text: "며칠 후, 준호는 결심했어.",
				chunks: [
					{
						content: "며칠 후, 준호는 결심했어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "진실을 파악하기로 했어.",
				chunks: [
					{
						content: "진실을 파악하기로 했어.",
					},
				],
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
				{
					tag: "ROOMTONE_EMPTY_NEUTRAL",
					status: "start",
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
		id: "seg-32",
		lines: [
			{
				text: "지하 창고에 과거 의료기록들이 보관되어 있었어.",
				chunks: [
					{
						content: "지하 창고에 과거 의료기록들이 보관되어 있었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "혼자서 기록을 뒤지기 시작했어.",
				chunks: [
					{
						content: "혼자서 기록을 뒤지기 시작했어.",
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
			url: "goedamjip-story-image/68edf3530e90251abd8d8000/seg-32",
			type: "background",
			sustain_until: "seg-42",
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
		id: "seg-33",
		lines: [
			{
				text: "어둠 속에서 손전등으로 기록들을 살펴봤어.",
				chunks: [
					{
						content: "어둠 속에서 손전등으로 기록들을 살펴봤어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "1998년, 연세정신병원 기록들이 있었어.",
				chunks: [
					{
						content: "1998년, 연세정신병원 기록들이 있었어.",
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
		id: "seg-34",
		lines: [
			{
				text: "그때 자신의 이름을 발견했어.",
				chunks: [
					{
						content: "그때 자신의 이름을 발견했어.",
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
				text: '"담당의: 이준호"',
				chunks: [
					{
						content: '"담당의: 이준호"',
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
			soundEffects: [],
			visualEffects: [],
		},
	},
	{
		id: "seg-35",
		lines: [
			{
				text: '"역시 내가 과민반응했나."',
				chunks: [
					{
						content: '"역시 내가 과민반응했나."',
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
				text: "기록을 정리하려는 순간이었어.",
				chunks: [
					{
						content: "기록을 정리하려는 순간이었어.",
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
			soundEffects: [
				{
					tag: "DRONE_UNSTABLE_PULSE",
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
		id: "seg-36",
		lines: [
			{
				text: "갑자기 주변이 환해졌어.",
				chunks: [
					{
						content: "갑자기 주변이 환해졌어.",
					},
				],
				preLineEffects: {
					image: {
						url: "goedamjip-story-image/68edf3530e90251abd8d8000/seg-36",
						type: "overlay",
						sustain_until: "seg-38",
					},
					soundEffects: [
						{
							tag: "STATIC_BURST_LOUD",
						},
						{
							tag: "HEARTBEAT_SUDDEN_LOUD",
						},
					],
					visualEffects: ["OVERLAY_GLITCH"],
				},
			},
			{
				text: "수십 명의 환자들이 자신을 둘러싸고 있었어.",
				chunks: [
					{
						content: "수십 명의 환자들이 자신을 둘러싸고 있었어.",
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
				{
					tag: "ROOMTONE_FLUORESCENT_BUZZ",
					status: "start",
				},
			],
			visualEffects: [],
		},
	},
	{
		id: "seg-37",
		lines: [
			{
				text: '"선생님, 기억하세요."',
				chunks: [
					{
						content: '"선생님, 기억하세요."',
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "모든 환자들이 동시에 속삭였어.",
				chunks: [
					{
						content: "모든 환자들이 동시에 속삭였어.",
					},
				],
				preLineEffects: {
					image: {
						url: null,
						type: "overlay",
					},
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
		id: "seg-38",
		lines: [
			{
				text: "준호는 비명을 지르며 뒤로 넘어졌어.",
				chunks: [
					{
						content: "준호는 비명을 지르며 ",
						soundEffects: [
							{
								tag: "MALE_SCREAM_TERROR",
							},
						],
					},
					{
						content: "뒤로 넘어졌어.",
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
				text: "의료기록들 사이에 파묻혔어.",
				chunks: [
					{
						content: "의료기록들 사이에 파묻혔어.",
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
					tag: "ROOMTONE_FLUORESCENT_BUZZ",
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
				text: "정신을 차리니 다시 어두운 창고였어.",
				chunks: [
					{
						content: "정신을 차리니 다시 어두운 창고였어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "하지만 바닥에 한 장의 기록지가 떨어져 있었어.",
				chunks: [
					{
						content: "하지만 바닥에 한 장의 기록지가 떨어져 있었어.",
					},
				],
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
		id: "seg-40",
		lines: [
			{
				text: '"환자명: 김소희 (7세)"',
				chunks: [
					{
						content: '"환자명: 김소희 (7세)"',
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
				text: '"사망원인: 처방 오류로 인한 급성 중독"',
				chunks: [
					{
						content: '"사망원인: 처방 오류로 인한 급성 중독"',
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
					tag: "DRONE_SUFFOCATE_DREAD",
					status: "stop",
				},
			],
			visualEffects: [],
		},
	},
	{
		id: "seg-41",
		lines: [
			{
				text: "준호의 기억이 조각조각 돌아오기 시작했어.",
				chunks: [
					{
						content: "준호의 기억이 조각조각 돌아오기 시작했어.",
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
				text: "어린 환자 소희, 자신의 실수, 그리고...",
				chunks: [
					{
						content: "어린 환자 소희, 자신의 실수, 그리고...",
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
		id: "seg-42",
		lines: [
			{
				text: '"미안해... 정말 미안해..."',
				chunks: [
					{
						content: '"미안해... 정말 미안해..."',
						textEffects: ["PULSE_SLOW"],
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
				text: "자신이 계속 중얼거리던 말들이 기억났어.",
				chunks: [
					{
						content: "자신이 계속 중얼거리던 말들이 기억났어.",
					},
				],
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
					tag: "ROOMTONE_BASEMENT_HUM",
					status: "stop",
				},
			],
			visualEffects: [
				{
					tag: "SCREEN_FLICKER",
					status: "stop",
				},
				{
					tag: "VISUAL_VIGNETTE",
					status: "stop",
				},
			],
		},
	},
	{
		id: "seg-43",
		lines: [
			{
				text: "그날 밤, 준호는 상자와 마주 앉았어.",
				chunks: [
					{
						content: "그날 밤, 준호는 상자와 마주 앉았어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "모든 걸 기억해냈어.",
				chunks: [
					{
						content: "모든 걸 기억해냈어.",
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
			url: "goedamjip-story-image/68edf3530e90251abd8d8000/seg-43",
			type: "background",
			sustain_until: "seg-45",
		},
		segmentEffects: {
			soundEffects: [
				{
					tag: "DRONE_HESITATION_SUSPENSE",
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
		id: "seg-44",
		lines: [
			{
				text: "교통사고로 인한 기억상실이 아니었어.",
				chunks: [
					{
						content: "교통사고로 인한 기억상실이 아니었어.",
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
				text: "자신이 죄책감 때문에 의도적으로 기억을 억압한 거였어.",
				chunks: [
					{
						content: "자신이 죄책감 때문에 의도적으로 기억을 억압한 거였어.",
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
		id: "seg-45",
		lines: [
			{
				text: '"소희야... 선생님이 잘못했어."',
				chunks: [
					{
						content: '"소희야... 선생님이 잘못했어."',
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "상자를 향해 말했어.",
				chunks: [
					{
						content: "상자를 향해 말했어.",
					},
				],
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
			visualEffects: [
				{
					tag: "VISUAL_VIGNETTE",
					status: "stop",
				},
			],
		},
	},
	{
		id: "seg-46",
		lines: [
			{
				text: "진실을 받아들이기로 결심했어.",
				chunks: [
					{
						content: "진실을 받아들이기로 결심했어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "복도를 걸으며 상자를 다시 봉인하러 갔어.",
				chunks: [
					{
						content: "복도를 걸으며 상자를 다시 봉인하러 갔어.",
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
		background: {
			url: "goedamjip-story-image/68edf3530e90251abd8d8000/seg-46",
			type: "background",
			sustain_until: "seg-47",
		},
		segmentEffects: {
			soundEffects: [
				{
					tag: "DRONE_UNSTABLE_PULSE",
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
		id: "seg-47",
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
				text: "상자를 다시 봉인하려는 순간이었어.",
				chunks: [
					{
						content: "상자를 다시 봉인하려는 순간이었어.",
					},
				],
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
				{
					tag: "WIND_DRAFT_WHISTLE",
					status: "stop",
				},
			],
			visualEffects: [],
		},
	},
	{
		id: "seg-48",
		lines: [
			{
				text: "병원 전체가 순식간에 1990년대 정신병원으로 변했어.",
				chunks: [
					{
						content: "병원 전체가 순식간에 1990년대 정신병원으로 변했어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [
						{
							tag: "STATIC_BURST_LOUD",
						},
					],
					visualEffects: ["OVERLAY_GLITCH"],
				},
			},
			{
				text: "복도마다 자신이 치료했던 모든 환자들이 나타났어.",
				chunks: [
					{
						content: "복도마다 자신이 치료했던 모든 환자들이 나타났어.",
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
			url: "goedamjip-story-image/68edf3530e90251abd8d8000/seg-48",
			type: "background",
			sustain_until: "seg-50",
		},
		segmentEffects: {
			soundEffects: [
				{
					tag: "DRONE_LOOMING_PRESENCE",
					status: "start",
				},
				{
					tag: "ANALOG_TAPE_HISS",
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
				text: "환자들이 자신을 향해 걸어오기 시작했어.",
				chunks: [
					{
						content: "환자들이 자신을 향해 걸어오기 시작했어.",
					},
				],
				preLineEffects: {
					image: {
						url: "goedamjip-story-image/68edf3530e90251abd8d8000/seg-49",
						type: "overlay",
						sustain_until: "seg-50",
					},
					soundEffects: [
						{
							tag: "FOOTSTEPS_TUNNEL",
						},
					],
					visualEffects: [],
				},
			},
			{
				text: "표정 없는 얼굴로, 천천히.",
				chunks: [
					{
						content: "표정 없는 얼굴로, 천천히.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
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
				text: "준호는 상자를 꽉 껴안고 주저앉았어.",
				chunks: [
					{
						content: "준호는 상자를 꽉 껴안고 주저앉았어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: '"미안해, 정말 미안해!"를 반복했어.',
				chunks: [
					{
						content: '"미안해, 정말 미안해!"',
						textEffects: ["JITTER"],
					},
					{
						content: "를 반복했어.",
					},
				],
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
		id: "seg-51",
		lines: [
			{
				text: "환자들이 사라졌어.",
				chunks: [
					{
						content: "환자들이 사라졌어.",
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
				text: "병원도 다시 원래대로 돌아왔어.",
				chunks: [
					{
						content: "병원도 다시 원래대로 돌아왔어.",
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
			url: "goedamjip-story-image/68edf3530e90251abd8d8000/seg-51",
			type: "background",
			sustain_until: "seg-51",
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
			visualEffects: [],
		},
	},
	{
		id: "seg-52",
		lines: [
			{
				text: "준호는 상자를 지하 창고 깊숙한 곳에 다시 봉인했어.",
				chunks: [
					{
						content: "준호는 상자를 지하 창고 깊숙한 곳에 ",
					},
					{
						content: "다시 봉인했어.",
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
				text: "두꺼운 천으로 싸서 상자 안에 넣었어.",
				chunks: [
					{
						content: "두꺼운 천으로 싸서 ",
						soundEffects: [
							{
								tag: "CLOTH_DRAGGING",
							},
						],
					},
					{
						content: "상자 안에 넣었어.",
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
			url: "goedamjip-story-image/68edf3530e90251abd8d8000/seg-52",
			type: "background",
			sustain_until: "seg-55",
		},
		segmentEffects: {
			soundEffects: [
				{
					tag: "ROOMTONE_BASEMENT_HUM",
					status: "start",
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
		id: "seg-53",
		lines: [
			{
				text: "며칠이 지났어.",
				chunks: [
					{
						content: "며칠이 지났어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "평화가 찾아온 것 같았어.",
				chunks: [
					{
						content: "평화가 찾아온 것 같았어.",
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
					tag: "ROOMTONE_EMPTY_NEUTRAL",
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
				text: "하지만 가끔 밤 당직을 설 때면...",
				chunks: [
					{
						content: "하지만 가끔 밤 당직을 설 때면...",
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
		id: "seg-55",
		lines: [
			{
				text: "지하에서 작은 발걸음 소리가 들렸어.",
				chunks: [
					{
						content: "지하에서 작은 발걸음 소리가 들렸어.",
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
		id: "seg-56",
		lines: [
			{
				text: "박미영 간호사가 말했어.",
				chunks: [
					{
						content: "박미영 간호사가 말했어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: '"선생님, 아직도 들리세요?"',
				chunks: [
					{
						content: '"선생님, 아직도 들리세요?"',
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
		id: "seg-57",
		lines: [
			{
				text: "준호는 고개를 끄덕였어.",
				chunks: [
					{
						content: "준호는 고개를 끄덕였어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: '"완전히 사라지지는 않을 거 같아요."',
				chunks: [
					{
						content: '"완전히 사라지지는 않을 거 같아요."',
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
		id: "seg-58",
		lines: [
			{
				text: "그 상자는 지금도 그 병원 지하에 있어.",
				chunks: [
					{
						content: "그 상자는 지금도 그 병원 지하에 있어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "야간 당직 서는 의료진들이 아직도 가끔 듣는다고 해.",
				chunks: [
					{
						content: "야간 당직 서는 의료진들이 아직도 가끔 듣는다고 해.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
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
				text: "맨발로 복도를 뛰어가는 소리를.",
				chunks: [
					{
						content: "맨발로 복도를 뛰어가는 소리를.",
						soundEffects: [
							{
								tag: "FOOTSTEP_WOOD_RUN_LIGHT",
							},
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
				text: '"선생님"이라고 부르는 작은 목소리를.',
				chunks: [
					{
						content: '"선생님"이라고 부르는 작은 목소리를.',
						soundEffects: [
							{
								tag: "CHILD_SPEAKING_NORMAL",
							},
						],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
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
				text: "근데 이상한 건 말이야.",
				chunks: [
					{
						content: "근데 이상한 건 말이야.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "준호가 그 후로 더 좋은 의사가 되었다는 거야.",
				chunks: [
					{
						content: "준호가 그 후로 더 좋은 의사가 되었다는 거야.",
					},
				],
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
			],
			visualEffects: [],
		},
	},
	{
		id: "seg-61",
		lines: [
			{
				text: "아마도 김소희가 그걸 원했던 게 아닐까?",
				chunks: [
					{
						content: "아마도 김소희가 그걸 원했던 게 아닐까?",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "복수가 아니라... 기억하라는 거 말이야.",
				chunks: [
					{
						content: "복수가 아니라... 기억하라는 거 말이야.",
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
];
