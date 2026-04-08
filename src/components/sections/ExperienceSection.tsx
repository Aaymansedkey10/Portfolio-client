"use client"
import Title from "../shared/SectionTitle"
// import { ExperienceServices } from "@/src/services"
import SingleExperience from "../ui/SinlgeExperience"
import { experience } from "@/src/types/experience"
import Loading from "@/src/app/Loading";
// import { Mock_Experience } from "@/src/constants/Mock_Experience"
// import { useQueryCustom } from "@/src/Hooks/useQueryCustom"
import { useMockDataHook } from "@/src/Hooks/useMockData"

const ExperienceSection = () => {
    const { data, isLoading, isError } = useMockDataHook()
    //     useQueryCustom(
    //     ["experiences"],
    //     ExperienceServices.getAllExperiences,
    //     Mock_Experience
    // )
    if (isLoading && !data.experience) return <Loading />;
    if (isError && (!data.experience || data.experience.length === 0)) {
        throw new Error("API Limit Reached and no Mock Data found");
    }
    return (
        <section id="experience" className="experience space-y-5">
            <Title title="Experience." description="Professional milestones and hands on experience in developing applications, collaborating with teams, and delivering clean, maintainable code." />
            {
                data.experience?.map((experience: experience) => (
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