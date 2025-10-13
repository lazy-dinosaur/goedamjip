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
				text: "실제로 경기도 산간지역에서 있었던 일이야.",
				chunks: [
					{
						content: "실제로 경기도 산간지역에서 있었던 일이야.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [
						{
							tag: "CROW_CAW_SINGLE",
						},
					],
					visualEffects: [],
				},
			},
		],
		background: {
			url: "goedamjip-story-image/68ea7467f1ddfa774a49b000/seg-1",
			type: "background",
			sustain_until: "seg-7",
		},
		segmentEffects: {
			soundEffects: [
				{
					tag: "DRONE_LOOMING_PRESENCE",
					status: "start",
				},
				{
					tag: "WIND_LEAVES_GENTLE",
					status: "start",
				},
			],
			visualEffects: [
				{
					tag: "OVERLAY_FOG",
					status: "start",
				},
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
				text: "강민호라는 사람이 있었어.",
				chunks: [
					{
						content: "강민호라는 사람이 있었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "42살, 제약회사 연구원이었는데.",
				chunks: [
					{
						content: "42살, 제약회사 연구원이었는데.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
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
				text: "어느 날 병원에서 깨어났어.",
				chunks: [
					{
						content: "어느 날 병원에서 깨어났어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [
						{
							tag: "HEART_MONITOR_STEADY",
						},
					],
					visualEffects: ["SCREEN_BLUR"],
				},
			},
			{
				text: "기억을 완전히 잃은 채로.",
				chunks: [
					{
						content: "기억을 완전히 잃은 채로.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
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
				text: "의사가 말하길, 산에서 쓰러진 채로 발견됐다더군.",
				chunks: [
					{
						content: "의사가 말하길, 산에서 쓰러진 채로 발견됐다더군.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "머리에 큰 상처가 있었다고 해.",
				chunks: [
					{
						content: "머리에 큰 상처가 있었다고 해.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
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
				text: "그런데 이상한 건.",
				chunks: [
					{
						content: "그런데 이상한 건.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "손가락 끝이 계속 따끔거렸다는 거야.",
				chunks: [
					{
						content: "손가락 끝이 계속 따끔거렸다는 거야.",
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
				text: "퇴원하면서 본인 소지품을 받았어.",
				chunks: [
					{
						content: "퇴원하면서 본인 소지품을 받았어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [
						{
							tag: "ZIPPER_SOUND",
						},
					],
					visualEffects: [],
				},
			},
			{
				text: "그 안에 'BioChem Lab' 출입증이 들어있었어.",
				chunks: [
					{
						content: "그 안에 'BioChem Lab' 출입증이 들어있었어.",
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
					tag: "DRONE_LOOMING_PRESENCE",
					status: "stop",
				},
				{
					tag: "WIND_LEAVES_GENTLE",
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
		id: "seg-7",
		lines: [
			{
				text: "민호는 그곳으로 가봤어.",
				chunks: [
					{
						content: "민호는 그곳으로 가봤어.",
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
				text: "혹시 자신의 과거를 알 수 있을까 해서.",
				chunks: [
					{
						content: "혹시 자신의 과거를 알 수 있을까 해서.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
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
				text: "경기도 산골짜기 깊숙한 곳.",
				chunks: [
					{
						content: "경기도 산골짜기 깊숙한 곳.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "을씨년스럽게 버려진 연구소 건물이 있었어.",
				chunks: [
					{
						content: "을씨년스럽게 버려진 연구소 건물이 있었어.",
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
			url: "goedamjip-story-image/68ea7467f1ddfa774a49b000/seg-8",
			type: "background",
			sustain_until: "seg-9",
		},
		segmentEffects: {
			soundEffects: [
				{
					tag: "WIND_LEAVES_GENTLE",
					status: "start",
				},
				{
					tag: "WIND_LEAVES_GENTLE",
					status: "stop",
				},
			],
			visualEffects: [
				{
					tag: "OVERLAY_FOG",
					status: "start",
				},
				{
					tag: "OVERLAY_FOG",
					status: "stop",
				},
			],
		},
	},
	{
		id: "seg-9",
		lines: [
			{
				text: "정문은 굳게 잠겨 있었지만.",
				chunks: [
					{
						content: "정문은 굳게 잠겨 있었지만.",
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
				text: "옆쪽 창문이 깨져 있었어.",
				chunks: [
					{
						content: "옆쪽 창문이 깨져 있었어.",
						soundEffects: [
							{
								tag: "GLASS_BREAK",
							},
						],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
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
				text: "민호는 그 안으로 들어갔어.",
				chunks: [
					{
						content: "민호는 그 안으로 들어갔어.",
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
				text: "손전등 불빛만이 어둠을 비추고 있었어.",
				chunks: [
					{
						content: "손전등 불빛만이 어둠을 비추고 있었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [
						{
							tag: "SWITCH_ONOFF_TOGGLE",
						},
					],
					visualEffects: [],
				},
			},
		],
		background: {
			url: "goedamjip-story-image/68ea7467f1ddfa774a49b000/seg-10",
			type: "background",
			sustain_until: "seg-20",
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
				text: "복도 양쪽으로 실험실들이 늘어서 있었어.",
				chunks: [
					{
						content: "복도 양쪽으로 실험실들이 늘어서 있었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "한 발, 한 발, 조심스럽게 걸어갔어.",
				chunks: [
					{
						content: "한 발, 한 발, 조심스럽게 걸어갔어.",
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
		id: "seg-12",
		lines: [
			{
				text: "첫 번째 실험실을 들여다봤어.",
				chunks: [
					{
						content: "첫 번째 실험실을 들여다봤어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "깨진 유리관들이 바닥에 널려 있었어.",
				chunks: [
					{
						content: "깨진 유리관들이 바닥에 널려 있었어.",
						soundEffects: [
							{
								tag: "GLASS_BREAK",
							},
						],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
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
				text: "두 번째 실험실도 마찬가지였어.",
				chunks: [
					{
						content: "두 번째 실험실도 마찬가지였어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "벽면에는 이상한 얼룩들이 묻어 있었어.",
				chunks: [
					{
						content: "벽면에는 이상한 얼룩들이 묻어 있었어.",
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
		id: "seg-14",
		lines: [
			{
				text: "세 번째 실험실에서 멈췄어.",
				chunks: [
					{
						content: "세 번째 실험실에서 멈췄어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "뭔가 다른 냄새가 났거든.",
				chunks: [
					{
						content: "뭔가 다른 냄새가 났거든.",
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
		id: "seg-15",
		lines: [
			{
				text: "그때 벽을 손전등으로 비춰봤어.",
				chunks: [
					{
						content: "그때 벽을 손전등으로 비춰봤어.",
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
				text: "아무것도 없는 것 같았어.",
				chunks: [
					{
						content: "아무것도 없는 것 같았어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
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
				text: '"아무것도 없네..."',
				chunks: [
					{
						content: '"아무것도 없네..."',
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
				text: "민호가 중얼거렸어.",
				chunks: [
					{
						content: "민호가 중얼거렸어.",
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
		id: "seg-17",
		lines: [
			{
				text: "쨍!",
				chunks: [
					{
						content: "쨍!",
						textEffects: ["SHAKE"],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [
						{
							tag: "GLASS_SHATTER",
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
		id: "seg-18",
		lines: [
			{
				text: "어디선가 유리가 깨지는 소리가 났어.",
				chunks: [
					{
						content: "어디선가 유리가 깨지는 소리가 났어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [
						{
							tag: "WINDOW_GLASS_SHATTER",
						},
					],
					visualEffects: [],
				},
			},
			{
				text: "깜짝 놀란 민호가 손전등을 떨어뜨렸어.",
				chunks: [
					{
						content: "깜짝 놀란 민호가",
					},
					{
						content: "손전등을 떨어뜨렸어.",
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
		id: "seg-19",
		lines: [
			{
				text: "다시 주워서 벽을 비춰보니.",
				chunks: [
					{
						content: "다시 주워서 벽을 비춰보니.",
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
				text: "깊게 파인 긁힌 자국들이 선명하게 드러나 있었어.",
				chunks: [
					{
						content: "깊게 파인 긁힌 자국들이 선명하게 드러나 있었어.",
						textEffects: ["INK_REVEAL"],
						visualEffects: ["OVERLAY_HANDPRINT"],
					},
				],
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
		id: "seg-20",
		lines: [
			{
				text: "뒤로 넘어지면서 민호는 깨달았어.",
				chunks: [
					{
						content: "뒤로 넘어지면서",
						soundEffects: [
							{
								tag: "BREATH_HEAVY_PANIC",
							},
						],
					},
					{
						content: "민호는 깨달았어.",
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
				text: "이곳에서 뭔가 끔찍한 일이 있었다는 걸.",
				chunks: [
					{
						content: "이곳에서 뭔가 끔찍한 일이 있었다는 걸.",
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
					status: "start",
				},
				{
					tag: "ROOMTONE_BASEMENT_HUM",
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
		id: "seg-21",
		lines: [
			{
				text: "급하게 연구소를 나와서 마을로 향했어.",
				chunks: [
					{
						content: "급하게 연구소를 나와서 마을로 향했어.",
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
		],
		background: {
			url: "goedamjip-story-image/68ea7467f1ddfa774a49b000/seg-21",
			type: "background",
			sustain_until: "seg-28",
		},
		segmentEffects: {
			soundEffects: [
				{
					tag: "RURAL_AMBIENCE_NIGHT",
					status: "start",
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
		id: "seg-22",
		lines: [
			{
				text: "근데 마을 사람들 반응이 이상했어.",
				chunks: [
					{
						content: "근데 마을 사람들 반응이 이상했어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "BioChem Lab 얘기만 나오면 다들 피했거든.",
				chunks: [
					{
						content: "BioChem Lab 얘기만 나오면 ",
					},
					{
						content: "다들 피했거든.",
						soundEffects: [
							{
								tag: "SHUSH_CLOSE",
							},
						],
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
		],
		background: null,
		segmentEffects: {
			soundEffects: [
				{
					tag: "DRONE_UNSTABLE_PULSE",
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
		id: "seg-23",
		lines: [
			{
				text: "첫 번째 만난 아주머니는.",
				chunks: [
					{
						content: "첫 번째 만난 아주머니는.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: '"그런 곳은 모른다"며 문을 쾅 닫아버렸어.',
				chunks: [
					{
						content: '"그런 곳은 모른다"며 ',
					},
					{
						content: "문을 쾅 닫아버렸어.",
						soundEffects: [
							{
								tag: "MALE_BREATH_CLOSE",
							},
						],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [
						{
							tag: "DOOR_SLAM",
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
				text: "두 번째 만난 아저씨는.",
				chunks: [
					{
						content: "두 번째 만난 아저씨는.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "고개만 절레절레 흔들며 도망가듯 사라졌어.",
				chunks: [
					{
						content: "고개만 절레절레 흔들며 도망가듯 사라졌어.",
						textEffects: ["JITTER"],
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
		id: "seg-25",
		lines: [
			{
				text: "그러던 중 박할아버지라는 분을 만났어.",
				chunks: [
					{
						content: "그러던 중 박할아버지라는 분을 만났어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
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
				text: "박할아버지가 민호를 유심히 쳐다봤어.",
				chunks: [
					{
						content: "박할아버지가 민호를 유심히 쳐다봤어.",
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
				text: '"당신... 혹시 그때 그 사람?"',
				chunks: [
					{
						content: '"당신... 혹시 그때 그 사람?"',
						textEffects: ["STYLE_BOLD"],
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
		id: "seg-27",
		lines: [
			{
				text: "박할아버지가 신문 기사 하나를 내밀었어.",
				chunks: [
					{
						content: "박할아버지가 신문 기사 하나를 내밀었어.",
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
				text: "'불법 인체실험 의혹, BioChem Lab 강제 폐쇄'",
				chunks: [
					{
						content: "'불법 인체실험 의혹, BioChem Lab 강제 폐쇄'",
						textEffects: ["INK_REVEAL", "STYLE_BOLD"],
					},
				],
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
		id: "seg-28",
		lines: [
			{
				text: '"이 기사 한번 읽어보시오."',
				chunks: [
					{
						content: '"이 기사 한번 읽어보시오."',
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
				text: "박할아버지의 목소리가 차갑게 식어있었어.",
				chunks: [
					{
						content: "박할아버지의 목소리가 차갑게 식어있었어.",
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
		id: "seg-29",
		lines: [
			{
				text: "민호는 자기 집으로 돌아갔어.",
				chunks: [
					{
						content: "민호는 자기 집으로 돌아갔어.",
						soundEffects: [
							{
								tag: "FOOTSTEP_LIGHT_TAPS",
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
			{
				text: "더 많은 단서를 찾아보려고.",
				chunks: [
					{
						content: "더 많은 단서를 찾아보려고.",
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
			url: "goedamjip-story-image/68ea7467f1ddfa774a49b000/seg-29",
			type: "background",
			sustain_until: "seg-65",
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
				{
					tag: "VISUAL_VIGNETTE",
					status: "stop",
				},
			],
		},
	},
	{
		id: "seg-30",
		lines: [
			{
				text: "거실을 뒤졌지만 별다른 건 없었어.",
				chunks: [
					{
						content: "거실을 뒤졌지만 별다른 건 없었어.",
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
			visualEffects: [
				{
					tag: "EFFECT_FLASHLIGHT",
					status: "start",
				},
			],
		},
	},
	{
		id: "seg-31",
		lines: [
			{
				text: "침실 옷장도 열어봤어. 평범한 옷들만 걸려 있었어.",
				chunks: [
					{
						content: "침실 옷장도 열어봤어.",
						soundEffects: [
							{
								tag: "DOOR_CREAK_SLOW",
							},
						],
					},
					{
						content: "평범한 옷들만 걸려 있었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
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
				text: "부엌 서랍들도 하나씩 다 열어봤어. 일상적인 물건들뿐이었어.",
				chunks: [
					{
						content: "부엌 서랍들도 하나씩 다 열어봤어.",
						soundEffects: [
							{
								tag: "WOOD_CREAK",
							},
						],
					},
					{
						content: "일상적인 물건들뿐이었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
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
				text: "마지막으로 서재에 들어갔어.",
				chunks: [
					{
						content: "마지막으로 서재에 들어갔어.",
					},
				],
				preLineEffects: {
					image: {
						url: "goedamjip-story-image/68ea7467f1ddfa774a49b000/seg-33",
						type: "overlay",
						sustain_until: "seg-35",
					},
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
		id: "seg-34",
		lines: [
			{
				text: "그 안에서 나온 게. 두꺼운 실험 일지와 거액의 현금다발이었어.",
				chunks: [
					{
						content: "그 안에서 나온 게.",
					},
					{
						content: "두꺼운 실험 일지와 거액의 현금다발이었어.",
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
				text: "민호는 책상에 앉아서 일지를 펼쳤어.",
				chunks: [
					{
						content: "민호는 책상에 앉아서 일지를 펼쳤어.",
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
			{
				text: "서류를 정리하는데. 종이에 집중하고 있었어.",
				chunks: [
					{
						content: "서류를 정리하는데.",
						soundEffects: [
							{
								tag: "PENCIL_WRITING",
							},
						],
					},
					{
						content: "종이에 집중하고 있었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
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
				text: "첫 페이지를 넘기고.",
				chunks: [
					{
						content: "첫 페이지를 넘기고.",
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
				text: "두 번째 페이지를 보고.",
				chunks: [
					{
						content: "두 번째 페이지를 보고.",
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
			soundEffects: [
				{
					tag: "ROOMTONE_HOUSE_CREAKS",
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
		id: "seg-37",
		lines: [
			{
				text: "세 번째 페이지에서 멈췄어.",
				chunks: [
					{
						content: "세 번째 페이지에서 멈췄어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "자신의 사인이 선명하게 적혀 있었거든.",
				chunks: [
					{
						content: "자신의 사인이",
					},
					{
						content: "선명하게 적혀 있었거든.",
						textEffects: ["INK_REVEAL"],
						soundEffects: [
							{
								tag: "SWALLOWING_NERVOUS",
							},
						],
					},
				],
				preLineEffects: {
					image: {
						url: "goedamjip-story-image/68ea7467f1ddfa774a49b000/seg-37",
						type: "overlay",
						sustain_until: "seg-38",
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
			soundEffects: [
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
		id: "seg-38",
		lines: [
			{
				text: "그런데 갑자기.",
				chunks: [
					{
						content: "그런데 갑자기.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "손가락 끝에서 뭔가 꿈틀거렸어.",
				chunks: [
					{
						content: "손가락 끝에서",
					},
					{
						content: "뭔가 꿈틀거렸어.",
						textEffects: ["JITTER"],
						soundEffects: [
							{
								tag: "CREATURE_CHITTERING",
							},
						],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [
						{
							tag: "HIGH_PITCH_RINGING_EARS",
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
		id: "seg-39",
		lines: [
			{
				text: "검은 실 같은 게 피부 밑에서 꿈틀거리며 나오고 있었어.",
				chunks: [
					{
						content: "검은 실 같은 게 피부 밑에서",
					},
					{
						content: "꿈틀거리며 나오고 있었어.",
						soundEffects: [
							{
								tag: "LIQUID_DRIPPING_HEAVY",
							},
						],
					},
				],
				preLineEffects: {
					image: {
						url: "goedamjip-story-image/68ea7467f1ddfa774a49b000/seg-39",
						type: "overlay",
						sustain_until: "seg-40",
					},
					soundEffects: [
						{
							tag: "SLITHERING_ON_FLOOR",
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
		id: "seg-40",
		lines: [
			{
				text: '"아악!"',
				chunks: [
					{
						content: '"아악!"',
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
				text: "민호가 손을 격렬하게 흔들었어.",
				chunks: [
					{
						content: "민호가 손을 격렬하게 흔들었어.",
						soundEffects: [
							{
								tag: "BREATH_HEAVY_PANIC",
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
		id: "seg-41",
		lines: [
			{
				text: "책상을 박차고 일어나서.",
				chunks: [
					{
						content: "책상을 박차고 일어나서.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [
						{
							tag: "FOOTSTEP_WOOD_RUN_LIGHT",
						},
					],
					visualEffects: [],
				},
			},
			{
				text: "거울로 뛰어갔어.",
				chunks: [
					{
						content: "거울로 뛰어갔어.",
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
		id: "seg-42",
		lines: [
			{
				text: "거울 속 자신의 얼굴을 봤어.",
				chunks: [
					{
						content: "거울 속 자신의 얼굴을 봤어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "눈동자에 미세한 검은 점들이 박혀 있었어.",
				chunks: [
					{
						content: "눈동자에",
					},
					{
						content: "미세한 검은 점들이 박혀 있었어.",
						textEffects: ["GLITCH"],
						soundEffects: [
							{
								tag: "SWALLOWING_NERVOUS",
							},
						],
					},
				],
				preLineEffects: {
					image: {
						url: "goedamjip-story-image/68ea7467f1ddfa774a49b000/seg-42",
						type: "overlay",
						sustain_until: "seg-44",
					},
					soundEffects: [
						{
							tag: "HIGH_PITCH_RINGING_EARS",
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
					status: "start",
				},
			],
			visualEffects: [
				{
					tag: "OVERLAY_GLITCH",
					status: "start",
				},
			],
		},
	},
	{
		id: "seg-43",
		lines: [
			{
				text: "다시 서재로 돌아가서 실험 일지를 읽어봤어.",
				chunks: [
					{
						content: "다시 서재로 돌아가서 ",
					},
					{
						content: "실험 일지를 읽어봤어.",
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
				text: "첫 번째 기록.",
				chunks: [
					{
						content: "첫 번째 기록.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "'피험자 001, 남성 45세, 노숙자'",
				chunks: [
					{
						content: "'피험자 001, 남성 45세, 노숙자'",
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
		id: "seg-45",
		lines: [
			{
				text: "두 번째 기록.",
				chunks: [
					{
						content: "두 번째 기록.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "'피험자 002, 여성 38세, 노숙자'",
				chunks: [
					{
						content: "'피험자 002, 여성 38세, 노숙자'",
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
					tag: "ANALOG_TAPE_HISS",
					status: "stop",
				},
			],
			visualEffects: [
				{
					tag: "OVERLAY_GLITCH",
					status: "stop",
				},
			],
		},
	},
	{
		id: "seg-46",
		lines: [
			{
				text: "세 번째 기록에서 충격을 받았어.",
				chunks: [
					{
						content: "세 번째 기록에서 충격을 받았어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "'공급업체: 강민호, 수수료: 500만원'",
				chunks: [
					{
						content: "'공급업체: 강민호, 수수료: 500만원'",
						textEffects: ["INK_REVEAL"],
						soundEffects: [
							{
								tag: "SWALLOWING_NERVOUS",
							},
						],
					},
				],
				preLineEffects: {
					image: {
						url: "goedamjip-story-image/68ea7467f1ddfa774a49b000/seg-46",
						type: "overlay",
						sustain_until: "seg-47",
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
			soundEffects: [
				{
					tag: "DRONE_UNSTABLE_AIR",
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
				text: "실험 일지를 읽어보니 충격적인 내용이었어.",
				chunks: [
					{
						content: "실험 일지를 읽어보니 충격적인 내용이었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "민호 자신이 노숙자들을 실험체로 공급하는 중개업자였다는 거야. 거액의 돈을 받고 말이야.",
				chunks: [
					{
						content:
							"민호 자신이 노숙자들을 실험체로 공급하는 중개업자였다는 거야. ",
					},
					{
						content: "거액의 돈을 받고 말이야.",
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
					tag: "DRONE_UNSTABLE_AIR",
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
		id: "seg-48",
		lines: [
			{
				text: "그날 밤 잠자리에 들었어.",
				chunks: [
					{
						content: "그날 밤 잠자리에 들었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "하지만 쉽게 잠이 오지 않았어.",
				chunks: [
					{
						content: "하지만 쉽게 잠이 오지 않았어.",
					},
				],
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
			visualEffects: [
				{
					tag: "VISUAL_VIGNETTE",
					status: "start",
				},
			],
		},
	},
	{
		id: "seg-49",
		lines: [
			{
				text: "새벽 2시쯤 되어서야 겨우 잠들었어.",
				chunks: [
					{
						content: "새벽 2시쯤 되어서야 겨우 잠들었어.",
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
				text: "민호는 악몽을 꿨어.",
				chunks: [
					{
						content: "민호는 악몽을 꿨어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "실험실의 모든 캡슐이 동시에 깨지는 꿈이었어.",
				chunks: [
					{
						content: "실험실의 모든 캡슐이 동시에 깨지는 꿈이었어.",
						textEffects: ["JITTER"],
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
			soundEffects: [
				{
					tag: "DRONE_UNSTABLE_PULSE",
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
		id: "seg-51",
		lines: [
			{
				text: "하나씩 깨지기 시작하더니.",
				chunks: [
					{
						content: "하나씩 깨지기 시작하더니.",
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
				text: "둘, 셋, 넷.",
				chunks: [
					{
						content: "둘, 셋, 넷.",
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
		id: "seg-52",
		lines: [
			{
				text: "모든 캡슐이 산산조각 났어.",
				chunks: [
					{
						content: "모든 캡슐이 산산조각 났어.",
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
			{
				text: "형체 불명의 검은 덩어리들이 바닥을 기어다니고 있었어.",
				chunks: [
					{
						content: "형체 불명의 검은 덩어리들이 ",
					},
					{
						content: "바닥을 기어다니고 있었어.",
						textEffects: ["JITTER"],
					},
				],
				preLineEffects: {
					image: {
						url: "goedamjip-story-image/68ea7467f1ddfa774a49b000/seg-52",
						type: "overlay",
						sustain_until: "seg-52",
					},
					soundEffects: [
						{
							tag: "SLITHERING_ON_FLOOR",
						},
						{
							tag: "LIQUID_DRIPPING_HEAVY",
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
		id: "seg-53",
		lines: [
			{
				text: '"아니야!"',
				chunks: [
					{
						content: '"아니야!"',
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
							tag: "STATIC_BURST_LOUD",
						},
					],
					visualEffects: [],
				},
			},
			{
				text: "민호가 비명을 지르며 깨어났어.",
				chunks: [
					{
						content: "민호가 비명을 지르며 깨어났어.",
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
		id: "seg-54",
		lines: [
			{
				text: '"꿈이었구나..."',
				chunks: [
					{
						content: '"꿈이었구나..."',
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
			soundEffects: [
				{
					tag: "DRONE_UNSTABLE_PULSE",
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
		id: "seg-55",
		lines: [
			{
				text: "그런데 침대 시트를 보는 순간.",
				chunks: [
					{
						content: "그런데 침대 시트를 보는 순간.",
					},
				],
				preLineEffects: {
					image: {
						url: "goedamjip-story-image/68ea7467f1ddfa774a49b000/seg-55",
						type: "overlay",
						sustain_until: "seg-57",
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
				text: "온몸에 소름이 돋았어.",
				chunks: [
					{
						content: "온몸에 소름이 돋았어.",
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
					tag: "DRONE_SCANNER_SIGNAL",
					status: "start",
				},
			],
			visualEffects: [],
		},
	},
	{
		id: "seg-56",
		lines: [
			{
				text: "침대 전체가 검은 실들로 뒤덮여 있었어.",
				chunks: [
					{
						content: "침대 전체가 검은 실들로 뒤덮여 있었어.",
						textEffects: ["PULSE_SLOW"],
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
				text: "마치 거미줄처럼 촘촘하게.",
				chunks: [
					{
						content: "마치 거미줄처럼 촘촘하게.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
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
				text: '"으아아아악!"',
				chunks: [
					{
						content: '"으아아아악!"',
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [
						{
							tag: "MALE_SCREAM_TERROR",
						},
					],
					visualEffects: [],
				},
			},
			{
				text: "민호가 비명을 지르며 침대에서 떨어졌어.",
				chunks: [
					{
						content: "민호가 비명을 지르며 ",
					},
					{
						content: "침대에서 떨어졌어.",
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
			soundEffects: [
				{
					tag: "DRONE_SCANNER_SIGNAL",
					status: "stop",
				},
			],
			visualEffects: [],
		},
	},
	{
		id: "seg-58",
		lines: [
			{
				text: "다음 날 아침 일어나니.",
				chunks: [
					{
						content: "다음 날 아침 일어나니.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "침실 구석구석에 검은 실들이 자라기 시작했어.",
				chunks: [
					{
						content: "침실 구석구석에",
					},
					{
						content: "검은 실들이 자라기 시작했어.",
						textEffects: ["INK_REVEAL"],
					},
				],
				preLineEffects: {
					image: {
						url: "goedamjip-story-image/68ea7467f1ddfa774a49b000/seg-58",
						type: "overlay",
						sustain_until: "seg-60",
					},
					soundEffects: [
						{
							tag: "SLITHERING_ON_FLOOR",
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
					tag: "DRONE_UNSTABLE_PULSE",
					status: "start",
				},
			],
			visualEffects: [],
		},
	},
	{
		id: "seg-59",
		lines: [
			{
				text: "화장실 거울에도.",
				chunks: [
					{
						content: "화장실 거울에도.",
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
				text: "부엌 싱크대에도. 거실 소파 밑에도. 베란다 화분에도.",
				chunks: [
					{
						content: "부엌 싱크대에도.",
					},
					{
						content: "거실 소파 밑에도.",
					},
					{
						content: "베란다 화분에도.",
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
		id: "seg-60",
		lines: [
			{
				text: "다음 날부터 집안 곳곳에서 검은 실들이 자라기 시작했어.",
				chunks: [
					{
						content: "다음 날부터 집안 곳곳에서 검은 실들이 자라기 시작했어.",
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
		id: "seg-61",
		lines: [
			{
				text: "민호가 화가 날 때마다.",
				chunks: [
					{
						content: "민호가 화가 날 때마다.",
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
				text: "슬플 때마다. 무서워할 때마다.",
				chunks: [
					{
						content: "슬플 때마다.",
					},
					{
						content: "무서워할 때마다.",
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
		id: "seg-62",
		lines: [
			{
				text: "실들이 더 빠르게 번식했어.",
				chunks: [
					{
						content: "실들이 더 빠르게 번식했어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "특히 밤이 되면 더 심했어. 어둠 속에서 꿈틀거리는 게 보였거든.",
				chunks: [
					{
						content: "특히 밤이 되면 더 심했어.",
						textEffects: ["PULSE_FAST"],
					},
					{
						content: "어둠 속에서 꿈틀거리는 게 보였거든.",
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
			soundEffects: [
				{
					tag: "DRONE_UNSTABLE_PULSE",
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
		id: "seg-63",
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
				text: "'공동 연구자: 김영태, 주소: 경기도 ○○시 ○○동'",
				chunks: [
					{
						content: "'공동 연구자: 김영태, 주소: 경기도 ○○시 ○○동'",
						textEffects: ["TYPEWRITER", "STYLE_UNDERLINE"],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
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
				text: "민호는 김 박사 집을 찾아갔어.",
				chunks: [
					{
						content: "민호는 김 박사 집을 찾아갔어.",
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
				text: "혹시 해답이 있을까 해서.",
				chunks: [
					{
						content: "혹시 해답이 있을까 해서.",
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
					tag: "CITY_AMBIENCE_NIGHT",
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
				text: "김 박사 집은 단독주택이었어.",
				chunks: [
					{
						content: "김 박사 집은 단독주택이었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "대문이 반쯤 열려 있었어.",
				chunks: [
					{
						content: "대문이 반쯤 열려 있었어.",
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
			url: "goedamjip-story-image/68ea7467f1ddfa774a49b000/seg-66",
			type: "background",
			sustain_until: "seg-80",
		},
		segmentEffects: {
			soundEffects: [],
			visualEffects: [],
		},
	},
	{
		id: "seg-67",
		lines: [
			{
				text: '"안녕하세요?"',
				chunks: [
					{
						content: '"안녕하세요?"',
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "민호가 조심스럽게 불러봤어. 대답이 없었어.",
				chunks: [
					{
						content: "민호가 조심스럽게 불러봤어.",
					},
					{
						content: "대답이 없었어.",
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
				text: "현관문도 열려 있었어.",
				chunks: [
					{
						content: "현관문도 열려 있었어.",
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
				text: "신발을 벗고 들어갔어.",
				chunks: [
					{
						content: "신발을 벗고 들어갔어.",
						soundEffects: [
							{
								tag: "FOOTSTEP_WOOD_NORMAL_CREAKY",
							},
						],
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
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
				text: "거실은 엉망이었어. 가구들이 뒤엎어져 있고. 부엌으로 가봤어. 그릇들이 바닥에 깨져 있었어.",
				chunks: [
					{
						content: "거실은 엉망이었어.",
					},
					{
						content: "가구들이 뒤엎어져 있고.",
					},
					{
						content: "부엌으로 가봤어.",
						soundEffects: [
							{
								tag: "FOOTSTEP_WOOD_NORMAL_CREAKY",
							},
						],
					},
					{
						content: "그릇들이 바닥에 깨져 있었어.",
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
				text: "집 안은 조용했어.",
				chunks: [
					{
						content: "집 안은 조용했어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "복도를 따라 안쪽으로 들어갔어.",
				chunks: [
					{
						content: "복도를 따라 안쪽으로 들어갔어.",
						soundEffects: [
							{
								tag: "FOOTSTEP_WOOD_NORMAL",
							},
						],
					},
				],
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
		id: "seg-71",
		lines: [
			{
				text: "침실 문이 살짝 열려 있었어.",
				chunks: [
					{
						content: "침실 문이 살짝 열려 있었어.",
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
				text: "문을 밀고 들어가는 순간. 숨이 멎을 뻔했어.",
				chunks: [
					{
						content: "문을 밀고 들어가는 순간.",
					},
					{
						content: "숨이 멎을 뻔했어.",
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
					tag: "DRONE_STALKING_FEAR",
					status: "start",
				},
				{
					tag: "DRONE_STALKING_FEAR",
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
		id: "seg-72",
		lines: [
			{
				text: "침실에서 김 박사를 발견했어.",
				chunks: [
					{
						content: "침실에서 김 박사를 발견했어.",
					},
				],
				preLineEffects: {
					image: {
						url: "goedamjip-story-image/68ea7467f1ddfa774a49b000/seg-72",
						type: "overlay",
						sustain_until: "seg-80",
					},
					soundEffects: [
						{
							tag: "FABRIC_TEAR_SLOW",
						},
					],
					visualEffects: [],
				},
			},
			{
				text: "벽에 매달린 채로. 온몸이 검은 실로 뒤덮여 있었어. 이미 죽어있는 것 같았어.",
				chunks: [
					{
						content: "벽에 매달린 채로.",
					},
					{
						content: "온몸이 검은 실로 뒤덮여 있었어.",
					},
					{
						content: "이미 죽어있는 것 같았어.",
						textEffects: ["INK_REVEAL"],
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
					tag: "DRONE_CRUSHING_PRESSURE",
					status: "start",
				},
			],
			visualEffects: [],
		},
	},
	{
		id: "seg-73",
		lines: [
			{
				text: '"이미 죽었으니 안전하겠지..."',
				chunks: [
					{
						content: '"이미 죽었으니 안전하겠지..."',
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "민호가 조심스럽게 다가갔어.",
				chunks: [
					{
						content: "민호가 조심스럽게 다가갔어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [
						{
							tag: "WOOD_CREAK",
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
		id: "seg-74",
		lines: [
			{
				text: "김 박사의 얼굴을 자세히 봤어.",
				chunks: [
					{
						content: "김 박사의 얼굴을 자세히 봤어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "입술이 새까맣게 변해 있었어. 그 순간이었어.",
				chunks: [
					{
						content: "입술이 새까맣게 변해 있었어.",
					},
					{
						content: "그 순간이었어.",
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
		id: "seg-75",
		lines: [
			{
				text: "김 박사의 입이 갑자기 벌어졌어.",
				chunks: [
					{
						content: "김 박사의 입이 갑자기 벌어졌어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "그 안에서 수십 개의 검은 실이 뱀처럼 꿈틀거리며 민호를 향해 뻗어왔어.",
				chunks: [
					{
						content:
							"그 안에서 수십 개의 검은 실이 뱀처럼 꿈틀거리며 민호를 향해 뻗어왔어.",
						soundEffects: [
							{
								tag: "BREATH_HEAVY_PANIC",
							},
						],
						visualEffects: ["SCREEN_SHAKE"],
					},
				],
				preLineEffects: {
					image: {
						url: "goedamjip-story-image/68ea7467f1ddfa774a49b000/seg-75",
						type: "jumpscare",
						sustain_until: "seg-75",
					},
					soundEffects: [
						{
							tag: "SLITHERING_ON_FLOOR",
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
	{
		id: "seg-76",
		lines: [
			{
				text: "민호는 문을 향해 비틀거리며 도망쳤어.",
				chunks: [
					{
						content: "민호는 문을 향해 비틀거리며 도망쳤어.",
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
				text: "온몸이 벌벌 떨렸어.",
				chunks: [
					{
						content: "온몸이 벌벌 떨렸어.",
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
					tag: "DRONE_CRUSHING_PRESSURE",
					status: "stop",
				},
			],
			visualEffects: [
				{
					tag: "VISUAL_VIGNETTE",
					status: "stop",
				},
				{
					tag: "EFFECT_FLASHLIGHT",
					status: "stop",
				},
			],
		},
	},
	{
		id: "seg-77",
		lines: [
			{
				text: "집으로 돌아와서.",
				chunks: [
					{
						content: "집으로 돌아와서.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "손부터 씻었어. 그리고 실험 일지를 더 뒤졌어.",
				chunks: [
					{
						content: "손부터 씻었어.",
						soundEffects: [
							{
								tag: "FAUCET_DRIP",
							},
						],
					},
					{
						content: "그리고 실험 일지를 더 뒤졌어.",
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
		id: "seg-78",
		lines: [
			{
				text: "50페이지. 100페이지. 150페이지.",
				chunks: [
					{
						content: "50페이지. 100페이지. 150페이지.",
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
				text: "'이 물질로 기생체의 번식을 일시적으로 늦출 수 있음'",
				chunks: [
					{
						content: "'이 물질로 기생체의 번식을 일시적으로 늦출 수 있음'",
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
				text: "'부작용: 효과 지속시간 제한적'",
				chunks: [
					{
						content: "'부작용: 효과 지속시간 제한적'",
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
		id: "seg-80",
		lines: [
			{
				text: "이걸로 기생체의 번식을 늦출 수 있다는 내용이었어.",
				chunks: [
					{
						content: "이걸로 기생체의 번식을 늦출 수 있다는 내용이었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "기록에 따르면. 연구소 지하 격리구역에 마지막 샘플이 있다고 했어.",
				chunks: [
					{
						content:
							"기록에 따르면. 연구소 지하 격리구역에 마지막 샘플이 있다고 했어.",
						textEffects: ["STYLE_UNDERLINE"],
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
					tag: "ROOMTONE_BASEMENT_HUM",
					status: "start",
				},
			],
			visualEffects: [],
		},
	},
	{
		id: "seg-81",
		lines: [
			{
				text: "민호는 다시 연구소로 갔어.",
				chunks: [
					{
						content: "민호는 다시 연구소로 갔어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "이번엔 손전등 여러 개를 준비했어.",
				chunks: [
					{
						content: "이번엔 손전등 여러 개를 준비했어.",
						soundEffects: [
							{
								tag: "SWITCH_ONOFF_TOGGLE",
							},
						],
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
			url: "goedamjip-story-image/68ea7467f1ddfa774a49b000/seg-81",
			type: "background",
			sustain_until: "seg-94",
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
					tag: "EFFECT_FLASHLIGHT",
					status: "start",
				},
			],
		},
	},
	{
		id: "seg-82",
		lines: [
			{
				text: "연구소 로비에서 지하로 내려가는 계단을 찾았어.",
				chunks: [
					{
						content: "연구소 로비에서 지하로 내려가는 계단을 찾았어.",
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
				text: "한 층. 두 층.",
				chunks: [
					{
						content: "한 층. 두 층.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
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
				text: "세 번째 지하층에서 멈췄어.",
				chunks: [
					{
						content: "세 번째 지하층에서 멈췄어.",
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
				text: "'격리구역'이라는 표지판이 보였거든.",
				chunks: [
					{
						content: "'격리구역'이라는 표지판이 보였거든.",
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
			soundEffects: [],
			visualEffects: [],
		},
	},
	{
		id: "seg-84",
		lines: [
			{
				text: "지하로 내려가니 더욱 음산했어.",
				chunks: [
					{
						content: "지하로 내려가니 더욱 음산했어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "공기도 차갑고 습했어.",
				chunks: [
					{
						content: "공기도 차갑고 습했어.",
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
					tag: "DRONE_STALKING_FEAR",
					status: "start",
				},
			],
			visualEffects: [],
		},
	},
	{
		id: "seg-85",
		lines: [
			{
				text: "격리구역 문은 전자잠금이었는데.",
				chunks: [
					{
						content: "격리구역 문은 전자잠금이었는데.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "정전으로 열려 있었어. 안쪽에는 여러 개의 냉장고가 있었어.",
				chunks: [
					{
						content: "정전으로 열려 있었어.",
					},
					{
						content: "안쪽에는 여러 개의 냉장고가 있었어.",
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
		id: "seg-86",
		lines: [
			{
				text: "첫 번째 냉장고를 열어봤어.",
				chunks: [
					{
						content: "첫 번째 냉장고를 열어봤어.",
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
				text: "빈 시험관들만 있었어. 두 번째 냉장고도 비어 있었어.",
				chunks: [
					{
						content: "빈 시험관들만 있었어.",
					},
					{
						content: "두 번째 냉장고도 비어 있었어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
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
				text: "세 번째 냉장고에서 찾았어.",
				chunks: [
					{
						content: "세 번째 냉장고에서 찾았어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "'XR-7' 라벨이 붙은 작은 병을.",
				chunks: [
					{
						content: "'XR-7' 라벨이 붙은 작은 병을.",
						textEffects: ["PULSE_SLOW"],
					},
				],
				preLineEffects: {
					image: {
						url: "goedamjip-story-image/68ea7467f1ddfa774a49b000/seg-87",
						type: "overlay",
						sustain_until: "seg-89",
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
		id: "seg-88",
		lines: [
			{
				text: "냉장고에서 마지막 억제제를 찾았어.",
				chunks: [
					{
						content: "냉장고에서 마지막 억제제를 찾았어.",
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
				text: "떨리는 손으로 주사기에 넣었어.",
				chunks: [
					{
						content: "떨리는 손으로 주사기에 넣었어.",
						textEffects: ["JITTER"],
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
		id: "seg-89",
		lines: [
			{
				text: "팔에 주사를 놨어.",
				chunks: [
					{
						content: "팔에 주사를 놨어.",
					},
				],
				preLineEffects: {
					image: {
						url: null,
						type: "overlay",
					},
					soundEffects: [
						{
							tag: "SIGH_RELIEF",
						},
					],
					visualEffects: [],
				},
			},
			{
				text: '몸의 검은 실들이 움츠러드는 게 보였어. "이제 괜찮아..."',
				chunks: [
					{
						content: "몸의 검은 실들이 움츠러드는 게 보였어.",
						textEffects: ["PULSE_SLOW"],
					},
					{
						content: '"이제 괜찮아..."',
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
		id: "seg-90",
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
			soundEffects: [
				{
					tag: "ROOMTONE_BASEMENT_HUM",
					status: "stop",
				},
				{
					tag: "ROOMTONE_FLUORESCENT_BUZZ",
					status: "stop",
				},
				{
					tag: "DRONE_STALKING_FEAR",
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
		id: "seg-91",
		lines: [
			{
				text: "쿠우우우우웅!",
				chunks: [
					{
						content: "쿠우우우우웅!",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [
						{
							tag: "EXPLOSION_DISTANT",
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
					tag: "DRONE_UNSTABLE_CORE",
					status: "start",
				},
			],
			visualEffects: [
				{
					tag: "SCREEN_SHAKE",
					status: "start",
				},
			],
		},
	},
	{
		id: "seg-92",
		lines: [
			{
				text: "연구소 전체가 진동했어.",
				chunks: [
					{
						content: "연구소 전체가 진동했어.",
						soundEffects: [
							{
								tag: "EXPLOSION_DISTANT",
							},
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
				text: "어디선가 울부짖는 소리가 들려왔어. 천장에서 먼지가 떨어지기 시작했어.",
				chunks: [
					{
						content: "어디선가 울부짖는 소리가 들려왔어.",
						soundEffects: [
							{
								tag: "VOICE_WAILING_DISTANT",
							},
						],
					},
					{
						content: "천장에서 먼지가 떨어지기 시작했어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
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
				text: "민호는 주사기를 떨어뜨리고 출구를 향해 뛰었어.",
				chunks: [
					{
						content: "민호는 주사기를 떨어뜨리고 ",
						soundEffects: [
							{
								tag: "GLASS_BREAK",
							},
						],
					},
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
			{
				text: "계단을 뛰어 올라가면서. 뒤에서 무언가 따라오는 소리가 들렸어.",
				chunks: [
					{
						content: "계단을 뛰어 올라가면서.",
						soundEffects: [
							{
								tag: "FOOTSTEP_WOOD_RUN_LIGHT",
							},
						],
					},
					{
						content: "뒤에서 무언가 따라오는 소리가 들렸어.",
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
			soundEffects: [
				{
					tag: "DRONE_UNSTABLE_CORE",
					status: "stop",
				},
			],
			visualEffects: [
				{
					tag: "SCREEN_SHAKE",
					status: "stop",
				},
			],
		},
	},
	{
		id: "seg-94",
		lines: [
			{
				text: "연구소 밖으로 나와서.",
				chunks: [
					{
						content: "연구소 밖으로 나와서.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "차에 실어둔 시멘트로 입구를 봉쇄했어. 더 이상 나올 수 없게.",
				chunks: [
					{
						content: "차에 실어둔 시멘트로 입구를 봉쇄했어.",
						soundEffects: [
							{
								tag: "METAL_IMPACT_DULL",
							},
						],
					},
					{
						content: "더 이상 나올 수 없게.",
					},
				],
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
			],
			visualEffects: [],
		},
	},
	{
		id: "seg-95",
		lines: [
			{
				text: "차를 타고 도망치면서 백미러를 봤어.",
				chunks: [
					{
						content: "차를 타고 도망치면서 백미러를 봤어.",
					},
				],
				preLineEffects: {
					image: {
						url: "goedamjip-story-image/68ea7467f1ddfa774a49b000/seg-95",
						type: "overlay",
						sustain_until: "seg-100",
					},
					soundEffects: [
						{
							tag: "CREATURE_CHITTERING",
						},
					],
					visualEffects: [],
				},
			},
			{
				text: "연구소 창문 사이사이로. 검은 실들이 스며 나오고 있었어.",
				chunks: [
					{
						content: "연구소 창문 사이사이로.",
					},
					{
						content: "검은 실들이 스며 나오고 있었어.",
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
		id: "seg-96",
		lines: [
			{
				text: "민호의 몸에서 기생체는 잠시 얌전해졌어.",
				chunks: [
					{
						content: "민호의 몸에서 기생체는 잠시 얌전해졌어.",
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
				text: "하지만 억제제는 일시적일 뿐이었어.",
				chunks: [
					{
						content: "하지만 억제제는 일시적일 뿐이었어.",
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
		id: "seg-97",
		lines: [
			{
				text: "그리고 연구소에서 나온 실들이.",
				chunks: [
					{
						content: "그리고 연구소에서 나온 실들이.",
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
			{
				text: "산 전체로 퍼져나가기 시작했어.",
				chunks: [
					{
						content: "산 전체로 퍼져나가기 시작했어.",
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
					tag: "VISUAL_VIGNETTE",
					status: "start",
				},
			],
		},
	},
	{
		id: "seg-98",
		lines: [
			{
				text: "근데 이상하지 않아?",
				chunks: [
					{
						content: "근데 이상하지 않아?",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "그 연구소를 봉쇄한 지 1년이 지났는데도.",
				chunks: [
					{
						content: "그 연구소를 봉쇄한 지 1년이 지났는데도.",
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
				text: "아직도 그 주변에서는 실종자가 계속 나오고 있어.",
				chunks: [
					{
						content: "아직도 그 주변에서는 실종자가 계속 나오고 있어.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [],
					visualEffects: [],
				},
			},
			{
				text: "경찰 기록에 다 나와 있거든.",
				chunks: [
					{
						content: "경찰 기록에 다 나와 있거든.",
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
		id: "seg-100",
		lines: [
			{
				text: "그리고 강민호?",
				chunks: [
					{
						content: "그리고 강민호?",
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
				text: "그는 지금도 살아있어. 억제제를 찾아서 전국을 떠돌고 있다고 해.",
				chunks: [
					{
						content: "그는 지금도 살아있어.",
					},
					{
						content: "억제제를 찾아서 전국을 떠돌고 있다고 해.",
					},
				],
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
					tag: "VISUAL_VIGNETTE",
					status: "stop",
				},
			],
		},
	},
	{
		id: "seg-101",
		lines: [
			{
				text: "하지만 그의 몸에서 나오는 검은 실은.",
				chunks: [
					{
						content: "하지만 그의 몸에서 나오는 검은 실은.",
					},
				],
				preLineEffects: {
					image: null,
					soundEffects: [
						{
							tag: "FABRIC_TEAR_SLOW",
						},
					],
					visualEffects: [],
				},
			},
			{
				text: "갈수록 더 굵어지고 있다더군.",
				chunks: [
					{
						content: "갈수록 더 굵어지고 있다더군.",
						textEffects: ["JITTER"],
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
			soundEffects: [
				{
					tag: "DRONE_SCANNER_SIGNAL",
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
		id: "seg-102",
		lines: [
			{
				text: "언젠가는 억제제도 소용없어질 거야.",
				chunks: [
					{
						content: "언젠가는 억제제도 소용없어질 거야.",
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
				text: "그때가 되면...",
				chunks: [
					{
						content: "그때가 되면...",
						textEffects: ["TYPEWRITER"],
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
		id: "seg-103",
		lines: [
			{
				text: "민호뿐만 아니라 우리 모두가.",
				chunks: [
					{
						content: "민호뿐만 아니라 우리 모두가.",
						textEffects: ["TEXT_SCRAMBLE_GLITCH"],
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
				text: "그 검은 실들에게 잠식당할지도 모르겠어.",
				chunks: [
					{
						content: "그 검은 실들에게 잠식당할지도 모르겠어.",
						textEffects: ["SHAKE"],
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
];
