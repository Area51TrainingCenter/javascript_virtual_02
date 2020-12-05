let img_principal=document.getElementById("img_principal");
/*

function mostrarFoto(id){
    console.log(id);
    let fotoselecionado=document.getElementById(id);
    let ruta=fotoselecionado.getAttribute("data-foto");
    img_principal.setAttribute("src",ruta)
    abrirModal();
    console.log("mostar foto en modal");
}
*/
function mostarFoto2(path,titulo){
    console.log(titulo);
    img_principal.setAttribute("src",path)
    abrirModal();
}

function abrirModal(){
    modal.classList.remove("ocultar");
}

cerrar.addEventListener("click",function(){
    modal.classList.add("ocultar");
})