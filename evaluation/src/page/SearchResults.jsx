import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import RecipesList from "../components/RecipesList";
import { useParams } from "react-router-dom";

// Créer une page Resultat de la recherche qui affiche toutes les recettes correspondant à la recherche

const SearchResults = () => {
  const { searchString } = useParams();

  const [searchRecipes, setSearchRecipes] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/search.php?s=" + searchString
      );
      const responseSearchRecipes = await response.json();
      setSearchRecipes(responseSearchRecipes.meals);
    })();
  }, []);

  return (
    <Layout>
      <RecipesList recipes={searchRecipes} />
    </Layout>
  );
};

export default SearchResults;
