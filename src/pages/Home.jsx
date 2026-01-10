import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import ServiceCard from "../components/ServiceCard";

// Images
import weddingImg from "../assets/wedding.jpg";
import homeImg from "../assets/home.jpg";
import officeImg from "../assets/office.jpg";
import birthdayImg from "../assets/birthday.jpg";
import parlorImg from "../assets/parlor.jpg";
import outdoorImg from "../assets/outdoor.jpg";

const services = [
  { id: "1", title: "Wedding Premium", category: "Wedding", cost: 45000, image: weddingImg },
  { id: "2", title: "Home Makeover", category: "Home", cost: 12000, image: homeImg },
  { id: "3", title: "Office Setup", category: "Office", cost: 25000, image: officeImg },
  { id: "4", title: "Birthday Party", category: "Celebration", cost: 35000, image: birthdayImg },
  { id: "5", title: "Parlor Setup", category: "Professional", cost: 12000, image: parlorImg },
  { id: "6", title: "Outdoor Setup", category: "Outdoor", cost: 25000, image: outdoorImg },
];

export default function Home() {
  return (
    <div className="space-y-24">

      {/* 1️⃣ HERO SECTION */}
      <section className="relative min-h-[65vh] rounded-3xl overflow-hidden bg-gradient-to-br from-emerald-300 via-teal-200 to-cyan-200 shadow-lg">
        <div className="absolute inset-0 bg-white/30 backdrop-blur-sm" />
        <div className="relative z-10 grid md:grid-cols-2 gap-10 p-10 items-center h-full">

          <div>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-teal-900 leading-tight">
              Design. Decorate. <br />
              <span className="text-emerald-700">Celebrate in Style</span>
            </h1>

            <p className="mt-4 text-gray-700 text-lg">
              Premium decoration services for weddings, homes, offices, and celebrations —
              beautifully designed and professionally executed.
            </p>

            <div className="mt-6 flex gap-4 flex-wrap">
              <Link to="/register" className="px-6 py-3 bg-emerald-600 text-white rounded-full font-semibold hover:bg-emerald-700">
                Get Started
              </Link>
              <Link to="/coverage-map" className="px-6 py-3 border-2 border-emerald-600 text-emerald-700 rounded-full font-semibold hover:bg-emerald-50">
                View Coverage
              </Link>
            </div>

            <div className="mt-6 flex gap-6 text-sm text-gray-700">
              <div>⭐ 4.9 Rating</div>
              <div>🎨 50+ Decorators</div>
              <div>🎉 1,000+ Events</div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-xl">
            <Swiper modules={[Pagination, Autoplay]} pagination={{ clickable: true }} autoplay={{ delay: 3000 }} loop>
              {services.map((s) => (
                <SwiperSlide key={s.id}>
                  <img src={s.image} alt={s.title} className="h-[360px] w-full object-cover" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* 2️⃣ CATEGORIES */}
      <section>
        <h2 className="text-2xl font-bold text-center mb-8">Decoration Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {["Wedding", "Home", "Office", "Outdoor"].map((cat) => (
            <div key={cat} className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-teal-700">{cat}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* 3️⃣ HOW IT WORKS */}
      <section className="grid md:grid-cols-3 gap-6 text-center">
        {[
          { title: "Choose Service", desc: "Browse curated decoration packages." },
          { title: "Book & Pay", desc: "Select date, location & confirm booking." },
          { title: "Relax & Enjoy", desc: "Our decorators handle everything." },
        ].map((step, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-bold text-teal-700">{step.title}</h3>
            <p className="text-gray-600 mt-2">{step.desc}</p>
          </div>
        ))}
      </section>

      {/* 4️⃣ FEATURED SERVICES */}
      <section>
        <h2 className="text-2xl font-bold text-center mb-8">Popular Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <ServiceCard key={s.id} service={s} />
          ))}
        </div>
      </section>

      {/* 5️⃣ WHY CHOOSE US */}
      <section className="bg-white rounded-3xl p-10 shadow">
        <h2 className="text-2xl font-bold text-center mb-8">Why Choose StyleDecor?</h2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div>✔ Experienced Professionals</div>
          <div>✔ Transparent Pricing</div>
          <div>✔ Timely Execution</div>
        </div>
      </section>

      {/* 6️⃣ STATISTICS */}
      <section className="grid md:grid-cols-4 gap-6 text-center">
        {[
          { label: "Events Completed", value: "1,200+" },
          { label: "Happy Clients", value: "950+" },
          { label: "Cities Covered", value: "15+" },
          { label: "Team Members", value: "50+" },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-2xl font-bold text-emerald-600">{stat.value}</h3>
            <p className="text-gray-600">{stat.label}</p>
          </div>
        ))}
      </section>

      {/* 7️⃣ TESTIMONIALS */}
      <section>
        <h2 className="text-2xl font-bold text-center mb-8">Client Testimonials</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {["Amazing service!", "Beautiful decorations!", "Highly recommended!"].map((t, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow">
              <p className="text-gray-600">{t}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 8️⃣ FAQ */}
      <section className="bg-white rounded-3xl p-10 shadow">
        <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <p><strong>Do you provide custom designs?</strong> Yes, fully customizable.</p>
          <p><strong>How early should I book?</strong> At least 7 days prior.</p>
        </div>
      </section>

      {/* 9️⃣ COVERAGE CTA */}
      <section className="text-center">
        <h2 className="text-2xl font-bold">Available Across Multiple Cities</h2>
        <Link to="/coverage-map" className="inline-block mt-4 px-6 py-3 bg-teal-600 text-white rounded-full">
          View Coverage Map
        </Link>
      </section>

      {/* 🔟 FINAL CTA */}
      <section className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white rounded-3xl p-12 text-center shadow-lg">
        <h2 className="text-3xl font-bold">Ready to Transform Your Event?</h2>
        <p className="mt-2 text-white/90">
          Create an account today and book trusted decorators.
        </p>
        <Link to="/register" className="inline-block mt-6 px-8 py-3 border-2 border-white rounded-full font-semibold hover:bg-white hover:text-emerald-600">
          Create Account
        </Link>
      </section>

      

    </div>
  );
}
