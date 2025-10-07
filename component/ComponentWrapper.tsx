import { PropsWithChildren, HTMLAttributes } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { ClassValue } from "clsx";
import { cn } from "@/util/styles";

interface ComponentWrapperProps
	extends Omit<HTMLAttributes<HTMLDivElement>, "className">,
		VariantProps<typeof componentWrapperStyle> {
	className?: ClassValue;
}

const componentWrapperStyle = cva(
	`h-full w-full flex items-center justify-center bg-black flex-col overflow-hidden px-8 relative`,
);

export default function ComponentWrapper({
	children,
	className,
	...rest
}: PropsWithChildren<ComponentWrapperProps>) {
	return (
		<div className={cn(componentWrapperStyle({ className }))} {...rest}>
			{children}
		</div>
	);
}
