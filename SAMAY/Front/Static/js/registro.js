// const usuarios=[
//  {   email:"samay@gail.com",
//     password:"somosGrupo6"
//  }
//  ,

// ]
// const usuariosGuardados=JSON.parse(localStorage.getItem('usuarios'))

document.getElementById('formulario_registro').addEventListener('submit',(event)=>{
    event.preventDefault();

    const correo =document.getElementById('email').value;
    const constraseña=document.getElementById('password').value;
    const confirmarPassword = document.getElementById('confirmar_contraseña').value;

    //validar que las contraseñas coincidan
    if (constraseña!==confirmarPassword){
        // alert('las contraseñas no coinciden')
        Swal.fire({
            icon: "error",
            titulo:"¡ups!",
            text:"la contraseña no coincide",
            footer:'<a href:"#" >vuelve a intertarlo</a>',
            customClass:{   
                confirmButton:'Swal-confirm'
            }
        });
    }else{
    // guardo los  datos en mi storage
    localStorage.setItem('email',correo);
    localStorage.setItem('password',constraseña);
    // alert ('datos guardados en local storage');
    Swal.fire({
        position: "center",
        icon: "success",
        title: "Te has registrado correctamente",
        showConfirmButton: false,
        timer: 1500,
        
      });
    document.getElementById('formulario_registro').reset();
    }



});

function validarCorreo(email) {
    // Expresión regular para validar el correo electrónico
    const validacionCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return validacionCorreo.test(email);
}

function cargarDatos(){
    const correo=localStorage.getItem('email');
    const constraseña=localStorage.getItem('password');

    if (correo){
        document.getElementById('email').value=correo;
    }
    if(constraseña){
        document.getElementById('password').value=constraseña;
    }
}
window.onload=cargarDatos;


function toggleContraseña(campopas) {
    const campoContraseña = document.getElementById(campopas);
    const icon = campoContraseña.nextElementSibling.querySelector('i');
    if (campoContraseña.type === "password") {
        campoContraseña.type = "text";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    } else {
        campoContraseña.type = "password";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    }
}