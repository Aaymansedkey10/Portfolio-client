"use client";

import Image, { StaticImageData } from "next/image";
import { CodeXml, Info, Link as LinkIcon, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from 'next/link';
import { useState } from "react";
import { SingleWorkDetails } from "./SingleProjectDetails";

type singelTech = {
    techTitle: string,
    image: string
}

type singleWorkProps = {
    title: string,
    banner: StaticImageData,
    technologies: singelTech[],
    github: string,
    live: string,
    index?: number
}

const SingleWork = ({ banner, technologies, title, github, live, index = 0 }: singleWorkProps) => {
    const [showDetails, setShowDetails] = useState<boolean>(false);

    return (
        <>
            <div
                className="group relative border-none bg-secondary/30 rounded-xl transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 overflow-hidden h-[280px] cursor-pointer"
                onClick={() => setShowDetails(true)}
            >
                {/* Project Image */}
                <Image
                    src={banner}
                    alt={`${title} project preview`}
                    fill
                    priority={index < 2}
                    className="object-cover object-top transition-transform duration-700 ease-in-out group-hover:scale-110 group-hover:rotate-1"
                />

                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-black/80 backdrop-blur-xs flex flex-col items-center justify-center z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h2 className="text-xl font-bold text-white mb-4">{title}</h2>
                    <div className="flex items-center gap-4">
                        {/* زرار GitHub */}
                        {github && (
                            <Link
                                href={github}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()} // منع فتح الـ Modal عند الضغط على اللينك
                                className="p-3 rounded-full bg-white/10 text-white border border-white/20 hover:bg-white hover:text-black transition-all duration-300 shadow-xl"
                                title="View Code"
                            >
                                <CodeXml size={22} />
                            </Link>
                        )}

                        {/* زرار Live Demo */}
                        {live && (
                            <Link
                                href={live}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()} // منع فتح الـ Modal عند الضغط على اللينك
                                className="p-3 rounded-full bg-primary text-white shadow-lg shadow-primary/40 hover:scale-110 active:scale-95 transition-all duration-300"
                                title="Live Demo"
                            >
                                <LinkIcon size={22} />
                            </Link>
                        )}

                        {/* زرار More Info - لفتح الـ Modal */}
                        <button
                            className="p-3 rounded-full bg-white/5 text-white border border-white/10 hover:bg-white/20 hover:border-white/30 transition-all duration-300 shadow-xl backdrop-blur-md"
                            onClick={(e) => {
                                e.stopPropagation();
                                setShowDetails(true);
                            }}
                            title="Project Details"
                        >
                            <Info size={22} />
                        </button>
                    </div>
                </div>
            </div>
            {/* Modal Details */}
            <AnimatePresence>
                {showDetails && (
                    <SingleWorkDetails
                        title={title}
                        technologies={technologies}
                        close={() => setShowDetails(false)}
                    />
                )}
            </AnimatePresence>
        </>
    );
};

export default SingleWork;