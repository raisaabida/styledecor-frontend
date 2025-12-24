import React, { useEffect, useState } from 'react';
import api from '../api/axios';
import ServiceCard from '../components/ServiceCard';

export default function Services() {
  const [services, setServices] = useState([]);
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true);
        setError('');

        const res = await api.get('/api/services');

        // Backend returns: { success: true, services: [...] }
        if (!res.data || !Array.isArray(res.data.services)) {
          throw new Error('Invalid API response');
        }

        setServices(res.data.services);
      } catch (err) {
        console.error('Failed to fetch services:', err);
        setError('Failed to load services');
        setServices([]);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  // Filter logic
  const filteredServices = services.filter(service => {
    const title = service.title?.toLowerCase() || '';
    const matchesQuery = title.includes(query.toLowerCase());
    const matchesCategory =
      category === 'all' || service.category === category;

    return matchesQuery && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Search & Filter */}
      <div className="flex flex-col md:flex-row gap-3 mb-6">
        <input
          type="text"
          placeholder="Search services..."
          value={query}
          onChange={e => setQuery(e.target.value)}
          className="input input-bordered flex-1"
        />

        <select
          value={category}
          onChange={e => setCategory(e.target.value)}
          className="select select-bordered w-full md:w-56"
        >
          <option value="all">All categories</option>
          <option value="wedding">Wedding</option>
          <option value="home">Home</option>
          <option value="office">Office</option>
          <option value="celebration">Celebration</option>
          <option value="professional">Professional</option>
        </select>
      </div>

      {/* States */}
      {loading && <p>Loading services...</p>}

      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && filteredServices.length === 0 && (
        <p>No services found.</p>
      )}

      {!loading && !error && filteredServices.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredServices.map(service => (
            <ServiceCard
              key={service._id}
              service={service}
            />
          ))}
        </div>
      )}
    </div>
  );
}