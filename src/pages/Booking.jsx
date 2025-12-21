import React from 'react'
import { useLocation } from 'react-router-dom'
import toast from 'react-hot-toast'

export default function Booking(){
  const { state } = useLocation()
  const service = state?.service || {title:'Sample Service', cost:1000}
  function handleSubmit(e){
    e.preventDefault()
    toast.success('Booking created (mock). Check dashboard.')
  }
  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow">
      <h3 className="font-semibold text-xl">Book: {service.title}</h3>
      <form onSubmit={handleSubmit} className="mt-4 space-y-3">
        <input className="input input-bordered w-full" placeholder="Your name" required />
        <input type="email" className="input input-bordered w-full" placeholder="Your email" required />
        <input type="date" className="input input-bordered w-full" required />
        <input className="input input-bordered w-full" placeholder="Location / address" required />
        <div className="flex justify-end">
          <button className="btn btn-primary">Confirm & Pay</button>
        </div>
      </form>
    </div>
  )
}
