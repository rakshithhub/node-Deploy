const mongoose = require('mongoose');
const {Schema} = mongoose;

const productSchema = new Schema({
    title: {type: String, required: true, unique: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    discountPercentage: {type: Number, required: true},
    rating: {type: Number, required: true},
    brand: {type: String, required: true},
    category: {type: String, required: true},
    thumbnail: {type: String, required: true},
    images: [{type: String}],
})

exports.Product = mongoose.model('Product',productSchema);



