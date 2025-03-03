// characteristic.js

class characteristic extends EntidadAbstracta {
    constructor() {
        super('characteristic');
        this.formActions = ['ADD', 'SEARCH', 'EDIT', 'DELETE', 'SHOWCURRENT'];
        this.externalAccess = new ExternalAccess();
    }

    createForm_ADD() {
        let formContainer = document.getElementById('div_IU_form');
        formContainer.innerHTML = ''; // Limpiar el contenido previo
        this.createForm('ADD');
        this.showForm(formContainer);
    }

    createForm_SEARCH() {
        let formContainer = document.getElementById('div_IU_form');
        formContainer.innerHTML = ''; // Limpiar el contenido previo
        let searchForm = this.createForm('SEARCH');
        this.addSearchLogic(searchForm);
        this.showForm(formContainer);
    }

    createForm_EDIT(id) {
        let formContainer = document.getElementById('div_IU_form');
        formContainer.innerHTML = ''; // Limpiar el contenido previo
        this.loadItemData(id).then(data => {
            this.createForm('EDIT', data);
            this.showForm(formContainer);
        }).catch(error => {
            console.error("Error al cargar los datos del item:", error);
            this.showErrorModal(error.message);
        });
    }

    createForm_DELETE(id) {
        let formContainer = document.getElementById('div_IU_form');
        formContainer.innerHTML = ''; // Limpiar el contenido previo
        this.loadItemData(id).then(data => {
            this.createForm('DELETE', {id_characteristic: data.id_characteristic});
            this.showForm(formContainer);
        }).catch(error => {
            console.error("Error al cargar los datos del item:", error);
            this.showErrorModal(error.message);
        });
    }

    createForm_SHOWCURRENT(id) {
        let formContainer = document.getElementById('div_IU_form');
        formContainer.innerHTML = ''; // Limpiar el contenido previo
        this.loadItemData(id).then(data => {
            this.createForm('SHOWCURRENT', data);
            this.showForm(formContainer);
        }).catch(error => {
            console.error("Error al cargar los datos del item:", error);
            this.showErrorModal(error.message);
        });
    }

    showForm(formContainer) {
        document.getElementById('id_tabla_datos').style.display = 'none';
        document.getElementById('div_IU_form').style.display = 'block';
        document.getElementById('div_IU_test').style.display = 'none';
    }

    cerrar_formulario() {
        document.getElementById('div_IU_form').style.display = 'none';
        document.getElementById('id_tabla_datos').style.display = 'block';
    }

    cerrar_tabla() {
        document.getElementById('id_tabla_datos').style.display = 'none';
        document.getElementById('div-menu').style.display = 'block';
    }

    cerrarModalError() {
        document.getElementById('error_action_modal').style.display = 'none';
    }

    async loadItemData(id) {
        try {
            // Aquí deberías hacer una petición al backend para obtener los datos del ítem
            // Esto es solo un ejemplo, necesitarás adaptarlo a tu sistema de backend
            const response = await fetch(`URL_BACKEND/characteristic/${id}`);
            if (!response.ok) throw new Error('No se pudo cargar el ítem');
            return await response.json();
        } catch (error) {
            throw error;
        }
    }

    addSearchLogic(form) {
        const searchInput = document.createElement('input');
        searchInput.type = 'text';
        searchInput.placeholder = 'Buscar por nombre...';
        searchInput.id = 'searchInput';
        form.insertBefore(searchInput, form.firstChild);

        // Aquí puedes añadir más lógica para la búsqueda, como eventos de escucha para la búsqueda en tiempo real
        searchInput.addEventListener('input', () => {
            // Lógica para buscar en la base de datos o filtrar los resultados mostrados
            console.log('Búsqueda en proceso...');
        });
    }

    showErrorModal(message) {
        const modal = document.getElementById('error_action_modal');
        const msgElement = document.getElementById('error_action_msg');
        msgElement.textContent = message;
        modal.style.display = 'block';
    }

    test_run() {
        let testContainer = document.getElementById('div_IU_test');
        testContainer.innerHTML = ''; // Limpiar el contenido previo

        // Aquí deberías ejecutar tus tests y mostrar los resultados
        let testTable = document.createElement('table');
        testTable.id = 'testResults';
        testTable.innerHTML = '<thead><tr><th>Test</th><th>Resultado</th></tr></thead><tbody></tbody>';

        // Ejemplo de cómo podrías añadir resultados de prueba
        ['Test 1', 'Test 2', 'Test 3'].forEach(test => {
            let row = testTable.querySelector('tbody').insertRow();
            row.insertCell().textContent = test;
            row.insertCell().textContent = Math.random() < 0.5 ? 'Pass' : 'Fail'; // Simulación de resultados
        });

        testContainer.appendChild(testTable);
        
        document.getElementById('id_tabla_datos').style.display = 'none';
        document.getElementById('div_IU_form').style.display = 'none';
        document.getElementById('div_IU_test').style.display = 'block';
    }

    // Método para cargar y mostrar datos en la tabla
    async loadAndDisplayData() {
        try {
            const response = await this.externalAccess.peticionBackGeneral('', 'characteristic', 'getAll');
            const data = JSON.parse(response); // Asumimos que el backend devuelve JSON
            
            this.populateTable(data);
        } catch (error) {
            console.error('Error al cargar datos:', error);
            this.showErrorModal('Error al cargar los datos. Inténtalo de nuevo más tarde.');
        }
    }

    // Método para poblar la tabla con los datos recibidos
    populateTable(data) {
        const table = document.getElementById('tabladatosalumnos');
        const thead = table.querySelector('#titulostablacabecera');
        const tbody = table.querySelector('#muestradatostabla');

        // Limpiamos la tabla antes de añadir nuevos datos
        thead.innerHTML = '';
        tbody.innerHTML = '';

        // Añadir encabezados
        let headerRow = document.createElement('tr');
        for (let key in data[0]) {
            let th = document.createElement('th');
            th.textContent = key;
            headerRow.appendChild(th);
        }
        thead.appendChild(headerRow);

        // Añadir filas de datos
        data.forEach(item => {
            let row = document.createElement('tr');
            for (let key in item) {
                let cell = document.createElement('td');
                cell.textContent = item[key];
                row.appendChild(cell);
            }
            tbody.appendChild(row);
        });

        // Mostrar la tabla y ocultar otros elementos si es necesario
        document.getElementById('id_tabla_datos').style.display = 'block';
        document.getElementById('div_IU_form').style.display = 'none';
        document.getElementById('div_IU_test').style.display = 'none';
    }

}

window.characteristic = characteristic;