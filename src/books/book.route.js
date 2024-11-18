const express=require('express');
const Book = require('./book.model');
const { postBook, getAll, getBook, updateBook, deleteBook } = require('./book.controller');
const verifyAdminToken = require('../middleware/verifyAdminToken');
const router=express.Router();



router.post("/create-book" ,verifyAdminToken, postBook)

router.get("/",getAll);

router.get("/:id",getBook);

router.put("/edit/:id",verifyAdminToken,updateBook);

router.delete("/:id",verifyAdminToken,deleteBook)






module.exports=router;