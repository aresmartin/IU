// index.js

document.addEventListener('DOMContentLoaded', (event) => {
    let validar = null;

    function showUserMessage(message) {
        const modal = document.getElementById('error_action_modal');
        const msgElement = document.getElementById('error_action_msg');
        msgElement.textContent = message;
        modal.style.display = 'block';
    }

    document.getElementById('botonADD').onclick = () => {
        if (validar && typeof validar.createForm_ADD === 'function') {
            validar.createForm_ADD();
        } else {
            console.error('No hay una instancia válida de entidad para ejecutar createForm_ADD');
            showUserMessage('Por favor, seleccione una entidad antes de añadir un registro.');
        }
    };

    document.getElementById('botonSEARCH').onclick = () => {
        if (validar && typeof validar.createForm_SEARCH === 'function') {
            validar.createForm_SEARCH();
        } else {
            console.error('No hay una instancia válida de entidad para ejecutar createForm_SEARCH');
            showUserMessage('Por favor, seleccione una entidad antes de realizar una búsqueda.');
        }
    };

    // Evento para seleccionar la entidad 'characteristic'
    document.querySelector('.text_characteristic').addEventListener('click', async () => {
        validar = new characteristic();
        document.getElementById('id_tabla_datos').style.display = 'block';
        document.getElementById('div_IU_form').style.display = 'none';
        document.getElementById('div_IU_test').style.display = 'none';
        document.getElementById('title_page').style.display = 'block';

        try {
            await validar.loadAndDisplayData(); // Cargamos los datos al seleccionar la entidad
        } catch (error) {
            console.error('Error al cargar datos:', error);
            showUserMessage('Error al cargar los datos. Inténtalo de nuevo más tarde.');
        }
    });

    document.querySelector('#error_action_modal button').addEventListener('click', () => {
        document.getElementById('error_action_modal').style.display = 'none';
    });

    // Aquí podrías añadir más lógica para manejar otros eventos o interactividad
});