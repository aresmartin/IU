window.addEventListener('load',function(){

document.getElementById('fecha_nacimiento_persona').addEventListener('blur',function(){

});

document.getElementById('fecha_nacimiento_persona').addEventListener('focus',function(){

document.getElementById('fecha_nacimiento_persona').type= 'date';

});

});



//////////////////////////CARGAR PERSONAS ACTUALES EN TABLA/////////////////////
function devolverPersonasAjaxPromesa(){

	crearformoculto('form_generico','');
	insertacampo('form_generico','controlador', 'persona');
	insertacampo('form_generico','action', 'SEARCH');

	return new Promise(function(resolve, reject) {
		$.ajax({
			method: "POST",
			url: "http://193.147.87.202/Back/index.php",
			data: $("#form_generico").serialize(),
		}).done(res => {
			if (res.ok != true) {
				reject(res);
			}
			else{
				resolve(res);
			}
		})
		.fail( function( jqXHR ) {
			mensajeHTTPFAIL(jqXHR.status);
		});
	});
}

async function devolverPersonasAjax() {

	await devolverPersonasAjaxPromesa()
		.then((res) => {

			getListPersonas(res.resource);

		})
		.catch((res) => {
			mensajeKOCaja(res.code);
		});

		document.getElementById('form_generico').remove();
}

function devolverPersonasSEARCHAjaxPromesa(){

	crearformoculto('id_formPersona','');
	insertacampo('id_formPersona','controlador', 'persona');
	insertacampo('id_formPersona','action', 'SEARCH');

	return new Promise(function(resolve, reject) {
		$.ajax({
			method: "POST",
			url: "http://193.147.87.202/Back/index.php",
			data: $("#id_formPersona").serialize(),
		}).done(res => {
			if (res.ok != true) {
				reject(res);
			}
			else{
				resolve(res);
			}
		})
		.fail( function( jqXHR ) {
			mensajeHTTPFAIL(jqXHR.status);
		});
	});
}

async function devolverPersonasSEARCHAjax() {

	await devolverPersonasSEARCHAjaxPromesa()
		.then((res) => {
			if (res.code = 'SQL_OK'){
				res.code = 't_search_OK';
				mensajeOKCaja(res.code);
				switchEstadoCaja('id_CajaFormPersona');

			}
			getListPersonas(res.resource);

		})
		.catch((res) => {
			mensajeKOCaja(res.code);
		});

		eliminaCampo('id_formPersona', 'controlador');
		eliminaCampo('id_formPersona', 'action');
}

function getListPersonas(listapersonas){
	//listapersonas = devolverpersonas();
	document.getElementById('id_datosPersona').innerHTML = "";

	for (let persona of listapersonas){

		datosfila = "'"+persona.nombre_persona+"',"+"'"+persona.apellidos_persona+"',"+"'"+persona.fechaNacimiento_persona+
		"',"+"'"+persona.direccion_persona+"',"+"'"+persona.telefono_persona+"',"+"'"+persona.email_persona+"',"+"'"+persona.dni+"'";

		lineatabla = '<tr><td>'+persona.dni+'</td><td>'+persona['nombre_persona']+'</td><td>'+persona['apellidos_persona']+"</td>"+'</td><td>'+persona['email_persona']+'</td><td>'+persona['foto_persona'];

    botonedit = '<td><img style="cursor: pointer" class="titulo_edit" onclick="crearformEDITpersona('+datosfila+');" src="./images/editar.png" width="50" height="50"></td>';
		botondelete = '<td><img style="cursor: pointer" class="titulo_delete" onclick="crearformDELETEpersona('+datosfila+');" src="./images/borrar.png" width="50" height="50"></td>';
		botondetail = '<td><img style="cursor: pointer" class="titulo_detail" onclick="crearformDETAILpersona('+datosfila+');" src="./images/ver-detalles.png" width="50" height="50"></td>';
		lineatabla += botonedit + botondelete + botondetail + "</tr>";

		$("#id_datosPersona").append(lineatabla);
	}

}
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function PersonaADDAjaxPromesa(){

	crearformoculto('id_formPersona','');
	insertacampo('id_formPersona','controlador', 'persona');
	insertacampo('id_formPersona','action', 'ADD');

	return new Promise(function(resolve, reject) {
		$.ajax({
			method: "POST",
			url: "http://193.147.87.202/Back/index.php",
			data: $("#id_formPersona").serialize(),
		}).done(res => {
			if (res.ok != true) {
				reject(res);
			}
			else{
				resolve(res);
			}
		})
		.fail( function( jqXHR ) {
			mensajeHTTPFAIL(jqXHR.status);
		});
	});
}

