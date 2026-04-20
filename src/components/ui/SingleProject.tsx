"use client";
import Image from "next/image";
import { CodeXml, Link as LinkIcon } from "lucide-react";
import Link from 'next/link';
import { Project } from "@/src/types/project";
import { MotionInView } from "../animations/MotionInView";
import { motion } from "framer-motion";

interface SingleProjectProps {
    project: Project;
    index: number;
    onOpenDetails: () => void;
}

const SingleProject = (
    { project, index, onOpenDetails }: SingleProjectProps) => {

    if (!project || !project.featured) return null;

    const { title, github_link, live_link, banner, skills } = project;
    const direction = index % 2 === 0 ? "left" : "right";
    const duplicatedSkills = skills ? [...skills, ...skills] : [];

    return (
        <article className="w-full h-full">
            <MotionInView direction={direction} delay={index * 0.1}>
                <div
                    className="group relative bg-secondary/20 rounded-2xl transition-all duration-500 overflow-hidden h-80 border border-border/50 hover:border-primary/20 shadow-lg hover:shadow-primary/10 cursor-pointer"
                    onClick={onOpenDetails}
                >
                    <Image
                        src={banner?.url || banner?.formats?.thumbnail?.url || "/placeholder.png"}
                        alt={`${title} Preview`}
                        fill
                        priority={index < 2}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        className="object-cover object-top transition-transform duration-1000 ease-out group-hover:scale-110 group-hover:rotate-1"
                    />

                    {/* Gradient Overlay on the card */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500 z-10" />

                    {/* Hover Content */}
                    <div className="absolute inset-0 z-20 p-6 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center gap-4 transition-all duration-600 translate-y-100 group-hover:translate-y-0 backdrop-blur-sm bg-background/40">
                        <h3 className="text-2xl font-black text-secondary-foreground text-center">
                            {title}
                        </h3>

                        {/* Quick Actions */}
                        <div className="flex items-center gap-4">
                            {github_link && (
                                <Link
                                    href={github_link}
                                    target="_blank"
                                    onClick={(e) => e.stopPropagation()}
                                    className="p-3 rounded-full bg-white/10 hover:bg-white text-white hover:text-black transition-all duration-300 border border-white/20"
                                    title="View Source Code"
                                >
                                    <CodeXml size={20} />
                                </Link>
                            )}

                            {/* <button
                                    onClick={(e) => { e.stopPropagation(); onOpenDetails(); }}
                                    className="px-6 py-2.5 rounded-full bg-primary text-primary-foreground font-bold flex items-center gap-2 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-primary/30"
                                >
                                    <ExternalLink size={18} />
                                    Details
                                </button> */}

                            {live_link && (
                                <Link
                                    href={live_link}
                                    target="_blank"
                                    onClick={(e) => e.stopPropagation()}
                                    className="p-3 rounded-full bg-white/10 hover:bg-white text-white hover:text-black transition-all duration-300 border border-white/20"
                                    title="Live Demo"
                                >
                                    <LinkIcon size={20} />
                                </Link>
                            )}
                        </div>

                        {/* Tech Stack Marquee on Hover */}

                        <div
                            className="relative w-full overflow-hidden pt-4"
                            style={{
                                maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
                                WebkitMaskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)'
                            }}
                        >
                            <motion.div
                                className="flex gap-3 w-max"
                                animate={{ x: ["0%", "-50%"] }}
                                transition={{
                                    duration: 20,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                            >
                                {duplicatedSkills.map((tech, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1 bg-white/10 border border-white/10 text-white/90 text-[10px] uppercase tracking-widest rounded-md whitespace-nowrap backdrop-blur-md"
                                    >
                                        {tech.label}
                                    </span>
                                ))}
                            </motion.div>
                        </div>
                    </div>

                    {/* Bottom Title (Visible when not hovered) */}
                    <div className="absolute bottom-0 left-0 right-0 p-5 z-15 group-hover:opacity-0 transition-opacity duration-300">
                        <p className="text-white font-bold text-lg truncate drop-shadow-md">{title}</p>
                    </div>
                </div>
            </MotionInView>
        </article>
    );
};

export default SingleProject;