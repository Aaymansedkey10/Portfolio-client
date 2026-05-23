"use client";

import { motion, useMotionValue } from "framer-motion";
import { NavLinks } from "@/src/assets/NavLinks";
import { useScroll } from "@/src/Hooks/useScroll";
import ModeToggleButton from "../buttons/ModeToggleButton";

const MobileNavigatonBar = () => {
    const mouseX = useMotionValue(Infinity);
    const { scrollTo } = useScroll();

    const handleClick = (targetId: string) => {
        if (!targetId) return;

        if (targetId.startsWith('https://drive.google.com')) {
            window.open(targetId, "_blank", "noopener,noreferrer");
        } else {
            const cleanId = targetId.replace("#", "").replace("/", "");
            scrollTo(cleanId);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 350, damping: 28 }}
            onMouseMove={(e) => mouseX.set(e.pageX)}
            onMouseLeave={() => mouseX.set(Infinity)}
            className="
                fixed otp-0 right-6 z-50
                flex flex-col gap-4
                bg-background backdrop-blur
                border border-border/40
                p-2.5 rounded-2xl
                min-w-40
                shadow-2xl shadow-primary/5
                overflow-hidden
            "
        >
            {/* قائمة اللينكات الموبايل */}
            <ul className="flex flex-col gap-1 w-full">
                {NavLinks.map((item, index) => (
                    <li
                        key={index}
                        onClick={() => handleClick(item.href)}
                        aria-label={item.label}
                        className="
                            relative group cursor-pointer 
                            text-[15px] font-medium tracking-wide 
                            text-foreground/80 hover:text-primary 
                            px-4 py-2.5 rounded-xl
                            hover:bg-primary/5
                            transition-all duration-300 font-sans 
                            flex items-center justify-start w-full
                        "
                    >
                        <span className="relative z-10">{item.label}</span>
                        <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary rounded-full transition-all duration-300 ease-out group-hover:w-[calc(100%-2rem)]" />
                    </li>
                ))}
            </ul>


            <div className="border-t border-primary/40 my-0.5" />

            <div className="flex items-center justify-center py-1">
                <ModeToggleButton />
            </div>
        </motion.div>
    );
};

export default MobileNavigatonBar;