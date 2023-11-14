/* Este codigo permite hacer visible o ocultar el menu en dispositivos moviles o resoluciones menores a 768px */

const nav = document.querySelector("#nav"); /* Constante nav asignada a mi ID nav del archivo index */
const abrirm = document.querySelector("#abrirm"); /* Constante abrirm asignada a mi ID abrirm del archivo index (boton para abrir menu*/
const cerrarm =document.querySelector("#cerrarm"); /* Constante cerrarm asignada a mi ID cerrarm del archivo index (boton para cerrar menu*/

abrirm.addEventListener("click", () => {   /* La funcion addeventlistener registra un evento o accion a un objeto, en este caso un click. Cuando el usuario hace click se ejecuta la funcion
                                            acontinuacion de la flecha =>, la cual hace el menu visible en dispositivos moviles 
                                            o resoluciones menores a 768px */
    
    nav.classList.add("visible");
})

cerrarm.addEventListener("click", () => {  /* Igual que lo anteriormente mencionado, se agrega un addeventlistener a "cerrarm" 
                                            lo cual hace que el usuario al hacer click, elimina la clase "visible" a nav(menu) lo cual oculta el menu. */
    nav.classList.remove("visible");
})

/* Boton Servicios */

document.getElementById('servicios-boton').addEventListener('click', function() {
    // Redirige a la página servicios
    window.location.href = '../html/servicios.html';
  });

/* Boton Contacto */

document.getElementById('contacto-boton').addEventListener('click', function() {
    // Redirige a la página contacto
    window.location.href = '../html/contacto.html';
  });


/* Validacion Formulario CONTACTO */
  function validarFormulario() {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let email = document.getElementById("email").value;

    if (!esNombreValido(nombre)) {
        alert("El nombre debe contener solo letras y espacios.");
        return false;
    }

    if (!esNombreValido(apellido)) {
        alert("El apellido debe contener solo letras y espacios.");
        return false;
    }

    if (!esEmailValido(email)) {
        alert("Debe ser una dirección de correo válida.");
        return false;
    }
    alert("Enviado");
    return false;
}

function esNombreValido(nombre) { /* Nada de numeros o caracteres, solo letras */
    return /^[A-Za-z\s]+$/.test(nombre);
}

function esEmailValido(email) { /* Combinacion de numeros letras signos, pero con un @ entre medio*/
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
}

/* MODAL SERVICIOS */
  
function abrirModal(servicio, titulo, contenido) {
    let modal = document.getElementById("mimodal");
    let modalTitle = document.getElementById("titmodal");
    let modalContent = document.getElementById("contemodal");

   
    modalTitle.textContent = titulo;
    modalContent.innerHTML = contenido;
    modal.style.display = "block";    
}

function cerrarModal() {
    let modal = document.getElementById("mimodal");
    modal.style.display = "none";
}
