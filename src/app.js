const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bookRoutes = require("./routes/bookRoutes");

dotenv.config();
const app = express();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
const Counter = require("./models/Counter");

// Initialize the counter if it doesn't exist
async function updateCounter() {
  try {
    const counter = await Counter.findOne({ name: "bookCount" });

    if (!counter) {
      const newCounter = new Counter({ name: "bookCount", value: 1 });
      await newCounter.save();
    }
  } catch (err) {
    // Handle any errors that may occur during the database operations.
    console.error(err);
  }
}

// Call the async function to update the counter
updateCounter();

// Use routes
app.use(express.json())
app.use("/api/books", bookRoutes);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
