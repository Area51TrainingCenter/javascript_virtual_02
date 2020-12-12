let tarea=document.getElementById("tarea");
let agregar=document.getElementById("agregar");
let listado_tareas=document.getElementById("listado_tareas");
let tareas=[];
/* Forma uno de desarrollo */
/*
agregar.addEventListener("click",function(){
    //event.preventDefault();
    //e.preventDefault();
    
    console.log(tarea.value);
    
    let contenido_actual=listado_tareas.innerHTML; // " <li>tarea1</li><li>tarea2</li>";
    listado_tareas.innerHTML=contenido_actual+"<li id='elemento1'>"+tarea.value+" <span class='eliminar' id='eliminiar' onclick='eliminar()'>Eliminar</span></li>";


    //listado_tareas.innerHTML="<li>"+tarea.value+"</li>";
})

function eliminar(){
console.log("hizo click en eliminar")
}*/

agregar.addEventListener("click",()=>{
    let tarea_ingresa=tarea.value;
    tareas.push(tarea_ingresa);
    //console.log(tareas);
    leerArreglo();
})



function leerArreglo(){
    //

    let contenido="";

    for(let i=0;i<tareas.length;i++){
        console.log(tareas[i]);
       // listado_tareas.innerHTML="<li>"+tareas[i]+"</li>"
        contenido=contenido+"<li id='ele-"+i+"'>"+tareas[i]+"<span onclick='eliminar("+i+")'>Eliminar</span></li>";
    }

    listado_tareas.innerHTML=contenido;

    
}

function eliminar(parametro){
    console.log(parametro)
    console.log("hizo click en eliminar");
    let elemento_elminiar="ele-"+parametro;
    console.log(elemento_elminiar);
    document.getElementById(elemento_elminiar).remove();

}

$("#modal").removeClass("activado")
$("#modal").addClass("activado")
$("modal").hide();
$("modal").show();

function removeClass(){
    document.getElementById("modal").classList.remove("activado");

}
function addClass(){
    document.getElementById("modal").classList.add("activado");

}