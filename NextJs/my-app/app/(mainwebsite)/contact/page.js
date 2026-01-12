export const metadata = {
  title: "Contact Us | Mock Website",
  description:
    "Get in touch with us for web development services, project inquiries, or collaboration.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Contact Us
        </h1>
        <p className="mt-4 text-blue-100 max-w-2xl mx-auto">
          Have a question or want to work together? We’d love to hear from you.
        </p>
      </section>

      {/* Contact Content */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-white p-10 rounded-xl shadow">
          <h2 className="text-2xl font-semibold text-gray-800">
            Get In Touch
          </h2>
          <p className="mt-3 text-gray-600">
            Fill out the form below and we’ll get back to you as soon as possible.
          </p>

          {/* Static Contact Form (Mock) */}
          <form className="mt-8 space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                placeholder="your@email.com"
                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Your message"
                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="button"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
