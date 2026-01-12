export const metadata = {
  title: "About Us | Mock Website",
  description:
    "Learn more about our mission, vision, and the technologies we use to build modern web applications.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-indigo-600 text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          About Us
        </h1>
        <p className="mt-4 text-indigo-100 max-w-2xl mx-auto">
          We are passionate about building modern, scalable, and
          high-performance web applications.
        </p>
      </section>

      {/* Content Section */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="bg-white p-10 rounded-xl shadow">
          <h2 className="text-2xl font-semibold text-gray-800">
            Who We Are
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            This mock website is built using Next.js App Router and Tailwind
            CSS to demonstrate modern frontend and full-stack development
            practices. Our focus is on clean architecture, performance,
            scalability, and SEO.
          </p>

          <h2 className="mt-8 text-2xl font-semibold text-gray-800">
            Our Mission
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Our mission is to create fast, reliable, and user-friendly web
            experiences while following industry best practices and modern
            technologies.
          </p>

          <h2 className="mt-8 text-2xl font-semibold text-gray-800">
            Technologies We Use
          </h2>
          <ul className="mt-4 list-disc list-inside text-gray-600 space-y-2">
            <li>Next.js (App Router)</li>
            <li>React</li>
            <li>Tailwind CSS</li>
            <li>Node.js & REST APIs</li>
            <li>Modern SEO techniques</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
