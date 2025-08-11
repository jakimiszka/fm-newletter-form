const form = document.querySelector("form");
const errrorMessage = document.querySelector(".error_message");
const emailInput = document.querySelector(".email");

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

function handleSubmit(e) {
  e.preventDefault();
  const data = {};
  const fields = e.target.querySelectorAll("input");
  for (const field of fields) {
    data[field.name] = field.value;
  }
  if (!validateEmail(data.email)) {
    errrorMessage.style.display = "block"; // toggle with data-attr
    emailInput.value = "";
    return;
  } else {
    alert("Newsletter subscription successful!");
    return;
  }
}

form.addEventListener("submit", handleSubmit);
