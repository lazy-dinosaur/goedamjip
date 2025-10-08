import gsap from "gsap";
import { EffectCreator } from "../textEffectRegistry";

export const RISE_FROM_BOTTOM: EffectCreator = (element, options = {}) => {
	const tl = gsap.timeline();
	const duration = options.duration ?? 0.8;
	const distance = options.distance ?? 100;

	gsap.set(element, { opacity: 0, y: distance });
	tl.to(element, {
		duration,
		y: 0,
		opacity: 1,
		ease: "power2.out",
	});

	return {
		timeline: tl,
	};
};
