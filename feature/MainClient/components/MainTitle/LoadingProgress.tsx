import { cn } from "@/util/styles";

interface LoadingProgressProps {
	loadingProgress: number;
	location?: "bottom" | "top";
	visible: boolean;
}

export const LoadingProgress = ({
	visible,
	location = "bottom",
	loadingProgress,
}: LoadingProgressProps) => {
	return (
		visible &&
		(loadingProgress < 100 ? (
			<div
				className={cn(
					"absolute left-0 right-0 text-center px-8",
					location == "bottom" ? "bottom-15" : "bottom-1/3",
				)}
			>
				<p className="text-white md:text-xl font-bm-hanna-11 mb-4">
					음향을 준비하는 중...
				</p>
				{/* 프로그레스 바 */}
				<div className="w-full max-w-xs mx-auto">
					<div className="bg-gray-800 rounded-full h-2 overflow-hidden">
						<div
							className="bg-red-700 h-full rounded-full transition-all duration-300 ease-out"
							style={{ width: `${loadingProgress}%` }}
						/>
					</div>
				</div>
			</div>
		) : (
			<div
				className={cn(
					"absolute left-0 right-0 text-center animate-pulse",
					location == "bottom" ? "bottom-15" : "bottom-1/3",
				)}
			>
				<p className="text-neutral-300 md:text-xl font-bm-hanna-11">
					화면을 클릭하여 시작하세요
				</p>
			</div>
		))
	);
};
