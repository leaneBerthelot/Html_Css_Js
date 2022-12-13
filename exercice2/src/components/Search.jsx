import React, { useState } from "react";
import SearchFormCocktail from "./SearchFormCocktail";
import Cocktails from "./Cocktails";

const Search = () => {
  const [searchCocktails, setSearchCocktails] = useState([]);

  const handleSearch = (event) => {
    event.preventDefault();
    const searchText = event.target.search.value;
    (async () => {
      const responseCocktail = await fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + searchText
      );
      const responseCoktailSearch = await responseCocktail.json();
      setSearchCocktails(responseCoktailSearch.drinks);
    })();
  };

  return (
    <div>
      <SearchFormCocktail formCallback={handleSearch} />
      <Cocktails cocktails={searchCocktails} />
    </div>
  );
};

export default Search;
