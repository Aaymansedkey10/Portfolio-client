"use client";
import { motion } from "motion/react"

const ScrollIndicator = () => {
    return (
        <div
            className="absolute bottom-15 left-1/2 -translate-x-1/2 hidden xl:flex flex-col gap-1 items-center justify-center pt-5"
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
    )
}

export default ScrollIndicator