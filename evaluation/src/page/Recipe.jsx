import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import "./../style/page/Recipe.css";

// créer une page Recette qui affiche le détail d'une recette avec l'id dans la recette

const Recipe = ({ handleSubmit }) => {
  const { id } = useParams();

  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id
      );
      const responseRecipe = await response.json();
      setRecipe(responseRecipe.meals[0]);
    })();
  }, []);

  return (
    <Layout handleSubmit={handleSubmit}>
      <div className="recipe">
        <h1>{recipe.strMeal}</h1>
        <p>{recipe.strCategory}</p>
        <img src={recipe.strMealThumb} alt={recipe.strMeal} />
        <a href={recipe.strYoutube}>Voir la recette sur youtube</a>
        <h1>TODO ingrédient et mesure </h1>
      </div>
    </Layout>
  );
};

export default Recipe;
