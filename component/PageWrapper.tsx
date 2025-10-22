import { PropsWithChildren, HTMLAttributes, RefObject } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { ClassValue } from "clsx";
import { cn } from "@/util/styles";

interface PageWrapperProps
	extends Omit<HTMLAttributes<HTMLDivElement>, "className">,
		VariantProps<typeof pageWrapperStyle> {
	className?: ClassValue;
	ref?: RefObject<HTMLDivElement | null>;
}

const pageWrapperStyle = cva(
	`h-full w-full flex items-center justify-center flex-col overflow-hidden px-8 relative`,
);

export default function PageWrapper({
	children,
	className,
	ref,
	...rest
}: PropsWithChildren<PageWrapperProps>) {
	return (
		<div ref={ref} className={cn(pageWrapperStyle({ className }))} {...rest}>
			{children}
		</div>
	);
}
