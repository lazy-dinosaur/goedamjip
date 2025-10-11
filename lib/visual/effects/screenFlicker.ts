import gsap from "gsap";
import { VisualEffectCreator } from "../visualEffectRegistry";

export const SCREEN_FLICKER: VisualEffectCreator = (options = {}) => {
	const { loop = true } = options;

	// Create wrapper element
	const wrapper = document.createElement("div");
	wrapper.style.cssText = `
		position: absolute;
		inset: 0;
		pointer-events: none;
		z-index: 50;
		overflow: hidden;
		background: transparent;
	`;

	// Ceiling light effect - 부채꼴 모양의 빛
	const ceilingLight = document.createElement("div");
	ceilingLight.style.cssText = `
		position: absolute;
		top: -20%;
		left: 50%;
		transform: translateX(-50%);
		width: 150%;
		height: 120%;
		z-index: 1;
		opacity: 0;
		pointer-events: none;
	`;

	// 부채꼴 빛 - 추가 레이어
	const lightBeam = document.createElement("div");
	lightBeam.style.cssText = `
		position: absolute;
		top: 0;
		left: 50%;
		transform: translateX(-50%);
		width: 100%;
		height: 100%;
		background: radial-gradient(ellipse 120% 100% at center top,
			rgba(255, 255, 200, 0.9) 0%,
			rgba(255, 255, 180, 0.5) 20%,
			rgba(255, 255, 150, 0.2) 50%,
			transparent 100%
		);
		clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
		transform-origin: center top;
	`;

	ceilingLight.appendChild(lightBeam);
	wrapper.appendChild(ceilingLight);

	// 전등 흔들림 애니메이션 (별도 타임라인)
	const swingTimeline = gsap.timeline({ repeat: -1, yoyo: true });
	swingTimeline.to(lightBeam, {
		rotation: -8,
		duration: 3,
		ease: "sine.inOut",
	});
	swingTimeline.to(lightBeam, {
		rotation: 8,
		duration: 3,
		ease: "sine.inOut",
	});

	// Find text elements to apply lighting effect
	let targetElement: HTMLElement | null = null;

	setTimeout(() => {
		const componentWrapper = document.querySelector(
			'[class*="ComponentWrapper"]',
		) as HTMLElement;
		if (componentWrapper) {
			targetElement = componentWrapper;
		} else {
			targetElement = document.body;
		}

		// Set initial dark state for text
		if (targetElement) {
			gsap.set(targetElement, {
				filter: "brightness(0.3)",
			});
		}
	}, 100);

	// Create flickering animation based on the example
	const tl = gsap.timeline({ repeat: loop ? -1 : 0 });

	// Flicker pattern (8 second cycle: 3s flicker + 5s stable)
	const flickerPattern = [
		{ time: 0, opacity: 0, textBrightness: 0.3 },
		{ time: 0.06, opacity: 1, textBrightness: 1.0 }, // 2%
		{ time: 0.12, opacity: 0.1, textBrightness: 0.35 }, // 4%
		{ time: 0.24, opacity: 1, textBrightness: 1.0 }, // 8%
		{ time: 0.3, opacity: 0.2, textBrightness: 0.35 }, // 10%
		{ time: 0.33, opacity: 0.9, textBrightness: 0.95 }, // 11%
		{ time: 0.36, opacity: 0, textBrightness: 0.3 }, // 12%
		{ time: 0.9, opacity: 0, textBrightness: 0.3 }, // 30%
		{ time: 0.96, opacity: 0.8, textBrightness: 0.95 }, // 32%
		{ time: 0.99, opacity: 0.1, textBrightness: 0.35 }, // 33%
		{ time: 1.05, opacity: 1, textBrightness: 1.0 }, // 35%
		{ time: 1.14, opacity: 0, textBrightness: 0.3 }, // 38%
		{ time: 1.8, opacity: 0, textBrightness: 0.3 }, // 60%
		{ time: 1.83, opacity: 0.7, textBrightness: 0.9 }, // 61%
		{ time: 1.86, opacity: 0.1, textBrightness: 0.35 }, // 62%
		{ time: 1.89, opacity: 0.95, textBrightness: 1.0 }, // 63%
		{ time: 1.95, opacity: 0, textBrightness: 0.3 }, // 65%
		{ time: 2.4, opacity: 0, textBrightness: 0.3 },
		{ time: 2.46, opacity: 0.9, textBrightness: 0.95 },
		{ time: 2.52, opacity: 0.2, textBrightness: 0.35 },
		{ time: 2.58, opacity: 1, textBrightness: 1.0 },
		{ time: 2.7, opacity: 0.1, textBrightness: 0.35 },
		{ time: 2.76, opacity: 0.95, textBrightness: 1.0 },
		// Transition to stable bright state
		{ time: 3, opacity: 1, textBrightness: 1.0 },
		// Hold stable bright state for 5 seconds
		{ time: 8, opacity: 1, textBrightness: 1.0 },
	];

	// Build timeline
	flickerPattern.forEach((step, idx) => {
		const duration =
			idx < flickerPattern.length - 1
				? flickerPattern[idx + 1].time - step.time
				: 0;

		tl.to(
			ceilingLight,
			{
				opacity: step.opacity,
				duration: duration,
				ease: "none",
			},
			step.time,
		);

		// Apply text effects
		setTimeout(() => {
			if (targetElement) {
				tl.to(
					targetElement,
					{
						filter: `brightness(${step.textBrightness})`,
						duration: duration,
						ease: "none",
					},
					step.time,
				);
			}
		}, 100);
	});

	return {
		element: wrapper,
		timeline: tl,
		cleanup: () => {
			tl.kill();
			swingTimeline.kill();
			gsap.set(ceilingLight, { clearProps: "all" });
			gsap.set(lightBeam, { clearProps: "all" });
			if (targetElement) {
				gsap.set(targetElement, {
					filter: "none",
					clearProps: "filter",
				});
			}
		},
	};
};
