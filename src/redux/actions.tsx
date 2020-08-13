import * as types from './types';
import { urls } from 'utils';
import { Dispatch } from 'redux';

export const fetchCountries = () => (dispatch: Dispatch) => {
  fetch(urls.COUNTRIES)
  .then((response: Response) => response.json())
  .then((payload: any[]) => dispatch({ type: types.SET_COUNTRIES, payload}))
  .catch(err => console.error(err.message))
}