async function ADDPersonaAjax() {

	await PersonaADDAjaxPromesa()
		.then((res) => {

			if (res.code = 'SQL_OK'){
				res.code = 't_add_persona_OK';

				mensajeOKCaja(res.code);
				switchEstadoCaja('id_CajaFormPersona');
				devolverPersonasAjax();
			}

		})
		.catch((res) => {
			mensajeKOCaja(res.code);
		});

		eliminaCampo('id_formPersona', 'controlador');
		eliminaCampo('id_formPersona', 'action');
}

function PersonaEDITAjaxPromesa(){

	insertacampo('id_formPersona','controlador', 'persona');
	insertacampo('id_formPersona','action', 'EDIT');

	return new Promise(function(resolve, reject) {
		$.ajax({
			method: "POST",
			url: "http://193.147.87.202/Back/index.php",
			data: $("#id_formPersona").serialize(),
		}).done(res => {
			if (res.ok != true) {
				reject(res);
			}
			else{
				resolve(res);
			}
		})
		.fail( function( jqXHR ) {
			mensajeHTTPFAIL(jqXHR.status);
		});
	});
}

async function EDITPersonaAjax() {
	await PersonaEDITAjaxPromesa()
		.then((res) => {

			if (res.code == 'SQL_OK'){
				res.code = 't_edit_persona_OK';
				mensajeOKCaja(res.code);
				switchEstadoCaja('id_CajaFormPersona');
				devolverPersonasAjax();
			};

		})
		.catch((res) => {
			mensajeKOCaja(res.code);
		});
		eliminaCampo('id_formPersona', 'controlador');
		eliminaCampo('id_formPersona', 'action');
}

function PersonaDELETEAjaxPromesa(){

	insertacampo('id_formPersona','controlador', 'persona');
	insertacampo('id_formPersona','action', 'DELETE');

	return new Promise(function(resolve, reject) {
		$.ajax({
			method: "POST",
			url: "http://193.147.87.202/Back/index.php",
			data: $("#id_formPersona").serialize(),
		}).done(res => {
			if (res.ok != true) {
				reject(res);
			}
			else{
				resolve(res);
			}
		})
		.fail( function( jqXHR ) {
			mensajeHTTPFAIL(jqXHR.status);
		});
	});
}

async function DELETEPersonaAjax() {
	await PersonaDELETEAjaxPromesa()
		.then((res) => {

			if (res.code == 'SQL_OK'){
				res.code = 't_delete_persona_OK';
				mensajeOKCaja(res.code);
				switchEstadoCaja('id_CajaFormPersona');
				devolverPersonasAjax();
			};

		})
		.catch((res) => {
			mensajeKOCaja(res.code);
		});

		eliminaCampo('id_formPersona', 'controlador');
		eliminaCampo('id_formPersona', 'action');
}


function crearformEDITpersona(nombre, apellidos, fechaN, direccion, telefono, email, dni){

  setColorEstandarInputFormPersona();

	$('#nombre_persona').val(nombre);
	$('#nombre_persona').attr('readOnly', false);
	$('#apellido_persona').val(apellidos);
	$('#apellido_persona').attr('readOnly', false);
	$('#fecha_nacimiento_persona').val(fechaN);
	$('#fecha_nacimiento_persona').attr('readOnly', false);
	$('#direccion_persona').val(direccion);
	$('#direccion_persona').attr('readOnly', false);
	$('#telefono_persona').val(telefono);
	$('#telefono_persona').attr('readOnly', false);
	$('#email_persona').val(email);
	$('#email_persona').attr('readOnly', false);
	$('#dni_persona').val(dni);
	$('#dni_persona').attr('readOnly', true);


	$('#id_submitPersona').attr('label', 'EDIT');
	$('#id_submitPersona').attr('src', './images/editar.png');

	switchEstadoCaja('id_CajaFormPersona');


}

function crearformDELETEpersona(nombre, apellidos, fechaN, direccion, telefono, email, dni){

	setColorEstandarInputFormPersona();

	$('#nombre_persona').val(nombre);
	$('#nombre_persona').attr('readOnly', true);
	$('#apellido_persona').val(apellidos);
	$('#apellido_persona').attr('readOnly', true);
	$('#fecha_nacimiento_persona').val(fechaN);
	$('#fecha_nacimiento_persona').attr('readOnly', true);
	$('#direccion_persona').val(direccion);
	$('#direccion_persona').attr('readOnly', true);
	$('#telefono_persona').val(telefono);
	$('#telefono_persona').attr('readOnly', true);
	$('#email_persona').val(email);
	$('#email_persona').attr('readOnly', true);
	$('#dni_persona').val(dni);
	$('#dni_persona').attr('readOnly', true);


	$('#id_submitPersona').attr('label', 'DELETE');
	$('#id_submitPersona').attr('src', './images/borrar.png');

	switchEstadoCaja('id_CajaFormPersona');


}

