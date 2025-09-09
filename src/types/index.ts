export interface ProjectImage {
  id: string;
  title: string;
  imageUrl: string;
}

export interface AboutContent {
  profileImage: string;
  title: string;
  description: string;
  callToAction: string;
}

export interface EducationItem {
  id: string;
  title: string;
  institution: string;
  period: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  position: string;
  period: string;
}

export interface ClientItem {
  id: string;
  name: string;
}

export interface PortfolioData {
  projectImages: ProjectImage[];
  aboutContent: AboutContent;
  education: EducationItem[];
  experience: ExperienceItem[];
  clients: ClientItem[];
}