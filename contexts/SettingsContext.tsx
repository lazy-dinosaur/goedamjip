"use client";

import React, { createContext, useState, useEffect, ReactNode } from "react";
import audioManager from "@/lib/audio/audioManager";

// 1. Context에서 제공할 타입 정의
interface SettingsContextType {
	masterVolume: number;
	ambienceVolume: number;
	sfxVolume: number;
	skipIntro: boolean;
	setMasterVolume: (volume: number) => void;
	setAmbienceVolume: (volume: number) => void;
	setSfxVolume: (volume: number) => void;
	setSkipIntro: (skip: boolean) => void;
	resetToDefault: () => void;
}

// 2. Context 생성
const SettingsContext = createContext<SettingsContextType | undefined>(
	undefined,
);

// 3. Provider Props 타입
interface SettingsProviderProps {
	children: ReactNode;
}

// 4. Provider 컴포넌트
export const SettingsProvider = ({ children }: SettingsProviderProps) => {
	const [isLoaded, setIsLoaded] = useState(false);
	const [masterVolume, setMasterVolume] = useState<number>(1.0);
	const [ambienceVolume, setAmbienceVolume] = useState<number>(1.0);
	const [sfxVolume, setSfxVolume] = useState<number>(1.0);
	const [skipIntro, setSkipIntro] = useState<boolean>(false);

	// 컴포넌트 마운트 시 localStorage 초기화
	useEffect(() => {
		const savedMaster = parseFloat(
			localStorage.getItem("masterVolume") || "1.0",
		);
		const savedAmbience = parseFloat(
			localStorage.getItem("ambienceVolume") || "1.0",
		);
		const savedSfx = parseFloat(localStorage.getItem("sfxVolume") || "1.0");

		const savedSkipIntro = localStorage.getItem("skipIntro") === "true";

		// localStorage에서 값 불러와서 state에 설정
		setMasterVolume(savedMaster);
		setAmbienceVolume(savedAmbience);
		setSfxVolume(savedSfx);
		setSkipIntro(savedSkipIntro);

		audioManager.setGlobalVolume(savedMaster);
		audioManager.setAmbienceVolume(savedAmbience);
		audioManager.setSfxVolume(savedSfx);

		setIsLoaded(true); // 로딩 완료
	}, []); // 빈 배열 = 마운트 시 한 번만 실행

	// 볼륨 변경 시 localStorage 저장 + audioManager 연동
	const handleMasterVolumeChange = (volume: number) => {
		setMasterVolume(volume);
		localStorage.setItem("masterVolume", volume.toString());
		audioManager.setGlobalVolume(volume);
	};

	const handleAmbienceVolumeChange = (volume: number) => {
		setAmbienceVolume(volume);
		localStorage.setItem("ambienceVolume", volume.toString());
		audioManager.setAmbienceVolume(volume);
	};

	const handleSfxVolumeChange = (volume: number) => {
		setSfxVolume(volume);
		localStorage.setItem("sfxVolume", volume.toString());
		audioManager.setSfxVolume(volume);
	};
	const handleSkipIntroChange = (skip: boolean) => {
		setSkipIntro(skip);
		localStorage.setItem("skipIntro", skip.toString());
	};

	// 기본값으로 리셋
	const resetToDefault = () => {
		handleMasterVolumeChange(1.0);
		handleAmbienceVolumeChange(1.0);
		handleSfxVolumeChange(1.0);
		handleSkipIntroChange(false);
	};

	// 로딩 중에는 children 렌더링 안 함
	if (!isLoaded) {
		return null;
	}

	return (
		<SettingsContext.Provider
			value={{
				masterVolume,
				ambienceVolume,
				sfxVolume,
				skipIntro,
				setMasterVolume: handleMasterVolumeChange,
				setAmbienceVolume: handleAmbienceVolumeChange,
				setSfxVolume: handleSfxVolumeChange,
				setSkipIntro: handleSkipIntroChange,
				resetToDefault,
			}}
		>
			{children}
		</SettingsContext.Provider>
	);
};

// 5. useSettings 커스텀 훅
export const useSettingsContext = () => {
	const context = React.useContext(SettingsContext);

	if (context === undefined) {
		throw new Error("useSettings must be used within a SettingsProvider");
	}

	return context;
};
