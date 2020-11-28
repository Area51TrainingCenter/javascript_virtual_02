let fecha="28 de novimebre del 2020";
console.log(fecha);
let nueva_fecha=new Date();

/*variable nueva fecha contiene todas las caracteristicas del objeto date*/
/*console.log(nueva_fecha)*/

// obtener dia del mes

let dia_del_mes=nueva_fecha.getDate()
console.log("dia del mes: "+dia_del_mes)
let mes_actual=nueva_fecha.getMonth();
console.log("Mes Actual: "+(mes_actual))
let year=nueva_fecha.getFullYear();
console.log("Año actual: "+year);

let dia_de_semana=nueva_fecha.getDay()
console.log("día de la semana: "+ (dia_de_semana))

let horas=nueva_fecha.getHours();
console.log(horas)
let minutos=nueva_fecha.getMinutes();
console.log(minutos);
let segundos=nueva_fecha.getSeconds();
console.log(segundos)

formato_hora=horas+":"+minutos+":"+segundos

console.log(formato_hora);



let meses=[
    "ene",
    "Feb",
    "Mar",
    "Abr",
    "Mayo",
    "Jun",
    "Jul",
    "Ago",
    "sep",
    "Oct",
    "Nov",
    "Dic",
    ]
    console.log(meses)
let dias=[
    "Dom",
    "Lun",
    "Mar",
    "Mier",
    "Juev",
    "Vier",
    "Sab",
   
]
console.log(dias);