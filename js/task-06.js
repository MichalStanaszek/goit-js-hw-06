const textInput = document.querySelector("#validation-input");

textInput.addEventListener("blur", (event) => {
  if (
    event.currentTarget.value.length ===
    parseInt(event.currentTarget.getAttribute("data-length"))
  ) {
    event.currentTarget.classList.add("valid");
    event.currentTarget.classList.remove("invalid");
  } else {
    event.currentTarget.classList.add("invalid");
    event.currentTarget.classList.remove("valid");
  }
});
