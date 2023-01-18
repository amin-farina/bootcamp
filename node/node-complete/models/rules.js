import { DataTypes } from "sequelize";
import db from "../db.js";

const Rule = db.define("Rule", {
  "id": {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
  },
  "name": DataTypes.STRING,
  "description": DataTypes.STRING,
  "estado": DataTypes.ENUM('iniciado', 'en proceso', 'finalizdo')
});

export default Rule;
