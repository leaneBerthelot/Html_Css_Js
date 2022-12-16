import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink to="/">
          <li>Accueil</li>
        </NavLink>
        <NavLink to="/Cocktails">
          <li>Tous les cocktails</li>
        </NavLink>
        <NavLink to="/search">
          <li>Rechercher un cocktail</li>
        </NavLink>
        <NavLink to="/random">
          <li>Cocktail au hasard</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
