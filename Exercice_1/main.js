class DomElementsHandler {
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

class CocktailsRender {
  constructor(url, parent) {
    this.url = url;
    this.parent = parent;
  }

  show(coktail) {
    DomElementsHandler.addElement("h1", this.parent, coktail.strDrink);
    DomElementsHandler.addElement(
      "p",
      this.parent,
      "Catégorie : " + coktail.strCategory
    );
    DomElementsHandler.addElement(
      "p",
      this.parent,
      "Instructions : " + coktail.strInstructions
    );

    const ul = DomElementsHandler.addElement("ul", this.parent);

    let i = 1;
    while (null != coktail["strIngredient" + i] || i > 15) {
      DomElementsHandler.addElement("li", ul, coktail["strIngredient" + i]);
      i++;
    }

    DomElementsHandler.addImg("img", this.parent, coktail.strDrinkThumb);
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
    const button = DomElementsHandler.addElement("button", root, "Click me");
    const div = DomElementsHandler.addElement("div", root);
    button.addEventListener("click", async () => {
      DomElementsHandler.clearElement(div);
      const coktailsShow = new CocktailsRender(
        "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=",
        div
      );
      coktailsShow.showAll();
    });
  }
}

const main = new Main();
window.onload = main.init();
