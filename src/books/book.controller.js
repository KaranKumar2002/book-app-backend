const Book = require("./book.model");

const postBook=async (req,res)=>{
    try{
        
        const newBook= await Book({...req.body});
        await newBook.save();
        res.status(200).send({message:"Book posted successfully",book: newBook})
    }catch(error) {
        console.error("Error creating book", error);
        res.status(500).send({message:"Failed"})
    }
}

// get all book

const getAll= async (req,res)=>{
    try {
        const book=await Book.find().sort({ createdAt: -1});
        res.status(200).send(book)
    } catch (error) {
        console.error("Error fetching books", error);
        res.status(500).send({message:"Failed"})
    }

}

const getBook= async(req,res)=>{
    try {
        const {id}=req.params;
        const book= await Book.findById(id);
        if(!book)
        {
            res.status(404).send({message:"Book not found"})
        }
        res.status(200).send(book)
    } catch (error) {
        console.error("Error fetching books", error);
        res.status(500).send({message:"Failed"})
    }
}

const updateBook=async (req,res)=>{

    try {

        const {id}=req.params;
        const update=await Book.findByIdAndUpdate(id,req.body,{new: true});
        
        if(!update)
        {
            res.status(404).send({message:"Book not found"})
        }
        
        res.status(200).send({
            message: "Book updated successfully",
            book: update

        })
        
    } catch (error) {
        console.error("Error updating a book", error);
        res.status(500).send({message:"Failed"})
    }

}

const deleteBook = async (req,res)=>{
    try {
        const {id}=req.params;
        const deletebook=await Book.findByIdAndDelete(id);
        if(!deletebook)
        {
            res.status(404).send({message:"Book not found"})
        }
        res.status(200).send({
            message: "Book deleted successfully",
            book: deletebook

        })
        
    } catch (error) {
        console.error("Error deleting a book", error);
        res.status(500).send({message:"Failed"})
    }

}

module.exports={
    postBook,
    getAll,
    getBook,
    updateBook,
    deleteBook
}