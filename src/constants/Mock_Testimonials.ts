import { ITestimonial } from "../models/Testimonial";

export const Mock_Testimonials: ITestimonial[] = [
  {
    id: 1,
    name: "Ahmed Mansour",
    role: "Product Manager",
    company: "Retail E-Commerce Platform",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&h=200&q=80", // Premium Professional Avatar
    content:
      "Ayman worked with us as a professional React and Next.js developer. The Admin Dashboard he developed was not only incredibly fast but also a pleasure to use. His precise handling of State Management reduced bugs to nearly zero. I highly recommend him for any project that demands clean code and peak performance.",
    tags: ["Next.js", "Dashboard", "State Management"],
  },
  {
    id: 2,
    name: "Sara Al-Khalidi",
    role: "Founder",
    company: "Fashion Brand Startup",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&h=200&q=80", // Female Founder Avatar
    content:
      "We developed a full-scale e-commerce store with Ayman, and the results were stunning. The page loading speed on mobile was exceptional, and we noticed an immediate improvement in our conversion rates right after launch. He genuinely understands how to translate design into seamless, interactive code and cares about the finest details of UX.",
    tags: ["E-Commerce", "UX/UI Conversion", "Mobile Speed"],
  },
  {
    id: 3,
    name: "Mahmoud Reda",
    role: "CTO",
    company: "Tech Solutions Corp",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80", // Tech CTO Avatar
    content:
      "What sets Ayman apart is his obsession with Clean Code. When he delivered the project, the codebase was highly organized, perfectly scalable, and well-documented. He utilized Next.js advanced features (SSR/SSG) masterfully, pushing SEO and performance to the highest level. If you need someone who understands software architecture deeply, don't hesitate to hire him.",
    tags: ["Clean Architecture", "Next.js (SSR/SSG)", "Scalability"],
  },
  {
    id: 4,
    name: "Noura Abdullah",
    role: "UI/UX Designer",
    company: "Freelance / Design Agency",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&h=200&q=80", // Creative Female UI/UX Avatar
    content:
      "I collaborated with him on multiple Landing Pages and Dashboards. He was extremely precise in achieving a Pixel-Perfect implementation of my designs and deeply understood interactive micro-animations. His mastery of Tailwind and modern CSS makes responsive web layouts flow flawlessly. I will absolutely work with him again.",
    tags: ["Pixel Perfect", "Tailwind CSS", "Animations"],
  },
  {
    id: 5,
    name: "Youssef Al-Harthi",
    role: "Entrepreneur",
    company: "Service Business",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&h=200&q=80", // Entrepreneur Avatar
    content:
      "I needed a fast, beautiful landing page to showcase my services. Not only did Ayman deliver it in record time, but he also engineered the booking forms and global state to run flawlessly. Even after handoff, his support was quick and available. He offers the absolute best value in terms of premium quality and execution.",
    tags: ["Landing Page", "Booking Systems", "Fast Delivery"],
  },
];
