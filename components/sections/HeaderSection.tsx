"use client";
import { Button } from "../buttons/Button";
import { useScroll } from "@/Hooks/useScroll";
import { motion } from "framer-motion";
import { Dot } from "lucide-react";
import FallingParticles from "../FallingParticles";
import { Highlight } from "../Highlight";

const HeaderSection = () => {
    const { scrollTo } = useScroll();

    return (
        <header
            id="home"
            className="flex items-start justify-center min-h-svh container px-4 pt-10"
        >
            <FallingParticles />
            <div className="absolute inset-0 z-0 opacity-10"
                style={{
                    backgroundImage: `linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)`,
                    backgroundSize: '300px 300px'
                }}>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 flex flex-col items-center justify-center gap-6 text-center px-4"
            >
                <div className="space-y-3">
                    <div className="flex items-center justify-center bg-secondary/20 pe-8 py-1 rounded-full w-fit mx-auto mb-4 border shadow-md shadow-primary/5 border-primary/10 h-10">
                        <Dot className="text-primary" size={50} />
                        <p className="text-sm font-semibold text-muted-foreground capitalize tracking-wide">Avilable to work</p>
                    </div>
                    <span className="text-sm md:text-base font-semibold text-muted-foreground capitalize tracking-wide">
                        Hello, I&apos;m
                    </span>

                    <h1 className="text-5xl md:text-6xl  lg:text-8xl font-black tracking-wide text-transparent bg-clip-text bg-linear-to-b py-5 from-secondary to-primary">
                        Ayman Sedkey
                    </h1>

                    <div className="flex justify-center items-center gap-4 h-6">
                        {/* <JobsTitle /> */}
                        <p className="text-lg text-muted-foreground leading-3 capitalize tracking-widest">Next</p>
                        <div className="w-px h-full bg-primary rounded-full" />
                        <p className="text-lg text-muted-foreground leading-3 capitalize tracking-widest">React</p>

                    </div>
                </div>

                <p className="text-foreground text-sm md:text-lg max-w-xl leading-relaxed font-light">
                    I build <Highlight>accessible</Highlight>, <Highlight>high-quality</Highlight> web experiences with a focus on <br />
                    <Highlight> usability</Highlight> and <Highlight> performance</Highlight>.
                </p>

                <div className="flex items-center justify-center gap-4 pt-6 flex-wrap">
                    <Button label="Works" func={() => scrollTo("works")} />
                    <Button label="Contact" func={() => scrollTo("contact")} />
                </div>
            </motion.div>

            <div
                className="absolute bottom-25 left-1/2 -translate-x-1/2 hidden xl:flex flex-col gap-1 items-center justify-center pt-5"
            >
                <p className="text-[10px] font-medium tracking-[0.3em] uppercase text-muted-foreground">Scroll Down</p>
                <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center mt-6 pt-1 cursor-pointer">
                    <motion.div
                        animate={{ y: [0, 4, 0] }}
                        transition={{ repeat: Infinity, duration: 3 }}
                        className="w-1 h-3 bg-primary rounded-full" />
                </div>
                <div className="w-1 h-3 bg-primary/40 rounded-full"></div>

            </div>
        </header>
    );
};

export default HeaderSection;