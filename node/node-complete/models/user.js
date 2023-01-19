import db from "../db.js";
import { DataTypes } from "sequelize";
import Task from "./task.js"

const User = db.define("User", {
    "id": {
        primaryKey: true,
        type:  DataTypes.INTEGER,
        autoIncrement: true
    },
    "name": {
        type: DataTypes.STRING,
        allowNull: false,
    },
    "lastName": DataTypes.STRING,
    "address": DataTypes.STRING
})

// User.Task = User.hasMany(Task)

export default User;