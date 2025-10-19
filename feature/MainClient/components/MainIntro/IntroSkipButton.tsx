import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

interface IntroSkipButtonProps {
	handleSkip: () => void;
}
export default function IntroSkipButton({ handleSkip }: IntroSkipButtonProps) {
	const ref = useRef<HTMLSpanElement>(null);
	const tl = useRef<gsap.core.Timeline>(gsap.timeline());

	useGSAP(() => {
		if (ref && tl) {
			tl.current.add(
				gsap.from(ref.current, {
					y: 15,
					opacity: 0,
					ease: "power2.inOut",
				}),
			);
		}
	}, []);
	const onClick = () => {
		if (tl) {
			tl.current.reverse();
			handleSkip();
		}
	};

	return (
		<span
			ref={ref}
			onClick={onClick}
			className="text-white/75 hover:text-white absolute text-base sm:text-lg md:text-xl right-[5%] bottom-[5%] z-[60] font-bm-hanna-11"
		>
			인트로 스킵
		</span>
	);
}
