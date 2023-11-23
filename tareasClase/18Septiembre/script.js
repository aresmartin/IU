document.addEventListener('DOMContentLoaded', function() {
    // Función para mostrar el div de información
    function mostrarInfo() {
        document.getElementById('infoDiv').style.display = 'block';
    }

    // Función para ocultar el div de información
    function ocultarInfo() {
        document.getElementById('infoDiv').style.display = 'none';
    }

    // Función para validar los campos del formulario
    function validarFormulario(event) {
        event.preventDefault(); // Evita el envío del formulario por defecto

        var nombre = document.getElementById('nombre').value;
        var email = document.getElementById('email').value;

        // Validación de campos (puedes agregar más validaciones según tus necesidades)
        if (nombre.trim() === '' || !/^[a-zA-Z\s]+$/.test(nombre)) {
            alert('Por favor ingresa un nombre válido');
            return;
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
            alert('Por favor ingresa un email válido');
            return;
        }

        // Si todos los campos son válidos, se muestra el div de información
        mostrarInfo();
    }

    // Función para validar campos al salir del foco
    function validarCampo(event) {
        var campo = event.target;
        var valor = campo.value;

        // Validación de campo (puedes agregar más validaciones según tus necesidades)
        if (campo.type === 'text' && (valor.trim() === '' || !/^[a-zA-Z\s]+$/.test(valor))) {
            alert('Por favor ingresa un valor válido para este campo');
        }
    }

    // Asignar eventos a los elementos
    document.getElementById('miFormulario').addEventListener('submit', validarFormulario);

    var inputs = document.querySelectorAll('input[type=text]');
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('blur', validarCampo);
    }

    document.getElementById('email').addEventListener('blur', validarCampo);

    document.getElementById('cerrarInfo').addEventListener('click', ocultarInfo);
});

