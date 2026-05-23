"use client";

import Title from "../shared/SectionTitle";
import { User, MapPin, GraduationCap, Code2 } from "lucide-react";
import AboutImage from "../ui/AboutImage";
import QuickInfoCard from "../shared/QuickInfoCard";
import { MotionInView } from "../animations/MotionInView";
import { BioBlock, BioChild } from "@/src/models/about";
import { RenderTextChild } from "../shared/RenderTextChild";
import Loading from "@/src/app/Loading";
import { Mock_About } from "@/src/constants/Mock_About";
import { useMockDataHook } from "@/src/Hooks/useMockData";

const AboutSection = () => {
    const { data, isLoading, isError } = useMockDataHook();

    if (isLoading && !data) return <Loading />;

    const profile = data?.about[0] || Mock_About[0];

    if (isError && (!data || data.about.length === 0)) {
        throw new Error("API Limit Reached and no Mock Data found");
    }

    return (
        <section id="about" className="py-20 lg:py-28 relative overflow-hidden bg-background selection:bg-primary/20">
            <Title title="about me." />

            <div className="max-w-6xl mx-auto px-6 mt-12 lg:mt-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

                    <div className="hidden lg:block lg:col-span-4 sticky top-24">
                        <MotionInView direction="left">
                            <AboutImage {...profile.profile_photo} />

                        </MotionInView>
                    </div>

                    <div className="col-span-1 lg:col-span-8 flex flex-col gap-8">
                        <MotionInView direction="right">

                            <div className="space-y-4">
                                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight tracking-tight">
                                    I&apos;m{" "}
                                    <span className="bg-linear-to-r from-primary/80 to-primary bg-clip-text text-transparent">
                                        {profile.full_name}
                                    </span>
                                    , a <span className="text-foreground font-semibold">Full-Stack Developer</span> based in Egypt.
                                </h3>

                                <div className="w-12 h-0.5 bg-primary rounded-full opacity-80" />
                            </div>
                            <div className="mt-6 border-l-2 border-primary/50 pl-5 lg:pl-6 space-y-5 text-[15px] lg:text-[16px] leading-relaxed tracking-wide text-muted-foreground/90">
                                {profile.bio.map((block: BioBlock, i: number) => (
                                    <p key={i} className="leading-relaxed font-normal">
                                        {block.children.map((child: BioChild, j: number) => (
                                            <RenderTextChild
                                                key={j}
                                                child={child}
                                                index={j}
                                            />
                                        ))}
                                    </p>
                                ))}
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8 mt-6 border-t border-border/30">
                                {[
                                    {
                                        icon: <User size={18} className="text-primary" />,
                                        label: "Role",
                                        val: profile.titles[0] || "Full Stack Developer",
                                    },
                                    {
                                        icon: <MapPin size={18} className="text-primary" />,
                                        label: "Location",
                                        val: "Egypt",
                                    },
                                    {
                                        icon: <GraduationCap size={18} className="text-primary" />,
                                        label: "Education",
                                        val: "NTI Certified",
                                    },
                                    {
                                        icon: <Code2 size={18} className="text-primary" />,
                                        label: "Frameworks",
                                        val: profile.frameworks?.join(", ") || "React, Next.js, Angular, Node.js",
                                    },
                                ].map((item, i) => (
                                    <QuickInfoCard key={i} {...item} />
                                ))}
                            </div>

                        </MotionInView>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutSection;