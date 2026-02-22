"use client"
import { CheckCircle2, Calendar, Building2 } from 'lucide-react'
import ExperienceAnimation from './animations/ExperinceAnimation';

interface ExperienceProps {
    role: string;
    company: string;
    period: string;
    description: string[];
}

const SingleExperience = ({ role, company, period, description }: ExperienceProps) => {
    return (
        <ExperienceAnimation>
            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 py-2 group w-full">
                <div className="lg:col-span-4 flex flex-col space-y-3">
                    <div className="flex items-center gap-2 text-primary font-bold tracking-widest uppercase text-xs">
                        <Calendar size={14} className="shrink-0" />
                        <span>{period}</span>
                    </div>
                    <h5 className="text-2xl text-foreground font-extrabold tracking-tight leading-tight">
                        {role}
                    </h5>
                    <div className="flex items-center gap-2 text-secondary-foreground/80 font-semibold italic">
                        <Building2 size={16} className="text-primary/70 shrink-0" />
                        <h6 className="text-sm">{company}</h6>
                    </div>
                </div>

                <div className="lg:col-span-8 relative">
                    <div className="hidden lg:block absolute -left-5 top-2 bottom-2 w-px bg-linear-to-b from-border via-primary/30 to-transparent" />

                    <ul className="space-y-4">
                        {description.map((item, index) => (
                            <li
                                key={index}
                                className="flex gap-3 text-muted-foreground leading-relaxed hover:text-foreground transition-colors duration-300 group/item cursor-pointer"
                            >
                                <CheckCircle2
                                    size={18}
                                    className="text-primary/60 group-hover/item:text-primary shrink-0 mt-1 transition-transform group-hover/item:scale-110"
                                />
                                <span className="text-[15px]">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </ExperienceAnimation>
    )
}

export default SingleExperience