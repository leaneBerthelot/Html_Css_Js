import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllCocktail from "./page/AllCocktail";
import Home from "./page/Home";
import Random from "./page/Random";
import SearchCocktail from "./page/SearchCocktail";
import CocktailDescription from "./components/CocktailDescription";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchCocktail />} />
        <Route path="/Cocktails" element={<AllCocktail />} />
        <Route path="/Cocktails/:id" element={<CocktailDescription />} />
        <Route path="/random" element={<Random />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
