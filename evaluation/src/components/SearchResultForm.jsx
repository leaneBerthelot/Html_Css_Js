import React from "react";
import { useNavigate } from "react-router-dom";

const SearchResultForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const searchText = event.target.search.value;
    navigate("/SearchResults/" + searchText);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="search" id="search"></input>
      <input type="submit" value="Search"></input>
    </form>
  );
};

export default SearchResultForm;
