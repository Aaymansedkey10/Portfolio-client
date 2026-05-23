"use client";

import { useEffect, useState } from "react";
import { NavLinks } from "@/src/assets/NavLinks";
import { Menu, X } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import MobileNavigatonBar from "./MobileNavigatonBar";
import { useScroll } from "@/src/Hooks/useScroll";
import ModeToggleButton from "../buttons/ModeToggleButton";

const NavigationBar = () => {
  const [open, setOpen] = useState(false);
  // const mouseX = useMotionValue(Infinity);
  const { scrollTo } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = NavLinks.map(item =>
      item.href.startsWith('http') ? null : item.href.replace("#", "")
    ).filter(Boolean) as string[];

    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        {
          rootMargin: "-30% 0px -40% 0px",
          threshold: 0
        }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach(obs => obs.disconnect());
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClick = (targetId: string) => {
    if (!targetId) return;

    if (targetId.startsWith('https://drive.google.com')) {
      window.open(targetId, "_blank", "noopener,noreferrer");
    } else {
      const cleanId = targetId.replace("#", "").replace("/", "");
      scrollTo(cleanId);
      setOpen(false);
    }
  };

  return (
    <nav className={`sticky top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
      ? "bg-background/70 backdrop-blur-md border-b border-border/40 shadow-sm"
      : "bg-transparent border-b border-transparent"
      }`}>

      <div className="flex items-center justify-between w-full max-w-7xl mx-auto px-6 lg:px-8 py-4">

        {/* Logo */}
        <button onClick={() => scrollTo("home")} className="group flex items-center gap-1.5 font-mono text-xl font-bold tracking-tight shrink-0">
          <span className="text-primary transition-transform duration-300 group-hover:-translate-x-1">&lt;/&gt;</span>
          <span className="text-foreground">Ayman</span>
          <span className="text-muted-foreground text-sm font-sans font-normal group-hover:text-primary transition-colors duration-300">
            <span className="text-primary">.</span>dev
          </span>
        </button>

        {/* Mobile Toggle Menu */}
        <button
          onClick={() => setOpen(!open)}
          className="flex lg:hidden w-10 h-10 rounded-xl bg-secondary/50 border border-border/60 text-foreground items-center justify-center active:scale-95 transition-all duration-200 cursor-pointer"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-8 py-1">
            {NavLinks.map((item, index) => {
              const currentId = item.href.replace("#", "");
              const isActive = activeSection === currentId;
              return (
                <li
                  key={index}
                  onClick={() => handleClick(item.href)}
                  className={`relative group cursor-pointer text-sm font-medium tracking-wide font-sans py-1.5 transition-all duration-300 ${isActive ? "bg-primary/20 px-5 rounded-xl font-semibold" : "text-foreground/80 hover:text-primary"
                    }`}
                >
                  {item.label}

                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-primary rounded-full transition-all duration-300 ease-out group-hover:w-full" />
                </li>
              );
            })}
          </ul>

          <div className="w-px h-5 bg-border/60" />
          <ModeToggleButton />
        </div>

      </div>

      <AnimatePresence>
        {/* {open && <MobileNavigatonBar activeSection={activeSection} handleClick={handleClick} />} */}
        {open && <MobileNavigatonBar />}
      </AnimatePresence>
    </nav>
  );
};

export default NavigationBar;