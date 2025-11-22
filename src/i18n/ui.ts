import type { Language } from '../types';

export const languages: Record<Language, string> = {
  en: 'English',
  es: 'Español',
};

export const languagesFlags: Record<Language, string> = {
  en: 'emojione:flag-for-united-kingdom',
  es: 'emojione:flag-for-spain',
};

export const defaultLang: Language = 'en';
export const showDefaultLang = false;

export const ui = {
  en: {
    'sidebar.home': 'Home',
    'sidebar.projects': 'Projects',
    'home.greeting': 'Hey there',
    'home.intro': "I'm",
    'home.recentProjects': 'Recent Projects',
  },
  es: {
    'sidebar.home': 'Inicio',
    'sidebar.projects': 'Proyectos',
    'home.greeting': 'Hola',
    'home.intro': 'Soy',
    'home.recentProjects': 'Proyectos Recientes',
  },
} as const;

export const routes: Record<Language, Record<string, string>> = {
  en: {},
  es: {
    projects: 'proyectos',
  },
};