let productos;
async function obtenerProductos() {
    try {
        const response = await fetch('http://localhost:8080/producto/obtener', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        console.log(response);
        productos = await response.json();
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
                    <button id="agregarProducto" class="btn-carrito" data-id="${producto.productId}">Agregar al carro</button>
                </div>
            </div>
        `;
    });
    contenedorProductos.innerHTML = elemento;


    const botonesCarrito = document.querySelectorAll('.btn-carrito');
    botonesCarrito.forEach(boton => {
        boton.addEventListener('click', function (event) {
            const idProducto = parseInt(event.target.getAttribute('data-id'));
            agregarAlCarrito(idProducto);
            Swal.fire({
                icon: 'success',
                title: 'Agregado con éxito',
                text: 'El producto se ha agregado al carro de compras correctamente.',
            });
            boton.removeEventListener('click', function (event) {
                const idProducto = parseInt(event.target.getAttribute('data-id'));
                agregarAlCarrito(idProducto, productos)
            })
        });
    });
}

// document.addEventListener('DOMContentLoaded', obtenerProductos);

function agregarAlCarrito(idProducto) {
    const parseProducts = JSON.parse(JSON.stringify(productos));
    const producto = parseProducts.find(prod => prod.productId == idProducto);
    console.log(producto);
    console.log(parseProducts);
    // console.log(idProducto+" "+JSON.stringify(productos));
    let carrito = JSON.parse(localStorage.getItem('carrito') || '[]');
    if (carrito.length) {
        let productoEnCarrito = carrito.find(item => item.productId === idProducto);
        if (productoEnCarrito) {
            console.log("JHSDJKHFKSDHK");
            carrito.map(p => {
                console.log(p);
                if (p.productId == idProducto) {
                    p = { ...p, cantidad: p.cantidad += 1 }
                    return
                }
            })
            localStorage.setItem('carrito', JSON.stringify(carrito))
        }
        else {
            carrito.push({ ...producto, cantidad: 1 });
            console.log(carrito);
        }
    }
    else {
        carrito.push({ ...producto, cantidad: 1 });
        console.log(carrito);
    }

    localStorage.setItem('carrito', JSON.stringify(carrito));


}
document.addEventListener('DOMContentLoaded', obtenerProductos);



//---------------------------------------------------------------------------------------

// let productos = [];

// async function obtenerProductos() {
//   try {
//     const response = await fetch('http://localhost:8080/producto/obtener', {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });
//     console.log(response);
//     productos = await response.json();
//     console.log(productos);
//     actualizarHTMLProductos(productos);
//   } catch (error) {
//     console.error('Error al obtener los productos:', error);
//   }
// }

// function actualizarHTMLProductos(productos) {
//   const contenedorProductos = document.getElementById('contenedorProductos');
//   let elemento = '';
//   productos.forEach(producto => {
//     elemento += `
//       <div class="producto_hijo">
//         <div class="contenedor_img">
//           <img class="imagen" src="${producto.imagen}">
//         </div>
//         <div class="texto_contenido">
//           <h3 class="titulo">${producto.nombre}</h3>
//           <p class="descripcion">${producto.descripcion}</p>
//           <p class="precio">Precio por libra: $${producto.precio}</p>
//           <button id="agregarProducto" class="btn-carrito" data-id="${producto.productId}">Agregar al carro</button>
//         </div>
//       </div>
//     `;
//   });
//   contenedorProductos.innerHTML = elemento;

//   const botonesCarrito = document.querySelectorAll('.btn-carrito');
//   botonesCarrito.forEach(boton => {
//     boton.addEventListener('click', function(event) {
//       const idProducto = parseInt(event.target.getAttribute('data-id'));
//       agregarAlCarrito(idProducto);
//       Swal.fire({
//         icon: 'success',
//         title: 'Agregado con éxito',
//         text: 'El producto se ha agregado al carro de compras correctamente.',
//       });
//     });
//   });
// }

// document.addEventListener('DOMContentLoaded', obtenerProductos);

// function agregarAlCarrito(idProducto) {
//   const producto = productos.find(prod => prod.id === idProducto);
//   if (!producto) {
//     console.log(producto);
//     console.error('Producto no encontrado');
//     return;
//   }

//   let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

//   let productoEnCarrito = carrito.find(item => item.id === idProducto);
//   if (productoEnCarrito) {
//     productoEnCarrito.cantidad += 1;
//   } else {
//     const nuevoProducto = { ...producto, cantidad: 1 };
//     carrito.push(nuevoProducto);
//   }

//   localStorage.setItem('carrito', JSON.stringify(carrito));
// }

