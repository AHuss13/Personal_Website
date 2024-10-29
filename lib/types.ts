export interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  image?: string;
}

export interface ProjectCategories {
  web: Project[];
  modeling: Project[];
  misc: Project[];
}
