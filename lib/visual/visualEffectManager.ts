import gsap from "gsap";
import VisualEffectRegistry from "./visualEffectRegistry";
import VisualEffectLibrary from "./visualEffectLibrary";

type VisualEffect = {
	element: HTMLElement;
	timeline?: gsap.core.Timeline;
	cleanup?: () => void;
};

class VisualEffectManager {
	private container: HTMLElement | null = null;
	private activeEffects: Map<string, VisualEffect> = new Map();
	private registry: VisualEffectRegistry;
	private assetCache: Map<string, string> = new Map(); // tag_name → url

	constructor() {
		this.registry = new VisualEffectRegistry();
		// 모든 효과 등록
		Object.entries(VisualEffectLibrary).forEach(([name, creator]) => {
			this.registry.register(name, creator);
		});
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
		});
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
}

const visualEffectManager = new VisualEffectManager();
export default visualEffectManager;
