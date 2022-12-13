import Cocktails from "./components/Cocktails";
import Footer from "./components/Footer";
import Header from "./components/Header";
import RandomCocktail from "./components/RandomCocktail";

function App() {
  return (
    <div>
      <Header />
      <RandomCocktail />
      <Cocktails />
      <Footer />
    </div>
  );
}

export default App;
