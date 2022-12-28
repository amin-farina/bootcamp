const express = require('express');
const userRoute = require('./routes/user');
const log = require('./middlewares/log');
const mongoose = require('mongoose');

const app = express();


app.use(express.json());
app.use("/user",log, userRoute);

mongoose.connect("mongodb://127.0.0.1:27017/users", (error) => {
    if(error){
        console.log("No se pudo establecer la conexion con MONGOOSE");
    }else{
        console.log("Conexion exitosa con Mongoose")
    }
})

app.listen(3000);