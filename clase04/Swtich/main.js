// 1 -10
let categoria=8;
/*if(categoria==1){
    
}
else if(categoria==2)
{

}
else if(categoria==3){

}..

else{}
*/

switch(categoria){
    case 1:
        print(1);
        break;
    case 2:
         print(2);
        break;
    case 3:
        print(3);
        break;
    case 4:
    case 5:
    case 6:
    case 7:
        print(" esta puede ser usada para un grupo de categorias");
        break;
    default:
        console.log("el valor ingresado no esta disponbile")
}

function print(par){
    console.log("categoaria seleccionado"+par)
}

let a=1;
let b="1";

if(1===1){
    console.log("es igual")
}else{
    console.log("diferentes")
}