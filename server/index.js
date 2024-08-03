import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());

app.get("/",async (req,res)=>{
    res.send("Hello World!");
})

app.listen(3000,()=>{
    console.log("Server Running");
});