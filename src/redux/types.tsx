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


export type ITypes = ISetCountries | ISetTotal;

export type IState = {
  countries: { [country: string]: any },
  total: any
};