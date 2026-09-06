import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { HeroSection } from "@/components/sections/hero-section";
import { KeywordRibbon } from "@/components/sections/keyword-ribbon";
import { ExperienceSection } from "@/components/sections/experience-section";
import { WorkProjectsSection } from "@/components/sections/work-projects-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { StackSection } from "@/components/sections/stack-section";
import { CredentialsSection } from "@/components/sections/credentials-section";
import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function HomePage() {
  return (
    <>
      <SiteNav />
      <main>
        <HeroSection />
        <KeywordRibbon />
        <ExperienceSection />
        <WorkProjectsSection />
        <ProjectsSection />
        <StackSection />
        <CredentialsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
