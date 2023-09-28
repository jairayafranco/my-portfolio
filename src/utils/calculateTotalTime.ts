export function calculateTotalTime(startDate: string, endDate: string, lang: string) {
    const start = new Date(lang !== "en" ? translateMonth(startDate) : startDate);
    const end = new Date(lang !== "en" ? translateMonth(endDate) : endDate);

    const years = end.getFullYear() - start.getFullYear();
    const months = end.getMonth() - start.getMonth();

    const template = {
        en: {
            year: "year",
            years: "years",
            month: "month",
            months: "months",
        },
        es: {
            year: "año",
            years: "años",
            month: "mes",
            months: "meses",
        },
    }[lang];

    const totalTimeStringYears = `${years > 0 ? years + `${years === 1 ? ` ${template.year} ` : ` ${template.years} `}` : ""}`;
    const totalTimeStringMonths = `${months > 0 ? months + `${months === 1 ? ` ${template.month}` : ` ${template.months}`}` : ""}`;

    return `${totalTimeStringYears}${totalTimeStringMonths}`;
}

function translateMonth(date: string) {
    const [month, year] = date.split(" ");

    const getTranslatedMonth = {
        Ene: "Jan",
        Feb: "Feb",
        Mar: "Mar",
        Abr: "Apr",
        May: "May",
        Jun: "Jun",
        Jul: "Jul",
        Ago: "Aug",
        Sep: "Sep",
        Oct: "Oct",
        Nov: "Nov",
        Dic: "Dec",
    }[month];

    return `${getTranslatedMonth} ${year}`
}
