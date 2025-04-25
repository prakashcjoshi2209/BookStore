import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

// Importing routes
import bookroute from "./route/book_route.js";
import userroute from "./route/user_route.js";
import contactRoutes from "./route/contact.js"; // Correct import for contact routes

const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MONGODB;

// Connect to MongoDB
try {
  mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });
  console.log("Connected to MongoDB");
} catch (error) {
  console.log("Error", error);
}

// Define routes
app.use("/book", bookroute);
app.use("/user", userroute);
app.use("/contact", contactRoutes); // Using the correct contactRoutes for /course

// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
