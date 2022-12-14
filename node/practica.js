// Javascript es dinamico --> Una variable puede utilizar muchos tipos.
// Es interpretado -> 
// Es DEBIL tipado -> 
// 

// let variable = "Hola mundo";
// const edad = 25;

// function mayorQue30(){

// }

// const casa = {
//     color: "Blanco",
//     m2: 200,
//     externo: false,
//     direccion: {
//         calle: "Avenida",
//         altura: "105"
//     }
// }

// const indefinido = undefined;
// const nulo = null;
// const simbolos = Symbol();

// console.log("Tipo variable: ", typeof variable);
// console.log("Tipo edad: ", typeof edad);
// console.log("Tipo funcion: ", typeof mayorQue30);
// console.log("Tipo casa: ", typeof casa);
// console.log("Tipo indefinido: ", typeof indefinido);
// console.log("Tipo nulo: ", typeof nulo);
// console.log("Tipo simbolos: ", typeof simbolos);
// console.log("Color de casa: ", casa.color);



// Comparaciones

// No estricta
// console.log(2 == "2")

//  Estricta
// console.log(2 === "2")
// console.log(2 !== "2")


// console.log("Saludo: ", typeof variable.toString())


// Ternarios

// let ternario = 2 > 2 ? "Es mayor" : 2 < 2 ? "es menor" :  "es igual"
// console.log(ternario)



// Promesas

// async function prueba(){
//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => resolve(500), 5000);
//     })

//     const resultado = await promise;

//     console.log (resultado);
// }

// prueba();


// Otra promise

// function callback(resultado){
//     console.log("Callback: " , resultado);
// }

// function opereacion(a, b , cb){
//     let result = 0;

//     setTimeout(()=>{
//         result=a+b;
//         cb(result);
//     }, 5000);
    
//     console.log("Resultado: ", result)
// }

// opereacion(2,3,callback)




// Promesas de error


// async function promesaDeError(){
//     const promesa = new Promise ((resolve, reject) => {
//         setTimeout(()=>reject("Hubo un error"), 5000);
//     })

//     try {
//         const resultado = await promesa;
//         console.log(resultado)
//      } catch(error){
//          console.log("Error de promesa", error)
//      } finally {
//          console.log("Promesa finalizada")
//      }
    

// }

//  promesaDeError()
// .then((data) => console.log(data))
// .catch((error) => console.log("ERROR DE PROMESA: ", error))
// .finally(() => console.log("Promesa finalizada"))


// Peticiones o fetch 

// function obtenerData(){
//     return fetch("https://pokeapi.co/api/v2/pokemon/ditto")
//     .then((data)=> data.json())
//         .then((json) => console.log("Esto es el JSON: ", json))
//     .catch((err) => console.log("HUbo un error: ", err))
//     .finally(()=> console.log("Fetch finalizado"))
// }

// obtenerData()

// async function obtenerDataAsync(){
//     try{
//         const data = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
//         const json = await data.json();
//         console.log("Esto es el json: ", json)
//     }catch (err){
//         console.log("Error => ", err);
//     }finally{
//         console.log("FINALIZO!")
//     }
// }

// obtenerDataAsync();






//  Destructuring

// const arreglo = [1 ,2 ,3 ,4 ,5 ,6];

// const segundoElemento = arreglo[1];

// const [, segundoElemento] = arreglo;

// console.log("segundo elemento: ", segundoElemento, arreglo);