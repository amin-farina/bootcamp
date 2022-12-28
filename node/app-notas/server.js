const express = require('express');
const MongoClient = require('mongoose');
const userRoute = require('./routes/route');
const log = require('./middlewares/log');
const authentication = require('./middlewares/authentication');

// DataBase data


// ? Create app
const app = express(); // initialize express
app.use(log);
app.use(express.json())

app.get("/", (req,res)=> {
    res.send("Hola mundo estoy funcionando");
})

app.get("/users", authentication, userRoute)

app.use(express.static('public'))


// * Connect with database
MongoClient.connect("mongodb://127.0.0.1:27017/users", (error) => {
    if(error) {
        return console.log("Ocurrio un error en la conexion en la base de datos", error);
    }else{
        console.log("Conexion exitosa");
    }
})


app.listen(3000, () => {
    console.log('Escuchando en el puerto 3000')
})

