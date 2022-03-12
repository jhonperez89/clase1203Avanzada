function iniciar (){
    console.log("Estoy iniciando")
}

function Procesar (){
    setTimeout(function (){
        console.log("Estoy procesando")
    },5000)
  
}

function Terminar (){
    console.log("Estoy termninando")
}

iniciar()
Procesar()
Terminar()