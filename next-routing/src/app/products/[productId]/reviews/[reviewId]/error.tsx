"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";

const ErrorBoundary = ({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) => {
  const router = useRouter();
  const reload = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };
  return (
    <div className="px-16">
      {error.message}{" "}
      <button className="border border-sky-500 px-3 block" onClick={reload}>
        Try again
      </button>
    </div>
  );
};

export default ErrorBoundary;
