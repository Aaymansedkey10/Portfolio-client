"use client";

import Image from "next/image";
import { Button } from "../buttons/Button";
import { useScroll } from "@/src/Hooks/useScroll";
import GridBackground from "../ui/GridBackground";
import AvilableWorking from "../shared/AvailableWorking";
import { MotionInView } from "../animations/MotionInView";
import { BioBlock, BioChild } from "@/src/models/about";
import FrameWorks from "../shared/FrameWorks";
import { RenderTextChild } from "../shared/RenderTextChild";
import { Download, LayoutGrid, Mail } from "lucide-react";
import Loading from "@/src/app/Loading";
import { Mock_About } from "@/src/constants/Mock_About";
import { useMockDataHook } from "@/src/Hooks/useMockData";
import FallingParticles from "../animations/FallingParticles";

const HeaderSection = () => {
    const { scrollTo } = useScroll();
    const { data, isLoading, isError } = useMockDataHook();

    if (isLoading && !data) return <Loading />;

    const profile = data?.about[0] || Mock_About[0];

    if (isError && (!data || data.about.length === 0)) {
        throw new Error("API Limit Reached and no Mock Data found");
    }

    return (
        <header id="home" className="relative flex items-center justify-center min-h-[calc(100vh-80px)] lg:min-h-screen w-full container px-6 lg:px-12 xl:px-20 overflow-hidden pt-10 lg:pt-0">
            <FallingParticles />
            <GridBackground />

            <div className="z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full max-w-7xl mx-auto">

                <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left gap-6 order-2 lg:order-1">
                    <div className="space-y-3 w-full">
                        <div className="flex justify-center lg:justify-start">
                            <AvilableWorking available={profile.avilable_to_work} />
                        </div>

                        <span className="block text-sm md:text-base font-semibold text-muted-foreground capitalize tracking-wide">
                            Hello, I&apos;m
                        </span>


                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight text-secondary-foreground  py-2 leading-tight">
                            {data ? data.about[0].full_name : "Ayman Sedkey"}
                        </h1>

                        <div className="flex justify-center lg:justify-start pt-2">
                            <FrameWorks frames={data ? data.about[0].frameworks : []} />
                        </div>
                    </div>


                    <MotionInView direction="up" delay={0.2}>
                        <p className="text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed font-normal font-sans">
                            {profile?.sub_bio && Array.isArray(profile.sub_bio) ? (
                                profile.sub_bio.map((block: BioBlock, i: number) => (
                                    <span key={i}>
                                        {block.children.map((child: BioChild, j: number) => (
                                            <RenderTextChild key={j} child={child} index={j} />
                                        ))}
                                    </span>
                                ))
                            ) : (
                                "I build accessible, high-quality web experiences with a focus on usability and performance."
                            )}
                        </p>
                    </MotionInView>

                    <div className="flex items-center justify-center lg:justify-start gap-3.5 pt-4 flex-wrap w-full">
                        <MotionInView direction="left" delay={0.3}>
                            <Button label="Projects" func={() => scrollTo("works")} home={true} icon={<LayoutGrid size={18} />} />
                        </MotionInView>

                        <MotionInView direction="right" delay={0.3}>
                            <Button label="Contact Me" func={() => scrollTo("contact")} home={true} icon={<Mail size={18} />} />
                        </MotionInView>

                        <MotionInView direction="up" delay={0.4}>
                            <Button
                                label="Download CV"
                                func={() => window.open("https://drive.usercontent.google.com/download?id=1UEnEKxzZ-GAbD4iE63-SJUcjeKMOsD9w&export=download", "_blank")}
                                home={true}
                                icon={<Download size={18} />}
                            />
                        </MotionInView>
                    </div>
                </div>


                <div className="lg:col-span-5 flex items-center justify-center order-1 lg:order-2">
                    <MotionInView direction="right" delay={0.2}>
                        <div className="relative group w-64 h-64 sm:w-80 sm:h-80 xl:w-90 xl:h-90 rounded-full isolation-auto">


                            <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl group-hover:bg-primary/30 transition-all duration-700 animate-pulse" />

                            <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30 group-hover:border-primary group-hover:rotate-45 transition-all duration-1000 ease-out" />

                            <div className="absolute inset-3 rounded-full border border-secondary bg-secondary/10 overflow-hidden shadow-2xl backdrop-blur-sm group-hover:border-primary/50 transition-colors duration-500">
                                <Image
                                    src={profile.profile_photo.url}
                                    alt="Ayman Sedkey"
                                    fill
                                    priority
                                    className="object-cover object-top grayscale hover:grayscale-0 scale-100 group-hover:scale-105 transition-all duration-700 ease-out"
                                />
                            </div>

                        </div>
                    </MotionInView>
                </div>

            </div>
        </header>
    );
};

export default HeaderSection;