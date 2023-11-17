const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');

const publicKey = fs.readFileSync(path.resolve(__dirname, '../public.key'), 'utf-8');

exports.auth = async(req,res,next) => {
    const token = req.get('Authorization').split('Bearer ')[1];
    try{
        const decoded = jwt.verify(token,publicKey);
        if(decoded.email){
            next();
        }else{
            res.json("Not found");
        }
    }catch(err){
        res.json(err.message);
    }
}