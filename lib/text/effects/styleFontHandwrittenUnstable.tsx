import gsap from "gsap";
import { EffectCreator } from "../textEffectRegistry";

export const STYLE_FONT_HANDWRITTEN_UNSTABLE: EffectCreator = (
	element,
	options = {},
) => {
	const fontFamily = options.fontFamily ?? "var(--font-bm-kkubulim)";

	gsap.set(element, {
		fontFamily: fontFamily,
	});

	return {
		cleanup: () => {
			gsap.set(element, { fontFamily: "" });
		},
	};
};
