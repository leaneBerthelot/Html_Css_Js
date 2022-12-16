import React, { useEffect, useState, useParams } from "react";
import Cocktail from "./Cocktail";

const CocktailDescription = () => {
  const { id } = useParams();

  const [cocktail, setCocktail] = useState({});

  useEffect(() => {
    (async () => {
      const responseCocktail = await fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007"
      );
      const responseCoktailDescription = await responseCocktail.json();
      setCocktail(responseCoktailDescription.drinks[0]);
    })();
  }, [id]);

  return (
    <div>
      <h2>Description</h2>
      {cocktail && <Cocktail currentCocktail={cocktail} />}
    </div>
  );
};

export default CocktailDescription;
