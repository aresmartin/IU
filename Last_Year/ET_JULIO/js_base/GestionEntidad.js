class GestionEntidad{

   cargar_plantilla(){
    document.addEventListener("DOMContentLoaded", function(){
        insertar_titulo();
        insertarIconosTestBack();
        insertarIconosAddSearch();
        insertarTablaProvisional();
    });
}   

 insertar_titulo(){
    const contenedor = document.getElementById('contenido_titulo');
    if (contenedor) {
        const encabezado = contenedor.textContent;
        if(encabezado === 'Alumno'){
            contenedor.innerHTML = `<h1>Gestión de Alumnos</h1>`;
        }else{
            contenedor.innerHTML = `<h1>Gestión de Asignaturas</h1>`;
        }
    } else {
        console.log('El elemento con ID contenido_titulo no se encontró');
    }
}

 insertarIconosTestBack(){
    const div_iconostestback = document.getElementById('iconos_test_back')
    if(div_iconostestback){
        div_iconostestback.innerHTML = `
        <div id="iconos-test-back">
        <p>
          <img src="../iconos/TEST.png" />
          <img
            src="../iconos/BACK.png"
            onclick="window.location.href = '../menu.html'"
          />
        </p>
      </div>`;
    }else{
        console.log('El elemento con ID iconos_test_back no se encontró');
    }
   

}

 insertarIconosAddSearch(){

    const div_iconosaddsearch = document.getElementById('iconos_add_search')
    if(div_iconosaddsearch){
        div_iconosaddsearch.innerHTML = `
    <div id="iconos-add-search">
      <img src="../iconos/ADD.png" />
      <img src="../iconos/SEARCH.png" />
    </div>`;
    }else{
        console.log('El elemento con ID iconos_add_search no se encontró');
    }
    

}

 insertarTablaProvisional(){
    const div_tablaProvisional = document.getElementById('tabla-provisional')
    if(div_tablaProvisional){
        div_tablaProvisional.innerHTML = `
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Profesor</th>
          <th>Editar</th>
          <th>Eliminar</th>
          <th>Mostrar</th>
        </tr>
      </thead>
      <tbody>
        <!-- Añade aquí las filas necesarias, ejemplo de una fila con íconos -->
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td><img src="../iconos/EDIT.png" alt="Editar" class="icon" /></td>
          <td>
            <img src="../iconos/DELETE.png" alt="Eliminar" class="icon" />
          </td>
          <td>
            <img src="../iconos/SHOWCURRENT.png" alt="Mostrar" class="icon" />
          </td>
        </tr>

        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td><img src="../iconos/EDIT.png" alt="Editar" class="icon" /></td>
          <td>
            <img src="../iconos/DELETE.png" alt="Eliminar" class="icon" />
          </td>
          <td>
            <img src="../iconos/SHOWCURRENT.png" alt="Mostrar" class="icon" />
          </td>
        </tr>

        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td><img src="../iconos/EDIT.png" alt="Editar" class="icon" /></td>
          <td>
            <img src="../iconos/DELETE.png" alt="Eliminar" class="icon" />
          </td>
          <td>
            <img src="../iconos/SHOWCURRENT.png" alt="Mostrar" class="icon" />
          </td>
        </tr>

        <!-- Repite bloques <tr> para más entradas -->
      </tbody>
    </table>`;
    }else{
        console.log('El elemento con ID tabla_provisional no se encontró');
    }
    
}

}
    
document.getElementById('prueba').action = 'javascript:GestionEntidad.cargar_plantilla();'

        
     




// class GestionEntidad{


//      crearEntidad(){
//         document.getElementById('cabecera').innerHTML =
//             `<h1 id="cabecera">Listado de alumnos</h1>`;
//             // <div id="iconos-test-back">
//             //   <p>
//             //     <img src="../iconos/TEST.png" />
//             //     <img
//             //       src="../iconos/BACK.png"
//             //       onclick="window.location.href = '../menu.html'"
//             //     />
//             //   </p>
//             // </div>
//             // <div id="iconos-add-search">
//             //   <img src="../iconos/ADD.png" />
//             //   <img src="../iconos/SEARCH.png" />
//             // </div>`
//             //COMO HAGO PARA QUE EN ESTA ENTIDAD ME CARGE EL HTML DE POR EJEMPLO SOLO ALUMNOS DINAMICAMENTE?
//     }

// }
