import React from "react";
import Cocktails from "./Cocktails";

const SearchResultCocktail = (props) => {
  return (
    <div>
      <Cocktails cocktails={props.searchCocktails} />
    </div>
  );
};

export default SearchResultCocktail;
