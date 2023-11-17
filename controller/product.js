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
    const pageSize = 4;
    const page = req.query.page;

    try{
        if(req.query.sort){
            const products = await Product.find().sort({[req.query.sort]: req.query.order}).skip((pageSize*(page-1))).limit(pageSize).exec();
            res.json(products);
        }
        else if(req.query.page){
        const products = await Product.find().skip((pageSize*(page-1))).limit(pageSize).exec();
            res.json(products);
        }
        else{
            const products = await Product.find().exec();
            res.json(products);
        }

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