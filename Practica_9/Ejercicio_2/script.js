function filterNumbers() {
    // Obtener los valores del input y convertirlos en un array de números
    const inputElement = document.getElementById("numbersInput");
    const inputValues = inputElement.value.split(',').map(value => parseFloat(value.trim()));

    // Obtener el valor para filtrar
    const filterValue = parseFloat(document.getElementById("filterValue").value);

    // Usar el método filter para filtrar los números mayores que el valor dado
    const filteredNumbers = inputValues.filter(function (number) {
        return number > filterValue;
    });

    // Mostrar el resultado en el elemento HTML
    const resultElement = document.getElementById("result");
    resultElement.textContent = `Números mayores que ${filterValue}: ${filteredNumbers.join(', ')}`;
}
