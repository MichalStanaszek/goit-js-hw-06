const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");
const itemsList = ingredients.map((ingredient) => {
  const lastElement = document.createElement("li");
  lastElement.textContent = ingredient;
  lastElement.classList.add("item");
  return lastElement;
});
list.append(...itemsList);

// -----------------------------------
// const listOfIngredients = document.querySelector("#ingredients");

// ingredients.forEach(function (ingredient, index) {
//   let list = document.createElement("li");
//   list.textContent = ingredients[index];
//   list.classList.add("item");
//   listOfIngredients.append(list);
// });

// -----------------------------------
// for (let i = 0; i < ingredients.length; i += 1) {
//   let list = document.createElement("li");
//   list.textContent = ingredients[i];
//   list.classList.add("item");
//   listOfIngredients.appendChild(list);
// }

// -----------------------------------
// const markup = ingredients
//   .map((ingredient) => `<li class="item">${ingredient}</li>`)
//   .join("");
// console.log(markup);
// listOfIngredients.innerHTML = markup;
