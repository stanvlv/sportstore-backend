import {Schema, Types, model, Document} from 'mongoose';
import { IProduct } from './products';

interface ICartItem extends Document {
    products: Types.ObjectId | IProduct;
    quantity: number;
    selectedSize: string; 
    selectedColor: string;
  }
  
  interface ICart extends Document {
    sessionId: string;
    items: ICartItem[];
  }


const cartItemSchema = new Schema<ICartItem>({
    products: { type: Types.ObjectId, ref: 'Product', required: true },
    quantity: { type: Number, required: true, min: 1},
    selectedSize: { type: String, required: false},
    selectedColor: { type: String, required: false}
});

const cartSchema = new Schema<ICart>({ 
    sessionId: { type: String, required: true, unique: true},
    items: [cartItemSchema],
},
{  
    timestamps: true
}
);

const Cart = model<ICart>('Cart', cartSchema);

export { Cart };

