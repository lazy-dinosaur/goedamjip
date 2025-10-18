import ComponentWrapper from "@/component/ComponentWrapper";
import { PointerEvent } from "react";
import {
	BaseSyntheticEvent,
	useCallback,
	useLayoutEffect,
	useRef,
	useState,
} from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { getIsMobile } from "@/util/getIsMobile";
import { cn } from "@/util/styles";
import { getRandomStoryId } from "@/lib/supabase/story";
import { useRouter } from "next/navigation";
import audioManager from "@/lib/audio/audioManager";

const skipTitles = [
	"다시 돌아왔구나.",
	"또 만났네.",
	"오랜만이야.",
	"기다리고 있었어.",
	"다시 온 걸 환영해.",
	"그래, 네가 올 줄 알았어.",
	"벌써 돌아왔구나.",
	"이곳이 그리웠나 봐.",
];

export default function MainMenu() {
	const isMobile = getIsMobile();
	const [greeting, setGreeting] = useState("자, 어디부터 볼래?");
	const titleRef = useRef<HTMLDivElement>(null);
	const ulRef = useRef<HTMLUListElement>(null);
	const menuItemsRef = useRef<Map<number, HTMLLIElement>>(new Map());
	const [targetMenu, setTargetMenu] = useState<null | number>(null);
	const titleAnimationRef = useRef<gsap.core.Timeline>(null);
	const [titleChange, setTitleChange] = useState<boolean>(false);
	const [mounted, setMounted] = useState<boolean>(false);
	const router = useRouter();
	const pageRef = useRef<HTMLDivElement>(null);

	const menuItems = [
		{
			text: "괴담을 추천 받는다.",
			hoverText: "랜덤 괴담 보기",
			title: "네가 좋아할 만한 걸로 골라봤어.",
		},
		// {
		// 	text: "서고로 걸어간다.",
		// 	hoverText: "괴담 목록",
		// 	title: "괴담들이 네 손길을 기다리고 있어.",
		// },
		// {
		// 	text: "주변을 좀 둘러본다.",
		// 	hoverText: "환경 설정",
		// 	title: "이곳이 더 편안해지도록.",
		// },
		// {
		// 	text: "회원증을 보여준다.",
		// 	hoverText: "로그인",
		// 	title: "네가 남긴 흔적을 찾아줄게.",
		// },
		// {
		// 	text: "비밀서고에 가입한다.",
		// 	hoverText: "회원가입",
		// 	title: "이제 너도 이곳의 일부가 되는 거야.",
		// },
	];
	// 랜덤 타이틀 선택 함수
	// 인트로를 보지 않고 스킵 설정 이 있는 상황에서 메뉴에 접근할 때(재방문시)
	const getRandomSkipTitle = useCallback(() => {
		const available = skipTitles.filter((t) => t !== greeting);
		const title = available[Math.floor(Math.random() * available.length)];
		return title;
	}, [greeting]); // dependency에 greeting 추가!

	useLayoutEffect(() => {
		if (titleAnimationRef.current) {
			titleAnimationRef.current.kill(); // ✅ 또는 clear()
			titleAnimationRef.current = null;
		}
		let split: SplitText | undefined = undefined;
		const tl = gsap.timeline();

		if (titleRef.current) {
			split = SplitText.create(titleRef.current, {
				type: "words, chars",
				mask: "words",
				onSplit(self) {
					tl.add(
						gsap.from(self.words, {
							duration: 1,
							y: -15,
							opacity: 0,
							autoAlpha: 0,
							stagger: 0.05,
							ease: "power2.inOut",
						}),
						"-=0.3",
					);
				},
			});

			titleAnimationRef.current = tl;
		}
		setMounted(true);

		return () => {
			split?.revert();
		};
	}, [greeting]);

	const changeTitle = (title: string, delay: number = 250) => {
		titleAnimationRef.current?.timeScale(2);
		titleAnimationRef.current?.reverse();
		setTitleChange(true);
		setTimeout(() => {
			setGreeting(title);
			setTitleChange(false);
		}, delay);
	};

	useLayoutEffect(() => {
		const handleClick = (event: BaseSyntheticEvent | MouseEvent) => {
			if (
				ulRef.current &&
				!ulRef.current.contains(event.target) &&
				!titleChange
			) {
				changeTitle(getRandomSkipTitle());
			}
		};

		document.addEventListener("click", handleClick);
		return () => {
			document.removeEventListener("click", handleClick);
		};
	}, [isMobile, ulRef, getRandomSkipTitle, titleChange]);

	useLayoutEffect(() => {
		if (menuItemsRef.current && menuItemsRef.current.size > 0) {
			const elements = Array.from(menuItemsRef.current.values());

			gsap.fromTo(
				elements,
				{
					duration: 1,
					x: -15,
					opacity: 0,
					autoAlpha: 0,
					stagger: 0.1,
					ease: "power4.out",
				},
				{
					duration: 1,
					x: 0,
					opacity: 1,
					autoAlpha: 1,
					stagger: 0.1,
					ease: "power4.out",
				},
			);
		}
	}, [menuItemsRef]);

	const handlePointerEnter = (
		ev: PointerEvent<HTMLLIElement>,
		index: number,
	) => {
		if (targetMenu === index) return;
		const li = ev.currentTarget;
		const span = li.querySelector("span");
		const tl = gsap.timeline();
		tl.to(
			span,
			{
				opacity: 0,
				x: -15,
				duration: 0.3,
				ease: "power2.inOut",
			},
			"-=0.2",
		)
			.call(() => setTargetMenu(index), undefined, "-=0.1  ") // call()로 변경
			.to(
				span,
				{
					opacity: 1,
					x: 0,
					duration: 0.6,
					ease: "power2.inOut",
				},
				"-=0.3",
			);
	};

	const handlePointerLeave = (
		ev: PointerEvent<HTMLLIElement>,
		index: number,
	) => {
		if (targetMenu === null) return;
		const li = ev.currentTarget;
		const span = li.querySelector("span");
		const tl = gsap.timeline();
		tl.to(
			span,
			{
				opacity: 0,
				x: -15,
				duration: 0.3,
				ease: "power2.inOut",
			},
			"-=0.2",
		)
			.call(() => setTargetMenu(null), undefined, "-=0.1") // call()로 변경
			.to(
				span,
				{
					opacity: 1,
					x: 0,
					duration: 0.6,
					ease: "power2.inOut",
				},
				"-=0.3",
			);
	};

	const animateSpanEnter = useCallback(
		(element: HTMLSpanElement | null) => {
			if (!element || !mounted) return;

			// 이것만으로도 충분!
			gsap.killTweensOf(element);
			// 초기 상태 설정
			gsap.set(element, { opacity: 0, x: -15 });

			const tl = gsap.timeline();

			// 등장 애니메이션
			tl.add(
				gsap.to(element, {
					duration: 0.6,
					opacity: 1,
					x: 0,
					ease: "power2.inOut",
				}),
				"-=0.3",
			);
		},
		[mounted],
	);

	const handleRandomStoryClick = useCallback(async () => {
		const storyId = await getRandomStoryId();
		if (pageRef.current && storyId) {
			gsap.to(pageRef.current, {
				opacity: 0,
				y: 15,
				duration: 0.3,
				onComplete: () => {
					audioManager.stopAllSound();
					router.push(`/records/${storyId}`);
				},
			});
		}
	}, [router, pageRef]);

	return (
		<ComponentWrapper>
			<div
				ref={pageRef}
				className="w-full h-full flex items-center justify-evenly flex-col overflow-hidden text-neutral-300 select-none"
			>
				<div
					id="title"
					key={greeting}
					ref={titleRef}
					className={`font-bm-hanna-pro text-center h-20 text-4xl md:text-5xl lg:text-6xl transition-all text-korean leading-relaxed opacity-100 transform translate-y-0"
			`}
				>
					{greeting}
				</div>
				<ul
					ref={ulRef}
					className="font-bm-hanna-air text-xl md:text-2xl lg:text-3xl text-center"
				>
					{menuItems.map((item, index) => {
						return (
							<li
								key={index}
								ref={(e) => {
									if (e) menuItemsRef.current.set(index, e);
								}}
								className={`text-neutral-300 transition-colors duration-300 cursor-pointer relative py-1 md:-1.5py lg:py-2 hover:text-neutral-50`}
								onPointerEnter={
									isMobile
										? undefined
										: (e) => {
												handlePointerEnter(e, index);
												changeTitle(item.title);
											}
								}
								onClick={
									isMobile
										? () => setTargetMenu(index)
										: () => {
												if (index == 0) {
													handleRandomStoryClick();
												}
											}
								}
								onPointerLeave={
									isMobile
										? undefined
										: (e) => {
												handlePointerLeave(e, index);
												changeTitle(getRandomSkipTitle());
											}
								}
							>
								<div className="relative px-10">
									<span
										ref={animateSpanEnter} // 요소가 마운트될 때마다 자동 호출
										className={cn(`inline-block`)}
									>
										{targetMenu == index ? item.hoverText : item.text}
									</span>
									<span
										className={cn(
											`absolute -right-0 top-1/2 text-neutral-50 -translate-y-1/2 text-xl`,
											`transition-all duration-150`,
											targetMenu === index
												? "opacity-100 translate-x-0"
												: "opacity-0 translate-x-4 pointer-events-none",
										)}
									>
										<svg
											className="size-3 md:size-4 lg:size-5"
											xmlns="http://www.w3.org/2000/svg"
											width="12"
											height="12"
											viewBox="0 0 100 100"
										>
											<polygon
												points="80,5 80,95 20,50"
												fill=""
												className="fill-neutral-50"
											/>
										</svg>
									</span>
								</div>
							</li>
						);
					})}
				</ul>
			</div>
		</ComponentWrapper>
	);
}
