import gsap from "gsap";
import { EffectCreator } from "../textEffectRegistry";

export const GLOW_RED: EffectCreator = (element, options = {}) => {
	const color = options.color ?? "#c10007";
	const intensity = options.intensity ?? 3;
	const speed = options.speed ?? 1.5;
	let loopActive = true;

	// 초기 glow 설정
	const createGlowShadow = (blur: number) => {
		return [
			`0 0 ${blur}px ${color}`,
			`0 0 ${blur * 1.5}px ${color}`,
			`0 0 ${blur * 2}px ${color}`,
		].join(", ");
	};

	// 글자 색상 설정
	// gsap.set(element, { color: "oklch(50.5% 0.213 27.518)" });

	// 재귀적으로 glow를 반복하는 함수
	const createGlowLoop = () => {
		if (!loopActive) return;

		const tl = gsap.timeline({
			repeat: -1,
			yoyo: true,
		});

		// 은은하게 깜빡이는 효과
		tl.to(element, {
			duration: speed,
			textShadow: createGlowShadow(intensity),
			ease: "sine.inOut",
		}).to(element, {
			duration: speed,
			textShadow: createGlowShadow(intensity * 0.3),
			ease: "sine.inOut",
		});
	};

	// 첫 실행
	createGlowLoop();

	// 더미 타임라인 반환
	const dummyTimeline = gsap.timeline();

	return {
		timeline: dummyTimeline,
		cleanup: () => {
			loopActive = false;
			gsap.killTweensOf(element);
			gsap.set(element, {
				textShadow: "none",
				clearProps: "all",
			});
		},
	};
};
