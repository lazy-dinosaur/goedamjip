import gsap from "gsap";
import { VisualEffectCreator } from "../visualEffectRegistry";

export const SCREEN_FLICKER: VisualEffectCreator = (options = {}) => {
	const { loop = true } = options;

	// Create wrapper element
	const wrapper = document.createElement("div");
	wrapper.style.cssText = `
		position: fixed;
		inset: 0;
		pointer-events: none;
		z-index: 50;
		overflow: hidden;
		background: transparent;
	`;

	// Ceiling light effect
	const ceilingLight = document.createElement("div");
	ceilingLight.style.cssText = `
		position: absolute;
		top: -10%;
		left: 50%;
		transform: translateX(-50%);
		width: 150%;
		height: 120%;
		background: radial-gradient(ellipse 120% 80% at center top,
			rgba(255, 255, 200, 0.8) 0%,
			rgba(255, 255, 200, 0.5) 15%,
			rgba(255, 255, 200, 0.2) 40%,
			rgba(255, 255, 200, 0.05) 70%,
			transparent 100%);
		z-index: 1;
		opacity: 0;
		pointer-events: none;
	`;

	wrapper.appendChild(ceilingLight);

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
				opacity: 0.6,
				filter: "brightness(0.6)",
			});
		}
	}, 100);

	// Create flickering animation based on the example
	const tl = gsap.timeline({ repeat: loop ? -1 : 0 });

	// Flicker pattern (3 second cycle)
	const flickerPattern = [
		{ time: 0, opacity: 0, textOpacity: 0.3, textBrightness: 0.5 },
		{ time: 0.06, opacity: 1, textOpacity: 1, textBrightness: 1 }, // 2%
		{ time: 0.12, opacity: 0.1, textOpacity: 0.4, textBrightness: 0.6 }, // 4%
		{ time: 0.24, opacity: 1, textOpacity: 1, textBrightness: 1 }, // 8%
		{ time: 0.3, opacity: 0.2, textOpacity: 0.4, textBrightness: 0.6 }, // 10%
		{ time: 0.33, opacity: 0.9, textOpacity: 1, textBrightness: 1 }, // 11%
		{ time: 0.36, opacity: 0, textOpacity: 0.3, textBrightness: 0.5 }, // 12%
		{ time: 0.9, opacity: 0, textOpacity: 0.3, textBrightness: 0.5 }, // 30%
		{ time: 0.96, opacity: 0.8, textOpacity: 1, textBrightness: 1 }, // 32%
		{ time: 0.99, opacity: 0.1, textOpacity: 0.4, textBrightness: 0.6 }, // 33%
		{ time: 1.05, opacity: 1, textOpacity: 1, textBrightness: 1 }, // 35%
		{ time: 1.14, opacity: 0, textOpacity: 0.3, textBrightness: 0.5 }, // 38%
		{ time: 1.8, opacity: 0, textOpacity: 0.3, textBrightness: 0.5 }, // 60%
		{ time: 1.83, opacity: 0.7, textOpacity: 1, textBrightness: 1 }, // 61%
		{ time: 1.86, opacity: 0.1, textOpacity: 0.4, textBrightness: 0.6 }, // 62%
		{ time: 1.89, opacity: 0.95, textOpacity: 1, textBrightness: 1 }, // 63%
		{ time: 1.95, opacity: 0, textOpacity: 0.3, textBrightness: 0.5 }, // 65%
		{ time: 3, opacity: 0, textOpacity: 0.3, textBrightness: 0.5 }, // 100%
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
						opacity: step.textOpacity,
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
			gsap.set(ceilingLight, { clearProps: "all" });
			if (targetElement) {
				gsap.set(targetElement, {
					opacity: 1,
					filter: "none",
					clearProps: "opacity,filter",
				});
			}
		},
	};
};
