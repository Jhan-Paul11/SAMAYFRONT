async function obtenerProductos() {
    try {
        const response = await fetch('http://localhost:8080/producto/obtener');
        const productos = await response.json();
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
                    <h3 class="titulo">${producto.productName}</h3>
                    <p class="descripcion">${producto.descripcion}</p>
                    <p class="precio">Precio por libra: $${producto.unitPrice}</p>
                </div>
            </div>
        `;
    });
    contenedorProductos.innerHTML = elemento;
}

document.addEventListener('DOMContentLoaded', obtenerProductos);
 