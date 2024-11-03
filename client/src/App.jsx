import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Register from "./components/Register";
import Login from "./components/Login";
import TicketDetail from "./components/TicketDetail";
import TicketsPage from "./pages/TicketsPage";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Customers from "./components/Customers";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <Router>
      <div className="flex flex-col lg:flex-row">
        {/* Mobile toggle button */}
        <button
          onClick={toggleSidebar}
          className="lg:hidden p-4 text-white bg-blue-500 w-full"
        >
          Menu
        </button>

        {/* Sidebar */}
        <div
          className={`${
            isSidebarOpen ? "block" : "hidden"
          } lg:block lg:w-1/4 bg-gray-100`}
        >
          <Sidebar />
        </div>

        {/* Main content */}
        <div className="w-full lg:w-3/4 flex justify-center items-center p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/tickets" element={<TicketsPage />} />
            <Route path="/tickets/:id" element={<TicketDetail />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
