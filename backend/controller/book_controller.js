import Book from "../model/book_model.js";

export const getbook= async (req,res)=>{
    try{
        const book = await Book.find()
        res.status(200).json(book)
    }
    catch(error){

        console.log("error",error);
        res.status(500).json(error)
        

    }
}