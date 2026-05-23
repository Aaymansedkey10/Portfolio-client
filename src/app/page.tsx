import {
  AboutSection,
  ContactSection,
  ExperienceSection,
  HeaderSection,
  ProjectsSection,
  EducationSection,
  ServicesSection
} from "@/src/components/sections";
import SkillsSections from "@/src/components/sections/SkillsSections";
// import TestimonialsSection from "../components/sections/TestimonialsSections";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <HeaderSection />
      <AboutSection />
      <ExperienceSection />
      <EducationSection />
      <SkillsSections />
      <ProjectsSection />
      <ServicesSection />
      {/* <TestimonialsSection /> */}
      <ContactSection />
    </main>
  );
}
