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
				text: "실제로 경기도에서 일어난 일이었어.",
				chunks: [
					{
						content: "실제로 경기도에서 일어난 일이었어.",
					},
				],
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
		id: "seg-2",
		lines: [
			{
				text: "김성호는 3대째 가업을 잇는 장의사였어.",
				chunks: [
					{
						content: "김성호는 3대째 가업을 잇는 장의사였어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "42년을 살면서 수많은 죽음을 봐왔지.",
				chunks: [
					{
						content: "42년을 살면서 수많은 죽음을 봐왔지.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
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
				text: "그런데 최근 6개월 동안 이상한 시신들이 계속 들어왔어.",
				chunks: [
					{
						content: "그런데 최근 6개월 동안 이상한 시신들이 계속 들어왔어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "모두 그린라이프 장례식장을 거쳐온 시신들이었거든.",
				chunks: [
					{
						content: "모두 ",
					},
					{
						content: "그린라이프 장례식장",
						textEffects: ["STYLE_UNDERLINE"],
					},
					{
						content: "을 거쳐온 시신들이었거든.",
					},
				],
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
				text: "성호가 부검용 카메라로 촬영을 하고 있었어.",
				chunks: [
					{
						content: "성호가 부검용 카메라로 촬영을 하고 있었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "세포 상태를 확대해서 기록하는 게 그의 습관이었거든.",
				chunks: [
					{
						content: "세포 상태를 확대해서 기록하는 게 그의 습관이었거든.",
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
			url: "goedamjip-story-image/68ee06640c773778b4c7a000/seg-4",
			type: "background",
			sustain_until: "seg-13",
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
					tag: "VISUAL_VIGNETTE",
					status: "start",
				},
			],
		},
	},
	{
		id: "seg-5",
		lines: [
			{
				text: '"역시 이상한 건 없군."',
				chunks: [
					{
						content: '"역시 이상한 건 없군."',
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "성호가 중얼거리며 카메라를 치우려 했어.",
				chunks: [
					{
						content: "성호가 중얼거리며 카메라를 치우려 했어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
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
		id: "seg-7",
		lines: [
			{
				text: "모니터 속 시신의 눈이 성호를 향해 굴러봤어.",
				chunks: [
					{
						content: "모니터 속 시신의 눈이 ",
					},
					{
						content: "성호를 향해 굴러봤어.",
						soundEffects: [
							{
								tag: "MALE_GASP_SHOCK",
							},
						],
					},
				],
				preLineEffects: {
					image: {
						url: "goedamjip-story-image/68ee06640c773778b4c7a000/seg-7",
						type: "overlay",
						sustain_until: "seg-10",
					},
					soundEffects: [
						{
							tag: "MALE_GHOST_PRESENCE",
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
		id: "seg-8",
		lines: [
			{
				text: "성호는 뒤로 물러나다 의자에 걸려 넘어졌어.",
				chunks: [
					{
						content: "성호는 뒤로 물러나다 ",
						soundEffects: [
							{
								tag: "WOOD_CREAK",
							},
						],
					},
					{
						content: "의자에 걸려 넘어졌어.",
						soundEffects: [
							{
								tag: "HEARTBEAT_SUDDEN_LOUD",
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
				text: "카메라가 바닥에 떨어지는 소리가 방 안에 울렸어.",
				chunks: [
					{
						content: "카메라가 바닥에 떨어지는 소리가 방 안에 울렸어.",
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
		id: "seg-9",
		lines: [
			{
				text: '"불가능해..."',
				chunks: [
					{
						content: '"불가능해..."',
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
				text: "성호는 떨리는 손으로 카메라를 다시 들었어.",
				chunks: [
					{
						content: "성호는 떨리는 손으로 카메라를 다시 들었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
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
				text: "하지만 모니터 속 시신은 다시 죽어있었어.",
				chunks: [
					{
						content: "하지만 모니터 속 시신은 다시 죽어있었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "마치 아무 일도 없었던 것처럼.",
				chunks: [
					{
						content: "마치 아무 일도 없었던 것처럼.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
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
				text: "그날 밤 성호는 지난 6개월간의 기록을 모두 뒤져봤어.",
				chunks: [
					{
						content: "그날 밤 성호는 지난 6개월간의 기록을 모두 뒤져봤어.",
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
				text: "이상한 시신들의 공통점을 찾기 위해서였어.",
				chunks: [
					{
						content: "이상한 시신들의 공통점을 찾기 위해서였어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
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
				text: "모든 시신에서 미세한 세포 활동이 지속되고 있었어.",
				chunks: [
					{
						content: "모든 시신에서 미세한 세포 활동이 지속되고 있었어.",
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
				text: "죽음 후에도 말이야.",
				chunks: [
					{
						content: "죽음 후에도 말이야.",
					},
				],
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
		id: "seg-13",
		lines: [
			{
				text: "그리고 모두 그린라이프 장례식장을 거쳐왔다는 점.",
				chunks: [
					{
						content: "그리고 모두 그린라이프 장례식장을 거쳐왔다는 점.",
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
				text: "성호는 직접 확인하기로 결심했어.",
				chunks: [
					{
						content: "성호는 직접 확인하기로 결심했어.",
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
					tag: "DRONE_HESITATION_SUSPENSE",
					status: "start",
				},
				{
					tag: "ROOMTONE_FLUORESCENT_BUZZ",
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
		id: "seg-14",
		lines: [
			{
				text: "다음 날 밤, 성호는 그린라이프 장례식장에 잠입했어.",
				chunks: [
					{
						content: "다음 날 밤, 성호는 그린라이프 장례식장에 잠입했어.",
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
				text: "외관상으로는 평범한 장례식장이었어.",
				chunks: [
					{
						content: "외관상으로는 평범한 장례식장이었어.",
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
			url: "goedamjip-story-image/68ee06640c773778b4c7a000/seg-14",
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
					tag: "CITY_AMBIENCE_NIGHT",
					status: "start",
				},
				{
					tag: "DRONE_SUFFOCATE_DREAD",
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
				text: "지상 3층을 모두 둘러봤지만 별다른 건 없었어.",
				chunks: [
					{
						content: "지상 3층을 모두 둘러봤지만 별다른 건 없었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "그런데 지하로 내려가는 숨겨진 엘리베이터를 발견했어.",
				chunks: [
					{
						content: "그런데 지하로 내려가는 숨겨진 엘리베이터를 발견했어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
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
				text: "카드키가 필요했지만 성호는 방법을 찾았어.",
				chunks: [
					{
						content: "카드키가 필요했지만 성호는 방법을 찾았어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "관리실에서 여분 키를 발견한 거야.",
				chunks: [
					{
						content: "관리실에서 여분 키를 발견한 거야.",
					},
				],
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
					tag: "CITY_AMBIENCE_NIGHT",
					status: "stop",
				},
			],
			visualEffects: [],
		},
	},
	{
		id: "seg-17",
		lines: [
			{
				text: "지하 1층에 도착했어.",
				chunks: [
					{
						content: "지하 1층에 도착했어.",
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
			{
				text: "차가운 공기가 얼굴을 때렸어.",
				chunks: [
					{
						content: "차가운 공기가 얼굴을 때렸어.",
						soundEffects: [
							{
								tag: "WIND_DRAFT_WHISTLE",
							},
						],
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
			url: "goedamjip-story-image/68ee06640c773778b4c7a000/seg-17",
			type: "background",
			sustain_until: "seg-17",
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
		id: "seg-18",
		lines: [
			{
				text: "거대한 냉동고와 실험실 같은 방들이 있었어.",
				chunks: [
					{
						content: "거대한 냉동고와 실험실 같은 방들이 있었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "이건 장례식장이 아니었어.",
				chunks: [
					{
						content: "이건 장례식장이 아니었어.",
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
			url: "goedamjip-story-image/68ee06640c773778b4c7a000/seg-18",
			type: "background",
			sustain_until: "seg-18",
		},
		segmentEffects: {
			soundEffects: [],
			visualEffects: [],
		},
	},
	{
		id: "seg-19",
		lines: [
			{
				text: "성호는 더 깊이 내려갔어.",
				chunks: [
					{
						content: "성호는 더 깊이 내려갔어.",
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
				text: "지하 2층에는 배양실이 있었어.",
				chunks: [
					{
						content: "지하 2층에는 배양실이 있었어.",
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
			url: "goedamjip-story-image/68ee06640c773778b4c7a000/seg-19",
			type: "background",
			sustain_until: "seg-20",
		},
		segmentEffects: {
			soundEffects: [],
			visualEffects: [],
		},
	},
	{
		id: "seg-20",
		lines: [
			{
				text: "여러 개의 배양통이 놓여있었어.",
				chunks: [
					{
						content: "여러 개의 배양통이 놓여있었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "대부분은 비어있었지만, 바닥에는 이상한 액체가 말라붙어 있었어.",
				chunks: [
					{
						content:
							"대부분은 비어있었지만, 바닥에는 이상한 액체가 말라붙어 있었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
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
				text: "지하 3층으로 더 내려갔어.",
				chunks: [
					{
						content: "지하 3층으로 더 내려갔어.",
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
				text: "여기서부터 진짜 이상한 일들이 시작됐어.",
				chunks: [
					{
						content: "여기서부터 진짜 이상한 일들이 시작됐어.",
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
			url: "goedamjip-story-image/68ee06640c773778b4c7a000/seg-21",
			type: "background",
			sustain_until: "seg-27",
		},
		segmentEffects: {
			soundEffects: [],
			visualEffects: [],
		},
	},
	{
		id: "seg-22",
		lines: [
			{
				text: "어둠 속에서 미세한 끌리는 소리가 들렸어.",
				chunks: [
					{
						content: "어둠 속에서 미세한 끌리는 소리가 들렸어.",
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
				text: "성호는 핸드폰 플래시로 주변을 비췄어.",
				chunks: [
					{
						content: "성호는 핸드폰 플래시로 주변을 비췄어.",
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
			visualEffects: [
				{
					tag: "EFFECT_FLASHLIGHT",
					status: "start",
				},
			],
		},
	},
	{
		id: "seg-23",
		lines: [
			{
				text: '"그냥 파이프 소리였나."',
				chunks: [
					{
						content: '"그냥 파이프 소리였나."',
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
				text: "성호가 안심하며 플래시를 끄려던 순간이었어.",
				chunks: [
					{
						content: "성호가 안심하며 플래시를 끄려던 순간이었어.",
					},
				],
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
		id: "seg-24",
		lines: [
			{
				text: "바로 앞 1미터 거리에 '그것'이 서 있었어.",
				chunks: [
					{
						content: "바로 앞 1미터 거리에 '그것'이 서 있었어.",
						soundEffects: [
							{
								tag: "HEARTBEAT_SUDDEN_LOUD",
							},
						],
					},
				],
				preLineEffects: {
					image: {
						url: "goedamjip-story-image/68ee06640c773778b4c7a000/seg-24",
						type: "overlay",
						sustain_until: "seg-27",
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
					tag: "DRONE_SURROUNDED_THREAT",
					status: "start",
				},
			],
			visualEffects: [],
		},
	},
	{
		id: "seg-25",
		lines: [
			{
				text: "인간의 형태였지만 관절이 이상하게 꺾여있었어.",
				chunks: [
					{
						content: "인간의 형태였지만 관절이 이상하게 꺾여있었어.",
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
				text: "피부는 계속 벗겨지고 다시 자라나고 있었어.",
				chunks: [
					{
						content: "피부는 계속 벗겨지고 다시 자라나고 있었어.",
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
		id: "seg-26",
		lines: [
			{
				text: "성호는 비명을 지르며 뒤로 넘어졌어.",
				chunks: [
					{
						content: "성호는 비명을 지르며 뒤로 넘어졌어.",
						soundEffects: [
							{
								tag: "MALE_SCREAM_TERROR",
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
				text: "그것은 어색한 관절 움직임으로 천천히 다가왔어.",
				chunks: [
					{
						content: "그것은 어색한 관절 움직임으로 천천히 다가왔어.",
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
		id: "seg-27",
		lines: [
			{
				text: "성호는 필사적으로 일어나 계단으로 뛰었어.",
				chunks: [
					{
						content: "성호는 필사적으로 일어나 계단으로 뛰었어.",
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
				text: "그것의 꾸르륵거리는 소리가 뒤에서 따라왔어.",
				chunks: [
					{
						content: "그것의 꾸르륵거리는 소리가 뒤에서 따라왔어.",
						soundEffects: [
							{
								tag: "CHEWING_WET_GRUESOME",
							},
						],
					},
				],
				preLineEffects: {
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
					status: "stop",
				},
			],
		},
	},
	{
		id: "seg-28",
		lines: [
			{
				text: "지하 4층으로 도망쳤어.",
				chunks: [
					{
						content: "지하 4층으로 도망쳤어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "여기는 폐쇄된 연구실들이 있었어.",
				chunks: [
					{
						content: "여기는 폐쇄된 연구실들이 있었어.",
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
			url: "goedamjip-story-image/68ee06640c773778b4c7a000/seg-28",
			type: "background",
			sustain_until: "seg-31",
		},
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
		id: "seg-29",
		lines: [
			{
				text: "한 연구실에서 박민수 박사의 연구 기록을 발견했어.",
				chunks: [
					{
						content: "한 연구실에서 박민수 박사의 연구 기록을 발견했어.",
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
				text: '"세포재생 프로젝트" 파일이었어.',
				chunks: [
					{
						content: '"세포재생 프로젝트" 파일이었어.',
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
		id: "seg-30",
		lines: [
			{
				text: "기록에 따르면 죽은 세포를 되살리는 실험이었어.",
				chunks: [
					{
						content: "기록에 따르면 죽은 세포를 되살리는 실험이었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "하지만 모든 실험이 실패했다고 나와있었어.",
				chunks: [
					{
						content: "하지만 모든 실험이 실패했다고 나와있었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
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
				text: '"불완전한 재생... 지속적 분해와 재생 반복...',
				chunks: [
					{
						content: '"불완전한 재생... 지속적 분해와 재생 반복...',
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
				text: '피실험체들이 극심한 고통을 호소..."',
				chunks: [
					{
						content: '피실험체들이 극심한 고통을 호소..."',
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
					tag: "VISUAL_VIGNETTE",
					status: "stop",
				},
				{
					tag: "ROOMTONE_BASEMENT_HUM",
					status: "stop",
				},
				{
					tag: "DRONE_SURROUNDED_THREAT",
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
		id: "seg-32",
		lines: [
			{
				text: "성호는 더 아래층으로 내려갔어.",
				chunks: [
					{
						content: "성호는 더 아래층으로 내려갔어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "지하 5층에는 거대한 배양실이 있었어.",
				chunks: [
					{
						content: "지하 5층에는 거대한 배양실이 있었어.",
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
			url: "goedamjip-story-image/68ee06640c773778b4c7a000/seg-32",
			type: "background",
			sustain_until: "seg-39",
		},
		segmentEffects: {
			soundEffects: [
				{
					tag: "ROOMTONE_WAREHOUSE_ECHO",
					status: "start",
				},
				{
					tag: "MUSIC_TITAN_LAMENT",
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
				text: "수십 개의 배양통이 줄지어 서 있었어.",
				chunks: [
					{
						content: "수십 개의 배양통이 줄지어 서 있었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "모든 것이 고요했어.",
				chunks: [
					{
						content: "모든 것이 고요했어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
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
				text: '"다행히 모두 비활성 상태인 것 같아."',
				chunks: [
					{
						content: '"다행히 모두 비활성 상태인 것 같아."',
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "성호가 나레이션하며 가까이 다가갔어.",
				chunks: [
					{
						content: "성호가 나레이션하며 가까이 다가갔어.",
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
		id: "seg-35",
		lines: [
			{
				text: "그의 숨결이 유리에 닿는 순간이었어.",
				chunks: [
					{
						content: "그의 숨결이 유리에 닿는 순간이었어.",
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
			soundEffects: [],
			visualEffects: [],
		},
	},
	{
		id: "seg-36",
		lines: [
			{
				text: "모든 배양통이 동시에 활성화됐어.",
				chunks: [
					{
						content: "모든 배양통이 동시에 활성화됐어.",
						textEffects: ["GLITCH"],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [
						{
							tag: "ALARM_BLARING_GENERIC",
						},
					],
					visualEffects: ["SCREEN_SHAKE"],
				},
			},
			{
				text: "실험체들이 일제히 눈을 떴어.",
				chunks: [
					{
						content: "실험체들이 일제히 눈을 떴어.",
						textEffects: ["PULSE_FAST"],
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
		id: "seg-37",
		lines: [
			{
				text: "성호는 경악하며 뒤로 물러났어.",
				chunks: [
					{
						content: "성호는 경악하며 뒤로 물러났어.",
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
				text: "하지만 배양통들이 차례로 깨지기 시작했어.",
				chunks: [
					{
						content: "하지만 배양통들이 차례로 깨지기 시작했어.",
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
		id: "seg-38",
		lines: [
			{
				text: "쏴아아아아!",
				chunks: [
					{
						content: "쏴아아아아!",
						textEffects: ["SHAKE"],
						soundEffects: [
							{
								tag: "SHOWER_TURN_ON",
							},
						],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
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
				text: "액체가 바닥으로 쏟아졌어.",
				chunks: [
					{
						content: "액체가 바닥으로 쏟아졌어.",
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
				text: "실험체들이 배양통에서 기어나오고 있었어.",
				chunks: [
					{
						content: "실험체들이 배양통에서 기어나오고 있었어.",
					},
				],
				preLineEffects: {
					image: {
						url: "goedamjip-story-image/68ee06640c773778b4c7a000/seg-39",
						type: "overlay",
						sustain_until: "seg-39",
					},
					soundEffects: [
						{
							tag: "SLITHERING_ON_FLOOR",
						},
						{
							tag: "CREATURE_GUTTURAL_GROAN",
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
				{
					tag: "MUSIC_TITAN_LAMENT",
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
		id: "seg-40",
		lines: [
			{
				text: "성호는 더 아래층으로 뛰어갔어.",
				chunks: [
					{
						content: "성호는 더 아래층으로 뛰어갔어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "지하 6층은 통제실이었어.",
				chunks: [
					{
						content: "지하 6층은 통제실이었어.",
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
			url: "goedamjip-story-image/68ee06640c773778b4c7a000/seg-40",
			type: "background",
			sustain_until: "seg-41",
		},
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
					tag: "SCREEN_FLICKER",
					status: "start",
				},
			],
		},
	},
	{
		id: "seg-41",
		lines: [
			{
				text: "여기서 모든 실험 과정을 확인할 수 있었어.",
				chunks: [
					{
						content: "여기서 모든 실험 과정을 확인할 수 있었어.",
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
				text: "수백 명의 사람들이 실험체가 됐다는 기록이 있었어.",
				chunks: [
					{
						content: "수백 명의 사람들이 실험체가 됐다는 기록이 있었어.",
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
					tag: "SCREEN_FLICKER",
					status: "stop",
				},
			],
		},
	},
	{
		id: "seg-42",
		lines: [
			{
				text: "마지막 지하 7층으로 내려갔어.",
				chunks: [
					{
						content: "마지막 지하 7층으로 내려갔어.",
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
				text: "박민수 박사의 마지막 메시지가 남겨져 있었어.",
				chunks: [
					{
						content: "박민수 박사의 마지막 메시지가 남겨져 있었어.",
						textEffects: ["GLITCH"],
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
		background: {
			url: "goedamjip-story-image/68ee06640c773778b4c7a000/seg-42",
			type: "background",
			sustain_until: "seg-52",
		},
		segmentEffects: {
			soundEffects: [
				{
					tag: "ROOMTONE_BASEMENT_HUM",
					status: "start",
				},
				{
					tag: "WIND_DRAFT_WHISTLE",
					status: "start",
				},
				{
					tag: "DRONE_ABOMINATION_PRESENCE",
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
		id: "seg-43",
		lines: [
			{
				text: '"실험을 중단해야 합니다.',
				chunks: [
					{
						content: '"실험을 중단해야 합니다.',
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
				text: "그들은 죽지도 살지도 못하는 상태입니다.",
				chunks: [
					{
						content: "그들은 죽지도 살지도 못하는 상태입니다.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: '냉각 시스템만이 유일한 억제책입니다."',
				chunks: [
					{
						content: "냉각 시스템만이 유일한 억제책입니다.",
						soundEffects: [
							{
								tag: "RECORDING_PLAYBACK_STOP",
							},
						],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
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
				text: "성호는 모든 증거를 핸드폰으로 촬영했어.",
				chunks: [
					{
						content: "성호는 모든 증거를 핸드폰으로 촬영했어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "그리고 외부로 전송했어.",
				chunks: [
					{
						content: "그리고 외부로 전송했어.",
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
		id: "seg-45",
		lines: [
			{
				text: "이제 이곳을 파괴해야 했어.",
				chunks: [
					{
						content: "이제 이곳을 파괴해야 했어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "냉각 시스템의 메인 장치를 찾았어.",
				chunks: [
					{
						content: "냉각 시스템의 메인 장치를 찾았어.",
					},
				],
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
				text: "쿵!",
				chunks: [
					{
						content: "쿵!",
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
		id: "seg-47",
		lines: [
			{
				text: "성호가 도끼로 냉각 장치를 내리쳤어.",
				chunks: [
					{
						content: "성호가 도끼로 냉각 장치를 내리쳤어.",
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
				text: "붉은 경고등이 깜빡이기 시작했어.",
				chunks: [
					{
						content: "붉은 경고등이 깜빡이기 시작했어.",
						textEffects: ["GLOW_RED"],
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
				text: "위층에서 실험체들의 움직임이 활발해졌어.",
				chunks: [
					{
						content: "위층에서 실험체들의 움직임이 활발해졌어.",
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
				text: "성호는 급히 계단으로 향했어.",
				chunks: [
					{
						content: "성호는 급히 계단으로 향했어.",
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
		id: "seg-49",
		lines: [
			{
				text: "지하 2층까지 올라왔을 때였어.",
				chunks: [
					{
						content: "지하 2층까지 올라왔을 때였어.",
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
				text: '"거의 다 왔다."',
				chunks: [
					{
						content: '"거의 다 왔다."',
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
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
				text: "안도의 한숨을 쉬는 순간이었어.",
				chunks: [
					{
						content: "안도의 한숨을 쉬는 순간이었어.",
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
				text: "계단 틈새로 차가운 손이 뻗어나와 성호의 발목을 움켜잡았어.",
				chunks: [
					{
						content: "계단 틈새로 차가운 손이 뻗어나와 ",
					},
					{
						content: "성호의 발목을 움켜잡았어.",
						soundEffects: [
							{
								tag: "BREATH_HEAVY_PANIC",
							},
						],
					},
				],
				preLineEffects: {
					image: {
						url: "goedamjip-story-image/68ee06640c773778b4c7a000/seg-51",
						type: "jumpscare",
						sustain_until: "seg-51",
					},
					soundEffects: [
						{
							tag: "METAL_CREAK",
						},
						{
							tag: "MALE_GHOST_PRESENCE",
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
				text: "성호는 필사적으로 발을 빼내려 했어.",
				chunks: [
					{
						content: "성호는 필사적으로 발을 빼내려 했어.",
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
				text: "계단 난간을 잡고 위로 기어올랐어.",
				chunks: [
					{
						content: "계단 난간을 잡고 위로 기어올랐어.",
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
			soundEffects: [
				{
					tag: "ROOMTONE_BASEMENT_HUM",
					status: "stop",
				},
				{
					tag: "WIND_DRAFT_WHISTLE",
					status: "stop",
				},
				{
					tag: "DRONE_ABOMINATION_PRESENCE",
					status: "stop",
				},
				{
					tag: "MUSIC_DEDUCTION_SUSPENSE",
					status: "stop",
				},
			],
			visualEffects: [
				{
					tag: "OVERLAY_FOG",
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
		id: "seg-53",
		lines: [
			{
				text: "드디어 지상으로 탈출했어.",
				chunks: [
					{
						content: "드디어 지상으로 탈출했어.",
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
				text: "뒤에서 건물이 무너지는 소리가 들렸어.",
				chunks: [
					{
						content: "뒤에서 건물이 무너지는 소리가 들렸어.",
						soundEffects: [
							{
								tag: "EXPLOSION_DISTANT",
							},
							{
								tag: "METAL_CREAK",
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
		background: {
			url: "goedamjip-story-image/68ee06640c773778b4c7a000/seg-53",
			type: "background",
			sustain_until: "seg-53",
		},
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
		id: "seg-54",
		lines: [
			{
				text: "성호는 자신이 찍은 영상을 언론에 제보했어.",
				chunks: [
					{
						content: "성호는 자신이 찍은 영상을 언론에 제보했어.",
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
			{
				text: "하지만 그 후 모든 증거가 사라졌어.",
				chunks: [
					{
						content: "하지만 그 후 모든 증거가 사라졌어.",
						textEffects: ["GLITCH"],
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
					tag: "ROOMTONE_EMPTY_NEUTRAL",
					status: "start",
				},
			],
			visualEffects: [],
		},
	},
	{
		id: "seg-55",
		lines: [
			{
				text: "정부에서 「기밀 사항」으로 분류했거든.",
				chunks: [
					{
						content: "정부에서 ",
					},
					{
						content: "「기밀 사항」",
						textEffects: ["GLITCH"],
						soundEffects: [
							{
								tag: "SMARTPHONE_NOTIFICATION_GLITCH",
							},
						],
					},
					{
						content: "으로 분류했거든.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "성호의 증언도 묻혀버렸어.",
				chunks: [
					{
						content: "성호의 증언도 묻혀버렸어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
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
				text: "그 이후로도 그 지역에서 화장이 제대로 안 되는 시신들이 계속 발견되고 있다는 거야.",
				chunks: [
					{
						content:
							"그 이후로도 그 지역에서 화장이 제대로 안 되는 시신들이 계속 발견되고 있다는 거야.",
						soundEffects: [
							{
								tag: "MALE_GHOST_PRESENCE",
							},
						],
					},
				],
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
					tag: "WIND_DRAFT_WHISTLE",
					status: "stop",
				},
				{
					tag: "DRONE_ABOMINATION_PRESENCE",
					status: "stop",
				},
				{
					tag: "MUSIC_DEDUCTION_SUSPENSE",
					status: "stop",
				},
			],
			visualEffects: [
				{
					tag: "OVERLAY_FOG",
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
		id: "seg-57",
		lines: [
			{
				text: "냉각 시스템을 파괴한 건 일시적인 봉인일 뿐이었어.",
				chunks: [
					{
						content: "냉각 시스템을 파괴한 건 일시적인 봉인일 뿐이었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "지금도 지하 깊은 곳에서는...",
				chunks: [
					{
						content: "지금도 지하 깊은 곳에서는...",
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
		id: "seg-58",
		lines: [
			{
				text: "아직 끝나지 않았어.",
				chunks: [
					{
						content: "아직 끝나지 않았어.",
						textEffects: ["PULSE_SLOW"],
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
];
