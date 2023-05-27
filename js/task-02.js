const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// 1. Utworzy oddzielny element <li>. Obowiązkowo użyj metody document.createElement().
const list = document.createElement("li");
console.log(list);

// 2. Doda nazwę elementu (string z tablicy) jako jego zawartość tekstową.

for (let i = 0; i < ingredients.length; i += 1) {
  console.log(ingredients[i]);
}
