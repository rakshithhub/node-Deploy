const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
    firstName: {type: String, min: [0,"Please enter vaild name"], max:[16,"More than 16 char"], required: true},
    lastName: {type: String, min: [0,"Please enter vaild name"], max:[16,"More than 16 char"], required: true},
    lastName: {type: Number, min: [12,"Please enter vaild age"], max:[100,"Age limit less than 100"], required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true, unique: true, min: [0,"Less than 0"], max: [10, "More than 10"]},
});

exports.User = mongoose.model("User",userSchema);