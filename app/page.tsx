import SkillsSections from "@/components/sections/SkillsSections";
import AboutSection from "../components/sections/AboutSection";
import ContactSection from "../components/sections/ContactSection";
import HeaderSection from "../components/sections/HeaderSection";
import WorksSection from "../components/sections/WorksSection";
import ExperienceSection from "@/components/sections/ExperienceSection";



export default function Home() {
  return (
    <>
      <HeaderSection />
      <AboutSection />
      <SkillsSections />
      <WorksSection />
      <ExperienceSection />
      <ContactSection />
    </>

  );
}
