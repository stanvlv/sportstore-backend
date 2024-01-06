const {Schema, Types, model} = require('mongoose');

const cartItemSchema = new Schema({
    products: { type: Types.ObjectId, ref: 'Product', required: true },
    quantity: { type: Number, required: true, min: 1},
    selectedSize: { type: String, required: false},
    selectedColor: { type: String, required: false}
});

const cartSchema = new Schema({ 
    sessionId: { type: String, required: true, unique: true},
    items: [cartItemSchema],
},
{  
    timestamps: true
}
);

const Cart = model('Cart', cartSchema);

module.exports = { Cart };

