import React from "react";
import SearchResultForm from "./SearchResultForm";
import Navigation from "./Navigation";
import "./../style/component/Header.css";

// Dans le header, faites un input de recherche
// quand on submit le form, on est redirigé vers une page qui affiche les résultats de recherche

const Header = () => {
  return (
    <header>
      <h1>My header</h1>
      <SearchResultForm />
      <Navigation />
    </header>
  );
};

export default Header;
