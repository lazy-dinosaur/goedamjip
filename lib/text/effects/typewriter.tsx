import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { EffectCreator } from "../textEffectRegistry";

gsap.registerPlugin(TextPlugin);

export const TYPEWRITER: EffectCreator = (element, options = {}) => {
	const originalText = element.textContent || "";
	const speed = options.speed ?? 0.05;
	const tl = gsap.timeline();

	// 텍스트 비우기
	gsap.set(element, { text: "" });

	// 한 글자씩 타이핑 (한글 지원)
	tl.to(element, {
		duration: originalText.length * speed,
		text: {
			value: originalText,
			delimiter: "",
		},
		ease: "none",
	});

	return {
		timeline: tl,
		cleanup: () => {
			element.textContent = originalText;
		},
	};
};
