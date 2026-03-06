import { StrapiImage } from "./globals";

export interface ProjectSkill {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  label: string;
}

export interface Project {
  id: number;
  documentId: string;
  title: string;
  github_link: string;
  live_link: string;
  description: string;
  featured: boolean;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  banner: StrapiImage;
  skills: ProjectSkill[];
  images: StrapiImage[];
}
