/*async function obtenerProductos() {
    try {
        const response = await fetch('http://localhost:8080/producto/obtener',{'mode':'no-cors'});
        console.log(response);
        const productos = await response.json();
       
        //actualizarHTMLProductos(productos);
    } catch (error) {
        console.error('Error al obtener los productos:', error);
    }
}*/

async function obtenerProductos() {
    try {
        const response = await fetch('http://localhost:8080/producto/obtener', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                // Agrega cualquier encabezado adicional que necesites
            },
            // No necesitas especificar 'mode' a menos que necesites cambiarlo específicamente
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
}

document.addEventListener('DOMContentLoaded', obtenerProductos);
 