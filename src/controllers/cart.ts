import { Request, Response, NextFunction } from "express";
import { Cart } from "../models/cart";
import ErrorResponse from "../utils/ErrorResponse";

interface CartRequestParams {
  sessionId: string;
}

export const getCart = async (
  req: Request<CartRequestParams>,
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
  req: Request<CartRequestParams>,
  res: Response,
  next: NextFunction
) => {
  try {
    const sessionId = req.params.sessionId;
    const { items } = req.body;

    let cart = await Cart.findOne({ sessionId });

    if (cart) {
      return res
        .status(400)
        .json({
          message:
            "Something went wrong. An order with this sessionId already exists.",
        });
    }

    const newCart = new Cart({
      sessionId,
      items,
    });
    await newCart.save();
    res.status(201).json(newCart);
    console.log(newCart);
  } catch (error) {
    next(error);
  }
};
