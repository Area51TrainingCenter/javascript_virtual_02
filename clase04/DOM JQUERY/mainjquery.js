//version JS
//let elemento=document.getElementById("opcion1")
// elemento.addEventListener("click",functino(){})

//version Jquery
//$("#opcion1");
/*$("#opcion1").click(tarea)
function tarea(){
}
$("#opcion1").click(()=>{})*/

$("#opcion1").click(function(){
    $("#contenido").html("<p>Contenidoa agregado esta vez por Jquery</p>")
})

$(".item").click(function(){
    console.log("hizo click en un elemento de clase item");
})

/*
selector por etiqueta : nombre etiqueta
selector por clsae : .clase
selector por id :  #id
*/
