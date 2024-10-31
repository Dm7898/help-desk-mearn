import { useEffect, useState } from "react";
import API from "../services/api";

const TicketList = () => {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const { data } = await API.get("/tickets");
        setTickets(data);
      } catch (error) {
        console.error("Failed to fetch tickets.");
      } finally {
        setLoading(false);
      }
    };

    fetchTickets();
  }, []);

  if (loading) return <p>Loading tickets...</p>;

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Ticket List</h2>
      {tickets.length === 0 ? (
        <p>No tickets available.</p>
      ) : (
        <table className="min-w-full bg-white rounded-lg shadow-md">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Ticket ID</th>
              <th className="py-2 px-4 border-b">Title</th>
              <th className="py-2 px-4 border-b">Status</th>
              <th className="py-2 px-4 border-b">Customer Name</th>
              <th className="py-2 px-4 border-b">Last Updated</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket) => (
              <tr key={ticket._id}>
                <td className="py-2 px-4 border-b">{ticket._id}</td>
                <td className="py-2 px-4 border-b">{ticket.title}</td>
                <td className="py-2 px-4 border-b">{ticket.status}</td>
                <td className="py-2 px-4 border-b">
                  {ticket.customer ? ticket.customer.name : "N/A"}
                </td>
                <td className="py-2 px-4 border-b">
                  {new Date(ticket.lastUpdated).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TicketList;
