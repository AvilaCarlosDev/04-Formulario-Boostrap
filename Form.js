document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const errorMessage = document.querySelector(".error-message");
  const cardNumberInput = document.getElementById("cardNumber");
  const cvcInput = document.getElementById("cvc");

  // Ocultar el mensaje de error al inicio
  errorMessage.style.display = "none";

  // Validar el formulario al enviarlo
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Evitar el envío por defecto

    // Validar longitud del número de tarjeta
    if (cardNumberInput.value.length !== 16 || isNaN(cardNumberInput.value)) {
      errorMessage.style.display = "block";
      return;
    }

    // Validar longitud del CVC
    if (cvcInput.value.length !== 3 || isNaN(cvcInput.value)) {
      errorMessage.style.display = "block";
      return;
    }

    // Verificar si todos los campos requeridos están completos
    const isValid = form.checkValidity();

    if (!isValid) {
      // Mostrar el mensaje de error si hay campos vacíos
      errorMessage.style.display = "block";
    } else {
      // Ocultar el mensaje de error si todo está completo
      errorMessage.style.display = "none";

      // Aquí puedes agregar la lógica para enviar el formulario
      alert("Formulario enviado con éxito");
    }
  });

  // Limitar el número máximo de caracteres en tiempo real
  cardNumberInput.addEventListener("input", () => {
    if (cardNumberInput.value.length > 16) {
      cardNumberInput.value = cardNumberInput.value.slice(0, 16);
    }
  });

  cvcInput.addEventListener("input", () => {
    if (cvcInput.value.length > 3) {
      cvcInput.value = cvcInput.value.slice(0, 3);
    }
  });
});
