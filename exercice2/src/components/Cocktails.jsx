import React, { useEffect, useState } from "react";
import Cocktail from "./Cocktail";

const Cocktails = (props) => {
  //   const [coktails, setCocktails] = useState([]);

  //   useEffect(() => {
  //     (async () => {
  //       const responseCocktail = await fetch(
  //         "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
  //       );
  //       const responseCoktails = await responseCocktail.json();
  //       setCocktails(responseCoktails.drinks);
  //       console.log(coktails);
  //     })();
  //   }, []);

  //   console.log(coktails);

  return (
    <div>
      {props.cocktails && (
        <>
          {props.cocktails.map((coktail) => (
            <Cocktail currentCocktail={coktail} />
          ))}
        </>
      )}
    </div>
  );
};

export default Cocktails;
