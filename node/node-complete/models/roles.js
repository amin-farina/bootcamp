import { DataTypes } from "sequelize";
import db from "../db.js";

const Rol = db.define("Rol", {
  "id": {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
  },
  "name": DataTypes.STRING,
  "description": DataTypes.STRING,

});

export default Rol;
