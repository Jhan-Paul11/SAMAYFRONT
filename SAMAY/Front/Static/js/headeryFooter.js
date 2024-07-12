const header = document.querySelector('header');
const footer = document.querySelector('footer');

header.innerHTML = `
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
   <div id="encabezado">
        <div class="tamano_contenido_nav">
            <div id="barra-busqueda">
                <div id="menu-icono">
                    <button id="icono-menu" class="icono"><i class="fa-solid fa-bars fa-lg" style="color: #0d0d0d;"></i></i></button>
                    <button id="icono-busqueda" class="icono"><i class="fa-solid fa-magnifying-glass fa-lg" style="color: #000000;"></i></button>
                </div>
                <div class="logo">
                    <a href="Pinicio.html" id="logo1">SAMAY</a>
                </div>
                <div id="acciones-usuario">
                    <button id="icono-carrito" class="icono"><i class="fa-solid fa-cart-shopping fa-lg  tamano" id="carritoCom" style="color: #030303;"></i></i></button>
                    <button id="icono-usuario" class="icono"><i class="fa-solid fa-user fa-lg" style="color: #030303;"></i></button>
                    <button id="registrarseNav">Registrarse</button>
                    <button id="ingresarNav">Ingresar</button>
                </div>
            </div>
            <div id="campo-busqueda-container">
                <input type="text" id="campo-busqueda" placeholder="¿Qué te gustaría comprar?">
                <button></button>
                <button></button>
            </div>
            <nav id="barra-navegacion">
                <ul id="menu">
                    <li><a href="Pinicio.html" class="enlace-menu">Inicio</a></li>
                    <li><a href="Pnosotros.html" class="enlace-menu">Nosotros</a></li>
                    <li><a href="Pproductos.html" class="enlace-menu">Productos</a></li>
                    <li><a href="contacto.html" class="enlace-menu">Contacto</a></li>
                    <li><a href="blog.html" class="enlace-menu">Blog</a></li>
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
                    New York Times Cooking offers subscribers recipes, advice and inspiration for better everyday cooking. From easy weeknight dinners to holiday meals, our recipes have been tested and perfected to meet the needs of home cooks of all levels. <a href="#">Subscribe now</a> for full access.
                </p>
            </div>
                <div class="hipervinculos">
                    <div class="columna1" id="aprende-mas">
                        <div id="parte1">
                            <h2>Aprende Mas</h2>
                            <ul>
                                <li><a href="Pnosotros.html">Acerca de Nosotros</a></li>
                                <li><a href="#">FAQ</a></li>
                            </ul>
                        </div>
                            <div id="parte2">
                            <h2>Compra</h2>
                            <ul>
                                <li><a href="#">Gift Subscription</a></li>
                                <li><a href="#">Merchandise</a></li>
                                <li><a href="#" id="diferente">Send Us Feedback</a></li>
                            </ul>
                        </div>
                        </div>
                        <div class="columna1" id="recetas">
                            <h2>Recipes</h2>
                            <ul>
                                <li><a href="#">From Our Newsletters</a></li>
                                <li><a href="#">Weeknight</a></li>
                                <li><a href="#">Pasta</a></li>
                                <li><a href="#">Dinner</a></li>
                                <li><a href="#">Healthy</a></li>
                                <li><a href="#">Vegetarian</a></li>
                                <li><a href="#">Vegan</a></li>
                                <li><a href="#">Thanksgiving</a></li>
                                <li><a href="#">Christmas</a></li>
                            </ul>
                        </div>
                </div>
          
        </div>
        <div id="legal">
            <p>&copy; 2024 Samay Company | <a href="#">Terms of Service</a> | <a href="#">Privacy Policy</a></p>
        </div>

       </div>
    </div>
`;
