import {
  certificates,
  education,
  experience,
  profile,
  projects,
  siteUrl,
  skills,
} from "@/lib/portfolio-content";

/**
 * Schema.org Person markup so search engines can build a knowledge-panel
 * style understanding of who this is, what they do and where to find them.
 */
export function PersonJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.fullName,
    alternateName: profile.name,
    jobTitle: profile.jobTitle,
    email: `mailto:${profile.email}`,
    url: siteUrl,
    description: profile.intro,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ho Chi Minh City",
      addressCountry: "VN",
    },
    sameAs: [profile.github, profile.linkedin],
    knowsAbout: skills.flatMap((group) => group.items),
    worksFor: {
      "@type": "Organization",
      name: experience[0].company,
    },
    hasOccupation: experience.map((role) => ({
      "@type": "Occupation",
      name: role.title,
      occupationLocation: {
        "@type": "City",
        name: "Ho Chi Minh City",
      },
      skills: role.stack.join(", "),
    })),
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: education.school,
    },
    hasCredential: certificates.map((cert) => ({
      "@type": "EducationalOccupationalCredential",
      name: cert.name,
      credentialCategory: "certificate",
      url: cert.href,
      recognizedBy: {
        "@type": "Organization",
        name: cert.issuer,
        url: "https://anthropic.skilljar.com/",
      },
    })),
    subjectOf: projects.map((project) => ({
      "@type": "SoftwareSourceCode",
      name: project.title,
      description: project.description,
      codeRepository: project.href,
      programmingLanguage: project.tags,
    })),
  };

  return (
    <script
      type="application/ld+json"
      // Structured data is static and author-controlled, not user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
