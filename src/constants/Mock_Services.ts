import { Code2, Cpu, Globe, Server } from "lucide-react";
import { IService } from "../models/services";

export const Mock_Services: IService[] = [
  {
    id: 1,
    title: "Frontend Engineering",
    description:
      "Building high-performance, responsive, and pixel-perfect user interfaces. Expert in state management, rendering optimization, and modern CSS frameworks like Tailwind v4.",
    icon: Code2,
    techStack: ["React.js", "Next.js", "Angular", "TypeScript", "Tailwind CSS"],
  },
  {
    id: 2,
    title: "Backend & API Architecture",
    description:
      "Designing robust, scalable, and secure server-side applications. Implementing clean architecture, role-based access control (RBAC), and efficient database management systems.",
    icon: Server,
    techStack: ["Node.js", "Express", "MongoDB", "Mongoose", "REST APIs"],
  },
  {
    id: 3,
    title: "Full-Stack Web Applications",
    description:
      "Developing end-to-end production-ready applications from absolute scratch. Bridging business logic with high-end user experience for CRMs and E-commerce marketplaces.",
    icon: Globe,
    techStack: ["MERN Stack", "MEAN Stack", "Strapi CMS", "Next.js Auth"],
  },
  {
    id: 4,
    title: "SEO & Performance Optimization",
    description:
      "Optimizing web apps for maximum speed, core web vitals, and search engine visibility. Implementing server-side rendering (SSR) and advanced caching strategies.",
    icon: Cpu,
    techStack: ["SSR / SSG", "Core Web Vitals", "Image Optimization", "SEO Meta"],
  },
];
