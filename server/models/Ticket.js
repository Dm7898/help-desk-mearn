const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  content: String,
  addedBy: String,
  timestamp: { type: Date, default: Date.now },
  attachment: String, // URL or path for attachment
});

const ticketSchema = new mongoose.Schema({
  title: String,
  status: {
    type: String,
    enum: ["Active", "Pending", "Closed"],
    default: "Active",
  },
  customerName: String,
  lastUpdatedOn: { type: Date, default: Date.now },
  notes: [noteSchema],
});

module.exports = mongoose.model("Ticket", ticketSchema);
