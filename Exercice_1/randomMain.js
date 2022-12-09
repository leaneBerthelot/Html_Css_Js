const addElement = (elementName, parentElement, elementContent = "") => {
  const element = document.createElement(elementName);
  element.textContent = elementContent;
  parentElement.appendChild(element);
  return element;
};

const addImg = (elementName, parentElement, elementUrl) => {
  const element = document.createElement(elementName);
  element.src = elementUrl;
  parentElement.appendChild(element);
  return element;
};

const fetchRandomDrink = async () => {
  const reponseCocktail = await fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/random.php"
  );
  return await reponseCocktail.json();
};

const clearElement = (element) => {
  element.innerHTML = "";
};

const showRandomCocktail = async () => {
  const reponse = await fetchRandomDrink();
  const randomDrink = reponse.drinks[0];

  addElement("h1", div, randomDrink.strDrink);
  addElement("p", div, "Catégorie : " + randomDrink.strCategory);
  addElement("p", div, "Instructions : " + randomDrink.strInstructions);

  const ul = addElement("ul", div);

  let i = 1;
  while (null != randomDrink["strIngredient" + i] || i > 15) {
    addElement("li", ul, randomDrink["strIngredient" + i]);
    i++;
  }

  addImg("img", div, randomDrink.strDrinkThumb);
};

const root = document.getElementById("root");
const button = addElement("button", root, "Click me");
const div = addElement("div", root);
button.addEventListener("click", () => {
  clearElement(div);
  showRandomCocktail();
});
