import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Learn Next.js 15",
  description: "Learn next.js 15 with Codevolution",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <nav className="bg-white shadow-md rounded-xl px-8 py-4 mt-5 max-w-md mx-auto">
        <ul className="flex justify-around space-x-6">
          <li>
            <Link
              href="/about"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/profile"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              Profile
            </Link>
          </li>
          <li>
            <Link
              href="/blogs"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              Blogs
            </Link>
          </li>
          <li>
            <Link
              href="/products"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              href="/docs"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              Docs
            </Link>
          </li>
        </ul>
      </nav>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
      <footer
        style={{
          backgroundColor: "#333",
          textAlign: "center",
          padding: "20px",
          position: "fixed",
          width: "100%",
          bottom: 0,
        }}
      >
        <p className="text-slate-100">Copyright © {new Date().getFullYear()}</p>
      </footer>
    </html>
  );
}
