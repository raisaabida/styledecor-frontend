import React from "react";
import OverviewCards from "./OverviewCards";

export default function AdminDashboard({ activePage }) {
  return (
    <div className="space-y-6">
      {activePage === "overview" && (
        <>
          <h2 className="text-2xl font-bold">Admin Dashboard</h2>
          <OverviewCards role="admin" />
        </>
      )}

      {activePage === "services" && (
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-3">Manage Services</h2>
          <p className="text-gray-600">
            Admin service management table will go here.
          </p>
        </div>
      )}

      {activePage === "payments" && (
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-3">Payments</h2>
          <p className="text-gray-600">
            Payment records table will go here.
          </p>
        </div>
      )}

      {activePage === "users" && (
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-3">Users</h2>
          <p className="text-gray-600">
            User management table will go here.
          </p>
        </div>
      )}
    </div>
  );
}
