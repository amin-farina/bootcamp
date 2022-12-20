const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongoose');
const ejs = require('ejs');

// DataBase data
const url = "mongodb://127.0.0.1:27017/game-of-thrones";
const dbName = "game-of-thrones";
let db;


// * Connect with database
MongoClient.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true} ,(err, client)=>{
    if(err) {
        return console.log(err);
    }
    db = client;
    console.log("Conexion exitosa");
})

// ? Create new object for send database
const addNewQuote = {
    name: String,
    data: String
}
const Quote = MongoClient.model("Quotes", addNewQuote);


// ? Create app
const app = express(); // initialize express
app.set('view engine', 'ejs')


app.use(bodyParser.urlencoded({extended: true}));

app.listen(3000, () => {
    console.log('Escuchando en el puerto 3000')
})




// ! --------------------------- CRUD ---------------------------

// ! CREATE
app.post("/add", (req,res)=>{
    console.log("Esta es la informacion ->", req.body);
    const quote = new Quote({
        name: req.body.name,
        data: req.body.fecha
    })
    quote.save((err)=>{
        if(err){
           console.log(err);
        }else{
            res.status(200).json({message: "ok"});
            res.render("quotes")
        }
        
    })
    res.send('Mensaje enviado con exito');
    res.end(res.redirect("/"))

})

// ! READ  
app.get("/", (req, res)=>{
   async function reqFind(){
    await MongoClient
   }
    res.sendFile( __dirname + '/index.html');
})


