class SitioTuristico{
    constructor(id,nombre,direccion,latitud,longitud){
        this.id=id;
        this.nombre=nombre;
        this.direccion=direccion;
        this.latitud=latitud;
        this.longitud=longitud
    }

    obtenerUbicacion(){
        let ubicacion={
            latitud:this.latitud,
            longitud:this.longitud
        }
        return ubicacion;
    }
    estaEnLima(){
        let estado=false;
        if(this.direccion=="Lima"){
            estado=true;
        }else{
            estado=false;
        }
        return estado;
    }



}