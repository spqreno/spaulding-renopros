// app/layout.js
import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Stone & Resin – Custom Surfaces for Modern Spaces',
  description:
    'Premium stone and resin flooring, countertops, and outdoor solutions for residential and commercial projects.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased text-gray-900">
        <nav className="fixed top-0 inset-x-0 bg-white shadow-md z-50">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold">
              Stone &amp; Resin
            </Link>
            <div className="space-x-6 hidden md:flex text-gray-700">
              <Link href="/" className="hover:text-blue-600">
                Home
              </Link>
              <Link href="/about" className="hover:text-blue-600">
                About
              </Link>
              <Link href="/services" className="hover:text-blue-600">
                Services
              </Link>
              <Link href="/projects" className="hover:text-blue-600">
                Projects
              </Link>
              <Link href="/contact" className="hover:text-blue-600">
                Contact
              </Link>
            </div>
          </div>
        </nav>
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}