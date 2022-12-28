const express = require('express');
const route = express.Router();
const userModel = require("../schemas/user");






// ! --------------------------- CRUD ---------------------------





// ! READ
route.get("/", (req, res)=>{
    userModel.find({},(err, data)=>{
        if (err){
            console.log("Error buscando usuarios" )
            res.json({
                status: '500',
                data: err
            })
        }else{
            console.log("Se encontro correctamente los datos de la base");
            res.json({
                status: 200,
                connection: ok,
                data
            });
        }
    })
})


route.get("/:id",(req,res)=>{
    userModel.find({id: req.params.id}, (err, data)=>{
        if(err){
            res.json({
                status: 500,
                err
            })
        }else{
            res.json({
                status: 200,
                data
            })
        }
    })
})

// ! CREATE
route.post("/create", (req, res)=>{
    console.log("POST ==> ", req.body);
    
    const user = new userModel(req.body);
    
    user
        .save()
        .then((data2)=>{
            res.json({
                status: 200,
                data: data2 
            })
        })
        .catch((error)=>{
            res.json({
                status: 500,
                data: error
            })
        })
})

// ! UPDATE

route.put("/:id", (req,res)=>{
    userModel.find(
        {id:req.params.id},
        req.body,
        {new:true}, 
        (err, data)=>{
            if(err){
                res.json({
                    status: 500,
                    data: err
                })
            }
            res.json({
                status: 200, 
                data: data})
    })
})


// ! DELETE

route.delete("/:id", (req, res) =>{
    userModel.find(
        {id:req.params.id},
        {},
        (err, data)=>{
            if(err){
                res.json({
                    status: 500,
                    data: err
                })
            }   
            res.json({
                status: 200,
                data: data
            })
        }
    )
})


module.exports = route;