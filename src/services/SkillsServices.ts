import axiosInstance from "@/src/lib/axios";

const SkillsService = {
  getAllSkills: async () => {
    const { data } = await axiosInstance.get("/skills?populate=*");
    if (!data || !data.data) return null;
    return data.data;
  },
};
export default SkillsService;
