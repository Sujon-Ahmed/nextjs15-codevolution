import React from "react";

const ProductDetails = ({ params }: { params: { productId: string } }) => {
  const { productId } = params;
  return (
    <>
      <h2 className="capitalize text-3xl mt-15 flex items-center justify-center w-full">
        Welcome to the Product Details Page
      </h2>
      <p className="text-center mt-5">
        This page provides information about the {productId} product.
      </p>
    </>
  );
};

export default ProductDetails;
