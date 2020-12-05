// obtener el elemento y darle propiedades y metodos
let elemento=document.getElementById("comp1");
let modal=document.getElementById("modal");
let cerrar_modal=document.getElementById("cerrar");

elemento.addEventListener("click",tarea)

function tarea(){
    modal.classList.remove("ocultar");
    //console.log("hizo click en el elemento");
}


/*
cerrar_modal.addEventListener("click",cerrarModal)

function cerrarModal(){
    modal.classList.add("ocultar");
}
*/
/*
cerrar_modal.addEventListener("click",function(){
    modal.classList.add("ocultar");
})
*/

cerrar_modal.addEventListener("click",()=>{
    modal.classList.add("ocultar");
})
/*
cerrar_modal.addEventListener("nombre del evevto", " function : nombre o la declaracion de la misma (funcion anonima)");
cerrar_modal.addEventListener("click",tarea)
cerrar_modal.addEventListener("click",function(){ /* el codigo de la funcion */})
*/