import { useEffect, useState } from "react";
import { Mock_About } from "../constants/Mock_About";
import { Mock_Experience } from "../constants/Mock_Experience";
import { Mock_Projects } from "../constants/Mock_Projects";
import { Mock_Skills } from "../constants/Mock_Skills";
import { Mock_Education } from "../constants/Mock_Education";
import { Mock_Services } from "../constants/Mock_Services";
import { Mock_Testimonials } from "../constants/Mock_Testimonials";
interface MockData {
  about: typeof Mock_About;
  skills: typeof Mock_Skills;
  projects: typeof Mock_Projects;
  experience: typeof Mock_Experience;
  education: typeof Mock_Education;
  services: typeof Mock_Services;
  testimonials: typeof Mock_Testimonials;
}
export const useMockDataHook = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<string | null>(null);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);
  return {
    data: {
      about: Mock_About,
      skills: Mock_Skills,
      projects: Mock_Projects,
      experience: Mock_Experience,
      education: Mock_Education,
      services: Mock_Services,
      testimonials: Mock_Testimonials,
    } as MockData,
    isLoading,
    isError,
  };
};
