import { Request, Response, NextFunction } from 'express';
const { Product } = require('../models/products');
import ErrorResponse from '../utils/ErrorResponse';

export const getProducts = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const products = await Product.find();
          
        if(products.length === 0) {
            throw next(new ErrorResponse('No products found', 404));
        }
        res.json(products);
    } catch (error) {
        next(error);
    }
};

export const getProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            throw next(new ErrorResponse('Product not found', 404));
        }
        res.json(product);
    } catch (error) {
        next(error);
    }
};

export const postProducts = async (req: Request, res: Response,  next: NextFunction) => {
    try {
        const newProduct = await Product.insertMany(req.body);
        res.status(201).json(newProduct);
    } catch (error) {
        console.error(error)
        next(error);
    }
};
