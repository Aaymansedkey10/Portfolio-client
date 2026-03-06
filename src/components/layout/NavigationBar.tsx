"use client";
import { useEffect, useState } from "react";
import { NavLinks } from "@/src/assets/NavLinks";
import NavLink from "../ui/NavLink";
import { Menu, X } from "lucide-react";
import { AnimatePresence, useMotionValue } from "framer-motion";
import MobileNavigatonBar from "./MobileNavigatonBar";

const NavigationBar = () => {
  const [open, setOpen] = useState(false);
  const mouseX = useMotionValue(Infinity);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="overflow-hidden">
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-4 right-6 z-60 lg:hidden w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg"
      >
        {open ? <X size={22} color="white" /> : <Menu size={22} color="white" />}
      </button>

      {/* Desktop Bar */}
      <div className="hidden lg:flex fixed bottom-4 left-1/2 -translate-x-1/2 z-50 rounded-full shadow-lg">
        <ul
          onMouseMove={(e) => mouseX.set(e.pageX)}
          onMouseLeave={() => mouseX.set(Infinity)}
          className="flex items-end gap-6 bg-background/80 backdrop-blur px-6 py-4 rounded-full border shadow-2xl"
        >
          {NavLinks.map((item) => (
            <NavLink
              key={item.id}
              link={item}
              mouseX={mouseX}
              mobileBar={false}
            />
          ))}
        </ul>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {open && <MobileNavigatonBar />}
      </AnimatePresence>
    </nav>
  );
};

export default NavigationBar;