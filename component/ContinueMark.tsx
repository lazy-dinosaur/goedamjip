import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";

interface ContinueMarkProps {
	userIntereacted: boolean;
}

export const ContinueMark = ({ userIntereacted }: ContinueMarkProps) => {
	const continueRef = useRef<HTMLDivElement>(null);

	const tl = gsap.timeline();

	//continueAnimation
	useGSAP(() => {
		if (userIntereacted && continueRef.current) {
			// continue 숨기기
			gsap.killTweensOf(continueRef.current);
			gsap.to(continueRef.current, { opacity: 0, duration: 0.2 });
		} else if (!userIntereacted && continueRef.current) {
			// continue 보여주기 + 애니메이션
			tl.add(gsap.set(continueRef.current, { opacity: 0, y: 5 }));
			tl.add(
				gsap.fromTo(continueRef.current, { opacity: 0 }, { opacity: 1, y: 0 }),
			);
			tl.add(
				gsap.to(continueRef.current, {
					opacity: 0.5,
					y: 5,
					ease: "power2.in",
					yoyo: true,
					repeat: -1,
				}),
			);
		}
	}, [userIntereacted, continueRef]);
	return (
		<div className="mt-5 text-center h-10">
			<div
				ref={continueRef}
				className={`text-white/50 inline-flex items-center opacity-0 `}
			>
				<svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
					<path d="M7 10l5 5 5-5z" />
				</svg>
			</div>
		</div>
	);
};
