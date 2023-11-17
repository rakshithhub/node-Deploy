const model = require('../model/user');
const User = model.User;
const jwt = require('jsonwebtoken');
const fs = require('fs');
const bcrypt = require('bcrypt');
const path = require('path');

const privateKey = fs.readFileSync(path.resolve(__dirname, '../private.key'), 'utf-8')

exports.create = async(req,res) => {
    try{
        const user = new User(req.body);
        const hash = bcrypt.hashSync(req.body.password, 10);

        user.password = hash;

        await user.save();
        res.json(req.body);
    }catch(err){
        res.json(err.message);
    }
}
exports.login = async(req,res) => {
    const {email,password} = req.body;

    try{
        const user = await User.findOne({'email': email});
        const token = jwt.sign({email: email},privateKey,{ algorithm: 'RS256' });
        const hash = bcrypt.compareSync(password,user.password);

        if(hash){
            user.token = token;
            await user.save();
            res.json(user);
        }else{
            res.json("Not Found");
        }
        
    }catch(err){
        res.json(err.message);
    }
}
exports.getAll = async(req,res) => {
    try{
        const users = await User.find();
        res.json(users);
    }catch(err){
        res.json(err.message);
    }
}
exports.getOne = async(req,res) => {
    const id = req.params.id;
    try{
        const user = await User.findOne({_id:id});
        if(user){
            res.json(user);
        }
    }catch(err){
        res.json(err.message);
    }
}
exports.replaceOne = async(req,res) => {
    const id = req.params.id;
    try{
        const user = await User.findOneAndReplace({_id:id},req.body,{new:true});
        res.json(user);
    }catch(err){
        res.json(err.message);
    }
}
exports.updateAll = async(req,res) => {
    try{
        const user = await User.updateMany(req.body);
        res.json(user);
    }catch(err){
        res.json(err.message);
    }
}
exports.updateOne = async(req,res) => {
    const id = req.params.id;
    try{
        const user = await User.findOneAndUpdate({_id:id},req.body,{new:true});
        res.json(user);
    }catch(err){
        res.json(err.message);
    }
}
exports.deleteAll = async(req,res) => {
    try{
        const user = await User.deleteMany();
        res.json("Deleted all data");
    }catch(err){
        res.json(err.message);
    }
}
exports.deleteOne = async(req,res) => {
    const id = req.params.id;
    try{
        const user = await User.findOneAndDelete(id,{new:true});
        res.json(user);
    }catch(err){
        res.json(err.message);
    }
}