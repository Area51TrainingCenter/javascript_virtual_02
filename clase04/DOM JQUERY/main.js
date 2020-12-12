let contenido=document.getElementById("contenido");

let opcion1=document.getElementById("opcion1");

opcion1.addEventListener("click",function(){
    contenido.innerHTML="<p>Contenido agregado por JS</p>";
})


let elementos2=document.getElementsByClassName("item");

elementos2[0].addEventListener("click",function(){
    console.log("hizo click en elemento con clase");
});

elementos2[1].addEventListener("click",function(){
    console.log("hizo click en elemento con clase");
});


/*
elementos2.addEventListener("click",function(){
    console.log("hizo click en elemento con clase");
})
*/


let lista=["Juan","carlos","Martin"];
let tem="";
for(var i=0;i<lista.length;i++){
    tem=tem+"<li onclick='obtener("+i+")'>"+lista[i]+"</li>";
}
let listado=document.getElementById("listado");
listado.innerHTML=tem;


function obtener(parametro){
    console.log(parametro);
    console.log("click en elemento li")

}

