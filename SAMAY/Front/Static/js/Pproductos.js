
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
                    <button id="agregarProducto" class="btn-carrito" data-id="${producto.productId} onclick="agregarProductoAlCarrito(1, 1)" ">Agregar al carro</button>
                </div>
            </div>
        `;
    });
    
    contenedorProductos.innerHTML = elemento;

   
    document.querySelectorAll('.btn-carrito').forEach(button => {
        button.addEventListener('click', function(event) {
            const productoId = event.target.getAttribute('data-id');
            agregarProductoAlCarrito(1, productoId); // Usamos carritoId 1 como ejemplo
        });
    });
}

async function agregarProductoAlCarrito(carritoId, productoId) {
    try {
        const response = await fetch(`http://localhost:8080/api/carrito/${carritoId}/productos/${productoId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        console.log('Producto agregado:', data);
        
        mostrarCarrito();
    } catch (error) {
        console.error('Error:', error);
    }
}

async function eliminarProductoDelCarrito(carritoId, productoId) {
    try {
        const response = await fetch(`http://localhost:8080/api/carrito/${carritoId}/productos/${productoId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        console.log('Producto eliminado:', data);
        mostrarCarrito();
    } catch (error) {
        console.error('Error:', error);
    }
}

async function actualizarCarrito(carritoId, productosIds) {
    try {
        const response = await fetch(`http://localhost:8080/api/carrito/${carritoId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productosIds)
        });
        const data = await response.json();
        console.log('Carrito actualizado:', data);
        mostrarCarrito();
    } catch (error) {
        console.error('Error:', error);
    }
}

async function mostrarCarrito() {
    try {
        const response = await fetch(`http://localhost:8080/api/carrito/1`, { // Usamos carritoId 1 como ejemplo
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const carrito = await response.json();
        actualizarHTMLCarrito(carrito.productos);
        
    } catch (error) {
        console.error('Error al mostrar el carrito:', error);
    }
}

function actualizarHTMLCarrito(productos) {
    const carritoItems = document.getElementById('carritoItems');
    const precioTotal = document.getElementById('precioTotal');
    let elemento = '';
    let total = 0;

    productos.forEach(producto => {
        elemento += `
            <div class="carrito-item">
                <p class="nombre">${producto.nombre}</p>
                <p class="cantidad">
                    <button class="decrementar" data-id="${producto.productId}" data-change="-1">-</button>
                    ${producto.cantidad}
                    <button class="incrementar" data-id="${producto.productId}" data-change="1">+</button>
                </p>
                <p class="precio-total">$ ${(producto.precio * producto.cantidad).toFixed(2)}</p>
            </div>
        `;
        total += producto.precio * producto.cantidad;
    });

    carritoItems.innerHTML = elemento;
    precioTotal.textContent = `$ ${total.toFixed(2)}`;

    document.querySelectorAll('.decrementar, .incrementar').forEach(button => {
        button.addEventListener('click', function(event) {
            const idProducto = parseInt(event.target.getAttribute('data-id'));
            const cambioCantidad = parseInt(event.target.getAttribute('data-change'));
            cambiarCantidad(idProducto, cambioCantidad);
        });
    });
}

function cambiarCantidad(idProducto, cambioCantidad) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const productoEnCarrito = carrito.find(prod => prod.productId === idProducto);

    if (productoEnCarrito) {
        productoEnCarrito.cantidad += cambioCantidad;

        if (productoEnCarrito.cantidad === 0) {
            carrito = carrito.filter(prod => prod.productId !== idProducto);
        }

        localStorage.setItem('carrito', JSON.stringify(carrito));
        mostrarCarrito();
    }
}

document.addEventListener('DOMContentLoaded', function() {
    obtenerProductos();
    mostrarCarrito();
});
     
    


    // const botonesCarrito = document.querySelectorAll('.btn-carrito');
    // botonesCarrito.forEach(boton => {
    //     boton.addEventListener('click', function(event) {
    //         const idProducto = parseInt(event.target.getAttribute('data-id'));
    //         agregarAlCarrito(idProducto);
    //         let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    //         carrito.push(productoConCantidad);
    //         Swal.fire({
    //             icon: 'success',
    //             title: 'Agregado con éxito',
    //             text: 'El producto se ha agregado al carro de compras correctamente.',
    //         });
    //     });
    // });

//---------------------------------------------------------------------------------
// function agregarAlCarrito(idProducto) {
//     const producto = productos.find(prod => prod.productId === idProducto);
//     if (!producto) {
//         console.error(`Producto con ID ${idProducto} no encontrado.`);
//         return;
//     }

//     let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
//     let productoEnCarrito = carrito.find(item => item.productId === idProducto);

//     if (productoEnCarrito) {
//         productoEnCarrito.cantidad += 1;
//     } else {
//         let productoConCantidad = { ...producto, cantidad: 1 };
//         carrito.push(productoConCantidad);
//     }

//     localStorage.setItem('carrito', JSON.stringify(carrito));
//     console.log(`Producto con ID ${idProducto} agregado al carrito.`);
//     console.log('Carrito actual:', carrito);
// }

// function agregarAlCarrito(idProducto) {
//     const producto = productos.find(prod => prod.id === idProducto);
//     let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

//     let productoEnCarrito = carrito.find(item => item.id === idProducto);
//     if (productoEnCarrito) {
//         productoEnCarrito.cantidad += 1;
//     } else {
//         producto.cantidad = 1;
//         carrito.push(producto);
//     }
   
//     localStorage.setItem('carrito', JSON.stringify(carrito));
//     console.log(`Producto con ID ${idProducto} agregado al carrito.`);
// }


// Llama a la función obtenerProductos cuando la página se carga
document.addEventListener('DOMContentLoaded', obtenerProductos);
 