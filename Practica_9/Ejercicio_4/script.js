function removeElements() {
    // Obtener los valores del input y convertirlos en un array de números
    const inputElement = document.getElementById("numbersInput");
    const inputValues = inputElement.value.split(',').map(value => parseFloat(value.trim()));

    // Obtener el índice de inicio y el número de elementos a eliminar
    const startIndex = parseInt(document.getElementById("startIndex").value);
    const deleteCount = parseInt(document.getElementById("deleteCount").value);

    // Usar el método splice para eliminar elementos del array
    inputValues.splice(startIndex, deleteCount);

    // Mostrar el resultado en el elemento HTML
    const resultElement = document.getElementById("result");
    resultElement.textContent = `Array después de eliminar elementos: ${inputValues.join(', ')}`;
}
