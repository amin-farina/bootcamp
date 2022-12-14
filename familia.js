let familia = [
    {
        nombre: "Amin",
        pareja: "Camila", 
    },
    {
        nombre: "Camila",
        pareja: "Amin"
    },
    {
        nombre: "Alejandro",
        pareja: "Violeta"
    },
    {
        nombre: "Violeta",
        pareja: "Alejandro"
    }
]
console.log(familia.length)
console.log(
    familia[Math.floor(Math.random()*familia.length)]
)
// while (familia.length > 0){
//     let sorteado1 = familia[Math.floor(Math.random()*familia.length)];
//     let sorteado2 = familia[Math.floor(Math.random()*familia.length)];
//     while(sorteado1.nombre == sorteado2.pareja){
//         sorteado2 = familia[Math.floor(Math.random()*familia.length)];
//     }
//     console.log(sorteado1.nombre, " -> ", sorteado2)
// }

function sortear(lista) {
    return (Math.floor(Math.random()*familia.length))
}

function buscarEnLista(lista, elem){
    return lista.indexOf(elem) == -1 ? false : true
}
let sorteo1 = sortear(familia)
console.log(sorteo1)

console.log(familia.indexOf(sorteo1))