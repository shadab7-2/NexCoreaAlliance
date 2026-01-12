export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Build Modern Web Experiences
          </h1>
          <p className="mt-6 text-lg text-blue-100 max-w-2xl mx-auto">
            A mock website built with Next.js, Tailwind CSS, and modern
            full-stack best practices.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <a
              href="/services"
              className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition"
            >
              Our Services
            </a>
            <a
              href="/contact"
              className="px-6 py-3 border border-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid gap-10 md:grid-cols-3">
        <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-gray-800">
            Fast Performance
          </h2>
          <p className="mt-3 text-gray-600">
            Server-side rendering and optimized assets for blazing-fast load
            times.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-gray-800">
            SEO Friendly
          </h2>
          <p className="mt-3 text-gray-600">
            Built with Next.js App Router and metadata support for better
            search visibility.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-gray-800">
            Scalable Architecture
          </h2>
          <p className="mt-3 text-gray-600">
            Clean structure designed to scale from small projects to
            enterprise-level applications.
          </p>
        </div>
      </section>

      {/* Call To Action */}
      <section className="bg-white py-20 text-center">
        <h3 className="text-3xl font-bold text-gray-800">
          Ready to build something amazing?
        </h3>
        <p className="mt-4 text-gray-600">
          Explore our services and see how we can help your business grow.
        </p>
        <a
          href="/services"
          className="inline-block mt-6 px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
        >
          Get Started
        </a>
      </section>
    </main>
  );
}
