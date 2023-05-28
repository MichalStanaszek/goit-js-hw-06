const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// 1. Utworzy oddzielny element <li>. Obowiązkowo użyj metody document.createElement().

const listOfIngredients = document.querySelector("#ingredients");
const firstItem = document.createElement("li");
const secondItem = document.createElement("li");
const thirdItem = document.createElement("li");
const forthItem = document.createElement("li");
const fifthItem = document.createElement("li");
const sixthItem = document.createElement("li");

// 2. Doda nazwę elementu (string z tablicy) jako jego zawartość tekstową.

firstItem.textContent = ingredients[0];
secondItem.textContent = ingredients[1];
thirdItem.textContent = ingredients[2];
forthItem.textContent = ingredients[3];
fifthItem.textContent = ingredients[4];
sixthItem.textContent = ingredients[5];

// 3. Doda do elementu klasę item.
firstItem.classList.add("item");
secondItem.classList.add("item");
thirdItem.classList.add("item");
forthItem.classList.add("item");
fifthItem.classList.add("item");
sixthItem.classList.add("item");

// 4. Następnie jedna operacja umieści wszystkie <li> na liście ul#ingredients.

listOfIngredients.append(firstItem);
listOfIngredients.append(secondItem);
listOfIngredients.append(thirdItem);
listOfIngredients.append(forthItem);
listOfIngredients.append(fifthItem);
listOfIngredients.append(sixthItem);

// To też zadziała
// const markup = ingredients
//   .map((ingredient) => `<li class="item">${ingredient}</li>`)
//   .join("");
// console.log(markup);
// listOfIngredients.innerHTML = markup;
