let elemento_titulo= document.getElementById("titulo_site");
/*
elemento_titulo //  <h1 id="titulo_site">Titulo</h1>
 .innerText     // remplazar textos dentro del elemento
 .innerHtml     // remplazar contenido html dentro del elemento
 .classList     // el manejo de clases // add  remove
 .getAtrribute  // obtener atributos del elemento
 .setAtrribute  // obtener atributos del elemento
 */
// Para actualizar los valores de un elemento
//elemento_titulo.innerText="<u>Este</u> texto fue cambiado al  mediante JS";
//elemento_titulo.innerHTML="<u>Este</u> texto fue cambiado al  mediante JS";

// Para obtener los valores de texto y html de un elemento
/*
console.log(elemento_titulo.innerText)
console.log(elemento_titulo.innerHTML)
*/


console.log(elemento_titulo.classList);
// me pregmite agregar clases
elemento_titulo.classList.add("agregad-por-js")
elemento_titulo.classList.remove("red")

let elemento_imagen=document.getElementById("imagen");
let ruta_foto_actual=elemento_imagen.getAttribute("src");
console.log(ruta_foto_actual)

//setAttribute("atributo","valor para actualizar");
elemento_imagen.setAttribute("src","https://allegra.flowersetcfresno.com/pic/2981105_full-fondos-de-pantalla-con-fotos-esta-pequena-app-de-microsoft-te-cambia-el-fondo-de-pantalla-en.jpg");
