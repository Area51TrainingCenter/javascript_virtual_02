let listadoSitiosTuristicos=[];
function obtenerSitios(){
    let url="http://sminnova.com/restapitrujillo/sitiosturisticos";
    fetch(url)
    .then((data)=>{return data.json()})
    .then((data)=>{
        console.log(data);
        for(let item of data){
            let sitio=new SitioTuristico(item);
            listadoSitiosTuristicos.push(sitio)
        }
        mostarListaSitios(listadoSitiosTuristicos)
    })
}



function mostarListaSitios(lista){
    let temp="";
    for(let [index,item] of lista.entries()){
        temp=temp+`<li class="list-group-item" onclick="ver_detalle_sitio(${index})">${item.nombre}</li>`;
    }
    document.getElementById("listado-sitios").innerHTML=temp;
}


function ver_detalle_sitio(indice){
    
    console.log(listadoSitiosTuristicos[indice]);

    console.log(listadoSitiosTuristicos[indice].obtenerUbicacion());

}
/*

sitio_turistico={
    categoria: "4",
    correo: "mdh.imageninstitucional@gmail.com",
    direccion: "A 14 km. al noroeste de la ciudad de Trujillo.",
    estado: "1",
    horario_atencion: "Todo el día",
    id: "45",
    instagram: "https://www.instagram.com/",
    latitud: "-8.0783",
    longitud: "-79.1207",
    nombre: "BALNEARIO DE HUANCHACO",
    nombre_en: "HUANCHACO BEACH",
    nombre_fr: "HUANCHACO BEACH",
    pagina_web: "http://mdh.munihuanchaco.gob.pe/",
    sello_turistico: "0",
    telefono: "",
    telefono_action: "",
    tipo_amigos: "1",
    tipo_familia: "1",
    tipo_ingreso: "2",
    tipo_pareja: "1",
    tipo_sitio: "0",
    tipo_solo: "1",
    twitter: "https://twitter.com/",
    usuario_creacion: "1",
    usuario_modificacion: "1",
}

//let {id,nombre,direccion,latitud,longitud,foto_principal}=sitio_turistico;



//console.log(id,nombre,direccion,latitud,longitud,foto_principal)
//recibeDatos(sitio_turistico.id,sitio_turistico.nombre,sitio_turistico.direccion,sitio_turistico.latitud,sitio_turistico.longitud,sitio_turistico.foto_principal);

//recibeDatos(id,nombre,direccion,latitud,longitud,foto_principal)


/*function recibeDatos(id,nombre,direccion,latitud,longitud,foto_principal){
    console.log(id,nombre,direccion,latitud,longitud,foto_principal)
}*/
/*
recibirDatos(sitio_turistico)


function recibirDatos({id,nombre,direccion,latitud,longitud,foto_principal}){
    console.log("estamos usando los valores desestructurados")
    console.log(id,nombre,direccion,latitud,longitud,foto_principal)
}
*/
