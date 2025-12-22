import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import App from "./App.jsx";
import "./styles/index.css";
import AuthProvider from "./context/AuthContext";

// Load Stripe public key
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Elements stripe={stripePromise}>
          <App />
          <Toaster position="top-right" />
        </Elements>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
