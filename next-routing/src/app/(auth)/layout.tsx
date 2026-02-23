"use client";
import { Geist, Geist_Mono } from "next/font/google";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const navLinks = [
  {
    id: 1,
    name: "Login",
    href: "/login",
  },
  {
    id: 2,
    name: "Register",
    href: "/register",
  },
];

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [input, setInput] = useState("");
  const pathname = usePathname();
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="bg-white shadow-md rounded-xl px-8 py-4 mt-5 max-w-md mx-auto">
          <ul className="flex justify-around space-x-6">
            {navLinks.map((item) => {
              const isActive =
                pathname == item.href ||
                (pathname.startsWith(item.href) && item.href != "/");
              return (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className={
                      isActive
                        ? "text-blue-600"
                        : "text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                    }
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type something..."
          className="border p-2 rounded mb-4 w-full max-w-md mx-auto block"
        />
        {children}
      </body>
    </html>
  );
}
