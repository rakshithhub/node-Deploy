const model = require('../model/user');
const User = model.User;

exports.create = async(req,res) => {
    try{
        const user = new User(req.body);
        await user.save();
        res.json("Saved");
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
        res.json(user);
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