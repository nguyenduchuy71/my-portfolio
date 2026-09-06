import type { Metadata } from "next";
import { profile, seoKeywords, siteUrl } from "@/lib/portfolio-content";
import { PersonJsonLd } from "@/components/person-json-ld";
import "./globals.css";

const title = `${profile.name} — ${profile.jobTitle}`;
const description = `${profile.jobTitle} in ${profile.location} with ${profile.experience} building APIs, data models and background services in Node.js and Python. ${profile.availability}.`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s — ${profile.name}`,
  },
  description,
  keywords: seoKeywords,
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  publisher: profile.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    siteName: title,
    title,
    description,
    url: siteUrl,
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "technology",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <PersonJsonLd />
      </body>
    </html>
  );
}
