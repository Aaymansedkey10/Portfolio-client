"use client";

import Image, { StaticImageData } from "next/image";
import { CodeXml, Link as LinkIcon } from "lucide-react";
import { motion } from "framer-motion";
import Link from 'next/link';
import { Card, CardHeader, CardTitle } from "./ui/card";

const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};

const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1,
            ease: "easeOut"
        }
    }),
};

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
    index?: number // Added for image priority
}

const SingleWork = ({ banner, technologies, title, github, live, index = 0 }: singleWorkProps) => {
    return (
        <Card className="group relative overflow-hidden border-none bg-secondary/30 rounded-xl transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20">
            <CardHeader className="p-0 relative h-[280px] w-full overflow-hidden">
                {/* Project Image */}
                <Image
                    src={banner}
                    alt={`${title} project preview`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index < 2} // Load first two projects immediately
                    className="object-cover object-top transition-transform duration-700 ease-in-out group-hover:scale-105 group-hover:rotate-1"
                />

                {/* Dark Overlay on Hover */}
                <motion.div
                    variants={overlayVariants}
                    initial="hidden"
                    whileHover="visible"
                    className="absolute inset-0 bg-black/75 backdrop-blur-[3px] flex flex-col items-center justify-center p-6 z-20"
                >
                    {/* Title inside Overlay */}
                    <motion.div variants={itemVariants} custom={0}>
                        <CardTitle className="text-xl md:text-2xl font-bold text-white mb-5 tracking-tight">
                            {title}
                        </CardTitle>
                    </motion.div>

                    {/* Technologies */}
                    <div className="flex flex-wrap items-center justify-center gap-2 mb-8 px-2">
                        {technologies.map(({ image, techTitle }, idx) => (
                            <motion.div
                                key={`${techTitle}-${idx}`}
                                variants={itemVariants}
                                custom={idx + 1}
                                whileHover={{ scale: 1.05 }}
                                className="group/tech relative flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/10 rounded-full px-3 py-1 transition-all"
                            >
                                <div className="relative w-4 h-4">
                                    <Image
                                        src={image}
                                        alt={techTitle}
                                        width={16}
                                        height={16}
                                        unoptimized
                                        className="w-full h-full object-contain filter grayscale group-hover/tech:grayscale-0 transition-all"
                                    />
                                </div>
                                <span className="text-[10px] font-semibold text-white/90 uppercase">
                                    {techTitle}
                                </span>
                            </motion.div>
                        ))}
                    </div>

                    {/* Action Buttons */}
                    <motion.div
                        variants={itemVariants}
                        custom={technologies.length + 1}
                        className="flex gap-5"
                    >
                        {github && (
                            <Link
                                href={github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-full bg-white/10 text-white border border-white/20 hover:bg-white hover:text-black transition-all duration-300 shadow-xl"
                                aria-label="View Source Code"
                            >
                                <CodeXml size={22} />
                            </Link>
                        )}
                        {live && (
                            <Link
                                href={live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-full bg-primary text-white shadow-lg shadow-primary/40 hover:scale-110 active:scale-95 transition-all duration-300"
                                aria-label="Live Demo"
                            >
                                <LinkIcon size={22} />
                            </Link>
                        )}
                    </motion.div>
                </motion.div>
            </CardHeader>
        </Card>
    );
};

export default SingleWork;