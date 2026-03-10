"use client";
import Title from "../shared/SectionTitle";
import { Project } from "@/src/types/project";
import { SingleProject } from "../ui";
import { Github } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import ScaleMotion from "../animations/ScaleMotion";
import ButtonLink from "../buttons/ButtonLink";
import { useState } from "react";
import SingleWorkDetails from "../ui/SingleProjectDetails";
import Loading from "@/src/app/Loading";
import ProjectService from "@/src/services/ProjectsServices";
import { useQueryCustom } from "@/src/Hooks/useQueryCustom";
import { Mock_Projects } from "@/src/constants/Mock_Projects";

const ProjectsSection = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const { data: projects, isLoading, isError } = useQueryCustom(
        ['projects'],
        ProjectService.getAllProjects,
        Mock_Projects
    );

    if (isError && (!projects || projects.length === 0)) {
        throw new Error("API Limit Reached and no Mock Data found");
    }

    if (isLoading && !projects) return <Loading />;
    return (
        <motion.section
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
                duration: 0.8,
                ease: "easeOut",
            }}
            id="works" className="container">
            <Title
                title="My Projects."
                description="A collection of my projects as a Frontend Developer."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                {projects?.map((project: Project, index: number) => {
                    if (project.featured) return (
                        <SingleProject
                            key={project.id || index}
                            project={project}
                            index={index}
                            onOpenDetails={() => setSelectedProject(project)}
                        />
                    )
                }
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
            <AnimatePresence>
                {selectedProject && (
                    <SingleWorkDetails
                        project={selectedProject}
                        close={() => setSelectedProject(null)}
                    />
                )}
            </AnimatePresence>
        </motion.section >
    );
};

export default ProjectsSection;
