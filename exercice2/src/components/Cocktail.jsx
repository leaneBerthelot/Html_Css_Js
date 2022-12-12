import React from "react";

const Cocktail = (props) => {
  const randomCocktail = props.currentRandomCocktail;
  return (
    <div>
      <h1>{randomCocktail.strDrink}</h1>
      <p>{randomCocktail.strCategory}</p>
      <p>{randomCocktail.strInstructions}</p>
      <img src={randomCocktail.strDrinkThumb} alt={randomCocktail.strDrink} />
    </div>
  );
};

export default Cocktail;
