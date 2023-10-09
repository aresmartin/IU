window.addEventListener('load', init, false);
function init(){
    let div = document.querySelector('#ocultar-y-mostrar');
    div.style.visibility = 'visible';

    let boton = document.querySelector('#ocultar-mostrar');
    boton.addEventListener('click', function(e){
        if(div.style.visibility === 'visible'){
            div.style.visibility = 'hidden';
        }else{
            div.style.visibility = 'visible';
        }
    }, false);
}

