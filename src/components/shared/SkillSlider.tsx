"use client";
import { motion } from "framer-motion";
import { skill } from "@/src/types/skill";
import { SingleSkill } from "../ui";

interface SliderProps {
  items: skill[];
  direction?: "left" | "right";
  speed?: number;
}

export const SkillSlider = ({ items, direction = "left", speed = 60 }: SliderProps) => {
  const duplicatedItems = [...items, ...items, ...items];

  return (
    <div className="relative flex overflow-hidden py-2 select-none skill-slider-container">
      <motion.div
        className="skill-slider-content flex flex-nowrap gap-3"
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          ease: "linear",
          duration: speed,
          repeat: Infinity,
        }}
      >
        {duplicatedItems.map((item, index) => (
          <div key={index} className="w-fit shrink-0">
            <SingleSkill {...item} index={index} />
          </div>
        ))}
      </motion.div>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-linear-to-r from-background to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-linear-to-l from-background to-transparent z-10" />
    </div>
  );
};