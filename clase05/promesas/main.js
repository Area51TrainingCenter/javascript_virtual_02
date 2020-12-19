/*console.log(1)

let numero= devolvervalor();

console.log(numero)

let igv=numero*0.18;
console.log(igv);

console.log("Mostrar fecha al usuario")
console.log("Mostrar bienvenida al usuario")

*/

function devolvervalor(){

    //peticion a un webservice y que ese service demora 2 segundos en respnode
   
    
}

//setTimeout(nombre de una funcion, 2000)



console.log("N1")

/*let numero2=new Promise()*/
/*
let igv2=numero2*0.18;
console.log(igv2);

console.log("Mostrar fecha al usuario")
console.log("Mostrar bienvenida al usuario")
*/



//** definiendo una pomesa **/
/*let promesa1=new Promise( (resolve,reject)=>{
    setTimeout(function(){
        let estado=true;
        if(estado==true){
            resolve();
        }else{
            reject();
        }
    },2000)
} )

promesa1.then(function(){
    console.log("Si se ve este mensaje es por que se ha ejecutado el metodo resolve dentro de la promesa")
})
promesa1.catch(function (){
    console.log("Si se ve este mensaje es por que se ha ejecutado el metodo reject dentro de la promesa")
})
*/

console.log(1)
numero_2=new Promise((resolve,reject)=>{
    setTimeout(function(){
        resolve();
    },5000)
})
numero_2.then(()=>{
    console.log(2)
})
numero_2.catch(()=>{

})
console.log(3)

console.log("Mostrar fecha al usuario")
console.log("Mostrar bienvenida al usuario")



/*
(resolve,reject)=>{}

function (resolve,reject){

    setTimeout(function(){
        // console.log("luego de 2 segundos")
       let respuesta=true;
       if(respuesta==true){
           /// exitoso , tuve respuesta
           resolve();
       }else{
           reject();
           /// error, hubo un problema en la comunicacion
       }
       /*let edad=20;
       if(edad>18){
            //exito , puedes ingresar
       }
       else{
            //error ,  no vale
       }


     },2000)
}*/