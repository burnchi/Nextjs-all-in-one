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
          className="text-xl hover:text-orange-800 absolute bottom-5 right-1/2 translate-x-1/2"
        >
          Back to Home
        </Link>
      )}
    </>
  );
};

export default HomeLink;
