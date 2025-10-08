import gsap from "gsap";
import { EffectCreator } from "../textEffectRegistry";

export const TEXT_SCRAMBLE_GLITCH: EffectCreator = (element, options = {}) => {
	const originalText = element.textContent || "";
	const tl = gsap.timeline();

	// 스크램블할 문자들
	const scrambleChars = "!<>-_\\/[]{}—=+*^?#ㄱㄴㄷㄹㅁㅂㅅㅇㅈㅊㅋㅌㅍㅎ";

	// 텍스트를 비우고 opacity 설정
	element.textContent = "";
	gsap.set(element, { opacity: 1 });

	// 각 글자를 위한 span 생성
	const charSpans: HTMLSpanElement[] = [];
	originalText.split("").forEach((char) => {
		const span = document.createElement("span");
		span.style.display = "inline-block";
		span.style.opacity = "0";
		span.textContent = char === " " ? "\u00A0" : char; // 공백은 &nbsp;로
		element.appendChild(span);
		charSpans.push(span);
	});

	// 각 글자에 대해 scramble + 나타나기 애니메이션
	charSpans.forEach((span, index) => {
		const originalChar = originalText[index];
		const delay = index * 0.05; // 각 글자 간 딜레이

		// 초기 랜덤 문자들로 빠르게 변경
		tl.call(
			() => {
				let scrambleCount = 0;
				const maxScrambles = 16; // 15번 scramble (기존 8번)

				const scrambleInterval = setInterval(() => {
					if (scrambleCount < maxScrambles) {
						// 랜덤 문자 표시
						const randomChar =
							scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
						span.textContent = randomChar;
						scrambleCount++;
					} else {
						// 최종 문자로 정착
						span.textContent = originalChar === " " ? "\u00A0" : originalChar;
						clearInterval(scrambleInterval);
					}
				}, 30); // 40ms마다 문자 변경 (기존 30ms)
			},
			undefined,
			delay,
		);

		// opacity 애니메이션
		tl.to(
			span,
			{
				opacity: 1,
				duration: 0.3,
				ease: "power2.out",
			},
			delay,
		);
	});

	return {
		timeline: tl,
		cleanup: () => {
			// 원래 텍스트로 복원
			element.textContent = originalText;
		},
	};
};
