// Martin: Linea 1 -> class GestionEntidad{


//Martin: funcion empieza 57 (mostrarDatos()), yo desde 70.
mostrarDatos(){
    textoLineadatos += '<tr style="background-color:grey;">';

    for(let clave in this.datosfilas[i]){
        if(this.columnasmostrar.includes(clave)){
            textolineadatos += '<td>'+this.datosfilas[i][clave]+'</td>';
        }
    }

    // crear los td para cada boton de la llamada a funcion de formulario de accion (EDIT, DELETE o SHOWCURRENT)
    let lineaedit = this.crearboton('EDIT', JSON.stringify(this.datosfilas[i]));
    let lineadelete = this.crearboton('DELETE', JSON.stringify(this.datosfilas[i]));
    let lineashowcurrent = this.crearboton('SHOWCURRENT', JSON.stringify(this.datosfilas[i]));

    textolineadatos += lineaedit+lineadelete+lineashowcurrent;
    textoLineadatos += '</tr>'
       // } //Martin: aqui hay otra llave

        cuerpo.innerHTML = textoLineadatos;
        return cuerpo;
    //} //Martin: otra llaves más aqui

}

crearboton(accion, parametros){
    let columna = document.createElement('td');
    let opcion = document.createElement('img');
    opcion.src = "./iconos/"+accion+'.png';
    let textoonclick = "myentity.createForm('"+accion"',"+parametros+");";
    opcion.setAttribute('onclick', textoonclick);
    columna.appendChild(opcion);
    return columna.outerHTML;
}

mostrarTituloTabla(){
    document.getElementById("id_texto_titulo_tabla").className = 'titulo_pagina_'+this.entidad;
}


// Martin: linea 130 (muestro nombre de la funcion porque se ve tb en la grabación, linea 130 empieza en let cabeceratabla)
mostrartabla(){ // esta es la linea 118
    let cabeceratabla = this.mostrarTitulos();
    document.getElementById("tabladatosalumnos").appendChild(cabeceratabla);
    let cuerpotabla = this.mostrarDatos();
    document.getElementById("tabladatosalumnos").appendChild(cuerpotabla);
    document.getElementById("div_IU_form").style.display = 'none';

    //setLang();
}

createForm(accion, parametros){
    this.recargarform(accion);
    this.accion = accion;

    document.getElementById('IU_form').action = 'javascript:myentity.'+this.accion+'();';
    document.getElementById('IU_form').setAttribute('onsubmit', "return myentity.comprobar_submit('"+this.accion+"');");

    switch (this.accion){
        case "ADD":
            DOM_class.crear_boton_accion_form(this.accion);
            
            break;
        case "EDIT": 
            this.rellenarvalores(parametros);
            DOM_class.crear_boton_accion_form(this.accion);

            break;
        case "DELETE":
            this.rellenarvalores(parametros);
            DOM_class.crear_boton_accion_form(this.accion);
            this.ponercamposreadonly();

            break;
        case "SHOWCURRENT":
            this.rellenarvalores(parametros);
            this.ponercamposreadonly();
            break;
        case "SEARCH":
            DOM_class.crear_boton_accion_form(this.accion);
            break;
        default:
            alert("Fallo switch createForm Entidad_base_js");
            break;
    }

    document.getElementById('div_IU_form').style.display = 'block'

}

ponercamposreadonly(){
    // Obtener campos del formulario
    let campos = documet.forms('IU_form').elements;
    // recorrer todos los campos
    for(let i = 0; i < campos.length; i++){
        campos[i].setAttribute("readonly", true);
    }
}

rellenarvalores(parametros){
    // obtener campos del formulario
    let campos = documet.forms('IU_form').elements; 
    // recorrer todos los campos
    for(let i = 0; i < campos.length; i++){
        if(campos[i].tagName == 'TEXTAREA'){
            campos[i].innerHTML = parametros[campos[i].id];
        }else{
            campos[i].setAttribute("value", parametros[campos[i].id]);
        }
    }
}


//---------------------------------------------------------------
// acciones a back a partir de esta linea(la 264 en el original)
async ADD(){
    await this.peticionBackGeneral('IU_form', 'persona', 'ADD')
    .then((respuesta)=>{
        if(repuesta['ok']){
            //this.researformpersona();
            this.recargarform('SEARCH');
            this.SEARCH();
        }else{
            //Martin: no veo más
        }
    })
}

//Martin: linea 293
    async delete(){

    }

    async SEARCH(){
        await this.peticionBackGeneral('IU_form', this.entidadd, 'SEARCH')
        .then((respuesta) => {
            if(respuesta('code') == 'RECORDSET_VACIO'){
                document.getElementById('muestradatostabla').innerHTML = ' no hay datos coincidentes con la busqueda';
            }
        });
    }

    recargarform(accion){
        document.getElementById("IU_form").innerHTML = '';

        if(eval(this.entidad+".html_form_"+this.entidad)){
            document.getElementById("IU_form").innerHTML = eval(this.entidad+".html_form_"+this.entidad);

            // obtener campos del formulario
            let campos = documet.forms['IU_form'].elements;
            //recorrer todos los campos
            for(let i = 0; i < campos.length; i++){
                if(eval(document.getElementById('div_error_'+campos[i].id))){
                    document.getElementById('div_error'+campos[i].id).style.display = 'none';
                }
                //setLang();
            }
        }else{
            this.construirGenericoForm();
        }

        if((accion != "DELETE") && (accion != "SHOWCURRENT")){
            this.modifyform(accion); 
        }

        document.getElementById('div_IU_form').style.display='block';

    }

    comprobar_submit(accion){
        let correcto = true;
        let eventos = Array('onblur', 'onchange', 'onfocus', 'oninput', 'oninvalid', 'onreset', 'onsearch');
        let estaprueba = Boolean;
        //obtener campos del formulario
        let campos = document.forms['IU_form'].elements;
        //recorrer todos los campos
        for(let j=0; j< campos.length;j++){
            for(let i = 0; i < eventos.length;i++){ // recorrer comprobando todos los eventos posibles
                if(eval(campos[j].attributes[eventos[i]])){ // si existe el evento recoger en un array las llamadas de validacion del evento
                    let validar = campos[j].attributes[eventos[i]].nodeValue;
                    let funcionesValidar = validar.split("&&");
                    for(let k=0; k < funcionesValidar.length - 1; k++){ // por cada función extraer su llamada y ejecutarla
                        if(this.devolverfuncion(funcionesvalidar[k]) == 'personalize'){
                            estaprueba = eval(this.special_field_validation(campos[j].id, accion));
                        }else{
                            estaprueba = eval(funcionesvalidar[k]);
                        }
                        //Martin: no veo más ->if()...
                    }
                }
            }
        }
    }