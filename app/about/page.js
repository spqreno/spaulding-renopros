// app/about/page.js
import React from 'react';

export default function AboutPage() {
  return (
    <section className="max-w-3xl mx-auto py-20 px-6">
      <h1 className="text-4xl font-semibold mb-6 text-center">About Stone &amp; Resin</h1>
      <p className="mb-4 text-gray-700 leading-relaxed">
        Stone &amp; Resin specializes in blending natural aggregates with advanced resin
        technology to create seamless surfaces for indoor and outdoor environments.
      </p>
      <p className="text-gray-700 leading-relaxed">
        Our team brings years of experience in decorative surfacing. We pride ourselves
        on craftsmanship, clear communication, and projects delivered on time and on
        budget. Whether you need a stunning driveway, a modern kitchen countertop, or a
        durable garage floor, we are ready to help.
      </p>
    </section>
  );
}
