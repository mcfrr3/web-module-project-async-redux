import * as types from './action-types';
import axios from 'axios';

export const loadRandomCocktail = () => dispatch => {
  axios.get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
  .then(res => {
    dispatch({
      type: types.LOAD_RANDOM_COCKTAIL_FROM_API,
      payload: res.data.drinks[0]
    });
  })
  .catch(err => {
    debugger
  })
}