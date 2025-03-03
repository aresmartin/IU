

// Aqui hay otro método
function fillWorkspaceEntidad(entidad){

    `
    <!--------------
    testing
    --------------->

    <div class="div_IU_form" id='div_IU_test'>
        <div class="contenidoForm" id="contenidoForm">
            <table border="1" style="width: 100%;table-layout: fixed;">
                <thead>
                    <tr>
                        <th style="width: 10%;word-wrap: break-word;">Entidad</th>
                        <th style="width: 20%;word-wrap: break-word;">>Test</th>
                        <th style="width: 10%;word-wrap: break-word;">Atributo</th>
                        <th style="width: 30%;word-wrap: break-word;">Valor</th>
                        <th style="width: 10%;word-wrap: break-word;">Esperado</th>
                        <th style="width: 10%;word-wrap: break-word;">Obtenido</th>
                        <th style="width: 10%;word-wrap: break-word;">Resultado</th>
                    </tr>
                </thead>
                <tbody id="tablaresultadostest">
                </tbody>
            </table>
            <img src="./iconos/BACK.png" onclick="DOM_class.cerrar_div_test();" />
        </div>
    </div>
    
    
    
    `;





    document.getElementById('workspace').innerHTML = workspaceContent

    // clase = 'Gestion_personas(entidad, eval(columnas_personas))';
    // myentity = new persona_class[entidad](entidad, eval(entidad+".columnas_tabla"))
    myentity = new clases[entidad](); // Martin: a esta línea le dio mucha importancia


}

// Linea 148
function fillMenu(id){
    element = document.getElementById(id)

    let itemsmenu = '<ul>'

    Object.keys(menu.entidades).forEach(function(key) {
        itemsmenu += `<li onclick="fillWorkspaceEntidad('`+menu.entidades[key]+`');">`+menu.entidades[key]+`</li>`;
    });

    Object.keys(menu.paginas).forEach(function(key){
        // Martin: no lo enseñó

    });

}