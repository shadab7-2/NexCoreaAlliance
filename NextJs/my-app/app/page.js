import Link from "next/link";

export const metadata = {
  title: "Main Page | Mock Website",
  description:
    "A modern mock website built with Next.js App Router and Tailwind CSS.",
};

export default function MainPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* ===== Hero Section ===== */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Build Fast & Modern Web Applications
          </h1>
          <p className="mt-6 text-lg text-blue-100 max-w-2xl mx-auto">
            A mock website created using Next.js App Router, Tailwind CSS,
            and modern best practices.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/services"
              className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition"
            >
              Explore Services
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 border border-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* ===== Features Section ===== */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid gap-10 md:grid-cols-3">
        <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-gray-800">
            High Performance
          </h2>
          <p className="mt-3 text-gray-600">
            Optimized rendering using Server Components and modern caching
            strategies.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-gray-800">
            SEO Optimized
          </h2>
          <p className="mt-3 text-gray-600">
            Built-in metadata and server rendering for better search engine
            visibility.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-gray-800">
            Scalable Structure
          </h2>
          <p className="mt-3 text-gray-600">
            Clean App Router architecture designed for real-world projects.
          </p>
        </div>
      </section>

      {/* ===== CTA Section ===== */}
      <section className="bg-white py-20 text-center">
        <h3 className="text-3xl font-bold text-gray-800">
          Start Your Next Project With Us
        </h3>
        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          Learn how modern frameworks like Next.js help build fast,
          scalable, and maintainable web applications.
        </p>

        <Link
          href="/about"
          className="inline-block mt-6 px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
        >
          Learn More About Us
        </Link>
      </section>
    </main>
  );
}
