import React from "react";

export default function Sidebar({ role, activePage, setActivePage, onLogout }) {
  return (
    <aside className="w-64 bg-white shadow-lg p-6 space-y-6">
      <h2 className="text-xl font-bold text-emerald-600">
        StyleDecor
      </h2>

      <nav className="space-y-2">
        <button
          onClick={() => setActivePage("overview")}
          className={`block w-full text-left px-4 py-2 rounded ${
            activePage === "overview"
              ? "bg-emerald-100 text-emerald-700"
              : "hover:bg-gray-100"
          }`}
        >
          Overview
        </button>

        {role === "user" && (
          <>
            <button
              onClick={() => setActivePage("bookings")}
              className="block w-full text-left px-4 py-2 rounded hover:bg-gray-100"
            >
              My Bookings
            </button>
            <button
              onClick={() => setActivePage("profile")}
              className="block w-full text-left px-4 py-2 rounded hover:bg-gray-100"
            >
              Profile
            </button>
          </>
        )}

        {role === "admin" && (
          <>
            <button
              onClick={() => setActivePage("services")}
              className="block w-full text-left px-4 py-2 rounded hover:bg-gray-100"
            >
              Manage Services
            </button>
            <button
              onClick={() => setActivePage("payments")}
              className="block w-full text-left px-4 py-2 rounded hover:bg-gray-100"
            >
              Payments
            </button>
            <button
              onClick={() => setActivePage("users")}
              className="block w-full text-left px-4 py-2 rounded hover:bg-gray-100"
            >
              Users
            </button>
          </>
        )}
      </nav>

      <button
        onClick={onLogout}
        className="btn btn-outline btn-error w-full"
      >
        Logout
      </button>
    </aside>
  );
}
