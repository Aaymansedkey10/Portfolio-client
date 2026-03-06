"use client";
import { motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
type particle = {
    id: number;
    left: string;
    scale: number;
    duration: number;
    delay: number;
}
const FallingParticles = () => {
    const [particles, setParticles] = useState<particle[] | null>(null);
    useEffect(() => {
        const generatedParticles = Array.from({ length: 15 }, (_, i) => ({
            id: i,
            left: `${Math.random() * 100}%`,
            scale: Math.random() * 0.5 + 0.5,
            duration: Math.random() * 3 + 2,
            delay: Math.random() * 5,
        }));
        setParticles(generatedParticles);
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none h-svh w-full px-5">
            {particles?.map((p) => (
                <motion.div
                    key={p.id}
                    initial={{ top: "-10%", left: p.left, opacity: 0, scale: p.scale }}
                    animate={{ top: "110%", opacity: [0, 1, 1, 0] }}
                    transition={{
                        duration: p.duration,
                        repeat: Infinity,
                        delay: p.delay,
                        ease: "linear",
                    }}
                    className="absolute w-1 h-10 rounded-full bg-linear-to-b from-primary/10 to-primary blur-[0.5px]"
                />
            ))}
        </div>
    );
};

export default FallingParticles;