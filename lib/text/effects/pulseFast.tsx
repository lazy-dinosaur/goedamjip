import gsap from "gsap";
import { EffectCreator } from "../textEffectRegistry";

export const PULSE_FAST: EffectCreator = (element, options = {}) => {
	const intensity = options.intensity ?? 1.2;
	const speed = options.speed ?? 0.15;
	let loopActive = true;

	// transform 적용을 위해 display 설정
	gsap.set(element, { display: "inline-block" });

	// 펄스 루프 생성
	const createPulseLoop = () => {
		if (!loopActive) return;

		const tl = gsap.timeline({
			repeat: -1,
		});

		// 심장박동 패턴: 쿵-쿵 (빠른 두 번의 펄스 후 휴식)
		// 첫 번째 펄스
		tl.to(element, {
			duration: speed,
			scale: intensity,
			opacity: 1,
			ease: "power2.out",
		})
			.to(element, {
				duration: speed,
				scale: 1,
				opacity: 0.7,
				ease: "power2.in",
			})
			// 짧은 간격
			.to(element, {
				duration: speed * 0.3,
				scale: 1,
				opacity: 0.7,
			})
			// 두 번째 펄스
			.to(element, {
				duration: speed,
				scale: intensity,
				opacity: 1,
				ease: "power2.out",
			})
			.to(element, {
				duration: speed,
				scale: 1,
				opacity: 0.7,
				ease: "power2.in",
			})
			// 긴 간격
			.to(element, {
				duration: speed * 1.5,
				scale: 1,
				opacity: 0.7,
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
