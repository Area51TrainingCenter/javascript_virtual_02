console.log("se cargo con exito el archivo main")
let url="https://sminnova.com/recurso_clase/api/todos";
/*
let xhr=new XMLHttpRequest();
xhr.open("GET",url);
xhr.send(null)

xhr.onreadystatechange=function(){
    if(xhr.status==200)
    {
        //console.log(xhr.readyState);
        if(xhr.readyState==4){
            console.log(xhr.responseText)
        }
    }
}*/
/*
let promesa=new Promise((resolve,reject)=>{
    if(estado){
        resolve();
    }else{
        reject();
    }
})
//
promesa.then(()=>{});
promesa.catch(()=>{});
*/

/*
fetch(url)
.then((data)=>{
    //transformas a json
    return data.json()
})
.then((data)=>{
 /// utilizar la información 
    console.log(data)
})*/



fetch(url)
.then((data)=>{return data.json()})
.then((data)=>{
   // console.log(data)
});




let url_login="https://sminnova.com/recurso_clase//api/usuario/login";
// string y el formData
datos={
    correo:"clasejs@gmail.com",
    password:"123456"
};

let datos_string=JSON.stringify(datos);
console.log(datos_string);

let data_form=new FormData();
data_form.append("correo","jose@gmail.com");
data_form.append("password","1234756")


let config={
    method:"POST",
    body:data_form
}
fetch(url_login,config)
.then((data)=>{return data.json()})
.then((data)=>{
    console.log(data);
})
