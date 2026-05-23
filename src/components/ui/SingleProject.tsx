"use client";

import Image from "next/image";
import { CodeXml, Link as LinkIcon } from "lucide-react";
import Link from 'next/link';
import { Project } from "@/src/models/project";
import { MotionInView } from "../animations/MotionInView";

interface SingleProjectProps {
    project: Project;
    index: number;
    // onOpenDetails: () => void;
}

const SingleProject = ({ project, index }: SingleProjectProps) => {

    if (!project || !project.featured) return null;

    const { title, github_link, live_link, banner, skills, description } = project;
    const direction = index % 2 === 0 ? "left" : "right";
    const filteredSkills = skills ? skills.slice(0, 4) : [];

    return (
        <article className="w-full h-full">
            <MotionInView direction={direction} delay={index * 0.1}>
                <div
                    className="group relative flex flex-col bg-secondary/10 rounded-2xl border border-primary/25 hover:border-primary/20 transition-all duration-500 overflow-hidden shadow-xl hover:shadow-primary/5 cursor-pointer h-full min-h-[460px] isolation-auto"
                // onClick={onOpenDetails}
                >

                    <div className="absolute inset-0 w-0 bg-linear-to-r from-primary/5 to-primary/20 transition-all duration-750 ease-out group-hover:w-full z-0" />

                    <div className="absolute top-0 left-1/2 h-0.5 w-0 bg-linear-to-r from-primary via-cyan-400 to-primary transition-all duration-500 group-hover:left-0 group-hover:w-full z-10" />


                    <div className="relative w-full h-48 overflow-hidden bg-secondary/20 z-10">
                        <Image
                            src={banner?.url || banner?.formats?.thumbnail?.url || "/placeholder.png"}
                            alt={`${title} Preview`}
                            fill
                            priority={index < 2}
                            unoptimized
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-background/40 via-transparent to-transparent opacity-80" />
                    </div>

                    <div className="flex flex-col flex-1 p-3 gap-4 justify-between relative z-10">
                        <div className="space-y-2">
                            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 tracking-tight">
                                {title}
                            </h3>

                            <p className="text-muted-foreground text-xs md:text-sm h-16 line-clamp-3 leading-relaxed font-sans">
                                {description}
                            </p>
                        </div>


                        <div className="grid grid-cols-2 gap-2 py-1">
                            {filteredSkills.map((tech, idx) => (
                                <span
                                    key={idx}
                                    className="inline-flex items-center gap-1.5 px-3 py-1 bg-secondary/40 border border-border/30 text-muted-foreground/90 text-[11px] font-mono font-medium rounded-full transition-all duration-300 group-hover:border-primary/20 group-hover:text-foreground group-hover:bg-primary/5"
                                >
                                    <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/40 group-hover:bg-primary transition-all duration-300 shadow-[0_0_6px_transparent] group-hover:shadow-primary/50" />
                                    {tech.label}
                                </span>
                            ))}
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-3 pt-4 border-t border-border/40 mt-auto">
                            {live_link && (
                                <Link
                                    href={live_link}
                                    target="_blank"
                                    onClick={(e) => e.stopPropagation()}
                                    className="flex items-center justify-center gap-2 py-2 px-4 rounded-xl bg-secondary/40 border border-border/60 hover:border-primary/40 text-foreground/80 hover:text-primary text-xs font-semibold transition-all duration-300 group/btn"
                                >
                                    <LinkIcon size={14} className="text-primary transition-transform group-hover/btn:scale-110" />
                                    <span>Live Demo</span>
                                </Link>
                            )}

                            {github_link && (
                                <Link
                                    href={github_link}
                                    target="_blank"
                                    onClick={(e) => e.stopPropagation()}
                                    className="flex items-center justify-center gap-2 py-2 px-4 rounded-xl bg-secondary/40 border border-border/60 hover:border-primary/40 text-foreground/80 hover:text-primary text-xs font-semibold transition-all duration-300 group/btn"
                                >
                                    <CodeXml size={14} className="text-muted-foreground group-hover/btn:text-primary transition-transform group-hover/btn:scale-110" />
                                    <span>GitHub</span>
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </MotionInView>
        </article>
    );
};

export default SingleProject;