// contact.js

// Declaramos las constantes que vamos a utilizar para la validación del formulario
const inputName = document.querySelector("#name");
const inputEmail = document.querySelector("#email");
const inputPhone = document.querySelector("#phone");
const inputSelect = document.querySelector("#form-select");
const inputMessage = document.querySelector("#message");
const form = document.querySelector("form");

// Agregamos un evento al campo de nombre para validar que no esté vacío
inputName.addEventListener("input", function () {
  if (inputName.value.trim() === "") {
    inputName.classList.add("is-invalid");
    inputName.classList.remove("is-valid");
  } else {
    inputName.classList.add("is-valid");
    inputName.classList.remove("is-invalid");
  }
});

// Agregamos un evento al campo de email para validar que tenga el formato correcto
inputEmail.addEventListener("input", function () {
  if (!validateEmail(inputEmail.value.trim())) {
    inputEmail.classList.add("is-invalid");
    inputEmail.classList.remove("is-valid");
  } else {
    inputEmail.classList.add("is-valid");
    inputEmail.classList.remove("is-invalid");
  }
});

// Agregamos un evento al campo de teléfono para validar que tenga el formato correcto
inputPhone.addEventListener("input", function () {
  if (
    inputPhone.value.trim() !== "" &&
    !validatePhone(inputPhone.value.trim())
  ) {
    inputPhone.classList.add("is-invalid");
    inputPhone.classList.remove("is-valid");
  } else {
    inputPhone.classList.add("is-valid");
    inputPhone.classList.remove("is-invalid");
  }
});

// Agregamos un evento al campo de asunto para validar que haya seleccionado una opción
inputSelect.addEventListener("input", function () {
  if (inputSelect.value === "") {
    inputSelect.classList.add("is-invalid");
    inputSelect.classList.remove("is-valid");
  } else {
    inputSelect.classList.add("is-valid");
    inputSelect.classList.remove("is-invalid");
  }
});

// Agregamos un evento al campo de mensaje para actualizar el tipo de solicitud basado en el contenido
inputMessage.addEventListener("input", function () {
  const messageValue = inputMessage.value.toLowerCase();
  if (messageValue.includes("compra")) {
    inputSelect.value = "1"; // Valor de la opción "Compra"
    inputSelect.classList.add("is-valid");
    inputSelect.classList.remove("is-invalid");
  } else if (messageValue.includes("venta")) {
    inputSelect.value = "3"; // Valor de la opción "Venta"
    inputSelect.classList.add("is-valid");
    inputSelect.classList.remove("is-invalid");
  }
});

// Función para validar el formato del email
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

// Función para validar el formato del teléfono
function validatePhone(phone) {
  const re = /^\d{10}$/;
  return re.test(String(phone));
}

// Agregamos un evento al formulario para validar todos los campos al enviar
form.addEventListener("submit", function (event) {
  // Evitar que se envíe el formulario
  event.preventDefault();

  // Compruebe si todos los campos son válidos
  const isFormValid =
    inputName.classList.contains("is-valid") &&
    inputEmail.classList.contains("is-valid") &&
    (inputPhone.value.trim() === "" ||
      inputPhone.classList.contains("is-valid")) &&
    inputSelect.classList.contains("is-valid");

  if (isFormValid) {
    // Aquí puede continuar con el envío del formulario
    console.log("El formulario es válido.");
  } else {
    console.log(
      "El formulario no es válido. Por favor, corrija los errores e inténtelo nuevamente."
    );
  }
});
