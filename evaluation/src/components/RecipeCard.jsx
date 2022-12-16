import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipeCard">
      <h2>{recipe.strMeal}</h2>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      <p>{recipe.strCategory}</p>
      <Link to={"/Recipes/" + recipe.idMeal}>Voir plus</Link>
    </div>
  );
};

export default RecipeCard;
