
//FUNCIONALIDADES funcionades funcionalidades comunes



function size_minimo(idElemento,longitudminima){

	elemento = document.getElementById(idElemento).value;
	if (elemento.length < longitudminima){
		return false;
	}
	else{
		return true;
	}
}

function size_maximo(idElemento,longitudmaxima){

	elemento = document.getElementById(idElemento).value;
	if (elemento.length > longitudmaxima){
		return false;
	}
	else{
		return true;
	}
}

function size_exacto(idElemento,longitudexacta){

	elemento = document.getElementById(idElemento).value;
	if (elemento.length != longitudexacta){
		return false;
	}
	else{
		return true;
	}
}


function soloAlfabeticos(idElemento){

let elemento = document.getElementById(idElemento).value;
pattern = new RegExp('^[A-Zá-ú]+$', 'i');
if(pattern.test(elemento)){
	return true;
}else{
	return false;
}
}

function soloAlfabeticosYEspacios(idElemento){

let elemento = document.getElementById(idElemento).value;
pattern = new RegExp('^[A-Zá-ú]+[ ]*?[\-A-Zá-ú]*$', 'i');
if(pattern.test(elemento)){
	return true;
}else{
	return false;
}
}

function encriptarpassword(){
	document.getElementById('id_contrasena').value = hex_md5(document.getElementById('id_contrasena').value);
	return true;
}


function validarDNI(idElemento){

	let dni = document.getElementById(idElemento).value;
	pattern = new RegExp('^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$', 'i');

	if(pattern.test(dni)){
		return true;
	}else{
		return false;
	}

}

function validarFormatoId(idElemento){

	let id = document.getElementById(idElemento).value;
	pattern = new RegExp('^[0-9]{1,4}$', 'i');

	if(pattern.test(id)){
		return true;
	}else{
		return false;
	}



}

function validarEmail(idElemento){

	let email = document.getElementById(idElemento).value;
	pattern = new RegExp('^[a-zA-Z0-9.!#$%&*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$');

	if(pattern.test(email)){
		return true;
	}else{
		return false;
	}

}

