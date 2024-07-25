import express from "express";
import { Book } from "../models/bookModel.js";

const router=express.Router();

//Route to save a new Book
router.post('/',async(req,res)=>{
    try {
        if(
            !req.body.title ||
            !req.body.author ||
            !req.body.publishYear            
        )
        {
           return res.status(400).send({ message: "Send all required fields - title,author,publishYear"})
        }
        
        const newBook={
            title: req.body.title,
            author:req.body.author,
            publishYear:req.body.publishYear,
        };
        const book=await Book.create(newBook);
        return res.status(201).send(book);

    } 
    catch (error) {
        console.log(error.message);
        res.status(500).send({message:error.message})
        
    }
});


//Route to get all saved Books
router.get('/', async(req,res) => {
    try {
        const books = await Book.find({});
        return res.status(201).json({
            count:books.length,
            data:books
        });
        
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message:error.message});       
    }
});


//Route to get one Book by id
router.get('/:_id', async(req,res) => {
    try {

        const {_id} = req.params;

        const book = await Book.findById({_id});
        return res.status(200).json(book);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message:error.message});       
    }
})


// Route to Update a Book
router.put('/:_id', async (req, res) => {
    try {
      if (
        !req.body.title ||
        !req.body.author ||
        !req.body.publishYear
      ) {
        return res.status(400).send({
          message: 'Send all required fields: title, author, publishYear',
        });
      }
  
      const { _id } = req.params;
      const result = await Book.findByIdAndUpdate(_id, req.body);
  
      if (!result) {
        return res.status(404).json({ message: 'Book not found' });
      }

    return res.status(200).send({ message: 'Book updated successfully' });
    } 

    catch (error) {
      console.log(error.message);
      res.status(500).send({ message: error.message });
    }
  });


// Route to Delete a book
router.delete('/:_id', async (request, response) => {
    try {
      const { _id } = request.params;
      const result = await Book.findByIdAndDelete(_id);
  
      if (!result) {
        return response.status(404).json({ message: 'Book not found' });
      }
  
    return response.status(200).send({ message: 'Book deleted successfully' });
    } 
    
    catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  });
 
export default router;  


