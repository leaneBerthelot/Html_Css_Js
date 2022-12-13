import React from "react";

const SearchFormCocktail = (props) => {
  return (
    <form onSubmit={props.formCallback}>
      <input type="text" name="search" id="search"></input>
      <input type="submit" value="Search"></input>
    </form>
  );
};

export default SearchFormCocktail;
