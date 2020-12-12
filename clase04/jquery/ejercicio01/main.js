/*$("#foto1").click(function(){
    let path=$("#foto1").attr("src");
    $("#foto-principal").attr("src",path);
})

$("#foto2").click(function(){
    let path=$("#foto2").attr("src");
    $("#foto-principal").attr("src",path);
})

$("#foto3").click(function(){
    let path=$("#foto3").attr("src");
    $("#foto-principal").attr("src",path);
})
*/
$(".item-foto").click(function(){
    $(".item-foto").removeClass("activo");
    $(this).addClass("activo");
    let path=$(this).attr("src");
    let titulo=$(this).attr("title");
 
    
    $("#texto-principal").html(titulo);
    
    $("#foto-principal").attr("src",path);
    
})