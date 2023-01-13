import express from 'express';
import config from './config.js';
import db from './db.js';
import apiRoute from './routes/index.js';

const app = express();

app.use(express.json());

app.use("/api", apiRoute);

db.sync().then(()=>{
    app.listen(config.SERVER_PORT)
}).catch((err)=>{
    console.log("No se pudo conectar a la base de datos");
    console.log(err);
})




