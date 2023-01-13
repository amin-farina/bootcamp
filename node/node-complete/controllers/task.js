import Task from "../models/task.js"

export const getAllTasks = async(req,res) =>{
   try{
    const tasks = await Task.findAll();
    res.status(200).json({tasks})
   }catch(err){
    res.status(500).json({err})
   }
}

export const getTaskById = async(req,res) =>{
    try{
        const task = await Task.findAll({
            where:{
                id: req.params.taskId
            }
        })
        res.status(200).json({task})
    }catch(err){
        res.status(500).json({err})
    }
}

export const updateTask = async(req,res) =>{
    try{
        const task = await Task.update(req.body,{
            where:{
                id:req.params.taskId
            }
        });
        res.status(200).json({task})
    }catch(err){
        res.status(500).json({err})
    }
}

export const deleteTask = async(req,res) =>{
    try{
        const task = await Task.findAll({
            where:{
                id: req.params.taskId
            }})
        const taskDelete = await Task.destroy({
            where:{
                id: req.params.taskId
            }
        })
        if(taskDelete === 0){
            res.status(404).json("Item not found for delete")
        }else{
            res.status(200).json({"Delete success":task})
        }
        
    }catch(err){
        res.status(500).json({err})
    }
}

export const createTask = async(req,res) =>{
    try{
        const task = await Task.create(req.body);
        res.status(200).json({task})
    }catch(err){
        res.status(500).json({err})
    }
}

