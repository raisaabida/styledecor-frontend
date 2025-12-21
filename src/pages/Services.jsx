import React, { useState, useEffect } from 'react';
import ServiceCard from '../components/ServiceCard';
import axios from 'axios';

export default function Services() {
  const [services, setServices] = useState([]);
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');
  const [loading, setLoading] = useState(true);

  // Fetch services from backend
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await axios.get('/api/services'); // adjust endpoint if different
        setServices(res.data);
      } catch (error) {
        console.error('Failed to fetch services:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  // Filtering logic
  const filtered = services.filter(service => {
    const matchesQuery = service.title.toLowerCase().includes(query.toLowerCase());
    const matchesCategory = category === 'all' || service.category === category;
    return matchesQuery && matchesCategory;
  });

  return (
    <div>
      <div className="flex gap-2 mb-4">
        <input
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search services..."
          className="input input-bordered flex-1"
        />
        <select
          className="select select-bordered w-48"
          value={category}
          onChange={e => setCategory(e.target.value)}
        >
          <option value="all">All categories</option>
          <option value="wedding">Wedding</option>
          <option value="home">Home</option>
          <option value="office">Office</option>
          <option value="celebration">Celebration</option>
          <option value="professional">Professional</option>
        </select>
      </div>

      {loading ? (
        <p>Loading services...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {filtered.map(s => <ServiceCard key={s._id || s.id} service={s} />)}
        </div>
      )}
    </div>
  );
}
