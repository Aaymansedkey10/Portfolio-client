"use client";
import Title from "../shared/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import ProjectService from "@/src/services/ProjectsServices";
import { Project } from "@/src/types/project";
import { SingleProject } from "../ui";
import { Github } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import ScaleMotion from "../animations/ScaleMotion";
import ButtonLink from "../buttons/ButtonLink";
import { useState } from "react";
import SingleWorkDetails from "../ui/SingleProjectDetails";


const ProjectsSection = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const { data: projects } = useQuery({
        queryKey: ['projects'],
        queryFn: ProjectService.getAllProjects,
    });


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
                        // <SingleProject key={index} project={project} />
                        <SingleProject
                            key={project.id || index}
                            project={project}
                            index={index}
                            // 2. بنمرر وظيفة الفتح للـ child
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
