const express = require('express');

const server = express();
const port = 3000

server.get("/", (req, res) => {
    res.send("Hola mundo")
})

server.get("/", (req,res)=>{
    res.send("Hola mundo")
})

server.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`)
});

// ? C => CREATE => POST
// ! R => READ => GET
// * U => UPDATE => PUT | PATCH
// ? D => DELETE => DELETE
