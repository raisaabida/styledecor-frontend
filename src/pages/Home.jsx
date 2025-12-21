import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination, Autoplay } from 'swiper/modules'
import { Link } from 'react-router-dom'

import ServiceCard from '../components/ServiceCard'

// Images
import weddingImg from '../assets/wedding.jpg'
import homeImg from '../assets/home.jpg'
import officeImg from '../assets/office.jpg'
import birthdayImg from '../assets/birthday.jpg'
import parlorImg from '../assets/parlor.jpg'
import outdoorImg from '../assets/outdoor.jpg'

const services = [
  { id: '1', title: 'Wedding Premium', category: 'Wedding', cost: 45000, image: weddingImg },
  { id: '2', title: 'Home Makeover', category: 'Home', cost: 12000, image: homeImg },
  { id: '3', title: 'Office Setup', category: 'Office', cost: 25000, image: officeImg },
  { id: '4', title: 'Birthday Party', category: 'Celebration', cost: 35000, image: birthdayImg },
  { id: '5', title: 'Parlor Setup', category: 'Professional', cost: 12000, image: parlorImg },
  { id: '6', title: 'Outdoor Setup', category: 'Outdoor', cost: 25000, image: outdoorImg },
]

export default function Home() {
  return (
    <div className="space-y-20">

      {/* HERO SECTION */}
      <section className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-emerald-300 via-teal-200 to-cyan-200 shadow-lg">
        <div className="absolute inset-0 bg-white/20 backdrop-blur-sm" />

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 p-10 items-center">

          {/* TEXT */}
          <div>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-teal-900 leading-tight">
              Design. Decorate. <br />
              <span className="text-emerald-700">Celebrate in Style</span>
            </h1>

            <p className="mt-4 text-gray-700 text-lg">
              Book professional decorators for homes, weddings, offices, and ceremonies —
              fast, reliable, and beautifully executed.
            </p>

            {/* ACTION BUTTONS */}
            <div className="mt-6 flex flex-wrap gap-4">
  <Link
    to="/register"
    className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full font-semibold"
  >
    Get Started
  </Link>

  <Link
    to="/coverage-map"
    className="px-6 py-3 border-2 border-emerald-600 text-emerald-700 rounded-full font-semibold hover:bg-emerald-50"
  >
    Service Map
  </Link>
</div>

            {/* TRUST BADGES */}
            <div className="mt-6 flex gap-6 text-sm text-gray-700">
              <div>⭐ 4.9 Rating</div>
              <div>👨‍🎨 50+ Decorators</div>
              <div>🎉 1k+ Events</div>
            </div>
          </div>

          {/* SLIDER */}
          <div className="rounded-xl overflow-hidden shadow-xl">
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000 }}
              loop
            >
              {services.map((s) => (
                <SwiperSlide key={s.id}>
                  <img
                    src={s.image}
                    alt={s.title}
                    className="h-[320px] w-full object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        {[
          { title: 'Choose Service', desc: 'Browse curated decoration packages.' },
          { title: 'Book & Pay', desc: 'Select date, location & confirm booking.' },
          { title: 'Relax & Enjoy', desc: 'Our decorators handle everything.' },
        ].map((step, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-bold text-lg text-teal-700">{step.title}</h3>
            <p className="text-gray-600 mt-2">{step.desc}</p>
          </div>
        ))}
      </section>

      {/* FEATURED SERVICES */}
      <section>
        <h2 className="text-2xl font-bold text-center mb-8">
          Popular Decoration Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s) => (
            <ServiceCard key={s.id} service={s} />
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white rounded-2xl p-10 text-center shadow-lg">
        <h2 className="text-3xl font-bold">Ready to Transform Your Event?</h2>
        <p className="mt-2 text-white/90">
          Book trusted decorators today and make your occasion unforgettable.
        </p>

        <Link
          to="/register"
          className="inline-block mt-6 px-8 py-3 border-2 border-white rounded-full font-semibold hover:bg-white hover:text-emerald-600 transition"
        >
          Create Account
        </Link>
      </section>

    </div>
  )
}
