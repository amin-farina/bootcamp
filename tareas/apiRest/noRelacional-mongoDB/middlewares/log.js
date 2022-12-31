function log(req,res,next){
    console.log("Reibimos una peticion", req.method,"en  ====>", req.baseUrl , req.path);

    next();
}

module.exports = log;