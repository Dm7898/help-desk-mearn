import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import API from "../services/api";

const TicketDetail = () => {
  const { id } = useParams();
  const [ticket, setTicket] = useState(null);
  const [note, setNote] = useState("");

  useEffect(() => {
    const fetchTicket = async () => {
      const { data } = await API.get(`/tickets/${id}`);
      setTicket(data);
    };
    fetchTicket();
  }, [id]);

  const handleAddNote = async () => {
    if (note.trim()) {
      const { data } = await API.post(`/tickets/note/${id}`, { content: note });
      setTicket(data);
      setNote("");
    }
  };

  return ticket ? (
    <div className="p-4">
      <h2 className="text-2xl">{ticket.title}</h2>
      <div>Status: {ticket.status}</div>
      <div>Customer: {ticket.customerName}</div>
      <div>
        Last Updated On: {new Date(ticket.lastUpdatedOn).toLocaleString()}
      </div>
      <h3 className="text-xl mt-4">Notes</h3>
      <ul className="space-y-2">
        {ticket.notes.map((note, index) => (
          <li key={index} className="border p-2">
            {note.content}
            <div>By: {note.addedBy}</div>
            <div>{new Date(note.timestamp).toLocaleString()}</div>
          </li>
        ))}
      </ul>
      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Add a note"
        className="input mt-4"
      ></textarea>
      <button onClick={handleAddNote} className="btn mt-2">
        Add Note
      </button>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default TicketDetail;
