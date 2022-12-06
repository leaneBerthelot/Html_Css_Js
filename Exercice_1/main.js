const addElement = (elementName, elementContent, elementUrl, ParentElement) => {
  const element = document.createElement(elementName);
  if (null != elementContent) {
    element.textContent = elementContent;
  }
  if (null != elementUrl) {
    element.src = elementUrl;
  }
  ParentElement.appendChild(element);
  return element;
};

const fetchRandomDrink = async () => {
  const reponseCocktail = await fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/random.php"
  );
  return await reponseCocktail.json();
};

const removeChild = (elementName) => {
  while (elementName.firstChild) {
    div.removeChild(elementName.firstChild);
  }
};

const showRandomCocktail = async () => {
  removeChild(div);

  const reponse = await fetchRandomDrink();
  const randomDrink = reponse.drinks[0];

  addElement("h1", randomDrink.strDrink, null, div);
  addElement("p", "Catégorie : " + randomDrink.strCategory, null, div);
  addElement("p", "Instructions : " + randomDrink.strInstructions, null, div);

  const ul = addElement("ul", null, null, div);

  let i = 1;
  while (null != randomDrink["strIngredient" + i] || i > 15) {
    addElement("li", randomDrink["strIngredient" + i], null, ul);
    i++;
  }

  addElement("img", null, randomDrink.strDrinkThumb, div);
};

const root = document.getElementById("root");
const button = addElement("button", "Click me", null, root);
const div = addElement("div", null, null, root);
button.addEventListener("click", showRandomCocktail);
