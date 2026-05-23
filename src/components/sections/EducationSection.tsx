"use client";

import Title from "../shared/SectionTitle";
import { Calendar, School, Award } from "lucide-react";
import { MotionInView } from "../animations/MotionInView";
import Loading from "@/src/app/Loading";
import { useMockDataHook } from "@/src/Hooks/useMockData";
import { Mock_Education } from "@/src/constants/Mock_Education";
import { EducationType } from "@/src/models/Education";


const EducationSection = () => {
   const { data, isLoading, isError } = useMockDataHook();

   if (isLoading && !data) return <Loading />;

   const educationList: EducationType[] = data?.education || Mock_Education;

   if (isError && (!data || !data.education)) {
      throw new Error("Failed to load Education Data");
   }

   return (
      <section id="education" className="py-20 lg:py-28 relative overflow-hidden bg-background">
         <Title title="education." />

         <div className="max-w-5xl mx-auto px-6 mt-12 lg:mt-16 flex flex-col gap-6 lg:gap-8">
            {educationList.map((edu) => (
               <div
                  key={edu.id}
                  className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 py-2 group w-full border border-secondary rounded-lg p-6 lg:p-10 bg-secondary/10 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 transition-all duration-500 cursor-pointer overflow-hidden isolation-auto"
               >

                  <div className="absolute inset-0 w-0 bg-linear-to-r from-primary/5 to-primary/20 transition-all duration-750 ease-out group-hover:w-full z-0" />

                  <div className="absolute top-0 left-1/2 h-0.5 w-0 bg-linear-to-r from-primary via-cyan-400 to-primary transition-all duration-500 group-hover:left-0 group-hover:w-full z-10" />

                  <div className="lg:col-span-4 border-b lg:border-b-0 border-primary/20 pb-4 lg:pb-0 relative z-10">
                     <MotionInView direction="left">
                        <div className="flex flex-col items-start gap-3">

                           <div className="flex items-center gap-2">
                              <div className="flex items-center gap-2 text-primary font-bold tracking-widest uppercase text-xs">
                                 <Calendar size={14} className="shrink-0" />
                                 <span>{new Date(edu.start_date).toLocaleDateString(undefined, { year: 'numeric', month: 'short' })}</span>
                              </div>
                              <div className="w-2.5 h-0.5 bg-primary rounded-full opacity-60" />
                              {edu.is_current ? (
                                 <div className="flex items-center gap-2 text-primary font-bold tracking-widest uppercase text-xs bg-primary/10 px-2 py-0.5 rounded-full animate-pulse">
                                    <span>Present</span>
                                 </div>
                              ) : (
                                 <div className="flex items-center gap-2 text-muted-foreground font-bold tracking-widest uppercase text-xs">
                                    <span>{new Date(edu.end_date).toLocaleDateString(undefined, { year: 'numeric', month: 'short' })}</span>
                                 </div>
                              )}
                           </div>

                           <div className="flex items-center gap-2 text-foreground font-extrabold text-lg lg:text-xl tracking-tight mt-1">
                              <School size={18} className="text-primary/80 shrink-0" />
                              <h5 className="leading-tight group-hover:text-primary transition-colors duration-300">
                                 {edu.institution}
                              </h5>
                           </div>
                        </div>
                     </MotionInView>
                  </div>

                  <div className="lg:col-span-8 relative z-10">
                     <MotionInView direction="right">
                        <div className="hidden lg:block absolute -left-5 top-0 bottom-0 w-px bg-linear-to-b from-border via-primary/20 to-transparent" />

                        <div className="flex flex-col gap-2 mt-2 lg:mt-0">
                           <div className="flex flex-wrap items-center justify-between gap-3">

                              <h4 className="text-xl font-bold text-foreground font-sans tracking-tight">
                                 <span className="text-muted-foreground font-medium">{edu.field_of_study}</span>
                              </h4>

                              {edu.grade && (
                                 <div className="flex items-center gap-1.5 px-3 py-1 bg-secondary/80 border border-border/60 text-xs font-semibold text-foreground rounded-full shadow-sm group-hover:border-primary/30 transition-colors duration-300">
                                    <Award size={13} className="text-primary" />
                                    <span>Grade: {edu.grade}</span>
                                 </div>
                              )}
                           </div>

                           {edu.description && (
                              <p className="text-[15px] text-muted-foreground/90 leading-relaxed font-sans mt-2">
                                 {edu.description}
                              </p>
                           )}
                        </div>
                     </MotionInView>
                  </div>

               </div>
            ))}
         </div>
      </section>
   );
};

export default EducationSection;