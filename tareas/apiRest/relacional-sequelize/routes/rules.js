const express = require('express');
const rulesModel = require('../models/rules');

const rulesRoutes = express.Router();

rulesRoutes.get("/", async (req, res) => {
    const data = await rulesModel.findAll();
    res.json({status: 200, data: data})
})

rulesRoutes.get("/:name", async(req,res)=>{
    const data = await rulesModel.findOne({
        where: {
            name: req.params.name
        }
    })

    res.json({status: 200, data: data})
})



rulesRoutes.post("/create", (req,res)=>{
    console.log("New RULE ====>",req.body)
    const rule = new rulesModel(req.body);

    rule.save()
    .then((user)=>{
        res.json({status: 200, data: user})
    })
    .catch((err)=>{
        res.json({status: 500, data: err})
    })
})



rulesRoutes.put("/:name", async(req,res)=>{
    const data = rulesModel.update(req.body, {
        where:{
            name: req.params.name
        }
    });

    res.json({status: 200, data: data})
})

rulesRoutes.delete("/:name", async(req,res)=>{
    console.log("Delete === > ", req.body);

    rulesModel.destroy({
        where: {
            name: req.params.name
        }
    }).then((data)=>{
        res.json({status: 200, data});
    })
})

module.exports = rulesRoutes;