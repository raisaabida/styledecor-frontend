import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";


export default function DashboardPayments() {
  const { user } = useContext(AuthContext);
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    if (!user?.email) return;

    axios
      .get(`${import.meta.env.VITE_API_URL}/api/payment/${user.email}`)
      .then((res) => {
        setPayments(res.data);
        setLoading(false);
      });
  }, [user]);

  if (loading) {
    return <p className="text-center py-10">Loading payments...</p>;
  }


  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-teal-700">
        Payment History
      </h2>

      {payments.length === 0 ? (
        <p>No payments found.</p>
      ) : (
        <div className="space-y-4">
          {payments.map((p) => (
            <div
              key={p._id}
              className="border p-4 rounded-lg shadow-sm bg-white"
            >
              <p>
                <span className="font-semibold">Amount:</span> ${p.amount}
              </p>
              <p>
                <span className="font-semibold">Transaction ID:</span>{" "}
                {p.transactionId}
              </p>
              <p>
                <span className="font-semibold">Date:</span>{" "}
                {new Date(p.date).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
  
}
