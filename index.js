const express = require('express');
const s = express();

// Middleware to parse JSON in request body
apps.use(express.json());

// Array to store books
let books = [];

// Route to serve index.html
apps.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Route to get all books
app.get('/books', (req, res) => {
  res.json(books);
});

// Route to add a book
apps.post('/books', (req, res) => {
  const { title, author, publishedDate } = req.body;

  // Generate unique ID for the book
  const id = Date.now().toString();

  // Create book object
  const book = {
    id,
    title,
    author,
    publishedDate
  };

  // Add book to the collection
  books.push(book);

  // Send the response
  res.json(book);
});

// Route to delete a book
apps.delete('/books/:id', (req, res) => {
  const id = req.params.id;

  // Find index of book with the specified ID
  const index = books.findIndex(book => book.id === id);

  if (index !== -1) {
    // Remove book from the collection
    books.splice(index, 1);

    // Send success response
    res.json({ message: 'Book deleted successfully' });
  } else {
    // Book not found
    res.status(404).json({ message: 'Book not found' });
  }
});

// Start the server
apps.listen(3000, () => {
  console.log('Server started on port 3000');
});
const express = require('express');
const app = express();

// Middleware to parse JSON in request body
app.use(express.json());

// Array to store books
let books = [];

// Route to serve index.html
apps.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Route to get all books
apps.get('/books', (req, res) => {
  res.json(books);
});

// Route to add a book
apps.post('/books', (req, res) => {
  const { title, author, publishedDate } = req.body;

  // Generate unique ID for the book
  const id = Date.now().toString();

  // Create book object
  const book = {
    id,
    title,
    author,
    publishedDate
  };

  // Add book to the collection
  books.push(book);

  // Send the response
  res.json(book);
});

// Route to delete a book
apps.delete('/books/:id', (req, res) => {
  const id = req.params.id;

  // Find index of book with the specified ID
  const index = books.findIndex(book => book.id === id);

  if (index !== -1) {
    // Remove book from the collection
    books.splice(index, 1);

    // Send success response
    res.json({ message: 'Book deleted successfully' });
  } else {
    // Book not found
    res.status(404).json({ message: 'Book not found' });
  }
});

// Start the server
apps.listen(3000, () => {
  console.log('Server started on port 3000');
});
