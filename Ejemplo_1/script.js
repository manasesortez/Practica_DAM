const contentFilas = document.querySelector("#filas-content"); 
const templateFilas = document.querySelector("#filas-template");
const fragment = document.createDocumentFragment() //fragmento

const productos = [
    {
        id: 1,
        name: 'Coca Cola',
        price: 2.00
    },
    {
        id: 2,
        name: 'Pepsi',
        price: 1.90
    }, 
    {
        id: 3,
        name: 'Inka Cola',
        price: 1.50
    }
]

function filasTabla() {
    //Limpiamos el contenido actual
    contentFilas.textContent =
    //recorremos La Lista de productos
    productos.forEach(item => {
        //clonamos la estructura de Los nodos
        const clone = templateFilas.content.cloneNode(true)
        clone.querySelector('.id').textContent = item.id 
        clone.querySelector('.name').textContent = item.name
        clone.querySelector('.price').textContent = `$ ${item.price}`
        //agregamos el clono a nuestro fragmento
        fragment.appendChild(clone)
    })
    //agregamos el fragmento al contenedor principal
    contentFilas.appendChild(fragment)
}

//mostramos el resultado.
filasTabla()