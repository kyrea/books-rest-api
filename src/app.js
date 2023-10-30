const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bookRoutes = require('./routes/bookRoutes');

dotenv.config();
const app = express();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
const Counter = require('./models/Counter');

// Initialize the counter if it doesn't exist
Counter.findOne({ name: 'bookCount' }, (err, counter) => {
  if (!counter) {
    const newCounter = new Counter({ name: 'bookCount', value: 1 });
    newCounter.save();
  }
});


// Use routes
app.use('/api/books', bookRoutes);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
