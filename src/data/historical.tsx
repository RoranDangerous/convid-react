import { urls } from 'utils';

export const fetch_all = () => fetch(urls.HISTORICAL_ALL).then((response: Response) => response.json())

export const fetch_country = (country: string) => fetch(urls.HISTORICAL_COUNTRY(country)).then((response: Response) => response.json())