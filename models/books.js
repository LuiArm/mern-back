const { Schema, model } = require("mongoose");

const bookSchema = new Schema (
    {
        name: String,
        genre: String,
        img: String
    },
    { timestamps: true }
);

const Book = model("book",bookSchema);


module.exports = Book;