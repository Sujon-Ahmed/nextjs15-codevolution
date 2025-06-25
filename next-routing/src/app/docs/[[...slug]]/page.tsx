import React from "react";

const Docs = async ({ params }: { params: { slug: string[] } }) => {
  const { slug } = await params;
  if (slug?.length === 2) {
    return (
      <h2 className="capitalize text-3xl mt-15 flex items-center justify-center w-full">
        Viewing docs for feature {slug[0]} and concept {slug[1]}
      </h2>
    );
  } else if (slug?.length === 1) {
    return (
      <h2 className="capitalize text-3xl mt-15 flex items-center justify-center w-full">
        Viewing docs for feature {slug[0]}
      </h2>
    );
  }

  return (
    <h2 className="capitalize text-3xl mt-15 flex items-center justify-center w-full">
      Docs Home Page
    </h2>
  );
};

export default Docs;
