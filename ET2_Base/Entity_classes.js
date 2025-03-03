const persona_class = 
    class persona extends GestionEntidad{
        special_show_data(id, valoresrow){

        }

        special_field_validation(id, accion){
            if((id == 'fechanacimiento_persona') && (accion == 'ADD')){
                DOM_class.mostrarexitovalor(id);
                
                if(validacionesatomicas.fecha_menor_actual(id, document.getElementById(id), value)){
                    return true;
                }else{
                    DOM_class.mostrardivmensajeserrordebajo(id, 'KO_fechananterioractual_fechaNacimiento_persona')
                    return false;
                }


            }
        }
    };

// rellenar con las clases de las entidades a usar
const clases = {
    //........................
    // persona CLASS
    //........................

    persona: persona_class

    //.......................
    //
    //.......................
}

// COMPLETO -> NO TIENE MAS