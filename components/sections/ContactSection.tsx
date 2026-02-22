"use client";
import { motion, AnimatePresence } from 'framer-motion';
import Title from '../Title';
import ShowElement from '../animations/ShowElementAnimation';
import { useState } from 'react';
import { socialLinks } from '@/app/assets/SocailLinks';
import { ExternalLink } from 'lucide-react';

const ContactSection = () => {
    const [hoveredId, setHoveredId] = useState<number | null>(null);

    return (
        <ShowElement>
            <section id='contact' className="py-24 relative overflow-hidden">
                <Title
                    title="Let's work together."
                    description="Have a project in mind, an opportunity, or just want to say Hi?"
                />

                <div className="text-center mt-12 relative z-10">
                    <h6 className="text-muted-foreground font-medium uppercase tracking-[0.3em] text-[10px] mb-10">
                        Find me on
                    </h6>

                    <div className="flex flex-wrap items-center justify-center gap-4">
                        {socialLinks.map((link) => (
                            <motion.a
                                key={link.id}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                onMouseEnter={() => setHoveredId(link.id)}
                                onMouseLeave={() => setHoveredId(null)}
                                whileTap={{ scale: 0.95 }}
                                animate={{ y: hoveredId === link.id ? -8 : 0 }}
                                className={`
                                    relative flex flex-col items-center justify-center
                                    w-24 h-24 rounded-2xl
                                    bg-secondary/30 backdrop-blur-xl border border-border
                                    transition-colors duration-300
                                    ${hoveredId === link.id ? 'border-primary/50 bg-secondary/60 shadow-xl' : ''}
                                `}
                            >
                                <div className="flex flex-col items-center justify-center h-full w-full relative">
                                    <motion.span
                                        animate={{ y: hoveredId === link.id ? -8 : 0 }}
                                        className={`${hoveredId === link.id ? 'text-primary' : 'text-foreground'} transition-colors duration-300`}
                                    >
                                        {link.icon}
                                    </motion.span>

                                    <div className="absolute bottom-4 left-0 right-0 h-4 flex items-center justify-center">
                                        <AnimatePresence>
                                            {hoveredId === link.id && (
                                                <motion.span
                                                    initial={{ opacity: 0, y: 5 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: 5 }}
                                                    className="text-[10px] font-bold uppercase tracking-tighter text-primary whitespace-nowrap"
                                                >
                                                    {link.name}
                                                </motion.span>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </div>
                                <AnimatePresence>
                                    {hoveredId === link.id && (
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
                        ))}
                    </div>
                </div>

                {/* Ambient Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/5 blur-[120px] rounded-full -z-10" />
            </section>
        </ShowElement>
    )
}

export default ContactSection;