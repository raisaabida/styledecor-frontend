import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Services from './pages/Services'
import ServiceDetails from './pages/ServiceDetails'
import Booking from './pages/Booking'
import Dashboard from './pages/Dashboard'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from "./pages/Login"
import Payment from "./pages/Payment"
import ErrorPage from "./pages/ErrorPage"
import CoverageMap from "./pages/CoverageMap"
import Register from "./pages/Register"
import PrivateRoute from "./routes/PrivateRoute"
import DashboardPayments from "./pages/DashboardPayments"

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-teal-50 to-white">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<ServiceDetails />} />
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
          <Route path="/coverage-map" element={<CoverageMap />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
