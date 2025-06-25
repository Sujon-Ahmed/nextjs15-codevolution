import Link from "next/link";

export default function Home() {
  return (
    <>
      <h2 className="capitalize text-3xl mt-15 flex items-center justify-center w-full">
        welcome home page
      </h2>

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
    </>
  );
}
