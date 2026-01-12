import Image from "next/image";

export default async function BlogDetailPage({ params }) {
  const { title, id } = await params;

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <article className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        
        {/* Blog Image */}
        <div className="relative w-full h-80">
          <Image
            src="/img.jpg"
            alt="Blog Image"
            fill
            className="object-cover"
            placeholder="blur"
            blurDataURL="/blurred.jpg"
            priority
          />
        </div>

        {/* Blog Content */}
        <div className="p-8">
          <span className="text-sm text-blue-600 font-medium">
            Blog ID: {id}
          </span>

          <h1 className="mt-2 text-3xl font-bold text-gray-800 capitalize">
            {/* {title.replaceAll("-", " ")} */}
          </h1>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Welcome to this blog post. This is a mock blog detail page built
            using Next.js App Router. Here you can display blog content fetched
            from a database or API in real-world applications.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            This page demonstrates dynamic routing, server components, and
            image optimization using <strong>next/image</strong>.
          </p>
        </div>
      </article>
    </main>
  );
}
