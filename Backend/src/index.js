import dotenv from 'dotenv';
import connectDB from './db/Connect.js';
import app from './app.js';

dotenv.config();

connectDB()
    .then(() => {
        app.listen(8000 , () => {
            console.log(`Server running on port: 8000 `);
        })
    })
    .catch(error => {
        console.log(`mongoDB connection failed: ${error}`);
    })
