import Link from "next/link";
import React from "react";

const F2 = () => {
  return (
    <h2 className="text-2xl font-bold">
      F2{" "}
      <Link href="/f4" className="text-blue-600">
        F4
      </Link>
    </h2>
  );
};

export default F2;
