// Javascript es dinamico --> Una variable puede utilizar muchos tipos.
// Es interpretado -> 
// Es DEBIL tipado -> 
// 

let variable = "Hola mundo";
const edad = 25;

function mayorQue30(){

}

const casa = {
    color: "Blanco",
    m2: 200,
    externo: false,
    direccion: {
        calle: "Avenida",
        altura: "105"
    }
}

const indefinido = undefined;
const nulo = null;
const simbolos = Symbol();

console.log("Tipo variable: ", typeof variable);
console.log("Tipo edad: ", typeof edad);
console.log("Tipo funcion: ", typeof mayorQue30);
console.log("Tipo casa: ", typeof casa);
console.log("Tipo indefinido: ", typeof indefinido);
console.log("Tipo nulo: ", typeof nulo);
console.log("Tipo simbolos: ", typeof simbolos);
console.log("Color de casa: ", casa.color);