import { SectionHeading } from "@/components/section-heading";
import { profile } from "@/lib/portfolio-content";

const socials = [
  { label: "GitHub", href: profile.github },
  { label: "LinkedIn", href: profile.linkedin },
];

export function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeading index="07">Let&apos;s Connect</SectionHeading>

      <p className="max-w-2xl text-base leading-relaxed text-muted">
        Open to backend and platform roles, remote or hybrid. Happy to talk
        through an API design, a schema you are unsure about, or a service that
        keeps waking you up at night.
      </p>

      <a
        href={`mailto:${profile.email}`}
        className="mt-8 inline-block break-all text-2xl font-bold underline decoration-line underline-offset-8 transition-colors hover:decoration-ink sm:text-4xl"
      >
        {profile.email}
      </a>

      <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3 font-mono text-xs">
        {socials.map((social) => (
          <li key={social.label}>
            <a
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="text-muted transition-colors hover:text-ink"
            >
              {social.label} ↗
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
