import React, { useEffect, useMemo, useState } from "react";
import api from "../api/axios";
import ServiceCard from "../components/ServiceCard";

const ITEMS_PER_PAGE = 8;

export default function Services() {
  const [services, setServices] = useState([]);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [priceRange, setPriceRange] = useState("all");
  const [sortBy, setSortBy] = useState("default");
  const [page, setPage] = useState(1);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true);
        const res = await api.get("/api/services");
        setServices(res.data.services || []);
      } catch (err) {
        setError("Failed to load services");
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  /* 🔎 FILTER + SORT */
  const filteredServices = useMemo(() => {
    let data = [...services];

    // Search
    if (query) {
      data = data.filter((s) =>
        s.title.toLowerCase().includes(query.toLowerCase())
      );
    }

    // Category
    if (category !== "all") {
      data = data.filter((s) => s.category === category);
    }

    // Price filter
    if (priceRange !== "all") {
      data = data.filter((s) => {
        if (priceRange === "low") return s.cost <= 15000;
        if (priceRange === "mid") return s.cost > 15000 && s.cost <= 30000;
        if (priceRange === "high") return s.cost > 30000;
        return true;
      });
    }

    // Sorting
    if (sortBy === "price-asc") data.sort((a, b) => a.cost - b.cost);
    if (sortBy === "price-desc") data.sort((a, b) => b.cost - a.cost);
    if (sortBy === "name") data.sort((a, b) => a.title.localeCompare(b.title));

    return data;
  }, [services, query, category, priceRange, sortBy]);

  /* 📄 PAGINATION */
  const totalPages = Math.ceil(filteredServices.length / ITEMS_PER_PAGE);
  const paginatedServices = filteredServices.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-6">

      {/* SEARCH / FILTER BAR */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <input
          type="text"
          placeholder="Search services..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setPage(1);
          }}
          className="input input-bordered w-full"
        />

        <select
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
            setPage(1);
          }}
          className="select select-bordered w-full"
        >
          <option value="all">All Categories</option>
          <option value="Wedding">Wedding</option>
          <option value="Home">Home</option>
          <option value="Office">Office</option>
          <option value="Celebration">Celebration</option>
          <option value="Professional">Professional</option>
        </select>

        <select
          value={priceRange}
          onChange={(e) => {
            setPriceRange(e.target.value);
            setPage(1);
          }}
          className="select select-bordered w-full"
        >
          <option value="all">All Prices</option>
          <option value="low">Below 15k</option>
          <option value="mid">15k – 30k</option>
          <option value="high">Above 30k</option>
        </select>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="select select-bordered w-full"
        >
          <option value="default">Sort By</option>
          <option value="price-asc">Price: Low → High</option>
          <option value="price-desc">Price: High → Low</option>
          <option value="name">Name</option>
        </select>
      </div>

      {/* CONTENT */}
      {error && <p className="text-red-500">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {loading &&
          Array.from({ length: ITEMS_PER_PAGE }).map((_, i) => (
            <ServiceCard key={i} loading />
          ))}

        {!loading &&
          paginatedServices.map((service) => (
            <ServiceCard key={service._id} service={service} />
          ))}
      </div>

      {/* EMPTY */}
      {!loading && paginatedServices.length === 0 && (
        <p className="text-center text-gray-500">No services found.</p>
      )}

      {/* PAGINATION */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className={`px-4 py-2 rounded-lg border ${
                page === i + 1
                  ? "bg-teal-600 text-white"
                  : "bg-white hover:bg-gray-100"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
