// Función para mostrar el mensaje de éxito y limpiar el formulario
function mostrarMensajeExito() {
    // Mostrar el mensaje de éxito
    document.getElementById('mensajeExito').style.display = 'block';

    // Limpiar los campos del formulario después de enviar los datos
    document.getElementById('nombre').value = '';
    document.getElementById('telefono').value = '';
    document.getElementById('correo').value = '';
    document.getElementById('asunto').value = '';

    // Ocultar el mensaje después de 5 segundos (5000 ms)
    setTimeout(function() {
        document.getElementById('mensajeExito').style.display = 'none';
    }, 5000);
}

document.addEventListener('DOMContentLoaded', function() {
    var enviarBtn = document.getElementById('enviarBtn');
    enviarBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Prevenir el comportamiento por defecto del formulario (si lo hubiera)
        mostrarMensajeExito(); // Llamar a la función para mostrar el mensaje de éxito y limpiar el formulario
    });
});
