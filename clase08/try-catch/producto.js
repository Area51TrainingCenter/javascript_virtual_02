class Producto{
    constructor(id,stock,precio){
        this.id=id
        this.stock=stock;
        this.precio=precio;
    }
    obtenerStock(){
        return this.stock;
    }
    actualizarStock(valor){

        if(isNaN(valor) || typeof valor!="number"){
           // no es un valor numerico
            throw "El valor debe ser un numero , revisa tus datos"
        }
        else{
            this.stock=this.stock+valor;
        }
        
    }
    obtenerIGV(){
        return this.precio*0.18;
    }


}