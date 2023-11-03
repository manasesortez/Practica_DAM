const numeroSecreto = Math.floor(Math.random() * 100) + 1;
const numeroInput = document.getElementById("numeroInput");
const verificarBtn = document.getElementById("verificarBtn");
const resultado = document.getElementById("resultado");

verificarBtn.addEventListener("click", function() {
    const intento = parseInt(numeroInput.value);

    if (isNaN(intento) || intento < 1 || intento > 100) {
        resultado.textContent = "Por favor, ingresa un número válido entre 1 y 100.";
        return;
    }

    if (intento === numeroSecreto) {
        resultado.textContent = "¡Felicitaciones! ¡Adivinaste el número secreto!";
    } else if (intento < numeroSecreto) {
        resultado.textContent = "El número es más grande. ¡Sigue intentando!";
    } else {
        resultado.textContent = "El número es más pequeño. ¡Sigue intentando!";
    }
});
