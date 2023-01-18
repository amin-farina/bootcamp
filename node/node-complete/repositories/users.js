import User from "../models/user.js";
import Role from "../models/role.js";
import Task from "../models/task.js";
import rolRepository from "../repositories/roles.js"

const getAllUsers = async ()=>{
    const users = await User.findAll();
    return users;
}

const getUserById = async (userId) => {
    const user = await User.findByPk(userId, {include: Role} )
    return user;
}

const createUser = async (userData) => {
    try{
        const user = await User.create(userData);
        const role = await rolRepository.getRolById(userData.id);

        await user.addRole(role);

        return user;
    }catch(err){
        return err;
    }
}

const deleteUser = async (userId) => {
    try{
        const user = await User.destroy({
            where: {
                id: userId
            }
        })
        return user;
    }catch(err){
        return err;
    }

}

const updateUser = async (userData, userId) =>{
    try{
        await User.update(userData,{
            where:{
                id:userId
            }
        });
        const user = await User.findByPk(userId);
        return user;
    }catch(err){
        return err;
    }
}

const createUserTask = async (taskData, userId) => {
    const tasks = await Task.create({...taskData, UserId: userId})
    
    return tasks;
}

const getAllUserTaskById = async (userId) => {
    const user = await User.findByPk(userId,{
        include:{
            model: Task
        }
    })

    return user;
}

export default {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    createUserTask,
    getAllUserTaskById
}