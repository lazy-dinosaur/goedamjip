import { PropsWithChildren, HTMLAttributes } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { ClassValue } from "clsx";
import { cn } from "@/util/styles";

interface PageWrapperProps
	extends Omit<HTMLAttributes<HTMLDivElement>, "className">,
		VariantProps<typeof pageWrapperStyle> {
	className?: ClassValue;
}

const pageWrapperStyle = cva(
	`h-full w-full flex items-center justify-center flex-col overflow-hidden px-8 relative`,
);

export default function PageWrapper({
	children,
	className,
	...rest
}: PropsWithChildren<PageWrapperProps>) {
	return (
		<div className={cn(pageWrapperStyle({ className }))} {...rest}>
			{children}
		</div>
	);
}
