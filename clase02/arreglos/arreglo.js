let nombre="Juan Carlos";

let codigo=123;

console.log(nombre);
let listado_nombre=[
    "Juan Carlos",
    "Diego",
    "Luciana",
    "Martin"]

console.log(listado_nombre);
// te DEVUELVE cantidad de elementos que tenga el arreglo
console.log(listado_nombre.length)

// los elementos en un arreglo esta ubicados meidante sus indices
// indices en cualquier arreglo empiezan 0 
// Acceso a los elementos también es por sus indices

console.log(listado_nombre[0])
console.log(listado_nombre[2])


// indice de un elmento en un arreglo es igual a la (posicion-1) 



let gustos=[];
console.log(gustos);
// agrega un elemento al final del arreglo
gustos.push("Videojuegos")
console.log(gustos);
gustos.push("Pc")
console.log(gustos);

//remover un elemento
gustos.pop()
console.log(gustos);


// Agregar un elemento al INICIO del arreglo
gustos.unshift("Televisores")
console.log(gustos);

// Remover al inicio del arreglo
gustos.shift();
console.log(gustos);



function fecha_formato(){
    //  Sábado 28 de Noviembre del 2020
    let fecha=new Date();
    console.log(fecha);
    let dia_semana=fecha.getDay();
    let dia_mes=fecha.getDate();
    let mes=fecha.getMonth();
    let anio=fecha.getFullYear();
   
    // mes // 10
     let meses=[
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
    ]

    let nombre_mes=meses[mes]
    
    // Dicimebre

    let dias=[
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sábado",]
    let nombre_dia=dias[dia_semana];



    let formato=nombre_dia+" "+dia_mes+" de "+ nombre_mes+" del "+anio; 
    return formato;
}

console.log(fecha_formato());
