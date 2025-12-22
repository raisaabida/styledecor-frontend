import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

export default function Payment() {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useContext(AuthContext);

  const handlePayment = async () => {
    const { data } = await axios.post(
      `${import.meta.env.VITE_API_URL}/api/payment/create-intent`,
      { amount: 10 }
    );

    const card = elements.getElement(CardElement);

    const result = await stripe.confirmCardPayment(data.clientSecret, {
      payment_method: {
        card,
        billing_details: {
          email: user.email,
        },
      },
    });

    if (result.paymentIntent.status === "succeeded") {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/api/payment/save`,
        {
          email: user.email,
          amount: 10,
          transactionId: result.paymentIntent.id,
        }
      );

      toast.success("Payment successful!");
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Complete Payment</h2>

      <CardElement className="border p-3 rounded" />

      <button onClick={handlePayment} className="btn btn-primary w-full mt-4">
        Pay $10
      </button>
    </div>
  );
}
