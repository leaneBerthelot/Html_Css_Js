import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <li>
          <NavLink to="/">Accueil</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
