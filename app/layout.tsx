import type { Metadata } from "next";
import { Geist, Geist_Mono, East_Sea_Dokdo } from "next/font/google";
import localFont from "next/font/local";
import { SettingsProvider } from "@/contexts/SettingsContext";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

const eastSeaDokdo = East_Sea_Dokdo({
	weight: "400",
	variable: "--font-east-sea-dokdo",
	subsets: ["latin"],
});

// 배민 폰트들 로컬 설정
const bmDohyeon = localFont({
	src: "../public/fonts/BMDOHYEON_ttf.ttf",
	variable: "--font-bm-dohyeon",
	display: "swap",
});

const bmEuljiro = localFont({
	src: "../public/fonts/BMEULJIROTTF.ttf",
	variable: "--font-bm-euljiro",
	display: "swap",
});

const bmEuljiro10 = localFont({
	src: "../public/fonts/BMEuljiro10yearslater.ttf",
	variable: "--font-bm-euljiro-10",
	display: "swap",
});

const bmEuljiroOrae = localFont({
	src: "../public/fonts/BMEuljirooraeorae.ttf",
	variable: "--font-bm-euljiro-orae",
	display: "swap",
});

const bmHannaAir = localFont({
	src: "../public/fonts/BMHANNAAir_ttf.ttf",
	variable: "--font-bm-hanna-air",
	display: "swap",
});

const bmHannaPro = localFont({
	src: "../public/fonts/BMHANNAPro.ttf",
	variable: "--font-bm-hanna-pro",
	display: "swap",
});

const bmHanna11 = localFont({
	src: "../public/fonts/BMHANNA_11yrs_ttf.ttf",
	variable: "--font-bm-hanna-11",
	display: "swap",
});

const bmJua = localFont({
	src: "../public/fonts/BMJUA_ttf.ttf",
	variable: "--font-bm-jua",
	display: "swap",
});

const bmKirang = localFont({
	src: "../public/fonts/BMKIRANGHAERANG-TTF.ttf",
	variable: "--font-bm-kirang",
	display: "swap",
});

const bmKkubulim = localFont({
	src: "../public/fonts/BMKkubulimTTF.ttf",
	variable: "--font-bm-kkubulim",
	display: "swap",
});

const bmYeonsung = localFont({
	src: "../public/fonts/BMYEONSUNG_ttf.ttf",
	variable: "--font-bm-yeonsung",
	display: "swap",
});

export const metadata: Metadata = {
	title: "괴담집",
	description: "체감형 공포 이야기",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ko" className="dark">
			<body
				className={`${geistSans.variable} ${geistMono.variable} ${eastSeaDokdo.variable} ${bmDohyeon.variable} ${bmEuljiro.variable} ${bmEuljiro10.variable} ${bmEuljiroOrae.variable} ${bmHannaAir.variable} ${bmHannaPro.variable} ${bmHanna11.variable} ${bmJua.variable} ${bmKirang.variable} ${bmKkubulim.variable} ${bmYeonsung.variable} antialiased`}
			>
				<SettingsProvider>{children}</SettingsProvider>
			</body>
		</html>
	);
}
