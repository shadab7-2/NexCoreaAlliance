import "./global.css"
import Link from 'next/link';
export default function BlogList() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-10"> 
      {/* Page Header */}
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800">
          Blog List
        </h1>
        <p className="mt-3 text-gray-600">
          Read our latest blogs and tutorials
        </p>
      </div>

      {/* Blog Cards */}
      <div className="max-w-4xl mx-auto grid gap-6">
        {/* Blog Item 1 */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-gray-800">
            My First Blog
          </h2>
          <p className="text-gray-600 mt-2">
            This is a simple introduction blog about learning Next.js.
          </p>
          <Link
            href="/blog/my-first-blog/1"
            className="inline-block mt-4 text-black-600 font-medium hover:underline"
          >
            Read more →
          </Link>
        </div>

        {/* Blog Item 2 */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-gray-800">
            Understanding App Router
          </h2>
          <p className="text-gray-600 mt-2">
            Learn how routing works in Next.js using the App Router.
          </p>
          <Link
            href="/blog/app-router/2"
            className="inline-block mt-4 text-blue-600 font-medium hover:underline"
          >
            Read more →
          </Link>
        </div>
      </div>
    </main>
  );
}
