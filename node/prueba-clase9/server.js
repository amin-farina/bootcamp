const express = require('express');
const cors = require('cors');
const { user } = require('./constants');


const app = express();
const port = 3000;



app.use( (req, res, next) => {
    console.log("Time", Date.now())

    next();
})

function checkAuth (req,res,next) {
    if(true){
        next();
    }else {
        res.end("Usuario no autenticado");
    }

}

app.use(cors());

// app.use(express.static('static'))
app.use('/assets', express.static('static'))


app.get('/', (req,res)=>{
    res.send("Hola mundo")
})

app.get("/user",(req,res) => {
    res.json(user);
    console.log(user)
}
)

app.listen(port);