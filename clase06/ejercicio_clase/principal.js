
validarAcceso();

obtenerContactos();


let items_contacto=document.getElementById("items-contacto");
let agregar_contacto=document.getElementById("agregar-contacto");
let agregar_datos_contacto=document.getElementById("agregar-datos-contacto");

let cerrar=document.getElementById("cerrar-sesion")
cerrar.addEventListener("click",()=>{

    localStorage.estadoLogin="false"
    localStorage.idUsuario=0;
    window.location.href="index.html"
})
// le quitamos la clase hide al modal , para que este sea visible
agregar_contacto.addEventListener("click",()=>{
    document.getElementById("modal-agregar").classList.remove("hide");
})

//este evento se ejecuta cuando dan click en el agregar desde el formulario contacto
agregar_datos_contacto.addEventListener("click",()=>{
    let datos_contacto=new FormData(document.getElementById("datos_contacto"));
    datos_contacto.append("id_usuario",obtenerIdUsuario());

    let url="https://sminnova.com/recurso_clase/api/contacto/agregar";
    let config={
        method:"POST",
        body:datos_contacto
    }
    fetch(url,config)
    .then((data)=>{return data.json()})
    .then((data)=>{
        console.log(data);
    })

})

function validarAcceso(){
    if(localStorage.estadoLogin=="true"){
            document.getElementById("nombre-usuario").innerText=localStorage.nombresUsuario
    }
    else{
        window.location.href="index.html"
    }
}


function obtenerContactos(){
    let url="https://sminnova.com/recurso_clase/api/contacto/listado";
    let datos=new FormData();
    let id_usuario=obtenerIdUsuario();
    datos.append("id",id_usuario)
    let config={
        method:"POST",
        body:datos
    }
    fetch(url,config)
    .then((data)=>{
        return data.json()
    })
    .then((data)=>{
     

        console.log(typeof data);
        if(typeof data=="string"){
            items_contacto.innerHTML="<li>No tienes contactos agregados, intenta creando un contacto</li>"
            
        }else{
           console.log(data);
           let temp="";
           for(let item of data){
               console.log(item)
               temp=temp+`<li class="list-group-item">${item.nombres} ${item.apellidos} <strong>${item.telefono}</strong></li>`
           }
           items_contacto.innerHTML=temp;
        }
    })
}


function cerrar_modal(){
    document.getElementById("modal-agregar").classList.add("hide");

}

function obtenerIdUsuario(){
    return localStorage.idUsuario;
}
/*
Agregar contacto
https://sminnova.com/recurso_clase/api/contacto/agregar

nombres
apellidos
telefono
id_usuario

Obtener mis contactos
https://sminnova.com/recurso_clase/api/contacto/listado
id
*/