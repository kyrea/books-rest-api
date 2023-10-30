const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

// Create a new book
router.post('/', bookController.createBook);

// List all books
router.get('/', bookController.listBooks);

// Get details of a specific book by ID
router.get('/:id', bookController.getBook);

// Update a book's details
router.put('/:id', bookController.updateBook);

// Delete a book
router.delete('/:id', bookController.deleteBook);

module.exports = router;
