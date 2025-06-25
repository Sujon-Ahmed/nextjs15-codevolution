import { products } from "@/app/_lib/products";
import { notFound } from "next/navigation";
import React from "react";

interface ReviewParams {
  params: {
    productId: string;
    reviewId: string;
  };
}

const ProductReview = ({ params }: ReviewParams) => {
  const product = products.find((p) => p.id === params.productId);
  const review = params.reviewId;

  if (!product) {
    notFound();
  }

  if (!review || review.length <= 6) {
    notFound();
  }

  return (
    <h2 className="capitalize text-3xl mt-15 flex items-center justify-center w-full">
      Product Review for Product ID: {params.productId} and Review ID:{" "}
      {params.reviewId}
    </h2>
  );
};

export default ProductReview;
