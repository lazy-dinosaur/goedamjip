import gsap from "gsap";
import { EffectCreator } from "../textEffectRegistry";

export const TEXT_SCRAMBLE_GLITCH: EffectCreator = (element, options = {}) => {
	const originalText = element.textContent || "";
	const tl = gsap.timeline();

	// 0.8초 동안 스크램블 후 완성
	tl.to(element, {
		duration: 0.8,
		scrambleText: {
			text: originalText,
			chars: "!<>-_\\/[]{}—=+*^?#ㄱㄴㄷㄹㅁㅂㅅㅇㅈㅊㅋㅌㅍㅎ",
			tweenLength: false,
		},
	});

	return {
		timeline: tl,
		cleanup: () => {
			element.textContent = originalText;
		},
	};
};
