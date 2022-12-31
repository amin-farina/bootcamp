const express = require('express');
const log = require('./middlewares/log');
const mongoose = require('mongoose');
const userRoute = require('./routes/user');
const rulesRoute = require('./routes/rules');
const taskRoute = require('./routes/task');

const app = express();

app.use(express.json());
app.use("/user",log, userRoute);
app.use("/rules",log, rulesRoute);
app.use("/task", log, taskRoute);


mongoose.connect("mongodb://127.0.0.1:27017/users", (error) => {
    if(error){
        console.log("No se pudo establecer la conexion con MONGOOSE");
    }else{
        console.log("Conexion exitosa con Mongoose")
    }
})

app.listen(3000);