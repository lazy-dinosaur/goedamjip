export const getIsMobile = () => {
	return (
		typeof window !== "undefined" &&
		/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
	);
};
