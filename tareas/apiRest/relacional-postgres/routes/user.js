const express = require("express");
const userModel = require("../models/user");

const userRoutes = express.Router();


// * READ
userRoutes.get("/", async (req, res) => {
  const data = await userModel.findAll();
  res.json({ status: 200, data: data });
});

userRoutes.get("/:id", async (req, res) => {
  const data = await userModel.findOne({
    where:{
        id: req.params.id
    }
  })

  res.json({ status: 200, data: data });
});


// * CREATE
userRoutes.post("/create", (req, res) => {
  console.log("Body ===> ", req.body);
  const data = new userModel(req.body);

  data
    .save()
    .then((user) => {
      res.json({ status: 200, data: user });
    })
    .catch((err) => {
      res.json({ status: 500, data: err });
    });
});



// * UPDATE
userRoutes.put("/:id", async(req,res)=>{
    const data = await userModel.update(req.body, {
        where:{
            id:req.params.id
        }
    })

    res.json({status: 200, data: data})
})

// * DELETE
userRoutes.delete("/:id", async(req,res)=>{
    console.log("DELETE -> id ==>", req.params.id)

    userModel.destroy({
        where: {id: req.params.id}
    }).then((data)=>{
        res.json({status: 200, data})
    })
}) 
module.exports = userRoutes;
