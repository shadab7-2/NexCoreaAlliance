export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Our Services
        </h1>
        <p className="mt-4 text-lg text-blue-100">
          We build modern, fast, and scalable web applications
        </p>
      </section>

      {/* Services Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid gap-8 md:grid-cols-3">
        {/* Service Card 1 */}
        <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-gray-800">
            Web Development
          </h2>
          <p className="mt-3 text-gray-600">
            We create responsive and high-performance websites using
            Next.js, React, and modern tools.
          </p>
        </div>

        {/* Service Card 2 */}
        <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-gray-800">
            UI / UX Design
          </h2>
          <p className="mt-3 text-gray-600">
            Clean, user-friendly designs focused on usability,
            accessibility, and great user experience.
          </p>
        </div>

        {/* Service Card 3 */}
        <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-gray-800">
            Backend & APIs
          </h2>
          <p className="mt-3 text-gray-600">
            Secure and scalable backend services using Node.js,
            MongoDB, and REST APIs.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-white py-16 text-center">
        <h3 className="text-2xl font-bold text-gray-800">
          Ready to start your project?
        </h3>
        <p className="mt-3 text-gray-600">
          Let’s build something amazing together.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition">
          Contact Us
        </button>
      </section>
    </main>
  );
}
