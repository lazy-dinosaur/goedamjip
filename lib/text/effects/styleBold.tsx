import gsap from "gsap";
import { EffectCreator } from "../textEffectRegistry";

export const STYLE_BOLD: EffectCreator = (element, options = {}) => {
	const weight = options.weight ?? "900";

	gsap.set(element, {
		fontWeight: weight,
	});

	return {
		cleanup: () => {
			gsap.set(element, { fontWeight: "" });
		},
	};
};
