// 1. Policzy i wypisze w konsoli liczbę kategorii w ul#categories, czyli elementy li.item.
const items = document.querySelectorAll(".item");
console.log(`Number of categories: ${items.length}`);

// 2. Dla każdego elementu li.item na liście ul#categories,
// znajdzie i wypisze w konsoli tekst nagłówka elementu (tag <h2>)
// i liczbę elementów w danej kategorii (wszystkich w jej obrębie <li>).

for (const item of items) {
  const categoryName = item.querySelector("h2");
  const categoryItemsAmount = item.querySelectorAll("li");
  console.log(`Category: ${categoryName.textContent}`);
  console.log(`Elements: ${categoryItemsAmount.length}`);
}

// Wersja strzałkowa ze Slacka (przerobiona pod mój const items)
// items.forEach((element) => {
//   const categoryName = element.querySelector("h2");
//   const categoryEl = element.querySelectorAll("li");
//   console.log(`Category: ${categoryName.textContent}`);
//   console.log(`Elements: ${categoryEl.length}`);
// });
