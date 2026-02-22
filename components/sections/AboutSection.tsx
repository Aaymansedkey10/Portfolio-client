"use client";

import Title from '../Title';
import { User, MapPin, GraduationCap, Code2 } from 'lucide-react';
import AboutImage from '../AboutImage';
import QuickInfoCard from '../QuickInfoCard';
import { Highlight } from '../Highlight';
import { MotionInView } from '../animations/MotionInView';

const AboutSection = () => {
    return (
        <section id='about' className="py-24 relative overflow-hidden">
            <Title title='about me.' />

            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                    {/* الجانب الأيسر: الصورة */}
                    <div className="hidden lg:block lg:col-span-5 relative group">
                        <MotionInView direction="left">
                            <AboutImage />
                        </MotionInView>
                    </div>

                    <div className="col-span-1 lg:col-span-7 space-y-6">
                        <MotionInView direction="right">
                            <div className="space-y-4">
                                <h3 className="text-xl md:text-2xl lg:text-4xl font-bold text-foreground leading-snug text-left md:text-center lg:text-left">
                                    I&apos;m <span className="text-primary">Ayman Sedkey</span>, a Creative Developer based in Egypt.
                                </h3>

                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    I specialize in building <Highlight>responsive, high-performance, and user-friendly</Highlight> web applications.
                                    <br className="hidden md:block" />
                                    My commitment to writing <Highlight>clean and maintainable code</Highlight> helps me focus on
                                    <Highlight>performance, accessibility</Highlight>, and improving user experience in every project.
                                </p>
                            </div>

                            {/* شبكة المعلومات السريعة - Quick Info Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
                                {[
                                    { icon: <User size={18} className="text-primary" />, label: "Role", val: "Front-End Developer" },
                                    { icon: <MapPin size={18} className="text-primary" />, label: "Location", val: "Cairo, Egypt" },
                                    { icon: <GraduationCap size={18} className="text-primary" />, label: "Education", val: "Zagazig University" },
                                    { icon: <Code2 size={18} className="text-primary" />, label: "Experience", val: "1+ Years" },
                                ].map((item, i) => (
                                    <QuickInfoCard key={i} {...item} />
                                ))}
                            </div>

                            <p className="text-muted-foreground pt-6 lg:border-t border-border mt-6">
                                As a lifelong learner, I stay updated with the latest trends in web development and actively
                                contribute to developer communities and open-source projects.
                            </p>
                        </MotionInView>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default AboutSection;