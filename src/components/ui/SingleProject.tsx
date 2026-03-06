import Image from "next/image";
import { CodeXml, Info, Link as LinkIcon } from "lucide-react";
import Link from 'next/link';
import { Project } from "@/src/types/project";
import { MotionInView } from "../animations/MotionInView";


interface singleProjectProps {
    project: Project;
    index: number;
    onOpenDetails: () => void
}

const SingleProject = ({ project, index, onOpenDetails }: singleProjectProps) => {
    if (!project) return null;
    const { title, github_link, live_link, banner } = project;
    const direction = index % 2 === 0 ? "left" : "right";

    return (
        <div className="single-project w-full shadow-sm shadow-primary/50 rounded-xl transition-all duration-300 hover:scale-102">
            <MotionInView direction={direction} key={index}>
                <div className="group relative border-none bg-secondary/30 rounded-xl transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 overflow-hidden h-[280px] cursor-pointer"
                    onClick={onOpenDetails}
                >
                    {/* Project Image */}
                    <Image
                        src={banner?.url || banner?.formats?.thumbnail?.url || "/placeholder.png"}
                        alt={`${title} project preview`}
                        fill
                        priority={index < 2}
                        className="object-cover object-top transition-transform duration-700 ease-in-out group-hover:scale-110 group-hover:rotate-1"
                    />
                    {/* Overlay on Hover */}
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-xs flex flex-col items-center justify-center z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h2 className="text-xl font-bold text-white mb-4 text-wrap px-5 text-center">{title}</h2>
                        <div className="flex items-center gap-4">
                            {/* GitHub */}
                            {github_link && (
                                <Link
                                    href={github_link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    className="p-3 rounded-full bg-white/10 text-white border border-white/20 hover:bg-white hover:text-black transition-all duration-300 shadow-xl"
                                    title="View Code"
                                >
                                    <CodeXml size={22} />
                                </Link>
                            )}

                            {/* Live Demo */}
                            {live_link && (
                                <Link
                                    href={live_link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    className="p-3 rounded-full bg-primary text-white shadow-lg shadow-primary/40 hover:scale-110 active:scale-95 transition-all duration-300"
                                    title="Live Demo"
                                >
                                    <LinkIcon size={22} />
                                </Link>
                            )}

                            {/* More Info in modal */}
                            <button
                                className="p-3 rounded-full bg-white/5 text-white border border-white/10 hover:bg-white/20 hover:border-white/30 transition-all duration-300 shadow-xl backdrop-blur-md"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onOpenDetails();
                                }}
                                title="Project Details"
                            >
                                <Info size={22} />
                            </button>
                        </div>
                    </div>
                </div>
            </MotionInView>
        </div>
    );
};

export default SingleProject;