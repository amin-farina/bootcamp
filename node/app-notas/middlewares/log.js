function log(req,res,next){
    console.log("Recibi un log: ", req.baseUrl);
    console.log("En la ruta: ", req.path);
    console.log("Del tipo: ", req.method);

    next();
}

module.exports = log;