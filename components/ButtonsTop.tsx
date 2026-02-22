"use client";

import { useScroll } from "@/Hooks/useScroll";
import { ArrowBigUp, MoveUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const ButtonsTop = () => {
    const { scrollTo } = useScroll();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 250) setIsVisible(true);
            else setIsVisible(false);
        };
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="fixed bottom-5 left-6 flex flex-col items-center justify-center gap-3 z-50"
                >
                    <button
                        className="bg-primary p-3 rounded-full text-white shadow-lg hover:bg-primary/90 transition-all active:scale-90 cursor-pointer"
                        onClick={() => scrollTo("home")}
                    >
                        <ArrowBigUp size={24} />
                    </button>
                    <button
                        className="bg-primary p-3 rounded-full text-white shadow-lg hover:bg-primary/90 transition-all active:scale-90 cursor-pointer"
                    >
                        <MoveUp size={24} />
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ButtonsTop;