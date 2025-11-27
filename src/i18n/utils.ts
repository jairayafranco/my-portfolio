import { ui, defaultLang, routes, showDefaultLang } from './ui';
import type { Language } from '../types';

export function getLangFromUrl(url: URL): Language {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Language;
  return defaultLang;
}

export function useTranslations(lang: Language) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export function useTranslatedPath(lang: Language) {
  return function translatePath(path: string, l: string = lang): string {
    const pathName = path.replaceAll('/', '');
    const hasTranslation =
      defaultLang !== l &&
      routes[l as Language] !== undefined &&
      routes[l as Language][pathName as keyof typeof routes[Language]] !== undefined;

    const translatedPath = hasTranslation
      ? '/' + routes[l as Language][pathName as keyof typeof routes[Language]]
      : path;

    return !showDefaultLang && l === defaultLang
      ? translatedPath
      : `/${l}${translatedPath}`;
  };
}

export function getRouteFromUrl(url: URL): string {
  const pathname = url.pathname;
  const currentLang = getLangFromUrl(url);

  if (currentLang === defaultLang) return pathname;

  const langPrefix = `/${currentLang}`;
  let path = pathname.startsWith(langPrefix) ? pathname.slice(langPrefix.length) : pathname;

  if (!path.startsWith('/')) path = '/' + path;

  const routesForLang = routes[currentLang];
  if (routesForLang) {
    const pathNameClean = path.replaceAll('/', '');
    for (const [key, value] of Object.entries(routesForLang)) {
      if (value === pathNameClean) {
        return `/${key}/`;
      }
    }
  }

  return path;
}
