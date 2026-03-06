"use client"
import { useQuery } from "@tanstack/react-query"
import Title from "../shared/SectionTitle"
import { ExperienceServices } from "@/src/services/ExperienceService"

import SingleExperience from "../ui/SinlgeExperience"
import { experience } from "@/src/types/experience"

const ExperienceSection = () => {
    const { data: experiences } = useQuery({
        queryKey: ["experiences"],
        queryFn: ExperienceServices.getAllExperiences
    })
    return (
        <section id="experience" className="experience space-y-5">
            <Title title="Experience." description="Professional milestones and hands on experience in developing applications, collaborating with teams, and delivering clean, maintainable code." />
            {
                experiences?.map((experience: experience) => (
                    <SingleExperience
                        key={experience.id}
                        {...experience}
                    />
                ))
            }
        </section>
    )
}

export default ExperienceSection