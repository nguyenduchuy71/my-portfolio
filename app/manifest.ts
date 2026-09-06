import type { MetadataRoute } from "next";
import { profile } from "@/lib/portfolio-content";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${profile.name} — ${profile.jobTitle}`,
    short_name: profile.name,
    description: profile.intro,
    start_url: "/",
    display: "standalone",
    background_color: "#faf6ef",
    theme_color: "#33251a",
  };
}
