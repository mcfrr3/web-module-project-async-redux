import React from 'react';
import '../App.css';

import RandomCocktail from './RandomCocktail';

function App() {
  return (
    <div className="App">
      Async Redux Project
      <div>Generate Random Cocktail</div>
      <RandomCocktail />
    </div>
  );
}

export default App;