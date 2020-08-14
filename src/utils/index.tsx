import * as _urls from './urls';

export const urls = _urls;

export const addCommas = (x: string) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}