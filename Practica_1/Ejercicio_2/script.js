const calcularBtn = document.getElementById("calcularBtn");

calcularBtn.addEventListener("click", function() {
    const anioNacimiento = parseInt(document.getElementById("anioNacimiento").value);
    const anioActual = new Date().getFullYear();

    if (isNaN(anioNacimiento) || anioNacimiento < 0) {
        alert("Por favor, ingresa un año de nacimiento válido.");
        return;
    }

    const edad = anioActual - anioNacimiento;
    alert(`Tu edad es ${edad} años.`);
});
