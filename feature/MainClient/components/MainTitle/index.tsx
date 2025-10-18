"use client";
import ComponentWrapper from "@/component/ComponentWrapper";
import { useRef, useState } from "react";
import { MainTitleText } from "./MainTitleText";
import { SoundAdvice } from "./SoundAdvice";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { LoadingProgress } from "./LoadingProgress";
import audioManager from "@/lib/audio/audioManager";
import TextEffect from "@/lib/text/textEffect";

interface MainTitleProps {
	loadingProgress: number;
	isAssetLoaded: boolean;
	changeStage: () => void;
}

export default function MainTitle({
	loadingProgress,
	isAssetLoaded,
	changeStage,
}: MainTitleProps) {
	const textRef = useRef<HTMLDivElement>(null);
	const soundAdviceRef = useRef<HTMLDivElement>(null);
	const textEffectRef = useRef<TextEffect>(null);

	useGSAP(() => {
		gsap.set(soundAdviceRef.current, { opacity: 0 });
		gsap.set(textRef.current, { opacity: 0 });
		if (textRef.current && soundAdviceRef.current) {
			const textEffect = new TextEffect();
			textEffect
				.addEffect("INK_REVEAL", textRef.current)
				.addEffect("FADE_IN", soundAdviceRef.current, {}, "-=0.2")
				.play();
			textEffectRef.current = textEffect;
		}
	}, []);

	const [isClicked, setIsClicked] = useState(false);

	const onClick = () => {
		setIsClicked(true);
		// audioManager.play("MUSIC_DREAD_REALIZATION", { loop: true });
		// audioManager.play("DRONE_UNSTABLE_AIR", { loop: true });
		setTimeout(() => {
			textEffectRef.current
				?.getTimeline()
				?.eventCallback("onReverseComplete", changeStage)
				.reverse();
		}, 3000);
	};

	return (
		<ComponentWrapper
			className="justify-around"
			onClick={isAssetLoaded && !isClicked ? onClick : undefined}
			style={{ cursor: isAssetLoaded && !isClicked ? "pointer" : "default" }}
		>
			<MainTitleText textRef={textRef} />
			<SoundAdvice soundAdviceRef={soundAdviceRef} />
			<LoadingProgress loadingProgress={loadingProgress} visible={!isClicked} />
		</ComponentWrapper>
	);
}
