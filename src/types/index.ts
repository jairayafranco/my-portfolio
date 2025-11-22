export interface Project {
  name: string;
  description: {
    en: string;
    es: string;
  };
  image: string;
  github: string;
  website?: string;
}

export interface Experience {
  name: string;
  from: string;
  to: string;
  where: string;
  description: string;
}

export interface Education {
  name: string;
  from: string;
  to: string;
  where: string;
}

export interface Skill {
  name: string;
  icon: string;
}

export interface SocialItem {
  name: string;
  icon: string;
  link: string;
}

export interface SidebarItem {
  name: string;
  icon: string;
  link: string;
}

export type Language = 'en' | 'es';
