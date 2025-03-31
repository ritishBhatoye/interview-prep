export interface exploreCategoryDataType {
  id: number;
  icon: string;
  category: string;
  totalJobs: number;
}

//featureCardDataType

export interface FeatureCardDataType {
  id: number;
  jobRole: string;
  company: string;
  companyDescription: string;
  logo: string;
  location: string;
  tags: string[];
  salary: string;
  type: string;
}
