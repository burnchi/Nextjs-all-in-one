"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const HomeLink = () => {
  const pathname = usePathname();
  return (
    <>
      {pathname !== "/" && (
        <Link
          href="/"
          className="text-xl hover:text-orange-800 bottom-5 right-5 fixed"
        >
          Back to Home
        </Link>
      )}
    </>
  );
};

export default HomeLink;
