"use client";
import ScreenWrapper from "@/component/ScreenWrapper";
import PageWrapper from "@/component/PageWrapper";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { useSettingsContext } from "@/contexts/SettingsContext";
import { useRouter } from "next/navigation";
import { FaChevronLeft } from "react-icons/fa6";

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
		resetToDefault,
	} = useSettingsContext();

	return (
		<ScreenWrapper className="flex flex-col">
			<div className="p-5 md:p-8 flex w-full text-4xl space-x-5">
				<FaChevronLeft
					onClick={() => {
						router.back();
					}}
					className="text-xl md:text-4xl font-medium cursor-pointer"
				/>
				<span className="text-xl md:text-4xl font-medium font-bm-hanna-11 w-[15%]">
					설정
				</span>
			</div>
			<PageWrapper className="justify-start flex-1">
				<ul className="w-full p-1 py-5 md:p-20 flex flex-col space-y-5 md:space-y-24 max-h-full h-full overflow-y-auto">
					<li className="w-full flex items-center space-x-3">
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

					<li className="w-full flex items-center space-x-3">
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
					<li className="w-full flex items-center space-x-3">
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
					<li className="w-full flex items-center space-x-3">
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
