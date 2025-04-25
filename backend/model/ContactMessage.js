// models/ContactMessage.js

import mongoose from "mongoose";


const contactMessageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
}, { timestamps: true });  // Timestamps will help store creation time

const ContactMessage = mongoose.model('ContactMessage', contactMessageSchema);

export default ContactMessage;
