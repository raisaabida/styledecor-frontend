import React from "react";
import { Link } from "react-router-dom";

export default function ServiceCard({ service, loading = false }) {
  if (loading) {
    return (
      <div className="bg-white rounded-xl shadow-md animate-pulse h-[360px]">
        <div className="h-40 bg-gray-200"></div>
        <div className="p-4 space-y-3">
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          <div className="h-3 bg-gray-200 rounded w-1/2"></div>
          <div className="flex justify-between mt-6">
            <div className="h-8 w-20 bg-gray-200 rounded"></div>
            <div className="h-8 w-20 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition flex flex-col h-[360px]">
      {/* IMAGE */}
      <img
        src={service.image}
        alt={service.title}
        className="w-full h-40 object-cover"
      />

      {/* CONTENT */}
      <div className="p-4 flex flex-col flex-grow">
        <h4 className="font-semibold text-lg">{service.title}</h4>

        {/* SHORT DESCRIPTION */}
        <p className="text-sm text-gray-600 mt-1 flex-grow">
          Professional {service.category.toLowerCase()} decoration service with premium design and setup.
        </p>

        {/* META INFO */}
        <div className="mt-3 text-sm text-gray-500">
          <span className="font-medium text-teal-600">
            BDT {service.cost}
          </span>{" "}
          • {service.category}
        </div>

        {/* ACTIONS */}
        <div className="mt-4 flex justify-between gap-2">
          <Link
            to={`/services/${service.id}`}
            className="px-3 py-2 text-sm rounded-lg bg-teal-600 text-white hover:bg-teal-700 transition text-center flex-1"
          >
            View Details
          </Link>

          <Link
            to="/booking"
            state={{ service }}
            className="px-3 py-2 text-sm rounded-lg border border-teal-600 text-teal-600 hover:bg-teal-50 transition text-center flex-1"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
}
