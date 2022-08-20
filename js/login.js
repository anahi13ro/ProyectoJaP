let email = document.getElementById("email");
let contraseña = document.getElementById("contraseña");
let boton = document.getElementById("butIngres");

boton.addEventListener("click", validacionIngreso);
 
function validacionIngreso() {
    if (email.value.length > 0 && contraseña.value.length > 0) {
       location.replace("index2.html");
    } else {
          document.getElementById("olvidoMail").innerHTML = "Ingresa tu e-mail";
          document.getElementById("olvidoContr").innerHTML = "ingresa tu contraseña";

        }
     
    }



