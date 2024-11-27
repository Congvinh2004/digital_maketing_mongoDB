// productModel.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productId: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },

});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;