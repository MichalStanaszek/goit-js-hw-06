const rangeInput = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

rangeInput.addEventListener("input", function () {
  text.style.fontSize = rangeInput.value + "px";
});