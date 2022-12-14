const http = require('http');
const fs = require('fs');

const server = http.createServer((request,response) => {

    // Example routes

    switch(request.url){
        case "/home":
        case "/":
            fs.readFile('./index.html', (err, data)=> {
                if(err){
                    console.log("Error de lectura, INDEX");
                    response.end("Error");
                }
                response.writeHead(200, "Success", {"Content-Type" : "text/html" });
                response.end(data)
            }) 
            break;
        case "/contact":
            fs.readFile('./contact.html', (err, data)=> {
                if(err){
                    console.log("Error de lectura, CONTACTO");
                    response.end("Error");
                }
                response.writeHead(200, "Success", {"Content-Type" : "text/html" });
                response.end(data)
            }) 
            break;
        default:
            const json = {
                status: 400,
                data: "Hubo un inconveniente",
            };

            response.writeHead(200, "Success", {"Content-Type" : "text/html" });
            response.end(JSON.stringify(json))
            break;
        }




    //EXAMPLE PDF 

    // content-type : application/pdf

    // response.writeHead(200, "Success", {"Content-Type" : "application/pdf" });

    // fs.readFile('./Fariña-Sebastian-Amin-cv.pdf', (err, data) =>{
    //     if (err){
    //         console.log("No se pudo leer el archivo");
    //         throw err;
    //     }

    //     response.end(data)
    // })



    // EXAMPLE
    //
    // content-type: application/json
    //
    // response.writeHead(200, "Success", {"Content-Type" : "application/json" });
    //
    // const json = {
    //     status: 200,
    //     data: [{
    //         name: "Amin",
    //         apellido: "Fariña"
    //     }]
    // }

    // response.end(JSON.stringify(json))




    //EXAMPLE WITH FILE .HTML
    //
    // Content-Type: text/html
    // response.writeHead(200, "Success", {"Content-Type" : "text/html" });
    // fs.readFile("./index.html", (err, data) => {
    //     if(err){
    //        fs.readFile("./error.html",(error,data2) =>{
    //         if(error){
    //             throw error;
    //         }
    //             response.end(data2);
    //        })
    //     }else{
    //         response.end(data)
    //     }
    // });
    console.log("Servidor esta funcionando");
})

server.listen(3000, "127.0.0.1", (err) => {
    if(err){
        console.log("Ocurrio un error:" , err);
    }
    console.log("Servidor Andando!")
});