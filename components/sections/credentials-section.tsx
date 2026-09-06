import { SectionHeading } from "@/components/section-heading";
import { certificates, education } from "@/lib/portfolio-content";

export function CredentialsSection() {
  return (
    <section id="credentials" className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeading index="05">Certifications &amp; Education</SectionHeading>

      <div className="grid gap-12 sm:grid-cols-2">
        <div>
          <h3 className="font-mono text-xs uppercase tracking-widest text-muted">
            Certifications
          </h3>
          <ul className="mt-5 space-y-4">
            {certificates.map((cert) => (
              <li key={cert.name} className="border-b border-line">
                <a
                  href={cert.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${cert.name} — ${cert.issuer}, ${cert.date}. View course`}
                  className="group flex items-baseline justify-between gap-4 pb-3 transition-colors hover:text-accent"
                >
                  <span className="text-sm font-medium">
                    {cert.name}
                    <span
                      aria-hidden="true"
                      className="ml-1.5 inline-block text-muted transition-colors group-hover:text-accent"
                    >
                      ↗
                    </span>
                  </span>
                  <span className="whitespace-nowrap font-mono text-xs text-muted">
                    {cert.date}
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-4 font-mono text-xs text-muted">
            {certificates[0].issuer}
          </p>
        </div>

        <div>
          <h3 className="font-mono text-xs uppercase tracking-widest text-muted">
            Education
          </h3>
          <div className="mt-5">
            <p className="text-sm font-medium">{education.degree}</p>
            <p className="mt-1 text-sm text-muted">{education.school}</p>
            <p className="mt-3 font-mono text-xs text-muted">{education.period}</p>
            <p className="mt-1 font-mono text-xs text-muted">{education.detail}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
