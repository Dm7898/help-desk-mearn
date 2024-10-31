const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  ticket: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Ticket",
    required: true,
  },
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

module.exports = mongoose.model("Note", noteSchema);
