export const SET_COUNTRIES = 'SET_COUNTRIES';

export type IState = {
  countries: { [country: string]: any }
};

interface ISetCountries {
  type: typeof SET_COUNTRIES
  payload: any[]
}

export type ITypes = ISetCountries;