// backend/routes/ticketRoutes.js
const express = require("express");
const {
  createTicket,
  getTickets,
  addNote,
  updateStatus,
} = require("../controllers/ticketController");
const { authenticate, authorize } = require("../middleware/auth");

const router = express.Router();

router.post("/submit", authenticate, createTicket);
router.get(
  "/",
  authenticate,
  authorize(["Admin", "CustomerServiceAgent"]),
  getTickets
); // Adjust roles as needed
router.post("/note/:id", authenticate, addNote);
router.put(
  "/status/:id",
  authenticate,
  authorize(["Admin", "CustomerServiceAgent"]),
  updateStatus
);

module.exports = router;
