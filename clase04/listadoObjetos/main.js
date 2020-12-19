/** variable de datos  **/

let listado_usuario=[];

let grabar=document.getElementById("grabar");
let inp_nombre=document.getElementById("inp-nombre")
let inp_correo=document.getElementById("inp-correo")
let inp_facebook=document.getElementById("inp-facebook")
let error=document.getElementById("error");
grabar.addEventListener("click",function(){
    let nombre=inp_nombre.value;

    if(nombre.trim()=="" || nombre.length<4){
        error.innerHTML="<strong class='error'>Ingresa un valor valido para el nombre</strong>";
        
    }
    else{
        error.innerHTML="";

        let usuario_nuevo={
            nombre:inp_nombre.value,
            correo:inp_correo.value,
            facebook:inp_facebook.value
        }
        // agregao el objeto al arreglo
        listado_usuario.push(usuario_nuevo);
        // listo el arreglo
        console.log(listado_usuario);
    }

   



})

