document.addEventListener('DOMContentLoaded', function() {
    const carritoItems = document.getElementById('carritoItems');
    const precioTotal = document.getElementById('precioTotal');

    function mostrarCarrito() {
        let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
        let elemento = '';
        let total = 0;

        carrito.forEach(producto => {
            elemento += `
                <div class="carrito-item">
                    <p class="nombre">${producto.nombre}</p>
                    <p class="cantidad">
                        <button class="decrementar" data-id="${producto.id}" data-change="-1">-</button>
                        ${producto.cantidad}
                        <button class="incrementar" data-id="${producto.id}" data-change="1">+</button>
                    </p>
                    <p class="precio-total">$ ${(producto.precioporlibra * producto.cantidad).toFixed(2)}</p>
                </div>
            `;
            total += producto.precioporlibra * producto.cantidad;
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

    function cambiarCantidad(idProducto, nuevaCantidad) {
        let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
        const productoEnCarrito = carrito.find(prod => prod.id === idProducto);

        if (productoEnCarrito) {
            productoEnCarrito.cantidad += nuevaCantidad;

            if (productoEnCarrito.cantidad === 0) {
                carrito = carrito.filter(prod => prod.id !== idProducto);
            }

            localStorage.setItem('carrito', JSON.stringify(carrito));
            mostrarCarrito();
        }
    }

    mostrarCarrito();
});
