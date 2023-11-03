function doubleNumbers() {
    // Obtener los valores del input y convertirlos en un array de números
    const inputElement = document.getElementById("numbersInput");
    const inputValues = inputElement.value.split(',').map(value => parseFloat(value.trim()));

    // Usar el método map para duplicar cada número
    const doubledNumbers = inputValues.map(function (number) {
        return number * 2;
    });

    // Mostrar el resultado en el elemento HTML
    const resultElement = document.getElementById("result");
    resultElement.textContent = `Números duplicados: ${doubledNumbers.join(', ')}`;
}
