import express from 'express';
import { 
    // getProduct,
     getCart,
      postCart 
    } from '../controllers/cart';

export const cartRouter = express.Router();

// cartRouter.get("/:id", getProduct);
cartRouter.get("/:sessionId", getCart);
cartRouter.post("/:sessionId", postCart);

export default cartRouter;