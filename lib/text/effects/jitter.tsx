import gsap from "gsap";
import { EffectCreator } from "../textEffectRegistry";

export const JITTER: EffectCreator = (element, options = {}) => {
	const intensity = options.intensity ?? 1.3;
	let loopActive = true;

	// transform 적용을 위해 display 설정
	gsap.set(element, { display: "inline-block" });

	// 지터 루프 생성
	const createJitterLoop = () => {
		if (!loopActive) return;

		const tl = gsap.timeline({
			repeat: -1,
		});

		// 0.5초 동안 떨림
		const jitterDuration = 0.6;
		const jitterSteps = 20;
		const stepDuration = jitterDuration / jitterSteps;

		for (let i = 0; i < jitterSteps; i++) {
			tl.to(element, {
				duration: stepDuration,
				x: `random(${-2 * intensity}, ${2 * intensity})`,
				y: `random(${-2 * intensity}, ${2 * intensity})`,
				ease: "none",
			});
		}

		// 원위치로 복귀 후 0.5초 대기
		tl.to(element, {
			duration: 0.05,
			x: 0,
			y: 0,
			ease: "none",
		}).to(element, {
			duration: 1.5,
			x: 0,
			y: 0,
		});
	};

	// 첫 실행
	createJitterLoop();

	// 더미 타임라인 반환
	const dummyTimeline = gsap.timeline();

	return {
		timeline: dummyTimeline,
		cleanup: () => {
			loopActive = false;
			gsap.killTweensOf(element);
			gsap.set(element, {
				x: 0,
				y: 0,
				clearProps: "all",
			});
		},
	};
};
