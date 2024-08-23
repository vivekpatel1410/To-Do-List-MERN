const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    phone:Number
})

const UserModel = mongoose.model("clients",userSchema);
module.exports = UserModel