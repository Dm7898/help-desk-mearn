import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
// import TicketList from "./components/TicketList";
import TicketDetail from "./components/TicketDetail";
import TicketsPage from "./pages/TicketsPage";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Customers from "./components/Customers";

function App() {
  return (
    <Router>
      <div className="flex flex-col lg:flex-row">
        {/* Sidebar - full width on small screens, 30% on large screens */}
        <Sidebar />

        {/* Main content - full width on small screens, 70% on large screens */}
        <div className="w-full lg:w-3/4 flex justify-center items-center">
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
