const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listOfIngredients = document.querySelector("#ingredients");

for (let i = 0; i < ingredients.length; i += 1) {
  let list = document.createElement("li");
  list.textContent = ingredients[i];
  list.classList.add("item");
  listOfIngredients.appendChild(list);
}

// // To też zadziała
// // const markup = ingredients
// //   .map((ingredient) => `<li class="item">${ingredient}</li>`)
// //   .join("");
// // console.log(markup);
// // listOfIngredients.innerHTML = markup;
