var express = require('express');
var router = express.Router();
const fs = require('fs');

/* GET users listing. */
router.get('/', function(req, res, next) {

  fs.readFile("views/contact.html", (err, data)=>{
    
    if (err){
      console.log("Error de lectura contacto");
      res.end("Error")
    }else{
      res.end(data)
    }
  })


  // res.render('contact', {title: "Contact"})
});

module.exports = router;
