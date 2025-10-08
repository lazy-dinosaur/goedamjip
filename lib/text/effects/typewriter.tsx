import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { EffectCreator } from "../textEffectRegistry";

gsap.registerPlugin(TextPlugin);

export const TYPEWRITER: EffectCreator = (element, options = {}) => {
	const originalText = element.textContent || "";
	const speed = options.speed ?? 0.06;
	const tl = gsap.timeline();

	// 텍스트 비우고 동시에 opacity 설정
	gsap.set(element, { text: "", display: "inline-block", opacity: 1 });

	// 한 글자씩 타이핑 (한글 지원)
	tl.to(element, {
		duration: originalText.length * speed,
		text: {
			value: originalText,
			delimiter: "",
			preserveSpaces: true,
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
