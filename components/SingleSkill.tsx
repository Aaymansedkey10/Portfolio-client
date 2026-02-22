"use client";
import { motion } from "framer-motion";

type Props = {
    label: string;
    icon?: string;
};

const skillVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

const SingleSkill = ({ label, icon }: Props) => {
    return (
        <motion.div
            variants={skillVariants}
            whileHover={{
                scale: 1.05,
                y: -5,
                backgroundColor: "rgba(var(--primary-rgb), 0.1)",
                borderColor: "hsl(var(--primary))"
            }}
            className="
                flex items-center gap-3
                bg-secondary/40 text-secondary-foreground
                px-5 py-3 rounded-2xl
                cursor-default
                font-semibold text-sm
                shadow-sm border border-border/50
                transition-colors duration-300
                backdrop-blur-sm
            "
        >
            {icon && (
                <img
                    src={`https://skillicons.dev/icons?i=${icon}`}
                    alt={label}
                    className="w-5 h-5 object-contain"
                />
            )}
            <span className="tracking-wide">{label}</span>
        </motion.div>
    );
};

export default SingleSkill;