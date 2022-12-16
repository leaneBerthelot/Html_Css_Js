import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import CategoryRecipes from "./page/CategoryRecipes";
import Categories from "./page/Categories";
import Home from "./page/Home";
import Recipe from "./page/Recipe";
import Recipes from "./page/Recipes";
import SearchResults from "./page/SearchResults";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Categories" element={<Categories />} />
        <Route path="/Categories/:name" element={<CategoryRecipes />} />
        <Route path="/Recipes" element={<Recipes />} />
        <Route path="/Recipes/:id" element={<Recipe />} />
        <Route
          path="/SearchResults/:searchString"
          element={<SearchResults />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