function crearformDETAILpersona(nombre, apellidos, fechaN, direccion, telefono, email, dni){

	setColorEstandarInputFormPersona();

	$('#nombre_persona').val(nombre);
	$('#nombre_persona').attr('readOnly', true);
	$('#apellido_persona').val(apellidos);
	$('#apellido_persona').attr('readOnly', true);
	$('#fecha_nacimiento_persona').val(fechaN);
	$('#fecha_nacimiento_persona').attr('readOnly', true);
	$('#direccion_persona').val(direccion);
	$('#direccion_persona').attr('readOnly', true);
	$('#telefono_persona').val(telefono);
	$('#telefono_persona').attr('readOnly', true);
	$('#email_persona').val(email);
	$('#email_persona').attr('readOnly', true);
	$('#dni_persona').val(dni);
	$('#dni_persona').attr('readOnly', true);


	$('#id_submitPersona').attr('label', 'DETAIL');
	$('#id_submitPersona').attr('src', './images/detalle.png');

	switchEstadoCaja('id_CajaFormPersona');



}

function crearformADDpersona(){

	document.getElementById('nombre_persona').value = '';
	document.getElementById('nombre_persona').readOnly = false;
	document.getElementById('apellido_persona').value = '';
	document.getElementById('apellido_persona').readOnly = false;
	document.getElementById('fecha_nacimiento_persona').value = '';
	document.getElementById('fecha_nacimiento_persona').readOnly = false;
	document.getElementById('direccion_persona').value = '';
	document.getElementById('direccion_persona').readOnly = false;
	document.getElementById('telefono_persona').value = '';
	document.getElementById('telefono_persona').readOnly = false;
	document.getElementById('email_persona').value = '';
	document.getElementById('email_persona').readOnly = false;
	document.getElementById('dni_persona').value = '';
	document.getElementById('dni_persona').readOnly = false;

	$('#id_CajaFormPersona').attr('label', 'caja_form_persona_anadir');
	$('#id_submitPersona').attr('label', 'ADD');
	$('#id_submitPersona').attr('src', './images/anadir.png');


}

function crearformSEARCHpersona(){

	document.getElementById('nombre_persona').value = '';
	document.getElementById('nombre_persona').readOnly = false;
	document.getElementById('apellido_persona').value = '';
	document.getElementById('apellido_persona').readOnly = false;
	document.getElementById('fecha_nacimiento_persona').value = '';
	document.getElementById('fecha_nacimiento_persona').readOnly = false;
	document.getElementById('direccion_persona').value = '';
	document.getElementById('direccion_persona').readOnly = false;
	document.getElementById('telefono_persona').value = '';
	document.getElementById('telefono_persona').readOnly = false;
	document.getElementById('email_persona').value = '';
	document.getElementById('email_persona').readOnly = false;
	document.getElementById('dni_persona').value = '';
	document.getElementById('dni_persona').readOnly = false;

	$('#id_CajaFormPersona').attr('label', 'caja_form_persona_anadir');
	$('#id_submitPersona').attr('src', './images/buscar.png');

	$('#id_submitPersona').attr('label', 'SEARCH');


}

function enviarPersonaByLabel(){

let x = $('#id_submitPersona').attr('label');

if(x == 'ADD'){

 ADDPersonaAjax();


}else if(x == 'EDIT'){

 EDITPersonaAjax();

}else if(x == 'DELETE'){

 DELETEPersonaAjax();

}else if(x == 'SEARCH'){

 devolverPersonasSEARCHAjax();

}else if(x == 'DETAIL'){


}
}

function comprobarFormatoFormularioPersonaYEnviar(){

let x = $('#id_submitPersona').attr('label');

if((x == 'ADD') || (x == 'EDIT')){
	if((comprobar_nombre()==true)&&(comprobar_apellido()==true)&&(comprobar_dni()==true)&&(comprobar_email()==true)
	&&(comprobar_tlf()==true)&&(comprobar_dire()==true)){

	enviarPersonaByLabel();
	}
}else{

		enviarPersonaByLabel();

	}
}

function setColorEstandarInputFormPersona(){

document.getElementById('nombre_persona').style.borderColor = "";
document.getElementById('dni_persona').style.borderColor = "";
document.getElementById('apellido_persona').style.borderColor = "";
document.getElementById('email_persona').style.borderColor = "";
document.getElementById('direccion_persona').style.borderColor = "";
document.getElementById('telefono_persona').style.borderColor = "";

}
