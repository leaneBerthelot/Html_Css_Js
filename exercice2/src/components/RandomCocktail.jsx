import React, { useEffect, useState } from "react";
import Cocktail from "./Cocktail";

const RandomCocktail = () => {
  const [randomCocktail, setRandomCocktail] = useState(null);

  useEffect(() => {
    (async () => {
      const responseCocktail = await fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/random.php"
      );
      const responseCoktailRandom = await responseCocktail.json();
      setRandomCocktail(responseCoktailRandom);
    })();
  }, []);

  return (
    <div>
      {randomCocktail && (
        <div>
          <Cocktail currentCocktail={randomCocktail.drinks[0]} />
        </div>
      )}
    </div>
  );
};

export default RandomCocktail;
