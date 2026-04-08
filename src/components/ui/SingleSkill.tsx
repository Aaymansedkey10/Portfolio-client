import { skill } from "@/src/types/skill";
import Image from "next/image";
interface SingleSkillProps extends skill {
    index: number;
}

const SingleSkill = ({ label, icon, index }: SingleSkillProps) => {
    return (
        <div
            className="flex items-center gap-1 lg:gap-2 bg-secondary/20 text-secondary-foreground lg:px-4 p-3 rounded-2xl cursor-pointer font-semibold border border-border/50 transition-all duration-500
                backdrop-blur-sm hover:bg-secondary hover:text-secondary-foreground/90 hover:scale-105 hover:shadow-lg hover:shadow-primary/5 hover:border-primary/30 active:scale-95 w-fit group"
        >
            {icon && (
                <div className="shrink-0 transition-transform duration-300 group-hover:rotate-12">
                    <Image
                        width={24}
                        height={24}
                        src={icon.url}
                        alt={label}
                        priority={index == 0}
                        className="w-5 h-5 lg:w-6 lg:h-6 object-contain"
                    />
                </div>
            )}

            <span
                className="text-[12px] lg:text-[15px] leading-tight overflow-hidden whitespace-nowrap 
                max-w-0 opacity-0 group-hover:max-w-[200px] group-hover:opacity-100 group-hover:ml-1
                transition-all duration-500 ease-in-out"
                title={label}
            >
                {label}
            </span>
        </div>
    );
};

export default SingleSkill;
