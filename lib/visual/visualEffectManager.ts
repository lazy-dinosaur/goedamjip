import gsap from "gsap";
import VisualEffectRegistry from "./visualEffectRegistry";
import VisualEffectLibrary from "./visualEffectLibrary";

type VisualEffect = {
	element: HTMLElement;
	timeline?: gsap.core.Timeline;
	cleanup?: () => void;
	options?: { loop?: boolean };
};

class VisualEffectManager {
	private static instance: VisualEffectManager;
	private container: HTMLElement | null = null;
	private activeEffects: Map<string, VisualEffect> = new Map();
	private registry: VisualEffectRegistry;
	private assetCache: Map<string, string> = new Map(); // tag_name → url
	private resizeListenerRegistered: boolean = false;
	private resizeTimeout: NodeJS.Timeout | null = null;

	private constructor() {
		this.registry = new VisualEffectRegistry();
		// 모든 효과 등록
		Object.entries(VisualEffectLibrary).forEach(([name, creator]) => {
			this.registry.register(name, creator);
		});
	}

	static getInstance() {
		if (!VisualEffectManager.instance) {
			VisualEffectManager.instance = new VisualEffectManager();
		}
		return VisualEffectManager.instance;
	}
	async preloadEffect(tagName: string, url: string): Promise<void> {
		this.assetCache.set(tagName, url);

		// 파일 확장자로 타입 판별
		if (url.match(/\.(png|jpg|jpeg|svg|gif|webp)$/i)) {
			const img = new Image();
			img.src = url;
			await img.decode();
		} else if (url.match(/\.(mp4|webm|ogg)$/i)) {
			return new Promise((resolve, reject) => {
				const video = document.createElement("video");
				video.src = url;
				video.preload = "auto";
				video.oncanplaythrough = () => resolve();
				video.onerror = () => reject(new Error(`Failed to load video: ${url}`));
				video.load();
			});
		}
	}

	getAssetUrl(tagName: string): string | undefined {
		return this.assetCache.get(tagName);
	}

	init(container: HTMLElement) {
		this.container = container;
	}

	private registerResizeListener() {
		if (!this.resizeListenerRegistered) {
			this.resizeListenerRegistered = true;
			window.addEventListener("resize", this.handleResizeEvent);
		}
	}

	private unregisterResizeListener() {
		if (this.resizeListenerRegistered) {
			window.removeEventListener("resize", this.handleResizeEvent);
			this.resizeListenerRegistered = false;
			if (this.resizeTimeout) {
				clearTimeout(this.resizeTimeout);
				this.resizeTimeout = null;
			}
		}
	}

	private handleResizeEvent = () => {
		if (this.resizeTimeout) {
			clearTimeout(this.resizeTimeout);
		}
		this.resizeTimeout = setTimeout(() => {
			this.handleResize();
		}, 200);
	};

	play(tag: string, options?: { loop?: boolean }) {
		if (!this.container) {
			console.warn("VisualEffectManager not initialized");
			return;
		}

		if (this.activeEffects.has(tag)) {
			console.warn(`Effect ${tag} already playing`);
			return;
		}

		const creator = this.registry.get(tag);
		if (!creator) {
			console.warn(`Unknown effect: ${tag}`);
			return;
		}

		const result = creator(options);

		this.container.appendChild(result.element);

		// timeline 시작
		if (result.timeline) {
			result.timeline.play();
		}

		this.activeEffects.set(tag, {
			element: result.element,
			timeline: result.timeline,
			cleanup: result.cleanup,
			options: options,
		});

		// 첫 번째 effect가 추가되면 resize 리스너 등록
		if (this.activeEffects.size === 1) {
			this.registerResizeListener();
		}
	}

	stopImmediate(tag: string) {
		const effect = this.activeEffects.get(tag);
		if (!effect) return;

		if (effect.timeline) {
			effect.timeline.kill();
		}
		if (effect.cleanup) {
			effect.cleanup();
		}
		effect.element.remove();
		this.activeEffects.delete(tag);

		// 모든 effect가 제거되면 resize 리스너 해제
		if (this.activeEffects.size === 0) {
			this.unregisterResizeListener();
		}
	}

	stop(tag: string) {
		const effect = this.activeEffects.get(tag);
		if (!effect) return;

		// fade out
		gsap.to(effect.element, {
			opacity: 0,
			duration: 0.5,
			onComplete: () => {
				if (effect.timeline) {
					effect.timeline.kill();
				}
				if (effect.cleanup) {
					effect.cleanup();
				}
				effect.element.remove();
				this.activeEffects.delete(tag);

				// 모든 effect가 제거되면 resize 리스너 해제
				if (this.activeEffects.size === 0) {
					this.unregisterResizeListener();
				}
			},
		});
	}

	fade(tag: string, from: number, to: number, duration: number) {
		const effect = this.activeEffects.get(tag);
		if (!effect) return;

		gsap.fromTo(
			effect.element,
			{ opacity: from },
			{ opacity: to, duration: duration / 1000 },
		);
	}

	stopAll() {
		this.activeEffects.forEach((_, tag) => {
			this.stop(tag);
		});
	}

	private handleResize() {
		// 현재 활성화된 effects 정보 저장
		const effectsToRestore: Array<{
			tag: string;
			options?: { loop?: boolean };
		}> = [];
		this.activeEffects.forEach((effect, tag) => {
			effectsToRestore.push({ tag, options: effect.options });
		});

		// 모든 effects 즉시 정리
		effectsToRestore.forEach(({ tag }) => {
			this.stopImmediate(tag);
		});

		// effects 다시 재생
		effectsToRestore.forEach(({ tag, options }) => {
			this.play(tag, options);
		});
	}

	destroy() {
		// 모든 effects 정리 (stopImmediate가 자동으로 리스너 제거까지 처리)
		const tags = Array.from(this.activeEffects.keys());
		tags.forEach((tag) => {
			this.stopImmediate(tag);
		});

		this.container = null;
	}
}

const visualEffectManager = VisualEffectManager.getInstance();
export default visualEffectManager;
