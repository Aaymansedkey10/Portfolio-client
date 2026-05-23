export interface Role {
  id: number;
  role: string;
  __component: string;
}

export interface Mock_ExperinceInterface {
  data: experience[];
}
export interface experience {
  id: number;
  is_current: boolean;
  company_name: string;
  job_title: string;
  documentId: string;
  start_date: string;
  end_date: string;
  createdAt: string;
  job_role: Role[];
  publishedAt: string;
  updatedAt: string;
}
