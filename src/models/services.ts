import { LucideIcon } from "lucide-react";

export interface IService {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  techStack: string[];
}
