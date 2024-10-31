import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center mx-auto h-96 bg-gray-100 p-5">
      <h1 className="text-4xl font-bold text-blue-950 mb-6">
        Welcome to Help Desk
      </h1>
      <p className="text-gray-700 mb-9">
        Need assistance? Register or Login to manage your tickets.
      </p>
      <div className="w-full flex flex-col space-y-4">
        <Link
          to="/register" // Update this with your actual register route
          className="w-full text-center px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Register
        </Link>
        <Link
          to="/login" // Update this with your actual login route
          className="w-full text-center px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300"
        >
          Login
        </Link>
      </div>
    </div>
  );
}

export default Home;
