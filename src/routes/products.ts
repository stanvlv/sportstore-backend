import express from 'express';
import { getProduct, getProducts, postProducts } from '../controllers/products';

export const productsRouter = express.Router();

productsRouter.get("/:id", getProduct);
productsRouter.get("/", getProducts);
productsRouter.post("/", postProducts);

export default productsRouter;