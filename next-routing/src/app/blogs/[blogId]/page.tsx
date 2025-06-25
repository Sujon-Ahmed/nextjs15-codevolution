import { blogPosts } from "@/app/lib/blogs";
import { notFound } from "next/navigation";

interface BlogPostProps {
  params: {
    blogId: string;
  };
}

export default function BlogPostDetails({ params }: BlogPostProps) {
  const blog = blogPosts.find((b) => b.id === params.blogId);

  if (!blog) {
    notFound();
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-10 bg-white shadow-md rounded-xl mt-15">
      <h2 className="text-3xl font-bold mb-4">{blog.title}</h2>
      <p className="text-gray-700 text-lg">{blog.content}</p>
    </div>
  );
}
