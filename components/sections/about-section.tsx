import { SectionHeading } from "@/components/section-heading";
import { about } from "@/lib/portfolio-content";

function List({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="font-mono text-xs uppercase tracking-widest text-muted">
        {title}
      </h3>
      <ul className="mt-4 space-y-2.5 text-sm">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span aria-hidden="true" className="text-line">
              —
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeading index="06">About Me</SectionHeading>

      <div className="max-w-2xl space-y-5 text-base leading-relaxed text-muted">
        {about.bio.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <div className="mt-12 grid gap-10 sm:grid-cols-2">
        <List title="How I Work" items={about.howIWork} />
        <List title="Current Focus" items={about.currentFocus} />
      </div>
    </section>
  );
}
