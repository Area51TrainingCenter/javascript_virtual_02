class Producto{
    constructor(nombre,precio,stock){
        this.nombre=nombre;
        this.precio=precio;
        this.stock=stock 
    }  
    obtenerPrecio(){
        return this.precio;
    }
    obtenerStock(){
        return this.stock
    }
    stockDisponible() {
        let mensaje;
        if (this.stock >= 1) {
          //mensaje ="Hay stock disponible";
          mensaje=true;
        } else {
          //mensaje = "No hay stock disponible";
          mensaje=false;
        }
        return mensaje;
      }
}




let producto1=new Producto();
producto1.nombre="Microfono";
producto1.precio=50;
producto1.stock=1;

console.log(producto1);

console.log( producto1.obtenerPrecio())

console.log( producto1.stockDisponible())

let producto2=new Producto();

if(producto1.stockDisponible()){
    alert("si hay stock")
}
else{

}




