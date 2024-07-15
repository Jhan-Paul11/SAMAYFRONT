
async function obtenerProductos() {
    try {
        const response = await fetch('http://localhost:8080/producto/obtener', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        console.log(response);
        const productos = await response.json();
        console.log(productos);
         actualizarHTMLProductos(productos);
    } catch (error) {
        console.error('Error al obtener los productos:', error);
    }
}


function actualizarHTMLProductos(productos) {
    const contenedorProductos = document.getElementById('contenedorProductos');
    let elemento = '';
    productos.forEach(producto => {
        elemento += `
            <div class="producto_hijo">
                <div class="contenedor_img">
                    <img class="imagen" src="${producto.imagen}">
                </div>
                <div class="texto_contenido">
                    <h3 class="titulo">${producto.nombre}</h3>
                    <p class="descripcion">${producto.descripcion}</p>
                    <p class="precio">Precio por libra: $${producto.precio}</p>
                    <button id="agregarProducto" class="btn-carrito" data-id="${producto.id}">Agregar al carro</button>
                </div>
            </div>
        `;
    });
    contenedorProductos.innerHTML = elemento;

    const botonesCarrito = document.querySelectorAll('.btn-carrito');
        botonesCarrito.forEach(boton => {
            boton.addEventListener('click', function(event) {
                const idProducto = parseInt(event.target.getAttribute('data-id'));
                agregarAlCarrito(idProducto);
                Swal.fire({
                    icon: 'success',
                    title: 'Agregado con éxito',
                    text: 'El producto se ha agregado al carro de compras correctamente.',
                });
            });
        });
}

document.addEventListener('DOMContentLoaded', obtenerProductos);

function agregarAlCarrito(idProducto) {
    const producto = productos.find(prod => prod.id === idProducto);
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    let productoEnCarrito = carrito.find(item => item.id === idProducto);
    if (productoEnCarrito) {
        productoEnCarrito.cantidad += 1;
    } else {
        producto.cantidad = 1;
        carrito.push(producto);
    }

    localStorage.setItem('carrito', JSON.stringify(carrito));
}

 