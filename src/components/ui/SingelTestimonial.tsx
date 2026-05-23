"use client";

import Image from "next/image";
import { Quote } from "lucide-react";
import { MotionInView } from "../animations/MotionInView";
import { ITestimonial } from "@/src/models/Testimonial";



interface SingleTestimonialProps {
   testimonial: ITestimonial;
   index: number;
}

const SingleTestimonial = ({ testimonial, index }: SingleTestimonialProps) => {
   const { name, role, company, image, content, tags } = testimonial;

   const direction = index % 2 === 0 ? "left" : "right";

   return (
      <MotionInView direction={direction} delay={index * 0.1}>
         <article className="group relative bg-secondary/10 rounded-2xl overflow-hidden border border-secondary transition-all duration-500 p-3 h-80 shadow-xl hover:shadow-primary/5 hover:border-primary/20">

            <div className="absolute inset-0 w-0 bg-linear-to-r from-primary/5 to-primary/20 transition-all duration-750 ease-out group-hover:w-full z-0" />

            <div className="absolute top-0 left-1/2 h-0.5 w-0 bg-linear-to-r from-primary via-primary to-primary transition-all duration-500 group-hover:left-0 group-hover:w-full z-10" />


            <Quote size={80} className="absolute right-4 bottom-4 text-primary/3 group-hover:text-primary/6 transition-colors duration-500 pointer-events-none z-0" />


            <div className="flex flex-col justify-between h-full">
               <p className="text-muted-foreground text-sm md:text-base leading-relaxed italic font-sans h-42">
                  &ldquo;{content}&rdquo;
               </p>


               <div className="space-y-4 pt-3 border-t border-border/20 mt-6 z-10 h-36">

                  <div className="flex flex-wrap gap-1.5">
                     {tags.map((tag, idx) => (
                        <span
                           key={idx}
                           className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-secondary/40 border border-border/30 text-muted-foreground/80 text-[10px] font-mono rounded-full transition-all duration-300 group-hover:border-primary/20 group-hover:text-foreground"
                        >
                           <span className="w-1 h-1 rounded-full bg-muted-foreground/40 group-hover:bg-primary transition-colors duration-300" />
                           {tag}
                        </span>
                     ))}
                  </div>

                  <div className="flex items-center gap-3">
                     <div className="rounded-full border border-border overflow-hidden bg-secondary/20 shrink-0">
                        <Image
                           src={image || "/placeholder-avatar.png"}
                           alt={name}
                           width={50}
                           height={50}
                           className="object-cover"
                        />
                     </div>
                     <div className="leading-tight">
                        <h4 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                           {name}
                        </h4>
                        <p className="text-[11px] text-muted-foreground font-sans mt-0.5">
                           {role} {company && <span className="text-primary/70">@ {company}</span>}
                        </p>
                     </div>
                  </div>
               </div>
            </div>

         </article>
      </MotionInView>
   );
};

export default SingleTestimonial;