import gsap from "gsap";
import { EffectCreator } from "../textEffectRegistry";

export const PULSE_SLOW: EffectCreator = (element, options = {}) => {
	const intensity = options.intensity ?? 1.15;
	const speed = options.speed ?? 1.2;
	let loopActive = true;

	// transform 적용을 위해 display 설정
	gsap.set(element, { display: "inline-block" });

	// 느린 펄스 루프 생성
	const createPulseLoop = () => {
		if (!loopActive) return;

		const tl = gsap.timeline({
			repeat: -1,
			yoyo: true,
		});

		// 부드럽게 커졌다 작아지는 효과
		tl.to(element, {
			duration: speed,
			scale: intensity,
			opacity: 1,
			ease: "sine.inOut",
		});
	};

	// 첫 실행
	createPulseLoop();

	return {
		cleanup: () => {
			loopActive = false;
			gsap.killTweensOf(element);
			gsap.set(element, {
				scale: 1,
				opacity: 1,
				clearProps: "all",
			});
		},
	};
};
