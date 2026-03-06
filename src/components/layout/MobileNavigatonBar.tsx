"use client";
import { motion, useMotionValue } from "framer-motion";
import { NavLinks } from "@/src/assets/NavLinks"
import NavLink from "../ui/NavLink";

const MobileNavigatonBar = () => {
    const mouseX = useMotionValue(Infinity);
    return (
        <motion.ul
            initial={{ opacity: 0, y: 80, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 80, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            onMouseMove={(e) => mouseX.set(e.pageX)}
            onMouseLeave={() => mouseX.set(Infinity)}
            className="
        fixed bottom-20 right-4 z-50
        flex flex-col gap-3
        bg-background/80 backdrop-blur
        border border-primary
        p-3 rounded-2xl
        shadow-xl
      "
        >
            {NavLinks.map((item) => (
                <NavLink
                    key={item.id}
                    link={item}
                    mouseX={mouseX}
                    mobileBar={true}
                />
            ))}
        </motion.ul>
    )
}

export default MobileNavigatonBar