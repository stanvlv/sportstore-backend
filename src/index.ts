import 'dotenv/config';
import express, { Request, Response } from 'express';
import cors from 'cors';
import { connectToDatabase } from './db';
import {productsRouter} from './routes/products';
import {errorHandler} from './middlewares/errorHandler';

const app = express();
const port = process.env.PORT || 3001;
app.use(cors());
app.use(express.json());



connectToDatabase().then(() => {
    app.get('/', (req: Request, res: Response) => {
      res.send('Welcome to SportStore!');
    });
    

}).catch((error) => {
    console.error('Could not connect to database : ', error);
    process.exit(1);
});

app.use("/products", productsRouter);
app.use(errorHandler);


app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
})