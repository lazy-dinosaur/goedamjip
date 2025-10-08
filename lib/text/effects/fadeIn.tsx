import gsap from "gsap";
import { EffectCreator } from "../textEffectRegistry";

export const FADE_IN: EffectCreator = (element, options = {}) => {
	const tl = gsap.timeline();
	gsap.set(element, { opacity: 0 });
	const duration = options.duration ?? 0.6;
	tl.fromTo(
		element,
		{ opacity: 0 },
		{ opacity: 1, duration, ease: "power2.inOut", ...options },
	);
	return {
		timeline: tl,
	};
};
