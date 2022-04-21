import { combineReducers } from 'redux';
import * as types from './action-types';
import mapResponseToDrink from './helpers';

const initialState = {
  id: '',
  drinkName: '',
  alternativeName: '',
  glass: '',
  iba: '',
  instructions: '',
  alcoholic: '',
  thumbnail: '',
  ingredients: [],
  measures: [],
}

function cocktails(cocktailStateSlice = [], action) {
  switch (action.type) {
    case types.LOAD_RANDOM_COCKTAIL_FROM_API:
      return mapResponseToDrink(action.payload);
    default:
      return cocktailStateSlice;
  }
}

export default combineReducers({
  cocktails
})