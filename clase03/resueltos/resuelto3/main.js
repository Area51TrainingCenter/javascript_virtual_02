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
    console.log(tareas)
})