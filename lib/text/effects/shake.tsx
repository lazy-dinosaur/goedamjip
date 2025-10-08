import gsap from "gsap";
import { EffectCreator } from "../textEffectRegistry";

export const SHAKE: EffectCreator = (element, options = {}) => {
	const intensity = options.intensity ?? 10;
	let loopActive = true;

	gsap.set(element, { display: "inline-block" });

	let currentDelayedCall: gsap.core.Tween | null = null;

	const createShakeLoop = () => {
		if (!loopActive) return;

		const tl = gsap.timeline({
			onComplete: () => {
				if (loopActive) {
					currentDelayedCall = gsap.delayedCall(
						gsap.utils.random(0.5, 2),
						createShakeLoop,
					);
				}
			},
		});

		for (let i = 0; i < 6; i++) {
			tl.to(element, {
				duration: 0.05,
				x: `random(${-intensity / 2}, ${intensity})`,
				y: `random(${-intensity / 2}, ${intensity})`,
				z: `random(${-intensity / 2}, ${intensity})`,
				ease: "none",
			});
		}

		tl.to(element, {
			duration: 0.05,
			x: 0,
			y: 0,
			z: 0,
			ease: "power2.out",
		});
	};

	createShakeLoop();

	return {
		cleanup: () => {
			loopActive = false;

			if (currentDelayedCall) {
				currentDelayedCall.kill();
				currentDelayedCall = null;
			}

			gsap.killTweensOf(element);
			gsap.set(element, {
				x: 0,
				y: 0,
				z: 0,
				clearProps: "all",
			});
		},
	};
};
