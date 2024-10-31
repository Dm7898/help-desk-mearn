const Ticket = require("../models/Ticket");

exports.createTicket = async (req, res) => {
  const { title, customerName } = req.body;
  const newTicket = new Ticket({ title, customerName });
  await newTicket.save();
  res.status(201).json(newTicket);
};

exports.getTickets = async (req, res) => {
  const tickets = await Ticket.find().sort({ lastUpdatedOn: -1 });
  res.json(tickets);
};

exports.addNote = async (req, res) => {
  const { content, attachment } = req.body;
  const ticket = await Ticket.findById(req.params.id);
  ticket.notes.push({
    content,
    addedBy: req.user.name,
    attachment,
  });
  ticket.lastUpdatedOn = new Date();
  await ticket.save();
  res.json(ticket);
};

exports.updateStatus = async (req, res) => {
  const { status } = req.body;
  const ticket = await Ticket.findByIdAndUpdate(
    req.params.id,
    { status, lastUpdatedOn: new Date() },
    { new: true }
  );
  res.json(ticket);
};
