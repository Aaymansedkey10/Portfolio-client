import { StrapiImage } from "./globals";

export interface BioChild {
  type: "text";
  text?: string;
  bold?: boolean;
  italic?: boolean;
  children?: BioChild[];
}

export interface BioBlock {
  type: "paragraph" | string;
  format?: "ordered" | "unordered";
  children: BioChild[];
}

export interface AboutData {
  id: number;
  documentId: string;
  full_name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  titles: string[];
  sub_bio: BioBlock[];
  bio: BioBlock[];
  frameworks: string[];
  cv_url: string;
  avilable_to_work: boolean;
  profile_photo: StrapiImage;
}
