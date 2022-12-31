const express = require('express');
const rulesModel = require('../schema/rules');

const rulesRoutes = express.Router();

rulesRoutes.get("/", (req, res)=>{
    rulesModel.find({}, (err,rule)=>{
        if (err){
            res.json({status: 500, data: err})
        }
        res.json({status: 200, data: rule })
    })
})

rulesRoutes.get("/:name", (req,res)=>{
    rulesModel.find({name: req.params.name}, (err, rule)=>{
        if (err){
            res.json({status: 500, data: err})
        }
        res.json({status: 200, data: rule})
    })
})

rulesRoutes.post("/create", (req, res)=>{
    const rule = new rulesModel(req.body);

    rule.save()
    .then((rule)=>{res.json({status: 200, data: rule})})
    .catch((err)=>{res.json({status: 500, data: err})})    
})

rulesRoutes.delete("/:name", (req,res)=>{
    rulesModel.findOneAndDelete({name: req.params.name}, {}, (err,rule)=>{
        if(err){
            res.json({status: 500, data: err})
        }
            res.json({status: 200, data: rule})
    })
})

rulesRoutes.put("/:name", (req,res)=>{
    rulesModel.findOneAndUpdate({name: req.params.name}, req.body ,{new:true}, (err,rule)=>{
        if(err){
            res.json({status:500, data: err})
        }
        res.json({status:200, data: rule})
    })
})

module.exports = rulesRoutes
