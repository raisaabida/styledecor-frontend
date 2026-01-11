import OverviewCards from "./OverviewCards";

export default function ManagerDashboard({ activePage }) {
  if (activePage === "bookings") {
    return (
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-4">Managed Bookings</h2>

        <table className="table w-full">
          <thead>
            <tr>
              <th>Service</th>
              <th>Client</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Wedding Decor</td>
              <td>client@gmail.com</td>
              <td>12 Feb 2026</td>
              <td className="text-teal-600 font-semibold">Approved</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  if (activePage === "payments") {
    return (
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-4">Payment Overview</h2>

        <table className="table w-full">
          <thead>
            <tr>
              <th>Client</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>client@gmail.com</td>
              <td>৳15,000</td>
              <td>10 Feb 2026</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  return <OverviewCards role="manager" />;
}
