import axiosInstance from "@/src/lib/axios";
import { AboutData } from "@/src/types/about";

export const AboutServices = {
  getAbout: async () => {
    const { data } = await axiosInstance.get("/abouts?populate=*");
    if (!data || !data.data) return null;
    const about: AboutData[] = data.data;
    return about;
  },
};
