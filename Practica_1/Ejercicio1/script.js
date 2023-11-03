const verificarBtn = document.getElementById("verificarBtn");

verificarBtn.addEventListener("click", function() {
    const nombre = document.getElementById("nombre").value;
    const edad = parseInt(document.getElementById("edad").value);

    if (isNaN(edad) || edad < 0) {
        alert("Por favor, ingresa una edad válida.");
        return;
    }

    let mensaje = `¡Bienvenido ${nombre}, eres `;
    mensaje += (edad >= 18) ? "mayor de edad!" : "menor de edad!";
    
    alert(mensaje);
});
