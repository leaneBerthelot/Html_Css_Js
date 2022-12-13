import React, { useState } from "react";
import SearchFormCocktail from "./SearchFormCocktail";
import SearchResultCocktail from "./SearchResultCocktail";

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
      <SearchResultCocktail searchCocktails={searchCocktails} />
    </div>
  );
};

export default Search;
