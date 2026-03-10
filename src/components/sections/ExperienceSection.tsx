"use client"
import Title from "../shared/SectionTitle"
import { ExperienceServices } from "@/src/services"
import SingleExperience from "../ui/SinlgeExperience"
import { experience } from "@/src/types/experience"
import Loading from "@/src/app/Loading";
import { Mock_Experience } from "@/src/constants/Mock_Experience"
import { useQueryCustom } from "@/src/Hooks/useQueryCustom"

const ExperienceSection = () => {
    const { data: experiences, isLoading, isError } = useQueryCustom(
        ["experiences"],
        ExperienceServices.getAllExperiences,
        Mock_Experience
    )
    if (isLoading && !experiences) return <Loading />;
    if (isError && (!experiences || experiences.length === 0)) {
        throw new Error("API Limit Reached and no Mock Data found");
    }
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