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
		/* KEY 1: 이 래퍼 전체에 multiply 블렌드 모드를 적용합니다. */
		/* 이 래퍼 안의 흰색은 배경에 영향을 주지 않고, 어두운 색은 배경을 어둡게 만듭니다. */
		mix-blend-mode: multiply;
	`;

	// 어두운 배경 레이어 (Vignette 효과)
	const vignetteLayer = document.createElement("div");
	vignetteLayer.style.cssText = `
		position: absolute;
		inset: 0;
		/* KEY 2: 곱하기 효과를 위해 순수한 검은색 대신 어두운 회색을 사용합니다. */
		/* 100% 검은색은 모든 것을 검게 만들어버립니다. */
		background: rgb(40, 40, 40);
		pointer-events: none;
	`;

	// 부채꼴 빛 효과 컨테이너
	const ceilingLight = document.createElement("div");
	ceilingLight.style.cssText = `
		position: absolute;
		top: -20%;
		left: 50%;
		transform: translateX(-50%);
		width: 150%;
		height: 120%;
		z-index: 2;
		opacity: 0; /* 애니메이션으로 조절 */
		pointer-events: none;
	`;

	// 부채꼴 빛 -> 이제 'multiply' 효과를 지우는 '흰색 지우개' 역할을 합니다.
	const lightBeam = document.createElement("div");
	lightBeam.style.cssText = `
		position: absolute;
		top: 0;
		left: 50%;
		transform: translateX(-50%);
		width: 100%;
		height: 100%;
		/* KEY 3: multiply 효과를 완전히 상쇄시키기 위해 순수한 흰색 그라디언트를 사용합니다. */
		background: radial-gradient(ellipse 120% 100% at center top,
			rgba(255, 255, 255, 1) 0%, /* 완전한 흰색 */
			rgba(255, 255, 255, 1) 40%, /* 중심부를 더 넓게 */
			rgba(255, 255, 255, 1) 60%, /* 중심부를 더 넓게 */
			rgba(255, 255, 255, 0.6) 70%, /* 중심부를 더 넓게 */
			rgba(255, 255, 255, 0.4) 80%
		);
		clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
		transform-origin: center top;
	`;

	// 요소들을 올바른 순서로 추가
	// vignetteLayer가 아래에, ceilingLight가 그 위에 있어야 합니다.
	ceilingLight.appendChild(lightBeam);
	wrapper.appendChild(vignetteLayer);
	wrapper.appendChild(ceilingLight);

	// 전등 흔들림 애니메이션 (변경 없음)
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

	const tl = gsap.timeline({ repeat: loop ? -1 : 0 });

	const flickerPattern = [
		{ time: 0, opacity: 0 },
		{ time: 0.06, opacity: 1 },
		{ time: 0.12, opacity: 0.1 },
		{ time: 0.24, opacity: 1 },
		{ time: 0.3, opacity: 0.2 },
		{ time: 0.33, opacity: 0.9 },
		{ time: 0.36, opacity: 0 },
		{ time: 0.9, opacity: 0 },
		{ time: 0.96, opacity: 0.8 },
		{ time: 0.99, opacity: 0.1 },
		{ time: 1.05, opacity: 1 },
		{ time: 1.14, opacity: 0 },
		{ time: 1.8, opacity: 0 },
		{ time: 1.83, opacity: 0.7 },
		{ time: 1.86, opacity: 0.1 },
		{ time: 1.89, opacity: 0.95 },
		{ time: 1.95, opacity: 0 },
		{ time: 2.4, opacity: 0 },
		{ time: 2.46, opacity: 0.9 },
		{ time: 2.52, opacity: 0.2 },
		{ time: 2.58, opacity: 1 },
		{ time: 2.7, opacity: 0.1 },
		{ time: 2.76, opacity: 0.95 },
		// 안정된 밝은 상태로 전환
		{ time: 3, opacity: 1 },
		// 5초간 밝은 상태 유지
		{ time: 8, opacity: 1 },
	];

	// 타임라인 빌드
	flickerPattern.forEach((step, idx) => {
		const duration =
			idx < flickerPattern.length - 1
				? flickerPattern[idx + 1].time - step.time
				: 0;

		// 흰색 부채꼴(ceilingLight)의 투명도를 조절해서 깜빡임 효과와 밝아지는 효과를 만듭니다.
		tl.to(
			ceilingLight,
			{
				opacity: step.opacity,
				duration: duration,
				ease: "none",
			},
			step.time,
		);
	});

	// vignetteLayer는 계속 유지되어 어두운 배경을 만들고,
	// ceilingLight(부채꼴 빛)만 깜빡이다가 안정 상태에서는 계속 켜져있음

	return {
		element: wrapper,
		timeline: tl,
		cleanup: () => {
			tl.kill();
			swingTimeline.kill();
			gsap.set(ceilingLight, { clearProps: "all" });
			gsap.set(lightBeam, { clearProps: "all" });
			gsap.set(vignetteLayer, { clearProps: "all" });
		},
	};
};
