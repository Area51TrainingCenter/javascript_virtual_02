let nombre="Juan Carlos"
let apellido="Ramos Torriccelli"
let correo="jramos@gmail.com"


let usuario1={
    nombre:"Juan Carlos",
    apellido:"Ramos",
    correo:"jramos@gmail.com"
}

let usuario2={
    nombre:"Diego",
    apellido:"Ramos",
    correo:"diego@gmail.com",
}
let usuario3={
    nombre:"Martin",
    apellido:"Ramos",
    correo:"Martin@gmail.com",
}
let usuario_1=["juan Carlos","Ramos","jramos@gmail.com"]
let usuario_2=["Diego","Ramos","diego@gmail.com"]

//acceder a un dato de un arreglo
usuario_1[2] // correo 

//acceder a un dato de un objeto
console.log(usuario1.correo);
console.log(usuario1["correo"])
console.log(usuario1.nombre);
console.log(usuario1.apellido)

let usuarios=[usuario1,usuario2,usuario3];
console.log(usuarios)
console.log(usuarios[0]);
console.log(usuarios[0].nombre);


