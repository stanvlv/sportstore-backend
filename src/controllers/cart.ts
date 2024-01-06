import { Request, Response, NextFunction } from "express";
const { Cart } = require("../models/cart");
import ErrorResponse from "../utils/ErrorResponse";

export const getCart = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const sessionId = req.params.sessionId;
    const cart = await Cart.findOne({ sessionId });
    if (!cart) {
      throw new ErrorResponse("Cart not found", 404);
    }
    res.json(cart);
  } catch (error) {
    next(error);
  }
};

export const postCart = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const sessionId = req.params.sessionId;
    const { product, quantity, selectedSize, selectedColor } = req.body;

    let cart = await Cart.findOne({ sessionId });

    if (cart) {
      cart.items.push({ product, quantity, selectedSize, selectedColor });
      cart = await cart.save();
    } else {
      cart = new Cart({
        sessionId,
        items: [{ product, quantity, selectedSize, selectedColor }],
      });
      await cart.save();
    }

    res.status(201).json(cart);
  } catch (error) {
    console.error(error);
    next(error);
  }
};


// export const getProduct = async (req: Request, res: Response, next: NextFunction) => {
//     try {
//         const product = await Cart.findById(req.params.id);
//         if (!product) {
//             throw next(new ErrorResponse('Product not found', 404));
//         }
//         res.json(product);
//     } catch (error) {
//         next(error);
//     }
// };
