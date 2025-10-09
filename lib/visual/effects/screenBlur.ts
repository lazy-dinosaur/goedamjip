import gsap from "gsap";
import { VisualEffectCreator } from "../visualEffectRegistry";

export const SCREEN_BLUR: VisualEffectCreator = (options = {}) => {
	const { loop = true } = options;

	// Create empty wrapper element (required by VisualEffectCreator interface)
	const wrapper = document.createElement("div");
	wrapper.style.cssText = `
		position: fixed;
		inset: 0;
		pointer-events: none;
		z-index: 50;
		overflow: hidden;
		background: transparent;
	`;

	// Find the main content container to apply blur
	let targetElement: HTMLElement | null = null;

	// Try to find ComponentWrapper or main content
	setTimeout(() => {
		// Look for the ComponentWrapper or main container
		const componentWrapper = document.querySelector(
			'[class*="ComponentWrapper"]',
		) as HTMLElement;
		if (componentWrapper) {
			targetElement = componentWrapper;
		} else {
			// Fallback to body if ComponentWrapper not found
			targetElement = document.body;
		}
	}, 100);

	// Create GSAP timeline matching the CSS animation behavior
	const tl = gsap.timeline({ repeat: loop ? -1 : 0 });

	// Wait for target element to be found, then animate
	setTimeout(() => {
		if (targetElement) {
			// Start clear
			tl.set(targetElement, { filter: "blur(0px)" });

			tl.to(targetElement, {
				filter: "blur(4px)",
				duration: 1,
				ease: "power1.inOut",
			});

			tl.to(targetElement, {
				filter: "blur(0px)",
				duration: 1,
				ease: "power1.inOut",
			});
			tl.to({}, { duration: 3 });
		}
	}, 100);

	return {
		element: wrapper,
		timeline: tl,
		cleanup: () => {
			tl.kill();
			// Remove blur from target element
			if (targetElement) {
				gsap.set(targetElement, {
					filter: "none",
					clearProps: "filter",
				});
			}
		},
	};
};
