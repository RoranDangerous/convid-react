import * as types from './types';
import { urls } from 'utils';
import { Dispatch } from 'redux';

export const fetchCountries = () => (dispatch: Dispatch) => {
  fetch(urls.COUNTRIES)
  .then((response: Response) => response.json())
  .then((payload: any[]) => dispatch({ type: types.SET_COUNTRIES, payload}))
  .catch(err => console.error(err.message))
}

export const fetchTotal = () => (dispatch: Dispatch) => {
  fetch(urls.TOTAL)
  .then((response: Response) => response.json())
  .then((payload: any) => dispatch({ type: types.SET_TOTAL, payload}))
  .catch(err => console.error(err.message))
}

export const toggleFullScreenMap = () => ({ type: types.TOGGLE_FULL })