
//////////////////////////CARGAR PERSONAS ACTUALES EN TABLA/////////////////////
function devolverUsuariosAjaxPromesa(){

	crearformoculto('form_generico','');
	insertacampo('form_generico','controlador', 'usuario');
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

async function devolverUsuariosAjax() {

	await devolverUsuariosAjaxPromesa()
		.then((res) => {

			getListUsuarios(res.resource);

		})
		.catch((res) => {
			mensajeKOCaja(res.code);
		});

		document.getElementById('form_generico').remove();
}

function devolverUsuariosSEARCHAjaxPromesa(){

	crearformoculto('id_formUsuario','');
	insertacampo('id_formUsuario','controlador', 'usuario');
	insertacampo('id_formUsuario','action', 'SEARCH');

	return new Promise(function(resolve, reject) {
		$.ajax({
			method: "POST",
			url: "http://193.147.87.202/Back/index.php",
			data: $("#id_formUsuario").serialize(),
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

async function devolverUsuariosSEARCHAjax() {

	await devolverUsuariosSEARCHAjaxPromesa()
		.then((res) => {
			if (res.code = 'SQL_OK'){
				res.code = 't_search_OK';
				mensajeOKCaja(res.code);
				switchEstadoCaja('id_CajaFormUsuario');
			}
			getListUsuarios(res.resource);

		})
		.catch((res) => {
			mensajeKOCaja(res.code);
		});

		eliminaCampo('id_formUsuario', 'controlador');
		eliminaCampo('id_formUsuario', 'action');
}


function getListUsuarios(listausuarios){

	//listausuarios = devolverusuariosajax();

	document.getElementById("id_datosUsuario").innerHTML = "";

	for (let usuario of listausuarios){

		datosfila = "'"+usuario.dni+"',"+"'"+usuario.usuario+"',"+"'"+usuario.id_rol.id_rol+"'";

		lineatabla = '<tr><td>'+usuario['dni']+'</td><td>'+usuario['usuario']+'</td><td>'+usuario['id_rol'].nombre_rol+"</td>";
		botonedit = '<td><img style="cursor: pointer" class="titulo_edit" src="./images/editar.png" onclick="crearformEDITusuario('+datosfila+');" width="50" height="50"></td>';
		botondelete = '<td><img style="cursor: pointer" class="titulo_delete" src="./images/borrar.png" onclick="crearformDELETEusuario('+datosfila+');" width="50" height="50"></td>';
		botondetail = '<td><img style="cursor: pointer" class="titulo_detail" onclick="crearformDETAILusuario('+datosfila+');" src="./images/ver-detalles.png" width="50" height="50"></td>';
		lineatabla += botonedit + botondelete + botondetail + "</tr>";

		$("#id_datosUsuario").append(lineatabla);
	}

}


////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

async function usuarioADDAjaxPromesa(){

	crearformoculto('id_formUsuario','');
	insertacampo('id_formUsuario','controlador', 'usuario');
	insertacampo('id_formUsuario','action', 'ADD');

	return new Promise(function(resolve, reject) {
		$.ajax({
			method: "POST",
			url: "http://193.147.87.202/Back/index.php",
			data: $("#id_formUsuario").serialize(),
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

async function ADDUsuarioAjax() {

	await usuarioADDAjaxPromesa()
		.then((res) => {

			if (res.code = 'SQL_OK'){
				res.code = 't_add_usuario_OK';
				devolverUsuariosAjax();
				mensajeOKCaja(res.code);
				switchEstadoCaja('id_CajaFormUsuario');
			}
		})
		.catch((res) => {
			mensajeKOCaja(res.code);
		});
		eliminaCampo('id_formUsuario', 'controlador');
		eliminaCampo('id_formUsuario', 'action');
}

//Función ajax con promesas
function usuarioEDITAjaxPromesa(){

	insertacampo('id_formUsuario','controlador', 'usuario');
	insertacampo('id_formUsuario','action', 'EDIT');

	return new Promise(function(resolve, reject) {
		$.ajax({
			method: "POST",
			url: "http://193.147.87.202/Back/index.php",
			data: $("#id_formUsuario").serialize(),
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

async function EDITUsuarioAjax() {


	 await usuarioEDITAjaxPromesa()
		.then((res) => {

			if (res.code == 'SQL_OK'){
				res.code = 't_edit_usuario_OK';
				devolverUsuariosAjax();
				mensajeOKCaja(res.code);
				switchEstadoCaja('id_CajaFormUsuario');
			};
		})
		.catch((res) => {
			mensajeKOCaja(res.code);

		});
		eliminaCampo('id_formUsuario', 'controlador');
		eliminaCampo('id_formUsuario', 'action');
}

function usuarioDELETEAjaxPromesa(){

	insertacampo('id_formUsuario','controlador', 'usuario');
	insertacampo('id_formUsuario','action', 'DELETE');

	return new Promise(function(resolve, reject) {
		$.ajax({
			method: "POST",
			url: "http://193.147.87.202/Back/index.php",
			data: $("#id_formUsuario").serialize(),
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

async function DELETEUsuarioAjax() {


	await usuarioDELETEAjaxPromesa()
		.then((res) => {

			if (res.code == 'SQL_OK'){
				res.code = 't_delete_usuario_ok';
				devolverUsuariosAjax();
				mensajeOKCaja(res.code);
				switchEstadoCaja('id_CajaFormUsuario');
			};

			//window.location.href = "gestionusuario.html";
		})
		.catch((res) => {
			mensajeKOCaja(res.code);
		});

		eliminaCampo('id_formUsuario', 'controlador');
		eliminaCampo('id_formUsuario', 'action');
}


function crearformEDITusuario(dni, nombre, idrol){

	setColorEstandarInputFormUsuario()
	eliminarSelectRolUsuario();

	crearSelectRolesAjax(false, false, idrol);

	$('#nombre_usuario').val(nombre);
	$('#nombre_usuario').attr('readOnly', false);
	$('#dni_usuario').val(dni);
	$('#dni_usuario').attr('readOnly', true);
	$('#id_select_roles').attr('readOnly', false);


	//$('#id_CajaFormUsuario').attr('label', 'caja_form_usuario_editar');
	$('#id_submitUsuario').attr('label', 'EDIT');
	$('#id_submitUsuario').attr('src', './images/editar.png');

	switchEstadoCaja('id_CajaFormUsuario');

}

function crearformADDusuario(){

	setColorEstandarInputFormUsuario()
	eliminarSelectRolUsuario();

	document.getElementById('nombre_usuario').value = '';
	document.getElementById('nombre_usuario').readOnly = false;
	document.getElementById('dni_usuario').value = '';
	document.getElementById('dni_usuario').readOnly = false;


	crearSelectRolesAjax(false, false, '');

	//$('#id_CajaFormUsuario').attr('label', 'caja_form_usuario_anadir');
	$('#id_submitUsuario').attr('label', 'ADD');
	$('#id_submitUsuario').attr('src', './images/anadir.png');

}

function crearformSEARCHusuario(){

	setColorEstandarInputFormUsuario()
	eliminarSelectRolUsuario();

	document.getElementById('nombre_usuario').value = '';
	document.getElementById('nombre_usuario').readOnly = false;
	document.getElementById('dni_usuario').value = '';
	document.getElementById('dni_usuario').readOnly = false;


	crearSelectRolesAjax(false, true, '');

	//$('#id_CajaFormUsuario').attr('label', 'caja_form_usuario_anadir');
	$('#id_submitUsuario').attr('label', 'SEARCH');
	$('#id_submitUsuario').attr('src', './images/buscar.png');


}

function crearformDELETEusuario(dni, nombre, idrol){

	setColorEstandarInputFormUsuario()
	eliminarSelectRolUsuario();

	crearSelectRolesAjax(true, false, idrol);

	$('#nombre_usuario').val(nombre);
	$('#nombre_usuario').attr('readOnly', true);
	$('#dni_usuario').val(dni);
	$('#dni_usuario').attr('readOnly', true);

	//$('#id_CajaFormUsuario').attr('label', 'caja_form_usuario_editar');
	$('#id_submitUsuario').attr('label', 'DELETE');
	$('#id_submitUsuario').attr('src', './images/borrar.png');

	switchEstadoCaja('id_CajaFormUsuario');

}

function crearformDETAILusuario(dni, nombre, idrol){

	setColorEstandarInputFormUsuario()
	eliminarSelectRolUsuario();

	crearSelectRolesAjax(true, false, idrol);

	$('#nombre_usuario').val(nombre);
	$('#nombre_usuario').attr('readOnly', true);
	$('#dni_usuario').val(dni);
	$('#dni_usuario').attr('readOnly', true);


	//$('#id_CajaFormUsuario').attr('label', 'caja_form_usuario_editar');
	$('#id_submitUsuario').attr('label', 'DETAIL');
	$('#id_submitUsuario').attr('src', './images/detalle.png');

	switchEstadoCaja('id_CajaFormUsuario');

}

function enviarUsuarioByLabel(){

let x = $('#id_submitUsuario').attr('label');

if(x == 'ADD'){

 ADDUsuarioAjax();

}else if(x == 'EDIT'){

 EDITUsuarioAjax();

}else if(x == 'DELETE'){

 DELETEUsuarioAjax();

}else if(x == 'SEARCH'){

 devolverUsuariosSEARCHAjax();

}else if(x == 'DETAIL'){


}

}

function comprobarFormatoFormularioUsuarioYEnviar(){

let x = $('#id_submitUsuario').attr('label');

if((x == 'ADD') || (x == 'EDIT')){
	if((comprobar_nombre_usuario()==true)&&(comprobar_dni_usuario()==true)){

	enviarUsuarioByLabel();

	}
}else{

	enviarUsuarioByLabel();

	}
}

function setColorEstandarInputFormUsuario(){

document.getElementById('nombre_usuario').style.borderColor = "";
document.getElementById('dni_usuario').style.borderColor = "";


}
