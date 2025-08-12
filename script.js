const form = document.querySelector("form");
const errrorMessage = document.querySelector(".error_message");
const emailInput = document.querySelector(".email_input");
const card = document.querySelector(".container");
const modal = document.querySelector(".modal");
const modal_button = document.querySelector(".modal_button");

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

function handleSubmit(e) {
  e.preventDefault();
  const email = emailInput.value;
  if (!validateEmail(email) === false) {
    card.style.display = "none";
    modal.style.display = "flex";
  }
}

function validateInput() {
  const data = emailInput.value;1
  if (!validateEmail(data)) {
    emailInput.classList.add('error_input');
    emailInput.classList.add('invalid_placeholder');
    errrorMessage.style.display = "block";
  }else{
    emailInput.classList.remove('error_input');
    emailInput.classList.remove('invalid_placeholder');
    errrorMessage.style.display = "none";
  }
}

form.addEventListener("submit", handleSubmit);

modal_button.addEventListener("click", () => {
    card.style.display = "grid";
    modal.style.display = "none";
});

document.addEventListener("focus", (e) => {
  if (e.target === emailInput) {
    validateInput();
    errrorMessage.style.display = "none";
  }
}, true);

document.addEventListener("blur", (e) => {
  if (e.target === emailInput) {
    validateInput();
  }
}, true);
