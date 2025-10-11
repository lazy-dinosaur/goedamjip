import { useEffect, useState, useCallback } from "react";
import { Howler } from "howler";

interface ReactivationModalProps {
	onReactivationStateChange?: (needsReactivation: boolean) => void;
}

export default function ReactivationModal({ onReactivationStateChange }: ReactivationModalProps) {
	const [needsReactivation, setNeedsReactivation] = useState(false);

	// 모바일 기기 감지
	const isMobile =
		typeof window !== "undefined" &&
		/iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

	useEffect(() => {
		if (!isMobile) return;

		const handleVisibilityChange = () => {
			if (document.hidden) {
				// 화면이 숨겨질 때 음소거
				Howler.mute(true);
			} else {
				// 화면이 다시 보일 때 재활성화 필요
				setNeedsReactivation(true);
				onReactivationStateChange?.(true);
			}
		};

		document.addEventListener("visibilitychange", handleVisibilityChange);

		return () => {
			document.removeEventListener("visibilitychange", handleVisibilityChange);
		};
	}, [isMobile, onReactivationStateChange]);

	const handleReactivation = useCallback(async () => {
		try {
			// Howler 음소거 해제
			Howler.mute(false);

			// AudioContext 재시작
			if (Howler.ctx && Howler.ctx.state === "suspended") {
				await Howler.ctx.resume();
			}

			setNeedsReactivation(false);
			onReactivationStateChange?.(false);
		} catch (error) {
			console.error("Failed to reactivate audio:", error);
		}
	}, [onReactivationStateChange]);

	if (!needsReactivation) return null;

	return (
		<div
			className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center"
			onClick={handleReactivation}
		>
			{/* 배경을 어둡게 하고 중앙에 메시지 표시 */}
			<div className="animate-pulse px-12 py-6 rounded-lg">
				<p className="text-white text-2xl font-bm-hanna-11 text-center">
					화면을 터치하여 계속하세요
				</p>
				<p className="text-white/60 text-lg font-bm-hanna-11 text-center mt-2">
					음향과 애니메이션이 일시정지되었습니다
				</p>
			</div>
		</div>
	);
}
