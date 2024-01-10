// const {Schema, Types, model} = require('mongoose');
import { Schema, Types, model, Document} from 'mongoose';

export interface IProduct extends Document {
    productName: string;
    description: string;
    sizes: string[];
    colors: string[];
    price: number;
    category: string;
    imageUrl: string;
}

const productSchema = new Schema<IProduct>({ 
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




const Product = model<IProduct>('Product', productSchema);

export { Product };

