import gsap from "gsap";
import { EffectCreator } from "../textEffectRegistry";

export const STYLE_UNDERLINE: EffectCreator = (element, options = {}) => {
	const duration = options.duration ?? 0.6;
	const tl = gsap.timeline();

	gsap.set(element, {
		position: "relative",
		display: "inline-block",
	});

	const underline = document.createElement("span");
	underline.style.position = "absolute";
	underline.style.left = "0";
	underline.style.bottom = "0em";
	underline.style.width = "100%";
	underline.style.height = "2px";
	underline.style.backgroundColor = "currentColor";
	underline.style.transformOrigin = "left";

	element.appendChild(underline);

	gsap.set(underline, { scaleX: 0 });

	tl.to(underline, {
		duration,
		scaleX: 1,
		ease: "power2.out",
	});

	return {
		timeline: tl,
		cleanup: () => {
			if (underline.parentNode) {
				underline.parentNode.removeChild(underline);
			}
		},
	};
};
