

const estr_persona = {		// variable que contiene la información de la entidad
    entity : 'persona',		// nombre de la entidad (obligatorio)
    attributes_list : ['dni', 'nombre_persona', 'apellido_persona', 'fechaNacimiento_persona', 'direccion_persona', 'telefono_persona', 'email_persona', 'nuevo_foto_persona', 'foto_persona'], 			// array con la lista de atributos de la entidad
    attributes : 					// Definición de los atributos (obligatorio)
        {
            dni: {				// nombre del atributo (obligatorio)
                html : {					// definicion del tag html del atributo (obligatorio)
                        tag: 'input',				// input, select, checkbox, ....... (obligatorio)
                        type : 'text',				// tipo en el caso de input (opcional)
                        options : [],			// array de valores para options de select (si select, checkbox, radio) (opcional)
                        multiple : false			// true/false para multiple de select (si select, checkbox, radio) (opcional)
                },
                is_pk : true,				// true/false si es clave primaria (obligatorio)
                is_autoincrement : false,	// true/false si es autonumerico (obligatorio)
                is_not_null : {				// true/false si es obligatorio para ADD, EDIT, SEARCH (obligatorio)
                    ADD : true,
                    EDIT : true,
                    DELETE : true,
                    SEARCH : true,
                    SHOWCURRENT : true
                },
                rules : {					// reglas para la validacion y mensaje de error (obligatorio)
                    validations : {			// definicion de la validaciones de atributos (obligatorio)
                    /* para cada accion ADD, EDIT, SEARCH (opcionales) puede tener las siguientes validaciones
                        min_size : tamaño minimo del atributo (opcional)
                        max_size : tamaño maximo del atributo (opcional)
                        reg_exp : expresion regular de formato del atributo (opcional)
                        max_size_file : en el caso de file tamaño maximo del fichero (opcional)
                        file_type : en el caso de file tipo de fichero (opcional)
                        personalized : en caso de tener una validación no estandar indica con true que existe una validación especifica
                                        en la clase de la entidad (opcional)

                        si no existen validaciones para una accion no se incluye la accion

                        si no existe una validacion concreta para una accion no se incluye la validacion
                    */
                        ADD : false,
                        EDIT : false,
                        DELETE : false,
                        SEARCH : false
                    },
                    error : {				// mensajes de error por cada validacion (obligatorio)
                    /* para cada accion ADD, EDIT, SEARCH (opcional) y cada validación (opcional) definida se establecen los codigos mensajes de error
                        a devolver
                    
                        en el caso de personalized no se indica porque estaria en el metodo implementado en la clase de la entidad

                        si no existe una validacion concreta para una accion no se incluye obviamente mensaje de error
                    */
                        ADD : false,
                        EDIT : false,
                        DELETE : false,
                        SEARCH : false
                    }
                }
            },
            nombre_persona: {
                html : {
                        tag: 'input',
                        type : 'text',
                        options : [],
                        multiple : false
                },
                is_pk : false,
                is_autoincrement : false,
                is_not_null : {
                    ADD : true,
                    EDIT : true,
                    DELETE : true,
                    SEARCH : true,
                    SHOWCURRENT : true
                },
                rules : {
                    validations : {
                        ADD : {
                            min_size : 6,
                            max_size : 50,
                        },
                        EDIT : false,
                        DELETE : false,
                        SEARCH : {
                            max_size : 50,
                        }
                    },
                    error : {
                        ADD : {
                            min_size : 'KO_nombre_persona_tam_min',
                            max_size : 'KO_nombre_persona_tam_max',
                        },
                        EDIT : false,
                        DELETE : false,
                        SEARCH : {
                            max_size : 'KO_nombre_persona_tam_max',
                        }
                    }
                }
            },
            apellido_persona: {
                html : {
                        tag: 'input',
                        type : 'text',
                        options : [],
                        multiple : false
                },
                is_pk : false,
                is_autoincrement : false,
                is_not_null : {
                    ADD : true,
                    EDIT : true,
                    DELETE : true,
                    SEARCH : true
                },
                rules : {
                    validations : {
                        ADD : {
                            min_size : 6,
                            max_size : 50,
                        },
                        EDIT : false,
                        DELETE : false,
                        SEARCH : {
                            max_size : 50,
                        }
                    },
                    error : {
                        ADD : {
                            min_size : 'KO_apellidos_persona_tam_min',
                            max_size : 'KO_apellidos_persona_tam_max',
                        },
                        EDIT : false,
                        DELETE : false,
                        SEARCH : {
                            max_size : 'KO_apellidos_persona_tam_max',
                        }
                    }
                }
            },
            fechaNacimiento_persona: {
                html : {
                        tag: 'input',
                        type : 'date',
                        options : [],
                        multiple : false
                },
                is_pk : false,
                is_autoincrement : false,
                is_not_null : {
                    ADD : true,
                    EDIT : true,
                    DELETE : true,
                    SEARCH : true
                },
                rules : {
                    validations : {
                        ADD : false,
                        EDIT : false,
                        DELETE : false,
                        SEARCH : false
                    },
                    error : {
                        ADD : false,
                        EDIT : false,
                        DELETE : false,
                        SEARCH : false
                    }
                }
            },
            direccion_persona: {
                html : {
                        tag: 'input',
                        type : 'text',
                        options : [],
                        multiple : false
                },
                is_pk : false,
                is_autoincrement : false,
                is_not_null : {
                    ADD : true,
                    EDIT : true,
                    DELETE : true,
                    SEARCH : true
                },
                rules : {
                    validations : {
                        ADD : {
                            min_size : 20,
                            max_size : 70,
                        },
                        EDIT : false,
                        DELETE : false,
                        SEARCH : {
                            max_size : 70,
                        }
                    },
                    error : {
                        ADD : {
                            min_size : 'KO_direccion_persona_tam_min',
                            max_size : 'KO_apellidos_persona_tam_max',
                        },
                        EDIT : false,
                        DELETE : false,
                        SEARCH : {
                            max_size : 'KO_direccion_persona_tam_max',
                        }
                    }
                }
            },
            telefono_persona: {
                html : {
                        tag: 'input',
                        type : 'text',
                        options : [],
                        multiple : false
                },
                is_pk : false,
                is_autoincrement : false,
                is_not_null : {
                    ADD : true,
                    EDIT : true,
                    DELETE : true,
                    SEARCH : true
                },
                rules : {
                    validations : {
                        ADD : false,
                        EDIT : false,
                        DELETE : false,
                        SEARCH : false
                    },
                    error : {
                        ADD : false,
                        EDIT : false,
                        DELETE : false,
                        SEARCH : false
                    }
                }
            },
            email_persona: {
                html : {
                        tag: 'input',
                        type : 'text',
                        options : [],
                        multiple : false
                },
                is_pk : false,
                is_autoincrement : false,
                is_not_null : {
                    ADD : true,
                    EDIT : true,
                    DELETE : true,
                    SEARCH : true
                },
                rules : {
                    validations : {
                        ADD : false,
                        EDIT : false,
                        DELETE : false,
                        SEARCH : false
                    },
                    error : {
                        ADD : false,
                        EDIT : false,
                        DELETE : false,
                        SEARCH : false
                    }
                }
            },
            nuevo_foto_persona: {
                html : {
                        tag: 'input',
                        type : 'file',
                        options : [],
                        multiple : false
                },
                is_pk : false,
                is_autoincrement : false,
                is_not_null : {
                    ADD : true,
                    EDIT : true,
                    DELETE : false,
                    SEARCH : false
                },
                rules : {
                    validations : {
                        ADD : false,
                        EDIT : false,
                        DELETE : false,
                        SEARCH : false
                    },
                    error : {
                        ADD : false,
                        EDIT : false,
                        DELETE : false,
                        SEARCH : false
                    }
                }
            },
            foto_persona: {
                html : {
                        tag: 'input',
                        type : 'text',
                        options : [],
                        multiple : false
                },
                is_pk : false,
                is_autoincrement : false,
                is_not_null : {
                    ADD : false,
                    EDIT : true,
                    DELETE : true,
                    SEARCH : true
                },
                rules : {
                    validations : {
                        ADD : false,
                        EDIT : false,
                        DELETE : false,
                        SEARCH : false
                    },
                    error : {
                        ADD : false,
                        EDIT : false,
                        DELETE : false,
                        SEARCH : false
                    }
                }
            },
        }
}