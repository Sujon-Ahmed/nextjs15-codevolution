import Link from "next/link";
import React from "react";

const InnerF2 = () => {
  return (
    <div className="text-2xl font-bold">
      InnerF2{" "}
      <Link href="/f5" className="text-blue-600">
        F5
      </Link>
    </div>
  );
};

export default InnerF2;
