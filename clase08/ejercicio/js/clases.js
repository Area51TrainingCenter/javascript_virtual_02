class SitioTuristico{
    constructor({id,nombre,direccion,latitud,longitud,foto_principal}){
        this.id=id;
        this.nombre=nombre;
        this.direccion=direccion;
        this.latitud=latitud;
        this.longitud=longitud
        this.foto_principal=foto_principal
    }
    obtenerUbicacion(){
        return {
            lat:this.latitud,
            long:this.longitud
        }

    }

}

class Mapa{
    constructor(titulo,lat,long){
        this.titulo=titulo;
        this.long=long;
        this.lat=lat;
    }

}