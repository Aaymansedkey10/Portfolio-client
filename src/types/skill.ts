import { StrapiImage } from "./globals";

export interface skill {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  label: string;
  icon: StrapiImage;
}

export interface ProjectSkill {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  label: string;
}
