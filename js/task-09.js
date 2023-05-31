function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector(".change-color");
const span = document.querySelector(".color");

const setBg = () => {
  let result = getRandomHexColor();
  document.body.style.backgroundColor = result;
  span.innerHTML = result;
};

button.addEventListener("click", setBg);
