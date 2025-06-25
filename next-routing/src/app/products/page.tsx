import Link from "next/link";
import { products } from "../_lib/products";

export default function Products() {
  return (
    <>
      <h2 className="capitalize text-3xl mt-15 flex items-center justify-center w-full">
        Welcome to the Products Page
      </h2>
      <p className="text-center mt-5">
        This page provides information about the available products.
      </p>

      <ul className="flex flex-col items-center space-y-4 mt-10 mb-5">
        {products.map((product) => (
          <li
            key={product.id}
            className="w-full max-w-md bg-white shadow-md rounded-xl px-8 py-4"
          >
            <Link
              href={`/products/${product.id}`}
              className="hover:text-blue-500"
            >
              <h2 className="text-xl font-semibold">{product.title}</h2>
              <p className="text-gray-600 mt-2">
                {product.content.substring(0, 100)}...
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
