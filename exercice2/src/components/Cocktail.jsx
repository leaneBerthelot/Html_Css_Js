import React from "react";

const Cocktail = (props) => {
  const cocktail = props.currentCocktail;

  const getIngredients = () => {
    const ingredients = [];
    let i = 1;
    while (null != cocktail["strIngredient" + i] || i > 15) {
      ingredients.push(cocktail["strIngredient" + i]);
      i++;
    }
    return ingredients;
  };

  return (
    <div>
      <h1>{cocktail.strDrink}</h1>
      <p>{cocktail.strCategory}</p>
      <p>{cocktail.strInstructions}</p>
      <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
      {getIngredients().map((ingredient, index) => {
        return (
          <div key={index}>
            <p>{ingredient}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Cocktail;
