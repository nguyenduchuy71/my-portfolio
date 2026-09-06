import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/lib/portfolio-content";
import { glyphs } from "@/components/brand/glyph-registry";

export function ProjectsSection() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeading index="03">Open Source</SectionHeading>

      <ul className="grid gap-px bg-line sm:grid-cols-2">
        {projects.map((project) => {
          const Glyph = glyphs[project.glyph];

          return (
            <li key={project.title} className="bg-paper">
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.title} — view source on GitHub`}
                className="group flex h-full flex-col p-6 transition-colors hover:bg-ink hover:text-paper"
              >
                {/* Schematic of how this system moves data. */}
                <Glyph className="h-16 w-full text-ink/25 transition-colors group-hover:text-paper/60" />

                <h3 className="mt-6 text-lg font-bold">{project.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted group-hover:text-line">
                  {project.description}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2 font-mono text-[11px] uppercase tracking-wide">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="border border-line px-2 py-1 text-muted group-hover:border-muted group-hover:text-line"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
