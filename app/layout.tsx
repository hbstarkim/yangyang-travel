import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://yangyang-travel.vercel.app"),
  title: "양양 2박 3일 — 태교 힐링 여행",
  description: "2026년 6월 6일~8일, 가족 6명 양양 여행 일정 안내",
  openGraph: {
    title: "양양 2박 3일 — 태교 힐링 여행",
    description: "낙산사, 하조대, 죽도해변. 잔잔한 힐링 코스.",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "양양 2박 3일 — 태교 힐링 여행",
    description: "낙산사, 하조대, 죽도해변. 잔잔한 힐링 코스.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#3D5A6C",
};

const KAKAO_KEY = process.env.NEXT_PUBLIC_KAKAO_MAP_KEY ?? "";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">
        {children}
        <Script
          src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_KEY}&autoload=false&libraries=services,clusterer`}
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
