import { products } from "@/app/_lib/products";
import { notFound } from "next/navigation";
import React from "react";

interface ReviewParams {
  params: Promise<{
    productId: string;
    reviewId: string;
  }>;
}

const getRandomInt = (count: number) => {
  return Math.floor(Math.random() * count) + 1;
};

const ProductReview = async ({ params }: ReviewParams) => {
  const { productId, reviewId } = await params;
  const random = getRandomInt(2);
  if (random === 1) {
    throw new Error("Random error occurred while fetching review data.");
  }
  const product = products.find((p) => p.id === productId);
  const review = reviewId;

  if (!product) {
    notFound();
  }

  if (!review || review.length <= 6) {
    notFound();
  }

  return (
    <h2 className="capitalize text-3xl mt-15 flex items-center justify-center w-full">
      Product Review for Product ID: {productId} and Review ID: {reviewId}
    </h2>
  );
};

export default ProductReview;
