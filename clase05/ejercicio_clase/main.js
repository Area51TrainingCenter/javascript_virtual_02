let listado=document.getElementById("listado-sitios");
let xhr=new XMLHttpRequest();
let bloque_inicial=document.getElementById("contenido-inicial");
let bloque_detalle=document.getElementById("contenido-detalle")


let url="http://sminnova.com/restapitrujillo/sitiosturisticos"
xhr.open("GET",url)
xhr.send()

xhr.onreadystatechange=function(){

    if(xhr.status==200){

        if(xhr.readyState==4){
            
          
            respuesta= JSON.parse(xhr.responseText)
         
        
            armarListado(respuesta)
         
        }
    }
    
}

function armarListado(sitios_turisticos){
  
    let contenido="";
    for(let item of sitios_turisticos){
     
        console.log(item.nombre)
        console.log(item.foto_principal)
        console.log(item.direccion)
        console.log(item.id)
        console.log(item);
        let temp=`<div class="item-sitio" onclick="ver_detalle(${item.id})">
                    <div class="info-sitio">
                        <img class="img-principal" src="${item.foto_principal}" alt="">
                        <div class="detalle-sitio">
                            <h2>${item.nombre}</h2>
                            <p>${item.direccion}</p>
                        </div>
                    </div>
                    
                    <img class="arrow" src="http://sminnova.com/appTrujillo/assets/recursos/next-gray.png" alt="">
                </div>`

        contenido=contenido+temp;

     
    }

    listado.innerHTML=contenido;

}

function sitios_por_categoria(id_categoria){
   let url="http://sminnova.com/restapitrujillo/sitiosturisticos/categoria/"+id_categoria

    let xhr=new XMLHttpRequest();
    xhr.open("GET",url)
    xhr.send();
    xhr.onreadystatechange=function(){
        if(xhr.status==200)
        {
            if(xhr.readyState==4){
                console.log(xhr.responseText);
                let respuesta=JSON.parse(xhr.responseText);
                armarListado(respuesta);
            }
        }
    }

}
function ver_detalle(id_sitio){

    bloque_inicial.classList.add("ocultar");
    bloque_detalle.classList.remove("ocultar")

    let url="http://sminnova.com/restapitrujillo/sitiosturisticos/id/"+id_sitio;

    let xhr=new XMLHttpRequest();
    xhr.open("GET",url);
    xhr.send();
    xhr.onreadystatechange=function(){
        if(xhr.status==200){
            if(xhr.readyState==4){
                console.log(xhr.responseText);
                let respuesta=JSON.parse(xhr.responseText);

                let titulo=document.getElementById("detalle-titulo");
                titulo.innerHTML=respuesta[0].nombre
                let foto=document.getElementById("detalle-foto-principal");
                foto.setAttribute("src",respuesta[0].foto_principal)
           
            }
        }
    }

}

let regresar=document.getElementById("regresar");
regresar.addEventListener("click",function(){
    bloque_inicial.classList.remove("ocultar");
    bloque_detalle.classList.add("ocultar")

    let titulo=document.getElementById("detalle-titulo");
    titulo.innerHTML=""
    let foto=document.getElementById("detalle-foto-principal");
    foto.setAttribute("src","")


})