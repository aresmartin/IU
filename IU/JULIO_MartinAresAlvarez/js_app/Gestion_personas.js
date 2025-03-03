class Gestion_personas extends GestionEntidad{

    static FormBase() {

        this.recargarform();

        const fieldsList = new Array(19);
        fieldsList[0] = document.querySelector(".class_contenido_titulo_form");
        fieldsList[1] = document.getElementById('IU_form');
        fieldsList[2] = document.getElementById('dni');
        fieldsList[3] = document.getElementById('nombre_persona');
        fieldsList[4] = document.getElementById('apellidos_persona');
        fieldsList[5] = document.getElementById('fechaNacimiento_persona');
        fieldsList[6] = document.getElementById('direccion_persona');
        fieldsList[7] = document.getElementById('telefono_persona');
        fieldsList[8] = document.getElementById('email_persona');
        fieldsList[9] = document.getElementById('nuevo_foto_persona');
        fieldsList[10] = document.getElementById("label_foto_persona");
        fieldsList[11] = document.getElementById("foto_persona");
        fieldsList[12] = document.getElementById("link_foto_persona");
        fieldsList[13] = document.createElement('button');
        fieldsList[13].type = 'submit';
        fieldsList[14] = document.createElement('img');
        fieldsList[15] = document.getElementById('foto_persona');
        fieldsList[16] = document.getElementById("label_nuevo_foto_persona");
        fieldsList[17] = document.createElement('button');
        fieldsList[17].type = 'submit';
        fieldsList[18] = document.createElement('img');
        fieldsList[19] = document.getElementById('botondelete');
        fieldsList[20] = document.getElementById('div_IU_form');
        return fieldsList;
    }

    static createForm(struct, action) {

        let formBase = this.FormBase();

        formBase[0].className = `class_contenido_titulo_form titulo_form_${action}_persona`;
        formBase[1].action = `javascript:Gestion_personas.${action}();`;
        if (action === "SEARCH") {
            formBase[1].setAttribute('onsubmit', 'return Gestion_personas.comprobar_submit_SEARCH();');
            formBase[2].setAttribute('onblur', 'Gestion_personas.comprobar_dni_SEARCH()');
            formBase[3].setAttribute('onblur', `Gestion_personas.comprobar_nombre_persona_SEARCH(${JSON.stringify(struct)}, 1)`);
            formBase[4].setAttribute('onblur', `Gestion_personas.comprobar_apellidos_persona_SEARCH(${JSON.stringify(struct)}, 2)`);
            formBase[5].setAttribute('onchange',`Gestion_personas.comprobar_fechaNacimiento_persona_SEARCH()`);
            formBase[6].setAttribute('onblur',`Gestion_personas.comprobar_direccion_persona_SEARCH(${JSON.stringify(struct)}, 4)`);
            formBase[7].setAttribute('onblur',`Gestion_personas.comprobar_telefono_persona_SEARCH()`);
            formBase[8].setAttribute('onblur',`Gestion_personas.comprobar_email_persona_SEARCH()`);
            formBase[10].setAttribute('onblur','Gestion_personas.comprobar_foto_persona_SEARCH()');
            formBase[16].style.display = 'none';
            formBase[9].style.display = 'none';
            formBase[12].style.display = 'none';
            formBase[18].src = `./iconos/${action}.png`;
            formBase[17].append(formBase[18]);
            formBase[1].append(formBase[17]);
            formBase[1].append(formBase[16]);
        } else if (action === "EDIT") {
            formBase[1].setAttribute('onsubmit', 'return Gestion_personas.comprobar_submit();');
            formBase[2].setAttribute('onblur', 'Gestion_personas.comprobar_dni()');
            formBase[2].value = struct.dni;
            formBase[2].setAttribute("readonly","");
            formBase[3].setAttribute('onblur', `Gestion_personas.comprobar_nombre_persona(${JSON.stringify(struct)}, 1)`);
            formBase[3].value = struct.nombre_persona;
            formBase[4].setAttribute('onblur', `Gestion_personas.comprobar_apellidos_persona(${JSON.stringify(struct)}, 2)`);
            formBase[4].value = struct.apellidos_persona;
            formBase[5].setAttribute('onchange',`Gestion_personas.comprobar_fechaNacimiento_persona()`);
            formBase[5].value = struct.fechaNacimiento_persona;
            formBase[6].setAttribute('onblur',`Gestion_personas.comprobar_direccion_persona(${JSON.stringify(struct)}, 4)`);
            formBase[6].value = struct.direccion_persona;
            formBase[7].setAttribute('onblur',`Gestion_personas.comprobar_telefono_persona()`);
            formBase[7].value = struct.telefono_persona;
            formBase[8].setAttribute('onblur',`Gestion_personas.comprobar_email_persona()`);
            formBase[8].value = struct.email_persona;
            formBase[11].value = struct.foto_persona;
            formBase[12].setAttribute('href','http://193.147.87.202/ET2/filesuploaded/files_foto_persona/'+foto_persona);
            formBase[11].setAttribute("readonly",true);
            formBase[9].setAttribute('onblur',`Gestion_personas.comprobar_nuevo_foto_persona()`);
            let botonedit = formBase[13];
            let imgedit = formBase[14];
            imgedit.src = `./iconos/${action}.png`;
            botonedit.append(imgedit);
            formBase[1].append(botonedit);
        } else if (action === "DELETE") {
            formBase[2].value = struct.dni;
            formBase[2].setAttribute("readonly","");
            formBase[3].value = struct.nombre_persona;
            formBase[3].setAttribute('readonly',true);
            formBase[4].value = struct.apellidos_persona;
            formBase[4].setAttribute('readonly',true);
            formBase[5].value = struct.fechaNacimiento_persona;
            formBase[5].setAttribute('readonly',true);
            formBase[6].value = struct.direccion_persona;
            formBase[6].setAttribute('readonly',true);
            formBase[7].value = struct.telefono_persona;
            formBase[7].setAttribute('readonly',true);
            formBase[8].value = struct.email_persona;
            formBase[8].setAttribute('readonly',true);
            formBase[11].value = struct.foto_persona;
            formBase[11].setAttribute("readonly",true);
            formBase[12].href += struct.foto_persona;
            formBase[11].setAttribute("readonly",true);
            formBase[16].style.display = 'none';
            formBase[9].style.display = 'none';
            let botondelete = formBase[13];
            botondelete.id = 'botondelete';
            botondelete.type = 'submit';
            let imgdelete = formBase[14];
            imgdelete.src = `./iconos/${action}.png`;
            botondelete.append(imgdelete);
            formBase[1].append(botondelete);
        } else if (action === "SHOWCURRENT") {
            this.createForm(struct, 'DELETE');
            formBase[19].remove();
            formBase[0].className = `class_contenido_titulo_form titulo_form_${action}_persona`;
            let imgshowcurrent = formBase[14];
            imgshowcurrent.src = `./iconos/${action}.png`;
            imgshowcurrent.setAttribute("onclick","DOM_class.cerrar_div_formulario();")
            formBase[1].append(imgshowcurrent);
            formBase[20].style.display = 'none';
        } else {
            formBase[1].setAttribute('onsubmit', 'return Gestion_personas.comprobar_submit();');
            formBase[2].setAttribute('onblur', 'Gestion_personas.comprobar_dni()');
            formBase[3].setAttribute('onblur', `Gestion_personas.comprobar_nombre_persona(${JSON.stringify(struct)}, 1)`);
            formBase[4].setAttribute('onblur', `Gestion_personas.comprobar_apellidos_persona(${JSON.stringify(struct)}, 2)`);
            formBase[5].setAttribute('onchange',`Gestion_personas.comprobar_fechaNacimiento_persona()`);
            formBase[6].setAttribute('onblur',`Gestion_personas.comprobar_direccion_persona(${JSON.stringify(struct)}, 4)`);
            formBase[7].setAttribute('onblur',`Gestion_personas.comprobar_telefono_persona()`);
            formBase[8].setAttribute('onblur',`Gestion_personas.comprobar_email_persona()`);
            formBase[9].setAttribute('onblur',`Gestion_personas.comprobar_nuevo_foto_persona()`);
            formBase[10].style.display = 'none';
            formBase[11].style.display = 'none';
            formBase[12].style.display = 'none';
            let botonadd = formBase[13];
            let imgadd = formBase[14];
            imgadd.src = `./iconos/${action}.png`;
            botonadd.append(imgadd);
            formBase[1].append(botonadd);
        }
   
        setLang();

        document.getElementById('div_IU_form').style.display = 'block'; 
    }
    
    //-----------------------------------------------------------------------------
    // submits

    static comprobar_submit(){ //

        let valor = this.comprobar_dni();
        let valor1 = this.comprobar_nombre_persona();
        let valor2 = this.comprobar_apellidos_persona();
        let valor3 = this.comprobar_fechaNacimiento_persona();
        let valor4 = this.comprobar_telefono_persona();
        let valor5 = this.comprobar_email_persona();
        let valor6 = this.comprobar_direccion_persona();
        let valor7 = this.comprobar_nuevo_foto_persona();

        let resultado = (
            valor &&
            valor1 &&
            valor2 &&
            valor3 &&
            valor4 &&
            valor5 &&
            valor6 &&
            valor7
        );

        return resultado;
        
    }

    static comprobar_submit_SEARCH(){ //

        let valor = this.comprobar_dni_SEARCH();
        let valor1 = this.comprobar_nombre_persona_SEARCH();
        let valor2 = this.comprobar_apellidos_persona_SEARCH();
        let valor3 = this.comprobar_fechaNacimiento_persona_SEARCH();
        let valor4 = this.comprobar_telefono_persona_SEARCH();
        let valor5 = this.comprobar_email_persona_SEARCH();
        let valor6 = this.comprobar_direccion_persona_SEARCH();
        let valor7 = this.comprobar_nuevo_foto_persona_SEARCH();

        let resultado = (
            valor &&
            valor1 &&
            valor2 &&
            valor3 &&
            valor4 &&
            valor5 &&
            valor6 &&
            valor7
        );

        return resultado;
    }

    //-----------------------------------------------------------------------------
    // acciones a back

    static async ADD(){
        console.log('ADD()');
        await this.peticionBackGeneral('IU_form', 'persona', 'ADD')
        .then((respuesta) => {
            if (respuesta['ok']){
                //this.resetearformpersona();
                this.recargarform();
                this.SEARCH();
            }
            else{
                DOM_class.mostrardivmensajes(respuesta['code']);
            }
        });
    }

    static async EDIT(){
        await this.peticionBackGeneral('IU_form', 'persona', 'EDIT')
        .then((respuesta) => {
            if (respuesta['ok']){
                this.recargarform();
                this.SEARCH();
            }
            else{
                DOM_class.mostrardivmensajes(respuesta['code']);
            }
        });
    }

    static async DELETE(){
        await this.peticionBackGeneral('IU_form', 'persona', 'DELETE')
        .then((respuesta) => {
            if (respuesta['ok']){
                this.recargarform();
                this.SEARCH();
            }
            else{
                DOM_class.mostrardivmensajes(respuesta['code']);
            }
        });
    }

    static async SEARCH(){
        await this.peticionBackGeneral('IU_form', 'persona', 'SEARCH')
        .then((respuesta) => {
            //this.resetearformpersona();
            this.recargarform();
            let persona = new Gestion_personas('personas',respuesta['resource'],Array('dni','nombre_persona','telefono_persona')); persona.mostrartabla();
            if (respuesta['code'] == 'RECORDSET_VACIO'){
                document.getElementById('muestradatostabla').innerHTML = 'no hay datos coincidentes con la busqueda';
            }
        });
    }

    //-----------------------------------------------------------------------------
    //validaciones campos

    static comprobar_dni(){ //

        return true;

    }

    static comprobar_dni_SEARCH(){ //

        return true;

    }

    static comprobar_nombre_persona(struct, index){

        if (validacionesatomicas.size_minimo(struct.attributes_list[index], struct.attributes.nombre_persona.rules.validations.ADD.min_size)){
         }
         else{
             //modificacion parametros texto error
             DOM_class.mostrardivmensajeserrordebajo(struct.attributes_list[index], struct.attributes.nombre_persona.rules.error.ADD.min_size);
             //salir ejecucion con false
             return false;
         }
 
         if (validacionesatomicas.size_maximo(struct.attributes_list[index], struct.attributes.nombre_persona.rules.validations.ADD.max_size)){
         }
         else{
             //modificacion parametros texto error
             DOM_class.mostrardivmensajeserrordebajo(struct.attributes_list[index], struct.attributes.nombre_persona.rules.error.ADD.max_size);
             //salir ejecucion con false
             return false;
         }
 
         DOM_class.mostrarexitovalor(struct.attributes_list[index]);
         return true;
 
    }
    
    static comprobar_nombre_persona_SEARCH(struct, index){ //

        if (validacionesatomicas.size_maximo(struct.attributes_list[index], struct.attributes.nombre_persona.rules.validations.SEARCH.max_size)){   
        }
        else{
            //modificacion parametros texto error
            DOM_class.mostrardivmensajes(struct.attributes_list[index], struct.attributes.nombre_persona.rules.error.SEARCH.max_size);
            //llamar funcion muestra errores
            DOM_class.mostrarerrorvalor(struct.attributes_list[index]);
            //salir ejecucion con false
            return false;
        }

        DOM_class.mostrarexitovalor(struct.attributes_list[index]);
        return true;

    }

    static comprobar_apellidos_persona(struct, index){ //

        if (validacionesatomicas.size_minimo(struct.attributes_list[index], struct.attributes.apellido_persona.rules.validations.ADD.min_size)){
        }
        else{
            DOM_class.mostrardivmensajeserrordebajo(struct.attributes_list[index], struct.attributes.apellido_persona.rules.error.ADD.min_size);;
            //salir ejecucion con false
            return false;
        }

        if (validacionesatomicas.size_maximo(struct.attributes_list[index], struct.attributes.apellido_persona.rules.validations.ADD.max_size)){
        }
        else{
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo(struct.attributes_list[index], struct.attributes.apellido_persona.rules.error.ADD.max_size);
            //salir ejecucion con false
            return false;
        }

        DOM_class.mostrarexitovalor(struct.attributes_list[index]);
        return true;
    }

    static comprobar_apellidos_persona_SEARCH(struct, index){ //

        if (validacionesatomicas.size_maximo(struct.attributes_list[index], struct.attributes.apellido_persona.rules.validations.SEARCH.max_size)){
        }
        else{
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo(struct.attributes_list[index], struct.attributes.apellido_persona.rules.error.SEARCH.max_size);
            //salir ejecucion con false
            return false;
        }

        DOM_class.mostrarexitovalor(struct.attributes_list[index]);
        return true;
    }

    static comprobar_fechaNacimiento_persona(){ //

        return true;

    }

    static comprobar_fechaNacimiento_persona_SEARCH(){ //

        return true;

    }    

    static comprobar_direccion_persona(struct, index){ //

        if (validacionesatomicas.size_minimo(struct.attributes_list[index], struct.attributes.direccion_persona.rules.validations.ADD.min_size)){
        }
        else{
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo(struct.attributes_list[index], struct.attributes.direccion_persona.rules.error.ADD.min_size);

            //salir ejecucion con false
            return false;
        }

        if (validacionesatomicas.size_maximo(struct.attributes_list[index], struct.attributes.direccion_persona.rules.validations.ADD.max_size)){
        }
        else{
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo(struct.attributes_list[index], struct.attributes.direccion_persona.rules.error.ADD.max_size);

            //salir ejecucion con false
            return false;
        }

        DOM_class.mostrarexitovalor(struct.attributes_list[index]);
        return true;

    }

    static comprobar_direccion_persona_SEARCH(struct, index){ //

        if (validacionesatomicas.size_maximo(struct.attributes_list[index], struct.attributes.direccion_persona.rules.validations.SEARCH.max_size)){
        }
        else{
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo(struct.attributes_list[index], struct.attributes.direccion_persona.rules.error.SEARCH.max_size);

            //salir ejecucion con false
            return false;
        }
        
        DOM_class.mostrarexitovalor(struct.attributes_list[index]);
        return true;

    }

    static comprobar_telefono_persona(){ //
        return true;
    }

    static comprobar_telefono_persona_SEARCH(){ //
        return true;
    }

    static comprobar_email_persona(){ //
        return true;
    }

    static comprobar_email_persona_SEARCH(){ //
        return true;
    }

    static comprobar_foto_persona(){ //
        return true;
    }

    static comprobar_foto_persona_SEARCH(){
        return true;
    }

    static comprobar_nuevo_foto_persona(){ //
        return true;
    }

    static comprobar_nuevo_foto_persona_SEARCH(){ //
        return true;
    }

    static recargarform(){ //

        document.getElementById("IU_form").innerHTML= '';

        document.getElementById("IU_form").innerHTML=`

        <label class="label_dni"></label>
        <input type='text' id='dni' name='dni'></input>
        <div id="div_error_dni" class="errorcampo"><a id="error_dni"></a></div>
        <br>
        
        <label class="label_nombre_persona">Nombre de pila</label>
        <input type='text' id='nombre_persona' name='nombre_persona'></input>
        <div id="div_error_nombre_persona" class="errorcampo"><a id="error_nombre_persona"></a></div>
        <br>
        
        <label class="label_apellidos_persona">apellidos</label>
        <input type='text' id='apellidos_persona' name='apellidos_persona'></input>
        <div id="div_error_apellidos_persona" class="errorcampo"><a id="error_apellidos_persona"></a></div>
        <br>
        
        <label class="label_fechaNacimiento_persona">Fecha de Nacimiento</label>
        <input type='date' id='fechaNacimiento_persona' name='fechaNacimiento_persona'></input>
        <div id="div_error_fechaNacimiento_persona" class="errorcampo"><a id="error_fechaNacimiento_persona"></a></div>
        
        <br>
        <label class="label_direccion_persona">Dirección Postal</label>
        <!--<input type='text' id='direccion_persona' name='direccion_persona'></input>-->
        <textarea rows="5" cols="33" type='text' id='direccion_persona' name='direccion_persona'></textarea>
        <div id="div_error_direccion_persona" class="errorcampo"><a id="error_direccion_persona"></a></div>
        <br>

        <label class="label_telefono_persona">Teléfono Persona</label>
        <input type='text' id='telefono_persona' name='telefono_persona'></input>
        <div id="div_error_telefono_persona" class="errorcampo"><a id="error_telefono_persona"></a></div>
        
        <br>
        <label class="label_email_persona">Correo Electronico</label>
        <input type='text' id='email_persona' name='email_persona'></input>
        <div id="div_error_email_persona" class="errorcampo"><a id="error_email_persona"></a></div>
        
        <br>
        <label id="label_foto_persona" class="label_foto_persona">Foto Persona</label>
        <input type='text' id='foto_persona' name='foto_persona'></input>
        <a id="link_foto_persona" href="http://193.147.87.202/ET2/filesuploaded/files_foto_persona/"><img src="./iconos/FILE.png" /></a>
        <label id="label_nuevo_foto_persona" class="label_nuevo_foto_persona">Nueva Foto Persona</label>
        <input type='file' id='nuevo_foto_persona' name='nuevo_foto_persona'></input>
        <div id="div_error_foto_persona" class="errorcampo"><a id="error_nuevo_foto_persona"></a></div>
        <br>
        
        `;

        //obtener campos del formulario
        let campos = document.forms['IU_form'].elements;
        //recorrer todos los campos
        for (let i=0;i<campos.length;i++) {
            if (eval(document.getElementById('div_error_'+campos[i].id))){
                document.getElementById('div_error_'+campos[i].id).style.display = 'none';
            }
        }

        setLang();

       
    }
}