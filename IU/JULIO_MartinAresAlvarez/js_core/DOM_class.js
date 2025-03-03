class DOM_class{

    static inicializa_pagina(){ //Inicialización de la página Gestion_personas.html.
        DOM_class.cerrar_div_mensajes();
        DOM_class.cerrar_div_formulario();
        DOM_class.cerrar_div_test();
    }

    static cerrar_div_mensajes(){
        document.getElementById("texto_mensaje").className = '';
        document.getElementById("div_mensajes_pagina").style.display = "none";
    }

    static cerrar_div_formulario(){
        document.getElementById('div_IU_form').style.display = 'none';
    }

    static cerrar_div_test(){
        document.getElementById('div_IU_test').style.display = 'none';   
    }

    static mostrardivmensajes(codigoerror){
        //cambiar color bordes por el id
        document.getElementById('texto_mensaje').className = codigoerror;
        document.getElementById("div_mensajes_pagina").style.display = "block";
        setLang();
    }

    static mostrardivmensajeserrordebajo(id,codigoerror){
        //cambiar color bordes por el id
        if (eval(document.getElementById('error_'+id))){
            document.getElementById('error_'+id).className = codigoerror;
            document.getElementById('error_'+id).style.color = 'red';
        }
        if (eval(document.getElementById("div_error_"+id))){
            document.getElementById("div_error_"+id).style.display = "block";
            DOM_class.mostrarerrorvalor(id);
        }
        setLang();
    }

    static quitardivmensajeserrordebajo(id) {
        if (eval(document.getElementById('error_'+id))){
            document.getElementById('error_'+id).className = '';
        }
        if (eval(document.getElementById("div_error_"+id))){
            document.getElementById("div_error_"+id).style.display = "none";
        }
    }

    static mostrarexitovalor(id){
        //cambiar color bordes por el id a verde
        if (eval(document.getElementById(id))){
            document.getElementById(id).style.borderWidth = '1px';
            document.getElementById(id).style.borderStyle = 'solid';
            document.getElementById(id).style.borderColor = 'green';
            //eliminar div error por si existe
            DOM_class.quitardivmensajeserrordebajo(id);
        }
    }

    static mostrarerrorvalor(id){
        //cambiar color bordes por el id a rojo
        
        document.getElementById(id).style.borderWidth = '1px';
        document.getElementById(id).style.borderStyle = 'solid';
        document.getElementById(id).style.borderColor = 'red';
        
    }

}