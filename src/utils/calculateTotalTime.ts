import type { Language } from '../types';

const TIME_LABELS = {
  en: {
    year: 'year',
    years: 'years',
    month: 'month',
    months: 'months',
  },
  es: {
    year: 'año',
    years: 'años',
    month: 'mes',
    months: 'meses',
  },
} as const;

export function calculateTotalTime(
  startDate: string,
  endDate: string,
  lang: Language
): string {
  const start = new Date(lang !== 'en' ? translateMonth(startDate) : startDate);
  const end = new Date(lang !== 'en' ? translateMonth(endDate) : endDate);

  const years = end.getFullYear() - start.getFullYear();
  const months = end.getMonth() - start.getMonth();

  const labels = TIME_LABELS[lang];

  const yearLabel = years === 1 ? labels.year : labels.years;
  const monthLabel = months === 1 ? labels.month : labels.months;

  const yearString = years > 0 ? `${years} ${yearLabel} ` : '';
  const monthString = months > 0 ? `${months} ${monthLabel}` : '';

  return `${yearString}${monthString}`.trim();
}

const MONTH_TRANSLATIONS: Record<string, string> = {
  Ene: 'Jan',
  Feb: 'Feb',
  Mar: 'Mar',
  Abr: 'Apr',
  May: 'May',
  Jun: 'Jun',
  Jul: 'Jul',
  Ago: 'Aug',
  Sep: 'Sep',
  Oct: 'Oct',
  Nov: 'Nov',
  Dic: 'Dec',
};

function translateMonth(date: string): string {
  const [month, year] = date.split(' ');
  const translatedMonth = MONTH_TRANSLATIONS[month] || month;
  return `${translatedMonth} ${year}`;
}
