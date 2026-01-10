import { useState } from "react";

export default function DashboardLayout({ children, role }) {
  const [active, setActive] = useState("overview");

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {/* SIDEBAR */}
      <aside className="bg-white rounded-xl shadow p-4 space-y-2">
        <button onClick={() => setActive("overview")} className="btn btn-ghost w-full">Overview</button>

        {role === "user" && (
          <>
            <button onClick={() => setActive("bookings")} className="btn btn-ghost w-full">My Bookings</button>
            <button onClick={() => setActive("profile")} className="btn btn-ghost w-full">Profile</button>
          </>
        )}

        {role === "admin" && (
          <>
            <button onClick={() => setActive("services")} className="btn btn-ghost w-full">Services</button>
            <button onClick={() => setActive("payments")} className="btn btn-ghost w-full">Payments</button>
            <button onClick={() => setActive("users")} className="btn btn-ghost w-full">Users</button>
          </>
        )}
      </aside>

      {/* CONTENT */}
      <section className="md:col-span-3">
        {children(active)}
      </section>
    </div>
  );
}
