import { skill } from "@/src/models/skill";
import Image from "next/image";

interface SingleSkillProps extends skill {
    index: number;
}

const SingleSkill = ({ label, icon, index }: SingleSkillProps) => {
    return (
        <div
            className="flex flex-col items-center justify-center gap-3 bg-secondary/30 text-foreground p-4 lg:p-5 rounded-2xl cursor-pointer border border-border transition-all duration-300
                hover:bg-secondary hover:border-primary/40 hover:scale-105 hover:shadow-xl hover:shadow-primary/5 active:scale-95 w-24 h-24 lg:w-28 lg:h-28 group text-center relative overflow-hidden"
        >
            {/* <div className="absolute top-0 left-1/2 h-0.5 w-0 bg-primary rounded-3xl transition-all duration-300 group-hover:left-0 group-hover:w-full"></div> */}
            <div className="absolute inset-0 w-0 bg-linear-to-r from-primary/5 to-primary/20 transition-all duration-750 ease-out group-hover:w-full z-0" />

            <div className="absolute top-0 left-1/2 h-0.5 w-0 bg-linear-to-r from-primary via-cyan-400 to-primary transition-all duration-50 group-hover:left-0 group-hover:w-full z-10" />
            {icon && (
                <div className="shrink-0 transition-transform duration-300 group-hover:scale-110">
                    <Image
                        width={32}
                        height={32}
                        src={icon.url}
                        alt={label}
                        priority={index < 4}
                        unoptimized
                        className="w-7 h-7 lg:w-8 lg:h-8 object-contain filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                    />
                </div>
            )}
            <span
                className="text-[10px] lg:text-[12px] font-medium tracking-wide text-muted-foreground group-hover:text-primary transition-colors duration-300 block truncate w-full"
                title={label}
            >
                {label}
            </span>
        </div>
    );
};

export default SingleSkill;