import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** Home-screen icon — palm mark on the cream ground. */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#faf6ef",
        }}
      >
        <svg viewBox="0 0 40 32" width="150" height="120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      
    >
      {/* Trunk — leans right, tapering toward the crown */}
      <path
        d="M17.6 30 C18.4 23, 19.4 16.5, 20.6 11.5 L23 12 C21.6 17, 20.8 23.4, 20.6 30 Z"
        fill="#33251a"
      />

      {/* Fronds, drawn outward from the crown at (21.5, 11) */}
      <g fill="#33251a">
        {/* left low */}
        <path d="M21 11 C15 10.5, 8.5 12.5, 4 17 C9.5 13.6, 15.4 12.6, 21 12.8 Z" opacity="0.9" />
        {/* left high */}
        <path d="M21 10.6 C16.5 7.4, 11 5.6, 5.6 6.2 C11 7.4, 16 9.2, 20.6 12 Z" opacity="0.62" />
        {/* centre */}
        <path d="M21.2 10.6 C19.8 6.4, 21 2.6, 24.2 0 C22.2 3.8, 21.8 7 , 23 10.8 Z" opacity="0.95" />
        {/* right high */}
        <path d="M22 10.6 C26 7, 31.5 5.2, 36.4 6.4 C31 7.2, 26.4 9.2, 22.6 12 Z" opacity="0.62" />
        {/* right low */}
        <path d="M22.2 11.4 C27.6 10.6, 33.4 12.6, 37.4 17 C32.6 13.6, 27.4 12.8, 22.4 13.2 Z" opacity="0.9" />
        {/* short right filler */}
        <path d="M22.4 12.4 C26.4 13.6, 29.4 16.4, 31 20 C28.2 17, 25.2 15, 22.2 14 Z" opacity="0.42" />
      </g>

      {/* Coconuts nestled under the crown */}
      <circle cx="19.6" cy="13.4" r="1.6" fill="#33251a" />
      <circle cx="23.2" cy="13.9" r="1.35" fill="#33251a" opacity="0.72" />

      {/* Ground line — the waterline the palm leans over */}
      <path d="M12 30.4 H28" stroke="#33251a" strokeWidth="1.2" opacity="0.35" />
    </svg>
      </div>
    ),
    size,
  );
}
