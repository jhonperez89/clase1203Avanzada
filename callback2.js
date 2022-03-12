//declaro la funcion principal
function crearUsuario(nombre,edad,callback){
    setTimeout(function(){
        let usuario ={
            nombreUsuario:nombre,
            edadUsuario:edad
        }
        //llamando al callback
        callback(usuario)
    },8000)
}

//llamo a la funcion principal

crearUsuario("pedro",23, function(usuario){
    if(usuario.edadUsuario >= 18){
        console.log("Bienvenido")
    }else{
        console.log("No puedes entrar")
    }
})