// Función para mostrar el mensaje de éxito y limpiar el formulario
function mostrarMensajeExito() {
    // Mostrar el mensaje de éxito
    document.getElementById('mensajeExito').style.display = 'block';

    // Limpiar los campos del formulario después de enviar los datos
    document.getElementById('nombre').value = '';
    document.getElementById('telefono').value = '';
    document.getElementById('correo').value = '';
    document.getElementById('asunto').value = '';
    document.getElementById('mensaje').value = '';

    // Ocultar el mensaje después de 5 segundos (5000 ms)
    setTimeout(function() {
        document.getElementById('mensajeExito').style.display = 'none';
    }, 5000);
}

