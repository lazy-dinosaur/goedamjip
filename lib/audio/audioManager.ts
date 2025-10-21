import { Howl } from "howler";

class AudioManager {
	private static instance: AudioManager;
	private cache: Map<
		string,
		{
			howl: Howl;
			subcategory: "ambience" | "sfx";
		}
	> = new Map();

	private ambienceVolume: number = 1.0;
	private sfxVolume: number = 1.0;

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

	setAmbienceVolume(volume: number): void {
		this.ambienceVolume = Math.max(0, Math.min(1, volume)); // 볼륨 값 저장
		this.cache.forEach((cached) => {
			if (cached.subcategory === "ambience") {
				cached.howl.volume(this.ambienceVolume);
			}
		});
	}

	setSfxVolume(volume: number): void {
		this.sfxVolume = Math.max(0, Math.min(1, volume));
		this.cache.forEach((cached) => {
			if (cached.subcategory === "sfx") {
				cached.howl.volume(this.sfxVolume);
			}
		});
	}

	async loadAudio(
		key: string,
		url: string,
		metadata?: { tags?: string[]; properties?: { sustain?: boolean } },
	): Promise<Howl> {
		const isAmbience =
			metadata?.properties?.sustain == true ||
			metadata?.tags?.includes("환경음");
		const subcategory = isAmbience ? "ambience" : "sfx";
		if (this.cache.has(key)) {
			return Promise.resolve(this.cache.get(key)!.howl);
		}
		return new Promise((resolve, reject) => {
			const howl = new Howl({
				src: [url],
				html5: false,
				preload: true,
				onload: () => {
					this.cache.set(key, {
						howl,
						subcategory,
					});
					// subcategory에 맞는 볼륨 적용
					const initialVolume =
						subcategory === "ambience" ? this.ambienceVolume : this.sfxVolume;
					howl.volume(initialVolume);

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
		const cached = this.cache.get(key);
		if (!cached) throw new Error(`Audio ${key} not loaded`);

		// 중복 재생 방지: 이미 재생 중이면 스킵
		if (cached.howl.playing()) {
			return;
		}

		const categoryVolume =
			cached.subcategory === "ambience" ? this.ambienceVolume : this.sfxVolume;

		if (options?.volume !== undefined) {
			cached.howl.volume(options.volume * categoryVolume); // 곱하기!
		}

		if (options?.repeat && options.repeat > 1) {
			let count = 0;
			const playOnce = () => {
				const id = cached.howl.play();
				count++;
				if (count < options.repeat!) {
					cached.howl.once("end", playOnce, id);
				} else if (options.onend) {
					cached.howl.once("end", options.onend, id);
				}
			};
			playOnce();
			return;
		}

		if (options?.loop !== undefined) {
			cached.howl.loop(options.loop);
		}
		if (options?.fade) {
			cached.howl.volume(options.fade.from * categoryVolume); // 곱하기!
		} else {
			cached.howl.volume(0);
		}

		const id = cached.howl.play();

		if (options?.fade) {
			cached.howl.fade(
				options.fade.from * categoryVolume,
				options.fade.to * categoryVolume,
				options.fade.duration,
				id,
			);
		} else {
			cached.howl.fade(0, 1 * categoryVolume, 0);
		}

		if (options?.onend) {
			cached.howl.once("end", options.onend, id);
		}

		return id;
	}

	pause(key: string) {
		const cached = this.cache.get(key);
		if (cached) {
			cached.howl.pause();
		}
	}

	stop(key: string) {
		const cached = this.cache.get(key);
		if (cached) {
			cached.howl.stop();
		}
	}

	resume(key: string) {
		const cached = this.cache.get(key);
		if (cached) {
			cached.howl.play();
		}
	}

	fade(
		tagName: string,
		from: number,
		to: number,
		duration: number,
		id?: number,
	): void {
		const cached = this.cache.get(tagName);
		if (cached) {
			// subcategory 볼륨 가져오기
			const categoryVolume =
				cached.subcategory === "ambience"
					? this.ambienceVolume
					: this.sfxVolume;

			// from과 to에 categoryVolume 곱하기
			cached.howl.fade(
				from * categoryVolume,
				to * categoryVolume,
				duration,
				id,
			);
		}
	}

	isLoaded(tagName: string): boolean {
		return this.cache.has(tagName);
	}

	stopOnShots(fadeDuration: number = 500) {
		this.cache.forEach((cached) => {
			// loop:false && 재생 중인 것만 정리
			if (!cached.howl.loop() && cached.howl.playing()) {
				cached.howl.fade(cached.howl.volume(), 0, fadeDuration);

				// fade 완료 후 stop
				setTimeout(() => {
					cached.howl.stop();
				}, fadeDuration);
			}
		});
	}

	stopAllSound(fadeDuration: number = 500) {
		this.cache.forEach((cached) => {
			// 재생 중인 모든 오디오 정리
			if (cached.howl.playing()) {
				cached.howl.fade(cached.howl.volume(), 0, fadeDuration);

				// fade 완료 후 stop
				setTimeout(() => {
					cached.howl.stop();
				}, fadeDuration);
			}
		});
	}

	clearCache(): void {
		this.cache.forEach((cached) => {
			cached.howl.unload();
		});
		this.cache.clear();
	}
}

const audioManager = AudioManager.getInstance();

export default audioManager;
