import CURD from "@/assets/projects/CURD/cover.webp"
import Eyouth from "@/assets/projects/Eyouth/Eyouth_main.webp"
import Furni from "@/assets/projects/Furni/Furni_main.webp"
import Martfury from "@/assets/projects/Martfury/Martfury_main.webp"
import QuizApp from "@/assets/projects/Quiz-app/cover.webp"
import QuranApp from "@/assets/projects/Quran-app/cover.webp"
import Shapely from "@/assets/projects/shapely/cover.webp"
import { StaticImageData } from "next/image"

type singelTech = {
  techTitle: string;
  image: string;
};

type singleWorkProps = {
  title: string;
  banner: StaticImageData;
  technologies: singelTech[];
  github: string;
  live: string;
};

export const projects: singleWorkProps[] = [
  {
    title: "Admin Dashboard",
    banner: CURD,
    github: "https://github.com/aymansedkey10", // [cite: 41]
    live: "https://github.com/aymansedkey10",
    technologies: [
      { techTitle: "React", image: "https://skillicons.dev/icons?i=react" }, // [cite: 42]
      { techTitle: "Redux", image: "https://skillicons.dev/icons?i=redux" }, // [cite: 42]
      { techTitle: "Bootstrap", image: "https://skillicons.dev/icons?i=bootstrap" }, // [cite: 42]
      { techTitle: "Axios", image: "https://skillicons.dev/icons?i=postman" } // [cite: 42]
    ]
  },
  {
    title: "Quran Reader App",
    banner: QuranApp,
    github: "https://github.com/aymansedkey10", // [cite: 45]
    live: "https://github.com/aymansedkey10",
    technologies: [
      { techTitle: "React", image: "https://skillicons.dev/icons?i=react" }, // [cite: 46]
      { techTitle: "Redux", image: "https://skillicons.dev/icons?i=redux" }, // [cite: 46]
      { techTitle: "Bootstrap", image: "https://skillicons.dev/icons?i=bootstrap" } // [cite: 46]
    ]
  },
  {
    title: "React E-Commerce",
    banner: Martfury, // مستوحى من Martfury في ملفاتك [cite: 49]
    github: "https://github.com/aymansedkey10", // [cite: 49]
    live: "https://github.com/aymansedkey10",
    technologies: [
      { techTitle: "React", image: "https://skillicons.dev/icons?i=react" }, // [cite: 50]
      { techTitle: "Redux", image: "https://skillicons.dev/icons?i=redux" }, // [cite: 50]
      { techTitle: "EmailJS", image: "https://skillicons.dev/icons?i=gmail" }, // [cite: 52]
      { techTitle: "Bootstrap", image: "https://skillicons.dev/icons?i=bootstrap" } // [cite: 50]
    ]
  },
  {
    title: "Furni - Furniture Store",
    banner: Furni, // [cite: 63]
    github: "https://github.com/aymansedkey10", // [cite: 63]
    live: "https://github.com/aymansedkey10",
    technologies: [
      { techTitle: "HTML5", image: "https://skillicons.dev/icons?i=html" }, // [cite: 64]
      { techTitle: "CSS3", image: "https://skillicons.dev/icons?i=css" }, // [cite: 64]
      { techTitle: "JSON", image: "https://skillicons.dev/icons?i=js" } // [cite: 64]
    ]
  },
  {
    title: "Weather App",
    banner: QuizApp, // يمكن استبداله بصورة الطقس [cite: 53]
    github: "https://github.com/aymansedkey10", // [cite: 53]
    live: "https://github.com/aymansedkey10",
    technologies: [
      { techTitle: "JavaScript", image: "https://skillicons.dev/icons?i=js" }, // [cite: 54]
      { techTitle: "Rest API", image: "https://skillicons.dev/icons?i=html" }, // [cite: 54]
      { techTitle: "CSS3", image: "https://skillicons.dev/icons?i=css" } // [cite: 54]
    ]
  },
  {
    title: "MCIT Project",
    banner: Eyouth, // [cite: 66]
    github: "https://github.com/aymansedkey10", // [cite: 66]
    live: "https://github.com/aymansedkey10",
    technologies: [
      { techTitle: "Swiper.js", image: "https://skillicons.dev/icons?i=js" }, // [cite: 67]
      { techTitle: "HTML5", image: "https://skillicons.dev/icons?i=html" }, // [cite: 67]
      { techTitle: "CSS3", image: "https://skillicons.dev/icons?i=css" } // [cite: 67]
    ]
  },
  {
    title: "Shapely Template",
    banner: Shapely, // [cite: 74]
    github: "https://github.com/aymansedkey10", // [cite: 74]
    live: "https://github.com/aymansedkey10",
    technologies: [
      { techTitle: "Bootstrap", image: "https://skillicons.dev/icons?i=bootstrap" }, // [cite: 75]
      { techTitle: "HTML5", image: "https://skillicons.dev/icons?i=html" }, // [cite: 75]
      { techTitle: "CSS3", image: "https://skillicons.dev/icons?i=css" } // [cite: 75]
    ]
  },
  {
    title: "Dynamic Form Builder",
    banner: Shapely, // استبدلها بالصورة المستوردة
    github: "https://github.com/aymansedkey10",
    live: "",
    technologies: [
      { techTitle: "React 19", image: "https://skillicons.dev/icons?i=react" },
      { techTitle: "TypeScript", image: "https://skillicons.dev/icons?i=ts" },
      { techTitle: "Zustand", image: "https://skillicons.dev/icons?i=js" }, // Zustand أيقونة تقريبية
      { techTitle: "Tailwind v4", image: "https://skillicons.dev/icons?i=tailwind" },
      { techTitle: "Vite", image: "https://skillicons.dev/icons?i=vite" }
    ]
  },
  {
    title: "Recipe Management App",
    banner: Shapely,
    github: "https://github.com/aymansedkey10",
    live: "",
    technologies: [
      { techTitle: "React 19", image: "https://skillicons.dev/icons?i=react" },
      { techTitle: "TypeScript", image: "https://skillicons.dev/icons?i=ts" },
      { techTitle: "Zustand", image: "https://skillicons.dev/icons?i=js" },
      { techTitle: "SweetAlert2", image: "https://skillicons.dev/icons?i=js" },
      { techTitle: "Tailwind v4", image: "https://skillicons.dev/icons?i=tailwind" }
    ]
  },
  {
    title: "Kingdom Horses",
    banner: Shapely,
    github: "https://github.com/aymansedkey10",
    live: "",
    technologies: [
      { techTitle: "HTML5", image: "https://skillicons.dev/icons?i=html" },
      { techTitle: "CSS3", image: "https://skillicons.dev/icons?i=css" },
      { techTitle: "JavaScript", image: "https://skillicons.dev/icons?i=js" },
      { techTitle: "Bootstrap 5", image: "https://skillicons.dev/icons?i=bootstrap" },
      { techTitle: "Swiper.js", image: "https://skillicons.dev/icons?i=js" }
    ]
  },
];