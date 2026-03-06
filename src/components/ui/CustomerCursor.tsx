"use client";
import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

const CustomCursor = () => {
    const [isHovered, setIsHovered] = useState(false);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springConfig = { stiffness: 400, damping: 30, mass: 0.5 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const moveMouse = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener("mousemove", moveMouse);
        const handleHoverStart = () => setIsHovered(true);
        const handleHoverEnd = () => setIsHovered(false);

        const interactiveElements = document.querySelectorAll("a, button, .cursor-pointer");
        interactiveElements.forEach((el) => {
            el.addEventListener("mouseenter", handleHoverStart);
            el.addEventListener("mouseleave", handleHoverEnd);
        });

        return () => {
            window.removeEventListener("mousemove", moveMouse);
        };
    }, [mouseX, mouseY]);

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 w-10 h-10 border border-primary rounded-full pointer-events-none z-9999 hidden md:block"
                style={{
                    x: springX,
                    y: springY,
                    translateX: "-50%",
                    translateY: "-50%",
                    scale: isHovered ? 1.5 : 1,
                    backgroundColor: isHovered ? "hsl(var(--primary) / 0.1)" : "transparent",
                }}
            />

            <motion.div
                className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none z-9999 hidden md:block"
                style={{
                    x: mouseX,
                    y: mouseY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
                    scale: isHovered ? 0 : 1,
                }}
            />
        </>
    );
};

export default CustomCursor;