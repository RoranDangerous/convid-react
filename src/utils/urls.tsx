export const COUNTRIES = 'https://disease.sh/v3/covid-19/countries?sort=cases';
export const TOTAL = 'https://disease.sh/v3/covid-19/all';
export const HISTORICAL_ALL = 'https://disease.sh/v3/covid-19/historical/all?lastdays=all';
export const HISTORICAL_COUNTRY = (country: string) => `https://disease.sh/v3/covid-19/historical/${country}?lastdays=all`;