const express = require('express');
const route = express.Router();
const userModel = require('../schema/user')

route.get("/", (req, res) => {
    userModel.find({}, (err, user) => {
        if(err){
            res.json({status: 500, data: err})
        }
            res.json({status: 200, data: user})
    })
})

route.get("/:id", (req, res) => {
    userModel.find({id: req.params.id}, (err, user) => {
        if(err){
            res.json({status: 500, data: err})
        }
            res.json({status: 200, data: user})
    })
})

route.post("/create", (req, res) => {
    console.log("Body ===>", req.body);
    const user = new userModel(req.body);
    user
    .save()
    .then((doc)=>{res.json({status: 200, data: doc})})
    .catch(err => {res.json({status: 200, data: err})})
})

route.delete("/:id" , (req, res) => {
    userModel.findOneAndDelete({id: req.params.id}, {}, (err, user) => {
        if(err){
            res.json({status: 500, data: err})
        }
        res.json({status: 200, data: user})
    })
})

route.put("/:id" , (req, res) => {
    userModel.findOneAndUpdate({id: req.params.id}, req.body , {new: true} ,(err, user) => {
        if(err){
            res.json({status: 500, data: err})
        }
        res.json({status: 200, data: user})
    })
})

module.exports = route