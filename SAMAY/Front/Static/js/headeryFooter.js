const header = document.querySelector('header');
const footer = document.querySelector('footer');

header.innerHTML = `

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
<link rel="stylesheet" href="../styles/carrito.css" />
   <div id="encabezado">
        <div class="tamano_contenido_nav">
            <div id="barra-busqueda">
                <div id="menu-icono">
                    <button id="icono-menu" class="icono"><i class="fa-solid fa-bars fa-lg" style="color: #0d0d0d;"></i></i></button>
                    <button id="icono-busqueda" class="icono"><i class="fa-solid fa-magnifying-glass fa-lg" style="color: #000000;"></i></button>
                </div>
                <div class="logo">
                    <a href="../html/Pinicio.html" id="logo1">SAMAY</a>
                </div>
                <div id="acciones-usuario">
                
                <div id="carrito-modal" class="modal"  data-aos="fade-left">
                        <div class="modal-content">
                        <span class="close">&times;</span>
                        
                        <div id="carrito-items"></div>
                    </div>
                </div>
                    <a href="../html/Pcompra.html" id="icono-carrito" class="icono">
                        <i class="fa-solid fa-cart-shopping fa-lg tamano" id="carritoCom" style="color: #030303;"></i>
                    </a>
                    <a href="../html/login.html" id="icono-usuario" class="icono">
                        <i class="fa-solid fa-user fa-lg" style="color: #030303;"></i>
                    </a>
                    
                    <a id="registrarseNav" href="../html/registro.html" target="_blank" class="button-link">Registrarse</a>
                    <a id="ingresarNav" href="../html/login.html" target="_blank" class="button-link">Ingresar</a>
                </div>
            </div>
            <div id="campo-busqueda-container">
                <input type="text" id="campo-busqueda" placeholder="¿Qué te gustaría comprar?">
            </div>
            <nav id="barra-navegacion">
                <ul id="menu">
                    <li><a href="../html/Pinicio.html" class="enlace-menu">Inicio</a></li>
                    <li><a href="../html/Pnosotros.html" class="enlace-menu">Nosotros</a></li>
                    <li><a href="../html/Pproductos.html" class="enlace-menu">Productos</a></li>
                    <li><a href="../html/contacto.html" class="enlace-menu">Contacto</a></li>
                    <li><a href="../html/blog.html" class="enlace-menu">Blog</a></li>
                </ul>
            </nav>
        </div>
    </div>
    
`;

footer.innerHTML = `
    <div id="pie-de-pagina">
       <div class="contenido">
        <div id="contenido-pie">
            <div class="columna" id="acerca-de">
                <h2>Acerca de Nosotros</h2>
                <p>
                    Actuamos con honestidad, transparencia y responsabilidad en todas nuestras relaciones. Buscando siempre nuevas y mejores formas de conectar a productores y consumidores, utilizando la tecnología para impulsar el cambio. Queremos promover el comercio justo y la distribución equitativa de los beneficios, asegurando que todos los actores de la cadena de valor sean tratados con respeto y dignidad. Nos comprometemos con prácticas agrícolas y comerciales sostenibles que protegen el medio ambiente y garantizan la seguridad alimentaria para las generaciones futuras.  
                </p>
            </div>
                <div class="hipervinculos">
                    <div class="columna1" id="aprende-mas">
                        <div id="parte1">
                            <h2>Aprende Más</h2>
                            <ul>
                                <li><a href="../html/Pnosotros.html">Acerca de Nosotros</a></li>
                                <li><a href="../html/contacto.html">FAQ</a></li>
                            </ul>
                        </div>
                            <div id="parte2">
                            <h2>Compra</h2>
                            <ul>
                                <li><a href="../html/Pproductos.html">Productos</a></li>
                                <li><a href="../html/Pcompra.html">Formulario de Pago</a></li>
                                <li><a href="../html/contacto.html" id="diferente">Danos tu opinión</a></li>
                            </ul>
                        </div>
                        </div>
                        <div class="columna1" id="recetas">
                            <h2>Productos</h2>
                            <ul>
                                <li>Vegetales</li>
                                <li>Frutas</li>
                                <li>Artesanías</li>
                                
                        </div>
                </div>
          
        </div>
        <div id="legal">
            <p>&copy; 2024 Samay Company | <a href="#">Privacy Policy</a> | <a href="#">Uso académico</a> </p>
        </div>

       </div>
    </div>
`;
