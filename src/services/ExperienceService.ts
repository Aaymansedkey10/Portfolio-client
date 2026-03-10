import axiosInstance from "@/src/lib/axios";

const ExperienceServices = {
  getAllExperiences: async () => {
    const { data } = await axiosInstance.get("/experiences?populate=*");
    if (!data || !data.data) return null;
    return data.data;
  },
};
export default ExperienceServices;
