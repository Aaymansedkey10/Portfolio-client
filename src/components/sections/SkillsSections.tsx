"use client";
import Title from "../shared/SectionTitle";
import Loading from "@/src/app/Loading";
// import SkillsService from "@/src/services/SkillsServices";
// import { useQueryCustom } from "@/src/Hooks/useQueryCustom";
// import { Mock_Skills } from "@/src/constants/Mock_Skills";
import { SkillSlider } from "../shared/SkillSlider";
import { useMockDataHook } from "@/src/Hooks/useMockData";


const SkillsSections = () => {
  // const {
  //   data: skills,
  //   isLoading,
  //   isError,
  // } = useQueryCustom(["skills"], SkillsService.getAllSkills, Mock_Skills);
  const { data, isError, isLoading } = useMockDataHook()
  if (isLoading && !data.skills) return <Loading />;
  if (isError && (!data.skills || data.skills.length === 0)) {
    throw new Error("API Limit Reached and no Mock Data found");
  }
  const row1 = data.skills.slice(0, Math.ceil(data.skills.length / 3));
  const row2 = data.skills.slice(
    Math.ceil(data.skills.length / 3),
    Math.ceil((data.skills.length / 3) * 2),
  );
  const row3 = data.skills.slice(Math.ceil((data.skills.length / 3) * 2));
  return (
    <section id="skills" className="py-20 px-6">
      <Title title="my skills" />

      <div className="flex flex-col gap-6">
        <SkillSlider items={row1} direction="left" speed={25} />
        <SkillSlider items={row2} direction="right" speed={35} />
        <SkillSlider items={row3} direction="left" speed={30} />
      </div>
    </section>
  );
};

export default SkillsSections;
