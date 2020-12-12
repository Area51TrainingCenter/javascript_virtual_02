let foto1=document.getElementById("foto1")
let foto2=document.getElementById("foto2")
let foto3=document.getElementById("foto3")

let foto_principal=document.getElementById("foto-principal")
let texto_principal=document.getElementById("texto-principal")

function cambiarFoto1(){
    let ruta_foto=foto1.getAttribute("src");
    let title_foto=foto1.getAttribute("title");
   texto_principal.innerText=title_foto;
    foto_principal.setAttribute("src",ruta_foto);
    //actualizafotoprincipal(title_foto,ruta_foto)
    foto1.classList.add("activo")
    foto2.classList.remove("activo")
    foto3.classList.remove("activo")

}

function cambiarFoto2(){
    let ruta_foto=foto2.getAttribute("src")
    let title_foto=foto2.getAttribute("title");
    texto_principal.innerText=title_foto;
    foto_principal.setAttribute("src",ruta_foto);
    foto1.classList.remove("activo")
    foto2.classList.add("activo")
    foto3.classList.remove("activo");
    //actualizafotoprincipal(title_foto,ruta_foto)
}

function cambiarFoto3(){
    let ruta_foto=foto3.getAttribute("src");
    let title_foto=foto3.getAttribute("title");
    texto_principal.innerText=title_foto;
    foto_principal.setAttribute("src",ruta_foto);
   
    foto1.classList.remove("activo")
    foto2.classList.remove("activo")
    foto3.classList.add("activo")
  //  actualizafotoprincipal(title_foto,ruta_foto)

}

function actualizafotoprincipal(titulo,ruta){
    texto_principal.innerText=titulo;
    foto_principal.setAttribute("src",ruta);
}

function removeActivo(){
    foto1.classList.remove("activo");
    foto2.classList.remove("activo");
    foto3.classList.remove("activo");
}

foto1.addEventListener("click",cambiarFoto1)

foto2.addEventListener("click",cambiarFoto2)

foto3.addEventListener("click",cambiarFoto3)