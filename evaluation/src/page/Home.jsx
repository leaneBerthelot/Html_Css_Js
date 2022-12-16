import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import RandomRecipe from "../components/RandomRecipe";
import RecipesList from "../components/RecipesList";
import "./../style/page/Home.css";

// Créer une page Home qui affiche une recette de manière aléatoire et
// trois recettes issues de l'api avec un bouton "voir +" qui dirige
// vers la page qui affiche toutes les recettes

const Home = ({ handleSubmit }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/search.php?s="
      );
      const responseRecipes = await response.json();
      setRecipes([
        responseRecipes.meals[0],
        responseRecipes.meals[1],
        responseRecipes.meals[2],
      ]);
    })();
  }, []);

  return (
    <Layout handleSubmit={handleSubmit}>
      <RandomRecipe />
      <RecipesList recipes={recipes} />
      <div className="seeAll">
        <Link to="/Recipes">Voir toutes les recettes</Link>
      </div>
    </Layout>
  );
};

export default Home;
