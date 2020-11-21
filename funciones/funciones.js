/*
palabra_reservada Nombre_de_funcion (_parametros_)
{
    __Ambito de la función
}
*/
// creando a la funcion con parametro
function tarea_uno(par1,par2){
    let suma;
    suma=par1+par2;
    console.log("estoy imprimiendo desde la función");
    console.log(suma);
}

// creando a la funcion sin parametro
function tarea_dos(){
    let suma;
    suma=10+30;
    console.log(40);
}

// ejecutar
/*tarea_uno(10,20)
tarea_uno(50,40)
tarea_uno(70,10)
tarea_uno(56,2)*/

/*
tarea_dos()
tarea_dos()
tarea_dos()
tarea_dos()
*/

function igv(monto){
    let monto_igv=monto*0.18;
    return monto_igv;

    /*console.log("calculando IGV:")
    console.log(monto_igv);*/
}
function limpiarInput(){
    //$("input").val("");

}

/** flujo de cobranza **/
/*
items de carrito 
calcular totales
calcular igv */
 /* let igv_productos= igv(totales) // 100.52*/
/*emitir factura 
  imprimir igv_productos en factura*/
/*enviar correo
*/


let numero1;
let numero2;

function getNum1(){
    numero1= prompt("ingresa numero 1");
}

function getNum2(){
    numero2=prompt("ingresa numero 2");
}

function sumar(){
 let suma=parseInt(numero1)+parseInt(numero2);
 //console.log(suma)
 // API document 
 document.getElementById("resultado").innerText=suma;

}