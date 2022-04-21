import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import * as actions from '../state/action-creators';

const RandomCocktail = props => {
  console.log(props);
  const drink = props.cocktails;

  useEffect(() => {
    props.loadRandomCocktail();
  }, []);

  console.log(drink.ingredients)

  return (
    <div>
      <h1>Random Cocktail</h1>
      <h2>{drink.drinkName}</h2>
      {drink.alternativeName ? <h3>`${drink.alternativeName}`</h3> : ''}
      <img src={`${drink.thumbnail}/preview`} />
      <ul>
        {
          drink.ingredients
        }
      </ul>
    </div>
  )
}

export default connect(st => st, actions)(RandomCocktail);