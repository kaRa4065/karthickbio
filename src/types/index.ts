export interface NavItem {
  label: string;
  href: string;
}

export interface ExperienceRole {
  id: number;
  resp: string;
}

export interface ExperienceItem {
  year: string;
  title: string;
  org: string;
  roles: ExperienceRole[];
  image?: string;
}

export interface EducationItem {
  year: string;
  education: string;
  org: string;
  percent: string;
  image?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  command: string;
  description: string;
  stack: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
