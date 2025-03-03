

function devolverFuncionalidadesAjaxPromesa(){

	crearformoculto('form_generico','');
	insertacampo('form_generico','controlador', 'funcionalidad');
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

async function devolverFuncionalidadesAjax() {

	var idioma = getCookie('lang');

	await devolverFuncionalidadesAjaxPromesa()
		.then((res) => {

			getListFuncionalidades(res.resource);

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
// funcionalidad: valor para colocar por defecto en el select
//
async function crearSelectFuncionalidadesAjax(deshabilitado = false, convacio = false, funcionalidad=null) {

	var idioma = getCookie('lang');

	await devolverFuncionalidadesAjaxPromesa()
		.then((res) => {

			let funcionalidad_select = crearselect(convacio,'id_select_funcionalidades','id_funcionalidad', 'id_funcionalidad', 'nombre_funcionalidad', res.resource, funcionalidad);
			$("#caja_select_funcionalidad").append(funcionalidad_select);
			if (deshabilitado){
				$("#caja_select_funcionalidad:not(:selected)").attr('disabled',true);
			}

		})
		.catch((res) => {
			mensajeKOCaja(res.code);
        	setLang(idioma);
		});

		document.getElementById('form_generico').remove();
}


function devolverFuncionalidadesSEARCHAjaxPromesa(){

	crearformoculto('id_formFuncionalidad','');
	insertacampo('id_formFuncionalidad','controlador', 'funcionalidad');
	insertacampo('id_formFuncionalidad','action', 'SEARCH');

	return new Promise(function(resolve, reject) {
		$.ajax({
			method: "POST",
			url: "http://193.147.87.202/Back/index.php",
			data: $("#id_formFuncionalidad").serialize(),
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

async function devolverFuncionalidadesSEARCHAjax() {

	await devolverFuncionalidadesSEARCHAjaxPromesa()
		.then((res) => {
			if (res.code = 'SQL_OK'){
				res.code = 't_search_OK';
				mensajeOKCaja(res.code);
				switchEstadoCaja('id_CajaFormFuncionalidad');
			}
			getListFuncionalidades(res.resource);

		})
		.catch((res) => {
			mensajeKOCaja(res.code);
		});

		eliminaCampo('id_formFuncionalidad', 'controlador');
		eliminaCampo('id_formFuncionalidad', 'action');
}


function getListFuncionalidades(listafuncionalidades){

	//listafuncionalidades = devolverFuncionalidadesAjaxPromesa();

	document.getElementById("id_datosFuncionalidad").innerHTML = "";

	for (let funcionalidad of listafuncionalidades){

		datosfila = "'"+funcionalidad.nombre_funcionalidad+"',"+"'"+funcionalidad.descrip_funcionalidad+"',"+"'"+funcionalidad.id_funcionalidad+"'";

		lineatabla = '<tr><td>'+funcionalidad['nombre_funcionalidad']+'</td><td>'+funcionalidad['descrip_funcionalidad']+'</td>';
		botonedit = '<td><img style="cursor: pointer" class="titulo_edit" src="./images/editar.png" onclick="crearformEDITfuncionalidad('+datosfila+');" width="50" height="50"></td>';
		botondelete = '<td><img style="cursor: pointer" class="titulo_delete" src="./images/borrar.png" onclick="crearformDELETEfuncionalidad('+datosfila+');" width="50" height="50"></td>';
		botondetail = '<td><img style="cursor: pointer" class="titulo_detail" onclick="crearformDETAILfuncionalidad('+datosfila+');" src="./images/ver-detalles.png" width="50" height="50"></td>';
		lineatabla += botonedit + botondelete + botondetail + "</tr>";

		$("#id_datosFuncionalidad").append(lineatabla);
	}

}

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

async function funcionalidadADDAjaxPromesa(){

	crearformoculto('id_formFuncionalidad','');
	insertacampo('id_formFuncionalidad','controlador', 'funcionalidad');
	insertacampo('id_formFuncionalidad','action', 'ADD');

	return new Promise(function(resolve, reject) {
		$.ajax({
			method: "POST",
			url: "http://193.147.87.202/Back/index.php",
			data: $("#id_formFuncionalidad").serialize(),
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

async function ADDFuncionalidadAjax() {

	await funcionalidadADDAjaxPromesa()
		.then((res) => {

			if (res.code = 'SQL_OK'){
				res.code = 't_add_funcionalidad_OK';
				devolverFuncionalidadesAjax();
				mensajeOKCaja(res.code);
				switchEstadoCaja('id_CajaFormFuncionalidad');
			}
		})
		.catch((res) => {
			mensajeKOCaja(res.code);
		});
		eliminaCampo('id_formFuncionalidad', 'controlador');
		eliminaCampo('id_formFuncionalidad', 'action');
}

//Función ajax con promesas
function funcionalidadEDITAjaxPromesa(){

	insertacampo('id_formFuncionalidad','controlador', 'funcionalidad');
	insertacampo('id_formFuncionalidad','action', 'EDIT');

	return new Promise(function(resolve, reject) {
		$.ajax({
			method: "POST",
			url: "http://193.147.87.202/Back/index.php",
			data: $("#id_formFuncionalidad").serialize(),
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

async function EDITFuncionalidadAjax() {


	 await funcionalidadEDITAjaxPromesa()
		.then((res) => {

			if (res.code == 'SQL_OK'){
				res.code = 't_edit_funcionalidad_OK';
				devolverFuncionalidadesAjax();
				mensajeOKCaja(res.code);
				switchEstadoCaja('id_CajaFormFuncionalidad');
			};
		})
		.catch((res) => {
			mensajeKOCaja(res.code);
		});
		eliminaCampo('id_formFuncionalidad', 'controlador');
		eliminaCampo('id_formFuncionalidad', 'action');
}

function funcionalidadDELETEAjaxPromesa(){

	insertacampo('id_formFuncionalidad','controlador', 'funcionalidad');
	insertacampo('id_formFuncionalidad','action', 'DELETE');

	return new Promise(function(resolve, reject) {
		$.ajax({
			method: "POST",
			url: "http://193.147.87.202/Back/index.php",
			data: $("#id_formFuncionalidad").serialize(),
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

async function DELETEFuncionalidadAjax() {


	await funcionalidadDELETEAjaxPromesa()
		.then((res) => {

			if (res.code == 'SQL_OK'){
				res.code = 't_delete_funcionalidad_OK';
				devolverFuncionalidadesAjax();
				mensajeOKCaja(res.code);
				switchEstadoCaja('id_CajaFormFuncionalidad');
			};

			//window.location.href = "gestionfuncionalidad.html";
		})
		.catch((res) => {
			mensajeKOCaja(res.code);
		});

		eliminaCampo('id_formFuncionalidad', 'controlador');
		eliminaCampo('id_formFuncionalidad', 'action');
}


function crearformEDITfuncionalidad(nombre, desc, idfuncionalidad){

	setColorEstandarInputFormFuncionalidad();

	$('#nombre_funcionalidad').val(nombre);
	$('#nombre_funcionalidad').attr('readOnly', false);
	$('#descrip_funcionalidad').val(desc);
	$('#descrip_funcionalidad').attr('readOnly', false);

	$('#id_funcionalidad').val(idfuncionalidad);
	$('#caja_id_funcionalidad').attr('style', 'display:none');

	//$('#id_CajaFormFuncionalidad').attr('label', 'caja_form_funcionalidad_editar');
	$('#id_submitFuncionalidad').attr('label', 'EDIT');
	$('#id_submitFuncionalidad').attr('src', './images/editar.png');

	switchEstadoCaja('id_CajaFormFuncionalidad');

}

function crearformADDfuncionalidad(){

	document.getElementById('nombre_funcionalidad').value = '';
	document.getElementById('nombre_funcionalidad').readOnly = false;
	document.getElementById('descrip_funcionalidad').value = '';
	document.getElementById('descrip_funcionalidad').readOnly = false;
	document.getElementById('id_funcionalidad').value = '';

	$('#caja_id_funcionalidad').attr('style', 'display:none');

	//$('#id_CajaFormFuncionalidad').attr('label', 'caja_form_funcionalidad_anadir');
	$('#id_submitFuncionalidad').attr('label', 'ADD');
	$('#id_submitFuncionalidad').attr('src', './images/anadir.png');

}

function crearformSEARCHfuncionalidad(){


	document.getElementById('nombre_funcionalidad').value = '';
	document.getElementById('nombre_funcionalidad').readOnly = false;
	document.getElementById('descrip_funcionalidad').value = '';
	document.getElementById('descrip_funcionalidad').readOnly = false;
	document.getElementById('id_funcionalidad').readOnly = false;
	document.getElementById('id_funcionalidad').value = '';

	$('#caja_id_funcionalidad').attr('style', 'display:block');

	//$('#id_CajaFormFuncionalidad').attr('label', 'caja_form_funcionalidad_anadir');
	$('#id_submitFuncionalidad').attr('label', 'SEARCH');
	$('#id_submitFuncionalidad').attr('src', './images/buscar.png');


}

function crearformDELETEfuncionalidad(nombre, desc, idfuncionalidad){

	setColorEstandarInputFormFuncionalidad();

	$('#nombre_funcionalidad').val(nombre);
	$('#nombre_funcionalidad').attr('readOnly', true);
	$('#descrip_funcionalidad').val(desc);
	$('#descrip_funcionalidad').attr('readOnly', true);
	$('#id_funcionalidad').val(idfuncionalidad);
	$('#id_funcionalidad').attr('readOnly', true);
	$('#caja_id_funcionalidad').attr('style', 'display:block');

	//$('#id_CajaFormFuncionalidad').attr('label', 'caja_form_funcionalidad_editar');
	$('#id_submitFuncionalidad').attr('label', 'DELETE');
	$('#id_submitFuncionalidad').attr('src', './images/borrar.png');

	switchEstadoCaja('id_CajaFormFuncionalidad');

}

function crearformDETAILfuncionalidad(nombre, desc, idfuncionalidad){

	setColorEstandarInputFormFuncionalidad();

	$('#nombre_funcionalidad').val(nombre);
	$('#nombre_funcionalidad').attr('readOnly', true);
	$('#descrip_funcionalidad').val(desc);
	$('#descrip_funcionalidad').attr('readOnly', true);
	$('#id_funcionalidad').val(idfuncionalidad);
	$('#id_funcionalidad').attr('readOnly', true);
	$('#caja_id_funcionalidad').attr('style', 'display:block');

	//$('#id_CajaFormFuncionalidad').attr('label', 'caja_form_funcionalidad_editar');
	$('#id_submitFuncionalidad').attr('label', 'DETAIL');
	$('#id_submitFuncionalidad').attr('src', './images/detalle.png');

	switchEstadoCaja('id_CajaFormFuncionalidad');

}

function enviarFuncionalidadByLabel(){

let x = $('#id_submitFuncionalidad').attr('label');

if(x == 'ADD'){

 ADDFuncionalidadAjax();

}else if(x == 'EDIT'){

 EDITFuncionalidadAjax();

}else if(x == 'DELETE'){

 DELETEFuncionalidadAjax();

}else if(x == 'SEARCH'){

 devolverFuncionalidadesSEARCHAjax();

}else if(x == 'DETAIL'){


}

}

function comprobarFormatoFormularioFuncionalidadYEnviar(){

let x = $('#id_submitFuncionalidad').attr('label');

if((x == 'ADD') || (x == 'EDIT')){
	if((comprobar_nombre_funcionalidad()==true)&&(comprobar_descripcion_funcionalidad()==true)){

	enviarFuncionalidadByLabel();

	}
}else{

	enviarFuncionalidadByLabel();

	}
}

function setColorEstandarInputFormFuncionalidad(){

document.getElementById('nombre_funcionalidad').style.borderColor = "";
document.getElementById('descrip_funcionalidad').style.borderColor = "";

}
