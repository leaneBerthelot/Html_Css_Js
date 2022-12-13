import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllCocktail from "./page/AllCocktail";
import Home from "./page/Home";
import Random from "./page/Random";
import SearchCocktail from "./page/SearchCocktail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchCocktail />} />
        <Route path="/all" element={<AllCocktail />} />
        <Route path="/random" element={<Random />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
