import React, { useEffect, useState } from "react";
import Cocktails from "../components/Cocktails";
import Layout from "../components/Layout";

//www.thecocktaildb.com/api/json/v1/1/random.php
const AllCocktail = () => {
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    (async () => {
      const responseCocktail = await fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
      );
      const responseAllCoktail = await responseCocktail.json();
      setCocktails(responseAllCoktail);
    })();
  }, []);

  return (
    <Layout>
      <Cocktails cocktails={cocktails.drinks} />
    </Layout>
  );
};

export default AllCocktail;
