const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const userSchema = new Schema({
    id: String,
    name: String,
    quote: String,
    date: Date
});

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;