"use client";
import FallingParticles from "../shared/FallingParticles";
import GridBackground from "../ui/GridBackground";
import AvilableWorking from "../shared/AvailableWorking";
import ScrollIndicator from "../shared/ScrollIndicator";
import { MotionInView } from "../animations/MotionInView";
import { useQuery } from "@tanstack/react-query";
import { AboutServices } from "@/src/services/AboutService";
import { BioBlock, BioChild } from "@/src/types/about";
import FrameWorks from "../shared/FrameWorks";
import { RenderTextChild } from "../shared/RenderTextChild";
import ButtonLink from "../buttons/ButtonLink";
import { LayoutGrid, Mail } from "lucide-react";
const HeaderSection = () => {
    const { data } = useQuery({
        queryKey: ['about'],
        queryFn: () => AboutServices.getAbout(),
    });

    // if (isLoading) return (<>loading from header....</>)
    const profile = data ? data?.[0] : null;
    if (!profile) return null;
    return (
        <header id="home" className="flex items-start justify-center min-h-svh container px-4 pt-10">
            <FallingParticles />
            <GridBackground />
            <div className="z-10 flex flex-col items-center justify-center gap-6 text-center px-4">
                <div className="space-y-3">
                    <AvilableWorking available={profile.avilable_to_work} />
                    <span className="text-sm md:text-base font-semibold text-muted-foreground capitalize tracking-wide">
                        Hello, I&apos;m
                    </span>
                    <h1 className="text-5xl md:text-6xl  lg:text-8xl font-black tracking-wide text-transparent bg-clip-text bg-linear-to-b py-5 from-secondary to-primary">
                        {data ? data[0].full_name : "Ayman Sedkey"}
                    </h1>
                    <FrameWorks frames={data ? data[0].frameworks : []} />
                </div>
                <MotionInView direction="up" delay={0.2}>
                    <p className="text-foreground text-sm md:text-lg max-w-3xl leading-relaxed font-light">
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
                <div className="flex items-center justify-center gap-4 pt-6 flex-wrap">
                    <MotionInView direction="left" delay={0.1}>
                        <ButtonLink label="Works" url="works" icon={LayoutGrid} />
                    </MotionInView>
                    <MotionInView direction="right" delay={0.1}>
                        <ButtonLink label="Contact" url="contact" icon={Mail} />
                    </MotionInView>
                </div>
            </div>
            <ScrollIndicator />
        </header>
    );
};

export default HeaderSection;