

function devolverAccionesAjaxPromesa(){

	crearformoculto('form_generico','');
	insertacampo('form_generico','controlador', 'accion');
	insertacampo('form_generico','action', 'SEARCH');

	return new Promise(function(resolve, reject) {
		$.ajax({
			method: "POST",
			url: 'http://193.147.87.202/Back/index.php',
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

async function devolverAccionesAjax() {

	var idioma = getCookie('lang');

	await devolverAccionesAjaxPromesa()
		.then((res) => {

			getListAcciones(res.resource);

		})
		.catch((res) => {
			mensajeKOCaja(res.code);
        	setLang(idioma);
		});

		document.getElementById('form_generico').remove();
}

//
// deshabilitado: true si se quiere que el campo select este no seleccionable
// convacio: true si se quiere que el select incorpore un vacio inicial
// accion: valor para colocar por defecto en el select
//
async function crearSelectAccionesAjax(deshabilitado = false, convacio = false, accion=null) {

	var idioma = getCookie('lang');

	await devolverAccionesAjaxPromesa()
		.then((res) => {

			let accion_select = crearselect(convacio,'id_select_acciones','id_accion', 'id_accion', 'nombre_accion', res.resource, accion);
			$("#caja_select_accion").append(accion_select);
			if (deshabilitado){
				$("#caja_select_accion:not(:selected)").attr('disabled',true);
			}

		})
		.catch((res) => {
			mensajeKOCaja(res.code);
        	setLang(idioma);
		});

		document.getElementById('form_generico').remove();
}


function devolverAccionesSEARCHAjaxPromesa(){

	crearformoculto('id_formAccion','');
	insertacampo('id_formAccion','controlador', 'accion');
	insertacampo('id_formAccion','action', 'SEARCH');

	return new Promise(function(resolve, reject) {
		$.ajax({
			method: "POST",
			url: "http://193.147.87.202/Back/index.php",
			data: $("#id_formAccion").serialize(),
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

async function devolverAccionesSEARCHAjax() {

	await devolverAccionesSEARCHAjaxPromesa()
		.then((res) => {
			if (res.code = 'SQL_OK'){
				res.code = 't_search_OK';
				mensajeOKCaja(res.code);
				switchEstadoCaja('id_CajaFormAccion');
			}
			getListAcciones(res.resource);

		})
		.catch((res) => {
			mensajeKOCaja(res.code);
		});

		eliminaCampo('id_formAccion', 'controlador');
		eliminaCampo('id_formAccion', 'action');
}


function getListAcciones(listaacciones){

	//listaacciones = devolverAccionesAjaxPromesa();

	document.getElementById("id_datosAccion").innerHTML = "";

	for (let accion of listaacciones){

		datosfila = "'"+accion.nombre_accion+"',"+"'"+accion.descrip_accion+"',"+"'"+accion.id_accion+"'";

		lineatabla = '<tr><td>'+accion['nombre_accion']+'</td><td>'+accion['descrip_accion']+'</td>';
		botonedit = '<td><img style="cursor: pointer" class="titulo_edit" src="./images/editar.png" onclick="crearformEDITaccion('+datosfila+');" width="50" height="50"></td>';
		botondelete = '<td><img style="cursor: pointer" class="titulo_delete" src="./images/borrar.png" onclick="crearformDELETEaccion('+datosfila+');" width="50" height="50"></td>';
		botondetail = '<td><img style="cursor: pointer" class="titulo_detail" onclick="crearformDETAILaccion('+datosfila+');" src="./images/ver-detalles.png" width="50" height="50"></td>';
		lineatabla += botonedit + botondelete + botondetail + "</tr>";

		$("#id_datosAccion").append(lineatabla);
	}

}

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

async function accionADDAjaxPromesa(){

	crearformoculto('id_formAccion','');
	insertacampo('id_formAccion','controlador', 'accion');
	insertacampo('id_formAccion','action', 'ADD');

	return new Promise(function(resolve, reject) {
		$.ajax({
			method: "POST",
			url: "http://193.147.87.202/Back/index.php",
			data: $("#id_formAccion").serialize(),
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

async function ADDAccionAjax() {

	await accionADDAjaxPromesa()
		.then((res) => {

			if (res.code = 'SQL_OK'){
				res.code = 't_add_accion_OK';
				devolverAccionesAjax();
				mensajeOKCaja(res.code);
				switchEstadoCaja('id_CajaFormAccion');
			}
		})
		.catch((res) => {
			mensajeKOCaja(res.code);
		});
		eliminaCampo('id_formAccion', 'controlador');
		eliminaCampo('id_formAccion', 'action');
}

//Función ajax con promesas
function accionEDITAjaxPromesa(){

	insertacampo('id_formAccion','controlador', 'accion');
	insertacampo('id_formAccion','action', 'EDIT');

	return new Promise(function(resolve, reject) {
		$.ajax({
			method: "POST",
			url: "http://193.147.87.202/Back/index.php",
			data: $("#id_formAccion").serialize(),
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

async function EDITAccionAjax() {


	 await accionEDITAjaxPromesa()
		.then((res) => {

			if (res.code == 'SQL_OK'){
				res.code = 't_edit_accion_OK';
				devolverAccionesAjax();
				mensajeOKCaja(res.code);
				switchEstadoCaja('id_CajaFormAccion');
			};
		})
		.catch((res) => {
			mensajeKOCaja(res.code);
		});
		eliminaCampo('id_formAccion', 'controlador');
		eliminaCampo('id_formAccion', 'action');
}

function accionDELETEAjaxPromesa(){

	insertacampo('id_formAccion','controlador', 'accion');
	insertacampo('id_formAccion','action', 'DELETE');

	return new Promise(function(resolve, reject) {
		$.ajax({
			method: "POST",
			url: "http://193.147.87.202/Back/index.php",
			data: $("#id_formAccion").serialize(),
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

async function DELETEAccionAjax() {


	await accionDELETEAjaxPromesa()
		.then((res) => {

			if (res.code == 'SQL_OK'){
				res.code = 't_delete_accion_OK';
				devolverAccionesAjax();
				mensajeOKCaja(res.code);
				switchEstadoCaja('id_CajaFormAccion');
			};

			//window.location.href = "gestionaccion.html";
		})
		.catch((res) => {
			mensajeKOCaja(res.code);
		});

		eliminaCampo('id_formAccion', 'controlador');
		eliminaCampo('id_formAccion', 'action');
}


function crearformEDITaccion(nombre, desc, idaccion){

	setColorEstandarInputFormAccion();

	$('#nombre_accion').val(nombre);
	$('#nombre_accion').attr('readOnly', false);
	$('#descrip_accion').val(desc);
	$('#descrip_accion').attr('readOnly', false);

	$('#id_accion').val(idaccion);
	$('#caja_id_accion').attr('style', 'display:none');

	//$('#id_CajaFormAccion').attr('label', 'caja_form_accion_editar');
	$('#id_submitAccion').attr('label', 'EDIT');
	$('#id_submitAccion').attr('src', './images/editar.png');
	switchEstadoCaja('id_CajaFormAccion');

}

function crearformADDaccion(){

	document.getElementById('nombre_accion').value = '';
	document.getElementById('nombre_accion').readOnly = false;
	document.getElementById('descrip_accion').value = '';
	document.getElementById('descrip_accion').readOnly = false;

	$('#caja_id_accion').attr('style', 'display:none');

	//$('#id_CajaFormAccion').attr('label', 'caja_form_accion_anadir');
	$('#id_submitAccion').attr('label', 'ADD');
	$('#id_submitAccion').attr('src', './images/anadir.png');

}

function crearformSEARCHaccion(){


	document.getElementById('nombre_accion').value = '';
	document.getElementById('nombre_accion').readOnly = false;
	document.getElementById('descrip_accion').value = '';
	document.getElementById('descrip_accion').readOnly = false;
	document.getElementById('id_accion').value = '';

	$('#caja_id_accion').attr('style', 'display:block');

	//$('#id_CajaFormAccion').attr('label', 'caja_form_accion_anadir');
	$('#id_submitAccion').attr('label', 'SEARCH');
	$('#id_submitAccion').attr('src', './images/buscar.png');


}

function crearformDELETEaccion(nombre, desc, idaccion){

	setColorEstandarInputFormAccion();

	$('#nombre_accion').val(nombre);
	$('#nombre_accion').attr('readOnly', true);
	$('#descrip_accion').val(desc);
	$('#descrip_accion').attr('readOnly', true);
	$('#id_accion').val(idaccion);
	$('#id_accion').attr('readOnly', true);
	$('#caja_id_accion').attr('style', 'display:block');

	//$('#id_CajaFormAccion').attr('label', 'caja_form_accion_editar');
	$('#id_submitAccion').attr('label', 'DELETE');
	$('#id_submitAccion').attr('src', './images/borrar.png');
	switchEstadoCaja('id_CajaFormAccion');


}

function crearformDETAILaccion(nombre, desc, idaccion){

	setColorEstandarInputFormAccion();

	$('#nombre_accion').val(nombre);
	$('#nombre_accion').attr('readOnly', true);
	$('#descrip_accion').val(desc);
	$('#descrip_accion').attr('readOnly', true);
	$('#id_accion').val(idaccion);
	$('#id_accion').attr('readOnly', true);
	$('#caja_id_accion').attr('style', 'display:block');

	$('#id_submitAccion').attr('label', 'DETAIL');
	$('#id_submitAccion').attr('src', './images/detalle.png');

	switchEstadoCaja('id_CajaFormAccion');

}

function enviarAccionByLabel(){

let x = $('#id_submitAccion').attr('label');

if(x == 'ADD'){

 ADDAccionAjax();

}else if(x == 'EDIT'){

 EDITAccionAjax();

}else if(x == 'DELETE'){

 DELETEAccionAjax();

}else if(x == 'SEARCH'){

 devolverAccionesSEARCHAjax();

}else if(x == 'DETAIL'){


}

}

function comprobarFormatoFormularioAccionYEnviar(){

let x = $('#id_submitAccion').attr('label');

if((x == 'ADD') || (x == 'EDIT')){
	if((comprobar_nombre_accion()==true)&&(comprobar_descripcion_accion()==true)){

	enviarAccionByLabel();

	}
}else{

	enviarAccionByLabel();

	}
}

function setColorEstandarInputFormAccion(){

document.getElementById('nombre_accion').style.borderColor = "";
document.getElementById('descrip_accion').style.borderColor = "";

}
