"use client";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { ReactNode, useState } from "react";

const NavigationAnimation = ({ children }: { children: ReactNode }) => {
    const [hidden, setHidden] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const prev = scrollY.getPrevious() ?? 0;
        setHidden(latest > prev && latest > 50);
    });
    return (
        <AnimatePresence>
            {
                !hidden && (
                    <motion.nav
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 100, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50
                    flex items-end gap-5 px-4 py-2 lg:px-6 lg:py-2 backdrop-blur
                    border border-border rounded-full
                    shadow-lg max-w-2xl"
                    >
                        {children}
                    </motion.nav>
                )
            }
        </AnimatePresence>
    )
}

export default NavigationAnimation