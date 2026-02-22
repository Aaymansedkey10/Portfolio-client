"use client";
import { motion } from "framer-motion";

interface MotionInViewProps {
    children: React.ReactNode;
    direction?: "left" | "right";
}

export const MotionInView = ({ children, direction = "left" }: MotionInViewProps) => {
    return (
        <motion.div
            initial={{
                opacity: 0,
                x: direction === "left" ? -100 : 100
            }}
            whileInView={{
                opacity: 1,
                x: 0
            }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{
                duration: 0.8,
                ease: "easeOut"
            }}
        >
            {children}
        </motion.div>
    );
};