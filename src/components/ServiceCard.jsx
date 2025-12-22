import React from 'react'
import { Link } from 'react-router-dom'


export default function ServiceCard({service}){
 
  return (
    <div className="card bg-white shadow-md rounded-lg overflow-hidden">
      <img src={service.image} alt={service.title} className="w-full h-40 object-cover"/>
      <div className="p-4">
        <h4 className="font-semibold">{service.title}</h4>
        <p className="text-sm text-gray-600">{service.category} • BDT {service.cost}</p>
        <div className="mt-3 flex justify-between items-center">
          <Link to={`/services/${service.id}`} className="btn btn-xs btn-primary">Details</Link>
          <Link to="/booking" state={{service}} className="btn btn-xs btn-outline">Book</Link>
        </div>
      </div>
    </div>
  )
}
