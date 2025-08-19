// app/contact/page.js
import React from 'react';

export default function ContactPage() {
  return (
    <section className="max-w-xl mx-auto py-20 px-6">
      <h1 className="text-4xl font-semibold mb-6 text-center">Contact Us</h1>
      <p className="mb-4 text-gray-700 text-center">
        Ready to transform your space? Reach out for a free quote.
      </p>
      <div className="text-center space-y-4 text-gray-700">
        <p>
          <strong>Phone:</strong>{' '}
          <a href="tel:5137878798" className="text-blue-600 hover:underline">
            513-787-8798
          </a>
        </p>
        <p>
          <strong>Email:</strong>{' '}
          <a href="mailto:info@stoneandresin.com" className="text-blue-600 hover:underline">
            info@stoneandresin.com
          </a>
        </p>
        <p>
          <strong>Location:</strong> Amelia, OH
        </p>
      </div>
    </section>
  );
}
