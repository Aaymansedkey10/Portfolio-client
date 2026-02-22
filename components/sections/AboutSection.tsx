"use client"
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Title from '../Title';
import Image from 'next/image';
import me from "@/assets/data/me.png"
import { User, MapPin, GraduationCap, Code2 } from 'lucide-react';
import AboutImage from '../AboutImage';
import QuickInfoCard from '../QuickInfoCard';
import { Highlight } from '../Highlight';
const AboutSection = () => {
    const containerRef = useRef<HTMLElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 0.9", "start 0.4"]
    });
    const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
    const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

    return (
        <section id='about' ref={containerRef} className="py-24 relative overflow-hidden">
            <Title title='about me.' />

            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
                    <div className="md:col-span-5 relative group">
                        <AboutImage />
                    </div>

                    <motion.div
                        style={{ y, opacity }}
                        className="md:col-span-7 space-y-6"
                    >
                        <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                            I&apos;m <span className="text-primary">Ayman Sedkey</span>, a Creative Developer based in Egypt.
                        </h3>

                        <p className="text-lg text-muted-foreground leading-relaxed">
                            I specialize in building <Highlight>responsive, high-performance, and user-friendly</Highlight> web applications.
                            <br />
                            My commitment to writing <Highlight>clean and maintainable code</Highlight> helps me focus on
                            <Highlight>performance, accessibility</Highlight>, and improving user experience in every project.
                        </p>

                        {/* Quick Info Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
                            {[
                                { icon: <User size={18} />, label: "Role", val: "Front-End Developer" },
                                { icon: <MapPin size={18} />, label: "Location", val: "Cairo, Egypt" },
                                { icon: <GraduationCap size={18} />, label: "Education", val: "Zagazig University" },
                                { icon: <Code2 size={18} />, label: "Experience", val: "1+ Years" },
                            ].map((item, i) => (
                                <QuickInfoCard key={i} {...item} />
                            ))}
                        </div>

                        <p className="text-muted-foreground pt-4">
                            As a lifelong learner, I stay updated with the latest trends in web development and actively
                            contribute to developer communities and open-source projects.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;