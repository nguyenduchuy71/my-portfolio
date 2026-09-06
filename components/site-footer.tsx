import { profile } from "@/lib/portfolio-content";
import { MonogramMark } from "@/components/brand/monogram-mark";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-line">
      {/* Oversized mark bleeding off the corner — signs the page off. */}
      <MonogramMark
        className="pointer-events-none absolute -bottom-8 right-6 h-40 w-auto text-ink/[0.04]"
        title=""
      />

      <div className="relative mx-auto flex max-w-5xl flex-col gap-3 px-6 py-10 font-mono text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
        <span>{profile.githubHandle}</span>
        <span>
          {profile.experience} · {profile.location}
        </span>
        <span>
          © {new Date().getFullYear()} {profile.fullName}
        </span>
      </div>
    </footer>
  );
}
