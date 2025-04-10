const { getBooks, addBook, resetBooks } = require("../data/bookData");

// Add controller functions for handling book-related requests

exports.getBooks = (req, res) => {
  console.log("GET /books");
  res.json(getBooks());
};

exports.addBook = (req, res) => {
  console.log("POST /books");
  const book = addBook(req.body);
  res.status(201).json(book);
};

// Only for testing, export resetBooks if needed
exports._resetBooks = resetBooks;
