const trimTheFat = resArray => {
  return resArray.filter(key => {
    return key[1] !== null && key[1] !== '';
  });
}

const mapResponseToVars = res => {
  const resArray = Object.entries(res);
  let ingredients = []; 
  let measures = [];
  trimTheFat(resArray).map(resLine => {
    if (/ingredient/i.test(resLine[0])) {
      ingredients.push(resLine[1]);
    } else if (/measure/i.test(resLine[0])) {
      measures.push(resLine[1]);
    }
  });
  return [ingredients, measures];
}

const mapResponseToDrink = res => {
  const [ingredients, measures] = mapResponseToVars(res);
  return {
    id: res.idDrink,
    drinkName: res.strDrink,
    alternativeName: res.strDrinkAlternate,
    glass: res.strDrinkGlass,
    iba: res.strIBA,
    instructions: res.strInstructions,
    alcoholic: res.strAlcoholic,
    thumbnail: res.strDrinkThumb,
    ingredients: ingredients,
    measures: measures,
  }
}

export default mapResponseToDrink;