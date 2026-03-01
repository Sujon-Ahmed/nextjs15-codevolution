import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./inc/header";
// import { ErrorWrapper } from "./error-wrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Learn Next.js 15",
    template: "%s | Next.js",
    absolute: "",
  },
  description: "Learn next.js 15 with Codevolution",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <div className="px-16"> {children}</div>
        {/* <ErrorWrapper>{children}</ErrorWrapper> */}
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
