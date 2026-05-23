"use client";
import { motion } from "framer-motion";
import { skill } from "@/src/models/skill";
import { SingleSkill } from "../ui";

interface SliderProps {
  items: skill[];
  direction?: "left" | "right";
  speed?: number;
}

export const SkillSlider = ({ items, direction = "left", speed = 60 }: SliderProps) => {
  const duplicatedItems = [...items, ...items, ...items];

  return (
    <div className="relative flex overflow-hidden py-2 select-none skill-slider-container"
      style={{
        maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)'
      }}>
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
        whileHover={{ animationPlayState: "paused" }}
      >
        {duplicatedItems.map((item, index) => (
          <div key={index} className="w-fit shrink-0  hover:paused">
            <SingleSkill {...item} index={index} />
          </div>
        ))}
      </motion.div>
    </div>
  );
};