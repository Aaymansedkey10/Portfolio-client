"use client";

import SingleTestimonial from "../ui/SingelTestimonial";
import { useMockDataHook } from "@/src/Hooks/useMockData";
import Loading from "@/src/app/Loading";
import { useCallback, useEffect, useState } from "react";
import SectionTitle from "../shared/SectionTitle";
import { ChevronLeft, ChevronRight } from "lucide-react";


const TestimonialsSection = () => {
   const { data, isError, isLoading } = useMockDataHook()
   const [currentIndex, setCurrentIndex] = useState(0);
   const [visibleSlides, setVisibleSlides] = useState(3);
   const testimonials = data.testimonials;

   useEffect(() => {
      const handleResize = () => {
         if (window.innerWidth < 768) {
            setVisibleSlides(1);
         } else if (window.innerWidth < 1024) {
            setVisibleSlides(2);
         } else {
            setVisibleSlides(3);
         }
      };

      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
   }, []);

   const maxIndex = Math.max(0, testimonials.length - visibleSlides);

   const nextSlide = useCallback(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
   }, [maxIndex]);

   const prevSlide = () => {
      setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
   };

   if (isError && (!data.testimonials || data.testimonials.length === 0)) {
      throw new Error("API Limit Reached and no Mock Data found");
   }

   if (isLoading && !data.testimonials) return <Loading />;
   return (
      <section id="testimonials" className="w-full container px-3 lg:px-10 relative overflow-hidden">
         <div className="max-w-7xl mx-auto space-y-6">

            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
               <SectionTitle title="What People Say?." description="Trust began with a project and has not ended." />

               <div className="flex items-center justify-center gap-2">
                  <button
                     onClick={prevSlide}
                     className="p-2 rounded-xl bg-secondary/10 border border-secondary text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-300 active:scale-95"
                     aria-label="Previous Slide"
                  >
                     <ChevronLeft size={18} />
                  </button>
                  <button
                     onClick={nextSlide}
                     className="p-2 rounded-xl bg-secondary/10 border border-secondary text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-300 active:scale-95"
                     aria-label="Next Slide"
                  >
                     <ChevronRight size={18} />
                  </button>
               </div>
            </div>

            <div className="w-full overflow-hidden relative">
               <div
                  className="flex transition-transform duration-500 ease-out will-change-transform"
                  style={{
                     transform: `translateX(-${currentIndex * (100 / visibleSlides)}%)`,
                     width: `${(testimonials.length / visibleSlides) * 100}%`
                  }}
               >
                  {testimonials.map((testimonial, idx) => (
                     <div
                        key={testimonial.id}
                        className="px-3 h-full"
                        style={{ width: `${100 / testimonials.length}%` }}
                     >
                        <SingleTestimonial testimonial={testimonial} index={idx} key={testimonial.id} />
                     </div>
                  ))}
               </div>
            </div>

            <div className="flex items-center justify-center gap-1.5 pt-4">
               {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                  <button
                     key={idx}
                     onClick={() => setCurrentIndex(idx)}
                     className={`h-1.5 rounded-full transition-all duration-300 ${currentIndex === idx
                        ? "bg-primary w-6"
                        : "bg-muted-foreground/30 w-1.5 hover:bg-muted-foreground/60"
                        }`}
                     aria-label={`Go to slide ${idx + 1}`}
                  />
               ))}
            </div>

         </div>
      </section>
   );
};

export default TestimonialsSection;