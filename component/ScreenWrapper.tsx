import { HTMLAttributes, PropsWithChildren } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { ClassValue } from "clsx";
import { cn } from "@/util/styles";

interface ScreenWrapperProps
	extends Omit<HTMLAttributes<HTMLDivElement>, "className">,
		VariantProps<typeof screenWrapperStyle> {
	className?: ClassValue;
}

const screenWrapperStyle = cva(
	"mx-auto max-w-screen-xl max-h-screen h-dvh bg-black",
);

export default function ScreenWrapper({
	children,
	className,
	...rest
}: PropsWithChildren<ScreenWrapperProps>) {
	return (
		<div className={cn(screenWrapperStyle({ className }))} {...rest}>
			{children}
		</div>
	);
}
