import gsap from "gsap";
import { VisualEffectCreator } from "../visualEffectRegistry";

export const EFFECT_FLASHLIGHT: VisualEffectCreator = (options = {}) => {
	const { loop = true, repeat = 0 } = options;

	// wrapper 생성
	const wrapper = document.createElement("div");
	wrapper.style.cssText = `
		position: fixed;
		inset: 0;
		pointer-events: none;
		z-index: 10;
	`;

	// 배경을 비추는 희미한 빛
	const backgroundLight = document.createElement("div");
	backgroundLight.className = "background-light";
	backgroundLight.style.cssText = `
		position: absolute;
		width: 500px;
		height: 500px;
		background: radial-gradient(circle at center,
			rgba(255, 255, 200, 0.25) 0%,
			rgba(255, 255, 150, 0.15) 30%,
			rgba(255, 255, 100, 0.08) 50%,
			transparent 80%);
		border-radius: 50%;
		pointer-events: none;
		mix-blend-mode: screen;
		z-index: 0;
	`;

	// 손전등 빛
	const flashlight = document.createElement("div");
	flashlight.className = "flashlight";
	flashlight.style.cssText = `
		position: absolute;
		width: 300px;
		height: 300px;
		background: radial-gradient(circle at center,
			rgba(255, 255, 255, 0.9) 0%,
			rgba(255, 255, 255, 0.4) 20%,
			rgba(255, 255, 255, 0.1) 40%,
			transparent 70%);
		border-radius: 50%;
		pointer-events: none;
		mix-blend-mode: overlay;
		z-index: 2;
	`;

	// 어둠 마스크
	const darkness = document.createElement("div");
	darkness.className = "darkness";
	darkness.style.cssText = `
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.80);
		z-index: 3;
		pointer-events: none;
	`;

	wrapper.appendChild(backgroundLight);
	wrapper.appendChild(darkness);
	wrapper.appendChild(flashlight);

	// repeat 옵션에 따라 반복 횟수 결정
	let repeatCount = -1; // 기본: 무한 반복
	if (!loop && typeof repeat === "number" && repeat > 0) {
		repeatCount = repeat - 1; // GSAP repeat은 0-based (repeat: 1 = 2번 재생)
	} else if (!loop && repeat === 0) {
		repeatCount = 0; // 1번만 재생
	}

	// 애니메이션 생성
	const tl = gsap.timeline({
		repeat: repeatCount,
		repeatDelay: 5, // 5초 후 다시 시작
	});

	// 불규칙한 움직임 포인트들
	const points = [
		{ x: 15, y: 50 },
		{ x: 27.5, y: 40 },
		{ x: 40, y: 50 },
		{ x: 52.5, y: 60 },
		{ x: 65, y: 50 },
		{ x: 77.5, y: 40 },
		{ x: 85, y: 50 },
		{ x: 72.5, y: 60 },
	];

	// 좌표를 저장할 객체
	const coords = { x: points[0].x, y: points[0].y };

	// 초기 설정 - wrapper는 보이고, 내부 요소들만 숨김
	gsap.set(flashlight, {
		left: `${coords.x}%`,
		top: `${coords.y}%`,
		xPercent: -50,
		yPercent: -50,
		opacity: 0,
	});
	gsap.set(backgroundLight, {
		left: `${coords.x}%`,
		top: `${coords.y}%`,
		xPercent: -50,
		yPercent: -50,
		opacity: 0,
	});
	gsap.set(darkness, { opacity: 0 });

	// 1. 화면이 어두워지면서 동시에 손전등이 켜짐
	tl.to(
		darkness,
		{
			opacity: 1,
			duration: 0.6,
			ease: "power2.inOut",
		},
		0,
	);
	tl.to(
		[flashlight, backgroundLight],
		{
			opacity: 1,
			duration: 0.6,
			ease: "power2.inOut",
		},
		0,
	);

	// 3. 손전등이 왔다갔다 움직임 (한 사이클, 총 6초)
	points.forEach((point) => {
		const duration = 0.75; // 8개 포인트 × 0.75초 = 6초

		tl.to(coords, {
			x: point.x,
			y: point.y,
			duration,
			ease: "power1.inOut",
			onUpdate: () => {
				// flashlight 위치 업데이트
				flashlight.style.left = `${coords.x}%`;
				flashlight.style.top = `${coords.y}%`;

				// background light 위치 업데이트
				backgroundLight.style.left = `${coords.x}%`;
				backgroundLight.style.top = `${coords.y}%`;

				// darkness mask 업데이트
				const style = `radial-gradient(circle at ${coords.x}% ${coords.y}%,
					transparent 100px,
					rgba(0, 0, 0, 0.5) 200px,
					black 300px)`;
				darkness.style.maskImage = style;
				darkness.style.webkitMaskImage = style;
			},
		});
	});

	// 4. 손전등이 꺼지면서 동시에 화면이 밝아짐
	tl.to(
		[flashlight, backgroundLight],
		{
			opacity: 0,
			duration: 0.6,
			ease: "power2.inOut",
		},
		"+=0.3",
	);
	tl.to(
		darkness,
		{
			opacity: 0,
			duration: 0.6,
			ease: "power2.inOut",
		},
		"<",
	);

	// 5. 반복 전에 손전등 위치와 darkness mask를 처음으로 리셋
	tl.call(() => {
		coords.x = points[0].x;
		coords.y = points[0].y;
		flashlight.style.left = `${points[0].x}%`;
		flashlight.style.top = `${points[0].y}%`;
		backgroundLight.style.left = `${points[0].x}%`;
		backgroundLight.style.top = `${points[0].y}%`;

		// darkness mask도 초기 위치로 리셋
		const style = `radial-gradient(circle at ${points[0].x}% ${points[0].y}%,
			transparent 100px,
			rgba(0, 0, 0, 0.5) 200px,
			black 300px)`;
		darkness.style.maskImage = style;
		darkness.style.webkitMaskImage = style;
	});

	return {
		element: wrapper,
		timeline: tl,
		cleanup: () => {
			// cleanup 필요시 추가
		},
	};
};
