import React, { useState } from "react";
import Cocktail from "./Cocktail";

//www.thecocktaildb.com/api/json/v1/1/random.php
const RandomCocktail = () => {
  const [randomCocktail, setRandomCocktail] = useState(null);

  const handleClick = async () => {
    const responseCocktail = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/random.php"
    );
    const responseCoktailRandom = await responseCocktail.json();
    setRandomCocktail(responseCoktailRandom);
  };

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      {randomCocktail && (
        <div>
          <Cocktail currentRandomCocktail={randomCocktail.drinks[0]} />
        </div>
      )}
    </div>
  );
};

export default RandomCocktail;
