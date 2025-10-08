import { RefObject } from "react";

interface ContinueMarkProps {
	ref: RefObject<HTMLDivElement | null>;
}

export const ContinueMark = ({ ref }: ContinueMarkProps) => {
	return (
		<div className="mt-5 text-center h-10">
			<div
				ref={ref}
				className={`text-white/50 inline-flex items-center opacity-0 `}
			>
				<svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
					<path d="M7 10l5 5 5-5z" />
				</svg>
			</div>
		</div>
	);
};
