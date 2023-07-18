import React from "react";

import Link from "next/link";

export default function NavigationBar() {
  return (
    <div className="flex justify-end w-full py-2 px-5 bg-secondary-dark-50 rounded-lg">
      <Link
        href="/coupon"
        className="text-sm hover:bg-primary hover:text-secondary-dark-50 p-2 rounded-md border border-primary transition-all"
      >
        View Coupon
      </Link>
    </div>
  );
}
