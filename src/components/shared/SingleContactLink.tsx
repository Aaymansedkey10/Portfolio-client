"use client"
import { ExternalLink } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react';
import { MotionInView } from '../animations/MotionInView';

type SingleContactLinkProps = {
    href: string;
    name: string;
    icon: React.ReactNode;
    id: string | number;
    index: number;
    currentDirection: "up" | "down" | "left" | "right";
}

const SingleContactLink = ({ href, name, icon, id, index, currentDirection }: SingleContactLinkProps) => {
    const [hoveredId, setHoveredId] = useState<string | number | null>(null);
    return (
        <MotionInView direction={currentDirection} delay={index * 0.1}>
            <motion.a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHoveredId(id)}
                onMouseLeave={() => setHoveredId(null)}
                whileTap={{ scale: 0.95 }}
                animate={{ y: hoveredId === id ? -8 : 0 }}
                className={`
                relative flex flex-col items-center justify-center
                w-24 h-24 rounded-2xl
                bg-secondary/30 backdrop-blur-xl border border-border
                transition-colors duration-300
                ${hoveredId === id ? 'border-primary/50 bg-secondary/60 shadow-xl' : ''}
            `}
            >
                <div className="flex flex-col items-center justify-center h-full w-full relative">
                    <motion.span
                        animate={{ y: hoveredId === id ? -8 : 0 }}
                        className={`${hoveredId === id ? 'text-primary' : 'text-foreground'} transition-colors duration-300`}
                    >
                        {icon}
                    </motion.span>

                    <div className="absolute bottom-4 left-0 right-0 h-4 flex items-center justify-center">
                        <AnimatePresence>
                            {hoveredId === id && (
                                <motion.span
                                    initial={{ opacity: 0, y: 5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 5 }}
                                    className="text-[10px] font-bold uppercase tracking-tighter text-primary whitespace-nowrap"
                                >
                                    {name}
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
                <AnimatePresence>
                    {hoveredId === id && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute top-2 right-2 text-primary/40"
                        >
                            <ExternalLink size={10} />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.a>
        </MotionInView>
    );
};
export default SingleContactLink