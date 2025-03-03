// Supongamos que el nombre de la entidad es 'characteristic'
const def_html_characteristic = {
    'id_characteristic': {
        'type': 'input',
        'attributes': {
            'type': 'number',
            'min': '1',
            'max': '11',
            'readonly': 'true' // Porque es auto-incremento
        }
    },
    'name_characteristic': {
        'type': 'input',
        'attributes': {
            'type': 'text',
            'pattern': '^[a-zA-Z\\s]{8,100}$',
            'placeholder': 'Nombre sin acentos ni ñ'
        }
    },
    'description_characteristic': {
        'type': 'textarea',
        'attributes': {
            'minlength': '80',
            'maxlength': '5000',
            'pattern': '^[a-zA-Z\\s]{80,5000}$',
            'placeholder': 'Descripción sin acentos ni ñ'
        }
    },
    'data_type_characteristic': {
        'type': 'select',
        'options': ['number', 'text', 'set']
    },
    'category_characteristic': {
        'type': 'select',
        'options': ['soil_site', 'soil_chem', 'soil_bio']
    },
    'bibref_characteristic': {
        'type': 'input',
        'attributes': {
            'type': 'text',
            'pattern': '^[\\w\\sáéíóúÁÉÍÓÚÑñ.,!?]{16,200}$',
            'placeholder': 'Referencia bibliográfica'
        }
    },
    'file_characteristic': {
        'type': 'input',
        'attributes': {
            'type': 'file',
            'accept': '.pdf,.doc,.docx',
            'data-maxsize': '200000' // Esto no es estándar HTML5, podrías validarlo con JavaScript
        }
    }
};

const def_test_characteristic = {
    'ADD': {
        'id_characteristic': {
            'validation': 'autoIncrement', // No validamos, es auto-incremento
            'errorMessage': 'Este campo es auto-incremento.'
        },
        'name_characteristic': {
            'validation': 'regex',
            'params': ['^[a-zA-Z\\s]{8,100}$'],
            'errorMessage': 'El nombre debe ser alfabético, sin acentos ni ñ, entre 8 y 100 caracteres.'
        },
        'description_characteristic': {
            'validation': 'regex',
            'params': ['^[a-zA-Z\\s]{80,5000}$'],
            'errorMessage': 'La descripción debe ser alfabética, sin acentos ni ñ, entre 80 y 5000 caracteres.'
        },
        'data_type_characteristic': {
            'validation': 'enum',
            'params': ['number', 'text', 'set'],
            'errorMessage': 'Seleccione un tipo de dato válido.'
        },
        'category_characteristic': {
            'validation': 'enum',
            'params': ['soil_site', 'soil_chem', 'soil_bio'],
            'errorMessage': 'Seleccione una categoría válida.'
        },
        'bibref_characteristic': {
            'validation': 'regex',
            'params': ['^[\\w\\sáéíóúÁÉÍÓÚÑñ.,!?]{16,200}$'],
            'errorMessage': 'La referencia bibliográfica debe tener entre 16 y 200 caracteres.'
        },
        'file_characteristic': {
            'validation': 'file',
            'params': ['.pdf', '.doc', '.docx', 200000],
            'errorMessage': 'El archivo debe ser PDF, DOC o DOCX y menor a 200KB.'
        }
    },
    'EDIT': {
        'id_characteristic': {
            'validation': 'number',
            'params': [1, 11],
            'errorMessage': 'El ID debe estar entre 1 y 11.'
        },
        'name_characteristic': {
            'validation': 'regex',
            'params': ['^[a-zA-Z\\s]{8,100}$'],
            'errorMessage': 'El nombre debe ser alfabético, sin acentos ni ñ, entre 8 y 100 caracteres.'
        },
        'description_characteristic': {
            'validation': 'regex',
            'params': ['^[a-zA-Z\\s]{80,5000}$'],
            'errorMessage': 'La descripción debe ser alfabética, sin acentos ni ñ, entre 80 y 5000 caracteres.'
        },
        'data_type_characteristic': {
            'validation': 'enum',
            'params': ['number', 'text', 'set'],
            'errorMessage': 'Seleccione un tipo de dato válido.'
        },
        'category_characteristic': {
            'validation': 'enum',
            'params': ['soil_site', 'soil_chem', 'soil_bio'],
            'errorMessage': 'Seleccione una categoría válida.'
        },
        'bibref_characteristic': {
            'validation': 'regex',
            'params': ['^[\\w\\sáéíóúÁÉÍÓÚÑñ.,!?]{16,200}$'],
            'errorMessage': 'La referencia bibliográfica debe tener entre 16 y 200 caracteres.'
        },
        'file_characteristic': {
            'validation': 'file',
            'params': ['.pdf', '.doc', '.docx', 200000],
            'errorMessage': 'El archivo debe ser PDF, DOC o DOCX y menor a 200KB.'
        }
    },
    'DELETE': {
        'id_characteristic': {
            'validation': 'required',
            'errorMessage': 'Se requiere el ID para eliminar un registro.'
        }
    },
    'SHOWCURRENT': {
        'id_characteristic': {
            'validation': 'required',
            'errorMessage': 'Se requiere el ID para mostrar el registro actual.'
        }
    }
};