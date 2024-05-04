class GestionEntidad{

     crearEntidad(){
        let sd = document.getElementById("iconos-test-back");
        let cabecera = document.getElementById('cabecera')
        let divaddsearch = document.getElementById('iconos-add-search')
        cabecera.innerHTML = `<h1>Listado de alumnos</h1>`
         sd.innerHTML = `<p>
            <img src="../iconos/TEST.png" />
             <img src="../iconos/BACK.png" onclick="window.location.href = '../menu.html'"
             />
             </p> `
         divaddsearch.innerHTML = `
             <img src="../iconos/ADD.png" />
             <img src="../iconos/SEARCH.png" />`
            //COMO HAGO PARA QUE EN ESTA ENTIDAD ME CARGE EL HTML DE POR EJEMPLO SOLO ALUMNOS DINAMICAMENTE?
    }

}
