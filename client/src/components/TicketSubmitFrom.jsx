import { useState } from "react";
import API from "../services/api";

const TicketSubmitForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/tickets/submit", formData); // Adjust API endpoint as needed
      alert("Ticket submitted successfully!");
      setFormData({ title: "", description: "" }); // Reset form
    } catch (error) {
      alert("Failed to submit ticket.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 space-y-4">
      <h2 className="text-2xl font-semibold text-gray-800">Submit a Ticket</h2>
      <input
        name="title"
        type="text"
        onChange={handleChange}
        placeholder="Ticket Title"
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      <textarea
        name="description"
        onChange={handleChange}
        placeholder="Description"
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        rows="4"
        required
      />
      <button
        type="submit"
        className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Submit Ticket
      </button>
    </form>
  );
};

export default TicketSubmitForm;
