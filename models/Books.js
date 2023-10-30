const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  _id: Number,
  title: String,
  author: String,
  summary: String,
});

module.exports = mongoose.model('Book', bookSchema);
