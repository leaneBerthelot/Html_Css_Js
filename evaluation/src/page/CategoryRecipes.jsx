import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";

// créer une page qui affiche le détail d'une catégorie avec l'id dans la categorie

const CategoryRecipes = ({ handleSubmit }) => {
  const { name } = useParams();

  const [categoryRecipes, setCategoryRecipes] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/filter.php?c=" + name
      );
      const responseCategoryRecipes = await response.json();
      setCategoryRecipes(responseCategoryRecipes.meals);
    })();
  }, []);

  return (
    <Layout handleSubmit={handleSubmit}>
      {categoryRecipes.map((recipe) => (
        <>
          <h1>{recipe.strMeal}</h1>
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
        </>
      ))}
    </Layout>
  );
};

export default CategoryRecipes;
