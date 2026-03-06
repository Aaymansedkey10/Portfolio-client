
import { skill } from "@/src/types/skill";
import { MotionInView } from "../animations/MotionInView";
import Image from "next/image";
interface SingleSkillProps extends skill {
    direction: "up" | "down" | "left" | "right";
    index: number;
}

const SingleSkill = ({ label, direction = "up", index = 0, icon }: SingleSkillProps) => {
    return (
        <MotionInView direction={direction} delay={index * 0.05}>
            <div className="flex items-center gap-2 lg:gap-3 bg-secondary/20 text-secondary-foreground px-3 lg:px-4 py-3 rounded-2xl cursor-pointer font-semibold border border-border/50 transition-all duration-300
                backdrop-blur-sm hover:bg-secondary hover:text-secondary-foreground/90 hover:scale-105 hover:shadow-lg hover:shadow-primary/5 hover:border-primary/30 active:scale-95
                min-w-0 w-full group"
            >
                {icon && (
                    <div className="shrink-0">
                        <Image
                            width={24}
                            height={24}
                            src={icon.url}
                            alt={label}
                            className="w-5 h-5 lg:w-6 lg:h-6 object-contain"
                        />
                    </div>
                )}

                <span className="text-[12px] lg:text-[15px] leading-tight truncate overflow-hidden whitespace-nowrap" title={label}>
                    {label}
                </span>
            </div>
        </MotionInView>
    );
};

export default SingleSkill;