const express = require('express');
const taskModel = require('../schema/task')

const taskRoutes = express.Router();

taskRoutes.get("/", (req, res)=>{
    taskModel.find({},(err,data)=>{
        if (err){
            res.json({status: 500, data: err})
        }
        res.json({status: 200, data: data})
    })
})

taskRoutes.get("/:name", (req,res)=>{
    taskModel.find({name: req.params.name}, (err,data)=>{
        if(err){
            res.json({status: 500, data: err})
        }
        res.json({status:200, data: data})
    })
})



taskRoutes.post("/create", (req,res)=>{
    const task = new taskModel(req.body);

    task.save()
    .then((data)=>{
        res.json({status:200, data: data})
    })
    .catch((err)=>{
        res.json({status: 500, data: err})
    })
})



taskRoutes.delete("/:name", (req, res)=>{
    taskModel.findOneAndDelete({name:req.params.name},{},(err,data)=>{
        if(err){
            res.json({status: 500, data: err})
        }
        res.json({status: 200, data: data })
    })
})



taskRoutes.put("/:name", (req,res)=>{
    taskModel.findOneAndUpdate({name:req.params.name},req.body,{new:true},(err,user)=>{
        if(err){
            res.json({status: 500, data: err})
        }
        res.json({status: 200, data: data})
    })
})

module.exports = taskRoutes;