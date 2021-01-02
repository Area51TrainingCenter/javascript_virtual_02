
validarLogin();


let formulario=document.getElementById("login-form");
let ingresar=document.getElementById("ingresar");
let mensaje=document.getElementById("mensaje");

ingresar.addEventListener("click",()=>{
    let datos=new FormData(formulario);
    let url="http://sminnova.com/recurso_clase//api/usuario/login";
    
    let config={
        method:"POST",
        body:datos
    }

    fetch(url,config)
    .then((data)=>{return data.json()})
    .then((data)=>{
       
       let resultado=data[0];
       resultado.estado
        console.log(resultado)

      if(resultado.estado==false){
       //  console.log("Los datos ingresados son incorrectos")
       mensaje.innerHTML=` <div class="alert alert-danger mt-4" role="alert">
                                Datos ingresados son incorrectos
                            </div>`
                            setTimeout(function(){
                                mensaje.innerHTML="";
                            },3000)
       }
       else{
           console.log(resultado)
            localStorage.estadoLogin=true;
            localStorage.idUsuario=resultado.id
            localStorage.nombresUsuario=resultado.nombres;
            
            window.location.href="principal.html"
       }
    })
})




function validarLogin(){
    if(localStorage.estadoLogin=="true"){
        window.location.href="principal.html"
    }
    else{
        console.log("el usuario nunca se ha logeado");
    }
}


