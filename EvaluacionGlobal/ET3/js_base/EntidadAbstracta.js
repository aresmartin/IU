// EntidadAbstracta.js

class EntidadAbstracta {
    constructor(nombreEntidad) {
        this.nombreEntidad = nombreEntidad;
        this.defHtml = window[`def_html_${nombreEntidad}`];
        this.defTest = window[`def_test_${nombreEntidad}`];
    }

    createForm(action, data = {}) {
        let form = document.getElementById('IU_form'); // Usamos el formulario existente
        form.innerHTML = ''; // Limpiamos el contenido previo del formulario

        if (typeof this[`cargar_formulario_html_${action.toLowerCase()}`] === 'function') {
            this[`cargar_formulario_html_${action.toLowerCase()}`](form, data);
        } else {
            for (let [fieldName, fieldDef] of Object.entries(this.defHtml)) {
                let fieldContainer = this.createField(fieldName, fieldDef, action, data[fieldName]);
                if (fieldContainer) {
                    form.appendChild(fieldContainer);
                }
            }
        }

        let submitButton = document.createElement('button');
        submitButton.type = 'submit';
        submitButton.textContent = `Submit ${action}`;
        form.appendChild(submitButton);

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleSubmit(action, form);
        });

        return form;
    }

    createField(fieldName, fieldDef, action, value) {
        let fieldElement, container = document.createElement('div');
        container.className = 'form-field';

        switch (fieldDef.type) {
            case 'input':
                fieldElement = document.createElement('input');
                for (let attr in fieldDef.attributes) {
                    fieldElement.setAttribute(attr, fieldDef.attributes[attr]);
                }
                if (value !== undefined) fieldElement.value = value;
                fieldElement.id = fieldName;
                fieldElement.name = fieldName;
                break;
            case 'textarea':
                fieldElement = document.createElement('textarea');
                for (let attr in fieldDef.attributes) {
                    fieldElement.setAttribute(attr, fieldDef.attributes[attr]);
                }
                if (value !== undefined) fieldElement.value = value;
                fieldElement.id = fieldName;
                fieldElement.name = fieldName;
                break;
            case 'select':
                fieldElement = document.createElement('select');
                fieldDef.options.forEach(option => {
                    let optionElement = document.createElement('option');
                    optionElement.value = option;
                    optionElement.textContent = option;
                    if (option === value) optionElement.selected = true;
                    fieldElement.appendChild(optionElement);
                });
                fieldElement.id = fieldName;
                fieldElement.name = fieldName;
                break;
        }

        if (fieldElement) {
            let label = document.createElement('label');
            label.setAttribute('for', fieldName);
            label.textContent = fieldName;
            container.appendChild(label);
            container.appendChild(fieldElement);

            // Añadir un span para mensajes de error
            let errorSpan = document.createElement('span');
            errorSpan.className = 'error-message';
            errorSpan.id = `${fieldName}_error`;
            container.appendChild(errorSpan);

            fieldElement.addEventListener('blur', () => {
                this.validateFieldOnBlur(fieldName, fieldElement.value, action);
            });
            return container;
        }
        return null;
    }

    handleSubmit(action, form) {
        let isValid = true;
        let formData = new FormData(form);

        // Limpiar mensajes de error anteriores
        document.querySelectorAll('.error-message').forEach(el => el.textContent = '');

        if (this.defTest[action]) {
            for (let [fieldName, validations] of Object.entries(this.defTest[action])) {
                let value = formData.get(fieldName);
                if (!this.validateField(fieldName, value, validations)) {
                    isValid = false;
                    this.showError(fieldName, validations.errorMessage);
                }
            }
        }

        if (isValid) {
            console.log(`Datos válidos para ${action}:`, Object.fromEntries(formData));
            // Aquí iría la lógica para enviar los datos al backend
            // Ejemplo: this.sendDataToBackend(action, Object.fromEntries(formData));
        } else {
            console.log('Formulario inválido, corrija los errores.');
        }
    }

    validateFieldOnBlur(fieldName, value, action) {
        if (this.defTest[action]) {
            let validations = this.defTest[action][fieldName];
            if (validations && !this.validateField(fieldName, value, validations)) {
                this.showError(fieldName, validations.errorMessage);
            } else {
                this.clearError(fieldName);
            }
        }
    }

    validateField(fieldName, value, validations) {
        switch (validations.validation) {
            case 'regex':
                return new RegExp(validations.params[0]).test(value);
            case 'number':
                return !isNaN(value) && value >= validations.params[0] && value <= validations.params[1];
            case 'enum':
                return validations.params.includes(value);
            case 'file':
                if (value instanceof File) {
                    if (value.size > validations.params[3]) return false;
                    let fileExt = value.name.split('.').pop().toLowerCase();
                    return validations.params.slice(0, 3).includes(`.${fileExt}`);
                }
                return true; // Si no es un archivo, asumimos que es válido para esta validación
            case 'required':
                return value !== null && value !== '';
        }
        return true;
    }

    showError(fieldName, message) {
        let errorElement = document.getElementById(`${fieldName}_error`);
        if (errorElement) {
            errorElement.textContent = message;
        }
    }

    clearError(fieldName) {
        let errorElement = document.getElementById(`${fieldName}_error`);
        if (errorElement) {
            errorElement.textContent = '';
        }
    }

    // Método para cargar datos en el formulario (ejemplo)
    cargar_formulario_html_add(form, data) {
        for (let [fieldName, value] of Object.entries(data)) {
            let fieldElement = form.querySelector(`[name="${fieldName}"]`);
            if (fieldElement) {
                if (fieldElement.type === 'file') {
                    // Manejo especial para archivos, aquí asumimos que solo se muestra el nombre del archivo
                    fieldElement.value = value.name || '';
                } else {
                    fieldElement.value = value;
                }
            }
        }
    }
}