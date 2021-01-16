/*let numero="5";
//console.log(typeof numero);
if(typeof numero!="number"){
   // throw "ingresa un numero para ejectuar la tarea" ;
}else{

    if(numero<10){
        console.log("Menor")
    }
    else{
        console.log("Mayor")
    }
}*/

let prod=new Producto(1,10,50.0);
let stock_nuevo=prompt("actualizar Stock")

let igv=prod.precio*0.18
try{
    prod.actualizarStock(stock_nuevo);
}
catch(e){
    console.log(e);
    alert("Ocurrio un error en la página , intenta cargar nuevamnete")
}


console.log("se sigue ejecutando mi codigo sin prolbmeas")


let producto2=new Producto();
let igv=producto2.obtenerIGV();