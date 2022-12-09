// créer un nouveau bouton
// au clic sur ce bouton, faites un appel fetch https://www.thecocktaildb.com/api/json/v1/1/search.php?s=
// affichez les résultats dans votre DOM
// créez vos différentes fonctions dans une ou plusieurs classes
// Si vous avez terminé, tentez de refactoriser votre classe en plusieurs classes
// en utilisant le principe SRP de SOLID
// https://www.freecodecamp.org/news/solid-principles-single-responsibility-principle-explained/

class Utils {
  static addElement(elementName, parentElement, elementContent = "") {
    const element = document.createElement(elementName);
    element.textContent = elementContent;
    parentElement.appendChild(element);
    return element;
  }

  static addImg(elementName, parentElement, elementUrl) {
    const element = document.createElement(elementName);
    element.src = elementUrl;
    parentElement.appendChild(element);
    return element;
  }

  static clearElement = (element) => {
    element.innerHTML = "";
  };
}

class Cocktails {
  constructor(url, parent) {
    this.url = url;
    this.parent = parent;
  }

  show(coktail) {
    Utils.addElement("h1", this.parent, coktail.strDrink);
    Utils.addElement("p", this.parent, "Catégorie : " + coktail.strCategory);
    Utils.addElement(
      "p",
      this.parent,
      "Instructions : " + coktail.strInstructions
    );

    const ul = Utils.addElement("ul", this.parent);

    let i = 1;
    while (null != coktail["strIngredient" + i] || i > 15) {
      Utils.addElement("li", ul, coktail["strIngredient" + i]);
      i++;
    }

    Utils.addImg("img", this.parent, coktail.strDrinkThumb);
  }

  async showAll() {
    const responseCocktail = await fetch(this.url);
    const cocktails = await responseCocktail.json();
    cocktails.drinks.forEach((cocktail) => this.show(cocktail));
  }
}

class Main {
  init() {
    const root = document.getElementById("root");
    const button = Utils.addElement("button", root, "Click me");
    const div = Utils.addElement("div", root);
    button.addEventListener("click", async () => {
      Utils.clearElement(div);
      const coktailsShow = new Cocktails(
        "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=",
        div
      );
      coktailsShow.showAll();
    });
  }
}

const main = new Main();
window.onload = main.init();
