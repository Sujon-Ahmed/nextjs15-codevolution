import Link from "next/link";
import { blogPosts } from "../_lib/blogs";

export default async function Blogs() {
  await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate loading delay
  return (
    <>
      <h2 className="capitalize text-3xl mt-15 flex items-center justify-center w-full">
        Welcome to the Blogs Page
      </h2>
      <ul className="flex flex-col items-center space-y-4 mt-10 mb-5">
        {blogPosts.map((blog) => (
          <li
            key={blog.id}
            className="w-full max-w-md bg-white shadow-md rounded-xl px-8 py-4"
          >
            <Link href={`/blogs/${blog.id}`} className="hover:text-blue-500">
              <h2 className="text-xl font-semibold">{blog.title}</h2>
              <p className="text-gray-600 mt-2">
                {blog.content.substring(0, 100)}...
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
