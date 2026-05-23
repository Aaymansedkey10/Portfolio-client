export interface EducationType {
  id: number;
  degree: string;
  institution: string;
  field_of_study: string;
  start_date: string;
  end_date: string;
  is_current: boolean;
  grade?: string;
  description?: string;
}
