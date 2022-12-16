import React from "react";
import RecipeCard from "./RecipeCard";

const RecipesList = (props) => {
  return (
    <div className="result">
      {props.recipes.map((recipe) => (
        <RecipeCard key={recipe.idMeal} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipesList;
