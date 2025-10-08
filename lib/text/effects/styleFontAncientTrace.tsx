import gsap from "gsap";
import { EffectCreator } from "../textEffectRegistry";

export const STYLE_FONT_ANCIENT_TRACE: EffectCreator = (
	element,
	options = {},
) => {
	const fontFamily = options.fontFamily ?? "var(--font-bm-euljiro-orae)";

	gsap.set(element, {
		fontFamily: fontFamily,
	});

	return {
		cleanup: () => {
			gsap.set(element, { fontFamily: "" });
		},
	};
};
