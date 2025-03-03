function devolverPersonasSEARCHAjaxPromesa(){

	let nombre = getCookie('usuarioSistema');

	insertacampo('id_form_cambiar_contrasena','usuario', nombre);
	insertacampo('id_form_cambiar_contrasena','controlador', 'usuario');
	insertacampo('id_form_cambiar_contrasena','action', 'SEARCH');

	return new Promise(function(resolve, reject) {
		$.ajax({
			method: "POST",
			url: "http://193.147.87.202/Back/index.php",
			data: $("#id_form_cambiar_contrasena").serialize(),
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
			}
			let dni = res.resource[0].dni;
			insertacampo('id_form_cambiar_contrasena','dni', dni);

		})
		.catch((res) => {
		});


}

function contraAjaxPromesa(){

	document.getElementById('controlador').value = 'AUTH';
	document.getElementById('action').value = 'CAMBIAR_CONTRASENA';


	return new Promise(function(resolve, reject) {
		$.ajax({
			method: "POST",
			url: 'http://193.147.87.202/Back/index.php',
			data: $("#id_form_cambiar_contrasena").serialize(),
		}).done(res => {
			if (res.code != 'CAMBIAR_contrasena_OK') {
				reject(res);
			}
			else{
				resolve(res);
			}
		})
		.fail( function( jqXHR ) {
			mensajeKOShow(jqXHR.status);
		});
	});
}

async function contraAjax() {
	await contraAjaxPromesa()
		.then((res) => {
			mensajeOKCaja('SQL_OK');
			setTimeout('lanzarLogin()', 1000);
		})
		.catch((res) => {
			mensajeKOCaja(res.code);
	    	//eliminarcampo('controlador');
	    	//eliminarcampo('action');
		});

}

function comprobarFormatoCambiarContraYEnviar(){

	contra1 = document.getElementById('id_contrasena').value;
	contra2 = document.getElementById('id_contrasena2').value;

	if((comprobar_password()==true)){

		if(contra1 == contra2){

		encriptarpassword();
		contraAjax();

	}else{

		mensajeKOCaja('t_contra_no_coincide');
		document.getElementById('id_contrasena').value = '';
		document.getElementById('id_contrasena2').value = '';

	}

	}


}
