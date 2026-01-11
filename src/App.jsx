import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import About from "./pages/About";
import Contact from "./pages/Contact";


import Home from "./pages/Home";
import Services from "./pages/Services";
import ServiceDetails from "./pages/ServiceDetails";
import Booking from "./pages/Booking";
import Dashboard from "./pages/Dashboard";
import DashboardPayments from "./pages/DashboardPayments";
import Payment from "./pages/Payment";
import CoverageMap from "./pages/CoverageMap";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ErrorPage from "./pages/ErrorPage";

import PrivateRoute from "./routes/PrivateRoute";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-teal-50 to-white dark:from-gray-900 dark:to-gray-950">
      <Navbar />

      <main className="flex-grow w-full max-w-7xl mx-auto px-4 py-8">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<ServiceDetails />} />
          <Route path="/coverage-map" element={<CoverageMap />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/about" element={<About />} />
<Route path="/contact" element={<Contact />} />


          {/* Protected Routes */}
          <Route
            path="/booking"
            element={
              <PrivateRoute>
                <Booking />
              </PrivateRoute>
            }
          />
          <Route
            path="/payment"
            element={
              <PrivateRoute>
                <Payment />
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard/payments"
            element={
              <PrivateRoute>
                <DashboardPayments />
              </PrivateRoute>
            }
          />

          {/* Error */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
