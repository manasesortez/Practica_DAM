const bitacora = [
    {
        id: 1,
        titulo: 'Registro',
        detalles: {
            hora: '10:00 AM',
            fecha: '10 de agosto de 2023',
            campos: {
                anterior: [],
                actual: {
                    id: 1,
                    nombres: 'Juan',
                    apellidos: 'Hernandez'
                }
            }
        },
        descripcion: 'Se ingresaron nuevos datos en la tabla persona'
    },
    {
        id: 2, // Cambiar el ID a 2
        titulo: 'Modificación',
        detalles: {
            hora: '10:30 AM',
            fecha: '10 de agosto de 2023',
            campos: {
                anterior: [
                    {
                        id: 1,
                        nombres: 'Juan',
                        apellidos: 'Hernandez'
                    }
                ],
                actual: {
                    id: 1,
                    nombres: 'Juan Carlos',
                    apellidos: 'Hernandez'
                }
            }
        },
        descripcion: 'Se modificaron datos en la tabla persona'
    }
];

const bitacoraList = document.getElementById('bitacora-list');
const item2 = document.getElementById('item_2');
const item3 = document.getElementById('item_3');    

function iterateWithForOf() {
    const header = document.createElement('h3');
    header.textContent = 'Item 1 - Iteración "for...of" y desestructuración para mostrar título, fecha, hora y descripción.';
    
    bitacoraList.appendChild(header);

    for (const registro of bitacora) {
        const { titulo, detalles: { fecha, hora }, descripcion } = registro;
        
        const listItem = document.createElement('li');
        listItem.innerHTML = `<strong>${titulo}</strong><br>Fecha: ${fecha}<br>Hora: ${hora}<br>Descripción: ${descripcion}`;
        
        bitacoraList.appendChild(listItem);
    }
}

function desempacarCampos(objeto) {
    const { id, nombres, apellidos } = objeto;

    const header = document.createElement('h3');
    header.textContent = 'Item 2 - Función para desempacar campos de objetos pasados como parámetro de función.';
    
    const divItem = document.createElement('div');
    divItem.innerHTML = `<strong>ID:</strong> ${id}<br><strong>Nombres:</strong> ${nombres}<br><strong>Apellidos:</strong> ${apellidos}`;

    item2.appendChild(header);
    item2.appendChild(divItem);
}

// Ejemplo de uso de la función desempacarCampos()
function exampleBitacora(){
    const primerRegistro = bitacora[0].detalles.campos.actual;
    return desempacarCampos(primerRegistro);
}

function DesestructuracionObject(){
    const header = document.createElement('h3');
    header.textContent = 'Item 3 - Desestructuración combinada de arreglos y objetos para mostrar los datos de la propiedad campos anterior y actual.';

    item3.appendChild(header);

    const [, segundoRegistro] = bitacora;
    const { campos: { anterior: camposAnterior, actual: camposActual } } = segundoRegistro.detalles;

    const divItem = document.createElement('div');
    divItem.innerHTML = `<strong>Campos Anteriores:</strong> ${JSON.stringify(camposAnterior)}<br><br><strong>Campos Actuales:</strong> ${JSON.stringify(camposActual)}`;

    item3.appendChild(divItem);
}

const init = () => {
    iterateWithForOf();
    exampleBitacora();
    DesestructuracionObject();
}

init();
