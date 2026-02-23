import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
      <h1 className="text-6xl font-bold text-blue-600">404</h1>
      <p className="text-2xl mt-4 text-gray-800">Page Not Found</p>
      <p className="text-gray-500 mt-2 text-center max-w-md">
        Sorry, the page you are looking for doesn`t exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
}
