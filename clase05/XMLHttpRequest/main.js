

/*
readyState del objeto XMLHttpRequest
0 No inicializado (objeto creado, pero no se ha invocado el método open)
1 Cargando (objeto creado, pero no se ha invocado el método send)
2 Cargado (se ha invocado el método send, pero el servidor aún no ha respondido)
3 Interactivo (se han recibido algunos datos, aunque no se puede emplear la propiedad responseText)
4 Completo (se han recibido todos los datos de la respuesta del servidor)
*/
let respuesta;

let xhr=new XMLHttpRequest();
let url="https://jsonplaceholder.typicode.com/todos/1"
xhr.open("GET",url)
xhr.send()

xhr.onreadystatechange=function(){

    if(xhr.status==200){

        if(xhr.readyState==4){
            
            console.log(xhr.responseText);
            respuesta= JSON.parse(xhr.responseText)
         
            console.log(respuesta);
            console.log(respuesta.title)
            console.log(respuesta.id)
            let mensaje=document.getElementById("mensaje");
            mensaje.innerText=respuesta.id +" "+respuesta.title ;
        }
    }


    
}





/*
GET  > obtiene 
POST > envia*/
