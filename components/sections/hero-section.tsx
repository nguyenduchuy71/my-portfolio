import { profile } from "@/lib/portfolio-content";

export function HeroSection() {
  return (
    <section id="top" className="relative">
      {/* Schematic ground — sets the systems-engineering tone before any copy. */}
      <div
        aria-hidden="true"
        className="grid-ground pointer-events-none absolute inset-0"
      />

      <div className="relative mx-auto max-w-5xl px-6 pb-20 pt-20 sm:pt-28">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted">
        {profile.fullName}
      </p>

      {/* Visually the two stacked words; to crawlers and screen readers a
          single descriptive H1 naming the role, seniority and location. */}
      <h1 className="mt-6 text-6xl font-bold uppercase leading-[0.9] tracking-tighter sm:text-8xl">
        <span className="sr-only">
          {profile.fullName} — {profile.jobTitle} with {profile.experience} in{" "}
          {profile.location}
        </span>
        {profile.role.map((word) => (
          <span key={word} aria-hidden="true" className="block">
            {word}
          </span>
        ))}
      </h1>

      <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted">
        {profile.intro}
      </p>

      <ul className="mt-10 flex flex-wrap gap-3 font-mono text-xs">
        {[profile.location, profile.experience, profile.availability].map((item) => (
          <li key={item} className="rounded-full border border-line px-3 py-1.5">
            {item}
          </li>
        ))}
      </ul>

      <div className="mt-10 flex flex-wrap gap-3">
        <a
          href="#contact"
          className="inline-block border border-ink bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-paper hover:text-ink"
        >
          Get in touch
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="inline-block border border-line px-6 py-3 text-sm font-medium transition-colors hover:border-ink"
        >
          View GitHub ↗
        </a>
        </div>
      </div>
    </section>
  );
}
