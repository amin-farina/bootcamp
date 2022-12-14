const http = require('http');

const server = http.createServer((request,response) => {
    response.writeHead(200, "Exito", {"Content-Type" : "text/html" });

    console.log("request", request)
    console.log("Servidor esta funcionando");

    response.end("Respuesta finalizada")
})

server.listen(3000, "127.0.0.1", (err) => {
    if(err){
        console.log("Ocurrio un error:" , err);
    }
    console.log("Servidor Andando!")
});