"use client";

import PageWrapper from "@/component/PageWrapper";
import ScreenWrapper from "@/component/ScreenWrapper";
import type { Story } from "@/lib/supabase/story";
import gsap from "gsap";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useLayoutEffect, useRef, useState } from "react";
import type { MouseEvent } from "react";
import { FaArrowRight, FaChevronLeft } from "react-icons/fa6";

interface RecordsClientProps {
	stories: Pick<Story, "id" | "title" | "author" | "published_at">[];
	hasError?: boolean;
}

// 날짜 표기 통일 (서버와 브라우저의 시간대 차이 방지)
function formatPublishedDate(value: string | null) {
	if (!value) return null;
	const date = new Date(value);
	if (Number.isNaN(date.getTime())) return null;

	return new Intl.DateTimeFormat("ko-KR", {
		year: "numeric",
		month: "2-digit",
		day: "2-digit",
		timeZone: "UTC",
	}).format(date);
}

export default function RecordsClient({ stories, hasError = false }: RecordsClientProps) {
	const router = useRouter();
	const screenRef = useRef<HTMLDivElement>(null);
	const navRef = useRef<HTMLElement>(null);
	const tlRef = useRef<gsap.core.Timeline | null>(null);
	const isNavigatingRef = useRef(false);
	const [isAnimating, setIsAnimating] = useState(false);

	// 진입 애니메이션
	useLayoutEffect(() => {
		const media = gsap.matchMedia();

		// 움직임 줄이기 설정에서는 콘텐츠를 바로 표시
		media.add("(prefers-reduced-motion: no-preference)", () => {
			const items = screenRef.current?.querySelectorAll("[data-record-item]");
			const tl = gsap.timeline();
			tlRef.current = tl;

			// 네비게이션 애니메이션 (위에서 아래로)
			tl.fromTo(navRef.current, { y: -20, opacity: 0 }, {
				y: 0,
				opacity: 1,
				duration: 0.5,
				ease: "power2.out",
			});

			// 목록 항목들 애니메이션 (왼쪽에서 오른쪽으로 stagger)
			if (items?.length) {
				tl.fromTo(items, { x: -30, opacity: 0 }, {
					x: 0,
					opacity: 1,
					duration: 0.6,
					stagger: Math.min(0.1, 0.5 / items.length),
					ease: "power2.out",
				}, "-=0.3");
			}
		});

		// 페이지 이동 시 진행 중인 애니메이션 정리
		return () => {
			tlRef.current?.kill();
			media.revert();
		};
	}, [stories, hasError]);

	// 페이지 나갈 때 애니메이션
	const handleNavigate = useCallback((event: MouseEvent<HTMLAnchorElement>, href: string) => {
		// 새 탭 열기 등 링크의 기본 동작 유지
		if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
		event.preventDefault();
		if (isNavigatingRef.current) return;

		isNavigatingRef.current = true;
		setIsAnimating(true);
		tlRef.current?.kill();

		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			router.push(href);
			return;
		}

		const items = screenRef.current?.querySelectorAll("[data-record-item]");
		const tl = gsap.timeline({ onComplete: () => router.push(href) });
		tlRef.current = tl;

		// 진입 애니메이션의 반대 방향으로
		if (items?.length) {
			tl.to(items, {
				x: -30,
				opacity: 0,
				duration: 0.4,
				stagger: Math.min(0.05, 0.25 / items.length),
				ease: "power2.in",
			});
		}

		tl.to(navRef.current, {
			y: -20,
			opacity: 0,
			duration: 0.3,
			ease: "power2.in",
		}, "-=0.2");
	}, [router]);

	return (
		<ScreenWrapper ref={screenRef} className="flex flex-col overflow-hidden text-neutral-100" aria-busy={isAnimating}>
			{/* 상단 네비게이션 */}
			<header ref={navRef} className="flex shrink-0 items-center gap-4 p-5 md:gap-6 md:p-8">
				<Link
					href="/"
					onClick={(event) => handleNavigate(event, "/")}
					aria-label="메인으로 돌아가기"
					aria-disabled={isAnimating}
					className="flex size-11 shrink-0 items-center justify-center rounded-sm text-xl text-neutral-400 transition-colors hover:text-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-100 md:text-4xl"
				>
					<FaChevronLeft aria-hidden="true" />
				</Link>
				<h1 className="font-bm-hanna-11 text-xl font-medium md:text-4xl">괴담집</h1>
			</header>

			<PageWrapper className="min-h-0 flex-1 items-stretch justify-start px-6 md:px-20">
				<div className="min-h-0 flex-1 overflow-y-auto overscroll-contain pb-8 md:pb-16">
					{/* 서고 안내 */}
					<div data-record-item className="border-b border-neutral-800 pb-8 pt-6 md:pb-12 md:pt-10">
						<p className="mb-4 font-bm-hanna-air text-xs tracking-[0.3em] text-neutral-500 md:text-sm">괴담 보관소</p>
						<h2 className="font-bm-hanna-pro text-2xl leading-relaxed text-neutral-200 text-korean md:text-4xl">어떤 이야기를 펼쳐볼래?</h2>
						<div className="mt-4 flex flex-wrap items-center justify-between gap-3 font-bm-hanna-air text-sm text-neutral-400 md:mt-6 md:text-base">
							<p>이곳에 남겨진 이야기들이 너를 기다리고 있어.</p>
							{!hasError && <span className="shrink-0 tabular-nums">총 {stories.length}편</span>}
						</div>
					</div>

					{/* 괴담 목록 */}
					{stories.length > 0 ? (
						<ul aria-label="괴담 목록" className="w-full">
							{stories.map((story, index) => {
								const publishedDate = formatPublishedDate(story.published_at);
								const href = `/records/${story.id}`;

								return (
									<li key={story.id} data-record-item className="border-b border-neutral-800">
										<Link
											href={href}
											prefetch={false}
											onClick={(event) => handleNavigate(event, href)}
											aria-disabled={isAnimating}
											className="group flex items-center gap-4 px-2 py-6 transition-colors duration-300 hover:bg-neutral-900/60 focus-visible:bg-neutral-900 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-neutral-400 md:gap-8 md:px-4 md:py-8"
										>
											<span aria-hidden="true" className="self-start pt-1 font-bm-hanna-air text-sm tabular-nums text-neutral-500 md:text-base">{String(index + 1).padStart(2, "0")}</span>
											<div className="min-w-0 flex-1">
												<h3 className="break-words font-bm-hanna-11 text-lg leading-relaxed text-neutral-300 transition-colors group-hover:text-neutral-50 group-focus-visible:text-neutral-50 md:text-2xl">
													{/* 한자는 기본 글꼴로 표시 (한나체의 미지원 문자 보완) */}
													{(story.title?.trim() || "제목 없는 이야기").split(/(\p{Script=Han}+)/u).map((text, partIndex) => (
														<span key={partIndex} className={/\p{Script=Han}/u.test(text) ? "font-sans" : undefined}>{text}</span>
													))}
												</h3>
												<div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 font-bm-hanna-air text-sm text-neutral-400 md:text-base">
													<span className="break-all">{story.author?.trim() || "작자 미상"}</span>
													{publishedDate && (
														<>
															<span aria-hidden="true" className="text-neutral-700">/</span>
															<time dateTime={story.published_at!} className="tabular-nums">{publishedDate}</time>
														</>
													)}
												</div>
											</div>
											<FaArrowRight aria-hidden="true" className="size-3 shrink-0 text-neutral-500 transition-all duration-300 group-hover:translate-x-1 group-hover:text-neutral-100 group-focus-visible:translate-x-1 group-focus-visible:text-neutral-100 motion-reduce:transform-none motion-reduce:transition-none md:size-4" />
										</Link>
									</li>
								);
							})}
						</ul>
					) : (
						/* 빈 목록 및 조회 실패 안내 */
						<div data-record-item role="status" className="flex min-h-64 flex-col items-center justify-center gap-3 px-4 py-16 text-center">
							<p className="font-bm-hanna-11 text-xl text-neutral-300 md:text-2xl">{hasError ? "서고의 문을 열지 못했어." : "아직 남겨진 이야기가 없어."}</p>
							<p className="font-bm-hanna-air text-sm text-neutral-400 md:text-base">{hasError ? "잠시 후 다시 방문해 주세요." : "새로운 이야기가 찾아오면 이곳에 모아둘게."}</p>
						</div>
					)}

					{/* 목록 끝 안내 */}
					{stories.length > 0 && (
						<p data-record-item className="py-8 text-center font-bm-hanna-air text-xs tracking-widest text-neutral-500 md:py-10 md:text-sm">어떤 이야기는, 펼치는 순간 시작돼.</p>
					)}
				</div>
			</PageWrapper>
		</ScreenWrapper>
	);
}
