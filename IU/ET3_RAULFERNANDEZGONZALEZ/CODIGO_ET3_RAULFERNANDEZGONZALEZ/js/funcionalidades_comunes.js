let idioma;

function switchEstadoCaja(id_caja){

let caja = document.getElementById(id_caja);

if(caja.style.display == 'none'){

  caja.style.display = 'block';

}else{

  caja.style.display = 'none';

}
}

function deleteAllCookies() {
	var cookies = document.cookie.split(";");
    	for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        setCookie(name, '');
    }
 }

function desconectar_usuario(){

  	deleteAllCookies();
  	lanzarLogin();

}

 function setUsuarioActivo(){

    user = getCookie('usuarioSistema');
    document.getElementById('id_usuario_activo').innerHTML = user;

}

function cerrarOtrasCajas(id_cajaNoCerrar){
let cajas = document.getElementsByName('caja');

for (var i = 0; i < cajas.length; i++) {

if(cajas[i].style.display == 'block' && cajas[i].id != id_cajaNoCerrar){

  cajas[i].style.display = 'none';

}
}
}

function redirigir(){

	if ((getCookie('usuarioSistema') === null) || (getCookie('usuarioSistema') === '')) {
		lanzarLogin();
	}
  else{
  	lanzarMenu();
  }
}

function checkLogin(){

	if ((getCookie('usuarioSistema') === null) || (getCookie('usuarioSistema') === '')) {
		lanzarLogin();
	}
}

function lanzarGestionUsuario(){

 window.open("./gestionUsuario.html", "_self");

}

function lanzarGestionPersona(){

 window.open("./gestionPersona.html", "_self");

}

function lanzarGestionRol(){

 window.open("./gestionRol.html", "_self");

}

function lanzarGestionAccion(){

 window.open("./gestionAccion.html", "_self");

}

function lanzarGestionFuncionalidad(){

 window.open("./gestionFuncionalidad.html", "_self");

}

function lanzarGestionRAF(){

 window.open("./gestionRolAccionFuncionalidad.html", "_self");

}

function lanzarMenu(){

 window.open("./menu.html", "_self");

}

function lanzarLogin(){

 window.open("./login.html", "_self");

}

function lanzarRegistro(){

 window.open("./registro.html", "_self");

}

function submitForm(idform){
  var form = document.getElementById(idform);
          form.submit();
}

function cambiarIdioma(i){

localStorage.setItem('idioma', i);
let j = localStorage.getItem('idioma');
setLang(j);
}

function cargarIdioma(){
let i = localStorage.getItem('idioma');
setLang(i);

}

function crearformoculto(name, action){

	if ( $("#" + name).length == 0) {

		var formu = document.createElement('form');
		document.body.appendChild(formu);
	    formu.name = name;
	    formu.action = action;
	    formu.id = name;
	    formu.style.display = "none";

	}

}

/**Función para insertar campos en el formulario a mayores*/
function insertacampo(idform, name, value){

	formulario = document.getElementById(idform);
	var input = document.createElement('input');
  input.id = name;
	input.type = 'hidden';
	input.name = name;
	input.value = value;
	input.className = name;
	formulario.appendChild(input);

}

function eliminaCampo(idform, campo){

  $('#'+idform).attr(campo, '');

}

function mensajeKO(idElemento, codigoerror){

  $('#id_textMensaje').attr('class', '');
  $('#id_textMensaje').attr('style', 'color:red');
	document.getElementById('id_caja_mensaje').style.display = 'block';
	document.getElementById('id_textMensaje').classList.add(codigoerror);
	document.getElementById(idElemento).style.borderColor = "#ff0000";
  cargarIdioma();
}

function mensajeKOForm(idElemento, codigoerror, idcaja , idmensaje){

  document.getElementById(idmensaje).innerHTML = '';
  document.getElementById(idmensaje).style.color = 'red';
	document.getElementById(idcaja).style.display = 'block';
	document.getElementById(idmensaje).classList.add(codigoerror);
	document.getElementById(idElemento).style.borderColor = "#ff0000";
  cargarIdioma();
}

function mensajeOK(idElemento){

	document.getElementById('id_textMensaje').innerHTML = '';
	document.getElementById('id_caja_mensaje').style.display = 'none';
	document.getElementById(idElemento).style.borderColor = "#00e600";

}

function mensajeOKForm(idElemento, idcaja){

	document.getElementById(idElemento).innerHTML = '';
	document.getElementById(idcaja).style.display = 'none';
	document.getElementById(idElemento).style.borderColor = "#00e600";

}

function mensajeOKShow(codigotexto){
  $('#id_textMensaje').attr('class', '');
  $('#id_textMensaje').attr('style', 'color:green');
  document.getElementById('id_caja_mensaje').style.display = 'block';
  document.getElementById('id_textMensaje').classList.add(codigotexto);
  cargarIdioma();

}

function mensajeOKCaja(codigotexto){

  $('#id_mensajeConfir').attr('class', '');
  $('#id_mensajeConfir').attr('style', 'color:green');
  document.getElementById('id_cajaConfir').style.display = 'block';
  document.getElementById('id_mensajeConfir').classList.add(codigotexto);
  cargarIdioma();


}

function mensajeKOCaja(codigotexto){

  $('#id_mensajeErrorModal').attr('class', '');
  $('#id_mensajeErrorModal').attr('style', 'color:red');
  document.getElementById('id_cajaErrorModal').style.display = 'block';
  document.getElementById('id_mensajeErrorModal').classList.add(codigotexto);
  cargarIdioma();


}

function mensajeKOShow(codigoerror){
  $('#id_textMensaje').attr('class', '');
  $('#id_textMensaje').attr('style', 'color:red');
  document.getElementById('id_caja_mensaje').style.display = 'block';
  document.getElementById('id_textMensaje').classList.add(codigoerror);
  cargarIdioma();

}


// crearselect(
// true/false : con true se coloca un valor vacio como primer option (para SEARCH)
// id que va tener el select,
// name que va tener el select,
// atributo del array datos que utilizamos para el value de cada option,
// atributo del array datos que vamos utilizar para el text de cada option,
// array de datos con las filas de la entidad,
// value que queremos que este como selected en el select)
// devuelve un elemento select
function crearselect(convacio, id, name, valueoption, textoption, datos, itemseleccionado){

	rol_select = document.createElement("select");
	rol_select.name = name;
	rol_select.id = id;

	if (convacio){
		option_rol = document.createElement("option");
		option_rol.value = '';
		option_rol.text = '';
		option_rol.selected = true;
		rol_select.appendChild(option_rol);
	}

	for (let i=0;i<datos.length;i++){
		option_rol = document.createElement("option");
		option_rol.value = datos[i][valueoption];
		option_rol.text = datos[i][textoption];

		if (option_rol.value == itemseleccionado){
			option_rol.selected = true;
		}
		rol_select.appendChild(option_rol);
	}

	return rol_select;

}

function eliminarSelectRolUsuario(){

  let select = document.getElementById('id_select_roles');

	if(select != null){

		select.remove();

	}

}
