"use client";

import Title from "../shared/SectionTitle";
import { User, MapPin, GraduationCap, Code2 } from "lucide-react";
import AboutImage from "../ui/AboutImage";
import QuickInfoCard from "../shared/QuickInfoCard";
import { MotionInView } from "../animations/MotionInView";
import { BioBlock, BioChild } from "@/src/types/about";
import { RenderTextChild } from "../shared/RenderTextChild";
import Loading from "@/src/app/Loading";
// import { AboutServices } from "@/src/services";
// import { useQueryCustom } from "@/src/Hooks/useQueryCustom";
import { Mock_About } from "@/src/constants/Mock_About";
import { useMockDataHook } from "@/src/Hooks/useMockData";

const AboutSection = () => {
    const { data, isLoading, isError } = useMockDataHook()

    if (isLoading && !data) return <Loading />;

    const profile = data?.about[0] || Mock_About[0];

    if (isError && (!data || data.about.length === 0)) {
        throw new Error("API Limit Reached and no Mock Data found");
    }

    return (
        <section id="about" className="py-24 relative overflow-hidden">
            <Title title="about me." />

            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                    <div className="hidden lg:block lg:col-span-4">
                        <MotionInView direction="left">
                            <AboutImage
                                {...profile.profile_photo}
                            />
                        </MotionInView>
                    </div>

                    <div className="col-span-1 lg:col-span-8 space-y-6">
                        <MotionInView direction="right">
                            <div className="space-y-4">
                                <h3 className="text-xl md:text-2xl lg:text-4xl font-bold text-foreground leading-snug text-left">
                                    I&apos;m <span className="text-primary">{profile.full_name}</span>, a
                                    Creative Developer based in Egypt.
                                </h3>

                                <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
                                    {profile.bio.map((block: BioBlock, i: number) => {
                                        return (
                                            <p key={i} className="leading-relaxed">
                                                {block.children.map((child: BioChild, j: number) => (
                                                    <RenderTextChild
                                                        key={j}
                                                        child={child}
                                                        index={j}
                                                    />
                                                )
                                                )}
                                            </p>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Quick Info Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
                                {[
                                    {
                                        icon: <User size={18} className="text-primary" />,
                                        label: "Role",
                                        val: profile.titles[0],
                                    },
                                    {
                                        icon: <MapPin size={18} className="text-primary" />,
                                        label: "Location",
                                        val: "Cairo, Egypt",
                                    },
                                    {
                                        icon: <GraduationCap size={18} className="text-primary" />,
                                        label: "Education",
                                        val: "Zagazig University",
                                    },
                                    {
                                        icon: <Code2 size={18} className="text-primary" />,
                                        label: "Frameworks",
                                        val: profile.frameworks.join(", "),
                                    },
                                ].map((item, i) => (
                                    <QuickInfoCard key={i} {...item} />
                                ))}
                            </div>

                            <p className="text-muted-foreground pt-6 lg:border-t border-border mt-6">
                                As a lifelong learner, I stay updated with the latest trends in web development and actively
                                contribute to developer communities.
                            </p>
                        </MotionInView>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
