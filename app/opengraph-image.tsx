import { ImageResponse } from "next/og";

export const alt = "양양 2박 3일 — 태교 힐링 여행";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "linear-gradient(135deg, #3D5A6C 0%, #8AA6A3 60%, #F5EFE6 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        {/* 상단 라벨 */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            fontSize: 28,
            opacity: 0.85,
            letterSpacing: "0.08em",
          }}
        >
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 999,
              background: "#E8B298",
            }}
          />
          YANGYANG · GANGWON
        </div>

        {/* 중앙 타이틀 */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              fontSize: 96,
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
            }}
          >
            양양 2박 3일
          </div>
          <div
            style={{
              fontSize: 52,
              fontWeight: 600,
              opacity: 0.95,
              letterSpacing: "-0.02em",
            }}
          >
            태교 힐링 여행
          </div>
          <div
            style={{
              fontSize: 32,
              opacity: 0.8,
              marginTop: 12,
            }}
          >
            낙산사 · 하조대 · 죽도해변
          </div>
        </div>

        {/* 하단 날짜 */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 32,
            fontWeight: 600,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 6,
            }}
          >
            <div style={{ fontSize: 22, opacity: 0.7 }}>여행일</div>
            <div>2026. 06. 06 — 06. 08</div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: 6,
            }}
          >
            <div style={{ fontSize: 22, opacity: 0.7 }}>인원</div>
            <div>가족 6명</div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
