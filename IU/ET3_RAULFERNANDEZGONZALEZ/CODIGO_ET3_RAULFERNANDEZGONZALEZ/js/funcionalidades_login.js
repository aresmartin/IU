window.addEventListener('load',function(){

document.getElementById('fecha_nacimiento_persona_registro').addEventListener('blur',function(){

});

document.getElementById('fecha_nacimiento_persona_registro').addEventListener('focus',function(){

document.getElementById('fecha_nacimiento_persona_registro').type= 'date';

});

});


function loginAjaxPromesa(){

	insertacampo('id_form_login','controlador', 'AUTH');
	insertacampo('id_form_login','action', 'LOGIN');

	return new Promise(function(resolve, reject) {
		$.ajax({
			method: "POST",
			url: 'http://193.147.87.202/Back/index.php',
			data: $("#id_form_login").serialize(),
		}).done(res => {
			if (res.code != 'LOGIN_OK') {
				reject(res);
			}
			else{
				resolve(res);
			}
		})
		.fail( function( jqXHR ) {
			mensajeKOCaja(jqXHR.status);
		});
	});
}

async function loginAjax() {

	await loginAjaxPromesa()
		.then((res) => {
			setCookie('token', res.resource);
			setCookie('usuarioSistema', document.getElementById("id_usuario_login").value);
			lanzarMenu();
		})
		.catch((res) => {
			document.getElementById('id_contrasena').value = '';
			mensajeKOCaja(res.code);
	    	//eliminarcampo('controlador');
	    	//eliminarcampo('action');
		});

}

function registroAjaxPromesa(){

	insertacampo('id_formPersona_registro','controlador', 'AUTH');
	insertacampo('id_formPersona_registro','action', 'REGISTRAR');

	return new Promise(function(resolve, reject) {
		$.ajax({
			method: "POST",
			url: 'http://193.147.87.202/Back/index.php',
			data: $("#id_formPersona_registro").serialize(),
		}).done(res => {
			if (res.code != 'REGISTRAR_OK') {
				reject(res);
			}
			else{
				resolve(res);
			}
		})
		.fail( function( jqXHR ) {
			mensajeKOCaja(jqXHR.status);
		});
	});
}

async function registroAjax() {

	await registroAjaxPromesa()
		.then((res) => {
			mensajeOKCaja('SQL_OK');
			setTimeout('lanzarLogin()', 1000);
		})
		.catch((res) => {
			document.getElementById('id_contrasena').value = '';
			mensajeKOCaja(res.code);
	    	//eliminarcampo('controlador');
	    	//eliminarcampo('action');
		});

}


function comprobarFormatoFormularioUsuarioLoginYEnviar(){

if(comprobar_nombre_usuarioLogin('id_usuario_login') == true && comprobar_password('id_contrasena') == true){

enviarFormLoginByLabel();

}
}

function enviarFormLoginByLabel(){

let x = $('#id_submitUsuarioLogin').attr('label');

if(x == 'LOGIN'){

 encriptarpassword();
 loginAjax();

}

}

function comprobarFormatoFormularioRegistroYEnviar(){

		if((comprobar_nombre_registro()==true)&&(comprobar_apellido_registro()==true)&&(comprobar_dni_registro()==true)&&(comprobar_email_registro()==true)
		&&(comprobar_tlf_registro()==true)&&(comprobar_dire_registro()==true)&&(comprobar_nombre_usuario_registro()==true)&&(comprobar_password()==true)){

			encriptarpassword();
			registroAjax();


		}

}
