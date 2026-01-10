import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { AuthContext } from "../context/AuthContext";
import { useLocation } from "react-router-dom";

export default function Payment() {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useContext(AuthContext);
  const { state } = useLocation();

  const amount = state?.amount || 10;
  const serviceTitle = state?.serviceTitle || "Decoration Service";

  const [processing, setProcessing] = useState(false);

  const handlePayment = async () => {
    if (!stripe || !elements) return;

    try {
      setProcessing(true);

      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/payment/create-intent`,
        { amount }
      );

      const card = elements.getElement(CardElement);

      const result = await stripe.confirmCardPayment(data.clientSecret, {
        payment_method: {
          card,
          billing_details: {
            email: user?.email,
          },
        },
      });

      if (result.error) {
        toast.error(result.error.message);
        setProcessing(false);
        return;
      }

      if (result.paymentIntent.status === "succeeded") {
        await axios.post(
          `${import.meta.env.VITE_API_URL}/api/payment/save`,
          {
            email: user.email,
            amount,
            transactionId: result.paymentIntent.id,
          }
        );

        toast.success("Payment successful!");
      }
    } catch (err) {
      console.error(err);
      toast.error("Payment failed. Please try again.");
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* PAYMENT FORM */}
        <div className="md:col-span-2 bg-white p-6 rounded-xl shadow space-y-4">
          <h2 className="text-2xl font-bold">Secure Payment</h2>

          <div className="border rounded-lg p-4">
            <CardElement />
          </div>

          <button
            onClick={handlePayment}
            disabled={processing}
            className="btn btn-primary w-full mt-4"
          >
            {processing ? "Processing..." : `Pay BDT ${amount}`}
          </button>

          <p className="text-xs text-gray-500 mt-2">
            Your payment is securely processed by Stripe.
          </p>
        </div>

        {/* SUMMARY */}
        <div className="bg-white p-6 rounded-xl shadow space-y-3">
          <h3 className="font-semibold text-lg">Order Summary</h3>

          <p className="text-sm">
            <span className="font-medium">Service:</span>{" "}
            {serviceTitle}
          </p>

          <div className="border-t pt-3 text-sm space-y-1">
            <div className="flex justify-between">
              <span>Service charge</span>
              <span>BDT {amount}</span>
            </div>
            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span>BDT {amount}</span>
            </div>
          </div>

          <p className="text-xs text-gray-500">
            Logged in as: {user?.email}
          </p>
        </div>
      </div>
    </div>
  );
}
