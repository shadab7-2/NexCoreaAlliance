import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mock Website",
  description: "A modern Next.js mock website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-800`}
      >
        {/* ===== Navbar ===== */}
        <header className="bg-white shadow-md sticky top-0 z-50">
          <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
            
            {/* Logo */}
            <Link href="/" className="text-2xl font-bold text-blue-600">
              MySite
            </Link>

            {/* Navigation Links */}
            <ul className="flex gap-6 font-medium">
              <li>
                <Link
                  href="/home"
                  className="hover:text-blue-600 transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-blue-600 transition"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-blue-600 transition"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-blue-600 transition"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/my-first-blog/1"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        {/* ===== Page Content ===== */}
        <main className="min-h-screen">
          {children}
        </main>

        {/* ===== Footer ===== */}
        <footer className="bg-gray-900 text-gray-300 mt-20">
          <div className="max-w-7xl mx-auto px-6 py-10 grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-xl font-semibold text-white">
                MySite
              </h3>
              <p className="mt-2 text-sm text-gray-400">
                Building modern web experiences with Next.js.
              </p>
            </div>

            <div className="md:text-right">
              <p className="text-sm">
                © {new Date().getFullYear()} MySite. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
