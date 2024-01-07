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
    const { items } = req.body;


    let cart = await Cart.findOne({ sessionId });

    if (cart) {
      return res.status(400).json({ message: 'Something went wrong. An order with this sessionId already exists.'})
    } 

    const newCart = new Cart({
      sessionId,
      items
    })
    await newCart.save();
    res.status(201).json(newCart);
      console.log(newCart)
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
