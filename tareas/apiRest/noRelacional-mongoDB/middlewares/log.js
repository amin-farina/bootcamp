function log(req,res,next){
    console.log("Method ===>", req.method,"//\\ URL  ====>", req.baseUrl , req.path);

    next();
}

module.exports = log;