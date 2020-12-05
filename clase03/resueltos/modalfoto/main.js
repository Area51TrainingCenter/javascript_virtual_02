
let foto1=document.getElementById("foto1");
let foto2=document.getElementById("foto2");
let foto3=document.getElementById("foto3");
let img_principal=document.getElementById("img_principal");
let titulo_foto=document.getElementById("titulo_foto");


let modal=document.getElementById("modal")
let cerrar=document.getElementById("cerrar")


foto1.addEventListener("click",()=>{
   console.log("click en foto1")

    let ruta=foto1.getAttribute("data-foto");
    let titulo=foto1.getAttribute("data-titulo");

    img_principal.setAttribute("src",ruta)
    titulo_foto.innerText=titulo;
    abrirModal();
})

foto2.addEventListener("click",()=>{
    console.log("click en foto2")
    img_principal.setAttribute("src","foto2.jpg")
    abrirModal();
})

foto3.addEventListener("click",()=>{
    console.log("click en foto3")
    img_principal.setAttribute("src","foto3.jpg")
    abrirModal();
})


function abrirModal(){
    modal.classList.remove("ocultar");
}

cerrar.addEventListener("click",function(){
    modal.classList.add("ocultar");
})