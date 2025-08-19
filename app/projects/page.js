// app/projects/page.js
import React from 'react';

const images = [
  'resin-finish.jpeg',
  'frontporch-after.jpeg',
  'garage-interior.jpeg',
  'kitchen-after.jpeg',
];

export default function ProjectsPage() {
  return (
    <section className="max-w-6xl mx-auto py-20 px-6">
      <h1 className="text-4xl font-semibold mb-10 text-center">Project Gallery</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {images.map((src, i) => (
          <img
            key={i}
            src={`/${src}`}
            alt="Project image"
            className="rounded shadow object-cover h-64 w-full"
          />
        ))}
      </div>
    </section>
  );
}
