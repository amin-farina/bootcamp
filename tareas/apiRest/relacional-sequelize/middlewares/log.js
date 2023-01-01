function log(req,res,next){
    console.log("Method ===>", req.method,"<<|>> URL  ====>", req.baseUrl , req.path, "<<|>> BODY ===> ", req.body);

    next();
}

module.exports = log;