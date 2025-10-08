import gsap from "gsap";
import { EffectCreator } from "../textEffectRegistry";

export const PULSE_FAST: EffectCreator = (element, options = {}) => {
	const intensity = options.intensity ?? 1.2;
	const speed = options.speed ?? 0.12;
	let loopActive = true;

	// transform 적용을 위해 display 설정
	gsap.set(element, { display: "inline-block" });

	// 펄스 루프 생성
	const createPulseLoop = () => {
		if (!loopActive) return;

		const tl = gsap.timeline({
			repeat: -1,
		});

		tl.to(element, {
			duration: 1,
			scale: 1,
			opacity: 1,
		});

		// 심장박동 패턴 3번 반복
		for (let i = 0; i < 3; i++) {
			// 펄스 확대
			tl.to(element, {
				duration: speed,
				scale: intensity,
				opacity: 1,
				ease: "power2.out",
			})
				// 펄스 축소
				.to(element, {
					duration: speed,
					scale: 1,
					opacity: 0.7,
					ease: "power2.in",
				})
				// 펄스 간 짧은 간격
				.to(element, {
					duration: speed * 0.3,
					scale: 1,
					opacity: 0.7,
				});
		}

		// 1.5초 대기

		tl.to(element, {
			duration: 2,
			scale: 1,
			opacity: 1,
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
