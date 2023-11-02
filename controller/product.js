const model = require('../model/product');
const Product = model.Product;

exports.create = async(req, res) => {
    try{
        const product = await new Product(req.body);
        await product.save();
        res.json("Saved");
    }catch(err){
        res.json(err);
    }
}
exports.getAll = async(req, res) => {
    try{
        const products = await Product.find();
        res.json(products);
    }catch(err){
        res.json(err);
    }
}
exports.getOne = async(req, res) => {
    const id = req.params.id;
    try{
        const product = await Product.findOne({_id:id});
        res.json(product);
    }catch(err){
        res.json(err);
    }
}
exports.replaceOne = async(req, res) => {
    const id = req.params.id;
    try{
        const product = await Product.findOneAndReplace({_id: id},req.body,{new:"true"});
        res.json(product);
    }catch(err){
        res.json(err);
    }
}
exports.updateOne = async(req, res) => {
    const id = req.params.id;
    try{
        const product = await Product.findOneAndUpdate({_id: id},req.body,{new:true});
        res.json(product);
    }catch(err){
        res.json(err);
    }
}
exports.deleteOne = async(req, res) => {
    const id = req.params.id;
    try{
        const product = await Product.findOneAndDelete(id);
        res.json("Deleted");
    }catch(err){
        res.json(err);
    }
}