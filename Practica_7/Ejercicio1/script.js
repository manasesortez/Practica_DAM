const contentFilas = document.querySelector("#filas-content");
const templateFilas = document.querySelector("#filas-template");
const fragment = document.createDocumentFragment();

const productos = [
    {
        id: 1,
        name: "Coca-cola",
        price: 0.69,
        quantity: 2,
    },
    {
        id: 2,
        name: "Inka-cola",
        price: 0.50,
        quantity: 1,
    },
    {
        id: 3,
        name: "Kolachapan",
        price: 0.45,
        quantity: 3,
    }
];

const agregarProductoForm = document.querySelector("#agregar-producto-form");

agregarProductoForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const nombreProducto = document.querySelector("#nombre-producto").value;
    const precioProducto = parseFloat(document.querySelector("#precio-producto").value);
    const cantidadProducto = parseInt(document.querySelector("#cantidad-producto").value);

    if (nombreProducto && !isNaN(precioProducto) && !isNaN(cantidadProducto)) {
        const nuevoProducto = {
            id: productos.length + 1,
            name: nombreProducto,
            price: precioProducto,
            quantity: cantidadProducto,
        };

        productos.push(nuevoProducto);

        contentFilas.textContent = "";
        calcularTotal();
    } else {
        alert("Por favor, complete todos los campos correctamente.");
    }
});

contentFilas.addEventListener("click", function (event) {
    if (event.target.classList.contains("delete-button")) {
        const productId = parseInt(event.target.closest("tr").querySelector(".id").textContent);
        const index = productos.findIndex((item) => item.id === productId);
        if (index !== -1) {
            productos.splice(index, 1);
            contentFilas.textContent = "";
            filasTabla();
            calcularTotal();
        }
    }
});

function calcularTotal() {
    const totalElement = document.querySelector("#total");
    const total = productos.reduce((acc, item) => acc + item.price * item.quantity, 0);
    totalElement.textContent = `Total: $${total.toFixed(2)}`;
}

function filasTabla() {
    productos.forEach((item) => {
        const clone = templateFilas.content.cloneNode(true);

        clone.querySelector(".id").textContent = item.id;
        clone.querySelector(".name").textContent = item.name;
        clone.querySelector(".price").textContent = `$${item.price.toFixed(2)}`;
        clone.querySelector(".quantity").textContent = item.quantity;

        fragment.appendChild(clone);
    });

    contentFilas.appendChild(fragment);
}

function onInit(){
    filasTabla();
    calcularTotal();
}

onInit();

