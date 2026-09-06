import { SectionHeading } from "@/components/section-heading";
import { workProjects } from "@/lib/portfolio-content";
import { glyphs } from "@/components/brand/glyph-registry";

export function WorkProjectsSection() {
  return (
    <section id="work" className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeading index="02">Client Work</SectionHeading>

      <ol className="space-y-px bg-line">
        {workProjects.map((project) => {
          const Glyph = glyphs[project.glyph];

          return (
            <li
              key={project.title}
              className="grid gap-6 bg-paper p-6 sm:grid-cols-[minmax(0,7rem)_1fr] sm:gap-8 sm:p-8"
            >
              <div className="flex flex-col gap-3">
                <Glyph className="h-14 w-full text-accent" />
                <span className="font-mono text-[11px] uppercase tracking-wide text-muted">
                  {project.period}
                </span>
              </div>

              <div>
                <h3 className="text-lg font-bold">{project.title}</h3>
                <p className="mt-1 font-mono text-xs text-muted">
                  {project.company} · {project.team}
                </p>
                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted">
                  {project.description}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2 font-mono text-[11px] uppercase tracking-wide">
                  {project.tags.map((tag) => (
                    <li key={tag} className="border border-line px-2 py-1 text-muted">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
