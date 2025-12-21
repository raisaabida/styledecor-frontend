import React from "react";
import toast from "react-hot-toast";

export default function Payment() {
  const handlePayment = () => {
    toast.success("Payment Successful (Mock)");
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold text-teal-700 mb-4">
        Complete Payment
      </h2>

      <div className="space-y-3">
        <input className="input input-bordered w-full" placeholder="Card Number" />
        <input className="input input-bordered w-full" placeholder="Card Holder Name" />

        <div className="grid grid-cols-2 gap-3">
          <input className="input input-bordered" placeholder="MM/YY" />
          <input className="input input-bordered" placeholder="CVC" />
        </div>

        <button onClick={handlePayment} className="btn btn-primary w-full mt-3">
          Pay Now
        </button>
      </div>
    </div>
  );
}
