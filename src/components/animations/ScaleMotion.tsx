"use client";
import { ReactNode } from "react";
import { motion } from "framer-motion";

interface ScaleMotionProps {
    children: ReactNode;
    delay?: number;
}

const ScaleMotion = ({ children, delay = 0 }: ScaleMotionProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}

            transition={{
                duration: 0.5,
                delay: delay,
                type: "spring",
                stiffness: 100
            }}
        >
            {children}
        </motion.div>
    );
};

export default ScaleMotion;