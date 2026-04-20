"use client";
import { X, ExternalLink, Github, Layers, Info } from "lucide-react";
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
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-100 flex justify-end"
            onClick={close}
        >
            <motion.div
                initial={{ x: "100%" }} // بيبدأ من بره الشاشة يمين
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="bg-card/95 backdrop-blur-2xl border-l border-border w-full max-w-2xl h-full shadow-2xl relative flex flex-col"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header Section */}
                <div className="p-6 flex items-center justify-between border-b border-border bg-muted/30">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                            <Layers size={22} />
                        </div>
                        <h2 className="text-xl font-bold text-foreground">Project Overview</h2>
                    </div>
                    <Button
                        icon={<X size={20} />}
                        func={close}
                    />
                </div>

                <div className="flex-1 overflow-y-auto custom-scrollbar">
                    {/* Image Section */}
                    <div className="h-[300px] md:h-[400px] relative bg-muted/20">
                        <ProjectImagesSlider
                            currentImage={currentImage}
                            nextImage={nextImage}
                            prevImage={prevImage}
                            project={project}
                        />
                    </div>

                    {/* Content Section */}
                    <div className="p-8 space-y-10">
                        <div>
                            <span className="text-primary text-[10px] font-black uppercase tracking-[0.3em] mb-2 block">
                                Case Study
                            </span>
                            <h2 className="text-4xl font-black text-foreground mb-4 leading-tight">
                                {title}
                            </h2>
                        </div>

                        {/* Description */}
                        <section className="relative p-6 rounded-2xl bg-muted/50 border border-border">
                            <Info className="absolute -top-3 -left-3 text-primary bg-card rounded-full p-1" size={28} />
                            <h4 className="text-foreground text-sm font-bold mb-3 uppercase tracking-wider">About</h4>
                            <p className="text-muted-foreground leading-relaxed font-medium">
                                {description}
                            </p>
                        </section>

                        {/* Tech Stack */}
                        <section>
                            <h4 className="text-foreground text-sm font-bold mb-5 uppercase tracking-wider flex items-center gap-2">
                                <span>Technologies Used</span>
                                <div className="flex-1 h-[1px] bg-border" />
                            </h4>
                            <div className="flex flex-wrap gap-2.5">
                                {skills?.map((tech, idx) => (
                                    <span
                                        key={idx}
                                        className="px-4 py-2 bg-card border border-border text-foreground/80 text-xs rounded-full font-semibold hover:border-primary/50 transition-all hover:scale-105 cursor-default"
                                    >
                                        {tech.label}
                                    </span>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>

                {/* Footer Actions */}
                <div className="p-6 border-t border-border bg-muted/20">
                    <div className="grid grid-cols-2 gap-4">
                        <ButtonLink
                            url={project.live_link}
                            label="Launch Live"
                            icon={ExternalLink}
                            variant="primary"
                            className="h-14 rounded-2xl shadow-xl shadow-primary/20"
                        />
                        <ButtonLink
                            url={project.github_link}
                            label="Source Code"
                            icon={Github}
                            variant="outline"
                            className="h-14 rounded-2xl border-2"
                        />
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default SingleWorkDetails;