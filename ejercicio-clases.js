// Bucles

for(let i = 0; i < 10; i+=2){
    console.log("El valor es: ", i);
}

const persona = {
    name: "Amin",
    lastName: "Fariña"
}

for(let property in persona){
    console.log("property", persona[property])
}

while(persona.name === "Amin"){
    //proceso
}

do{
    //proceso
}while(persona.lastname="Fariña")



// Funciones 

function nameFunction( {params1, params2}:{params1: any; params2: any;} )
    /*Propiedades o atributos que necesita para ejecutarlo*/
{

}

// this hace referencia al contexto al cual esta siendo llamado