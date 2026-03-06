import axiosInstance from "@/src/lib/axios";

const ProjectService = {
  getAllProjects: async () => {
    const { data } = await axiosInstance.get("/projects?populate=*");
    if (!data || !data.data) return null;
    return data.data;
  },
};

export default ProjectService;
