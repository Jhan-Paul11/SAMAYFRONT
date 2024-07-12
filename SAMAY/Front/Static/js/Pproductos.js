document.addEventListener('DOMContentLoaded', function() {
    let productos = [
        {
            nombre: "Papa",
            id: 1, 
            imagen: "/SAMAY/Front/Images/papa.jpg",
            precioporlibra: 1300,
            cantidadStock: 231,
            descripcion: "Un tubérculo versátil y nutritivo, ideal para preparar una gran variedad de platos. Disfrútala asada, frita, en puré o en tus guisos favoritos."
        },
        {
            nombre: "Aguacate",
            id: 2, 
            imagen: "/SAMAY/Front/Images/aguacate.jpg",
            precioporlibra: 4389,
            cantidadStock: 85,
            descripcion: "Rico en nutrientes y con un sabor cremoso que lo hace perfecto para ensaladas, guacamole, sándwiches y mucho más."
        },
        {
            nombre: "Mango",
            id: 3, 
            imagen: "/SAMAY/Front/Images/mango.jpg",
            precioporlibra: 3464,
            cantidadStock: 152,
            descripcion: "Una fruta tropical deliciosa y jugosa, ideal para consumir sola, en ensaladas, postres o para preparar batidos refrescantes."
        },
        {
            nombre: "Fresa",
            id: 4, 
            imagen: "/SAMAY/Front/Images/fresa.jpg",
            precioporlibra: 6150,
            cantidadStock: 173,
            descripcion: "Pequeñas y dulces, las fresas son una fuente de vitamina C y antioxidantes. Perfectas para consumir frescas, en ensaladas, postres o para preparar mermeladas."
        },
        {
            nombre: "Lechuga",
            id: 5, 
            imagen: "/SAMAY/Front/Images/lechuga.jpg",
            precioporlibra: 3490,
            cantidadStock: 267,
            descripcion: "Fresca y crujiente, la lechuga es un ingrediente esencial para ensaladas, sándwiches y wraps. Aporta vitaminas y minerales a tu dieta."
        },
        {
            nombre: "Mandarina",
            id: 6, 
            imagen: "/SAMAY/Front/Images/mandarina.jpg",
            precioporlibra: 4990,
            cantidadStock: 234,
            descripcion: "Un cítrico dulce y fácil de pelar, ideal para consumir como snack, en ensaladas o para preparar jugos. Rica en vitamina C y fibra."
        },
        {
            nombre: "Piña",
            id: 7, 
            imagen: "/SAMAY/Front/Images/piña.jpg",
            precioporlibra: 3470,
            cantidadStock: 176,
            descripcion: "Una fruta tropical exótica con un sabor dulce y ácido. Perfecta para consumir fresca, en ensaladas, postres o para preparar jugos."
        },
        {
            nombre: "Guanábana",
            id: 8, 
            imagen: "/SAMAY/Front/Images/guanaba.jpg",
            precioporlibra: 3867,
            cantidadStock: 150,
            descripcion: "Una fruta tropical con un sabor único y un aroma refrescante. Ideal para preparar jugos, batidos, postres o consumir fresca."
        },
        {
            nombre: "Banano",
            id: 9, 
            imagen: "/SAMAY/Front/Images/banana.jpg",
            precioporlibra: 1695,
            cantidadStock: 340,
            descripcion: "Una fruta rica en potasio y muy energética. Perfecta para consumir como snack, en batidos, para preparar postres o como ingrediente en tus recetas."
        },
        {
            nombre: "Mora",
            id: 10, 
            imagen: "/SAMAY/Front/Images/mora.jpg",
            precioporlibra: 6300,
            cantidadStock: 200,
            descripcion: "Pequeñas y deliciosas, las moras son una fuente de antioxidantes y fibra. Perfectas para consumir frescas, en ensaladas, postres o para preparar mermeladas."
        }
    ];
    
    const productosGuardados = JSON.parse(localStorage.getItem("productos"));
    
    if (productosGuardados) {
        productos = productosGuardados;
    }
    
    const contenedorProductos = document.getElementById('contenedorProductos');
    
    function actualizarHTMLProductos(contenedorHTML) {
        let elemento = '';
        productos.forEach(producto => {
            elemento += `
                <div class="producto_hijo">
                    <div class="contenedor_img">
                        <img class="imagen" src="${producto.imagen}">
                    </div>
                    <div class="texto_contenido">
                        <h3 class="titulo">${producto.nombre}</h3>
                        <p class="descripcion"> ${producto.descripcion}</p>
                        <p class="precio">Precio por libra: $ ${producto.precioporlibra}</p>
                        <button class="btn-carrito" data-id="${producto.id}">Agregar al carro</button>
                    </div>
                </div>
            `;
        });
        contenedorHTML.innerHTML = elemento;


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
    
    actualizarHTMLProductos(contenedorProductos);

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
});
