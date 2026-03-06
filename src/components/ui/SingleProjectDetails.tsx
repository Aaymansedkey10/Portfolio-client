"use client";
import { X, ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { Project } from "@/src/types/project";
import ButtonLink from "../buttons/ButtonLink";
import ProjectImagesSlider from "./ProjectImagesSlider";
import { Button } from "../buttons/Button";

const SingleWorkDetails = ({
    project,
    close,
}: {
    project: Project;
    close: () => void;
}) => {
    const { title, skills, description } = project;
    const [currentImage, setCurrentImage] = useState(0);

    const nextImage = () => setCurrentImage((prev) => (prev + 1) % project.images.length);
    const prevImage = () =>
        setCurrentImage((prev) => (prev - 1 + project.images.length) % project.images.length);

    return (
        <div
            className="fixed inset-0 bg-background/80 backdrop-blur-xl z-100 flex items-center justify-center p-4"
            onClick={close}
        >
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-card border border-border rounded-[2.5rem] max-w-6xl w-full relative overflow-hidden h-[90vh] shadow-2xl flex flex-col lg:flex-row"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button - Fixed for all views */}
                <div className="absolute top-5 right-5 z-100">
                    <Button
                        label={<X size={20} />}
                        func={close}
                    />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 w-full h-full">
                    {/* Left Side: Image Slider  */}
                    <div className="lg:col-span-7 bg-muted/20 relative h-[40vh] lg:h-full border-b lg:border-b-0 lg:border-r border-border">
                        <ProjectImagesSlider
                            currentImage={currentImage}
                            nextImage={nextImage}
                            prevImage={prevImage}
                            project={project}
                        />
                    </div>

                    {/* Right Side: Content */}
                    <div className="lg:col-span-5 h-[50vh] lg:h-full flex flex-col bg-card">
                        <div className="p-6 md:p-10 overflow-y-auto flex-1 custom-scrollbar">
                            <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-3 block">
                                Featured Project
                            </span>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-8 leading-tight">
                                {title}
                            </h2>

                            <div className="space-y-8">
                                {/* Description Section */}
                                <section>
                                    <h4 className="text-foreground text-sm font-semibold mb-3 flex items-center gap-2">
                                        <div className="w-1.5 h-4 bg-primary rounded-full" />
                                        <span>About Project</span>
                                    </h4>
                                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed italic font-light">
                                        {description}
                                    </p>
                                </section>

                                {/* Tech Stack Section */}
                                <section>
                                    <h4 className="text-foreground text-sm font-semibold mb-4 flex items-center gap-2">
                                        <div className="w-1.5 h-4 bg-primary rounded-full" />
                                        <span>Tech Stack</span>
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {skills?.map((tech, idx) => (
                                            <span
                                                key={idx}
                                                className="px-3 py-1.5 bg-primary/10 border border-primary/20 text-primary text-xs rounded-lg font-medium transition-colors hover:bg-primary/20"

                                            >
                                                {tech.label}
                                            </span>
                                        ))}
                                    </div>
                                </section>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="p-6 md:p-8 border-t border-border bg-card/80 backdrop-blur-md">
                            <div className="flex gap-4">
                                <ButtonLink
                                    url={project.live_link}
                                    label="Live Demo"
                                    icon={ExternalLink}
                                    variant="primary"
                                    className="flex-1 shadow-lg shadow-primary/20"
                                />
                                <ButtonLink
                                    url={project.github_link}
                                    label="Code"
                                    icon={Github}
                                    variant="outline"
                                    className="flex-1"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default SingleWorkDetails;