const root = document.getElementById("root");

const button = document.createElement("button");
button.textContent = "Click me";
root.appendChild(button);

const div = document.createElement("div");
div.className = "randomCoktail";
root.appendChild(div);

const fetchRandomDrink = async () => {
  const reponseCocktail = await fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/random.php"
  );
  const coktail = await reponseCocktail.json();
  return coktail;
};

const addElement = (elementname, content) => {
  const element = document.createElement(elementname);
  element.textContent = content;
  div.appendChild(element);
};

button.addEventListener("click", async () => {
  /*
    fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      const randomDrink = response.drinks[0];
      const h1 = document.createElement("h1");

      h1.textContent = randomDrink.strDrink;

      root.appendChild(h1);
    })
    .catch((error) => {
      alert("Erreur : " + error);
    });*/

  while (div.firstChild) {
    div.removeChild(div.firstChild);
  }

  const reponse = await fetchRandomDrink();
  const randomDrink = reponse.drinks[0];

  addElement("h1", randomDrink.strDrink);

  const h1 = document.createElement("h1");
  h1.textContent = randomDrink.strDrink;
  div.appendChild(h1);

  const p1 = document.createElement("p");
  p1.textContent = randomDrink.strCategory;
  div.appendChild(p1);

  const p2 = document.createElement("p");
  p2.textContent = randomDrink.strInstructions;
  div.appendChild(p2);

  for (let i = 1; i <= 15; i++) {
    const p = document.createElement("p");
    p.textContent = randomDrink["strIngredient" + i];
    div.appendChild(p);
  }

  const img = document.createElement("img");
  img.src = randomDrink.strDrinkThumb;
  div.appendChild(img);
});
