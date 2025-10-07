export type EffectResult = {
	timeline?: gsap.core.Timeline; // Timeline만!
	cleanup?: () => void;
};

export type EffectOptions = gsap.TweenVars & {
	intensity?: number;
	speed?: number;
};

export type EffectCreator = (
	element: HTMLElement,
	options?: EffectOptions,
) => EffectResult;

class TextEffectRegistry {
	private effects: Map<string, EffectCreator> = new Map();
	get(name: string): EffectCreator | undefined {
		return this.effects.get(name);
	}
	register(name: string, creator: EffectCreator): void {
		this.effects.set(name, creator);
	}
	list(): string[] {
		return Array.from(this.effects.keys());
	}
}
export default TextEffectRegistry;
