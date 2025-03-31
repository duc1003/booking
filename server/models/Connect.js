import mongoose from 'mongoose';

export const Connect = async () => {
    try {
        
        const conn = await mongoose.connect('mongodb://localhost:27017/home-rentals');
        // const conn = await mongoose.connect('mongodb+srv://user_01:admin@cluster0.1qiwl5v.mongodb.net/?retryWrites=true&w=majority');
        console.log(`MongoDB connected: ${conn.connection.host}`);
        
    } catch (error) {
        console.log(`Error: ${error.message}`);  
        process.exit(1);
    }
    
};