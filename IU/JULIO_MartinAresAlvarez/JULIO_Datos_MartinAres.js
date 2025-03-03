const def_datos_MartinAres = Array('Julio', 'Martin', '46095429W', '62');

function agregar () {
    let sd = document.getElementById("MostrarMisDatos");
    sd.innerHTML = `<p><b>Datos de entrega:</b></p>
    <p>Entrega: ${ def_datos_MartinAres[0] }</p>
    <p>Nombre del alumno: ${ def_datos_MartinAres[1] }</p>
    <p>DNI: ${ def_datos_MartinAres[2] }</p>
    <p>Horas dedicadas: ${ def_datos_MartinAres[3] }</p>`;

    let div = document.querySelector('#MostrarMisDatos')
    div.style.visibility = 'visible'

    let botonDatosAlumno = document.querySelector('#MisDatos')
    botonDatosAlumno.addEventListener('click', function(e){
        if(div.style.visibility === 'visible'){
            div.style.visibility = 'hidden'
        }else{
            div.style.visibility = 'visible'
        }
    }, false)
}
