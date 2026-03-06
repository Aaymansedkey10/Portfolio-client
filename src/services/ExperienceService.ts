import axiosInstance from "@/src/lib/axios";

export const ExperienceServices = {
  getAllExperiences: async () => {
    const { data } = await axiosInstance.get("/experiences?populate=*");
    if (!data || !data.data) return null;
    return data.data;
  },
};
