const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
    firstName: {type: String, min: [0,"Firstname Please enter vaild name"], max:[16,"Firstname More than 16 char"], required: true},
    lastName: {type: String, min: [0,"Lastname Please enter vaild name"], max:[16,"Lastname More than 16 char"], required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true, unique: true, min: [0,"Password Less than 6"], max: [10, "Password More than 15"]},
    token: {type: String}
});

exports.User = mongoose.model("User",userSchema);