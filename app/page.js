// app/page.js
import React from 'react';

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/resin-closeup.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Beautiful Stone &amp; Resin Surfaces
          </h1>
          <p className="text-lg md:text-xl text-white mb-6 max-w-2xl">
            Durable, low-maintenance solutions for driveways, floors, and countertops.
          </p>
          <a
            href="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white uppercase tracking-wide px-8 py-3 rounded"
          >
            Get a Quote
          </a>
        </div>
      </section>

      {/* SVG Divider */}
      <div className="-mt-1">
        <svg viewBox="0 0 1440 80" className="w-full h-20">
          <path
            fill="#ffffff"
            d="M0,0 C600,100 800,-100 1440,0 L1440,80 L0,80 Z"
          />
        </svg>
      </div>

      {/* About Section */}
      <section className="bg-white py-16 px-6 text-center">
        <h2 className="text-4xl font-semibold mb-6">About Stone &amp; Resin</h2>
        <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed">
          We craft premium surfaces combining natural stone with high-performance resins.
          Our installations are slip-resistant, UV-stable, and built to withstand the
          toughest environments while looking stunning for years.
        </p>
      </section>

      {/* Services Preview */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-4xl font-semibold text-center mb-10">Our Services</h2>
        <div className="max-w-6xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <ServiceCard title="Driveways" image="/resin-finish.jpeg" />
          <ServiceCard title="Countertops" image="/kitchen-after.jpeg" />
          <ServiceCard title="Garage Floors" image="/garage-interior.jpeg" />
        </div>
        <div className="text-center mt-8">
          <a href="/services" className="text-blue-600 hover:underline">
            View All Services →
          </a>
        </div>
      </section>

      {/* Portfolio Teaser */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-4xl font-semibold mb-6">Recent Projects</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {['resin-finish.jpeg','frontporch-after.jpeg','garage-interior.jpeg','kitchen-after.jpeg'].map((src, i) => (
            <img
              key={i}
              src={`/${src}`}
              alt=""
              className="rounded shadow object-cover h-64 w-full"
            />
          ))}
        </div>
        <a href="/projects" className="mt-6 inline-block text-blue-600 hover:underline">
          See More →
        </a>
      </section>

      {/* Contact CTA */}
      <section className="bg-blue-600 text-white py-16 px-6 text-center">
        <h2 className="text-4xl font-semibold mb-4">Ready to Start?</h2>
        <p className="mb-8">Contact us today for a free, no-obligation quote.</p>
        <a href="tel:5137878798" className="bg-white text-blue-600 px-8 py-3 rounded uppercase font-bold">
          Call 513-787-8798
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-400 text-center py-6">
        <p>&copy; {new Date().getFullYear()} Stone &amp; Resin. All rights reserved.</p>
      </footer>
    </>
  );
}

function ServiceCard({ title, image }) {
  return (
    <a
      href={`/services/${title.toLowerCase().replace(/ /g, '-')}`}
      className="block overflow-hidden bg-white rounded shadow hover:shadow-lg transition"
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
    </a>
  );
}
