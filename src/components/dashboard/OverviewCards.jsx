export default function OverviewCards({ role }) {
  const cards =
    role === "admin"
      ? [
          { title: "Total Services", value: 12 },
          { title: "Total Users", value: 340 },
          { title: "Payments", value: "BDT 2.3L" },
        ]
      : role === "manager"
      ? [
          { title: "Managed Events", value: 6 },
          { title: "Pending Approvals", value: 2 },
          { title: "Total Revenue", value: "BDT 85K" },
        ]
      : [
          { title: "My Bookings", value: 3 },
          { title: "Completed Events", value: 1 },
          { title: "Pending Payments", value: 1 },
        ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {cards.map((c, i) => (
        <div key={i} className="bg-white p-6 rounded-xl shadow">
          <p className="text-gray-500 text-sm">{c.title}</p>
          <h3 className="text-2xl font-bold text-teal-600">{c.value}</h3>
        </div>
      ))}
    </div>
  );
}
