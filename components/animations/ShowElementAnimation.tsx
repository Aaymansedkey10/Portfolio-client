"use client";
import { ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";
const ShowElement = ({ children }: { children: ReactNode }) => {
    return (
        <AnimatePresence mode="wait">
            <motion.div
                initial={{ x: 0, opacity: 0 }}
                exit={{ x: -40, opacity: 0 }}
                transition={{ duration: 1.5 }}
                whileInView={{ y: 0, opacity: 1 }}>
                {children}
            </motion.div>
        </AnimatePresence>
    )
}

export default ShowElement