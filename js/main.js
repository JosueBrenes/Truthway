/* Website icon */

const favicon = document.getElementById("favicon");
if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  favicon.setAttribute("href", "./img/favicon-light.png");
} else {
  favicon.setAttribute("href", "./img/favicon-dark.png");
}

// Log in //

// Seleccionar el formulario y los campos de correo electrónico y contraseña
const loginForm = document.querySelector("#login-form");
const emailInput = document.querySelector("#logemail");
const passwordInput = document.querySelector("#logpass");

// Agregar un evento de escucha para enviar el formulario
loginForm.addEventListener("submit", function (event) {
  // Verificar si los campos de correo electrónico y contraseña están vacíos
  if (emailInput.value === "" || passwordInput.value === "") {
    // Prevenir el envío del formulario y mostrar un mensaje de error
    event.preventDefault();
    alert("Por favor ingrese su correo electrónico y contraseña.");
  }
});

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // Validar campos de entrada
  if (!emailInput.value || !passwordInput.value) {
    alert("Por favor, ingrese sus datos.");
    return;
  }

  // Validar dirección de correo electrónico
  if (!isValidEmail(emailInput.value)) {
    alert("Por favor, ingrese una dirección de correo electrónico válida.");
    return;
  }

  // Validar contraseña
  if (passwordInput.value.length < 8) {
    alert("La contraseña debe tener al menos 8 caracteres.");
    return;
  }

  // Redirigir a la página de inicio si los campos son válidos
  window.location.href = "/home.html";
});

function isValidEmail(email) {
  // Validar la dirección de correo electrónico usando una expresión regular
  // Devuelve true si la dirección de correo electrónico es válida, de lo contrario, devuelve false
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Sing up //

// Seleccionar el formulario y los campos de correo electrónico, contraseña y nombre de usuario
const signupForm = document.querySelector("#signup-form");
const mailInput = document.querySelector("#logmail");
const passInput = document.querySelector("#logpassword");
const usernameInput = document.querySelector("#logname");

// Agregar un evento de escucha para enviar el formulario
signupForm.addEventListener("submit", function (event) {
  // Verificar si los campos de correo electrónico, contraseña y nombre de usuario están vacíos
  if (
    mailInput.value === "" ||
    passInput.value === "" ||
    usernameInput.value === ""
  ) {
    // Prevenir el envío del formulario y mostrar un mensaje de error
    event.preventDefault();
    alert(
      "Por favor ingrese su correo electrónico, contraseña y nombre de usuario."
    );
  }
});

signupForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // Validar campos de entrada
  if (!mailInput.value || !passInput.value || !usernameInput.value) {
    alert("Por favor, ingrese todos los datos requeridos.");
    return;
  }

  // Validar dirección de correo electrónico
  if (!isValidEmail(mailInput.value)) {
    alert("Por favor, ingrese una dirección de correo electrónico válida.");
    return;
  }

  // Validar contraseña
  if (passInput.value.length < 8) {
    alert("La contraseña debe tener al menos 8 caracteres.");
    return;
  }

  // Redirigir a la página de inicio si los campos son válidos
  window.location.href = "/home.html";
});

function isValidEmail(email) {
  // Validar la dirección de correo electrónico usando una expresión regular
  // Devuelve true si la dirección de correo electrónico es válida, de lo contrario, devuelve false
  const emailRegex = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
  return emailRegex.test(email);
}
