import React from "react";
import { useLocation, Link } from "react-router-dom";
import toast from "react-hot-toast";

export default function Booking() {
  const { state } = useLocation();

  const service = state?.service || {
    title: "Sample Service",
    cost: 1000,
    category: "General",
  };

  function handleSubmit(e) {
    e.preventDefault();
    toast.success("Booking created successfully. Proceed to payment.");
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">

      {/* HEADER */}
      <div>
        <h2 className="text-2xl font-bold">Confirm Your Booking</h2>
        <p className="text-gray-600">
          Please review the service details and provide booking information.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* BOOKING FORM */}
        <div className="md:col-span-2 bg-white p-6 rounded-xl shadow space-y-4">
          <h3 className="font-semibold text-lg">Booking Information</h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              className="input input-bordered w-full"
              placeholder="Your full name"
              required
            />

            <input
              type="email"
              className="input input-bordered w-full"
              placeholder="Your email address"
              required
            />

            <input
              type="date"
              className="input input-bordered w-full"
              required
            />

            <input
              className="input input-bordered w-full"
              placeholder="Event location / address"
              required
            />

            <textarea
              className="textarea textarea-bordered w-full"
              placeholder="Special instructions (optional)"
            />

            <div className="flex justify-end gap-3">
              <Link to="/services" className="btn btn-ghost">
                Cancel
              </Link>
              <button className="btn btn-primary">
                Confirm Booking
              </button>
            </div>
          </form>
        </div>

        {/* SERVICE SUMMARY */}
        <div className="bg-white p-6 rounded-xl shadow space-y-4">
          <h3 className="font-semibold text-lg">Service Summary</h3>

          <div className="text-sm space-y-1">
            <p>
              <span className="font-medium">Service:</span>{" "}
              {service.title}
            </p>
            <p>
              <span className="font-medium">Category:</span>{" "}
              {service.category}
            </p>
          </div>

          <div className="border-t pt-3">
            <p className="flex justify-between text-sm">
              <span>Service charge</span>
              <span>BDT {service.cost}</span>
            </p>
            <p className="flex justify-between text-sm">
              <span>Platform fee</span>
              <span>BDT 0</span>
            </p>
            <p className="flex justify-between font-bold mt-2">
              <span>Total</span>
              <span>BDT {service.cost}</span>
            </p>
          </div>

          <p className="text-xs text-gray-500">
            Payment will be completed in the next step.
          </p>
        </div>
      </div>
    </div>
  );
}
