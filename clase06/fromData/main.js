let datos=new FormData();

datos.append("nombre","Juan Carlos")
datos.append("correo","jramos@gmail.com")
/*
console.log(datos.get("nombre"))
console.log(datos.has("edad"));
datos.set("nombre","diegoRamos")

console.log(datos.get("nombre"))

*/

let datos_objeto={
    nombre:"Juan Carlos",
    correo:"jramos@gmail.com"
}


let formulario=document.getElementById("login-datos");
console.log(formulario);


let btn_obtener=document.getElementById("obtener-datos");
btn_obtener.addEventListener("click",function(){
    
    let datos_usuario=new FormData(formulario);

    datos_usuario.append("fecha","02/01/2021");
    
   // let datos_usuario=new FormData(document.getElementById("login-datos"));
    let config={
        method:"POST",
        body:datos_usuario
    }
    fetch(url,config)
    
    //console.log(datos_usuario.get("correo"))
    //console.log(datos_usuario.get("password"))
})