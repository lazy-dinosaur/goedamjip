import gsap from "gsap";
import { EffectCreator } from "../textEffectRegistry";

export const GLITCH: EffectCreator = (element, options = {}) => {
	const intensity = options.intensity ?? 1.3;
	let loopActive = true;
	let currentDelayedCall: gsap.core.Tween | null = null;

	// transform 적용을 위해 display 설정
	gsap.set(element, { display: "inline-block" });

	// RGB 색상 분리 효과
	const rgbSplit = [
		`${2 * intensity}px 0 #ff0000`,
		`${-2 * intensity}px 0 #00ff00`,
		`0 ${2 * intensity}px #0000ff`,
	].join(", ");

	// 재귀적으로 glitch를 반복하는 함수
	const createGlitchLoop = () => {
		if (!loopActive) return;

		const tl = gsap.timeline({
			onComplete: () => {
				// 랜덤한 딜레이 후 다시 실행
				if (loopActive) {
					currentDelayedCall = gsap.delayedCall(
						gsap.utils.random(0.5, 1.5),
						createGlitchLoop,
					);
				}
			},
		});

		// Glitch 시퀀스
		tl.set(element, { textShadow: "none" });

		// 짧게 glitch 발생
		for (let i = 0; i < 2; i++) {
			tl.to(element, {
				duration: 0.05,
				x: `random(${-5 * intensity}, ${5 * intensity})`,
				y: `random(${-5 * intensity}, ${5 * intensity})`,
				skewX: `random(${-5 * intensity}, ${5 * intensity})`,
				scaleX: `random(${0.95}, ${1.1})`,
				scaleY: `random(${0.95}, ${1.05})`,
				textShadow: rgbSplit,
				opacity: 0.8,
				ease: "steps(1)",
			})
				.to(element, {
					duration: 0.05,
					x: 0,
					y: 0,
					skewX: 0,
					scaleX: 1,
					scaleY: 1,
					textShadow: "none",
					opacity: 1,
					ease: "steps(1)",
				})
				.to(element, {
					duration: 0.02,
					x: `random(${-3 * intensity}, ${3 * intensity})`,
					skewX: `random(${-3 * intensity}, ${3 * intensity})`,
					scaleX: `random(${0.97}, ${1.05})`,
					scaleY: `random(${0.97}, ${1.03})`,
					textShadow: rgbSplit,
					ease: "steps(1)",
				})
				.to(element, {
					duration: 0.02,
					x: 0,
					skewX: 0,
					scaleX: 1,
					scaleY: 1,
					textShadow: "none",
					ease: "steps(1)",
				});
		}

		// 다시 정상 상태로
		tl.set(element, {
			x: 0,
			y: 0,
			skewX: 0,
			scaleX: 1,
			scaleY: 1,
			textShadow: "none",
			opacity: 1,
		});
	};

	// 첫 실행
	createGlitchLoop();

	// 더미 타임라인 반환 (실제 애니메이션은 재귀 함수로 처리)

	return {
		cleanup: () => {
			loopActive = false;

			// delayedCall 정리
			if (currentDelayedCall) {
				currentDelayedCall.kill();
				currentDelayedCall = null;
			}

			// 모든 관련 트윈과 타임라인 제거
			gsap.killTweensOf(element);
			gsap.killTweensOf(createGlitchLoop);

			// 요소 스타일 완전 리셋
			gsap.set(element, {
				x: 0,
				y: 0,
				skewX: 0,
				scaleX: 1,
				scaleY: 1,
				textShadow: "none",
				opacity: 1,
				display: "inline-block",
				clearProps: "all", // 모든 인라인 스타일 제거
			});
		},
	};
};
