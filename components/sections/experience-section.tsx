import { SectionHeading } from "@/components/section-heading";
import { experience } from "@/lib/portfolio-content";

export function ExperienceSection() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeading index="01">Experience</SectionHeading>

      <ol className="space-y-14">
        {experience.map((role) => (
          <li key={`${role.company}-${role.period}`}>
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-lg font-bold">
                {role.title}
                <span className="font-normal text-muted"> · {role.company}</span>
              </h3>
              <span className="font-mono text-xs text-muted">{role.period}</span>
            </div>

            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted">
              {role.summary}
            </p>

            <ul className="mt-5 space-y-2.5 text-sm">
              {role.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3">
                  <span aria-hidden="true" className="text-line">
                    —
                  </span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            <ul className="mt-5 flex flex-wrap gap-2 font-mono text-[11px] uppercase tracking-wide">
              {role.stack.map((tech) => (
                <li key={tech} className="border border-line px-2 py-1 text-muted">
                  {tech}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
