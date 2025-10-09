import gsap from "gsap";
import { VisualEffectCreator } from "../visualEffectRegistry";

export const VISUAL_VIGNETTE: VisualEffectCreator = (options = {}) => {
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

	// Create vignette layer
	const vignette = document.createElement("div");
	vignette.style.cssText = `
		position: absolute;
		inset: 0;
		background: radial-gradient(ellipse at center center,
			transparent 0%,
			transparent 30%,
			rgba(0, 0, 0, 0.5) 60%,
			rgba(0, 0, 0, 0.9) 100%);
		opacity: 0;
		will-change: opacity;
	`;

	// Create grain layer
	const grain = document.createElement("canvas");
	grain.style.cssText = `
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		opacity: 0;
		mix-blend-mode: overlay;
		will-change: opacity;
	`;

	// Set canvas size
	grain.width = window.innerWidth;
	grain.height = window.innerHeight;

	// Generate grain texture with animation
	const ctx = grain.getContext("2d");
	let animationFrameId: number;

	const generateGrain = () => {
		if (ctx) {
			const imageData = ctx.createImageData(grain.width, grain.height);
			const data = imageData.data;

			for (let i = 0; i < data.length; i += 4) {
				const noise = Math.random() * 255;
				data[i] = noise; // R
				data[i + 1] = noise; // G
				data[i + 2] = noise; // B
				data[i + 3] = 50; // Alpha (grain intensity)
			}

			ctx.putImageData(imageData, 0, 0);
		}
	};

	const animateGrain = () => {
		generateGrain();
		animationFrameId = requestAnimationFrame(animateGrain);
	};

	// Start grain animation
	if (ctx) {
		animateGrain();
	}

	wrapper.appendChild(vignette);
	wrapper.appendChild(grain);

	// Find target element to apply dimming effect
	let targetElement: HTMLElement | null = null;

	// Create GSAP timeline for fade in only
	const tl = gsap.timeline({ paused: true });

	// Set initial states
	gsap.set([vignette, grain], { opacity: 0 });

	// Fade in vignette and grain (2 seconds), then hold
	tl.to(
		[vignette, grain],
		{
			opacity: 1,
			duration: 2,
			ease: "power2.inOut",
		},
		0,
	);

	// Find and animate target element
	setTimeout(() => {
		const componentWrapper = document.querySelector(
			'[class*="ComponentWrapper"]',
		) as HTMLElement;
		if (componentWrapper) {
			targetElement = componentWrapper;
		} else {
			targetElement = document.body;
		}

		// Add text dimming to the timeline
		if (targetElement) {
			// Dim text gradually as vignette fades in
			tl.to(
				targetElement,
				{
					filter: "brightness(1)",
					duration: 2,
					ease: "power2.inOut",
				},
				0,
			);
		}

		// Start the timeline after setup is complete
		tl.play();
	}, 100);

	// Handle window resize
	const handleResize = () => {
		grain.width = window.innerWidth;
		grain.height = window.innerHeight;
		// Grain will be regenerated automatically by the animation loop
	};

	window.addEventListener("resize", handleResize);

	return {
		element: wrapper,
		timeline: tl,
		cleanup: () => {
			tl.kill();
			window.removeEventListener("resize", handleResize);

			// Stop grain animation
			if (animationFrameId) {
				cancelAnimationFrame(animationFrameId);
			}

			// Fade out vignette and grain smoothly
			gsap.to([vignette, grain], {
				opacity: 0,
				duration: 1.5,
				ease: "power2.out",
			});

			// Restore text brightness smoothly
			if (targetElement) {
				gsap.to(targetElement, {
					filter: "brightness(1)",
					duration: 1.5,
					ease: "power2.out",
					onComplete: () => {
						gsap.set(targetElement, { clearProps: "filter" });
					},
				});
			}
		},
	};
};
