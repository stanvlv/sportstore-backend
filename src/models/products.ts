const {Schema, Types, model} = require('mongoose');

const productSchema = new Schema({ 
    productName: {type: String, required: true, unique: true},
    description: {type: String, required: true},
    sizes: {type: [String], required: true},
    colors: {type: [String], required: true},
    price: {type: Number, required: true},
    category: {type: String, required: true},
    imageUrl: {type: String, required: false},
},
{  
    timestamps: true
}
);

const Product = model('Product', productSchema);

module.exports = { Product };

