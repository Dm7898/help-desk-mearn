// src/components/Sidebar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => (
  <div className="w-full h-screen bg-gray-800 text-white p-4">
    <h1 className="text-2xl font-bold mb-6">
      <Link to="/">Helpdesk</Link>
    </h1>
    <nav>
      <Link to="/tickets" className="block py-2 px-4 rounded hover:bg-gray-700">
        Tickets
      </Link>
      <Link
        to="/customers"
        className="block py-2 px-4 rounded hover:bg-gray-700"
      >
        Customers
      </Link>
    </nav>
  </div>
);

export default Sidebar;
