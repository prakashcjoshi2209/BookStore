// routes/contact.js

import express from 'express'
const router = express.Router();
import ContactMessage from '../model/ContactMessage.js'

// POST request to save contact form data
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Create a new contact message and save it to the database
    const newMessage = new ContactMessage({
      name,
      email,
      message,
    });

    await newMessage.save();  // Save it to MongoDB

    res.status(201).json({ message: 'Message saved successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Error saving message', error: error.message });
  }
});

export default router;
