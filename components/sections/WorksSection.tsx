import { projects } from "@/data/projects";
import ShowElement from "../animations/ShowElementAnimation";
import SingleWork from "../SingleWork";
import Title from "../Title";
import { MotionInView } from "../animations/MotionInView";
const WorksSection = () => {
    return (
        <ShowElement>
            <section id="works" className="container">
                <Title
                    title="My Works"
                    description="A collection of my projects as a Frontend Developer."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                    {projects.map(({ banner, github, live, technologies, title }, index) => {
                        const direction = index % 2 === 0 ? "left" : "right";
                        return (
                            <MotionInView direction={direction} key={index}>
                                <SingleWork key={index} banner={banner} github={github} live={live} technologies={technologies} title={title} />
                            </MotionInView>
                        )
                    })}
                </div>
            </section>
        </ShowElement>
    );
};

export default WorksSection;
