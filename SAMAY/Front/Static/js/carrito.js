const apiUrl = 'http://localhost:8080/api/carrito';

async function agregarProducto() {
    const nombre = document.getElementById('nombre').value;
    const precio = parseFloat(document.getElementById('precio').value);
    const cantidad = parseInt(document.getElementById('cantidad').value);

    const producto = {
        nombre: nombre,
        precio: precio,
        cantidad: cantidad
    };

    await fetch(`${apiUrl}/agregar`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(producto)
    });

    actualizarCarrito();
}

async function eliminarProducto(nombre) {
    await fetch(`${apiUrl}/eliminar/${nombre}`, {
        method: 'DELETE'
    });

    actualizarCarrito();
}

async function actualizarCarrito() {
    const response = await fetch(`${apiUrl}/productos`);
    const productos = await response.json();

    const productosList = document.getElementById('productos-list');
    productosList.innerHTML = '';

    productos.forEach(producto => {
        const li = document.createElement('li');
        li.textContent = `${producto.nombre} - Precio: $${producto.precio} - Cantidad: ${producto.cantidad} `;
        
        const eliminarButton = document.createElement('button');
        eliminarButton.textContent = 'Eliminar';
        eliminarButton.onclick = () => eliminarProducto(producto.nombre);
        li.appendChild(eliminarButton);

        productosList.appendChild(li);
    });

    const totalResponse = await fetch(`${apiUrl}/total`);
    const total = await totalResponse.text();
    document.getElementById('total').textContent = total;
}

document.addEventListener('DOMContentLoaded', actualizarCarrito);
