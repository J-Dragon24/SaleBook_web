import express from 'express'
import bookController from '../controller/bookController.js';

const bookRouter = express.Router();

bookRouter.get('/', bookController.getBooks); // Get all books
bookRouter.put('/:id', bookController.updateBook); // Update a book by ID
bookRouter.delete('/:id', bookController.deleteBook); // Delete a book by ID
bookRouter.post('/', bookController.createBook); // Create a new book

export default bookRouter;