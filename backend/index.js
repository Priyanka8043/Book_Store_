import express from "express";

import { PORT ,mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import booksRoute from "./routes/booksRoute.js"
import cors from 'cors';

const app = express();

//Middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS POLICY
// Option 1: Allow All Origins with Default of cors(*)
app.use(cors());

// Option 2: Allow Custom Origins
// app.use(
//   cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type'],
//   })
// );

app.get('/',(req,res)=>{
    console.log(req);
    return res.status(234).send("Welcome to MERN App");
});

app.use('/books',booksRoute);   // "/books" will get added/integrated to booksRoute that we have created.

mongoose.connect(mongoDBURL)
.then(()=>{
    console.log("App connected to MongoDB");

    app.listen(PORT, ()=>{
        console.log(`Listening on port ${PORT}`) 
    })
})
.catch((error)=>{
    console.log(error);
})
