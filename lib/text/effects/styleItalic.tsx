import gsap from "gsap";
import { EffectCreator } from "../textEffectRegistry";

export const STYLE_ITALIC: EffectCreator = (element, options = {}) => {
	gsap.set(element, {
		fontStyle: "italic",
	});

	return {
		cleanup: () => {
			gsap.set(element, { fontStyle: "" });
		},
	};
};
