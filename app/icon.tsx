import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #3D5A6C 0%, #8AA6A3 100%)",
          fontSize: 38,
          color: "white",
          borderRadius: 12,
        }}
      >
        🌊
      </div>
    ),
    { ...size }
  );
}
