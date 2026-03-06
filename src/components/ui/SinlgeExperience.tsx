import { CheckCircle2, Calendar, Building2 } from 'lucide-react'
import { experince } from '@/types/experience';
import { MotionInView } from '../animations/MotionInView';

const SingleExperience = ({ job_title, company_name, is_current, end_date, start_date, job_role }: experince) => {
    return (
        <>
            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 py-2 group w-full border shadow-primary/20 border-secondary rounded-lg p-6 lg:p-10 bg-secondary/10 hover:bg-secondary/50 hover:shadow-md transition-all duration-300 cursor-pointer">
                <div className="lg:col-span-3 border-b lg:border-b-0 border-primary/20 pb-4 lg:pb-0">
                    <MotionInView direction="left">
                        <div className="flex flex-col items-start justify-baseline gap-3">
                            <div className="flex items-center gap-2">
                                <div className="flex items-center gap-2 text-primary font-bold tracking-widest uppercase text-xs">
                                    <Calendar size={14} className="shrink-0" />
                                    <span>{new Date(start_date).toLocaleDateString()}</span>
                                </div>
                                <div className="w-2.5 h-0.5 bg-primary rounded-full" />
                                {
                                    is_current ? (
                                        <div className="flex items-center gap-2 text-primary font-bold tracking-widest uppercase text-xs">
                                            <Calendar size={14} className="shrink-0" />
                                            <span>Present</span>
                                        </div>
                                    ) : (
                                        <div className="flex items-center gap-2 text-primary font-bold tracking-widest uppercase text-xs">
                                            <Calendar size={14} className="shrink-0" />
                                            <span>{new Date(end_date).toLocaleDateString()}</span>
                                        </div>)
                                }

                            </div>
                            <h5 className="text-xl lg:text-2xl text-foreground font-extrabold tracking-tight leading-tight">
                                {job_title}
                            </h5>
                            <div className="flex items-center gap-2 text-secondary-foreground/80 font-semibold italic">
                                <Building2 size={16} className="text-primary/70 shrink-0" />
                                <h6 className="text-sm">{company_name}</h6>
                            </div>
                        </div>
                    </MotionInView>
                </div>
                <div className="lg:col-span-9 relative">
                    <MotionInView direction="right">
                        <div className="hidden lg:block absolute -left-8 top-0 bottom-0 w-px bg-linear-to-b from-primary/50 to-transparent" />
                        {/* <div className="block lg:hidden absolute left-0 top-0 bottom-0 h-px w-full bg-linear-to-b from-primary/50 to-transparent" /> */}
                        <ul className="flex flex-col items-start justify-baseline gap-3 mt-3 lg:mt-0">
                            {job_role.map((item, index) => (
                                <li
                                    key={index}
                                    className="flex gap-3 text-muted-foreground leading-relaxed hover:text-foreground transition-colors duration-300 group/item cursor-pointer"
                                >
                                    <CheckCircle2
                                        size={18}
                                        className="text-primary/60 group-hover/item:text-primary shrink-0 mt-1 transition-transform group-hover/item:scale-110"
                                    />
                                    <span className="text-[15px]">{item.role}</span>
                                </li>
                            ))}
                        </ul>
                    </MotionInView>
                </div>
            </div>
        </>
    )
}

export default SingleExperience