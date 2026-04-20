"use client";
import Title from "../shared/SectionTitle";
import { Project } from "@/src/types/project";
import { SingleProject } from "../ui";
import { Github } from "lucide-react";
import ScaleMotion from "../animations/ScaleMotion";
import ButtonLink from "../buttons/ButtonLink";
import { useState } from "react";
import Loading from "@/src/app/Loading";
// import ProjectService from "@/src/services/ProjectsServices";
// import { useQueryCustom } from "@/src/Hooks/useQueryCustom";
// import { Mock_Projects } from "@/src/constants/Mock_Projects";
import { useMockDataHook } from "@/src/Hooks/useMockData";
import { MotionInView } from "../animations/MotionInView";

const ProjectsSection = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const { data, isLoading, isError } = useMockDataHook()
    //     useQueryCustom(
    //     ['projects'],
    //     ProjectService.getAllProjects,
    //     Mock_Projects
    // );

    if (isError && (!data.projects || data.projects.length === 0)) {
        throw new Error("API Limit Reached and no Mock Data found");
    }

    if (isLoading && !data.projects) return <Loading />;
    return (
        <MotionInView delay={0.1} direction="up" >
            <section id="works" className="container">
                <Title
                    title="My Projects."
                    description="A collection of my projects as a Frontend Developer."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                    {data.projects?.map((project: Project, index: number) => (
                        <SingleProject
                            key={project.id || index}
                            project={project}
                            index={index}
                            onOpenDetails={() => setSelectedProject(project)}
                        />
                    )
                    )}
                </div>

                <div className="flex justify-center mt-12">
                    <ScaleMotion delay={0.5}>
                        <ButtonLink
                            icon={Github}
                            label="View More Projects on GitHub"
                            url="https://github.com/Aaymansedkey10"
                            variant="primary"
                            className="flex-1"
                        />
                    </ScaleMotion>
                </div>
            </section >
        </MotionInView>
    );
};

export default ProjectsSection;
