import gsap from "gsap";
import { VisualEffectCreator } from "../visualEffectRegistry";

export const VISUAL_CANDLE_FLICKER: VisualEffectCreator = (options = {}) => {
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

	// Add CSS styles for candle animation
	const styleSheet = document.createElement("style");
	styleSheet.textContent = `
		@keyframes candle-move {
			0% { transform: skewX(2deg) skewY(5deg) translateZ(0); }
			50% { transform: skewX(-2deg) skewY(-0deg) translateZ(0); }
			100% { transform: skewX(2deg) skewY(5deg) translateZ(0); }
		}

		@keyframes candle-move-left {
			50% { transform: skewX(3deg) translateZ(0); }
		}

		@keyframes candle-flame-up {
			50% {
				box-shadow:
					0 -41px 2px 3px gold,
					0 -50px 5px 4px #ff6a00,
					0 0px 150px 10px #ff6a00;
			}
		}

		@keyframes candle-blink {
			50% { opacity: 0.95; }
		}
	`;
	document.head.appendChild(styleSheet);

	// Create candle wrapper with dynamic scale based on window width
	const scale = Math.max(0.8, Math.min(2.0, window.innerWidth / 1200));
	const candleWrapper = document.createElement("div");
	candleWrapper.style.cssText = `
		position: absolute;
		bottom: -80px;
		left: 50%;
		transform: translateX(-50%) scale(${scale}) translateZ(0);
		opacity: 1;
		pointer-events: none;
		will-change: transform, opacity;
	`;

	// Create candle element
	const candle = document.createElement("div");
	candle.style.cssText = `
		width: 34px;
		margin: 30px auto 0 auto;
		position: relative;
		height: 200px;
		animation: candle-blink 0.7s infinite;
		transform: translateZ(0);
		will-change: opacity;
	`;

	// Create flame
	const flame = document.createElement("div");
	flame.style.cssText = `
		width: 20px;
		height: 150px;
		margin: 0px auto;
		position: relative;
		animation: candle-move 3s infinite, candle-move-left 3s infinite;
		transform-origin: 50% 90%;
		will-change: transform;
	`;

	const flameShadows = document.createElement("div");
	flameShadows.style.cssText = `
		position: absolute;
		left: 50%;
		top: 0;
		width: 1px;
		height: 60px;
		border-radius: 50%;
		box-shadow:
			0 0px 100px 20px #ff6a00,
			0 15px 50px 15px #ff6a00,
			0 75px 50px 30px black;
	`;

	const flameTop = document.createElement("div");
	flameTop.style.cssText = `
		width: 20px;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		background: white;
		border-top-left-radius: 500%;
		border-bottom-left-radius: 50px;
		border-top-right-radius: 500%;
		border-bottom-right-radius: 50px;
		transform: skewY(-10deg) translateZ(0);
		box-shadow:
			0 -25px 2px 3px gold,
			0 -30px 5px 4px #ff6a00,
			0 0px 150px 10px #ff6a00;
		animation: candle-flame-up 4s infinite;
		will-change: box-shadow;
	`;

	const flameBottom = document.createElement("div");
	flameBottom.style.cssText = `
		transform: scale(0.9);
		position: absolute;
		bottom: 6px;
		left: 9px;
		width: 1px;
		height: 8px;
		border-radius: 1%;
		background: #2c2b39;
		box-shadow:
			0 -12px 10px 8px rgba(255, 106, 0, 0.5),
			0 -15px 10px 10px gold,
			0 2px 5px 10px #30537d;
	`;

	flame.appendChild(flameShadows);
	flame.appendChild(flameTop);
	flame.appendChild(flameBottom);

	// Create wick
	const wick = document.createElement("div");
	wick.style.cssText = `
		position: absolute;
		width: 6px;
		height: 50px;
		background: #23161a;
		top: 110px;
		left: 50%;
		transform: translateX(-50%) skewX(2deg);
		border-radius: 10%;
		box-shadow: 0 0 2px 0px black;
	`;

	const wickBefore = document.createElement("div");
	wickBefore.style.cssText = `
		content: '';
		position: absolute;
		width: 0;
		left: 50%;
		height: 10px;
		box-shadow:
			0 -14px 10px 8px white,
			0 -10px 10px 8px rgba(255, 215, 0, 0.7);
	`;

	const wickAfter = document.createElement("div");
	wickAfter.style.cssText = `
		content: '';
		position: absolute;
		left: 50%;
		bottom: 0;
		width: 0px;
		height: 0px;
		box-shadow:
			0 5px 2px 3px gold,
			0 20px 2px 14px gold;
	`;

	wick.appendChild(wickBefore);
	wick.appendChild(wickAfter);

	// Create wax
	const wax = document.createElement("div");
	wax.style.cssText = `
		position: relative;
		top: 15px;
		width: 100%;
		height: 100%;
		background: linear-gradient(to bottom, #ff9224 0px, #ff9224 20px, #58523a 50px);
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
		box-shadow:
			inset 0 7px 12px -2px #fbf348,
			inset 0 9px 57px -3px rgba(255, 0, 0, 0.4),
			inset 0 -5px 8px 2px black,
			0 0 3px 0px #ff6a00;
	`;

	// Assemble candle
	candle.appendChild(flame);
	candle.appendChild(wick);
	candle.appendChild(wax);

	// Create ambient light effect
	const ambientLight = document.createElement("div");
	ambientLight.style.cssText = `
		position: absolute;
		width: 400%;
		height: 400%;
		top: -150%;
		left: -150%;
		background: radial-gradient(ellipse at 50% 50%,
			rgba(255, 180, 80, 0.4) 0%,
			rgba(255, 160, 60, 0.25) 15%,
			rgba(255, 140, 40, 0.15) 30%,
			rgba(255, 120, 20, 0.08) 50%,
			transparent 70%);
		opacity: 1;
		pointer-events: none;
		transform: translateZ(0);
		will-change: opacity;
	`;

	candleWrapper.appendChild(candle);
	candleWrapper.appendChild(ambientLight);
	wrapper.appendChild(candleWrapper);

	// Find target element to apply lighting effect
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

		// Set initial lit state
		if (targetElement) {
			gsap.set(targetElement, {
				opacity: 0.8,
				filter: "brightness(0.8)",
			});
		}
	}, 100);

	// Create GSAP timeline for flickering effect
	const tl = gsap.timeline({ repeat: loop ? -1 : 0 });

	// Ambient flicker animation (5 seconds)
	tl.to(
		ambientLight,
		{
			opacity: 0.7,
			duration: 2.5,
			ease: "power1.inOut",
		},
		0,
	);

	// Text brightness flicker
	setTimeout(() => {
		if (targetElement) {
			tl.to(
				targetElement,
				{
					opacity: 0.6,
					filter: "brightness(0.6)",
					duration: 2.5,
					ease: "power1.inOut",
				},
				0,
			);
		}
	}, 100);

	// Return to bright (2.5 - 5 seconds)
	tl.to(
		ambientLight,
		{
			opacity: 1,
			duration: 2.5,
			ease: "power1.inOut",
		},
		2.5,
	);

	setTimeout(() => {
		if (targetElement) {
			tl.to(
				targetElement,
				{
					opacity: 0.8,
					filter: "brightness(0.8)",
					duration: 2.5,
					ease: "power1.inOut",
				},
				2.5,
			);
		}
	}, 100);

	return {
		element: wrapper,
		timeline: tl,
		cleanup: () => {
			tl.kill();
			gsap.set([ambientLight, candleWrapper], { clearProps: "all" });
			if (targetElement) {
				gsap.set(targetElement, {
					opacity: 1,
					filter: "none",
					clearProps: "opacity,filter",
				});
			}
			// Remove stylesheet
			if (styleSheet.parentNode) {
				styleSheet.parentNode.removeChild(styleSheet);
			}
		},
	};
};
