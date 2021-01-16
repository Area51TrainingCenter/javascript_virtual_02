


let url="productos.json"

let productos_carrito=[];
let listado_productos;
let contenedor_carrito=document.getElementById("productos_carrito")
let contenedor_productos=document.getElementById("productos");

validarProductosAnteriores()


let opc_carrito=document.getElementById("ver-carrito");

opc_carrito.addEventListener("click",()=>{
    document.getElementById("productos_carrito").classList.remove("hide")
})

function cerrar_carrito(){
    console.log("cerrar");
    document.getElementById("productos_carrito").classList.add("hide")
}

obtenerProductos()


function obtenerProductos(){


    fetch(url)
    .then((data)=>{return data.json()})
    .then((data)=>{
        
        listado_productos=data;
        let temp="";
       /* for(let item of data){
            temp=temp+`<article class="producto">
                <img src="${item.foto}" alt="">
                <h2>${item.nombre}</h2>
                <button onclick="agregar_carrito()">Agregar al carrito</button>
            </article>`;
        }*/


        for(var i=0;i<data.length;i++){
            temp=temp+`<article class="producto">
                <img src="${data[i].foto}" alt="">
                <h2>${data[i].nombre}</h2>
                <button onclick="agregar_carrito(${i})">Agregar al carrito</button>
            </article>`;
        }

        /*for(let [index,item] of data.entries()){
            temp=temp+`<article class="producto">
                <img src="${item.foto}" alt="">
                <h2>${item.nombre}</h2>
                <button onclick="agregar_carrito(${index})">Agregar al carrito</button>
            </article>`;
        }*/


        contenedor_productos.innerHTML=temp;
    })

    
}

function agregar_carrito(indice){

    let producto_seleccionado= listado_productos[indice];
    productos_carrito.push(producto_seleccionado)
    // guardar una copia de este arreglo en el objeto local storage
    localStorage.productos_carrito=JSON.stringify(productos_carrito);
    console.log(localStorage.productos_carrito)
    // console.log(productos_carrito);
   actualizarDatosCarrito()
}



function actualizarDatosCarrito(){

    document.getElementById("cantidad_carrito").innerHTML=productos_carrito.length
    let temp="";
    for(let item of productos_carrito){
        temp=temp+`<article class="producto-carrito">
        <div class="forma">
            <img src="${item.foto}" alt="">
            <h2>${item.nombre}</h2>
            </div>
            
        </article>`;
    }
    contenedor_carrito.innerHTML=temp;
}


function validarProductosAnteriores(){
    
    if(localStorage.productos_carrito==undefined){
        console.log("no hay registros previos de información de productos")
        productos_carrito;
    }
    else{
        console.log("si hay productos registrados");
        productos_carrito=JSON.parse(localStorage.productos_carrito)
        actualizarDatosCarrito()
        //productos_carrito
    }
}