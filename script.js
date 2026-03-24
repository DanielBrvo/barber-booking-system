const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const servicio = document.getElementById("servicio");
const fecha = document.getElementById("fecha");
const hora = document.getElementById("hora");
const mensajeExito = document.getElementById("form-sent");
///Cap-Error
const errorNombre = document.querySelector(".error-name");
const errorEmail = document.querySelector(".error-email");
const errorServicio = document.querySelector(".error-servicios");
const errorFecha = document.querySelector(".error-date");
const errorHora = document.querySelector(".error-time");
///Form
const form = document.querySelector(".form-reservas");

function validarEmail(email) {
    return email.includes("@") && email.includes(".");
}

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const nombreValor = nombre.value;
    const emailValor = email.value;
    const servicioValor = servicio.value;
    const fechaValor = fecha.value;
    const horaValor = hora.value;

    let hayErrores = false;

    if(nombreValor === "") {
        errorNombre.textContent = "El nombre es obligatorio";
        hayErrores = true;
    } else {
        errorNombre.textContent = "";
    }

    if(emailValor === "") {
        errorEmail.textContent = "El email es obligatorio";
        hayErrores = true;
    } else if(!validarEmail(emailValor)) {
        errorEmail.textContent = "El email no es válido";
        hayErrores = true;
    } else {
        errorEmail.textContent = "";
    }

    if(servicioValor === "") {
        errorServicio.textContent = "Selecciona un servicio";
        hayErrores = true;
    } else {
        errorServicio.textContent = "";
    }

    if(fechaValor === "") {
        errorFecha.textContent = "Selecciona una fecha";
        hayErrores = true;
    } else {
        errorFecha.textContent = "";
    }

    if(horaValor === "") {
        errorHora.textContent = "Selecciona una hora";
        hayErrores = true;
    } else {
        errorHora.textContent = "";
    }

    if(!hayErrores) {
        mensajeExito.textContent = "Reserva enviada con éxito ✅";
        form.reset();
    }
});