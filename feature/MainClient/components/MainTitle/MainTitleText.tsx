import { Ref } from "react";

interface MainTextProps {
	textRef: Ref<HTMLDivElement>;
}

export const MainTitleText = ({ textRef }: MainTextProps) => {
	return (
		<div
			ref={textRef}
			className="text-7xl md:text-8xl lg:text-9xl text-red-700 text-center px-10 font-bm-euljiro-10"
			style={{
				willChange: "filter, opacity",
			}}
		>
			괴담집
		</div>
	);
};
