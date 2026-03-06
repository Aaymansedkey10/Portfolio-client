"use client"
import { useQuery } from "@tanstack/react-query";
import SingleSkill from "../ui/SingleSkill"
import Title from "../shared/SectionTitle"
import SkillsService from "@/src/services/SkillsServices";
import { skill } from "@/src/types/skill";

const SkillsSections = () => {
    const { data: skills } = useQuery({
        queryKey: ["skills"],
        queryFn: SkillsService.getAllSkills,
    });
    return (
        <section id="skills" className="py-20 px-6">
            <Title title="my skills" />
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 lg:gap-4">
                {skills?.map((skill: skill, index: number) => {
                    const directions = ["up", "down", "left", "right"] as const;
                    const currentDirection = directions[index % 4];
                    return (
                        <SingleSkill
                            key={index}
                            direction={currentDirection}
                            index={index}
                            {...skill}
                        />
                    )
                })}
            </div>
        </section>
    )
}

export default SkillsSections;