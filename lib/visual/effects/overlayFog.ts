import gsap from "gsap";
import { VisualEffectCreator } from "../visualEffectRegistry";

export const OVERLAY_FOG: VisualEffectCreator = (options = {}) => {
	// ... (wrapper 및 fog 요소들 생성 코드는 동일)
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

	// Create fog layers
	const createFogLayer = (
		gradients: string,
		animationName: string,
		duration: number,
	) => {
		const layer = document.createElement("div");
		layer.style.cssText = `
			position: absolute;
			width: 100%;
			height: 100%;
			opacity: 0;
			pointer-events: none;
			background: ${gradients};
			will-change: transform, opacity;
		`;
		return layer;
	};

	const fog1 = createFogLayer(
		`radial-gradient(ellipse at 20% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 40%),
		radial-gradient(ellipse at 80% 20%, rgba(255, 255, 255, 0.08) 0%, transparent 50%),
		radial-gradient(ellipse at 40% 40%, rgba(255, 255, 255, 0.12) 0%, transparent 50%)`,
		"drift1",
		20,
	);

	const fog2 = createFogLayer(
		`radial-gradient(ellipse at 60% 30%, rgba(255, 255, 255, 0.15) 0%, transparent 45%),
		radial-gradient(ellipse at 30% 70%, rgba(255, 255, 255, 0.1) 0%, transparent 40%)`,
		"drift2",
		25,
	);

	const fog3 = createFogLayer(
		`radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.05) 0%, transparent 70%)`,
		"drift3",
		30,
	);

	// Create fog patches
	const createFogPatch = (
		width: number,
		height: number,
		opacity: number,
		gradient: string,
	) => {
		const patch = document.createElement("div");
		patch.style.cssText = `
			position: absolute;
			width: ${width}px;
			height: ${height}px;
			border-radius: 50%;
			filter: blur(40px);
			opacity: 0;
			background: ${gradient};
			will-change: transform, opacity, left, top;
			transform: translate(-50%, -50%);
		`;
		return patch;
	};

	const patch1 = createFogPatch(
		600,
		400,
		0.3,
		"radial-gradient(ellipse at center, rgba(255, 255, 255, 0.4) 0%, transparent 70%)",
	);

	const patch2 = createFogPatch(
		500,
		500,
		0.3,
		"radial-gradient(circle at center, rgba(255, 255, 255, 0.3) 0%, transparent 60%)",
	);

	const patch3 = createFogPatch(
		700,
		300,
		0.3,
		"radial-gradient(ellipse at center, rgba(255, 255, 255, 0.25) 0%, transparent 65%)",
	);

	// Create fog overlay
	const fogOverlay = document.createElement("div");
	fogOverlay.style.cssText = `
		position: absolute;
		width: 100%;
		height: 100%;
		background: linear-gradient(45deg,
			rgba(255, 255, 255, 0.02) 0%,
			rgba(255, 255, 255, 0.05) 50%,
			rgba(255, 255, 255, 0.02) 100%);
		pointer-events: none;
		mix-blend-mode: screen;
		opacity: 0;
		will-change: opacity;
	`;

	// ... (appendChild 코드는 동일)
	wrapper.appendChild(fog1);
	wrapper.appendChild(fog2);
	wrapper.appendChild(fog3);
	wrapper.appendChild(patch1);
	wrapper.appendChild(patch2);
	wrapper.appendChild(patch3);
	wrapper.appendChild(fogOverlay);

	// Find target element to apply blur effect
	let targetElement: HTMLElement | null = null;
	const componentWrapper = document.querySelector(
		'[class*="ComponentWrapper"]',
	) as HTMLElement;
	targetElement = componentWrapper || document.body;

	// Create GSAP timeline
	const tl = gsap.timeline({ paused: true });

	// Set initial states
	gsap.set([fog1, fog2, fog3, patch1, patch2, patch3, fogOverlay], {
		opacity: 0,
	});

	// [!! 중요 !!] 깜빡임 방지를 위한 핵심 코드
	// 애니메이션 시작 전, filter의 초기 상태를 명시적으로 설정합니다.
	// 이렇게 하면 브라우저가 미리 준비하여 '깜빡'하지 않습니다.
	gsap.set(targetElement, {
		filter: "blur(0px) brightness(1)",
		// (선택사항) will-change를 함께 사용하면 더욱 확실합니다.
		willChange: "filter",
	});

	// Fade in all fog elements
	tl.to(
		[fog1, fog2, fog3, fogOverlay],
		{
			opacity: 0.4,
			duration: 3,
			ease: "power2.inOut",
		},
		0,
	);
	tl.to(
		[patch1, patch2, patch3],
		{
			opacity: 0.3,
			duration: 3,
			ease: "power2.inOut",
		},
		0,
	);

	// targetElement의 filter를 애니메이션합니다.
	tl.to(
		targetElement,
		{
			filter: "blur(0.5px) brightness(0.95)",
			duration: 3,
			ease: "power2.inOut",
		},
		0, // 타임라인 시작과 동시에 실행
	);

	// Start the timeline and other animations
	tl.play();
	const animateFogLayers = () => {
		// Fog layer 1
		gsap.to(fog1, {
			x: 50,
			y: -30,
			scale: 1.1,
			duration: 20,
			ease: "sine.inOut",
			repeat: -1,
			yoyo: true,
		});

		gsap.to(fog1, {
			x: -30,
			y: 20,
			scale: 0.9,
			duration: 30,
			ease: "sine.inOut",
			repeat: -1,
			yoyo: true,
			delay: 10,
		});

		// Fog layer 2
		gsap.to(fog2, {
			x: -60,
			y: 40,
			scale: 1.2,
			duration: 25,
			ease: "sine.inOut",
			repeat: -1,
			yoyo: true,
		});

		// Fog layer 3
		gsap.to(fog3, {
			x: 40,
			y: 30,
			scale: 0.8,
			duration: 30,
			ease: "sine.inOut",
			repeat: -1,
			yoyo: true,
		});

		gsap.to(fog3, {
			x: -50,
			y: -20,
			scale: 1.1,
			duration: 40,
			ease: "sine.inOut",
			repeat: -1,
			yoyo: true,
			delay: 15,
		});
	};

	// Animate fog patches
	const animateFogPatches = () => {
		// Patch 1 movement
		gsap.set(patch1, { left: "20%", top: "50%" });
		const patch1Tl = gsap.timeline({ repeat: -1 });
		patch1Tl
			.to(patch1, {
				left: "60%",
				top: "30%",
				duration: 15 * 0.25,
				ease: "sine.inOut",
			})
			.to(patch1, {
				left: "80%",
				top: "70%",
				duration: 15 * 0.25,
				ease: "sine.inOut",
			})
			.to(patch1, {
				left: "40%",
				top: "20%",
				duration: 15 * 0.25,
				ease: "sine.inOut",
			})
			.to(patch1, {
				left: "20%",
				top: "50%",
				duration: 15 * 0.25,
				ease: "sine.inOut",
			});

		// Patch 2 movement
		gsap.set(patch2, { left: "70%", top: "20%" });
		const patch2Tl = gsap.timeline({ repeat: -1 });
		patch2Tl
			.to(patch2, {
				left: "30%",
				top: "60%",
				duration: 20 * 0.33,
				ease: "sine.inOut",
			})
			.to(patch2, {
				left: "50%",
				top: "40%",
				duration: 20 * 0.33,
				ease: "sine.inOut",
			})
			.to(patch2, {
				left: "70%",
				top: "20%",
				duration: 20 * 0.34,
				ease: "sine.inOut",
			});

		// Patch 3 movement
		gsap.set(patch3, { left: "50%", top: "80%" });
		const patch3Tl = gsap.timeline({ repeat: -1 });
		patch3Tl
			.to(patch3, {
				left: "20%",
				top: "30%",
				duration: 18 * 0.5,
				ease: "sine.inOut",
			})
			.to(patch3, {
				left: "50%",
				top: "80%",
				duration: 18 * 0.5,
				ease: "sine.inOut",
			});
	};

	// 이제 함수가 정의되었으므로 정상적으로 호출됩니다.
	animateFogLayers();
	animateFogPatches();

	return {
		element: wrapper,
		timeline: tl,
		cleanup: () => {
			tl.kill();
			gsap.killTweensOf([fog1, fog2, fog3, patch1, patch2, patch3, fogOverlay]);

			gsap.to([fog1, fog2, fog3, patch1, patch2, patch3, fogOverlay], {
				opacity: 0,
				duration: 2,
				ease: "power2.out",
			});

			// Restore text effects
			if (targetElement) {
				gsap.to(targetElement, {
					filter: "blur(0px) brightness(1)",
					duration: 2,
					ease: "power2.out",
					onComplete: () => {
						// 모든 속성을 깔끔하게 정리합니다.
						gsap.set(targetElement, { clearProps: "all" });
					},
				});
			}
		},
	};
};
