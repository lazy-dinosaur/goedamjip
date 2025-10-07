import gsap from "gsap";
import { EffectCreator } from "./textEffectRegistry";

const FADE_IN: EffectCreator = (element, options = {}) => {
	const tl = gsap.timeline();
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
const INK_REVEAL: EffectCreator = (element, options = {}) => {
	const tl = gsap.timeline();

	const duration = options.duration ?? 0.6;
	const intensity = options.intensity ?? 1;

	const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
	svg.setAttribute("class", "absolute w-0 h-0 overflow-hidden");
	svg.innerHTML = `<defs id="text-effect-defs"></defs>`;
	document.body.appendChild(svg);
	const svgContainer = svg;
	console.log(svg);
	const defs = svgContainer?.querySelector("#text-effect-defs");
	if (!defs) throw new Error("SVG defs not found");

	//필터 생성
	const filter = document.createElementNS(
		"http://www.w3.org/2000/svg",
		"filter",
	);
	const filterId = `ink-${Date.now()}`;

	filter.setAttribute("id", filterId);

	//효과 생성
	const blur = document.createElementNS(
		"http://www.w3.org/2000/svg",
		"feGaussianBlur",
	);
	blur.setAttribute("in", "SourceGraphic");
	blur.setAttribute("stdDeviation", "15");
	blur.setAttribute("result", "blur");

	const colorMatrix = document.createElementNS(
		"http://www.w3.org/2000/svg",
		"feColorMatrix",
	);
	colorMatrix.setAttribute("in", "blur");
	colorMatrix.setAttribute("mode", "matrix");
	colorMatrix.setAttribute(
		"values",
		"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7",
	);
	colorMatrix.setAttribute("result", "spread");

	const composite = document.createElementNS(
		"http://www.w3.org/2000/svg",
		"feComposite",
	);
	composite.setAttribute("in", "SourceGraphic");
	composite.setAttribute("in2", "spread");
	composite.setAttribute("operator", "atop");

	filter.appendChild(blur);
	filter.appendChild(colorMatrix);
	filter.appendChild(composite);
	defs.appendChild(filter);

	// 효과 적용
	element.style.filter = `url(#${filterId})`;
	element.style.willChange = "filter, opacity";

	tl.fromTo(
		element,
		{ opacity: 0 },
		{ opacity: 1, ease: "power2.inOut", duration: 0.6 },
	).to(
		{},
		{
			duration,
			ease: "power2.inOut",
			onUpdate: function () {
				const progress = 1 - this.progress() * this.progress();
				blur.setAttribute(
					"stdDeviation",
					(15 * progress * intensity).toString(),
				);

				const matrixSlope = 1 + 17 * progress * intensity;
				const matrixIntercept = -7 * progress * intensity;
				const matrixValues = `1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 ${matrixSlope} ${matrixIntercept}`;
				colorMatrix.setAttribute("values", matrixValues);
			},
		},
		"-=0.3",
	);
	return {
		timeline: tl,
		cleanup: () => {
			svg.remove(); // SVG 제거
			element.style.filter = ""; // 필터 스타일 제거
			element.style.willChange = ""; // willChange 제거
		},
	};
};

const TextEffectLibrary = {
	FADE_IN,
	INK_REVEAL,
};

export default TextEffectLibrary;
