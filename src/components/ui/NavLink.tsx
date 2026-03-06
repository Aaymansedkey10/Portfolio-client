"use client";
import { useScroll } from "@/src/Hooks/useScroll";
import { NavLinkType } from "@/src/types/nav";
import {
  motion,
  MotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from "framer-motion";

import { useRef, useState } from "react";

const NavLink = ({
  link,
  mouseX,
  mobileBar,
}: {
  link: NavLinkType;
  mouseX: MotionValue<number>;
  mobileBar: boolean;
}) => {
  const { scrollTo } = useScroll();
  const ref = useRef<HTMLLIElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const scaleTransform = useTransform(distance, [-120, 0, 120], [1, 1.2, 1]);
  const yTransform = useTransform(distance, [-120, 0, 120], [0, -10, 0]);
  const scaleSpring = useSpring(scaleTransform, {
    stiffness: 300,
    damping: 25,
  });
  const ySpring = useSpring(yTransform, { stiffness: 300, damping: 25 });

  const scale = mobileBar ? 1 : scaleSpring;
  const y = mobileBar ? 0 : ySpring;
  const handleClick = () => {
    if (link.label === "Resume") {
      // لو ريزوميه يفتح في صفحة جديدة
      window.open(link.href, "_blank", "noopener,noreferrer");
    } else {
      // لو سكشن داخلي يعمل Scroll
      scrollTo(link.href);
    }
  };
  return (
    <motion.li
      ref={ref}
      style={{ scale, y }}
      onClick={() => handleClick()}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={mobileBar ? { scale: 1.1 } : { scale: 1.1 }}
      aria-label={link.label}
      className="
                relative
                w-11 h-11 rounded-full bg-secondary border border-border
                flex items-center justify-center text-muted-foreground
                hover:bg-primary hover:text-white cursor-pointer
                transition-colors
            "
    >
      <AnimatePresence>
        {isHovered && link.label && (
          <motion.div
            initial={{ opacity: 0, y: 10, x: "-50%" }}
            animate={{ opacity: 1, y: -45, x: "-50%" }}
            exit={{ opacity: 0, y: 10, x: "-50%" }}
            className="absolute px-3 py-1 rounded-md bg-primary text-white text-xs font-medium border shadow-md whitespace-nowrap pointer-events-none capitalize  left-13 -translate-x-1/2"
          >
            {link.label}
          </motion.div>
        )}
      </AnimatePresence>

      {link.icon}
    </motion.li>
  );
};

export default NavLink;
