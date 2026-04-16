import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
let  app = express();

app.get('/',(req, res) => {
    res.send("Hello");
})

app.listen('3000',() => {
   console.log("Server listing at port 3000!"); 
})
