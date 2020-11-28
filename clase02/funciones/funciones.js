/*** Ambito de funcion y Declaración convencional ***/
let dato1="123";
function tarea1(){
    // ambito de la función
    let num1=10;
    let num2=20;
    let suma=num1+num2;
    //console.log(suma);
    return suma;
}

let resultado_suma=tarea1(); // 30

console.log(resultado_suma);

function tarea2(nombre,edad,correo){
    // ambito de funcion existe el parametro
    let mensaje="Bienvenido al curso "+nombre;
    console.log(mensaje);
}

tarea2("Juan Carlos");
tarea2("Diego",25,"jramos@gmail.com");


function tarea3(){
    let dato1="456";
    console.log("estoy ejecutando una variable global desde es una función")
    console.log(varibale_global);
    console.log("Quiero ejecutra una variable que existe en otra funcion")
    //console.log(num1);
}
tarea3();

/** Declaración de tipo Flecha **/
// let nombre_de_funcion= (parametros)=>{ ambito de tu funcion}
let tarea5=(correo)=>{
    console.log(correo)
};
/*
let nueva_suma=(num1,num2)=>{
    let suma=num1+num2;
    return suma;
}
let nueva_suma=(num1,num2)=>{ return num1+num2}
*/

let nueva_suma_1=(num1,num2)=> num1+num2

function nueva_suma_2(num1,num2){
    return num1+num2;
}

let tarea6=()=>"Hola"
tarea6();

let calcularIGV=(monto)=>monto*0.18;
/*
function calcularIGV(monto){
    return monto*0.18
}
*/




console.log(calcularIGV(100))
