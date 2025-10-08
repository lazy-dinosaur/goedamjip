import { RefObject } from "react";

interface ContinueMarkProps {
	ref: RefObject<HTMLDivElement | null>;
}

export const ContinueMark = ({ ref }: ContinueMarkProps) => {
	// 애니메이션은 이제 메인 컴포넌트의 타임라인에서 관리됨
	return (
		<div className="mt-8 text-center h-10">
			<div
				ref={ref}
				className={`text-white/50 inline-flex items-center opacity-0 `}
			>
				<svg
					className="w-10 h-10 animate-pulse-bounce"
					fill="currentColor"
					viewBox="0 0 24 24"
				>
					<path d="M7 10l5 5 5-5z" />
				</svg>
			</div>
		</div>
	);
};
