function validarCorreo(c) {
    let correo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return correo.test(c);
}

function soloLetras(l) {
    let letras = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    return letras.test(l);
}

function validarLongitud(n, lm) {
    return n.toString().length === lm;
}

function calcularEdad(fn) {
    let fechaNacimiento = new Date(fn);
    let fechaActual = new Date();

    let edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
    let mes = fechaActual.getMonth() - fechaNacimiento.getMonth();

    if (mes < 0 || (mes === 0 && fechaActual.getDate() < fechaNacimiento.getDate())){
        edad--;
    }
    return edad;
}

function esMayorDeEdad(fn) {
    return calcularEdad(fn) >= 18;
}

function validarPassword(pd){
    let password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.#_-])[A-Za-z\d@$!%*?&.#_-]{8,}$/;
    return password.test(pd);
}

function validarCodigoPostal(cp){
    let codigoPostal = /^\d{5}$/;
    return codigoPostal.test(cp);
}

function contarCaracteres(texto) {
    return texto.length;
}