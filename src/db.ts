import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const uri = process.env.MONGODB_URI;

if(!uri) {
    console.log('No URI found in .env file');   
    process.exit(1);
}

const connectToDatabase = async () => {
    try {
        await mongoose.connect(uri);
        console.log('Connected to database');
    } catch (error) {
        console.error('Could not connect to database : ', error);
        process.exit(1);
        
    }
}

export { connectToDatabase };