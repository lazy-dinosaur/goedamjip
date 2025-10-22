"use client";
import ScreenWrapper from "@/component/ScreenWrapper";
import PageWrapper from "@/component/PageWrapper";
import { useSettingsContext } from "@/contexts/SettingsContext";
import { useRouter } from "next/navigation";
import { FaChevronLeft } from "react-icons/fa6";
import gsap from "gsap";
import { useLayoutEffect, useRef, useState, useCallback } from "react";
import { Checkbox } from "@/component/ui/checkbox";
import { Slider } from "@/component/ui/slider";

export default function Settings() {
	const router = useRouter();
	const {
		ambienceVolume,
		masterVolume,
		sfxVolume,
		skipIntro,
		setSkipIntro,
		setSfxVolume,
		setAmbienceVolume,
		setMasterVolume,
	} = useSettingsContext();
	const tlRef = useRef<gsap.core.Timeline | null>(null);
	const navRef = useRef<HTMLDivElement>(null);
	const itemsRef = useRef<HTMLLIElement[]>([]);
	const [isAnimating, setIsAnimating] = useState(false);

	// 진입 애니메이션
	useLayoutEffect(() => {
		if (tlRef.current) {
			tlRef.current.kill();
		}

		const tl = gsap.timeline();
		tlRef.current = tl;

		// 네비게이션 애니메이션 (위에서 아래로)
		if (navRef.current) {
			tl.fromTo(
				navRef.current,
				{
					y: -20,
					opacity: 0,
				},
				{
					y: 0,
					opacity: 1,
					duration: 0.5,
					ease: "power2.out",
				},
			);
		}

		// 설정 항목들 애니메이션 (왼쪽에서 오른쪽으로 stagger)
		if (itemsRef.current.length > 0) {
			tl.fromTo(
				itemsRef.current,
				{
					x: -30,
					opacity: 0,
				},
				{
					x: 0,
					opacity: 1,
					duration: 0.6,
					stagger: 0.1,
					ease: "power2.out",
				},
				"-=0.3",
			);
		}

		return () => {
			tl.kill();
		};
	}, []);

	// 페이지 나갈 때 애니메이션
	const handleBack = useCallback(() => {
		if (isAnimating || !tlRef.current) return;

		setIsAnimating(true);
		const tl = gsap.timeline({
			onComplete: () => {
				router.back();
			},
		});

		// reverse 애니메이션
		if (itemsRef.current.length > 0) {
			tl.to(itemsRef.current, {
				x: -30,
				opacity: 0,
				duration: 0.4,
				stagger: 0.05,
				ease: "power2.in",
			});
		}

		if (navRef.current) {
			tl.to(
				navRef.current,
				{
					y: -20,
					opacity: 0,
					duration: 0.3,
					ease: "power2.in",
				},
				"-=0.2",
			);
		}
	}, [router, isAnimating]);

	return (
		<ScreenWrapper className="flex flex-col overflow-hidden">
			<div
				ref={navRef}
				className="p-5 md:p-8 flex w-full text-4xl space-x-6 text-neutral-100"
			>
				<FaChevronLeft
					onClick={handleBack}
					className="text-xl md:text-4xl font-medium cursor-pointer"
				/>
				<span className="text-xl md:text-4xl font-medium font-bm-hanna-11 w-[15%]">
					설정
				</span>
			</div>
			<PageWrapper className="justify-start flex-1">
				<ul className="w-full p-1 py-10 md:p-20 flex flex-col space-y-10 md:space-y-24 max-h-full h-full overflow-y-auto text-neutral-100">
					<li
						ref={(el) => {
							if (el) itemsRef.current[0] = el;
						}}
						className="w-full flex items-center space-x-3"
					>
						<span className="md:text-2xl font-medium font-bm-hanna-11 w-[40%]">
							전체 볼륨
						</span>
						<Slider
							defaultValue={[masterVolume * 100]}
							onValueChange={(e) => {
								setMasterVolume(Number((e[0] / 100).toFixed(2)));
							}}
							max={100}
							step={1}
						/>
						<span className="md:text-xl font-bold">
							{(masterVolume * 100).toFixed(0)}
						</span>
					</li>

					<li
						ref={(el) => {
							if (el) itemsRef.current[1] = el;
						}}
						className="w-full flex items-center space-x-3"
					>
						<span className="md:text-2xl font-medium font-bm-hanna-11 w-[40%]">
							환경음
						</span>
						<Slider
							defaultValue={[ambienceVolume * 100]}
							onValueChange={(e) => {
								setAmbienceVolume(Number((e[0] / 100).toFixed(2)));
							}}
							max={100}
							step={1}
						/>
						<span className="md:text-xl font-bold">
							{(ambienceVolume * 100).toFixed(0)}
						</span>
					</li>
					<li
						ref={(el) => {
							if (el) itemsRef.current[2] = el;
						}}
						className="w-full flex items-center space-x-3"
					>
						<span className="md:text-2xl font-medium font-bm-hanna-11 w-[40%]">
							효과음
						</span>
						<Slider
							defaultValue={[sfxVolume * 100]}
							onValueChange={(e) => {
								setSfxVolume(Number((e[0] / 100).toFixed(2)));
							}}
							max={100}
							step={1}
						/>
						<span className="md:text-xl font-bold">
							{(sfxVolume * 100).toFixed(0)}
						</span>
					</li>
					<li
						ref={(el) => {
							if (el) itemsRef.current[3] = el;
						}}
						className="w-full flex items-center space-x-3"
					>
						<span className="md:text-2xl font-medium font-bm-hanna-11 w-[25%]">
							인트로 스킵
						</span>
						<div className="flex flex-1 justify-center items-center">
							<Checkbox
								defaultChecked={skipIntro}
								onCheckedChange={(e) => {
									setSkipIntro(Boolean(e));
								}}
								className="size-4 md:size-6"
							/>
						</div>
						<span className="md:text-xl font-bold w-[15%] flex justify-end">
							{skipIntro ? "안보기" : "보기"}
						</span>
					</li>
				</ul>
			</PageWrapper>
		</ScreenWrapper>
	);
}
