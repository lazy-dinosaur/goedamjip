import PageWrapper from "@/component/PageWrapper";
import { LoadingProgress } from "@/feature/MainClient/components/MainTitle/LoadingProgress";
import { StoryMetadata } from "@/types/story.types";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import gsap from "gsap";
import TextEffect from "@/lib/text/textEffect";

interface StoryTitleProps {
	loadingProgress: number;
	title: string;
	metadata: StoryMetadata;
	isAssetLoaded: boolean;
	changeStage: () => void;
	loadingMessage: string;
}
export default function StoryTitle({
	loadingProgress,
	title,
	isAssetLoaded,
	metadata,
	changeStage,
	loadingMessage,
}: StoryTitleProps) {
	const titleRef = useRef<HTMLDivElement>(null);
	const textEffectRef = useRef<TextEffect>(null);
	const tagRefs = useRef<Map<number, HTMLSpanElement>>(new Map());
	const { tags } = metadata;

	useGSAP(() => {
		gsap.set(titleRef.current, { opacity: 0 });

		if (titleRef.current && tagRefs.current.size > 0) {
			const textEffect = new TextEffect();
			const tagElements = Array.from(tagRefs.current.values());

			textEffect.addEffect("INK_REVEAL", titleRef.current).play();
			textEffect
				.getTimeline()
				.add(
					gsap.fromTo(
						tagElements,
						{
							opacity: 0,
							y: 15,
						},
						{
							opacity: 1,
							y: 0,
							duration: 0.6,
							stagger: 0.1,
							ease: "power2.out",
							delay: 0.5, // 타이틀 후에 등장
						},
					),
					"-=0.8",
				)
				.play();

			textEffectRef.current = textEffect;
		}
	}, []);

	const [isClicked, setIsClicked] = useState(false);

	const onClick = () => {
		setIsClicked(true);
		textEffectRef.current
			?.getTimeline()
			?.eventCallback("onReverseComplete", changeStage)
			.reverse();
	};

	return (
		<PageWrapper
			onClick={isAssetLoaded && !isClicked ? onClick : undefined}
			className=" justify-center h-full relative"
			style={{ cursor: isAssetLoaded && !isClicked ? "pointer" : "default" }}
		>
			<div
				ref={titleRef}
				className="text-5xl md:text-6xl lg:text-7xl text-red-700 text-center px-10 font-bm-euljiro-10 whitespace-nowrap mb-10 -mt-10"
			>
				{title}
			</div>
			<div className="space-x-6 text-neutral-300 text-lg md:text-2xl font-bm-hanna-11 text-center">
				{tags.map((tag, index) => {
					return (
						<span
							ref={(e) => {
								if (e) tagRefs.current.set(index, e);
							}}
							className="whitespace-nowrap"
							key={`${tag}-${index}`}
						>
							#{tag}
						</span>
					);
				})}
			</div>
			<LoadingProgress
				loadingProgress={loadingProgress}
				visible={!isClicked}
				location="middle"
				loadingMessage={loadingMessage}
			/>
		</PageWrapper>
	);
}
