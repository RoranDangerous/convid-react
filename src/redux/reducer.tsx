import * as types from './types';


const initialState: types.IState = {
  countries: {},
}

export default (state:types.IState = initialState, action: types.ITypes) => {
  switch(action.type) {
    case types.SET_COUNTRIES:

      let newCountries: { [country: string]: any } = {};
      action.payload.forEach(v => newCountries[v.country] = v)
      return Object.assign({} , state, {
        countries: newCountries
      })
    default:
      return state;
  }
}