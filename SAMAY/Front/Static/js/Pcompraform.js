document.addEventListener('DOMContentLoaded', function() {
    const submitBtn = document.getElementById('submit-btn');
  
    submitBtn.addEventListener('click', function(event) {
      event.preventDefault();
  
      const nombre = document.getElementById('nombre').value.trim();
      const apellido = document.getElementById('apellido').value.trim();
      const email = document.getElementById('email').value.trim();
      const telefono = document.getElementById('telefono').value.trim();
      const localidad = document.getElementById('localidad').value.trim();
      const barrio = document.getElementById('barrio').value.trim();
      const direccion = document.getElementById('direccion').value.trim();
  
      if (!nombre || !apellido || !email || !telefono || !localidad || !barrio || !direccion) {
        Swal.fire({
          icon: 'error',
          title: '¡Atención!',
          text: 'Todos los campos del formulario son requeridos.'
        });
        return;
      }
  
      if (!validarEmail(email)) {
        Swal.fire({
          icon: 'error',
          title: 'Correo no válido',
          text: 'Por favor, ingrese un correo electrónico válido.'
        });
        return;
      }
  
      if (!validarTelefono(telefono)) {
        Swal.fire({
          icon: 'error',
          title: 'Teléfono no válido',
          text: 'Por favor, ingrese un número de teléfono válido.'
        });
        return;
      }
  
      if (!validarLocalidad(localidad)) {
        Swal.fire({
          icon: 'error',
          title: 'Localidad no válida',
          text: 'Por favor, ingrese una localidad válida'
        });
        return;
      }
  
      Swal.fire({
        icon: 'success',
        title: 'Enviado con éxito',
        text: 'Un asesor se comunicará con usted para terminar su compra.',
      });
    });
  
    function validarEmail(email) {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
    }
  
    function validarTelefono(telefono) {
      const regex = /^(3\d{9}|60\d{8})$/;
      return regex.test(telefono);
    }
  
    function validarLocalidad(localidad) {
      const localidades = [
        'usaquén', 'chapinero', 'santa fe', 'san cristóbal', 'usme', 'tunjuelito', 'bosa', 'kennedy', 
        'fontibón', 'engativá', 'suba', 'barrios unidos', 'teusaquillo', 'los mártires', 'antonio nariño', 
        'puente aranda', 'la candelaria', 'rafael uribe uribe', 'ciudad bolívar', 'sumapaz'
      ];
      return localidades.includes(localidad.toLowerCase());
    }
  });
  