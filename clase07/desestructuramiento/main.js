// Estructura de tipo arreglo

let persona=["Juan Carlos",22,"jcarlos@gamil.com"]

// accediendo al nombre
//let nombre=persona[0];

// accediendo al edad
//let edad=persona[1];

// accediendo al correo
//let correo=persona[2];

// desestructurando los datos
let [nombre,edad,correo]=persona;

//let [nombre,edad,correo]=["Juan Carlos",22,"jcarlos@gamil.com"]
//console.log(nombre)
//console.log(edad)
//console.log(correo)



let curso=["Javascript","Mañana","Sabados","48horas"];
//nombre del cursos , cantidad de horas
/*let [nombre_curso,turno,dia,horas]=curso;
console.log(nombre_curso)
console.log(turno)
console.log(dia)
console.log(horas)
*/
let [nombre_curso,,,horas]=curso;
// let [nombre_curso,,,horas]=["Javascript","Mañana","Sabados","48horas"]
//console.log(nombre_curso)
//console.log(horas)

// funcion que imprima los valores de curso Nombre , dia , horas
// debes utlizar el destructuramiento de datos 
// condicion : no puedes usar indices de arreglo para imprimri los datos
leercurso(curso)


function leercurso([nombre,,dias,horas]){
    console.log(nombre)
    console.log(dias)
    console.log(horas)
}



// Estructura de tipo objeto
let usuario={
    nombre_usuario:"Juan Carlos",
    edad:22,
    pais:"Perú",
    codidgo:1234,
  
}

let {nombre_usuario,pais,estado="ACTIVADO"}=usuario

console.log(nombre_usuario)
console.log(pais)
console.log(estado)

// crear una funciona que imprima el nombre de una persona , y su profesion
// considerar la profesion por defecto como Estudiante
let persona1={
    nombre:"JC",
    profesion:"Profesor"
}

let persona2={
    nombre:"Diego"
}

function leerPersona({nombre,profesion="Estudiante"}){
    console.log(`Bienvenido ${nombre} , su profesion es ${profesion}`)
}

leerPersona(persona1)
leerPersona(persona2)