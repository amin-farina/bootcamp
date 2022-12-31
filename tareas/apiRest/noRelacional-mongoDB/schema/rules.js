const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rulesSchema = new Schema({
    name: String,
    description: String
})

const rulesModel = mongoose.model("rule", rulesSchema)

module.exports = rulesModel