import { Howl } from "howler";

class AudioManager {
	private static instance: AudioManager;
	private cache: Map<string, Howl> = new Map();
	private constructor() {}
	static getInstance() {
		if (!AudioManager.instance) {
			AudioManager.instance = new AudioManager();
		}
		return AudioManager.instance;
	}

	setGlobalVolume(volume: number): void {
		Howler.volume(Math.max(0, Math.min(1, volume)));
	}

	async loadAudio(key: string, url: string): Promise<Howl> {
		if (this.cache.has(key)) {
			return Promise.resolve(this.cache.get(key)!);
		}
		return new Promise((resolve, reject) => {
			const howl = new Howl({
				src: [url],
				html5: false,
				preload: true,
				onload: () => {
					this.cache.set(key, howl);
					resolve(howl);
				},
				onloaderror: (id, err) => {
					reject(err);
				},
			});
		});
	}

	play(
		key: string,
		options: {
			loop?: boolean;
			volume?: number;
			repeat?: number;
			fade?: { from: number; to: number; duration: number };
			onend?: () => void;
		},
	) {
		const howl = this.cache.get(key);
		if (!howl) throw new Error(`Audio ${key} not loaded`);

		// 중복 재생 방지: 이미 재생 중이면 스킵
		if (howl.playing()) {
			return;
		}

		if (options?.volume !== undefined) {
			howl.volume(options.volume);
		}

		if (options?.repeat && options.repeat > 1) {
			let count = 0;
			const playOnce = () => {
				const id = howl.play();
				count++;
				if (count < options.repeat!) {
					howl.once("end", playOnce, id);
				} else if (options.onend) {
					howl.once("end", options.onend, id);
				}
			};
			playOnce();
			return;
		}

		if (options?.loop !== undefined) {
			howl.loop(options.loop);
		}
		if (options?.fade) {
			howl.volume(options.fade.from);
		} else {
			howl.volume(0);
		}

		const id = howl.play();

		if (options?.fade) {
			howl.fade(options.fade.from, options.fade.to, options.fade.duration, id);
		} else {
			howl.fade(0, 1, 0);
		}

		if (options?.onend) {
			howl.once("end", options.onend, id);
		}

		return id;
	}

	pause(key: string) {
		const howl = this.cache.get(key);
		if (howl) {
			howl.pause();
		}
	}

	stop(key: string) {
		const howl = this.cache.get(key);
		if (howl) {
			howl.stop();
		}
	}

	resume(key: string) {
		const howl = this.cache.get(key);
		if (howl) {
			howl.play();
		}
	}

	fade(
		tagName: string,
		from: number,
		to: number,
		duration: number,
		id?: number,
	): void {
		const howl = this.cache.get(tagName);
		if (howl) {
			howl.fade(from, to, duration, id);
		}
	}

	isLoaded(tagName: string): boolean {
		return this.cache.has(tagName);
	}

	stopOnShots(fadeDuration: number = 500) {
		this.cache.forEach((howl, key) => {
			// loop:false && 재생 중인 것만 정리
			if (!howl.loop() && howl.playing()) {
				howl.fade(howl.volume(), 0, fadeDuration);

				// fade 완료 후 stop
				setTimeout(() => {
					howl.stop();
				}, fadeDuration);
			}
		});
	}

	stopAllSound(fadeDuration: number = 500) {
		this.cache.forEach((howl, key) => {
			// 재생 중인 모든 오디오 정리
			if (howl.playing()) {
				howl.fade(howl.volume(), 0, fadeDuration);

				// fade 완료 후 stop
				setTimeout(() => {
					howl.stop();
				}, fadeDuration);
			}
		});
	}

	clearCache(): void {
		this.cache.forEach((howl) => {
			howl.unload();
		});
		this.cache.clear();
	}
}

const audioManager = AudioManager.getInstance();

export default audioManager;
