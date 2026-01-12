import Image from "next/image";

export const metadata = {
  title: "Services | Mock Website",
  description: "We provide high-quality web development and digital services.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://example.com/services",
  },
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Our Services",
    description: "We provide the best services to our clients.",
    url: "https://example.com/services",
    images: [
      {
        url: "https://example.com/services/image.jpg",
        width: 1200,
        height: 630,
        alt: "Services Page",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services",
    description: "We provide the best services to our clients.",
    images: ["https://example.com/services/image.jpg"],
  },
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white text-center py-20">
        <h1 className="text-4xl md:text-5xl font-bold">
          Our Services
        </h1>
        <p className="mt-4 text-blue-100 max-w-2xl mx-auto">
          We help businesses build modern, fast, and scalable web applications.
        </p>
      </section>

      {/* Services Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid gap-8 md:grid-cols-3">
        {/* Card 1 */}
        <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-gray-800">
            Web Development
          </h2>
          <p className="mt-3 text-gray-600">
            Building responsive and SEO-friendly websites using Next.js
            and modern technologies.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-gray-800">
            UI / UX Design
          </h2>
          <p className="mt-3 text-gray-600">
            Clean, user-focused designs that improve usability
            and engagement.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-gray-800">
            Backend & APIs
          </h2>
          <p className="mt-3 text-gray-600">
            Secure backend solutions with Node.js, MongoDB,
            and REST APIs.
          </p>
        </div>
      </section>

      {/* Image Section */}
      <section className="max-w-5xl mx-auto px-6 pb-20 text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">
          Delivering Quality & Performance
        </h3>

        <div className="relative w-full h-80 rounded-xl overflow-hidden shadow-md">
          <Image
            src="/img.jpg"
            alt="Nature image"
            fill
            className="object-cover"
            placeholder="blur"
            blurDataURL="/image.jpg"
            priority
          />
        </div>
      </section>
    </main>
  );
}
