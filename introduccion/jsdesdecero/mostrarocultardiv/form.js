window.addEventListener('load', init, false);
function init(){
    let div = document.querySelector('#ocultar-y-mostrar');
    div.style.visibility = 'visible';

    let boton = document.querySelector('#ocultar-mostrar');
    boton.addEventListener('click', function(e){
        if(div.style.visibility === 'visible'){
            div.style.visibility = 'hidden';
        }else{
            div.style.visibility = 'visible';
        }
    }, false);
}



window.addEventListener('submit', function(event) {
        // Evitar el envío del formulario por defecto
        event.preventDefault();

        // Obtener los valores de los campos
        var nombre = document.getElementById('nombre').value;
        var email = document.getElementById('email').value;
        var contrasena = document.getElementById('contrasena').value;

        // Validar los campos (puedes agregar tus propias condiciones aquí)
        if (nombre && email && contrasena) {
            // Si todos los campos son válidos, enviar el formulario
            this.submit();
        } else {
            alert('Por favor, completa todos los campos.');
        }
    });

