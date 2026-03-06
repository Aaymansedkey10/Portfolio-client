import {
  AboutSection,
  ContactSection,
  ExperienceSection,
  HeaderSection,
  ProjectsSection,
} from "@/src/components/sections";
import SkillsSections from "@/src/components/sections/SkillsSections";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <HeaderSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSections />
      <ExperienceSection />
      <ContactSection />
    </main>
  );
}
