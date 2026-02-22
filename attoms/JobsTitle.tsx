"use client";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

const JobsTitle = () => {
    const jobTitles = useMemo(
        () => [
            "Front End Developer",
            "UI / UX Enthusiast",
            "React Specialist",
            "Next Specialist",
        ],
        []
    );

    const [titleIndex, setTitleIndex] = useState(0);
    const count = useMotionValue(0);
    const rounded = useTransform(count, Math.round);

    const displayText = useTransform(rounded, (latest) =>
        jobTitles[titleIndex].slice(0, latest)
    );

    useEffect(() => {
        const controls = animate(count, jobTitles[titleIndex].length, {
            duration: 1.5,
            ease: "linear",
            onComplete: () => {
                const timeout = setTimeout(() => {
                    animate(count, 0, {
                        duration: 0.8,
                        ease: "linear",
                        onComplete: () => {
                            setTitleIndex((prev) => (prev + 1) % jobTitles.length);
                        },
                    });
                }, 1000);

                return () => clearTimeout(timeout);
            },
        });

        return () => controls.stop();
    }, [titleIndex, count, jobTitles]);

    return (
        <div className="text-2xl md:text-3xl font-semibold max-w-2xl w-full text-center font-mono flex justify-center items-center min-h-10">
            <motion.span className="text-primary font-extrabold">
                {displayText}
            </motion.span>
            <Cursor />
        </div>
    );
};

const Cursor = () => (
    <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        className="inline-block w-0.5 h-5 md:h-7 bg-primary ml-1"
    />
);

export default JobsTitle;
