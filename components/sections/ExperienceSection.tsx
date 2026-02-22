import ShowElement from "../animations/ShowElementAnimation"
import SingleExperience from "../SinlgeExperience"

import Title from "../Title"

const ExperienceSection = () => {
    return (
        <ShowElement>
            <section id="experience" className="experience space-y-5">
                <Title title="Experience." description="Professional milestones and hands on experience in developing applications, collaborating with teams, and delivering clean, maintainable code." />
                {
                    Array.from({ length: 4 }).map((_, index) => (
                        <SingleExperience
                            key={index}
                            role="Front-End Developer"
                            company="Tech Solutions Inc."
                            period="Jan 2021 - Present"
                            description={[
                                "Developed responsive UI components using Next.js and Tailwind CSS.",
                                "Optimized web performance, reducing load times by 40%.",
                                "Collaborated with design teams to translate Figma files into pixel-perfect code."
                            ]}
                        />
                    ))
                }
                {/* <SingleExperience
                    role="Front-End Developer"
                    company="Tech Solutions Inc."
                    period="Jan 2021 - Present"
                    description={[
                        "Developed responsive UI components using Next.js and Tailwind CSS.",
                        "Optimized web performance, reducing load times by 40%.",
                        "Collaborated with design teams to translate Figma files into pixel-perfect code."
                    ]}
                />
                <SingleExperience
                    role="Front-End Developer"
                    company="Tech Solutions Inc."
                    period="Jan 2021 - Present"
                    description={[
                        "Developed responsive UI components using Next.js and Tailwind CSS.",
                        "Optimized web performance, reducing load times by 40%.",
                        "Collaborated with design teams to translate Figma files into pixel-perfect code."
                    ]}
                /> */}
            </section>
        </ShowElement>
    )
}

export default ExperienceSection