function validarDesc(idElemento){

	let desc = document.getElementById(idElemento).value;
	pattern = new RegExp(/^[^=<>$#{}\[\]]*$/);

	if(pattern.test(desc)){
		return true;
	}else{
		return false;
	}

}

function validarTelefono(idElemento){

	let tlf = document.getElementById(idElemento).value;
	pattern = new RegExp('[0-9]{9}');

	if(pattern.test(tlf)){
		return true;
	}else{
		return false;
	}

}

function validarUsuario(idElemento){

	let user = document.getElementById(idElemento).value;
	pattern = new RegExp('[A-Z]+[0-9]*', 'i');

	if(pattern.test(user)){
		return true;
	}else{
		return false;
	}

}

function validarPassword(idElemento){

	let pw = document.getElementById(idElemento).value;
	pattern = new RegExp('[A-Z]*[0-9]*-*_*', 'i');

	if(pattern.test(pw)){
		return true;
	}else{
		return false;
	}

}

////////////////////////////////////////////////////////////////////////////////

//CONTROL DE FORMATO REFERENTE A PERSONA


function comprobar_password(){

	if (!size_minimo('id_contrasena',3)){
		mensajeKOForm('id_contrasena', 't_contra_corta_ko', 'id_caja_mensaje_contrasena', 'id_textMensaje_contrasena');
		return false;
	}
	if (!size_maximo('id_contrasena',15)){
		mensajeKOForm('id_contrasena', 't_contra_larga_ko', 'id_caja_mensaje_contrasena', 'id_textMensaje_contrasena');


		return false;
	}
	if (!validarPassword('id_contrasena')){
		mensajeKOForm('id_contrasena', 't_formato_contra', 'id_caja_mensaje_contrasena', 'id_textMensaje_contrasena');


		return false;
	}

	mensajeOKForm('id_contrasena','id_caja_mensaje_contrasena');
	mensajeOK('id_contrasena');


	return true;

}

function comprobar_password_registro(){

	if (!size_minimo('id_password_registro',3)){
		mensajeKOForm('id_password_registro', 't_contra_corta_ko', 'id_caja_mensaje_contrasena_registro', 'id_textMensaje_contrasena_registro');

		return false;
	}
	if (!size_maximo('id_password_registro',15)){
		mensajeKOForm('id_password_registro', 't_contra_larga_ko', 'id_caja_mensaje_contrasena_registro', 'id_textMensaje_contrasena_registro');

		return false;
	}
	if (!validarPassword('id_password_registro')){
		mensajeKOForm('id_password_registro', 't_formato_contra', 'id_caja_mensaje_contrasena_registro', 'id_textMensaje_contrasena_registro');
		Error('id_password_registro','t_formato_contra');

		return false;
	}
	mensajeOKForm('id_password_registro','id_caja_mensaje_contrasena_registro');
	mensajeOK('id_password_registro');
	return true;

}

function comprobar_nombre(){

	let x = $('#id_submitPersona').attr('label');

	if((x == 'ADD') || (x == 'EDIT')){

			if (!size_minimo('nombre_persona', 3)){
				mensajeKOForm('nombre_persona', 't_nombreCortoKo', 'id_caja_mensaje_nombre', 'id_textMensaje_nombre');
				Error('nombre_persona','t_nombreCortoKo');

				return false;

			}else if(!soloAlfabeticosYEspacios('nombre_persona')){
				mensajeKOForm('nombre_persona', 't_nombre_soloAlf', 'id_caja_mensaje_nombre', 'id_textMensaje_nombre');
				Error('nombre_persona', 't_nombre_soloAlf');

				return false;


				}else if (!size_maximo('nombre_persona', 45)){
					mensajeKOForm('nombre_persona', 't_nombre_largo_ko', 'id_caja_mensaje_nombre', 'id_textMensaje_nombre');
					Error('nombre_persona', 't_nombre_largo_ko');
					return false;

				}else{
					mensajeOKForm('nombre_persona','id_caja_mensaje_nombre');
					mensajeOK('nombre_persona');
					return true;
				}
}
}

function comprobar_nombre_registro(){


			if (!size_minimo('nombre_persona_registro', 3)){
				mensajeKOForm('nombre_persona_registro', 't_nombreCortoKo', 'id_caja_mensaje_nombre_registro', 'id_textMensaje_nombre_registro');

				return false;

			}else if(!soloAlfabeticosYEspacios('nombre_persona_registro')){
					mensajeKOForm('nombre_persona_registro', 't_nombre_soloAlf', 'id_caja_mensaje_nombre_registro', 'id_textMensaje_nombre_registro');

			    return false;


				}else if (!size_maximo('nombre_persona_registro', 45)){
					mensajeKOForm('nombre_persona_registro', 't_nombre_largo_ko', 'id_caja_mensaje_nombre_registro', 'id_textMensaje_nombre_registro');

					return false;

				}else{
					mensajeOK('nombre_persona_registro');
					mensajeOKForm('nombre_persona_registro','id_caja_mensaje_nombre_registro');

					return true;
				}
}


function comprobar_nombre_usuarioLogin(){


			if (!size_minimo('id_usuario_login', 3)){
				mensajeKOForm('id_usuario_login', 't_nombreCortoKo', 'id_caja_mensaje_usuario', 'id_textMensaje_usuario');
				Error('id_usuario_login', 't_nombreCortoKo');

				//ErrorForm('id_usuario_login', 't_nombreCortoKo', 'id_caja_mensaje_usuario', 'id_textMensaje_usuario');
				return false;

			}else if(!validarUsuario('id_usuario_login')){
					mensajeKOForm('id_usuario_login', 't_nombre_soloAlf', 'id_caja_mensaje_usuario', 'id_textMensaje_usuario');
					Error('id_usuario_login', 't_nombre_soloAlf');

					//ErrorForm('id_usuario_login', 't_nombre_soloAlf', 'id_caja_mensaje_usuario', 'id_textMensaje_usuario');

			    return false;


				}else if (!size_maximo('id_usuario_login', 45)){
					mensajeKOForm('id_usuario_login', 't_nombre_largo_ko', 'id_caja_mensaje_usuario', 'id_textMensaje_usuario');
					Error('id_usuario_login', 't_nombre_largo_ko');
					//ErrorForm('id_usuario_login', 't_nombre_largo_ko', 'id_caja_mensaje_usuario', 'id_textMensaje_usuario');


					return false;

				}else{
					mensajeOK('id_usuario_login');
					mensajeOKForm('id_usuario_login', 'id_caja_mensaje_usuario');
					return true;
				}
}

function comprobar_nombre_usuario_registro(){


			if (!size_minimo('id_usuario_registro', 3)){
				mensajeKOForm('id_usuario_registro', 't_nombreCortoKo', 'id_caja_mensaje_usuario_registro', 'id_textMensaje_usuario_registro')
				Error('id_usuario_registro', 't_nombreCortoKo');
				//Error('id_usuario_registro','t_nombreCortoKo');
				return false;

			}else if(!validarUsuario('id_usuario_registro')){
				mensajeKOForm('id_usuario_registro', 't_nombre_soloAlf', 'id_caja_mensaje_usuario_registro', 'id_textMensaje_usuario_registro')
				Error('id_usuario_registro', 't_nombre_soloAlf');
				//Error('id_usuario_registro','t_nombre_soloAlf');

			    return false;


				}else if (!size_maximo('id_usuario_registro', 45)){
					mensajeKOForm('id_usuario_registro', 't_nombre_largo_ko', 'id_caja_mensaje_usuario_registro', 'id_textMensaje_usuario_registro')
					Error('id_usuario_registro', 't_nombre_largo_ko');
					//Error('id_usuario_registro','t_nombre_largo_ko');

					return false;

				}else{
					mensajeOK('id_usuario_registro');
					mensajeOKForm('id_usuario_registro', 'id_caja_mensaje_usuario_registro');

					return true;
				}
}

function comprobar_nombre_usuario(){

	let x = $('#id_submitUsuario').attr('label');


	if((x == 'ADD') || (x == 'EDIT')){
			if (!size_minimo('nombre_usuario', 3)){
				mensajeKOForm('nombre_usuario', 't_nombreCortoKo', 'id_caja_mensaje_nombre_usuario', 'id_textMensaje_usuario_nombre_usuario')
				Error('nombre_usuario','t_nombreCortoKo');

				return false;

			}else if(!validarUsuario('nombre_usuario')){
				mensajeKOForm('nombre_usuario', 't_nombre_soloAlf', 'id_caja_mensaje_nombre_usuario', 'id_textMensaje_usuario_nombre_usuario')
				Error('nombre_usuario','t_nombre_soloAlf');

			    return false;


				}else if (!size_maximo('nombre_usuario', 45)){
					mensajeKOForm('nombre_usuario', 't_nombre_largo_ko', 'id_caja_mensaje_nombre_usuario', 'id_textMensaje_usuario_nombre_usuario')
					Error('nombre_usuario','t_nombre_largo_ko');

					return false;

				}else{
					mensajeOK('nombre_usuario');
					mensajeOKForm('nombre_usuario', 'id_caja_mensaje_nombre_usuario');

					return true;
				}
			}
}



function comprobar_apellido(){

	let x = $('#id_submitPersona').attr('label');

	if((x == 'ADD') || (x == 'EDIT')){

			if (!size_minimo('apellido_persona',5)){
				mensajeKOForm('apellido_persona', 't_apellido_corto_ko', 'id_caja_mensaje_apellido', 'id_textMensaje_apellido')
				Error('apellido_persona','t_apellido_corto_ko');

				return false;

			}else if(!soloAlfabeticosYEspacios('apellido_persona')){
				mensajeKOForm('apellido_persona', 't_apellido_solo_letras_ko', 'id_caja_mensaje_apellido', 'id_textMensaje_apellido')
				Error('apellido_persona','t_apellido_solo_letras_ko');

			    return false;


				}else if (!size_maximo('apellido_persona',100)){
					mensajeKOForm('apellido_persona', 't_apellido_largo_ko', 'id_caja_mensaje_apellido', 'id_textMensaje_apellido')
					Error('apellido_persona','t_apellido_largo_ko');

					return false;

				}else{
					mensajeOKForm('apellido_persona','id_caja_mensaje_apellido');
					mensajeOK('apellido_persona');
					return true;

				}
	}
}

function comprobar_apellido_registro(){


			if (!size_minimo('apellido_persona_registro',5)){
				mensajeKOForm('apellido_persona_registro', 't_apellido_corto_ko', 'id_caja_mensaje_apellido_registro', 'id_textMensaje_apellido_registro')
				Error('apellido_persona_registro','t_apellido_corto_ko');

				return false;

			}else if(!soloAlfabeticosYEspacios('apellido_persona_registro')){
				mensajeKOForm('apellido_persona_registro', 't_apellido_solo_letras_ko', 'id_caja_mensaje_apellido_registro', 'id_textMensaje_apellido_registro')
					Error('apellido_persona_registro','t_apellido_solo_letras_ko');

			    return false;


				}else if (!size_maximo('apellido_persona_registro',100)){
					mensajeKOForm('apellido_persona_registro', 't_apellido_largo_ko', 'id_caja_mensaje_apellido_registro', 'id_textMensaje_apellido_registro')
					Error('apellido_persona_registro','t_apellido_largo_ko');

					return false;

				}else{
					mensajeOKForm('apellido_persona_registro','id_caja_mensaje_apellido_registro');
					mensajeOK('apellido_persona_registro');
					return true;
				}
	}


function comprobar_dni(){

	let x = $('#id_submitPersona').attr('label');

	if((x == 'ADD') || (x == 'EDIT')){

			if(!size_exacto('dni_persona', 9)){
				mensajeKOForm('dni_persona', 't_tamano_dni_ko', 'id_caja_mensaje_dni', 'id_textMensaje_dni')
				Error('dni_persona','t_tamano_dni_ko');

			  return false;
			}else if(!validarDNI('dni_persona')){
				mensajeKOForm('dni_persona', 't_formato_dni_ko', 'id_caja_mensaje_dni', 'id_textMensaje_dni')
				Error('dni_persona','t_formato_dni_ko');

				return false;
			}else{
					mensajeOKForm('dni_persona','id_caja_mensaje_dni');
					mensajeOK('dni_persona');

					return true;
				}
}
}

function comprobar_dni_cambioContra(){

			if(!size_exacto('id_dni_contrasena', 9)){
				mensajeKOForm('id_dni_contrasena', 't_tamano_dni_ko', 'id_caja_mensaje_dni_cambioContra', 'id_textMensaje_dni_cambioContra')
				Error('id_dni_contrasena','t_tamano_dni_ko');

			  return false;
			}else if(!validarDNI('id_dni_contrasena')){
				mensajeKOForm('id_dni_contrasena', 't_formato_dni_ko', 'id_caja_mensaje_dni_cambioContra', 'id_textMensaje_dni_cambioContra')
				Error('id_dni_contrasena','t_formato_dni_ko');

				return false;
			}else{
					mensajeOK('id_dni_contrasena');
					mensajeOKForm('id_dni_contrasena','id_caja_mensaje_dni_cambioContra');

					return true;
				}

}

function comprobar_dni_registro(){


			if(!size_exacto('dni_persona_registro', 9)){
				mensajeKOForm('dni_persona_registro', 't_tamano_dni_ko', 'id_caja_mensaje_dni_persona_registro', 'id_textMensaje_dni_persona_registro')
				Error('dni_persona_registro','t_tamano_dni_ko');

			  return false;
			}else if(!validarDNI('dni_persona_registro')){
				mensajeKOForm('dni_persona_registro', 't_formato_dni_ko', 'id_caja_mensaje_dni_persona_registro', 'id_textMensaje_dni_persona_registro')
				Error('dni_persona_registro','t_formato_dni_ko');

				return false;
			}else{
					mensajeOK('dni_persona_registro');
					mensajeOKForm('dni_persona_registro','id_caja_mensaje_dni_persona_registro');

					return true;
				}
}


function comprobar_dni_usuario(){

	let x = $('#id_submitUsuario').attr('label');

	if((x == 'ADD') || (x == 'EDIT')){

		if(!size_exacto('dni_usuario', 9)){
			mensajeKOForm('dni_usuario', 't_tamano_dni_ko', 'id_caja_mensaje_dni_usuario', 'id_textMensaje_dni_usuario')
			Error('dni_usuario','t_tamano_dni_ko');

		  return false;
		}else if(!validarDNI('dni_usuario')){
			mensajeKOForm('dni_usuario', 't_formato_dni_ko', 'id_caja_mensaje_dni_usuario', 'id_textMensaje_dni_usuario')
			Error('dni_usuario','t_formato_dni_ko');

			return false;
		}else{
				mensajeOK('dni_usuario');
				mensajeOKForm('dni_usuario','id_caja_mensaje_dni_usuario');

				return true;
			}
 }
}


function comprobar_email(){

	let x = $('#id_submitPersona').attr('label');

	if((x == 'ADD') || (x == 'EDIT')){
		if (!size_minimo('email_persona',8)){
			mensajeKOForm('email_persona', 't_email_corta_ko', 'id_caja_mensaje_email', 'id_textMensaje_email')
			Error('email_persona','t_email_corta_ko');

			return false;

		}else if(!size_maximo('email_persona', 45)){

			mensajeKOForm('email_persona', 't_email_largo_ko', 'id_caja_mensaje_email', 'id_textMensaje_email')
		    Error('email_persona','t_email_largo_ko');

	  	return false;

		}else if(!validarEmail('email_persona')){

			mensajeKOForm('email_persona', 't_formato_email_ko', 'id_caja_mensaje_email', 'id_textMensaje_email')
			Error('email_persona','t_formato_email_ko');

			return false;

		}else{

			mensajeOKForm('email_persona','id_caja_mensaje_email');
			mensajeOK('email_persona');


			return true;
	}
}
}

function comprobar_email_registro(){

	if (!size_minimo('email_persona_registro',8)){
		mensajeKOForm('email_persona_registro', 't_email_corta_ko', 'id_caja_mensaje_email_persona_registro', 'id_textMensaje_email_persona_registro')
		Error('email_persona_registro','t_email_corta_ko');

		return false;

	}else if(!size_maximo('email_persona_registro', 45)){

		mensajeKOForm('email_persona_registro', 't_email_largo_ko', 'id_caja_mensaje_email_persona_registro', 'id_textMensaje_email_persona_registro')
	Error('email_persona_registro','t_email_largo_ko');

	return false;

	}else if(!validarEmail('email_persona_registro')){

		mensajeKOForm('email_persona_registro', 't_formato_email_ko', 'id_caja_mensaje_email_persona_registro', 'id_textMensaje_email_persona_registro')
	Error('email_persona_registro','t_formato_email_ko');

	return false;

	}else{

	mensajeOK('email_persona_registro');
	mensajeOKForm('email_persona_registro','id_caja_mensaje_email_persona_registro');

	return true;
}

}

function comprobar_tlf(){

	let x = $('#id_submitPersona').attr('label');

	if((x == 'ADD') || (x == 'EDIT')){

			if(!size_exacto('telefono_persona', 9)){
				mensajeKOForm('telefono_persona', 't_tamano_telefono_ko', 'id_caja_mensaje_telefono', 'id_textMensaje_telefono')
				Error('telefono_persona','t_tamano_telefono_ko');

			  return false;
			}else if(!validarTelefono('telefono_persona')){
				mensajeKOForm('telefono_persona', 't_formato_telefono_ko', 'id_caja_mensaje_telefono', 'id_textMensaje_telefono')
				Error('telefono_persona','t_formato_telefono_ko');

				return false;
			}else{
					mensajeOKForm('telefono_persona','id_caja_mensaje_telefono');
					mensajeOK('telefono_persona');

					return true;
				}
}
}

function comprobar_tlf_registro(){


			if(!size_exacto('telefono_persona_registro', 9)){
				mensajeKOForm('telefono_persona_registro', 't_tamano_telefono_ko', 'id_caja_mensaje_telefono_persona_registro', 'id_textMensaje_telefono_persona_registro')
				Error('telefono_persona_registro','t_tamano_telefono_ko');

			  return false;
			}else if(!validarTelefono('telefono_persona_registro')){
				mensajeKOForm('telefono_persona_registro', 't_formato_telefono_ko', 'id_caja_mensaje_telefono_persona_registro', 'id_textMensaje_telefono_persona_registro')
				Error('telefono_persona_registro','t_formato_telefono_ko');

				return false;
			}else{
					mensajeOK('telefono_persona_registro');
					mensajeOKForm('telefono_persona_registro','id_caja_mensaje_telefono_persona_registro');

					return true;
				}
}


function comprobar_dire(){

	let x = $('#id_submitPersona').attr('label');

	if((x == 'ADD') || (x == 'EDIT')){

			if (!size_minimo('direccion_persona',5)){
				mensajeKOForm('direccion_persona', 't_dire_corta_ko', 'id_caja_mensaje_direccion', 'id_textMensaje_direccion')
				Error('direccion_persona','t_dire_corta_ko');

				return false;

			}else if(!size_maximo('direccion_persona', 200)){

				mensajeKOForm('direccion_persona', 't_dire_larga_ko', 'id_caja_mensaje_direccion', 'id_textMensaje_direccion')
				Error('direccion_persona','t_dire_larga_ko');

				return false;

			}else{
				mensajeOKForm('direccion_persona','id_caja_mensaje_direccion');
				mensajeOK('direccion_persona');

				return true;
			}
	}
}

function comprobar_dire_registro(){


			if (!size_minimo('direccion_persona_registro',5)){
				mensajeKOForm('direccion_persona_registro', 't_dire_corta_ko', 'id_caja_mensaje_dire_registro', 'id_textMensaje_dire_registro')
				Error('direccion_persona_registro','t_dire_corta_ko');

				return false;

			}else if(!size_maximo('direccion_persona_registro', 200)){

				mensajeKOForm('direccion_persona_registro', 't_dire_larga_ko', 'id_caja_mensaje_dire_registro', 'id_textMensaje_dire_registro')
				Error('direccion_persona_registro','t_dire_larga_ko');

				return false;

			}else{

				mensajeOK('direccion_persona_registro');
				mensajeOKForm('direccion_persona_registro','id_caja_mensaje_dire_registro');

				return true;
			}
	}

function comprobar_descripcion_rol(){

	let x = $('#id_submitRol').attr('label');

	if((x == 'ADD') || (x == 'EDIT')){

			if (!size_minimo('descrip_rol',20)){
				mensajeKOForm('descrip_rol', 't_desc_rol_corta_ko', 'id_caja_mensaje_descrip_rol', 'id_textMensaje_descrip_rol')
				Error('descrip_rol','t_desc_rol_corta_ko');

				return false;

			}else if(!size_maximo('descrip_rol', 200)){

				mensajeKOForm('descrip_rol', 't_desc_rol_larga_ko', 'id_caja_mensaje_descrip_rol', 'id_textMensaje_descrip_rol')
				Error('descrip_rol','t_desc_rol_larga_ko');

				return false;

			}else if(!validarDesc('descrip_rol')){

				mensajeKOForm('descrip_rol', 't_formato_desc_rol_ko', 'id_caja_mensaje_descrip_rol', 'id_textMensaje_descrip_rol')
				Error('descrip_rol','t_formato_desc_rol_ko');

				return false;

			}else{

				mensajeOK('descrip_rol');
				mensajeOKForm('descrip_rol','id_caja_mensaje_descrip_rol');

				return true;
			}
 }
}

function comprobar_descripcion_accion(){

	let x = $('#id_submitAccion').attr('label');

	if((x == 'ADD') || (x == 'EDIT')){

			if (!size_minimo('descrip_accion',20)){
				mensajeKOForm('descrip_accion', 't_desc_rol_corta_ko', 'id_caja_mensaje_descrip_accion', 'id_textMensaje_descrip_accion')
				Error('descrip_accion','t_desc_rol_corta_ko');

				return false;

			}else if(!size_maximo('descrip_accion', 200)){

				mensajeKOForm('descrip_accion', 't_desc_rol_larga_ko', 'id_caja_mensaje_descrip_accion', 'id_textMensaje_descrip_accion')
				Error('descrip_accion','t_desc_rol_larga_ko');

				return false;

			}else if(!validarDesc('descrip_accion')){

				mensajeKOForm('descrip_accion', 't_formato_desc_rol_ko', 'id_caja_mensaje_descrip_accion', 'id_textMensaje_descrip_accion')
				Error('descrip_accion','t_formato_desc_rol_ko');

				return false;

			}else{

				mensajeOK('descrip_accion');
				mensajeOKForm('descrip_accion','id_caja_mensaje_descrip_accion');
				return true;
			}
 }
}

function comprobar_descripcion_funcionalidad(){

	let x = $('#id_submitFuncionalidad').attr('label');

	if((x == 'ADD') || (x == 'EDIT')){

			if (!size_minimo('descrip_funcionalidad',20)){
				mensajeKOForm('descrip_funcionalidad', 't_desc_rol_corta_ko', 'id_caja_mensaje_descrip_funcionalidad', 'id_textMensaje_descrip_funcionalidad')
				Error('descrip_funcionalidad','t_desc_rol_corta_ko');

				return false;

			}else if(!size_maximo('descrip_funcionalidad', 200)){

				mensajeKOForm('descrip_funcionalidad', 't_desc_rol_larga_ko', 'id_caja_mensaje_descrip_funcionalidad', 'id_textMensaje_descrip_funcionalidad')
				Error('descrip_funcionalidad','t_desc_rol_larga_ko');

				return false;

			}else if(!validarDesc('descrip_funcionalidad')){

				mensajeKOForm('descrip_funcionalidad', 't_formato_desc_rol_ko', 'id_caja_mensaje_descrip_funcionalidad', 'id_textMensaje_descrip_funcionalidad')
				Error('descrip_funcionalidad','t_formato_desc_rol_ko');

				return false;

			}else{
				mensajeOKForm('descrip_funcionalidad','id_caja_mensaje_descrip_funcionalidad');
				mensajeOK('descrip_funcionalidad');
				return true;
			}
 }
}

function comprobar_nombre_rol(){

	let x = $('#id_submitRol').attr('label');

	if((x == 'ADD') || (x == 'EDIT')){
		if (!size_minimo('nombre_rol', 6)){
			mensajeKOForm('nombre_rol', 't_nombre_rol_CortoKo', 'id_caja_mensaje_nombre_rol', 'id_textMensaje_nombre_rol')
			Error('nombre_rol','t_nombre_rol_CortoKo');

			return false;

		}else if(!soloAlfabeticosYEspacios('nombre_rol')){
			mensajeKOForm('nombre_rol', 't_nombre_rol_soloAlf', 'id_caja_mensaje_nombre_rol', 'id_textMensaje_nombre_rol')
			Error('nombre_rol','t_nombre_rol_soloAlf');

			return false;


		}else if (!size_maximo('nombre_rol', 48)){
			mensajeKOForm('nombre_rol', 't_nombre_rol_largo_ko', 'id_caja_mensaje_nombre_rol', 'id_textMensaje_nombre_rol')
			Error('nombre_rol','t_nombre_rol_largo_ko');

			return false;

		}else{
			mensajeOK('nombre_rol');
			mensajeOKForm('nombre_rol','id_caja_mensaje_nombre_rol');

			return true;
		}
	}
}

function comprobar_nombre_accion(){

	let x = $('#id_submitAccion').attr('label');

	if((x == 'ADD') || (x == 'EDIT')){
		if (!size_minimo('nombre_accion', 6)){
			mensajeKOForm('nombre_accion', 't_nombre_rol_CortoKo', 'id_caja_mensaje_nombre_accion', 'id_textMensaje_nombre_accion')
			Error('nombre_accion','t_nombre_rol_CortoKo');

			return false;

		}else if(!soloAlfabeticosYEspacios('nombre_accion')){
			mensajeKOForm('nombre_accion', 't_nombre_rol_soloAlf', 'id_caja_mensaje_nombre_accion', 'id_textMensaje_nombre_accion')
			Error('nombre_accion','t_nombre_rol_soloAlf');

			return false;


		}else if (!size_maximo('nombre_accion', 48)){
			mensajeKOForm('nombre_accion', 't_nombre_rol_largo_ko', 'id_caja_mensaje_nombre_accion', 'id_textMensaje_nombre_accion')
			Error('nombre_accion','t_nombre_rol_largo_ko');

			return false;

		}else{
			mensajeOK('nombre_accion');
			mensajeOKForm('nombre_accion','id_caja_mensaje_nombre_accion');

			return true;
		}
	}
}

function comprobar_nombre_funcionalidad(){

	let x = $('#id_submitFuncionalidad').attr('label');

	if((x == 'ADD') || (x == 'EDIT')){
		if (!size_minimo('nombre_funcionalidad', 6)){
			mensajeKOForm('nombre_funcionalidad', 't_nombre_rol_CortoKo', 'id_caja_mensaje_nombre_funcionalidad', 'id_textMensaje_nombre_funcionalidad')
			Error('nombre_funcionalidad','t_nombre_rol_CortoKo');

			return false;

		}else if(!soloAlfabeticosYEspacios('nombre_funcionalidad')){
			mensajeKOForm('nombre_funcionalidad', 't_nombre_rol_soloAlf', 'id_caja_mensaje_nombre_funcionalidad', 'id_textMensaje_nombre_funcionalidad')
			Error('nombre_funcionalidad','t_nombre_rol_soloAlf');

			return false;


		}else if (!size_maximo('nombre_funcionalidad', 48)){
			mensajeKOForm('nombre_funcionalidad', 't_nombre_rol_largo_ko', 'id_caja_mensaje_nombre_funcionalidad', 'id_textMensaje_nombre_funcionalidad')
			Error('nombre_funcionalidad','t_nombre_rol_largo_ko');

			return false;

		}else{
			mensajeOK('nombre_funcionalidad');
			mensajeOKForm('nombre_funcionalidad','id_caja_mensaje_nombre_funcionalidad');
			return true;
		}
	}
}

function comprobarFormatoIdsRAF(id){

	let x = $('#id_submitRAF').attr('label');

	if((x == 'ADD') || (x == 'EDIT')){

			if (!size_minimo(id, 1)){
				mensajeKOForm(id, 't_nombreCortoKo', 'id_caja_mensaje_formatoRAF', 'id_textMensaje_formatoRA')
				Error(id,'t_nombreCortoKo');

				return false;

			}else if(!validarFormatoId(id)){
				mensajeKOForm(id, 't_nombre_soloAlf', 'id_caja_mensaje_formatoRAF', 'id_textMensaje_formatoRA')
					Error(id,'t_nombre_soloAlf');

			    return false;


				}else if (!size_maximo(id, 4)){
					mensajeKOForm(id, 't_nombre_largo_ko', 'id_caja_mensaje_formatoRAF', 'id_textMensaje_formatoRA')
					Error(id,'t_nombre_largo_ko');

					return false;

				}else{
					mensajeOK(id);
					return true;
				}
}



}
