const { DataTypes } = require('sequelize');
const db = require ('./index');

const rulesModel = db.define('Rule', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
})

module.exports = rulesModel;