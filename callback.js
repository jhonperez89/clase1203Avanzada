//Declarando la funcion 
function principal (nombre, callback){
    setTimeout(function(){
        //Proceso(¿que hace esta funcion?)
        console.log("hola "+nombre)
        //llamo al callback
        callback()
    },4000)
}
principal("pepito", function(){
    console.log("como estas soy el callback")
})