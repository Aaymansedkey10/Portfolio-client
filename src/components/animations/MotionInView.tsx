"use client";
import { motion } from "framer-motion";

interface MotionInViewProps {
    children: React.ReactNode;
    direction?: "left" | "right" | "up" | "down";
    delay?: number;
    once?: boolean;
}

export const MotionInView = ({ children, direction = "left", delay = 0, once = false }: MotionInViewProps) => {
    const variants = {
        hidden: {
            opacity: 0,
            x: direction === "left" ? -50 : direction === "right" ? 50 : 0,
            y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
        }
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once, amount: 0.2 }}
            variants={variants}
            transition={{
                duration: 0.8,
                delay,
                ease: [0.25, 0.1, 0.25, 1],
            }}
        >
            {children}
        </motion.div>
    );
};