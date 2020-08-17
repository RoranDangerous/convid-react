export const SET_COUNTRIES = 'SET_COUNTRIES';

interface ISetCountries {
  type: typeof SET_COUNTRIES
  payload: any[]
}


export const SET_TOTAL = 'SET_TOTAL';

interface ISetTotal {
  type: typeof SET_TOTAL,
  payload: any
}


export const TOGGLE_FULL = 'TOGGLE_FULL';

interface IToggleFull {
  type: typeof TOGGLE_FULL
}


export const SET_COUNTRY = 'SET_COUNTRY';

interface ISetCountry {
  type: typeof SET_COUNTRY,
  payload: string | null
}


export type ITypes = ISetCountries | ISetTotal | IToggleFull | ISetCountry;

export type IState = {
  countries: { [country: string]: any },
  total: any,
  fullScreen: boolean,
  selectedCountry: string | null
};