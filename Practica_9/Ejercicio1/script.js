function calculateSum() {
    // Obtener el valor del input y convertirlo a un array de números
    const inputElement = document.getElementById("numbersInput");
    const inputValues = inputElement.value.split(',').map(value => parseFloat(value.trim()));

    // Usar el método reduce para sumar los elementos del array
    const sum = inputValues.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
    }, 0);

    // Mostrar el resultado en el elemento HTML
    const resultElement = document.getElementById("result");
    resultElement.textContent = `Resultado de la suma: ${sum}`;
}

