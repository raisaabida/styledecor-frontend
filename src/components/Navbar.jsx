import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="backdrop-blur bg-gradient-to-r from-emerald-300 via-cyan-300 to-purple-300 shadow-md sticky top-0 z-50 border-b border-white/20">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">


        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 flex items-center justify-center text-white font-bold shadow-md group-hover:scale-110 transition duration-200">
            SD
          </div>
          <div className="font-semibold text-white drop-shadow-md group-hover:text-yellow-100 transition">
            StyleDecor
          </div>
        </Link>


        {/* NAV LINKS */}
        <div className="hidden md:flex gap-4 items-center">
          <Link
            to="/"
            className="px-3 py-1 rounded-lg text-white hover:bg-white/30 transition font-medium"
          >
            Home
          </Link>
          <Link
            to="/services"
            className="px-3 py-1 rounded-lg text-white hover:bg-white/30 transition font-medium"
          >
            Services
          </Link>
          <Link
            to="/dashboard"
            className="btn btn-sm rounded-lg bg-white/40 backdrop-blur text-gray-900 hover:bg-white hover:text-black border-none shadow-md"
          >
            Dashboard
          </Link>
        </div>

        {/* RIGHT BUTTONS */}
        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="btn btn-sm rounded-lg bg-white/50 backdrop-blur text-gray-900 hover:bg-white shadow hover:shadow-lg border-none transition"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}

