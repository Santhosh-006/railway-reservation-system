import React from "react";

const Navbar = ({ setPage }) => {
  return (
    <nav class="bg-white shadow-md">
      <div class="container mx-auto px-6 py-4 flex justify-between items-center">
        <a class="text-2xl font-bold text-primary flex items-center gap-2">
          🚆 RailReserve
        </a>
        <div class="hidden md:flex space-x-6 text-gray-600">
          <a
            class="hover:text-primary cursor-pointer"
            onClick={() => setPage("home")}
          >
            Home
          </a>
          <a
            class="hover:text-primary cursor-pointer"
            onClick={() => setPage("pnrCheck")}
          >
            PNR Status
          </a>
          <a href="user-dashboard.html" class="hover:text-primary">
            My Bookings
          </a>
          <a href="admin-trains.html" class="hover:text-primary">
            Admin
          </a>
        </div>
        <div class="flex space-x-4">
          <a href="login.html" class="text-primary font-medium hover:underline">
            Login
          </a>
          <a
            href="register.html"
            class="bg-primary text-white px-4 py-2 rounded-md hover:bg-primaryHover transition"
          >
            Register
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
