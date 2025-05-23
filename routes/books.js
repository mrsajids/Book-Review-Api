// routes/books.js
const express = require('express');
const auth = require('../middleware/authMiddleWare');
const {
  addBook, getBooks, getBookById, addReview, searchBooks
} = require('../controllers/bookController');
const router = express.Router();


router.post('/books', auth, addBook);
router.get('/books', getBooks);
router.get('/books/:id', getBookById);
router.post('/books/:id/reviews', auth, addReview);
router.get('/search', searchBooks);

module.exports = router;
