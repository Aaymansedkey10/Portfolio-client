"use client";
import { ReactNode } from 'react';
import { motion } from "framer-motion";

const ExperienceAnimation = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -5 }}

      transition={{
        type: "spring",
        stiffness: 200,
        damping: 20
      }}

      className="
        relative w-full overflow-hidden
        bg-card/40 dark:bg-card/20 
        backdrop-blur-xl
        py-8 px-10 rounded-md
        border border-border
        hover:border-primary/40
        hover:shadow-[0_0_20px_rgba(var(--primary),0.1)]
        transition-all duration-500
        group
      "
    >
      <div className="absolute -inset-px bg-linear-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

export default ExperienceAnimation;