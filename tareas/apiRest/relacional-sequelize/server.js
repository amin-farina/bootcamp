const express = require('express');
const db = require("./models");
const apiRoute = require('./routes');
const log = require('./middlewares/log');


const app = express();

app.use(express.json());

app.get("/",log, (req, res)=>{
    res.json({status: 200, data: []})
})

app.use("/api",log, apiRoute)


db.sync().then(()=>{
    console.log("Conexion exitosa")
})
.catch(()=>{
    console.log("No se pudo conectar con la base de datos")
})


app.listen(3000, 'localhost', ()=>{
    console.log("Servidor funcionando")
});