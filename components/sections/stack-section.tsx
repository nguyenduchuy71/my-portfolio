import { SectionHeading } from "@/components/section-heading";
import { skills } from "@/lib/portfolio-content";

export function StackSection() {
  return (
    <section id="stack" className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeading index="04">What I&apos;m Good At</SectionHeading>

      <div className="grid gap-12 sm:grid-cols-2">
        {skills.map((group) => (
          <div key={group.heading}>
            <div className="flex items-baseline gap-3">
              <h3 className="text-lg font-bold uppercase">{group.heading}</h3>
              <span className="font-mono text-xs text-muted">[{group.level}]</span>
            </div>
            <ul className="mt-5 space-y-2.5 text-sm text-muted">
              {group.items.map((item) => (
                <li key={item} className="flex gap-3">
                  <span aria-hidden="true" className="text-line">
                    —
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
