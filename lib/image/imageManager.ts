import gsap from "gsap";

interface ImageData {
	url: string;
	type: "background" | "overlay" | "jumpscare";
	element: HTMLImageElement;
	maskingElement: HTMLImageElement;
	sustainUntil?: string;
	index: number;
}

class ImageManager {
	private static instance: ImageManager;
	private activeImages: Map<number, ImageData> = new Map();
	private imageCache: Map<string, HTMLImageElement> = new Map();
	private currentIndex: number = 0;

	private constructor() {}

	static getInstance() {
		if (!ImageManager.instance) {
			ImageManager.instance = new ImageManager();
		}
		return ImageManager.instance;
	}

	private getFullUrl(url: string): string {
		const baseUrl = process.env.NEXT_PUBLIC_IMAGE_URL || "";
		// 이미 full URL이면 그대로 반환
		if (url.startsWith("http://") || url.startsWith("https://")) {
			return url;
		}
		// relative URL이면 base URL 추가
		return baseUrl + url;
	}

	async preloadImage(url: string): Promise<HTMLImageElement> {
		const fullUrl = this.getFullUrl(url);
		if (this.imageCache.has(fullUrl)) {
			return Promise.resolve(this.imageCache.get(fullUrl)!);
		}

		return new Promise((resolve, reject) => {
			const img = new Image();
			img.onload = () => {
				this.imageCache.set(fullUrl, img);
				resolve(img);
			};
			img.onerror = () => {
				reject(new Error(`Failed to load image: ${fullUrl}`));
			};
			img.src = fullUrl;
		});
	}

	addImage(
		url: string,
		type: "background" | "overlay" | "jumpscare",
		imageContainer: HTMLElement,
		maskContainer: HTMLElement,
		// screenContainer: HTMLElement,
		sustainUntil?: string,
	): Promise<number> {
		const index = this.currentIndex++;
		const fullUrl = this.getFullUrl(url);

		return new Promise((resolve) => {
			// Create img elements
			const img = document.createElement("img");
			img.style.cssText = `
				position: absolute;
				inset: 0;
				width: 100%;
				height: 100%;
				object-fit: cover;
				opacity: 0;
			`;

			const maskingImg = document.createElement("img");
			maskingImg.style.cssText = `
				position: absolute;
				inset: 0;
				width: 100%;
				height: 100%;
				object-fit: cover;
				opacity: 0;
			`;

			this.activeImages.set(index, {
				url,
				type,
				element: img,
				maskingElement: maskingImg,
				sustainUntil,
				index,
			});

			imageContainer.appendChild(img);
			maskContainer.appendChild(maskingImg);

			// Check if image is already cached
			const cachedImg = this.imageCache.get(fullUrl);

			const startAnimation = () => {
				const tl = gsap.timeline({
					onComplete: () => resolve(index),
				});

				// Fade out existing images
				this.activeImages.forEach((data, idx) => {
					if (idx !== index) {
						tl.to(
							data.element,
							{ opacity: 0, duration: 1.25, ease: "power3.out" },
							0,
						);
					}
				});

				// Initial setup
				gsap.set(img, {
					scale: 1,
					opacity: 0,
					filter: "brightness(0.35) grayscale(0.7)",
				});

				gsap.set(maskingImg, {
					scale: 1.5,
					opacity: 0,
				});

				// Masking animation
				tl.to(
					maskingImg,
					{
						scale: 1,
						opacity: 1,
						duration: 1.25,
						ease: "power3.out",
					},
					0,
				);

				// Screen scale animation
				// tl.to(
				// 	screenContainer,
				// 	{
				// 		scale: 1.5,
				// 		duration: 1.25,
				// 		ease: "power3.out",
				// 	},
				// 	"<",
				// );

				// Show main image
				tl.to(
					img,
					{
						opacity: 1,
					},
					">",
				);

				// Reset screen scale and fade out mask
				setTimeout(() => {
					// tl.to(screenContainer, {
					// 	duration: 1.25,
					// 	scale: 1,
					// 	ease: "power3.out",
					// });
					tl.to(
						maskingImg,
						{
							scale: 1,
							opacity: 0,
							duration: 1.25,
							ease: "power3.out",
							onComplete: () => {
								maskingImg.remove();
							},
						},
						"<",
					);
				}, 1500);
			};

			if (cachedImg && cachedImg.complete) {
				// Image is already cached - set src and start animation immediately
				img.src = fullUrl;
				maskingImg.src = fullUrl;

				// Use setTimeout to ensure DOM is ready
				setTimeout(() => startAnimation(), 0);
			} else {
				// Image not cached - load with onload handlers
				let loadedCount = 0;
				const onLoad = () => {
					loadedCount++;
					if (loadedCount < 2) return;
					startAnimation();
				};

				img.onload = onLoad;
				maskingImg.onload = onLoad;

				img.src = fullUrl;
				maskingImg.src = fullUrl;
			}
		});
	}

	removeImage(index: number): Promise<void> {
		const imageData = this.activeImages.get(index);
		if (!imageData) {
			return Promise.resolve();
		}

		const maxKey =
			this.activeImages.size > 0 ? Math.max(...this.activeImages.keys()) : -1;

		// Silent deletion for non-visible images
		if (index !== maxKey) {
			imageData.element.remove();
			imageData.maskingElement.remove();
			this.activeImages.delete(index);
			return Promise.resolve();
		}

		return new Promise((resolve) => {
			// Show next image if exists
			let nextImageElement: HTMLImageElement | null = null;
			if (this.activeImages.size > 1) {
				const remainingKeys = Array.from(this.activeImages.keys()).filter(
					(k) => k !== index,
				);
				const nextMaxKey = Math.max(...remainingKeys);
				nextImageElement = this.activeImages.get(nextMaxKey)?.element || null;
			}

			if (nextImageElement) {
				nextImageElement.style.opacity = "1";
			}

			// Blur + fade out animation
			const tl = gsap.timeline({
				onComplete: () => {
					imageData.element.remove();
					imageData.maskingElement.remove();
					this.activeImages.delete(index);
					resolve();
				},
			});

			tl.to(imageData.element, {
				filter: "blur(20px) brightness(0.35) grayscale(0.7)",
				opacity: 0,
				scale: 1.5,
				duration: 1.5,
				ease: "power2.out",
			});
		});
	}

	clearBySegment(segmentId: string): Promise<void[]> {
		const toRemove: number[] = [];

		this.activeImages.forEach((data, index) => {
			if (data.sustainUntil === segmentId) {
				toRemove.push(index);
			}
		});

		return Promise.all(toRemove.map((index) => this.removeImage(index)));
	}

	clearAll(): Promise<void[]> {
		const allKeys = Array.from(this.activeImages.keys());
		return Promise.all(allKeys.map((index) => this.removeImage(index)));
	}

	isLoaded(url: string): boolean {
		const fullUrl = this.getFullUrl(url);
		return this.imageCache.has(fullUrl);
	}

	getActiveImages(): Map<number, ImageData> {
		return new Map(this.activeImages);
	}
}

const imageManager = ImageManager.getInstance();
export default imageManager;
