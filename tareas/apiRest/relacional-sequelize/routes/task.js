const express = require("express");
const taskModel = require('../models/task')

const taskRoutes = express.Router();

taskRoutes.get("/", async (req,res)=>{
    const data = await taskModel.findAll();
    res.json({status:200, data: data});
})

taskRoutes.get("/:name", async(req,res)=>{
    const data = await taskModel.findOne({
        where: {
            name: req.params.name
        }
    })

    res.json({status: 200, data: data})
})

taskRoutes.post("/create", (req,res)=>{
    const task = new taskModel(req.body);

    task.save()
    .then((task)=>{
        res.json({status:200, data: task})
    })
    .catch((err)=>{
        res.json({status: 500, data: err})
    })
})

taskRoutes.delete("/:name", async(req,res)=>{
    taskModel.destroy({
        where:{
            name: req.params.name
        }
    }).then((task)=>{
        res.json({status: 200, data: task})
    }).catch((err)=>{
        res.json({status: 500, data: err})
    })
})


taskRoutes.put("/:name", async(req,res)=>{
    const data = await taskModel.update(req.body, {
        where:{
            name: req.params.name
        }
    })
    res.json({status: 200, data: data})
})

module.exports = taskRoutes;