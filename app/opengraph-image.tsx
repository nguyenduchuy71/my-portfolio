import { ImageResponse } from "next/og";
import { profile } from "@/lib/portfolio-content";

export const alt = `${profile.name} — ${profile.jobTitle}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Social share card, generated at build time to match the site's look. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#faf6ef",
          color: "#33251a",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, letterSpacing: 8 }}>
          {profile.fullName.toUpperCase()}
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 128, fontWeight: 700, lineHeight: 1 }}>BACKEND</div>
          <div style={{ fontSize: 128, fontWeight: 700, lineHeight: 1 }}>ENGINEER</div>
        </div>

        <div style={{ display: "flex", fontSize: 28, color: "#7a6a58" }}>
          {profile.experience} · {profile.location}
        </div>
      </div>
    ),
    size,
  );
}
