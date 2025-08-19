// app/services/page.js
import React from 'react';

const services = [
  {
    title: 'Resin-Bound Driveways',
    desc: 'Permeable, weather-resistant driveways available in a range of natural aggregates.',
  },
  {
    title: 'Kitchen Countertops',
    desc: 'Custom countertops that combine elegance with durability and easy maintenance.',
  },
  {
    title: 'Garage & Workshop Floors',
    desc: 'Hard-wearing resin floors that resist stains and chemicals while looking great.',
  },
];

export default function ServicesPage() {
  return (
    <section className="max-w-5xl mx-auto py-20 px-6">
      <h1 className="text-4xl font-semibold mb-10 text-center">Our Services</h1>
      <div className="grid gap-8 sm:grid-cols-2">
        {services.map((s) => (
          <div key={s.title} className="p-6 border rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold mb-2">{s.title}</h2>
            <p className="text-gray-700">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
