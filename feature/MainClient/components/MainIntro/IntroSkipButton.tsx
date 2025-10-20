import { RefObject } from "react";

interface IntroSkipButtonProps {
	ref: RefObject<HTMLSpanElement | null>;
	onClick: () => void;
}
export default function IntroSkipButton({
	ref,
	onClick,
}: IntroSkipButtonProps) {
	return (
		<span
			ref={ref}
			onClick={onClick}
			className="text-white/75 hover:text-white absolute text-base sm:text-lg md:text-xl right-[5%] bottom-[5%] z-[60] font-bm-hanna-11 transition-all duration-300"
		>
			인트로 스킵
		</span>
	);
}
