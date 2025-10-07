import { Ref } from "react";

interface SoundAdviceProps {
	soundAdviceRef: Ref<HTMLDivElement>;
}

const HeadphoneIcon = () => {
	return (
		<svg
			className={`mx-auto size-16 md:size-24 fill-neutral-300`}
			xmlns="http://www.w3.org/2000/svg"
			width="128"
			height="128"
			viewBox="0 0 128 128"
		>
			<path d="m110.819 74.87 10.875 3.494v24.218l-10.875 3.495V74.87zM17.181 74.87 6.306 78.364v24.218l10.875 3.495V74.87z" />
			<path d="M25.121 34.267A52.124 52.124 0 0 1 64 16.927a52.124 52.124 0 0 1 38.879 17.34l-1.656 1.656a6.012 6.012 0 0 1-8.232.231A43.78 43.78 0 0 0 64 25.238a43.782 43.782 0 0 0-28.99 10.917 6.012 6.012 0 0 1-8.232-.231l-1.655-1.655M99.494 69.874h11.325v41.2H99.494a6 6 0 0 1-6-6v-29.2a6 6 0 0 1 6-6zM28.506 111.073H17.181v-41.2h11.325a6 6 0 0 1 6 6v29.2a6 6 0 0 1-6 6z" />
			<path d="M69.94 112.822a1.75 1.75 0 0 1-1.681-1.265L58.06 76.19 53.8 90.958a1.75 1.75 0 0 1-1.681 1.266h-8.2a1.75 1.75 0 0 1 0-3.5H50.8l5.578-19.334a1.751 1.751 0 0 1 1.682-1.265 1.75 1.75 0 0 1 1.681 1.265l10.2 35.367L74.2 89.989a1.749 1.749 0 0 1 1.681-1.265h8.2a1.75 1.75 0 0 1 0 3.5H77.2l-5.576 19.333a1.751 1.751 0 0 1-1.684 1.265z" />
			<path d="M116.256 92.224h-5.437v-3.5h3.687v-19.54a50.506 50.506 0 1 0-101.012 0v19.53l3.692.01-.009 3.5-5.438-.014a1.749 1.749 0 0 1-1.745-1.75V69.184a54.006 54.006 0 1 1 108.012 0v21.29a1.75 1.75 0 0 1-1.75 1.75z" />
		</svg>
	);
};

export const SoundAdvice = ({ soundAdviceRef }: SoundAdviceProps) => {
	return (
		<div
			ref={soundAdviceRef}
			className="text-neutral-300 text-lg md:text-2xl space-y-5 md:space-y-10 font-bm-hanna-11 opacity-0"
			style={{
				willChange: "filter, opacity",
			}}
		>
			<HeadphoneIcon />
			<div className="text-center">
				완전한 공포 체험을 위해 헤드폰 착용을 권장합니다
			</div>
		</div>
	);
};
