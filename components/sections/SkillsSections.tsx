"use client"
import ShowElement from "../animations/ShowElementAnimation"
import SingleSkill from "../SingleSkill"
import Title from "../Title"
import { motion } from "framer-motion"

const skillsData = [
    { label: "JavaScript", icon: "js" },
    { label: "TypeScript", icon: "ts" },
    { label: "React", icon: "react" },
    { label: "Next.js", icon: "nextjs" },
    { label: "Tailwind CSS", icon: "tailwind" },
    { label: "Zustand", icon: "js" },
    { label: "Redux", icon: "redux" },
    { label: "Strapi", icon: "strapi" },
    { label: "Bootstrap", icon: "bootstrap" },
    { label: "Vite", icon: "vite" },
    { label: "Git", icon: "git" },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
}

const SkillsSections = () => {
    return (
        <section id="skills" className="py-20 px-6">
            <Title title="my skills" />
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="max-w-5xl mx-auto flex flex-wrap gap-4 justify-center"
            >
                {skillsData.map((skill, index) => (
                    <SingleSkill key={index} label={skill.label} icon={skill.icon} />
                ))}
            </motion.div>
        </section>
    )
}

export default SkillsSections;