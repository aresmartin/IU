function devolverRolesAjaxPromesa(){

	crearformoculto('form_generico','');
	insertacampo('form_generico','controlador', 'rol');
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

async function devolverRolesAjax() {


	await devolverRolesAjaxPromesa()
		.then((res) => {

			getListRoles(res.resource);

		})
		.catch((res) => {
			mensajeKOCaja(res.code);
		});

		document.getElementById('form_generico').remove();
}


//
// deshabilitado: true si se quiere que el campo select este no seleccionable
// convacio: true si se quiere que el select incorpore un vacio inicial
// rol: valor para colocar por defecto en el select
//
async function crearSelectRolesAjax(deshabilitado = false, convacio = false, rol=null) {

	await devolverRolesAjaxPromesa()
		.then((res) => {

			let rol_select = crearselect(convacio,'id_select_roles','id_rol', 'id_rol', 'nombre_rol', res.resource, rol);
			$("#caja_select_rol").append(rol_select);
			if (deshabilitado){
				$("#id_select_roles:not(:selected)").attr('disabled','disabled');
			}

		})
		.catch((res) => {
			mensajeKOCaja(res.code);
		});

		document.getElementById('form_generico').remove();
}


function devolverRolesSEARCHAjaxPromesa(){

	crearformoculto('id_formRol','');
	insertacampo('id_formRol','controlador', 'rol');
	insertacampo('id_formRol','action', 'SEARCH');

	return new Promise(function(resolve, reject) {
		$.ajax({
			method: "POST",
			url: "http://193.147.87.202/Back/index.php",
			data: $("#id_formRol").serialize(),
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

async function devolverRolesSEARCHAjax() {

	await devolverRolesSEARCHAjaxPromesa()
		.then((res) => {
			if (res.code = 'SQL_OK'){
				res.code = 't_search_OK';
				mensajeOKCaja(res.code);
				switchEstadoCaja('id_CajaFormRol');
			}
			getListRoles(res.resource);

		})
		.catch((res) => {
			mensajeKOCaja(res.code);
		});

		eliminaCampo('id_formRol', 'controlador');
		eliminaCampo('id_formRol', 'action');
}


function getListRoles(listaroles){

	//listaroles = devolverRolesAjaxPromesa();

	document.getElementById("id_datosRol").innerHTML = "";

	for (let rol of listaroles){

		datosfila = "'"+rol.nombre_rol+"',"+"'"+rol.descrip_rol+"',"+"'"+rol.id_rol+"'";

		lineatabla = '<tr><td>'+rol['nombre_rol']+'</td><td>'+rol['descrip_rol']+'</td>';
		botonedit = '<td><img style="cursor: pointer" class="titulo_edit" src="./images/editar.png" onclick="crearformEDITrol('+datosfila+');" width="50" height="50"></td>';
		botondelete = '<td><img style="cursor: pointer" class="titulo_delete" src="./images/borrar.png" onclick="crearformDELETErol('+datosfila+');" width="50" height="50"></td>';
		botondetail = '<td><img style="cursor: pointer" class="titulo_detail" onclick="crearformDETAILrol('+datosfila+');" src="./images/ver-detalles.png" width="50" height="50"></td>';
		lineatabla += botonedit + botondelete + botondetail + "</tr>";

		$("#id_datosRol").append(lineatabla);
	}

}

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

async function rolADDAjaxPromesa(){

	crearformoculto('id_formRol','');
	insertacampo('id_formRol','controlador', 'rol');
	insertacampo('id_formRol','action', 'ADD');

	return new Promise(function(resolve, reject) {
		$.ajax({
			method: "POST",
			url: "http://193.147.87.202/Back/index.php",
			data: $("#id_formRol").serialize(),
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

async function ADDRolAjax() {

	await rolADDAjaxPromesa()
		.then((res) => {

			if (res.code = 'SQL_OK'){
				res.code = 't_add_rol_OK';
				devolverRolesAjax();
				mensajeOKCaja(res.code);
				switchEstadoCaja('id_CajaFormRol');
			}
		})
		.catch((res) => {
			mensajeKOCaja(res.code);
		});
		eliminaCampo('id_formRol', 'controlador');
		eliminaCampo('id_formRol', 'action');
}

//Función ajax con promesas
function rolEDITAjaxPromesa(){

	insertacampo('id_formRol','controlador', 'rol');
	insertacampo('id_formRol','action', 'EDIT');

	return new Promise(function(resolve, reject) {
		$.ajax({
			method: "POST",
			url: "http://193.147.87.202/Back/index.php",
			data: $("#id_formRol").serialize(),
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

async function EDITRolAjax() {


	 await rolEDITAjaxPromesa()
		.then((res) => {

			if (res.code == 'SQL_OK'){
				res.code = 't_edit_rol_OK';
				devolverRolesAjax();
				mensajeOKCaja(res.code);
				switchEstadoCaja('id_CajaFormRol');
			};
		})
		.catch((res) => {
			mensajeKOCaja(res.code);
		});
		eliminaCampo('id_formRol', 'controlador');
		eliminaCampo('id_formRol', 'action');
}

function rolDELETEAjaxPromesa(){

	insertacampo('id_formRol','controlador', 'rol');
	insertacampo('id_formRol','action', 'DELETE');

	return new Promise(function(resolve, reject) {
		$.ajax({
			method: "POST",
			url: "http://193.147.87.202/Back/index.php",
			data: $("#id_formRol").serialize(),
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

async function DELETERolAjax() {


	await rolDELETEAjaxPromesa()
		.then((res) => {

			if (res.code == 'SQL_OK'){
				res.code = 't_delete_rol_OK';
				devolverRolesAjax();
				mensajeOKCaja(res.code);
				switchEstadoCaja('id_CajaFormRol');
			};

			//window.location.href = "gestionrol.html";
		})
		.catch((res) => {
			mensajeKOCaja(res.code);
		});

		eliminaCampo('id_formRol', 'controlador');
		eliminaCampo('id_formRol', 'action');
}


function crearformEDITrol(nombre, desc, idrol){

	setColorEstandarInputFormRol();

	$('#nombre_rol').val(nombre);
	$('#nombre_rol').attr('readOnly', false);
	$('#descrip_rol').val(desc);
	$('#descrip_rol').attr('readOnly', false);

	$('#id_rol').val(idrol);
	$('#caja_id_rol').attr('style', 'display:none');



	//$('#id_CajaFormRol').attr('label', 'caja_form_rol_editar');
	$('#id_submitRol').attr('label', 'EDIT');
	$('#id_submitRol').attr('src', './images/editar.png');

	switchEstadoCaja('id_CajaFormRol');

}

function crearformADDrol(){

	document.getElementById('nombre_rol').value = '';
	document.getElementById('nombre_rol').readOnly = false;
	document.getElementById('descrip_rol').value = '';
	document.getElementById('descrip_rol').readOnly = false;

	$('#caja_id_rol').attr('style', 'display:none');


	//$('#id_CajaFormRol').attr('label', 'caja_form_rol_anadir');
	$('#id_submitRol').attr('label', 'ADD');
	$('#id_submitRol').attr('src', './images/anadir.png');

}

function crearformSEARCHrol(){


	document.getElementById('nombre_rol').value = '';
	document.getElementById('nombre_rol').readOnly = false;
	document.getElementById('descrip_rol').value = '';
	document.getElementById('descrip_rol').readOnly = false;
	document.getElementById('id_rol').value = '';


	$('#caja_id_rol').attr('style', 'display:block');


	//$('#id_CajaFormRol').attr('label', 'caja_form_rol_anadir');
	$('#id_submitRol').attr('label', 'SEARCH');
	$('#id_submitRol').attr('src', './images/buscar.png');

	$('#id_rol').attr('readOnly', false);

}

function crearformDELETErol(nombre, desc, idrol){

	setColorEstandarInputFormRol();

	$('#nombre_rol').val(nombre);
	$('#nombre_rol').attr('readOnly', true);
	$('#descrip_rol').val(desc);
	$('#descrip_rol').attr('readOnly', true);
	$('#id_rol').val(idrol);
	$('#id_rol').attr('readOnly', true);
	$('#caja_id_rol').attr('style', 'display:block');

	//$('#id_CajaFormRol').attr('label', 'caja_form_rol_editar');
	$('#id_submitRol').attr('label', 'DELETE');
	$('#id_submitRol').attr('src', './images/borrar.png');

	switchEstadoCaja('id_CajaFormRol');

}

function crearformDETAILrol(nombre, desc, idrol){

	setColorEstandarInputFormRol();

	$('#nombre_rol').val(nombre);
	$('#nombre_rol').attr('readOnly', true);
	$('#descrip_rol').val(desc);
	$('#descrip_rol').attr('readOnly', true);
	$('#id_rol').val(idrol);
	$('#id_rol').attr('readOnly', true);
	$('#caja_id_rol').attr('style', 'display:block');

	//$('#id_CajaFormRol').attr('label', 'caja_form_rol_editar');
	$('#id_submitRol').attr('label', 'DETAIL');
	$('#id_submitRol').attr('src', './images/detalle.png');

	switchEstadoCaja('id_CajaFormRol');

}

function enviarRolByLabel(){

let x = $('#id_submitRol').attr('label');

if(x == 'ADD'){

 ADDRolAjax();

}else if(x == 'EDIT'){

 EDITRolAjax();

}else if(x == 'DELETE'){

 DELETERolAjax();

}else if(x == 'SEARCH'){

 devolverRolesSEARCHAjax();

}else if(x == 'DETAIL'){



}

}

function comprobarFormatoFormularioRolYEnviar(){

let x = $('#id_submitRol').attr('label');

if((x == 'ADD') || (x == 'EDIT')){
	if((comprobar_nombre_rol()==true)&&(comprobar_descripcion_rol()==true)){

	enviarRolByLabel();

	}
}else{

	enviarRolByLabel();
	}
}

function setColorEstandarInputFormRol(){

document.getElementById('nombre_rol').style.borderColor = "";
document.getElementById('descrip_rol').style.borderColor = "";

}

function eliminarBasura(){

	document.getElementById('nombre_rol').value = 'ejemplo1';
	for(let x=13000; x<13300; x++){
	document.getElementById('id_rol').value = x ;
	DELETERolAjax();

}
	}
