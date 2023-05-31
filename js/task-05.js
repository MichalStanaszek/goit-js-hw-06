const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
  textOutput.textContent = event.currentTarget.value;
});

textInput.addEventListener("blur", (event) => {
  if (event.currentTarget.value === "") {
    textOutput.textContent = "Anonymous";
  }
});
