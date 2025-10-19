import gsap from "gsap";
import { EffectCreator } from "../textEffectRegistry";

export const STYLE_UNDERLINE: EffectCreator = (element, options = {}) => {
	const tl = gsap.timeline();

	// element를 relative로 설정
	gsap.set(element, {
		position: "relative",
		display: "inline-block",
	});

	// ::after 처럼 underline element 생성
	const underline = document.createElement("span");
	underline.style.position = "absolute";
	underline.style.left = "0";
	underline.style.bottom = "0";
	underline.style.width = "100%";
	underline.style.height = "2px";
	underline.style.backgroundColor = "currentColor";

	element.appendChild(underline);

	// 처음에는 scaleX 0으로 설정 (왼쪽에서 시작)
	gsap.set(underline, {
		scaleX: 0,
		transformOrigin: "left center",
	});

	// timeline에 왼쪽에서 오른쪽으로 그어지는 애니메이션 추가
	tl.to(underline, {
		scaleX: 1,
		duration: 0.6,
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
