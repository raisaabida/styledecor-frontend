import React from "react";
import OverviewCards from "./OverviewCards";
import Profile from "./Profile";

export default function UserDashboard({ activePage, user }) {
  return (
    <div className="space-y-6">
      {activePage === "overview" && (
        <>
          <h2 className="text-2xl font-bold">User Dashboard</h2>
          <OverviewCards role="user" />
        </>
      )}

      {activePage === "bookings" && (
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-3">My Bookings</h2>
          <p className="text-gray-600">
            Booking history will appear here.
          </p>
        </div>
      )}

      {activePage === "profile" && <Profile user={user} />}
    </div>
  );
}
