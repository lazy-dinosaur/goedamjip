import gsap from "gsap";
import { VisualEffectCreator } from "../visualEffectRegistry";

export const SCREEN_SHAKE: VisualEffectCreator = (options = {}) => {
	const { loop = true } = options;

	// Create empty wrapper element
	const wrapper = document.createElement("div");
	wrapper.style.cssText = `
		position: fixed;
		inset: 0;
		pointer-events: none;
		z-index: 50;
		overflow: hidden;
		background: transparent;
	`;

	// Find target element to apply shake
	let targetElement: HTMLElement | null = null;

	// Prevent scroll during shake
	const originalBodyOverflow = document.body.style.overflow;
	const originalHtmlOverflow = document.documentElement.style.overflow;
	document.body.style.overflow = "hidden";
	document.documentElement.style.overflow = "hidden";

	setTimeout(() => {
		const componentWrapper = document.querySelector(
			'[class*="ComponentWrapper"]',
		) as HTMLElement;
		if (componentWrapper) {
			targetElement = componentWrapper;
		} else {
			targetElement = document.body;
		}
	}, 100);

	// Create GSAP timeline
	const tl = gsap.timeline({ repeat: loop ? -1 : 0 });

	// Intense shake pattern (0.6 seconds) based on the example
	const shakePattern = [
		{ time: 0, x: 0, y: 0, rotation: 0 },
		{ time: 0.06, x: -5, y: -5, rotation: -1 }, // 10%
		{ time: 0.12, x: 5, y: -5, rotation: 1 }, // 20%
		{ time: 0.18, x: -5, y: 5, rotation: 0 }, // 30%
		{ time: 0.24, x: 5, y: 5, rotation: 1 }, // 40%
		{ time: 0.3, x: -5, y: -5, rotation: -1 }, // 50%
		{ time: 0.36, x: 5, y: -5, rotation: 0 }, // 60%
		{ time: 0.42, x: -5, y: 5, rotation: -1 }, // 70%
		{ time: 0.48, x: -5, y: -5, rotation: 1 }, // 80%
		{ time: 0.54, x: 5, y: -5, rotation: 0 }, // 90%
		{ time: 0.6, x: 0, y: 0, rotation: 0 }, // 100%
	];

	setTimeout(() => {
		if (targetElement) {
			// Initial state
			tl.set(targetElement, { x: 0, y: 0, rotation: 0 });

			// Shake pattern (0.6 seconds)
			shakePattern.forEach((step, idx) => {
				const duration =
					idx < shakePattern.length - 1
						? shakePattern[idx + 1].time - step.time
						: 0;

				tl.to(
					targetElement,
					{
						x: step.x,
						y: step.y,
						rotation: step.rotation,
						duration: duration,
						ease: "none",
					},
					step.time,
				);
			});

			// Hold still (1.5 seconds)
			tl.to({}, { duration: 3 }, 0.6);
		}
	}, 100);

	return {
		element: wrapper,
		timeline: tl,
		cleanup: () => {
			tl.kill();
			// Restore original overflow
			document.body.style.overflow = originalBodyOverflow;
			document.documentElement.style.overflow = originalHtmlOverflow;
			if (targetElement) {
				gsap.set(targetElement, {
					x: 0,
					y: 0,
					rotation: 0,
					clearProps: "x,y,rotation",
				});
			}
		},
	};
};
