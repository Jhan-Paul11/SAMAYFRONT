document.addEventListener('DOMContentLoaded', () => {
    const iconoBusqueda = document.getElementById('icono-busqueda');
    const campoBusquedaContainer = document.getElementById('campo-busqueda-container');
    const iconoMenu = document.getElementById('icono-menu');
    const barraNavegacion = document.getElementById('barra-navegacion');

    iconoBusqueda.addEventListener('click', () => {
        if (campoBusquedaContainer.style.display === 'none' || campoBusquedaContainer.style.display === '') {
            campoBusquedaContainer.style.display = 'block';
        } else {
            campoBusquedaContainer.style.display = 'none';
        }
    });

    iconoMenu.addEventListener('click', () => {
        if (barraNavegacion.style.display === 'none' || barraNavegacion.style.display === '') {
            barraNavegacion.style.display = 'flex';
        } else {
            barraNavegacion.style.display = 'none';
        }
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const registrarseNav = document.getElementById('registrarseNav');

    registrarseNav.addEventListener('click', () => {
        const nombreUsuario = prompt("Por favor, ingresa tu nombre:");
        if (nombreUsuario) {
            alert(`Hola, usuario ${nombreUsuario}`);
        } else {
            alert("Hola, usuario desconocido");
        }
    });
});