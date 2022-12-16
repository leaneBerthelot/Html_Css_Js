import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
  return (
    <div>
      <h1>{category.strCategory}</h1>
      <p>{category.strCategoryDescription}</p>
      <img src={category.strCategoryThumb} alt={category.strCategory} />
      <Link to={"/Categories/" + category.strCategory}>
        Voir toutes les recettes de cette catégorie
      </Link>
    </div>
  );
};

export default CategoryCard;
