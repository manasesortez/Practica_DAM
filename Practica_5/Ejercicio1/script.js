document.getElementById('dataForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const inputData = document.getElementById('data').value.trim().split(',').map(Number);

    if (inputData.some(isNaN)) {
        alert('Por favor, ingresa números válidos separados por comas.');
        return;
    }

    const mean = calcularMedia(inputData);
    const variance = calcularVarianza(inputData, mean);
    const mode = calcularModa(inputData);
    const median = calcularMediana(inputData);
    const stdDeviation = calcularDesviacionEstandar(inputData, mean);

    mostrarResultados(mean, variance, mode, median, stdDeviation);
});

const calcularMedia  = data => {
    const sum = data.reduce((acc, val) => acc + val, 0);
    return sum / data.length;
}

const calcularVarianza = (data, mean) => {
    const squaredDifferences = data.map(val => Math.pow(val - mean, 2));
    const sumSquaredDifferences = squaredDifferences.reduce((acc, val) => acc + val, 0);
    return sumSquaredDifferences / data.length;
}

const calcularModa = (data) => {
    const counts = {};
    data.forEach(val => {
        counts[val] = (counts[val] || 0) + 1;
    });

    let mode;
    let maxCount = 0;

    for (const val in counts) {
        if (counts[val] > maxCount) {
            maxCount = counts[val];
            mode = val;
        }
    }

    return mode;
}

const calcularMediana = data => {
    const sortedData = data.slice().sort((a, b) => a - b);
    const middle = Math.floor(sortedData.length / 2);

    if (sortedData.length % 2 === 0) {
        return (sortedData[middle - 1] + sortedData[middle]) / 2;
    } else {
        return sortedData[middle];
    }
}

const calcularDesviacionEstandar = (data, mean) => {
    const squaredDifferences = data.map(val => Math.pow(val - mean, 2));
    const sumSquaredDifferences = squaredDifferences.reduce((acc, val) => acc + val, 0);
    return Math.sqrt(sumSquaredDifferences / data.length);
}

const mostrarResultados = (mean, variance, mode, median, stdDeviation) => {
    const table = document.querySelector('table');
    table.innerHTML = `
        <tr><th>Media</th><td>${mean.toFixed(2)}</td></tr>
        <tr><th>Varianza</th><td>${variance.toFixed(2)}</td></tr>
        <tr><th>Moda</th><td>${mode}</td></tr>
        <tr><th>Mediana</th><td>${median.toFixed(2)}</td></tr>
        <tr><th>Desviación Estándar</th><td>${stdDeviation.toFixed(2)}</td></tr>
    `;
}