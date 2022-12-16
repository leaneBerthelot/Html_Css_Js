import React, { useEffect, useState } from "react";
import CategoryCard from "../components/CategoryCard";
import Layout from "../components/Layout";

// créer une page qui affiche toutes les catégories
// au click sur une catégorie dans la liste, on est redirigé vers la page qui affiche le détail de la catégorie

const Categories = ({ handleSubmit }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      const responseCategories = await response.json();
      setCategories(responseCategories.categories);
    })();
  }, []);

  return (
    <Layout handleSubmit={handleSubmit}>
      {categories.map((category) => (
        <CategoryCard category={category} />
      ))}
    </Layout>
  );
};

export default Categories;
