import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../api/axios";
import ServiceCard from "../components/ServiceCard";

export default function ServiceDetails() {
  const { id } = useParams();

  const [service, setService] = useState(null);
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get(`/api/services/${id}`);
        setService(res.data);

        const all = await api.get("/api/services");
        const filtered = all.data.services.filter(
          (s) => s.category === res.data.category && s._id !== id
        );
        setRelated(filtered.slice(0, 4));
      } catch (err) {
        console.error("Failed to load service", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) return <p className="text-center">Loading service details...</p>;
  if (!service) return <p className="text-center">Service not found</p>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-12">

      {/* HERO */}
      <section className="relative rounded-2xl overflow-hidden shadow-lg">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-[380px] object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-end">
          <div className="p-6 text-white">
            <h1 className="text-3xl font-bold">{service.title}</h1>
            <p className="text-sm opacity-90">{service.category}</p>
          </div>
        </div>
      </section>

      {/* IMAGE GALLERY */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[service.image, service.image, service.image, service.image].map(
            (img, i) => (
              <img
                key={i}
                src={img}
                alt="Gallery"
                className="rounded-lg h-32 w-full object-cover"
              />
            )
          )}
        </div>
      </section>

      {/* DETAILS GRID */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* LEFT */}
        <div className="md:col-span-2 space-y-6">
          <div className="bg-white rounded-xl p-6 shadow">
            <h2 className="text-xl font-semibold mb-2">Overview</h2>
            <p className="text-gray-700">
              {service.description ||
                "This professional decoration service is designed to make your event memorable with elegant design and flawless execution."}
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow">
            <h3 className="font-semibold mb-3">Key Specifications</h3>
            <ul className="text-gray-700 space-y-2 text-sm">
              <li>✔ Category: {service.category}</li>
              <li>✔ Setup Duration: 4–6 hours</li>
              <li>✔ Coverage Area: City-wide</li>
              <li>✔ Customization Available</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-6 shadow">
            <h3 className="font-semibold mb-3">Customer Reviews</h3>

            <div className="space-y-4 text-sm">
              <div>
                <p className="font-medium">⭐⭐⭐⭐⭐ – Ayesha</p>
                <p className="text-gray-600">
                  Beautiful setup and very professional team!
                </p>
              </div>
              <div>
                <p className="font-medium">⭐⭐⭐⭐⭐ – Rahim</p>
                <p className="text-gray-600">
                  Worth every taka. Highly recommended.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <aside className="bg-white rounded-xl p-6 shadow space-y-4">
          <p className="text-2xl font-bold text-emerald-600">
            BDT {service.cost}
          </p>

          <Link
            to="/booking"
            state={{ service }}
            className="btn btn-primary w-full"
          >
            Book Now
          </Link>

          <button className="btn btn-outline w-full">
            Add to Wishlist
          </button>

          <div className="text-sm text-gray-600 space-y-1">
            <p>✔ Trusted professionals</p>
            <p>✔ Secure payment</p>
            <p>✔ Satisfaction guaranteed</p>
          </div>
        </aside>
      </section>

      {/* RELATED SERVICES */}
      {related.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold mb-6">
            Related Services
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {related.map((s) => (
              <ServiceCard key={s._id} service={s} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
