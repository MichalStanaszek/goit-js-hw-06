const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listOfIngredients = document.querySelector("#ingredients");

ingredients.forEach(function (ingredient, index) {
  let list = document.createElement("li");
  list.textContent = ingredients[index];
  list.classList.add("item");
  listOfIngredients.append(list);
});

// // To też zadziała
// for (let i = 0; i < ingredients.length; i += 1) {
//   let list = document.createElement("li");
//   list.textContent = ingredients[i];
//   list.classList.add("item");
//   listOfIngredients.appendChild(list);
// }

// -----------------------------------
// // const markup = ingredients
// //   .map((ingredient) => `<li class="item">${ingredient}</li>`)
// //   .join("");
// // console.log(markup);
// // listOfIngredients.innerHTML = markup;
