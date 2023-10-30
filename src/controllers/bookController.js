const Book = require('../models/');

// Controller functions for CRUD operations
const bookController = {
  // Create a new book
  createBook: async (req, res) => {
    try {
      const { title, author, summary } = req.body;

      // Fetch the current counter value and increment it
      const counter = await Counter.findOneAndUpdate({ name: 'bookCount' }, { $inc: { value: 1 } });
// Use the counter value as the custom _id for the new book
      const newBook = new Book({
        _id: counter.value, // Custom _id
        title,
        author,
        summary,
      });
      await newBook.save();
      res.status(201).json(book);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  // List all books
  listBooks: async (req, res) => {
    try {
      const books = await Book.find();
      res.json(books);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  // Get details of a specific book by ID
  getBook: async (req, res) => {
    try {
      const book = await Book.findById(req.params.id);
      if (!book) {
        return res.status(404).json({ error: 'Book not found' });
      }
      res.json(book);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  // Update a book's details
  updateBook: async (req, res) => {
    try {
      const { title, author, summary } = req.body;
      const book = await Book.findByIdAndUpdate(req.params.id, { title, author, summary }, { new: true });
      if (!book) {
        return res.status(404).json({ error: 'Book not found' });
      }
      res.json(book);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  // Delete a book
  deleteBook: async (req, res) => {
    try {
      const book = await Book.findByIdAndRemove(req.params.id);
      if (!book) {
        return res.status(404).json({ error: 'Book not found' });
      }
      res.json({ message: 'Book deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

module.exports = bookController;
