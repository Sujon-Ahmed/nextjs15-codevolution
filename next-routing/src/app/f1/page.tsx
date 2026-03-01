import Link from "next/link";
import React from "react";

const F1 = () => {
  return (
    <h2 className="text-2xl font-bold space-x-2">
      F1{" "}
      <Link className="text-blue-600" href="/f1/f2">
        F2
      </Link>
      <Link className="text-blue-600" href="/f3">
        F3
      </Link>
    </h2>
  );
};

export default F1;
