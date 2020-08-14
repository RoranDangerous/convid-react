import * as types from './types';


const initialState: types.IState = {
  countries: {},
  total: {},
  fullScreen: true
}

export default (state:types.IState = initialState, action: types.ITypes) => {
  switch(action.type) {
    case types.SET_COUNTRIES:
      let newCountries: { [country: string]: any } = {};

      action.payload.forEach(v => newCountries[v.country] = v);

      return Object.assign({} , state, {
        countries: newCountries
      })
    case types.SET_TOTAL:
      return Object.assign({} , state, {
        total: action.payload
      })
    case types.TOGGLE_FULL:
      return Object.assign({} , state, {
        fullScreen: !state.fullScreen
      })
    default:
      return state;
  }
}