import gsap from "gsap";
import { VisualEffectCreator } from "../visualEffectRegistry";

export const OVERLAY_GLITCH: VisualEffectCreator = (options = {}) => {
	const { loop = true } = options;

	// Create wrapper element
	const wrapper = document.createElement("div");
	wrapper.style.cssText = `
		position: fixed;
		inset: 0;
		pointer-events: none;
		z-index: 50;
		overflow: hidden;
	`;

	// Scanlines effect
	const scanlines = document.createElement("div");
	scanlines.style.cssText = `
		position: absolute;
		inset: 0;
		background: repeating-linear-gradient(
			0deg,
			transparent 0px,
			transparent 1px,
			rgba(255, 255, 255, 0.05) 1px,
			rgba(255, 255, 255, 0.05) 2px,
			transparent 2px,
			transparent 3px,
			rgba(0, 0, 0, 0.3) 3px,
			rgba(0, 0, 0, 0.3) 4px
		);
		opacity: 0.8;
		pointer-events: none;
		animation: scanline-move 8s linear infinite;
	`;

	// Add scanline animation keyframes
	const styleSheet = document.createElement("style");
	styleSheet.textContent = `
		@keyframes scanline-move {
			0% { transform: translateY(0); }
			100% { transform: translateY(4px); }
		}
	`;
	document.head.appendChild(styleSheet);

	// Noise layer
	const noise = document.createElement("div");
	noise.style.cssText = `
		position: absolute;
		inset: 0;
		opacity: 0;
		pointer-events: none;
		background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300"><filter id="noise"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(%23noise)" opacity="0.5"/></svg>');
		background-size: 100px 100px;
		mix-blend-mode: overlay;
	`;

	// Distortion bars (horizontal glitch bars)
	const distortionBars: HTMLDivElement[] = [];
	for (let i = 0; i < 8; i++) {
		const bar = document.createElement("div");
		const height = Math.random() * 4 + 2;
		bar.style.cssText = `
			position: absolute;
			left: 0;
			width: 100%;
			height: ${height}px;
			background: linear-gradient(90deg,
				transparent 0%,
				rgba(255, 0, 255, 0.3) 20%,
				rgba(0, 255, 255, 0.3) 50%,
				rgba(255, 255, 0, 0.3) 80%,
				transparent 100%
			);
			opacity: 0;
			top: ${Math.random() * 100}%;
			box-shadow: 0 0 ${height * 2}px rgba(255, 255, 255, 0.3);
		`;
		distortionBars.push(bar);
		wrapper.appendChild(bar);
	}

	// Flash overlay
	const flash = document.createElement("div");
	flash.style.cssText = `
		position: absolute;
		inset: 0;
		background: white;
		opacity: 0;
		pointer-events: none;
	`;

	wrapper.appendChild(scanlines);
	wrapper.appendChild(noise);
	wrapper.appendChild(flash);

	// Create main animation function
	const createGlitchAnimation = () => {
		const tl = gsap.timeline();

		// Reset all elements
		tl.set([noise, flash], { opacity: 0, x: 0 });
		tl.set(wrapper, { filter: "none", x: 0, y: 0 });
		distortionBars.forEach((bar) => {
			const randomY = Math.random() * 100;
			tl.set(bar, { opacity: 0, x: 0, top: `${randomY}%` });
		});

		// 1. First glitch burst (0-0.15s)
		tl.to(noise, { opacity: 0.6, duration: 0.05, ease: "none" }, 0);
		tl.to(
			wrapper,
			{
				filter: "drop-shadow(2px 0 0 red) drop-shadow(-2px 0 0 cyan)",
				duration: 0.05,
				ease: "none",
			},
			0,
		);

		// Distortion bars appear
		distortionBars.forEach((bar, idx) => {
			tl.to(
				bar,
				{
					opacity: 0.7,
					x: gsap.utils.random(-20, 20),
					duration: 0.05,
					ease: "none",
				},
				idx * 0.01,
			);
		});

		// Screen shake
		tl.to(
			wrapper,
			{
				x: gsap.utils.random(-5, 5),
				y: gsap.utils.random(-3, 3),
				duration: 0.03,
			},
			0.05,
		);
		tl.to(
			wrapper,
			{
				x: gsap.utils.random(-5, 5),
				y: gsap.utils.random(-3, 3),
				duration: 0.03,
			},
			0.08,
		);

		// Flash
		tl.to(flash, { opacity: 0.3, duration: 0.02, ease: "none" }, 0.1);
		tl.to(flash, { opacity: 0, duration: 0.03, ease: "none" }, 0.12);

		// 2. Brief calm (0.15-0.25s)
		tl.to([noise], { opacity: 0.2, duration: 0.05, ease: "power2.out" }, 0.15);
		tl.to(
			wrapper,
			{ filter: "none", x: 0, y: 0, duration: 0.1, ease: "power2.out" },
			0.15,
		);
		distortionBars.forEach((bar, idx) => {
			tl.to(
				bar,
				{ opacity: 0, duration: 0.05, ease: "power2.out" },
				0.15 + idx * 0.01,
			);
		});

		// 3. Second stronger glitch (0.3-0.4s)
		tl.to(
			noise,
			{ opacity: 0.8, x: gsap.utils.random(-15, 15), duration: 0.04 },
			0.3,
		);
		tl.to(
			wrapper,
			{
				filter:
					"drop-shadow(3px 0 0 red) drop-shadow(-3px 0 0 cyan) drop-shadow(0 2px 0 lime)",
				duration: 0.04,
				ease: "none",
			},
			0.3,
		);

		// Distortion bars reappear
		distortionBars.forEach((bar, idx) => {
			tl.to(
				bar,
				{
					opacity: 0.9,
					x: gsap.utils.random(-30, 30),
					duration: 0.04,
					ease: "none",
				},
				0.3 + idx * 0.005,
			);
		});

		// Stronger shake
		tl.to(
			wrapper,
			{
				x: gsap.utils.random(-10, 10),
				y: gsap.utils.random(-6, 6),
				duration: 0.02,
			},
			0.34,
		);
		tl.to(
			wrapper,
			{
				x: gsap.utils.random(-10, 10),
				y: gsap.utils.random(-6, 6),
				duration: 0.02,
			},
			0.36,
		);

		// Stronger flash
		tl.to(flash, { opacity: 0.5, duration: 0.01, ease: "none" }, 0.38);
		tl.to(flash, { opacity: 0, duration: 0.02, ease: "none" }, 0.39);

		// 4. Fade out (0.4-0.5s)
		tl.to(noise, { opacity: 0, x: 0, duration: 0.1, ease: "power2.out" }, 0.4);
		tl.to(
			wrapper,
			{ filter: "none", x: 0, y: 0, duration: 0.1, ease: "power2.out" },
			0.4,
		);
		distortionBars.forEach((bar, idx) => {
			tl.to(
				bar,
				{ opacity: 0, x: 0, duration: 0.1, ease: "power2.out" },
				0.4 + idx * 0.005,
			);
		});

		return tl;
	};

	// Execute glitch animation in a loop
	let glitchInterval: number | null = null;

	const startLoop = () => {
		const runGlitch = () => {
			const tl = createGlitchAnimation();
			tl.play();

			// Schedule next glitch after random delay
			if (loop) {
				glitchInterval = window.setTimeout(
					runGlitch,
					gsap.utils.random(1500, 3000),
				);
			}
		};

		runGlitch();
	};

	const stopLoop = () => {
		if (glitchInterval !== null) {
			clearTimeout(glitchInterval);
			glitchInterval = null;
		}
	};

	// Start the loop
	startLoop();

	return {
		element: wrapper,
		timeline: undefined, // No single timeline, using interval instead
		cleanup: () => {
			stopLoop();
			gsap.killTweensOf([wrapper, noise, flash, ...distortionBars]);
			// Remove the added stylesheet
			if (styleSheet.parentNode) {
				styleSheet.parentNode.removeChild(styleSheet);
			}
		},
	};
};
