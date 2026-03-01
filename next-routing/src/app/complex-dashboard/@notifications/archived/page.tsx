import Card from "@/components/card";
import Link from "next/link";
import React from "react";

const ArchivedNotifications = () => {
  return (
    <Card>
      Archived Notifications{" "}
      <Link className="text-blue-500" href="/complex-dashboard">
        Default
      </Link>
    </Card>
  );
};

export default ArchivedNotifications;
