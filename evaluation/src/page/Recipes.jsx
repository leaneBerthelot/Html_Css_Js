import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import RecipesList from "../components/RecipesList";
import "./../style/page/Recipes.css";

// Créer une page Recettes qui affiche toutes les recettes et au click
// sur une recette, on est redirigé vers la page qui affiche le détail

const Recipes = ({ handleSubmit }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/search.php?s="
      );
      const responseRecipes = await response.json();
      setRecipes(responseRecipes.meals);
    })();
  }, []);

  return (
    <Layout handleSubmit={handleSubmit}>
      <RecipesList recipes={recipes} />
    </Layout>
  );
};

export default Recipes;
