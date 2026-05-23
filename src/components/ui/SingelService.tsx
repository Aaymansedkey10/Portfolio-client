import { IService } from '@/src/models/services'
import React from 'react'

const SingelService = ({ service }: { service: IService }) => {
   const { description, techStack, title, icon: Icon } = service;
   return (
      <div
         className="relative flex flex-col justify-between h-full group w-full border border-primary/25 rounded-xl p-5 bg-secondary/10 hover:shadow-2xl hover:shadow-primary/5 hover:border-primary/20 hover:-translate-y-1 transition-all duration-500 cursor-pointer overflow-hidden isolation-auto"
      >
         <div className="absolute inset-0 w-0 bg-linear-to-r from-primary/5 to-primary/20 transition-all duration-750 ease-out group-hover:w-full z-0" />

         <div className="absolute top-0 left-1/2 h-0.5 w-0 bg-linear-to-r from-primary via-primary to-primary transition-all duration-500 group-hover:left-0 group-hover:w-full z-10" />


         <div className="relative z-10 space-y-4">
            <div className="inline-flex items-center justify-center p-3 rounded-xl bg-primary/10 border border-primary/20 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(var(--primary),0.4)]">
               <Icon />
            </div>

            <h4 className="text-xl lg:text-2xl font-bold font-sans tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
               {title}
            </h4>

            <p className="text-[14px] lg:text-[15px] text-muted-foreground/90 leading-relaxed font-sans">
               {description}
            </p>
         </div>

         <div className="relative z-10 flex flex-wrap gap-2 mt-4 border-t border-border/30">
            {techStack.map((tech, i) => (

               <span
                  key={i}
                  className="inline-flex items-center gap-1.5 px-3 py-1 bg-secondary/40 border border-border/30 text-muted-foreground/90 text-[11px] font-mono font-medium rounded-full transition-all duration-300 group-hover:border-primary/20 group-hover:text-foreground group-hover:bg-primary/5"
               >
                  <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/40 group-hover:bg-primary transition-all duration-300 shadow-[0_0_6px_transparent] group-hover:shadow-primary/50" />
                  {tech}
               </span>
            ))}
         </div>

      </div>
   )
}

export default SingelService