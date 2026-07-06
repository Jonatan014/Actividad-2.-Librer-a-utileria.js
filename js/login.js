function iniciarSesion(){
            let correo = document.getElementById("correo").value;
            let password = document.getElementById("password").value;

            if(validarCorreo(correo)){
                document.getElementById("mensajeCorreo").textContent = "Correo válido";
                document.getElementById("mensajeCorreo").style.color = "green";
            }else{
                document.getElementById("mensajeCorreo").textContent = "Correo inválido";
                document.getElementById("mensajeCorreo").style.color = "red";
            }

            if(validarPassword(password)){
                document.getElementById("mensajePassword").textContent = "Contraseña válida";
                document.getElementById("mensajePassword").style.color = "green";
            }else{
                document.getElementById("mensajePassword").textContent = "La contraseña debe tener mínimo 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial.";
                document.getElementById("mensajePassword").style.color = "red";
            }
        }