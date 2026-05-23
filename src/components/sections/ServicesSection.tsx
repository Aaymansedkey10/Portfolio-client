"use client";

import Title from "../shared/SectionTitle";
import { MotionInView } from "../animations/MotionInView";
import SingelService from "../ui/SingelService";
import { useMockDataHook } from "@/src/Hooks/useMockData";
import Loading from "@/src/app/Loading";

const ServicesSection = () => {

   const { data, isError, isLoading } = useMockDataHook()
   if (isError && (!data.services || data.services.length === 0)) {
      throw new Error("API Limit Reached and no Mock Data found");
   }

   if (isLoading && !data.services) return <Loading />;
   return (
      <section id="services" className="py-20 lg:py-28 relative overflow-hidden bg-background">
         <Title title="my services." />

         <div className="max-w-7xl mx-auto px-6 mt-12 lg:mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
               {data && data.services.map((service, index) => (
                  <MotionInView key={service.id} direction={index % 2 === 0 ? "left" : "right"}>
                     <SingelService service={service} />
                  </MotionInView>
               ))}
            </div>
         </div>
      </section>
   );
};

export default ServicesSection;