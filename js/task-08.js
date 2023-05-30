const form = document.querySelector(".login-form");

// 1. Funkcjonalność przesyłania formularza form.login-form powinno zostać obsłużona
// przy użycie wydarzenia submit
form.addEventListener("submit", handleSubmit);

// 2. Podczas przesyłania formularza strona nie powinna się odświeżać.
function handleSubmit(event) {
  event.preventDefault();

  //   3. Jeśli w formularzu są nieuzupełnione pola,
  //   wyświetl alert z upomnieniem o tym, że wszystkie pola powinny zostać wypełnione.
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Please fill in all the fields!");
  }
}

// 4. Jeśli użytkownik uzupełnił wszystkie pola i wysłał formularz,
// pobierz wartość pól jako obiekt, gdzie nazwa pola będzie nazwą właściwości,
// a wartość pola - wartością właściwości. A
// by otrzymać dostęp do elementów formularza użyj właściwości elements.
