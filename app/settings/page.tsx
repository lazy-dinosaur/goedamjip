"use client";
import PageWrapper from "@/component/PageWrapper";
import ScreenWrapper from "@/component/ScreenWrapper";
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
		<ScreenWrapper>
			<div className="fixed mx-auto max-w-screen-xl inset-0 p-8 ">
				<FaChevronLeft className="text-4xl" />
			</div>
			<PageWrapper>
				<ul className="w-full px-20">
					<li className="w-full">
						<label
							htmlFor="large-range"
							className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						>
							Large range
						</label>
						<input
							id="large-range"
							type="range"
							min="0"
							max="5"
							value="2.5"
							step="0.5"
							className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer range-lg dark:bg-gray-700"
						/>
					</li>
				</ul>
			</PageWrapper>
		</ScreenWrapper>
	);
}
