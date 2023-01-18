import { DataTypes } from "sequelize";
import db from "../db.js";
import User from "./user.js";

const Task = db.define("Task",{
    "id":{
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    "name": DataTypes.STRING,
    "description": DataTypes.STRING,
    "estado": DataTypes.ENUM('creado', 'en proceso', 'finalizado')
})

Task.User = Task.belongsTo(User)
export default Task;