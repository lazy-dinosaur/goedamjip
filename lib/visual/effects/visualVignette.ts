import gsap from "gsap";
import { VisualEffectCreator } from "../visualEffectRegistry";

export const VISUAL_VIGNETTE: VisualEffectCreator = (options = {}) => {
	// ... (wrapper, vignette, grain 생성 코드는 동일)
	const wrapper = document.createElement("div");
	wrapper.style.cssText = `
		position: absolute;
		inset: 0;
		pointer-events: none;
		z-index: 50;
		overflow: hidden;
		background: transparent;
	`;

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

	// Canvas 해상도 75% (성능 최적화)
	grain.width = Math.floor(window.innerWidth * 0.75);
	grain.height = Math.floor(window.innerHeight * 0.75);

	const ctx = grain.getContext("2d", { alpha: true, desynchronized: true });
	let animationFrameId: number;
	let lastFrameTime = 0;
	const targetFPS = 60; // 60fps
	const frameInterval = 1000 / targetFPS;

	const generateGrain = () => {
		if (ctx) {
			const imageData = ctx.createImageData(grain.width, grain.height);
			const data = imageData.data;

			// 성능 최적화: 픽셀을 건너뛰면서 처리
			for (let i = 0; i < data.length; i += 4) {
				const noise = Math.random() * 255;
				data[i] = noise;
				data[i + 1] = noise;
				data[i + 2] = noise;
				data[i + 3] = 50;
			}
			ctx.putImageData(imageData, 0, 0);
		}
	};

	const animateGrain = (currentTime: number) => {
		animationFrameId = requestAnimationFrame(animateGrain);

		// FPS 제한
		const elapsed = currentTime - lastFrameTime;
		if (elapsed < frameInterval) {
			return;
		}
		lastFrameTime = currentTime - (elapsed % frameInterval);

		generateGrain();
	};

	if (ctx) {
		animationFrameId = requestAnimationFrame(animateGrain);
	}
	wrapper.appendChild(vignette);
	wrapper.appendChild(grain);

	// Find target element to apply dimming effect
	let targetElement: HTMLElement | null = null;
	const componentWrapper = document.querySelector(
		'[class*="ComponentWrapper"]',
	) as HTMLElement;
	targetElement = componentWrapper || document.body;

	// Create GSAP timeline for fade in only
	const tl = gsap.timeline({ paused: true });

	// Set initial states
	gsap.set([vignette, grain], { opacity: 0 });

	// [수정 1] 깜빡임 방지를 위해 filter의 초기 상태를 미리 설정합니다.
	if (targetElement) {
		gsap.set(targetElement, { filter: "brightness(1)" });
	}

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

	// [수정 2] 배경 어둡게 하는 애니메이션 로직 수정
	if (targetElement) {
		// .to 대신 .fromTo를 사용해 시작과 끝 상태를 명확히 합니다.
		tl.fromTo(
			targetElement,
			{ filter: "brightness(1)" }, // 시작: 원래 밝기
			{
				filter: "brightness(0.7)", // 끝: 70% 밝기로 어둡게
				duration: 2,
				ease: "power2.inOut",
			},
			0,
		);
	}

	// [수정 3] setTimeout 제거하고 바로 실행
	tl.play();

	// Handle window resize
	const handleResize = () => {
		grain.width = Math.floor(window.innerWidth * 0.75);
		grain.height = Math.floor(window.innerHeight * 0.75);
	};
	window.addEventListener("resize", handleResize);

	return {
		element: wrapper,
		timeline: tl,
		cleanup: () => {
			tl.kill();
			window.removeEventListener("resize", handleResize);

			if (animationFrameId) {
				cancelAnimationFrame(animationFrameId);
			}

			gsap.to([vignette, grain], {
				opacity: 0,
				duration: 1.5,
				ease: "power2.out",
			});

			// Restore text brightness smoothly
			if (targetElement) {
				gsap.to(targetElement, {
					filter: "brightness(1)", // 원래 밝기로 복구
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
