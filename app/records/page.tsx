import PageWrapper from "@/component/PageWrapper";
import ScreenWrapper from "@/component/ScreenWrapper";
import { FaChevronLeft } from "react-icons/fa6";

export default function Records() {
	return (
		<ScreenWrapper className="flex flex-col">
			<div className="p-5 md:p-8 flex w-full text-4xl space-x-6">
				<FaChevronLeft className="text-xl md:text-4xl font-medium cursor-pointer" />
				<span className="text-xl md:text-4xl font-medium font-bm-hanna-11 w-[15%]">
					괴담집
				</span>
			</div>
			<PageWrapper className="justify-start flex-1"></PageWrapper>
		</ScreenWrapper>
	);
}
