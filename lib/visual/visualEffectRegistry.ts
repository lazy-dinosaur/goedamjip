import gsap from "gsap";

export interface VisualEffectOptions {
	loop?: boolean;
	repeat?: number;
	[key: string]: string | number | boolean | undefined;
}

export interface VisualEffectResult {
	element: HTMLElement;
	timeline?: gsap.core.Timeline;
	cleanup?: () => void;
}

export interface VisualEffectCreator {
	(options?: VisualEffectOptions): VisualEffectResult;
	preload?: () => Promise<void>;
}

class VisualEffectRegistry {
	private effects: Map<string, VisualEffectCreator> = new Map();

	register(name: string, creator: VisualEffectCreator) {
		this.effects.set(name, creator);
	}

	get(name: string): VisualEffectCreator | undefined {
		return this.effects.get(name);
	}

	has(name: string): boolean {
		return this.effects.has(name);
	}

	getAll(): VisualEffectCreator[] {
		return Array.from(this.effects.values());
	}
}

export default VisualEffectRegistry;
