import { profile } from "@/lib/portfolio-content";
import { MonogramMark } from "@/components/brand/monogram-mark";

const links = [
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Open Source", href: "#projects" },
  { label: "Stack", href: "#stack" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/85 backdrop-blur">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4"
      >
        <a
          href="#top"
          aria-label={`${profile.fullName} — back to top`}
          className="transition-opacity hover:opacity-60"
        >
          <MonogramMark className="h-5 w-auto" title={`${profile.initials} monogram`} />
        </a>
        <ul className="flex items-center gap-4 text-sm sm:gap-6">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-muted transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
