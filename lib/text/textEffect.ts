import gsap from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import TextEffectRegistry, { EffectOptions } from "./textEffectRegistry";
import TextEffectLibrary from "./textEffectLibrary";

gsap.registerPlugin(ScrambleTextPlugin);

class TextEffect {
	private timeline: gsap.core.Timeline;
	private registry: TextEffectRegistry;
	private cleanUpFunctions: Array<() => void> = [];

	constructor() {
		this.timeline = gsap.timeline({ paused: true });
		this.registry = new TextEffectRegistry();
		Object.entries(TextEffectLibrary).forEach(([name, creator]) => {
			this.registry.register(name, creator);
		});
	}

	addEffect(
		effectName: string,
		element: HTMLElement,
		options?: EffectOptions,
		position?: gsap.Position,
	) {
		const creator = this.registry.get(effectName);
		if (!creator) {
			console.warn(`Effect "${effectName}" not found`);
			return this;
		}
		const result = creator(element, options);

		if (result.timeline) this.timeline.add(result.timeline, position);

		if (result.cleanup) {
			this.cleanUpFunctions.push(result.cleanup);
		}
		return this;
	}
	getTimeline() {
		return this.timeline;
	}
	clearAll() {
		this.timeline.kill();
		this.cleanUpFunctions.forEach((fn) => fn());
		this.cleanUpFunctions = [];
	}
	play() {
		this.timeline.play();
		return this;
	}
	pause() {
		this.timeline.pause();
		return this;
	}
	reverse() {
		this.timeline.reverse();
		return this;
	}
	revert() {
		this.timeline.revert();
	}
	seek(position: number) {
		this.timeline.seek(position);
		return this;
	}
}
export default TextEffect;
