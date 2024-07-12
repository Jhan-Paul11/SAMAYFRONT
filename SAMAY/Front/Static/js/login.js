document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    const errorMessage = document.getElementById("errorMessage");

 
    const preStoredUser = {
        email:"tester@gmail.com",
        password: btoa("password123") 
    };

    
    if (!localStorage.getItem("user")) {
        localStorage.setItem("user", JSON.stringify(preStoredUser));
    }

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        
        const password = document.getElementById("password").value.trim();
        const email = document.getElementById("email").value.trim();

        if ( !password || !email) {
            errorMessage.textContent = "Por favor, complete todos los campos.";
            errorMessage.style.color = "#74A563";
            return;
        }

        
        const storedUser = JSON.parse(localStorage.getItem("user"));

      
        if ((password) === atob(storedUser.password) && email === atob(storedUser.email)) { //atob es una funcion de js que codifica la informacion
            errorMessage.textContent = "Inicio de sesión exitoso!";
            errorMessage.style.color = "#2E473B";
        } else {
            errorMessage.textContent = "Nombre de usuario o contraseña inválidos.";
            errorMessage.style.color = "#2E473B";
        }

        
    });
});