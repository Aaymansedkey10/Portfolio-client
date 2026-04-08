import { useEffect, useState } from "react";
import { Mock_About } from "../constants/Mock_About";
import { Mock_Experience } from "../constants/Mock_Experience";
import { Mock_Projects } from "../constants/Mock_Projects";
import { Mock_Skills } from "../constants/Mock_Skills";
interface MockData {
  about: typeof Mock_About;
  skills: typeof Mock_Skills;
  projects: typeof Mock_Projects;
  experience: typeof Mock_Experience;
}
export const useMockDataHook = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<string | null>(null);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  return {
    data: {
      about: Mock_About,
      skills: Mock_Skills,
      projects: Mock_Projects,
      experience: Mock_Experience,
    } as MockData,
    isLoading,
    isError,
  };
};
