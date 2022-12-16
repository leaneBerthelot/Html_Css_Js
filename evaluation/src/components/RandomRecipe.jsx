import React, { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";

const RandomRecipe = () => {
  const [randomRecipe, setRandomRecipe] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/random.php"
      );
      const responseRandomRecipe = await response.json();
      setRandomRecipe(responseRandomRecipe.meals[0]);
    })();
  }, []);

  return (
    <div className="random">
      {randomRecipe && <RecipeCard recipe={randomRecipe} />}
    </div>
  );
};

export default RandomRecipe;
