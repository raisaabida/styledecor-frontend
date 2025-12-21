import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
 // We'll create this

export default function ServiceDetails() {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showBooking, setShowBooking] = useState(false);

  useEffect(() => {
    const fetchService = async () => {
      try {
        const res = await axios.get(`/api/services/${id}`);
        setService(res.data);
      } catch (err) {
        console.error('Failed to fetch service:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchService();
  }, [id]);

  if (loading) return <p>Loading service details...</p>;
  if (!service) return <p>Service not found</p>;

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-semibold">{service.title}</h2>
      <p className="mt-2 text-gray-700">{service.description}</p>
      <p className="mt-4 font-bold">BDT {service.cost}</p>
      <div className="mt-4 flex gap-2">
        <button onClick={() => setShowBooking(true)} className="btn btn-primary">
          Book Now
        </button>
        <button className="btn btn-ghost">Add to wishlist</button>
      </div>

      {showBooking && (
        <BookingModal service={service} onClose={() => setShowBooking(false)} />
      )}
    </div>
  );
}
