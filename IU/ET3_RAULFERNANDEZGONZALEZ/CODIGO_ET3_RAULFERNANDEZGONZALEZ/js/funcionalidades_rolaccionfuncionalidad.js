
listaEnteraRoles = new Array();
function devolverRolesAjaxPromesaRAF(){

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

async function devolverRolesAjaxRAF() {

	var idioma = getCookie('lang');

	await devolverRolesAjaxPromesaRAF()
		.then((res) => {

			getList(res.resource);

		})
		.catch((res) => {
			mensajeKOCaja(res.code);
        	setLang(idioma);
		});

}


function getList(roles){

	listaEnteraRoles = roles;

}

function devolverRAFAjaxPromesa(){

	crearformoculto('form_generico','');
	insertacampo('form_generico','controlador', 'rolaccionfuncionalidad');
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

async function devolverRAFAjax() {

	var idioma = getCookie('lang');

	await devolverRAFAjaxPromesa()
		.then((res) => {

			getListRAF(res.resource);

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
// raf: valor para colocar por defecto en el select
//
async function crearSelectRAFAjax(deshabilitado = false, convacio = false, raf=null) {

	var idioma = getCookie('lang');

	await devolverRAFAjaxPromesa()
		.then((res) => {

			let raf_select = crearselect(convacio,'id_select_rafes','id_raf', 'id_raf', 'nombre_raf', res.resource, raf);
			$("#caja_select_raf").append(raf_select);
			if (deshabilitado){
				$("#caja_select_raf:not(:selected)").attr('disabled',true);
			}

		})
		.catch((res) => {
			mensajeKOCaja(res.code);
        	setLang(idioma);
		});

		document.getElementById('form_generico').remove();
}


function devolverRAFSEARCHAjaxPromesa(){

	crearformoculto('id_formRAF','');
	insertacampo('id_formRAF','controlador', 'rolaccionfuncionalidad');
	insertacampo('id_formRAF','action', 'SEARCH');

	return new Promise(function(resolve, reject) {
		$.ajax({
			method: "POST",
			url: "http://193.147.87.202/Back/index.php",
			data: $("#id_formRAF").serialize(),
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

async function devolverRAFSEARCHAjax() {

	await devolverRAFSEARCHAjaxPromesa()
		.then((res) => {
			if (res.code = 'SQL_OK'){
				res.code = 't_search_OK';
				mensajeOKCaja(res.code);
			}
			getListRAF(res.resource);

		})
		.catch((res) => {
			mensajeKOCaja(res.code);
		});

		eliminaCampo('id_formRAF', 'controlador');
		eliminaCampo('id_formRAF', 'action');
}



function getListRAF(listarafes){

	listaroles = new Array();
	listaParejas = new Array();

		for(let rol of listaEnteraRoles){
		if(!listaroles.includes(""+rol.nombre_rol+","+rol.id_rol+"")){

			listaroles.push(""+rol.nombre_rol+","+rol.id_rol+"");

		}
	}

    for (let raf of listarafes){
		if(!listaParejas.includes(""+raf.id_accion.nombre_accion+","+raf.id_funcionalidad.nombre_funcionalidad+"")){

				listaParejas.push(""+raf.id_accion.nombre_accion+","+raf.id_funcionalidad.nombre_funcionalidad+"");

		}

	}

	document.getElementById("id_datosRAF").innerHTML = "";
	for (let i of listaParejas){

		valores = i.split(',');

		lineatabla = '<tr><td>'+valores[0]+'</td><td>'+valores[1]+'</td>';



		document.getElementById("id_datosRAFCabecera").innerHTML = "";
		lineacabecera = '<th class="t_botonAccion">' + '</th>';
		$("#id_datosRAFCabecera").append(lineacabecera);
		lineacabecera = '<th class="t_botonFunc" >' + '</th>';
		$("#id_datosRAFCabecera").append(lineacabecera);

		for (let x of listaroles){

			valoresrol = x.split(',');

			lineacabecera = '<th>' + x + '</th>';
			$("#id_datosRAFCabecera").append(lineacabecera);
			encontrado = false;
			let datosfila;
					for (let raf of listarafes){

						if(raf.id_accion.nombre_accion == valores[0] && raf.id_funcionalidad.nombre_funcionalidad == valores[1]){
							datosfila = "'"+valoresrol[1]+"',"+"'"+raf.id_accion.id_accion+"',"+"'"+raf.id_funcionalidad.id_funcionalidad+"'";

								if(raf.id_rol.nombre_rol == valoresrol[0]){

									lineatabla += '<td><img class="check" src="./images/Gcheck.png" width="15" height="15" /> <img style="cursor: pointer" class="check" src="./images/borrar.png" onclick="crearformDELETEraf('+datosfila+');" width="15" height="15" /> </td>';
									encontrado = true;
								}
						}
					}

					if(encontrado == false){

						lineatabla += '<td><img class="check" src="./images/Rfail.png" width="15" height="15" /> <img style="cursor: pointer" class="Rfail" src="./images/anadir.png" onclick="crearformADDraf('+datosfila+');" width="15" height="15" /> </td>';

					}
		}
		lineatabla += +"</tr>";
		$("#id_datosRAF").append(lineatabla);

	}

}

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

async function rafADDAjaxPromesa(){

	crearformoculto('id_formRAF','');
	insertacampo('id_formRAF','controlador', 'rolaccionfuncionalidad');
	insertacampo('id_formRAF','action', 'ADD');

	return new Promise(function(resolve, reject) {
		$.ajax({
			method: "POST",
			url: "http://193.147.87.202/Back/index.php",
			data: $("#id_formRAF").serialize(),
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

async function ADDRAFAjax() {

	await rafADDAjaxPromesa()
		.then((res) => {

			if (res.code = 'SQL_OK'){
				devolverRAFAjax();
				mensajeOKCaja(res.code);
			}
		})
		.catch((res) => {
			mensajeKOCaja(res.code);
		});
		eliminaCampo('id_formRAF', 'controlador');
		eliminaCampo('id_formRAF', 'action');
}

//Función ajax con promesas
function rafEDITAjaxPromesa(){

	insertacampo('id_formRAF','controlador', 'rolaccionfuncionalidad');
	insertacampo('id_formRAF','action', 'EDIT');

	return new Promise(function(resolve, reject) {
		$.ajax({
			method: "POST",
			url: "http://193.147.87.202/Back/index.php",
			data: $("#id_formRAF").serialize(),
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

async function EDITRAFAjax() {


	 await rafEDITAjaxPromesa()
		.then((res) => {

			if (res.code == 'SQL_OK'){
				res.code = 't_edit_raf_OK';
				devolverRAFAjax();
				mensajeOKCaja(res.code);
			};
		})
		.catch((res) => {
			mensajeKOCaja(res.code);
		});
		eliminaCampo('id_formRAF', 'controlador');
		eliminaCampo('id_formRAF', 'action');
}

function rafDELETEAjaxPromesa(){

	insertacampo('id_formRAF','controlador', 'rolaccionfuncionalidad');
	insertacampo('id_formRAF','action', 'DELETE');

	return new Promise(function(resolve, reject) {
		$.ajax({
			method: "POST",
			url: "http://193.147.87.202/Back/index.php",
			data: $("#id_formRAF").serialize(),
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

async function DELETERAFAjax() {


	await rafDELETEAjaxPromesa()
		.then((res) => {

			if (res.code == 'SQL_OK'){
				res.code = 't_delete_raf_OK';
				devolverRAFAjax();
				mensajeOKCaja(res.code);
			};

			//window.location.href = "gestionraf.html";
		})
		.catch((res) => {
			mensajeKOCaja(res.code);
		});

		eliminaCampo('id_formRAF', 'controlador');
		eliminaCampo('id_formRAF', 'action');
}



function crearformADDraf(idrol, idaccion, idfunc){

	setColorEstandarInputFormRAF();

	$('#id_accion_raf').val(idaccion);
	$('#id_accion_raf').attr('readOnly', true);
	$('#id_rol_raf').val(idrol);
	$('#id_rol_raf').attr('readOnly', true);
  $('#id_funcionalidad_raf').val(idfunc);
	$('#id_funcionalidad_raf').attr('readOnly', true);

	$('#id_CajaFormRAF').attr('label', 'caja_form_raf_anadir');
	$('#id_submitRAF').attr('label', 'ADD');
	enviarRAFByLabel();

}

function crearformSEARCHraf(){


  document.getElementById('id_accion_raf').value = '';
	document.getElementById('id_accion_raf').readOnly = false;
  document.getElementById('id_rol_raf').value = '';
	document.getElementById('id_rol_raf').readOnly = false;
  document.getElementById('id_funcionalidad_raf').value = '';
	document.getElementById('id_funcionalidad_raf').readOnly = false;

	$('#id_CajaFormRAF').attr('label', 'caja_form_raf_anadir');
	$('#id_submitRAF').attr('label', 'SEARCH');

}

function crearformDELETEraf(idrol, idaccion, idfunc){

	setColorEstandarInputFormRAF();

	$('#id_accion_raf').val(idaccion);
	$('#id_accion_raf').attr('readOnly', true);
	$('#id_rol_raf').val(idrol);
	$('#id_rol_raf').attr('readOnly', true);
  $('#id_funcionalidad_raf').val(idfunc);
	$('#id_funcionalidad_raf').attr('readOnly', true);

	$('#id_CajaFormRAF').attr('label', 'caja_form_raf_anadir');
	$('#id_submitRAF').attr('label', 'DELETE');
	enviarRAFByLabel();
}

function enviarRAFByLabel(){

let x = $('#id_submitRAF').attr('label');

if(x == 'ADD'){

 ADDRAFAjax();

}else if(x == 'EDIT'){

 EDITRAFAjax();

}else if(x == 'DELETE'){

 DELETERAFAjax();

}else if(x == 'SEARCH'){

 devolverRAFSEARCHAjax();

}

}

function comprobarFormatoFormularioRAFYEnviar(){

let x = $('#id_submitRAF').attr('label');

if((x == 'ADD') || (x == 'EDIT')){
	if((comprobarFormatoIdsRAF('id_rol_raf')==true)&&(comprobarFormatoIdsRAF('id_accion_raf')==true)&&(comprobarFormatoIdsRAF('id_funcionalidad_raf')==true)){

	enviarRAFByLabel();

	}
}else{

	enviarRAFByLabel();

	}
}

function setColorEstandarInputFormRAF(){

document.getElementById('id_rol_raf').style.borderColor = "";
document.getElementById('id_accion_raf').style.borderColor = "";
document.getElementById('id_funcionalidad_raf').style.borderColor = "";

}
