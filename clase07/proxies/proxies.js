class Producto{
    constructor(nombre,precio){
        this.nombre=nombre
        this.precio=precio
    }
}
var permisos="admin"
let producto1=new Producto("celular",500)

//console.log(producto)

//console.log(producto.nombre)



let configProxie={
    get(objeto,propiedad){
      //  console.log(valor)
       // console.log(propiedad)
       if(permisos=="admin"){
           return objeto[propiedad]
       }
       else{
           return "no estas autorizado para ver los datos";
       }
      // 
    },
    set(objeto,propiedad,valor){
       // console.log("valor a modificar " +valor)
        
       if(propiedad=="precio"){
            if(typeof valor=="number"){
                objeto[propiedad]=valor;    
            }
            else{
                console.log("El valor para el precio debe ser un número")
            }
       }
       else{
            objeto[propiedad]=valor;
       }
    }


}




let productoConProxie=new Proxy(producto1,configProxie);

//console.log(producto1)

//console.log(objeto)
// accediendo a un valor
console.log(productoConProxie.nombre)
console.log(productoConProxie.precio)


// actualizar un valor
productoConProxie.precio=45;

console.log(productoConProxie.precio)