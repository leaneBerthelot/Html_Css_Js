import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from "./page/Accueil";
import Random from "./page/Random";
import SearchCocktail from "./page/SearchCocktail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/search" element={<SearchCocktail />} />
        <Route path="/random" element={<Random />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
